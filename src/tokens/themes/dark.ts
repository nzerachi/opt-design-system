/**
 * Dark Theme
 *
 * Maps all CSS custom properties to primitive color values for dark mode.
 * These values are injected into .dark by the ThemeProvider.
 *
 * Derived from Opticule globals.css .dark audit (April 2026):
 * - background: 0 0% 0% (#000000 — pure black, Opticule design spec)
 * - obackground: 0 0% 10% (#1A1A1A)
 * - foreground: 0 0% 100% (#FFFFFF)
 * - muted-light: 0 0% 15% (#262626)
 * - muted-dark: 0 0% 50% (#808080)
 * - border: 0 0% 18% (#2E2E2E)
 * - ring: 0 0% 80% (#CCCCCC)
 */

export const darkTheme = {
  // -------------------------------------------------------------------------
  // Legacy CSS vars — kept for backward compatibility
  // -------------------------------------------------------------------------
  "--background":      "0 0% 0%",      // #000000
  "--obackground":     "0 0% 10%",     // #1A1A1A
  "--foreground":      "0 0% 100%",    // #FFFFFF
  "--muted-light":     "0 0% 15%",     // #262626
  "--muted-dark":      "0 0% 50%",     // #808080
  "--destructive":     "340 100% 50%", // #FF004F
  "--border":          "0 0% 18%",     // #2E2E2E
  "--input":           "0 0% 18%",     // #2E2E2E
  "--ring":            "0 0% 80%",     // #CCCCCC
  "--radius":          "0.5rem",       // 8px

  // -------------------------------------------------------------------------
  // New semantic token vars (Phase 1.2)
  // -------------------------------------------------------------------------

  // --- Backgrounds ---
  "--bg-primary":      "0 0% 0%",      // #000000 — pure black (Opticule spec)
  "--bg-secondary":    "0 0% 7%",      // #121212 — panels
  "--bg-tertiary":     "0 0% 10%",     // #1A1A1A (obackground) — sidebar, code
  "--bg-inverse":      "0 0% 100%",    // #FFFFFF
  "--bg-card":         "0 0% 7%",      // #121212 — card bg in dark
  "--bg-popover":      "0 0% 7%",      // #121212
  "--bg-muted":        "0 0% 15%",     // #262626 (muted-light)
  "--bg-brand":        "rgba(255, 128, 0, 0.10)",
  "--bg-error":        "rgba(255, 0, 79, 0.10)",
  "--bg-warning":      "rgba(255, 128, 0, 0.10)",
  "--bg-success":      "rgba(204, 51, 255, 0.10)",
  "--bg-info":         "rgba(59, 130, 246, 0.10)",
  "--bg-glass":        "rgba(0, 0, 0, 0.50)",
  "--bg-input":        "rgba(255, 255, 255, 0.06)", // subtle white for dark inputs

  // --- Text ---
  "--text-primary":    "0 0% 100%",    // #FFFFFF
  "--text-secondary":  "0 0% 75%",     // #BFBFBF
  "--text-tertiary":   "0 0% 50%",     // #808080 (muted-dark)
  "--text-disabled":   "0 0% 40%",     // #666666
  "--text-inverse":    "0 0% 0%",      // #000000
  "--text-link":       "#d44dff",      // brand-purple-400 (lighter for dark bg)
  "--text-error":      "#ff4d88",      // folly-300 (lighter for dark)
  "--text-success":    "#d44dff",      // brand-purple lighter
  "--text-warning":    "#ffa326",      // orange-400 (lighter)
  "--text-info":       "#60a5fa",      // blue-400
  "--text-on-brand":   "#ffffff",
  "--text-brand":      "#ffa326",      // lighter orange for dark bg

  // --- Borders ---
  "--border-default":  "0 0% 18%",     // #2E2E2E
  "--border-strong":   "0 0% 30%",     // #4D4D4D
  "--border-disabled": "0 0% 18%",     // #2E2E2E
  "--border-focus":    "#ff8000",      // brand-orange (same)
  "--border-error":    "#ff004f",
  "--border-success":  "#cc33ff",
  "--border-warning":  "#ff8000",
  "--border-inverse":  "0 0% 90%",     // light border

  // --- Interactive ---
  "--interactive-primary":         "0 0% 100%",  // #FFFFFF — primary btn bg (dark mode)
  "--interactive-primary-hover":   "0 0% 90%",   // #E6E6E6
  "--interactive-primary-active":  "0 0% 85%",
  "--interactive-secondary":       "0 0% 10%",
  "--interactive-secondary-hover": "0 0% 15%",
  "--interactive-disabled":        "0 0% 40%",
  "--interactive-brand":           "#ff8000",
  "--interactive-brand-hover":     "#ffa326",

  // --- Focus ---
  "--focus-ring":   "0 0% 80%",        // #CCCCCC (--ring value)
  "--focus-shadow": "0 0 0 3px rgba(255, 128, 0, 0.40)",

  // --- Overlays ---
  "--overlay-backdrop": "rgba(0, 0, 0, 0.70)",
  "--overlay-heavy":    "rgba(0, 0, 0, 0.90)",

  // --- Shadows (dark mode — more visible on black bg) ---
  "--shadow-xs":  "0 1px 2px 0 rgba(0, 0, 0, 0.30)",
  "--shadow-sm":  "0 1px 3px 0 rgba(0, 0, 0, 0.40), 0 1px 2px -1px rgba(0, 0, 0, 0.40)",
  "--shadow-md":  "0 4px 6px -1px rgba(0, 0, 0, 0.40), 0 2px 4px -2px rgba(0, 0, 0, 0.40)",
  "--shadow-lg":  "0 10px 15px -3px rgba(0, 0, 0, 0.50), 0 4px 6px -4px rgba(0, 0, 0, 0.40)",
  "--shadow-xl":  "0 20px 25px -5px rgba(0, 0, 0, 0.50), 0 8px 10px -6px rgba(0, 0, 0, 0.40)",
  "--shadow-2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.70)",
  "--shadow-inner": "inset 0 2px 4px 0 rgba(0, 0, 0, 0.30)",

  // --- Brand (static, same in all themes) ---
  "--color-brand-purple": "#cc33ff",
  "--color-brand-folly":  "#ff004f",
  "--color-brand-orange": "#ff8000",
} as const;

export type DarkTheme = typeof darkTheme;
