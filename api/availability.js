// Serverless function (Vercel). Returns Fernando's real free slots within
// his fixed daily windows, checked against his actual Google Calendar so
// the widget never offers a time he's already booked.

import { freeBusy } from "./_lib/google.js";

const ART_OFFSET_HOURS = 3; // Argentina has no daylight saving time
const WINDOWS = [
  [8, 0, 11, 0],
  [13, 0, 16, 0],
];
const ART_TZ = "America/Argentina/Buenos_Aires";
const DAYS_AHEAD = 6;
const SLOT_MINUTES = 30;

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

function candidateSlots(day) {
  const slots = [];
  for (const [h1, min1, h2, min2] of WINDOWS) {
    let h = h1;
    let min = min1;
    while (h < h2 || (h === h2 && min < min2)) {
      slots.push(new Date(Date.UTC(day.y, day.m, day.d, h + ART_OFFSET_HOURS, min, 0)));
      min += SLOT_MINUTES;
      if (min >= 60) {
        min -= 60;
        h += 1;
      }
    }
  }
  return slots;
}

function overlapsBusy(slotStart, busy) {
  const slotEnd = new Date(slotStart.getTime() + SLOT_MINUTES * 60000);
  return busy.some((b) => {
    const bStart = new Date(b.start);
    const bEnd = new Date(b.end);
    return slotStart < bEnd && slotEnd > bStart;
  });
}

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  if (req.method !== "GET") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const calendarId = process.env.GOOGLE_CALENDAR_ID;
  if (!calendarId) {
    res.status(500).json({ error: "Not configured" });
    return;
  }

  const days = nextBusinessDays(DAYS_AHEAD);
  const timeMin = new Date(Date.UTC(days[0].y, days[0].m, days[0].d, 0, 0, 0)).toISOString();
  const lastDay = days[days.length - 1];
  const timeMax = new Date(Date.UTC(lastDay.y, lastDay.m, lastDay.d + 1, 0, 0, 0)).toISOString();

  try {
    const busy = await freeBusy(calendarId, timeMin, timeMax);
    const now = new Date();
    const result = days.map((day) => ({
      y: day.y,
      m: day.m,
      d: day.d,
      slots: candidateSlots(day)
        .filter((slot) => slot > now && !overlapsBusy(slot, busy))
        .map((slot) => slot.toISOString()),
    }));
    res.status(200).json({ days: result });
  } catch (err) {
    console.error("Availability error", err);
    res.status(502).json({ error: "Could not check availability" });
  }
}
