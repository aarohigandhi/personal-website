import type { Accent } from "./content";

/** Maps a project's accent name to its CSS custom-property color. */
export const accentVar: Record<Accent, string> = {
  rust: "var(--c-rust)",
  teal: "var(--c-teal)",
  plum: "var(--c-plum)",
  gold: "var(--c-gold)",
};
