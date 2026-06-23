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
      {/* FAB button with "AI" indicator badge */}
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
                {/* Use <p> so React renders text nodes with proper whitespace */}
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

      <style>{`
        /* ── FAB ── */
        .chat-fab-wrap {
          position: fixed;
          bottom: 28px;
          right: 28px;
          z-index: 500;
        }
        .chat-fab-badge {
          position: absolute;
          top: -6px;
          right: -6px;
          z-index: 1;
          background: var(--magenta);
          color: var(--bg);
          font-family: 'Press Start 2P', monospace;
          font-size: 7px;
          padding: 2px 5px;
          line-height: 1.4;
          pointer-events: none;
          border: 2px solid var(--bg);
        }
        .chat-fab {
          width: 58px;
          height: 58px;
          background: var(--panel);
          border: var(--px) solid var(--line);
          box-shadow: 4px 4px 0 0 var(--shadow);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: bob 1.8s ease-in-out infinite;
          transition: box-shadow .08s, border-color .15s;
        }
        .chat-fab:hover {
          border-color: var(--magenta);
          box-shadow: 2px 2px 0 0 var(--shadow);
          animation: none;
          transform: translate(2px, 2px);
        }
        .chat-fab svg { image-rendering: pixelated; display: block; }
        .chat-fab-x {
          font-family: 'Press Start 2P', monospace;
          font-size: 13px;
          color: var(--muted);
        }

        /* ── PANEL ── */
        .chat-panel {
          position: fixed;
          bottom: 98px;
          right: 28px;
          z-index: 499;
          width: 340px;
          max-width: calc(100vw - 48px);
          height: 480px;
          max-height: calc(100vh - 130px);
          display: flex;
          flex-direction: column;
          background: var(--bg-2);
          animation: pageIn .25s ease both;
        }

        /* ── HEADER ── */
        .chat-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 14px;
          border-bottom: var(--px) solid var(--line);
          background: var(--panel);
          flex-shrink: 0;
        }
        .chat-header-left {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .chat-header-right {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .chat-status-dot {
          width: 8px;
          height: 8px;
          background: var(--green);
          border-radius: 0;
          animation: blink 2s steps(1) infinite;
          flex-shrink: 0;
        }
        .chat-title {
          font-family: 'Press Start 2P', monospace;
          font-size: 9px;
          color: var(--green);
        }
        .chat-ai-badge {
          font-family: 'Press Start 2P', monospace;
          font-size: 7px;
          color: var(--bg);
          background: var(--magenta);
          padding: 2px 5px;
          line-height: 1.4;
        }
        .chat-close {
          background: none;
          border: none;
          color: var(--muted);
          cursor: pointer;
          font-size: 13px;
          padding: 2px 4px;
          transition: color .12s;
          font-family: 'Press Start 2P', monospace;
        }
        .chat-close:hover { color: var(--red); }

        /* ── MESSAGES ── */
        .chat-messages {
          flex: 1;
          overflow-y: auto;
          padding: 14px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          scrollbar-width: thin;
          scrollbar-color: var(--line) transparent;
        }
        .chat-msg {
          display: flex;
          gap: 8px;
          align-items: flex-start;
        }
        .chat-msg.user {
          flex-direction: row-reverse;
        }
        .chat-avatar {
          flex-shrink: 0;
          margin-top: 4px;
        }
        .chat-avatar svg { image-rendering: pixelated; display: block; }

        /* ── BUBBLES ── */
        .chat-bubble {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 13px;
          line-height: 1.6;
          padding: 8px 12px;
          border: 2px solid var(--line);
          max-width: 82%;
          /* fix: preserve spaces and wrap correctly */
          white-space: pre-wrap;
          word-break: break-word;
          margin: 0;
        }
        .chat-msg.assistant .chat-bubble {
          background: var(--panel);
          color: var(--text);
          border-color: var(--line);
        }
        .chat-msg.user .chat-bubble {
          background: rgba(82,255,168,.08);
          color: var(--green);
          border-color: var(--green);
        }

        /* ── TYPING ── */
        .chat-typing {
          letter-spacing: 2px;
        }
        .chat-typing span {
          animation: blink 1s steps(1) infinite;
          font-size: 20px;
        }
        .chat-typing span:nth-child(2) { animation-delay: .3s; }
        .chat-typing span:nth-child(3) { animation-delay: .6s; }

        /* ── INPUT ── */
        .chat-input-row {
          display: flex;
          gap: 8px;
          padding: 10px 12px;
          border-top: var(--px) solid var(--line);
          background: var(--panel);
          flex-shrink: 0;
        }
        .chat-input {
          flex: 1;
          background: var(--bg);
          border: 2px solid var(--line);
          color: var(--text);
          font-family: 'IBM Plex Mono', monospace;
          font-size: 13px;
          padding: 8px 10px;
          outline: none;
          transition: border-color .12s;
          min-width: 0;
        }
        .chat-input:focus { border-color: var(--green); }
        .chat-input::placeholder { color: var(--muted); }
        .chat-input:disabled { opacity: .5; }
        .chat-send {
          padding: 8px 12px !important;
          font-size: 11px !important;
          box-shadow: 3px 3px 0 0 var(--shadow) !important;
          flex-shrink: 0;
        }
        .chat-send:disabled {
          opacity: .4;
          cursor: not-allowed;
          pointer-events: none;
        }
      `}</style>
    </>
  );
}
