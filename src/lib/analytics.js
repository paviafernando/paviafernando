// Thin wrapper around gtag (GA4). No-op if analytics didn't load
// (ad blockers, dev environment), never throws.
export function track(name, params = {}) {
  try {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", name, params);
    }
  } catch {
    /* analytics is best-effort, never break the page for it */
  }
}
