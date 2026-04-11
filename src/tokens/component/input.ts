/**
 * Input Component Tokens
 *
 * Maps all visual properties of Input, TextArea, Select components.
 * Derived from Opticule Input.tsx / Select.tsx audit (April 2026).
 */

import { radii } from "../primitive/radii";
import { durations, easings } from "../primitive/motion";
import { fontWeights } from "../primitive/typography";

export const inputTokens = {
  // --- Shape ---
  borderRadius: radii.lg,    // 8px — rounded-lg
  borderWidth:  "1px",
  transition:   `${durations.normal}ms ${easings.easeInOut}`,

  // --- Sizes ---
  sizes: {
    sm: {
      paddingX: "12px",
      paddingY: "6px",
      fontSize: "0.875rem",
      height:   "32px",
    },
    md: {
      paddingX: "16px",   // px-4
      paddingY: "10px",   // py-2.5
      fontSize: "1rem",
      height:   "44px",   // comfortable touch target
    },
    lg: {
      paddingX: "20px",
      paddingY: "14px",
      fontSize: "1.125rem",
      height:   "52px",
    },
  },

  // --- Visual tokens ---
  background:        "var(--bg-input)",
  backgroundDisabled: "hsl(var(--bg-muted))",
  border:            "hsl(var(--border-default))",
  borderFocus:       "var(--color-brand-orange)",   // #FF8000 — Opticule spec
  borderError:       "var(--color-brand-folly)",    // #FF004F
  borderSuccess:     "var(--color-brand-purple)",   // #CC33FF

  color:             "hsl(var(--text-primary))",
  colorPlaceholder:  "hsl(var(--text-tertiary))",
  colorDisabled:     "hsl(var(--text-disabled))",

  caretColor:        "var(--color-brand-orange)",   // Opticule spec: caret-color = #FF8000

  // --- Focus ring (Opticule spec: box-shadow 0 0 0 4px rgba(255,128,0,0.2)) ---
  focusRing:    "0 0 0 4px rgba(255, 128, 0, 0.20)",
  errorRing:    "0 0 0 4px rgba(255, 0, 79, 0.20)",
  successRing:  "0 0 0 4px rgba(204, 51, 255, 0.20)",

  // --- Label ---
  labelFontWeight: fontWeights.regular,
  labelColor:      "hsl(var(--text-primary))",
  labelGap:        "8px",   // mb-2

  // --- Helper / error text ---
  helperColor:  "hsl(var(--text-tertiary))",
  errorColor:   "var(--color-brand-folly)",
  helperGap:    "6px",      // mt-1.5

  // --- Adornment (icons inside input) ---
  adornmentColor:    "hsl(var(--text-secondary))",
  adornmentPaddingL: "40px",  // pl-10 when left icon present
  adornmentPaddingR: "40px",  // pr-10 when right icon present

  // --- Textarea specific ---
  textareaMinHeight: "100px",
  textareaResize:    "vertical",
} as const;

export type InputTokens = typeof inputTokens;
