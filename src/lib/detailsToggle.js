import { useState } from "react";

// Shared "Tech details" expand/collapse state for Hero/Skills/Work/Experience.
// defaultOpen/locked come from the ?v= view config (see docs/URL-PARAMS.md).
// When locked, every item renders expanded and toggling is disabled; callers
// should also hide the toggle button itself in that case.
export function useDetailsToggle(ids, defaultOpen, locked) {
  const [open, setOpen] = useState(() => (defaultOpen ? new Set(ids) : new Set()));
  const isOpen = (id) => locked || open.has(id);
  const toggle = (id) => {
    if (locked) return;
    setOpen((cur) => {
      const next = new Set(cur);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };
  return { isOpen, toggle };
}
