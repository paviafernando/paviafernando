import { useMemo, useState } from "react";
import { profile } from "../content.js";

// Argentina has no daylight saving time, always UTC-3.
const ART_OFFSET_HOURS = 3;
const WINDOWS = [
  [8, 0, 11, 0],
  [13, 0, 16, 0],
];
const LOCALES = { en: "en-US", es: "es-AR", pt: "pt-BR" };
const ART_TZ = "America/Argentina/Buenos_Aires";

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

export default function BookCall({ t, lang }) {
  const locale = LOCALES[lang] || "en-US";
  const tz = useMemo(() => Intl.DateTimeFormat().resolvedOptions().timeZone, []);
  const days = useMemo(() => nextBusinessDays(6), []);
  const [dayIdx, setDayIdx] = useState(0);
  const slots = useMemo(() => slotsForDay(days[dayIdx]), [days, dayIdx]);
  const book = t.contact.book;

  const dayLabel = (day) => {
    const noon = new Date(Date.UTC(day.y, day.m, day.d, 12));
    return noon.toLocaleDateString(locale, { weekday: "short", day: "numeric", month: "short", timeZone: tz });
  };
  const timeLabel = (date) => date.toLocaleTimeString(locale, { hour: "numeric", minute: "2-digit", timeZone: tz });
  const artTimeLabel = (date) => date.toLocaleTimeString("es-AR", { hour: "numeric", minute: "2-digit", timeZone: ART_TZ });

  const mailHref = (date) => {
    const when = date.toLocaleString(locale, {
      weekday: "long",
      day: "numeric",
      month: "long",
      hour: "numeric",
      minute: "2-digit",
      timeZone: tz,
      timeZoneName: "short",
    });
    const body = `${book.bodyIntro}\n\n${when}\n`;
    return `mailto:${profile.email}?subject=${encodeURIComponent(book.subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="book-call no-print">
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
            onClick={() => setDayIdx(i)}
          >
            {dayLabel(day)}
          </button>
        ))}
      </div>
      <ul className="book-slots">
        {slots.map((slot, i) => (
          <li key={i}>
            <a className="book-slot" href={mailHref(slot)} title={book.requestLabel}>
              <span className="book-slot-local">{timeLabel(slot)}</span>
              <span className="book-slot-art">{artTimeLabel(slot)} ART</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
