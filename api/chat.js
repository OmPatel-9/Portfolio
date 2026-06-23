const { portfolioContext } = require("./portfolioData");

// Strip any markdown the LLM sneaks in despite instructions
function stripMarkdown(text) {
  return text
    .replace(/#{1,6}\s*/g, "")                    // headers
    .replace(/\*\*(.+?)\*\*/gs, "$1")             // bold
    .replace(/\*(.+?)\*/gs, "$1")                 // italic
    .replace(/`{1,3}([^`]*)`{1,3}/g, "$1")        // code
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")      // links
    .replace(/^[\s]*[-*+]\s+/gm, "")              // bullet points
    .replace(/^\s*\d+\.\s+/gm, "")               // numbered lists
    .replace(/\n{3,}/g, "\n\n")                   // excessive newlines
    .trim();
}

async function readJsonBody(req) {
  if (req.body && typeof req.body === "object") {
    return req.body;
  }

  if (typeof req.body === "string") {
    return JSON.parse(req.body || "{}");
  }

  const chunks = [];
  for await (const chunk of req) {
    chunks.push(Buffer.from(chunk));
  }

  if (chunks.length === 0) {
    return {};
  }

  return JSON.parse(Buffer.concat(chunks).toString("utf8"));
}

// Vercel serverless function - POST /api/chat
// Set GROQ_API_KEY in your Vercel project environment variables.
module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  let body;
  try {
    body = await readJsonBody(req);
  } catch (err) {
    console.error("Invalid chat request body:", err);
    return res.status(400).json({ error: "Invalid JSON body" });
  }

  const { messages } = body;
  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: "Invalid messages" });
  }

  const apiKey = process.env.GROQ_API_KEY || process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "GROQ_API_KEY is not configured" });
  }

  const cleanMessages = messages
    .filter((message) => {
      return (
        message &&
        ["user", "assistant"].includes(message.role) &&
        typeof message.content === "string"
      );
    })
    .slice(-10)
    .map((message) => ({
      role: message.role,
      content: message.content.slice(0, 2000),
    }));

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: process.env.GROQ_MODEL || "llama-3.1-8b-instant",
        max_completion_tokens: 512,
        temperature: 0.4,
        messages: [
          { role: "system", content: portfolioContext },
          ...cleanMessages,
        ],
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error("Groq API error:", err);
      return res.status(502).json({ error: "Upstream API error" });
    }

    const data = await response.json();
    const raw = data.choices?.[0]?.message?.content ?? "Hmm, something went wrong on my end!";
    const reply = stripMarkdown(raw);
    return res.status(200).json({ reply });
  } catch (err) {
    console.error("Chat handler error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}

