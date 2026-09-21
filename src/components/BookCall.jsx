import { useEffect, useMemo, useRef, useState } from "react";
import { track } from "../lib/analytics.js";

// Argentina has no daylight saving time, always UTC-3.
const ART_OFFSET_HOURS = 3;
const WINDOWS = [
  [8, 0, 11, 0],
  [13, 0, 16, 0],
];
const LOCALES = { en: "en-US", es: "es-AR", pt: "pt-BR" };
const ART_TZ = "America/Argentina/Buenos_Aires";

// Public by design, same as any Turnstile/reCAPTCHA site key: safe to ship in client code.
const TURNSTILE_SITE_KEY = "0x4AAAAAAE--KnMt2oeqDFrq";

function argentinaToday() {
  const now = new Date();
  return new Date(now.toLocaleString("en-US", { timeZone: ART_TZ }));
}

function nextBusinessDays(count) {
  const days = [];
  let cursor = argentinaToday();
  while (days.length < count) {
    cursor = new Date(cursor.getFullYear(), cursor.getMonth(), cursor.getDate() + 1);
    const dow = cursor.getDay();
    if (dow !== 0 && dow !== 6) {
      days.push({ y: cursor.getFullYear(), m: cursor.getMonth(), d: cursor.getDate() });
    }
  }
  return days;
}

function slotsForDay({ y, m, d }) {
  const slots = [];
  for (const [h1, min1, h2, min2] of WINDOWS) {
    let h = h1;
    let min = min1;
    while (h < h2 || (h === h2 && min < min2)) {
      slots.push(new Date(Date.UTC(y, m, d, h + ART_OFFSET_HOURS, min, 0)));
      min += 30;
      if (min >= 60) {
        min -= 60;
        h += 1;
      }
    }
  }
  return slots;
}

function isValidEmail(s) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}
function isValidPhone(s) {
  return /^[+\d][\d\s().-]{5,}$/.test(s);
}

