/**
 * Alert Component Tokens
 *
 * Maps all visual properties of the Alert component.
 * Derived from Opticule Alert.tsx + DESIGN_SYSTEM_GUIDE.md audit (April 2026).
 *
 * Alert variants use brand colors:
 *   info    → brand gradient (purple→folly→orange)
 *   warning → brand-orange
 *   error   → brand-folly
 *   success → brand-purple (Opticule-specific: purple=success, not green)
 */

import { radii } from "../primitive/radii";

export const alertTokens = {
  // --- Shape ---
  borderRadius: radii.lg,   // 8px
  borderWidth:  "2px",      // border-2 in existing code

  // --- Padding ---
  padding:    "16px",       // p-4
  gap:        "12px",       // gap-3 between icon, content, close button
  iconSize:   "20px",       // w-5 h-5

  // --- Variants ---
  variants: {
    // Info — brand gradient tinted background
    info: {
      background: "linear-gradient(90deg, rgba(204,51,255,0.08), rgba(255,0,79,0.08), rgba(255,128,0,0.08))",
      border:     "#cc33ff",
      color:      "hsl(var(--text-primary))",
      iconColor:  "#cc33ff",
    },
    // Warning — brand-orange
    warning: {
      background: "rgba(255, 128, 0, 0.10)",  // bg-brand-orange/10
      border:     "#ff8000",
      color:      "hsl(var(--text-primary))",
      iconColor:  "#ff8000",
    },
    // Error — brand-folly
    error: {
      background: "rgba(255, 0, 79, 0.10)",   // bg-brand-folly/10
      border:     "#ff004f",
      color:      "hsl(var(--text-primary))",
      iconColor:  "#ff004f",
    },
    // Success — brand-purple (Opticule-specific)
    success: {
      background: "rgba(204, 51, 255, 0.10)", // bg-brand-purple/10
      border:     "#cc33ff",
      color:      "hsl(var(--text-primary))",
      iconColor:  "#cc33ff",
    },
  },

  // --- Title / Description ---
  title: {
    fontWeight: 700,
    gap:        "4px",   // mb-1
  },
  description: {
    fontSize: "0.875rem", // text-sm
  },

  // --- Close button ---
  closeButton: {
    size:    "16px",      // w-4 h-4
    padding: "4px",       // p-1
  },
} as const;

export type AlertTokens = typeof alertTokens;
