# View config via URL (`?v=`)

Lets Fernando hand out a link that opens the site already set to a specific
language, mode, theme and tech-details state, and optionally locks any of
those so the visitor can't change them. Useful for a curated link sent to a
specific recruiter or client.

Not built yet. Design agreed on 2026-09-22, scheduled to implement 2026-09-26.

## Format

A single query param, `v`, with **4 fixed positions** (no delimiters between
them, since position — not the character itself — decides what a letter
means):

```
?v=EdCo
    │││└─ position 4: tech details default
    ││└── position 3: theme
    │└─── position 2: mode
    └──── position 1: language
```

| Position | Meaning | Values | Locked (uppercase) |
| --- | --- | --- | --- |
| 1 | Language | `e` en, `s` es, `p` pt | `E` `S` `P` |
| 2 | Mode | `l` light, `d` dark | `L` `D` |
| 3 | Theme | `c` celeste, `t` terminal, `e` editorial, `a` aurora, `p` pampa | `C` `T` `E` `A` `P` |
| 4 | Tech details default | `x` expanded, `o` collapsed (today's default) | `X` `O` |

`-` in any position means "don't touch this one, use the normal default /
auto-detect". Trailing unset positions can be omitted entirely (e.g. `?v=E`
sets only the language).

Lowercase = preset but still changeable from the UI (theme picker, language
switch, etc. all stay visible). Uppercase = locked: the corresponding
control is hidden from the UI, so the visitor can't change it.

Position 3's letters are the theme **id** initials (`celeste` / `terminal`
/ `editorial` / `aurora` / `pampa` from `src/content.js`'s `themes` array),
not the display name, so this never collides with a future re-labeling of
the themes.

## Examples

- `?v=E` — force English, can't switch language. Everything else normal.
- `?v=-dC` — starts in dark mode (visitor can still switch to light), theme
  locked to celeste.
- `?v=EDCX` — fully locked snapshot: English, dark, celeste, tech details
  open, nothing changeable. The kind of link to send a specific recruiter.

## Why a query param, not a path

The site has no client-side router, so a path like `/EdCo` 404s on Vercel
without adding an SPA-fallback rewrite. `?v=EdCo` needs no infrastructure
change and is exactly as short.

## Implementation sketch

1. On load (in `usePrefs` or a new small hook), read `location.search` once,
   parse `v` by position, and use it to seed the initial prefs state instead
   of (or layered on top of) the existing `localStorage`/`prefers-color-scheme`
   defaults.
2. Track which of the 4 dimensions came in locked (uppercase). Expose that
   as part of the prefs context/hook return value, e.g. `locked: { lang,
   mode, theme, details }`.
3. In `Header.jsx`, hide the language switch / mode toggle / theme picker
   controls whose dimension is locked.
4. Tech-details default: the expand/collapse state for the "Tech details"
   toggles (`Hero.jsx`, `Skills.jsx`, `Work.jsx`, `Experience.jsx`) is
   currently local `useState(false)` per component/card. Needs a shared
   default (probably from the same prefs hook) so all of them open expanded
   when position 4 is `x`/`X`. When locked (`X`/`O`), hide the toggle button
   itself and always render the expanded/collapsed content.
5. Do **not** persist a `?v=` value to `localStorage` — it's meant to be a
   one-time link-scoped override, not a change to the visitor's own saved
   preference. A visitor without `?v=` in the URL should see their normal
   saved prefs, unaffected by anyone else's shared link.