function Turnstile({ onToken }) {
  const [ready, setReady] = useState(typeof window !== "undefined" && !!window.turnstile);
  const boxRef = useRef(null);
  const widgetId = useRef(null);

  useEffect(() => {
    if (ready) return;
    const existing = document.querySelector('script[data-turnstile]');
    if (existing) {
      existing.addEventListener("load", () => setReady(true), { once: true });
      return;
    }
    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
    script.async = true;
    script.defer = true;
    script.setAttribute("data-turnstile", "1");
    script.onload = () => setReady(true);
    document.body.appendChild(script);
  }, [ready]);

  useEffect(() => {
    if (!ready || !boxRef.current || !window.turnstile) return;
    widgetId.current = window.turnstile.render(boxRef.current, {
      sitekey: TURNSTILE_SITE_KEY,
      callback: onToken,
      "expired-callback": () => onToken(""),
      "error-callback": () => onToken(""),
    });
    return () => {
      try {
        if (widgetId.current) window.turnstile.remove(widgetId.current);
      } catch {
        /* widget already gone */
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready]);

  return <div className="book-captcha" ref={boxRef} />;
}

export default function BookCall({ t, lang }) {
  const locale = LOCALES[lang] || "en-US";
  const tz = useMemo(() => Intl.DateTimeFormat().resolvedOptions().timeZone, []);
  const fallbackDays = useMemo(() => nextBusinessDays(6), []);
  const [remoteDays, setRemoteDays] = useState(null); // null while loading / on fetch failure
  const [dayIdx, setDayIdx] = useState(0);
  const book = t.contact.book;

  const [selected, setSelected] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [token, setToken] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | done | doneInstant | error | invalid

  const days = remoteDays || fallbackDays;
  const slots = useMemo(() => {
    const day = days[dayIdx];
    if (remoteDays) return (day.slots || []).map((iso) => new Date(iso));
    return slotsForDay(day);
  }, [days, dayIdx, remoteDays]);

  // Real availability from Fernando's calendar, once it loads, replaces the
  // fixed-window guess. Falls back silently to the fixed windows if this
  // isn't configured yet or the request fails.
  useEffect(() => {
    let cancelled = false;
    fetch("/api/availability")
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (!cancelled && data?.days) {
          setRemoteDays(data.days);
          setSelected(null);
        }
      })
      .catch(() => {
        /* keep the fallback fixed-window slots */
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const dayLabel = (day) => {
    const noon = new Date(Date.UTC(day.y, day.m, day.d, 12));
    return noon.toLocaleDateString(locale, { weekday: "short", day: "numeric", month: "short", timeZone: tz });
  };
  const timeLabel = (date) => date.toLocaleTimeString(locale, { hour: "numeric", minute: "2-digit", timeZone: tz });
  const artTimeLabel = (date) => date.toLocaleTimeString("es-AR", { hour: "numeric", minute: "2-digit", timeZone: ART_TZ });

  function pickSlot(slot) {
    setSelected(slot);
    setStatus("idle");
    track("book_call_slot_select");
  }

  async function submit(e) {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedPhone = phone.trim();
    const hasEmail = trimmedEmail && isValidEmail(trimmedEmail);
    const hasPhone = trimmedPhone && isValidPhone(trimmedPhone);
    if (!trimmedName || (!hasEmail && !hasPhone) || (trimmedEmail && !hasEmail) || (trimmedPhone && !hasPhone)) {
      setStatus("invalid");
      return;
    }
    if (!token) {
      setStatus("invalid");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          phone: trimmedPhone,
          token,
          lang,
          tz,
          slotUtc: selected.toISOString(),
          slotLocal: selected.toLocaleString(locale, {
            weekday: "long",
            day: "numeric",
            month: "long",
            hour: "numeric",
            minute: "2-digit",
            timeZone: tz,
            timeZoneName: "short",
          }),
          slotArt: `${artTimeLabel(selected)} ART`,
        }),
      });
      if (!res.ok) throw new Error("bad response");
      const data = await res.json();
      setStatus(data?.instant ? "doneInstant" : "done");
      track("book_call_submitted", { instant: !!data?.instant });
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="book-call no-print" id="book-call">
      <h3>{book.title}</h3>
      <p className="book-intro">{book.intro}</p>
      <p className="book-tz">{book.timezoneNote.replace("{tz}", tz)}</p>
      <div className="book-days" role="tablist" aria-label={book.title}>
        {days.map((day, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={dayIdx === i}
            className="book-day"
            onClick={() => {
              setDayIdx(i);
              setSelected(null);
            }}
          >
            {dayLabel(day)}
          </button>
        ))}
      </div>
      {slots.length > 0 ? (
        <ul className="book-slots">
          {slots.map((slot, i) => (
            <li key={i}>
              <button
                type="button"
                className="book-slot"
                aria-pressed={selected?.getTime() === slot.getTime()}
                onClick={() => pickSlot(slot)}
              >
                <span className="book-slot-local">{timeLabel(slot)}</span>
                <span className="book-slot-art">{artTimeLabel(slot)} ART</span>
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="book-no-slots">{book.noSlots}</p>
      )}

      {selected && status !== "done" && status !== "doneInstant" && (
        <form className="book-form" onSubmit={submit}>
          <p className="book-form-slot">{book.requestLabel}: {timeLabel(selected)} ({artTimeLabel(selected)} ART)</p>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={book.namePlaceholder}
            aria-label={book.namePlaceholder}
            maxLength={120}
          />
          <div className="book-form-row">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={book.emailPlaceholder}
              aria-label={book.emailPlaceholder}
              maxLength={200}
            />
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder={book.phonePlaceholder}
              aria-label={book.phonePlaceholder}
              maxLength={40}
            />
          </div>
          <p className="book-form-hint">{book.contactHint}</p>
          <Turnstile onToken={setToken} />
          {status === "invalid" && <p className="book-form-error">{book.formError}</p>}
          {status === "error" && <p className="book-form-error">{book.sendError}</p>}
          <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
            {status === "sending" ? book.sending : book.send}
          </button>
        </form>
      )}
      {status === "done" && <p className="book-success">{book.success}</p>}
      {status === "doneInstant" && <p className="book-success">{book.successInstant}</p>}
    </div>
  );
}
