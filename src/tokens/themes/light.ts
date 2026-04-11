/**
 * Light Theme
 *
 * Maps all CSS custom properties to primitive color values for light mode.
 * These values are injected into :root by the ThemeProvider.
 *
 * Derived from Opticule globals.css audit (April 2026):
 * - background: 0 0% 100% (#FFFFFF)
 * - obackground: 0 0% 95% (#F2F2F2)
 * - foreground: 0 0% 0% (#000000)
 * - muted-light: 0 0% 85% (#D9D9D9)
 * - muted-dark: 0 0% 50% (#808080)
 * - destructive: 340 100% 50% (#FF004F)
 * - border: 0 0% 90% (#E6E6E6)
 * - ring: 0 0% 10% (#1A1A1A)
 */

export const lightTheme = {
  // -------------------------------------------------------------------------
  // Legacy CSS vars — kept for backward compatibility with existing components
  // -------------------------------------------------------------------------
  "--background":      "0 0% 100%",    // #FFFFFF
  "--obackground":     "0 0% 95%",     // #F2F2F2
  "--foreground":      "0 0% 0%",      // #000000
  "--muted-light":     "0 0% 85%",     // #D9D9D9
  "--muted-dark":      "0 0% 50%",     // #808080
  "--destructive":     "340 100% 50%", // #FF004F
  "--border":          "0 0% 90%",     // #E6E6E6
  "--input":           "0 0% 90%",     // #E6E6E6
  "--ring":            "0 0% 10%",     // #1A1A1A
  "--radius":          "0.5rem",       // 8px

  // -------------------------------------------------------------------------
  // New semantic token vars (Phase 1.2)
  // -------------------------------------------------------------------------

  // --- Backgrounds ---
  "--bg-primary":      "0 0% 100%",    // #FFFFFF — page bg
  "--bg-secondary":    "0 0% 97%",     // #F7F7F7 — panels
  "--bg-tertiary":     "0 0% 95%",     // #F2F2F2 (obackground) — sidebar, code
  "--bg-inverse":      "0 0% 0%",      // #000000
  "--bg-card":         "0 0% 100%",    // #FFFFFF
  "--bg-popover":      "0 0% 100%",    // #FFFFFF
  "--bg-muted":        "0 0% 85%",     // #D9D9D9 (muted-light)
  "--bg-brand":        "rgba(255, 128, 0, 0.08)",
  "--bg-error":        "rgba(255, 0, 79, 0.08)",
  "--bg-warning":      "rgba(255, 128, 0, 0.08)",
  "--bg-success":      "rgba(204, 51, 255, 0.08)",
  "--bg-info":         "rgba(59, 130, 246, 0.08)",
  "--bg-glass":        "rgba(255, 255, 255, 0.50)",
  "--bg-input":        "rgba(128, 128, 128, 0.10)", // 10% gray — Opticule spec

  // --- Text ---
  "--text-primary":    "0 0% 0%",      // #000000
  "--text-secondary":  "0 0% 25%",     // #404040 (adjusted from pure /75 opacity)
  "--text-tertiary":   "0 0% 50%",     // #808080 (muted-dark)
  "--text-disabled":   "0 0% 60%",     // #999999
  "--text-inverse":    "0 0% 100%",    // #FFFFFF
  "--text-link":       "#cc33ff",      // brand-purple
  "--text-error":      "#ff004f",      // brand-folly
  "--text-success":    "#cc33ff",      // brand-purple (Opticule: purple = success)
  "--text-warning":    "#ff8000",      // brand-orange
  "--text-info":       "#3b82f6",      // blue-500
  "--text-on-brand":   "#ffffff",
  "--text-brand":      "#ff8000",      // brand-orange for branded text

  // --- Borders ---
  "--border-default":  "0 0% 90%",     // #E6E6E6
  "--border-strong":   "0 0% 70%",     // #B3B3B3
  "--border-disabled": "0 0% 85%",     // #D9D9D9
  "--border-focus":    "#ff8000",      // brand-orange (Opticule input focus spec)
  "--border-error":    "#ff004f",      // brand-folly
  "--border-success":  "#cc33ff",      // brand-purple
  "--border-warning":  "#ff8000",      // brand-orange
  "--border-inverse":  "0 0% 18%",     // dark border

  // --- Interactive ---
  "--interactive-primary":         "0 0% 0%",    // #000000 — primary btn bg (light mode)
  "--interactive-primary-hover":   "0 0% 15%",   // slightly lighter
  "--interactive-primary-active":  "0 0% 20%",   // pressed
  "--interactive-secondary":       "0 0% 97%",
  "--interactive-secondary-hover": "0 0% 95%",
  "--interactive-disabled":        "0 0% 60%",
  "--interactive-brand":           "#ff8000",
  "--interactive-brand-hover":     "#e67200",

  // --- Focus ---
  "--focus-ring":   "0 0% 10%",        // #1A1A1A (--ring value)
  "--focus-shadow": "0 0 0 3px rgba(255, 128, 0, 0.30)",

  // --- Overlays ---
  "--overlay-backdrop": "rgba(0, 0, 0, 0.50)",
  "--overlay-heavy":    "rgba(0, 0, 0, 0.80)",

  // --- Shadows (light mode) ---
  "--shadow-xs":  "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  "--shadow-sm":  "0 1px 3px 0 rgba(0, 0, 0, 0.10), 0 1px 2px -1px rgba(0, 0, 0, 0.10)",
  "--shadow-md":  "0 4px 6px -1px rgba(0, 0, 0, 0.10), 0 2px 4px -2px rgba(0, 0, 0, 0.10)",
  "--shadow-lg":  "0 10px 15px -3px rgba(0, 0, 0, 0.10), 0 4px 6px -4px rgba(0, 0, 0, 0.10)",
  "--shadow-xl":  "0 20px 25px -5px rgba(0, 0, 0, 0.10), 0 8px 10px -6px rgba(0, 0, 0, 0.10)",
  "--shadow-2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  "--shadow-inner": "inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)",

  // --- Brand (static, same in all themes) ---
  "--color-brand-purple": "#cc33ff",
  "--color-brand-folly":  "#ff004f",
  "--color-brand-orange": "#ff8000",
} as const;

export type LightTheme = typeof lightTheme;
