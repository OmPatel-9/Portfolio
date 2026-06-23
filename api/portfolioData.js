// Auto-generated from portfolio.data.cjs — no manual editing needed.
// Update portfolio.data.cjs at the project root and the chatbot picks it up automatically.

const data = require("../portfolio.data.cjs");

const strip = (s) => s.replace(/<[^>]+>/g, ""); // strip HTML tags

function buildContext(d) {
  const { PERSONAL, ABOUT, EXPERIENCE, PROJECTS, SKILLS, RESUME_SKILLS, CONTACT, HERO } = d;

  const experience = EXPERIENCE.map((j) =>
    `- ${j.role} at ${strip(j.org)} (${j.date})\n` +
    j.bullets.map((b) => `  * ${strip(b)}`).join("\n")
  ).join("\n\n");

  const projects = PROJECTS.map((p) =>
    `- ${p.name} (${p.date}): ${p.desc}\n  Stack: ${p.chips.join(", ")}`
  ).join("\n\n");

  const skills = SKILLS.map((g) =>
    `${g.heading}: ${g.chips.join(", ")}`
  ).join("\n");

  const roles = HERO.roles.map((r) => `- ${strip(r)}`).join("\n");

  return `You are the portfolio assistant for ${PERSONAL.name}.
Answer questions about ${PERSONAL.name} based only on the information below.
Keep answers concise, warm, and conversational — 2 to 4 sentences max.
Do NOT use markdown formatting: no asterisks, no hashes, no bullet symbols, no backticks, no bold, no numbered lists.
Write in plain sentences only.
If a question is outside this information or you are unsure, give a short, light-hearted response (one or two sentences, can be mildly funny) and suggest reaching out via email (${PERSONAL.email}) or LinkedIn (${PERSONAL.linkedinDisplay}).
Never make up facts.

=== ABOUT ===
${ABOUT.paragraphs.map(strip).join(" ")}

=== CURRENT ROLES ===
${roles}

=== CONTACT ===
Email: ${PERSONAL.email}
LinkedIn: ${PERSONAL.linkedin}
Phone: ${PERSONAL.phone}

=== EDUCATION ===
${PERSONAL.education}

=== EXPERIENCE ===
${experience}

=== PROJECTS ===
${projects}

=== SKILLS ===
${skills}

=== OPEN TO ===
${CONTACT.blurb}`;
}

module.exports = { portfolioContext: buildContext(data) };
