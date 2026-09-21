import { useEffect, useRef, useState } from "react";
import { profile } from "../content.js";

function ChatIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z" />
    </svg>
  );
}
function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

const HINT_SEEN_KEY = "pf-chat-hint-seen";

export default function AskFernando({ t, lang }) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const [hint, setHint] = useState(false);
  const [hintLeaving, setHintLeaving] = useState(false);
  const listRef = useRef(null);
  const c = t.contact.chat;

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  // A one-time, self-dismissing hint bubble: shows a few seconds after
  // arrival, then leaves on its own. Never shown again once seen.
  useEffect(() => {
    let seen = false;
    try {
      seen = localStorage.getItem(HINT_SEEN_KEY) === "1";
    } catch {
      /* private mode, just skip the hint */
    }
    if (seen) return;
    const showTimer = setTimeout(() => setHint(true), 2500);
    return () => clearTimeout(showTimer);
  }, []);

  useEffect(() => {
    if (!hint) return;
    const leaveTimer = setTimeout(() => setHintLeaving(true), 6000);
    const removeTimer = setTimeout(() => dismissHint(false), 6600);
    return () => {
      clearTimeout(leaveTimer);
      clearTimeout(removeTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hint]);

  useEffect(() => {
    if (open) dismissHint(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  function dismissHint(openChat) {
    setHint(false);
    setHintLeaving(false);
    try {
      localStorage.setItem(HINT_SEEN_KEY, "1");
    } catch {
      /* private mode, nothing to persist */
    }
    if (openChat) setOpen(true);
  }

  useEffect(() => {
    if (listRef.current) listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages, sending]);

  async function send(e) {
    e.preventDefault();
    const message = input.trim();
    if (!message || sending) return;
    setInput("");
    setError(false);
    const history = messages.map((m) => ({ role: m.role, content: m.text }));
    setMessages((m) => [...m, { role: "user", text: message }]);
    setSending(true);
    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message, lang, history }),
      });
      if (!res.ok) throw new Error("bad response");
      const data = await res.json();
      setMessages((m) => [...m, { role: "assistant", text: data.reply }]);
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="ask-fernando no-print">
      {open && (
        <div className="ask-panel" role="dialog" aria-label={c.title}>
          <div className="ask-head">
            <span>{c.title}</span>
            <button type="button" className="ask-close" aria-label={c.close} onClick={() => setOpen(false)}>
              <CloseIcon />
            </button>
          </div>
          <div className="ask-list" ref={listRef}>
            <p className="ask-intro">{c.intro}</p>
            {messages.map((m, i) => (
              <p key={i} className={`ask-msg ask-${m.role}`}>
                {m.text}
              </p>
            ))}
            {sending && <p className="ask-msg ask-assistant ask-pending">{c.sending}</p>}
            {error && (
              <p className="ask-msg ask-error">
                {c.error} <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </p>
            )}
          </div>
          <form className="ask-form" onSubmit={send}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={c.placeholder}
              aria-label={c.placeholder}
            />
            <button type="submit" className="btn btn-primary" disabled={sending || !input.trim()}>
              {c.send}
            </button>
          </form>
        </div>
      )}
      {hint && (
        <button
          type="button"
          className={`ask-hint ${hintLeaving ? "ask-hint-out" : "ask-hint-in"}`}
          onClick={() => dismissHint(true)}
        >
          {c.hint}
        </button>
      )}
      <button type="button" className="ask-fab" aria-label={c.openLabel} onClick={() => setOpen((o) => !o)}>
        <ChatIcon />
      </button>
    </div>
  );
}
