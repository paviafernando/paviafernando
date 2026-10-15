import { useState } from "react";
import { languages, themes } from "../content.js";

// ?v= encoding: see docs/URL-PARAMS.md
const LANG_CODE = { en: "e", es: "s", pt: "p" };
const MODE_CODE = { light: "l", dark: "d" };
const THEME_CODE = { celeste: "c", terminal: "t", editorial: "e", aurora: "a", pampa: "p" };
const DETAILS_CODE = { expanded: "x", collapsed: "o" };

function buildCode(fields) {
  const codes = [
    [fields.lang, fields.langLocked, LANG_CODE],
    [fields.mode, fields.modeLocked, MODE_CODE],
    [fields.theme, fields.themeLocked, THEME_CODE],
    [fields.details, fields.detailsLocked, DETAILS_CODE],
  ].map(([val, locked, map]) => (val ? (locked ? map[val].toUpperCase() : map[val]) : "-"));
  while (codes.length && codes[codes.length - 1] === "-") codes.pop();
  return codes.join("");
}

function Field({ label, value, onChange, locked, onLockChange, children }) {
  return (
    <div className="share-row">
      <label className="share-label">{label}</label>
      <select className="share-select" value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="">No preference</option>
        {children}
      </select>
      <label className="share-lock">
        <input type="checkbox" checked={locked} disabled={!value} onChange={(e) => onLockChange(e.target.checked)} />
        Locked
      </label>
    </div>
  );
}

export default function Share() {
  const [lang, setLang] = useState("");
  const [langLocked, setLangLocked] = useState(false);
  const [mode, setMode] = useState("");
  const [modeLocked, setModeLocked] = useState(false);
  const [theme, setTheme] = useState("");
  const [themeLocked, setThemeLocked] = useState(false);
  const [details, setDetails] = useState("");
  const [detailsLocked, setDetailsLocked] = useState(false);
  const [copied, setCopied] = useState(false);

  const code = buildCode({ lang, langLocked, mode, modeLocked, theme, themeLocked, details, detailsLocked });
  const origin = typeof window !== "undefined" ? window.location.origin : "";
  const url = `${origin}/${code ? `?v=${code}` : ""}`;
  const canShare = typeof navigator !== "undefined" && typeof navigator.share === "function";

  async function copy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard blocked (e.g. no HTTPS, old browser), user can still select the text */
    }
  }

  async function share() {
    try {
      await navigator.share({ url });
    } catch {
      /* user cancelled the share sheet */
    }
  }

  return (
    <div className="container share-page">
      <h1 className="share-title">Share a configured link</h1>
      <p className="share-hint">
        Pick what to force. "No preference" leaves that setting alone. "Locked" hides that control on the page, so
        whoever opens the link can't change it.
      </p>

      <Field label="Language" value={lang} onChange={setLang} locked={langLocked} onLockChange={setLangLocked}>
        {languages.map((l) => (
          <option key={l.code} value={l.code}>
            {l.name}
          </option>
        ))}
      </Field>

      <Field label="Mode" value={mode} onChange={setMode} locked={modeLocked} onLockChange={setModeLocked}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </Field>

      <Field label="Theme" value={theme} onChange={setTheme} locked={themeLocked} onLockChange={setThemeLocked}>
        {themes.map((th) => (
          <option key={th.id} value={th.id}>
            {th.name}
          </option>
        ))}
      </Field>

      <Field
        label="Tech details"
        value={details}
        onChange={setDetails}
        locked={detailsLocked}
        onLockChange={setDetailsLocked}
      >
        <option value="expanded">Expanded</option>
        <option value="collapsed">Collapsed</option>
      </Field>

      <div className="share-url-box">
        <code className="share-url">{url}</code>
      </div>

      <div className="share-actions">
        <button type="button" className="btn btn-primary" onClick={copy}>
          {copied ? "Copied" : "Copy link"}
        </button>
        {canShare && (
          <button type="button" className="btn" onClick={share}>
            Share
          </button>
        )}
      </div>
    </div>
  );
}
