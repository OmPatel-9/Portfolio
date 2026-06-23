import { useState, useRef, useEffect } from "react";
import { PERSONAL } from "../config";
import { spriteSVG } from "./PixelCritters";

const WELCOME =
  "Hey! I'm Om's portfolio bot. Ask me anything about his experience, projects, or skills!";

// The wisp sprite fits the chatbot's floating helper vibe.
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
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
      inputRef.current?.focus();
    }
  }, [open, messages]);

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
          messages: next
            .filter((m) => m.role !== "assistant" || m !== messages[0]) // skip welcome for API
            .map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.error || "Chat request failed");
      }
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply || "Error reaching the bot!" },
      ]);
    } catch (err) {
      console.error("Chatbot error:", err);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "My circuits are scrambled. Try emailing Om directly at " +
            PERSONAL.email,
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
      {/* Floating toggle button */}
      <button
        className="chat-fab"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close chat" : "Open portfolio chat"}
        title={open ? "Close" : "Chat with my portfolio bot"}
      >
        {open
          ? <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 14 }}>X</span>
          : <span dangerouslySetInnerHTML={{ __html: FAB_SPRITE }} />
        }
      </button>

      {/* Chat panel */}
      {open && (
        <div className="chat-panel pixel-frame" role="dialog" aria-label="Portfolio chatbot">
          <div className="chat-header">
            <span className="chat-title">ASK_OM_BOT<span className="blink">_</span></span>
            <button className="chat-close" onClick={() => setOpen(false)}>X</button>
          </div>

          <div className="chat-messages">
            {messages.map((m, i) => (
              <div key={i} className={`chat-msg ${m.role}`}>
                {m.role === "assistant" && (
                  <span
                    className="chat-avatar"
                    dangerouslySetInnerHTML={{ __html: BOT_AVATAR_SPRITE }}
                  />
                )}
                <div className="chat-bubble">{m.content}</div>
              </div>
            ))}
            {loading && (
              <div className="chat-msg assistant">
                <span
                  className="chat-avatar"
                  dangerouslySetInnerHTML={{ __html: BOT_AVATAR_SPRITE }}
                />
                <div className="chat-bubble chat-typing">
                  <span>.</span><span>.</span><span>.</span>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

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
            />
            <button
              className="chat-send btn"
              onClick={send}
              disabled={loading || !input.trim()}
            >
              &gt;
            </button>
          </div>
        </div>
      )}

      <style>{`
        .chat-fab {
          position: fixed;
          bottom: 28px;
          right: 28px;
          z-index: 500;
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
        .chat-fab svg { image-rendering: pixelated; }

        .chat-panel {
          position: fixed;
          bottom: 92px;
          right: 28px;
          z-index: 499;
          width: 340px;
          max-width: calc(100vw - 48px);
          height: 480px;
          max-height: calc(100vh - 120px);
          display: flex;
          flex-direction: column;
          background: var(--bg-2);
          animation: pageIn .25s ease both;
        }

        .chat-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 14px;
          border-bottom: var(--px) solid var(--line);
          background: var(--panel);
        }
        .chat-title {
          font-family: 'Press Start 2P', monospace;
          font-size: 10px;
          color: var(--green);
        }
        .chat-close {
          background: none;
          border: none;
          color: var(--muted);
          cursor: pointer;
          font-size: 14px;
          padding: 2px 6px;
          transition: color .12s;
        }
        .chat-close:hover { color: var(--red); }

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
          font-size: 18px;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .chat-bubble {
          font-family: 'VT323', monospace;
          font-size: 18px;
          line-height: 1.4;
          padding: 8px 12px;
          border: 2px solid var(--line);
          max-width: 80%;
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
          text-align: right;
        }

        .chat-typing span {
          animation: blink 1s steps(1) infinite;
          font-size: 22px;
        }
        .chat-typing span:nth-child(2) { animation-delay: .3s; }
        .chat-typing span:nth-child(3) { animation-delay: .6s; }

        .chat-input-row {
          display: flex;
          gap: 8px;
          padding: 10px 12px;
          border-top: var(--px) solid var(--line);
          background: var(--panel);
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
        }
        .chat-input:focus { border-color: var(--green); }
        .chat-input::placeholder { color: var(--muted); }
        .chat-input:disabled { opacity: .5; }

        .chat-send {
          padding: 8px 14px !important;
          font-size: 13px !important;
          box-shadow: 3px 3px 0 0 var(--shadow) !important;
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

