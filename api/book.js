// Serverless function (Vercel). Receives a "Book a call" request from the
// BookCall widget, verifies the captcha, and emails Fernando with the
// visitor's contact info plus invisible metadata (IP, geo, user agent).

const TURNSTILE_VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
const RESEND_URL = "https://api.resend.com/emails";
const TO_EMAIL = "paviafernando@gmail.com";
const FROM_EMAIL = "Book a call <onboarding@resend.dev>";
const MAX_LEN = { name: 120, email: 200, phone: 40 };

const SUBJECTS = {
  en: "Call request",
  es: "Pedido de llamada",
  pt: "Pedido de call",
};

function isValidEmail(s) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}
function isValidPhone(s) {
  return /^[+\d][\d\s().-]{5,}$/.test(s);
}
// Strip anything that could inject headers or break out of the email body.
function clean(s, max) {
  return String(s || "")
    .replace(/[\r\n]+/g, " ")
    .trim()
    .slice(0, max);
}

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");

  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const secretKey = process.env.TURNSTILE_SECRET_KEY;
  const resendKey = process.env.RESEND_API_KEY;
  if (!secretKey || !resendKey) {
    res.status(500).json({ error: "Not configured" });
    return;
  }

  let body = req.body;
  if (typeof body === "string") {
    try {
      body = JSON.parse(body);
    } catch {
      body = {};
    }
  }

  const name = clean(body?.name, MAX_LEN.name);
  const email = clean(body?.email, MAX_LEN.email);
  const phone = clean(body?.phone, MAX_LEN.phone);
  const token = typeof body?.token === "string" ? body.token : "";
  const lang = ["en", "es", "pt"].includes(body?.lang) ? body.lang : "en";
  const tz = clean(body?.tz, 60) || "unknown";
  const slotLocal = clean(body?.slotLocal, 120);
  const slotArt = clean(body?.slotArt, 60);

  const hasEmail = email && isValidEmail(email);
  const hasPhone = phone && isValidPhone(phone);
  const emailProvidedButInvalid = email && !hasEmail;
  const phoneProvidedButInvalid = phone && !hasPhone;

  if (!name || (!hasEmail && !hasPhone) || emailProvidedButInvalid || phoneProvidedButInvalid || !token) {
    res.status(400).json({ error: "Invalid request" });
    return;
  }

  const ip =
    (req.headers["x-forwarded-for"] || "").split(",")[0].trim() || req.headers["x-real-ip"] || "unknown";

  try {
    const verifyRes = await fetch(TURNSTILE_VERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ secret: secretKey, response: token, remoteip: ip }),
    });
    const verifyData = await verifyRes.json();
    if (!verifyData.success) {
      res.status(400).json({ error: "Captcha failed" });
      return;
    }
  } catch {
    res.status(502).json({ error: "Captcha check failed" });
    return;
  }

  // Metadata invisible to the visitor, useful to spot spam and give context.
  const country = req.headers["x-vercel-ip-country"] || "unknown";
  const city = req.headers["x-vercel-ip-city"] ? decodeURIComponent(req.headers["x-vercel-ip-city"]) : "unknown";
  const userAgent = clean(req.headers["user-agent"], 300) || "unknown";
  const when = new Date().toISOString();

  const lines = [
    `Name: ${name}`,
    email ? `Email: ${email}` : null,
    phone ? `Phone: ${phone}` : null,
    "",
    `Requested slot: ${slotLocal}`,
    `Argentina time: ${slotArt}`,
    `Site language: ${lang}`,
    "",
    "--- metadata (not shown to the visitor) ---",
    `IP: ${ip}`,
    `Location: ${city}, ${country}`,
    `Time zone: ${tz}`,
    `User agent: ${userAgent}`,
    `Sent at: ${when}`,
  ].filter(Boolean);

  try {
    const emailRes = await fetch(RESEND_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        reply_to: hasEmail ? email : undefined,
        subject: `${SUBJECTS[lang]}: ${name}`,
        text: lines.join("\n"),
      }),
    });
    if (!emailRes.ok) {
      console.error("Resend error", emailRes.status, await emailRes.text());
      res.status(502).json({ error: "Send failed" });
      return;
    }
  } catch (err) {
    console.error("Handler error", err);
    res.status(502).json({ error: "Send failed" });
    return;
  }

  res.status(200).json({ ok: true });
}
