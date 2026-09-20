import { useEffect, useState } from "react";
import { languages, themes } from "./content.js";

const KEY = "pf-prefs";
const langIds = languages.map((l) => l.code);
const themeIds = themes.map((t) => t.id);

function readSaved() {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(window.localStorage.getItem(KEY) || "{}");
  } catch {
    return {};
  }
}

function initial() {
  const saved = readSaved();
  const systemDark =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  return {
    // English is the default language, whatever the browser language is.
    lang: langIds.includes(saved.lang) ? saved.lang : "en",
    theme: themeIds.includes(saved.theme) ? saved.theme : "celeste",
    mode: saved.mode === "dark" || saved.mode === "light" ? saved.mode : systemDark ? "dark" : "light",
  };
}

export function usePrefs() {
  const [prefs, setPrefs] = useState(initial);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", prefs.theme);
    root.setAttribute("data-mode", prefs.mode);
    root.setAttribute("lang", prefs.lang);
    try {
      window.localStorage.setItem(KEY, JSON.stringify(prefs));
    } catch {
      /* private mode, ignore */
    }
  }, [prefs]);

  const update = (patch) => setPrefs((p) => ({ ...p, ...patch }));
  return [prefs, update];
}
