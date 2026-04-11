/**
 * Semantic Spacing Tokens
 *
 * Maps meaningful names to the primitive spacing scale.
 * Used for consistent component and layout spacing.
 * Derived from Opticule audit:
 * - Input padding: px-4 py-2.5 = 16px / 10px
 * - Button sm: px-3 py-1.5; md: px-4 py-2; lg: px-6 py-3
 * - Card padding: sm=16px, md=24px, lg=32px
 * - Modal padding: 24px (p-6)
 */

import { spacing } from "../primitive/spacing";

// ---------------------------------------------------------------------------
// Component padding — internal padding for interactive elements
// ---------------------------------------------------------------------------
export const componentPadding = {
  /** xs — compact: badge, chip, tag pill */
  xs: { x: spacing[2], y: spacing[0.5] },     // 8px / 2px
  /** sm — small button, compact input */
  sm: { x: spacing[3], y: spacing[1.5] },     // 12px / 6px  (Opticule btn-sm)
  /** md — default button, input */
  md: { x: spacing[4], y: spacing[2] },       // 16px / 8px  (Opticule btn-md)
  /** lg — large button, large input */
  lg: { x: spacing[6], y: spacing[3] },       // 24px / 12px (Opticule btn-lg)
  /** xl — hero CTA */
  xl: { x: spacing[8], y: spacing[4] },       // 32px / 16px
} as const;

// ---------------------------------------------------------------------------
// Component gap — gap between elements inside a component
// ---------------------------------------------------------------------------
export const componentGap = {
  /** xs — icon to text inside button, badge gap */
  xs: spacing[1],   // 4px
  /** sm — form elements, small groups */
  sm: spacing[2],   // 8px
  /** md — standard gap, navigation items */
  md: spacing[3],   // 12px
  /** lg — card sections, form groups */
  lg: spacing[4],   // 16px
  /** xl — section spacing */
  xl: spacing[6],   // 24px
} as const;

// ---------------------------------------------------------------------------
// Card / panel internal padding
// ---------------------------------------------------------------------------
export const panelPadding = {
  /** none */
  none: spacing[0],
  /** sm — compact cards */
  sm:   spacing[4],   // 16px (Opticule card padding sm)
  /** md — default cards */
  md:   spacing[6],   // 24px (Opticule card padding md)
  /** lg — spacious cards */
  lg:   spacing[8],   // 32px (Opticule card padding lg)
  /** xl — hero sections */
  xl:   spacing[12],  // 48px
} as const;

// ---------------------------------------------------------------------------
// Form field spacing
// ---------------------------------------------------------------------------
export const formSpacing = {
  /** Space below label, above input */
  labelGap: spacing[2],        // 8px
  /** Space below input, above helper/error text */
  helperGap: spacing[1.5],     // 6px
  /** Gap between form fields */
  fieldGap:  spacing[5],       // 20px
  /** Gap between form sections */
  sectionGap: spacing[8],      // 32px
} as const;

// ---------------------------------------------------------------------------
// Layout spacing
// ---------------------------------------------------------------------------
export const layoutSpacing = {
  /** Horizontal page gutter (sides) on mobile */
  gutterMobile: spacing[4],    // 16px
  /** Horizontal page gutter on desktop */
  gutterDesktop: spacing[8],   // 32px
  /** Section top/bottom padding (sm) */
  sectionSm: spacing[10],      // 40px
  /** Section top/bottom padding (md) */
  sectionMd: spacing[16],      // 64px
  /** Section top/bottom padding (lg) */
  sectionLg: spacing[24],      // 96px
  /** Stack gap between page sections */
  pageStack: spacing[20],      // 80px
} as const;

// ---------------------------------------------------------------------------
// Navigation spacing
// ---------------------------------------------------------------------------
export const navSpacing = {
  /** Gap between nav items (desktop) */
  itemGap: spacing[8],         // 32px  (Opticule: gap-8)
  /** Icon button padding */
  iconPad: spacing[2],         // 8px   (p-2)
  /** Mobile nav item padding */
  mobileItemPad: spacing[2],   // 8px   (py-2)
} as const;

export const semanticSpacing = {
  componentPadding,
  componentGap,
  panelPadding,
  formSpacing,
  layoutSpacing,
  navSpacing,
} as const;

export type SemanticSpacing = typeof semanticSpacing;
