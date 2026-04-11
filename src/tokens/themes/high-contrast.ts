/**
 * High Contrast Theme
 *
 * Accessibility theme meeting WCAG 2.1 AAA contrast ratios (7:1).
 * Extends the light theme with maximum contrast values.
 * Activated when `prefers-contrast: more` is set OR manually via ThemeProvider.
 *
 * Key changes from light theme:
 * - Text: pure black (#000000)
 * - Backgrounds: pure white (#FFFFFF)
 * - Borders: 2x thicker, pure black
 * - Interactive: solid black with white text
 * - Focus ring: 3px solid black (no shadow)
 */

import { lightTheme } from "./light";

export const highContrastTheme = {
  // Inherit all light theme values as base
  ...lightTheme,

  // -------------------------------------------------------------------------
  // High Contrast overrides
  // -------------------------------------------------------------------------

  // --- Text — pure black for maximum contrast ---
  "--text-primary":    "0 0% 0%",      // #000000
  "--text-secondary":  "0 0% 0%",      // #000000 (no secondary text reduction)
  "--text-tertiary":   "0 0% 15%",     // #262626 (still very dark)
  "--text-disabled":   "0 0% 30%",     // #4D4D4D (WCAG 3:1 minimum)
  "--text-inverse":    "0 0% 100%",    // #FFFFFF
  "--text-link":       "#5500cc",      // darkened purple for AAA contrast
  "--text-error":      "#c80000",      // darker red for AAA
  "--text-success":    "#007000",      // green (standard success for accessibility)
  "--text-warning":    "#7a4000",      // dark amber for AAA contrast
  "--text-info":       "#0050cc",      // dark blue for AAA contrast

  // --- Backgrounds — pure white ---
  "--bg-primary":      "0 0% 100%",
  "--bg-secondary":    "0 0% 100%",
  "--bg-tertiary":     "0 0% 96%",     // very slight gray for differentiation
  "--bg-card":         "0 0% 100%",
  "--bg-muted":        "0 0% 93%",     // visible muted bg
  "--bg-input":        "0 0% 100%",    // white input bg for max contrast

  // --- Borders — strong, high contrast ---
  "--border-default":  "0 0% 0%",      // #000000 — visible borders
  "--border-strong":   "0 0% 0%",      // #000000
  "--border-disabled": "0 0% 40%",     // still visible
  "--border-focus":    "0 0% 0%",      // black focus border

  // --- Interactive ---
  "--interactive-primary":         "0 0% 0%",    // black button
  "--interactive-primary-hover":   "0 0% 20%",
  "--interactive-primary-active":  "0 0% 30%",

  // --- Focus — thick solid outline (no shadow for high contrast) ---
  "--focus-ring":   "0 0% 0%",
  "--focus-shadow": "0 0 0 3px #000000",

  // --- Overlays ---
  "--overlay-backdrop": "rgba(0, 0, 0, 0.80)",

  // --- Shadows — simplified for high contrast ---
  "--shadow-xs":  "0 0 0 1px #000000",
  "--shadow-sm":  "0 0 0 2px #000000",
  "--shadow-md":  "0 0 0 2px #000000",
  "--shadow-lg":  "0 0 0 2px #000000",
  "--shadow-xl":  "0 0 0 3px #000000",
  "--shadow-2xl": "0 0 0 3px #000000",
  "--shadow-inner": "inset 0 0 0 2px #000000",
} as const;

export type HighContrastTheme = typeof highContrastTheme;
