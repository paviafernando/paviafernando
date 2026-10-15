import { useEffect, useRef, useState } from "react";
import { languages, themes } from "./content.js";

const KEY = "pf-prefs";
const langIds = languages.map((l) => l.code);
const themeIds = themes.map((t) => t.id);

// ?v=<lang><mode><theme><details>, fixed position, see docs/URL-PARAMS.md.
// Uppercase = locked (control hidden), lowercase = preset but changeable,
// "-" = don't touch that position. Never persisted to localStorage: it's a
// link-scoped override, not a change to the visitor's own saved prefs.
const V_POSITIONS = [
  { key: "lang", map: { e: "en", s: "es", p: "pt" } },
  { key: "mode", map: { l: "light", d: "dark" } },
  { key: "theme", map: { c: "celeste", t: "terminal", e: "editorial", a: "aurora", p: "pampa" } },
  { key: "details", map: { x: "expanded", o: "collapsed" } },
];

function parseView(search) {
  let v = "";
  try {
    v = new URLSearchParams(search).get("v") || "";
  } catch {
    return null;
  }
  if (!v) return null;
  const values = {};
  const locked = {};
  for (let i = 0; i < V_POSITIONS.length && i < v.length; i++) {
    const ch = v[i];
    if (ch === "-") continue;
    const { key, map } = V_POSITIONS[i];
    const mapped = map[ch.toLowerCase()];
    if (!mapped) continue;
    values[key] = mapped;
    locked[key] = ch !== ch.toLowerCase();
  }
  return Object.keys(values).length ? { values, locked } : null;
}

function readSaved() {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(window.localStorage.getItem(KEY) || "{}");
  } catch {
    return {};
  }
}

export function usePrefs() {
  const view = typeof window !== "undefined" ? parseView(window.location.search) : null;
  const viewKeysRef = useRef(new Set(view ? Object.keys(view.values) : []));

  const [prefs, setPrefs] = useState(() => {
    const saved = readSaved();
    const systemDark =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    const base = {
      // English is the default language, whatever the browser language is.
      lang: langIds.includes(saved.lang) ? saved.lang : "en",
      theme: themeIds.includes(saved.theme) ? saved.theme : "celeste",
      mode: saved.mode === "dark" || saved.mode === "light" ? saved.mode : systemDark ? "dark" : "light",
    };
    return view ? { ...base, ...view.values } : base;
  });

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", prefs.theme);
    root.setAttribute("data-mode", prefs.mode);
    root.setAttribute("lang", prefs.lang);
    try {
      const saved = readSaved();
      const toSave = { ...saved, ...prefs };
      for (const k of viewKeysRef.current) {
        // Keep whatever was already saved for this key, not the ?v= value.
        if (k in saved) toSave[k] = saved[k];
        else delete toSave[k];
      }
      window.localStorage.setItem(KEY, JSON.stringify(toSave));
    } catch {
      /* private mode, ignore */
    }
  }, [prefs]);

  const update = (patch) => {
    for (const k of Object.keys(patch)) viewKeysRef.current.delete(k);
    setPrefs((p) => ({ ...p, ...patch }));
  };

  const locked = view ? view.locked : {};
  return [prefs, update, locked];
}
