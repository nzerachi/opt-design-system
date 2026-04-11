/**
 * Button Component Tokens
 *
 * Maps all visual properties of the Button component to semantic tokens.
 * Derived from Opticule Button.tsx audit (April 2026).
 */

import { radii } from "../primitive/radii";
import { fontWeights } from "../primitive/typography";
import { durations, easings } from "../primitive/motion";

export const buttonTokens = {
  // --- Shape & Layout ---
  borderRadius: radii.lg,          // 8px — all variants use rounded-lg
  fontWeight:   fontWeights.medium,
  transition:   `${durations.normal}ms ${easings.easeInOut}`,

  // --- Sizes ---
  sizes: {
    xs: {
      paddingX:  "10px",
      paddingY:  "6px",
      fontSize:  "0.75rem",   // 12px
      iconSize:  "14px",
      height:    "28px",
    },
    sm: {
      paddingX:  "12px",
      paddingY:  "6px",       // py-1.5
      fontSize:  "0.875rem",  // 14px
      iconSize:  "16px",
      height:    "32px",
    },
    md: {
      paddingX:  "16px",      // px-4
      paddingY:  "8px",       // py-2
      fontSize:  "1rem",      // 16px base body
      iconSize:  "18px",
      height:    "40px",
    },
    lg: {
      paddingX:  "24px",      // px-6
      paddingY:  "12px",      // py-3
      fontSize:  "1.125rem",  // 18px
      iconSize:  "20px",
      height:    "48px",
    },
    xl: {
      paddingX:  "32px",
      paddingY:  "16px",
      fontSize:  "1.25rem",   // 20px
      iconSize:  "22px",
      height:    "56px",
    },
  },

  // --- Variants ---
  variants: {
    // Black bg, white text (light) / White bg, black text (dark)
    primary: {
      background:      "hsl(var(--interactive-primary))",
      backgroundHover: "hsl(var(--interactive-primary-hover))",
      backgroundActive: "hsl(var(--interactive-primary-active))",
      color:           "hsl(var(--text-inverse))",
      border:          "transparent",
      shadow:          "none",
    },
    // Transparent bg with border
    secondary: {
      background:      "transparent",
      backgroundHover: "hsl(var(--bg-muted))",
      backgroundActive: "hsl(var(--bg-muted))",
      color:           "hsl(var(--text-primary))",
      border:          "hsl(var(--border-default))",
      shadow:          "none",
    },
    // Transparent with foreground border, fills on hover
    outline: {
      background:      "transparent",
      backgroundHover: "hsl(var(--interactive-primary))",
      backgroundActive: "hsl(var(--interactive-primary-active))",
      color:           "hsl(var(--text-primary))",
      colorHover:      "hsl(var(--text-inverse))",
      border:          "hsl(var(--text-primary))",
      shadow:          "none",
    },
    // Plain text, hover underline
    text: {
      background:      "transparent",
      backgroundHover: "transparent",
      backgroundActive: "transparent",
      color:           "hsl(var(--text-primary))",
      border:          "transparent",
      shadow:          "none",
    },
    // Brand gradient CTA
    gradient: {
      background:      "linear-gradient(45deg, #cc33ff, #ff004f, #ff8000)",
      backgroundHover: "linear-gradient(45deg, #cc33ff, #ff004f, #ff8000)",
      backgroundActive: "linear-gradient(45deg, #cc33ff, #ff004f, #ff8000)",
      color:           "#ffffff",
      border:          "transparent",
      shadow:          "0 4px 14px rgba(255, 128, 0, 0.35)",
    },
    // Destructive actions
    destructive: {
      background:      "var(--color-brand-folly)",  // #FF004F
      backgroundHover: "#d90043",
      backgroundActive: "#b30038",
      color:           "#ffffff",
      border:          "transparent",
      shadow:          "none",
    },
    // Ghost — minimal, for toolbars
    ghost: {
      background:      "transparent",
      backgroundHover: "hsl(var(--bg-muted))",
      backgroundActive: "hsl(var(--bg-muted))",
      color:           "hsl(var(--text-primary))",
      border:          "transparent",
      shadow:          "none",
    },
  },

  // --- States ---
  states: {
    disabled: {
      opacity: "0.5",
      cursor:  "not-allowed",
    },
    loading: {
      opacity: "0.75",
      cursor:  "wait",
    },
    focusRing: "0 0 0 3px rgba(255, 128, 0, 0.30)",
  },
} as const;

export type ButtonTokens = typeof buttonTokens;
