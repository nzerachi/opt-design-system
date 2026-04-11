/**
 * Modal / Dialog Component Tokens
 *
 * Maps all visual properties of the Modal component.
 * Derived from Opticule Modal.tsx audit (April 2026).
 */

import { radii } from "../primitive/radii";
import { durations, easings } from "../primitive/motion";

export const modalTokens = {
  // --- Shape ---
  borderRadius: radii.lg,   // 8px

  // --- Backdrop ---
  backdrop: {
    background:   "rgba(0, 0, 0, 0.50)", // bg-black/50
    backdropBlur: "4px",                 // backdrop-blur-sm
    zIndex:       800,
  },

  // --- Container ---
  zIndex: 900,
  padding: "24px",          // p-6 (header, content, footer)
  maxHeight: "90vh",
  overflowY: "auto",

  // --- Sizes ---
  sizes: {
    sm: { maxWidth: "448px" },   // max-w-md
    md: { maxWidth: "512px" },   // max-w-lg — default
    lg: { maxWidth: "672px" },   // max-w-2xl
    xl: { maxWidth: "896px" },   // max-w-4xl
    full: { maxWidth: "100vw" },
  },

  // --- Background ---
  background: "hsl(var(--bg-card))",
  shadow:     "var(--shadow-2xl)",

  // --- Animation ---
  enterDuration: durations.slow,
  exitDuration:  durations.moderate,
  enterEasing:   easings.easeOut,
  exitEasing:    easings.easeIn,

  // --- Sub-components ---
  header: {
    gap:         "24px",
    padding:     "24px",
    borderBottom: "1px solid hsl(var(--border-default))",
  },
  title: {
    fontSize:   "1.5rem",   // text-2xl
    fontWeight: 700,
    color:      "hsl(var(--text-primary))",
  },
  content: {
    padding: "24px",
  },
  footer: {
    padding:   "24px",
    gap:       "12px",      // gap-3
    borderTop: "1px solid hsl(var(--border-default))",
    justify:   "flex-end",
  },
  closeButton: {
    size:    "20px",        // w-5 h-5
    padding: "4px",         // p-1
    borderRadius: radii.lg,
    hoverBackground: "hsl(var(--bg-muted))",
  },
} as const;

export type ModalTokens = typeof modalTokens;
