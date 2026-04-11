/**
 * Badge Component Tokens
 *
 * Maps all visual properties of the Badge component.
 * Derived from Opticule Badge.tsx audit (April 2026).
 *
 * Note: Bug fix applied — 'success' variant now correctly uses brand-purple
 * (not brand-folly which was incorrectly used in the original).
 */

import { radii } from "../primitive/radii";
import { fontWeights } from "../primitive/typography";

export const badgeTokens = {
  // --- Shape ---
  borderRadius: radii.lg,         // 8px — rounded-lg (matches existing code)
  fontWeight:   fontWeights.medium,

  // --- Sizes ---
  sizes: {
    sm: {
      paddingX: "8px",    // px-2
      paddingY: "2px",    // py-0.5
      fontSize: "0.75rem", // text-xs
    },
    md: {
      paddingX: "10px",   // px-2.5
      paddingY: "4px",    // py-1
      fontSize: "0.875rem", // text-sm
    },
    lg: {
      paddingX: "12px",   // px-3
      paddingY: "6px",    // py-1.5
      fontSize: "1rem",   // text-base
    },
  },

  // --- Variants ---
  variants: {
    // Black bg, white text (default)
    default: {
      background: "hsl(var(--interactive-primary))",
      color:      "hsl(var(--text-inverse))",
      border:     "none",
    },
    // Brand gradient
    gradient: {
      background: "linear-gradient(45deg, #cc33ff, #ff004f, #ff8000)",
      color:      "#ffffff",
      border:     "none",
    },
    // Success — brand-purple tint (FIXED from original which used folly)
    success: {
      background: "rgba(204, 51, 255, 0.15)",  // brand-purple/15
      color:      "#cc33ff",
      border:     "none",
    },
    // Warning — brand-orange tint
    warning: {
      background: "rgba(255, 128, 0, 0.15)",   // brand-orange/15
      color:      "#ff8000",
      border:     "none",
    },
    // Error — brand-folly tint
    error: {
      background: "rgba(255, 0, 79, 0.15)",    // brand-folly/15
      color:      "#ff004f",
      border:     "none",
    },
    // Info — blue tint
    info: {
      background: "rgba(59, 130, 246, 0.15)",
      color:      "#3b82f6",
      border:     "none",
    },
    // Outline — transparent with border
    outline: {
      background: "transparent",
      color:      "hsl(var(--text-primary))",
      border:     "2px solid hsl(var(--border-default))",
    },
    // Neutral — muted bg
    neutral: {
      background: "hsl(var(--bg-muted))",
      color:      "hsl(var(--text-secondary))",
      border:     "none",
    },
  },
} as const;

export type BadgeTokens = typeof badgeTokens;
