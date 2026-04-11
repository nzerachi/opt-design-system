/**
 * Primitive Z-Index Tokens
 *
 * Layering system for the Opticule design system.
 * Values ensure overlapping elements stack correctly.
 * Derived from existing App.tsx z-index usage:
 * - Header: z-50 = 50 → mapped to `fixed` tier
 * - Sidebar: z-40 → mapped to `drawer` tier
 * - Mobile backdrop: z-40
 */

export const zIndex = {
  /** -1 — below the document flow */
  behind:         -1,
  /** 0 — default document flow */
  base:           0,
  /** 1 — raised, for elements just above base */
  raised:         1,
  /** 10 — docked elements */
  docked:         10,
  /** 100 — dropdowns, select menus */
  dropdown:       100,
  /** 200 — sticky elements (table headers, section headers) */
  sticky:         200,
  /** 300 — banners */
  banner:         300,
  /** 400 — overlays (sidebar backdrop on mobile) */
  overlay:        400,
  /** 500 — navigation drawers, sidebars */
  drawer:         500,
  /** 600 — fixed elements (bottom nav, floating buttons) */
  fixed:          600,
  /** 700 — toast/snackbar notifications */
  toast:          700,
  /** 800 — modal backdrop */
  modalBackdrop:  800,
  /** 900 — modals, dialogs, sheets */
  modal:          900,
  /** 1000 — popovers, context menus */
  popover:        1000,
  /** 1100 — tooltips */
  tooltip:        1100,
  /** 1200 — command palette / spotlight */
  spotlight:      1200,
  /** 1300 — critical system alerts (top of everything) */
  alwaysOnTop:    1300,
} as const;

export const primitiveZIndex = {
  zIndex,
} as const;

export type PrimitiveZIndex = typeof primitiveZIndex;
