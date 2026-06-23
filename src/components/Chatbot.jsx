// All styles for this component live in src/styles.css (/* CHATBOT */ section)
import { useState, useRef, useEffect } from "react";
import { PERSONAL } from "../config";
import { spriteSVG } from "./PixelCritters";

const WELCOME =
  "Hey! I'm Om's portfolio bot. Ask me anything about his experience, projects, or skills!";

const FAB_SPRITE = spriteSVG("wisp", 5);
const BOT_AVATAR_SPRITE = spriteSVG("wisp", 3);

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: WELCOME },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
        inputRef.current?.focus();
      }, 50);
    }
  }, [open]);

  useEffect(() => {
    if (open) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open]);

  async function send() {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg = { role: "user", content: text };
    const next = [...messages, userMsg];
    setMessages(next);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          // Skip the welcome message — it's not part of the real conversation
          messages: next
            .slice(1)
            .map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Chat request failed");

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply || "Something went wrong!" },
      ]);
    } catch (err) {
      console.error("Chatbot error:", err);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `My circuits are fried! Try emailing Om at ${PERSONAL.email}`,
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleKey(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  }

  return (
    <>
      {/* FAB button with AI badge */}
      <div className="chat-fab-wrap">
        <span className="chat-fab-badge">AI</span>
        <button
          className="chat-fab"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close chat" : "Open portfolio chat"}
          title={open ? "Close" : "Ask Om's AI assistant"}
        >
          {open
            ? <span className="chat-fab-x">✕</span>
            : <span dangerouslySetInnerHTML={{ __html: FAB_SPRITE }} />
          }
        </button>
      </div>

      {/* Chat panel */}
      {open && (
        <div className="chat-panel pixel-frame" role="dialog" aria-label="Portfolio chatbot">

          {/* Header */}
          <div className="chat-header">
            <div className="chat-header-left">
              <span className="chat-status-dot" />
              <span className="chat-title">ASK_OM_BOT<span className="blink">_</span></span>
            </div>
            <div className="chat-header-right">
              <span className="chat-ai-badge">AI</span>
              <button className="chat-close" onClick={() => setOpen(false)} aria-label="Close chat">✕</button>
            </div>
          </div>

          {/* Messages */}
          <div className="chat-messages">
            {messages.map((m, i) => (
              <div key={i} className={`chat-msg ${m.role}`}>
                {m.role === "assistant" && (
                  <span
                    className="chat-avatar"
                    dangerouslySetInnerHTML={{ __html: BOT_AVATAR_SPRITE }}
                  />
                )}
                <p className="chat-bubble">{m.content}</p>
              </div>
            ))}

            {loading && (
              <div className="chat-msg assistant">
                <span
                  className="chat-avatar"
                  dangerouslySetInnerHTML={{ __html: BOT_AVATAR_SPRITE }}
                />
                <p className="chat-bubble chat-typing">
                  <span>.</span><span>.</span><span>.</span>
                </p>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="chat-input-row">
            <input
              ref={inputRef}
              className="chat-input"
              type="text"
              placeholder="> ask me anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              disabled={loading}
              maxLength={300}
              autoComplete="off"
            />
            <button
              className="btn chat-send"
              onClick={send}
              disabled={loading || !input.trim()}
              aria-label="Send"
            >
              ▶
            </button>
          </div>
        </div>
      )}
    </>
  );
}
