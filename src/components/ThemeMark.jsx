// A small icon that matches each theme's personality, shown next to the role index.
// Plain shapes only, no third-party logos or trademarks.

function Sun() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4.5" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1" />
    </svg>
  );
}
function Prompt() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2.5" y="4" width="19" height="16" rx="2" />
      <path d="M6.5 9.5 10 12l-3.5 2.5M12.5 15h5" />
    </svg>
  );
}
function Seal() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="9.5" r="5.5" />
      <path d="M8.5 14.2 6.8 21l5.2-3 5.2 3-1.7-6.8" />
    </svg>
  );
}
function Controller() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6.5 8.5h11a4 4 0 0 1 3.9 4.9l-.7 3a2.6 2.6 0 0 1-4.6 1L14 15.5h-4l-1.1 1.9a2.6 2.6 0 0 1-4.6-1l-.7-3a4 4 0 0 1 3.9-4.9Z" />
      <path d="M7.5 11.5v3M6 13h3M16.2 11.2h.01M18.2 13.2h.01" />
    </svg>
  );
}
function Mountains() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 19 8.5 8l3.2 5.2L14.5 10 22 19Z" />
      <path d="M11 19h2.5" opacity=".6" />
    </svg>
  );
}

const marks = {
  celeste: Sun,
  terminal: Prompt,
  editorial: Seal,
  aurora: Controller,
  pampa: Mountains,
};

export default function ThemeMark({ theme }) {
  const Mark = marks[theme];
  if (!Mark) return null;
  return (
    <span className="theme-mark" aria-hidden="true">
      <Mark />
    </span>
  );
}
