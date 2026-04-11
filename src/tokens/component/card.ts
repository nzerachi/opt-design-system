/**
 * Card Component Tokens
 *
 * Maps all visual properties of the Card component.
 * Derived from Opticule Card.tsx + DESIGN_SYSTEM_GUIDE.md audit (April 2026).
 */

import { radii } from "../primitive/radii";
import { durations, easings } from "../primitive/motion";

export const cardTokens = {
  // --- Shape ---
  borderRadius: radii.lg,     // 8px — rounded-lg
  transition:   `${durations.normal}ms ${easings.easeInOut}`,

  // --- Padding variants ---
  padding: {
    none: "0px",
    sm:   "16px",   // p-4
    md:   "24px",   // p-6 — default
    lg:   "32px",   // p-8
    xl:   "48px",   // p-12
  },

  // --- Variants ---
  variants: {
    // Standard card — bg-card border border-border shadow-sm
    default: {
      background:   "hsl(var(--bg-card))",
      border:       "1px solid hsl(var(--border-default))",
      shadow:       "var(--shadow-sm)",
      backdropBlur: "none",
    },
    // Glass card — bg-card/50 backdrop-blur-md border border-border/50 shadow-lg
    glass: {
      background:   "var(--bg-glass)",
      border:       "1px solid rgba(0, 0, 0, 0.06)",
      shadow:       "var(--shadow-lg)",
      backdropBlur: "12px",
    },
    // Outlined — transparent bg, 2px border (from Card.tsx: border-2)
    outlined: {
      background:   "transparent",
      border:       "2px solid hsl(var(--border-default))",
      shadow:       "none",
      backdropBlur: "none",
    },
    // Elevated — no border, higher shadow
    elevated: {
      background:   "hsl(var(--bg-card))",
      border:       "none",
      shadow:       "var(--shadow-md)",
      backdropBlur: "none",
    },
    // Interactive / hoverable — gains lift effect
    interactive: {
      background:      "hsl(var(--bg-card))",
      border:          "1px solid hsl(var(--border-default))",
      shadow:          "var(--shadow-sm)",
      shadowHover:     "var(--shadow-lg)",
      transformHover:  "translateY(-4px)",
      backdropBlur:    "none",
    },
  },

  // --- Sub-component tokens ---
  header: {
    gap: "16px",   // mb-4
  },
  title: {
    fontSize:   "1.25rem",  // text-xl
    fontWeight: 700,
    color:      "hsl(var(--text-primary))",
  },
  description: {
    fontSize: "0.875rem",   // text-sm
    color:    "hsl(var(--text-secondary))",
    gap:      "4px",        // mt-1
  },
  footer: {
    gap:         "16px",   // mt-4 pt-4
    borderTop:   "1px solid hsl(var(--border-default))",
  },
} as const;

export type CardTokens = typeof cardTokens;
