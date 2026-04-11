/**
 * Semantic Typography Tokens
 *
 * Combines font-size, font-weight, line-height, and letter-spacing into
 * named text styles that match the Opticule type scale.
 *
 * All values are derived from the Opticule design guide (audited April 2026).
 */

import {
  fontFamilies,
  fontWeights,
  fontSizes,
  lineHeights,
  letterSpacings,
} from "../primitive/typography";

export interface TypographyStyle {
  fontFamily:    string;
  fontSize:      string;
  fontWeight:    number;
  lineHeight:    string;
  letterSpacing: string;
}

// ---------------------------------------------------------------------------
// Display — for hero sections, splash text
// ---------------------------------------------------------------------------
export const displayStyles = {
  "2xl": {
    fontFamily:    fontFamilies.sans,
    fontSize:      fontSizes["9xl"],  // 96px
    fontWeight:    fontWeights.bold,
    lineHeight:    lineHeights.tighter,
    letterSpacing: letterSpacings.tightest,
  },
  xl: {
    fontFamily:    fontFamilies.sans,
    fontSize:      fontSizes["8xl"],  // 72px
    fontWeight:    fontWeights.bold,
    lineHeight:    lineHeights.tighter,
    letterSpacing: letterSpacings.tighter,
  },
  lg: {
    fontFamily:    fontFamilies.sans,
    fontSize:      fontSizes["7xl"],  // 60px
    fontWeight:    fontWeights.bold,
    lineHeight:    lineHeights.tight,
    letterSpacing: letterSpacings.tight,
  },
  md: {
    fontFamily:    fontFamilies.sans,
    fontSize:      fontSizes["6xl"],  // 48px
    fontWeight:    fontWeights.bold,
    lineHeight:    lineHeights.tight,
    letterSpacing: letterSpacings.tight,
  },
  sm: {
    fontFamily:    fontFamilies.sans,
    fontSize:      fontSizes["5xl"],  // 40px — Opticule H1
    fontWeight:    fontWeights.bold,
    lineHeight:    lineHeights.tight,  // 1.2 per spec
    letterSpacing: letterSpacings.tight,
  },
  xs: {
    fontFamily:    fontFamilies.sans,
    fontSize:      fontSizes["4xl"],  // 32px — Opticule H2
    fontWeight:    fontWeights.bold,
    lineHeight:    lineHeights.h2,    // 1.3 per spec
    letterSpacing: letterSpacings.tight,
  },
} as const satisfies Record<string, TypographyStyle>;

// ---------------------------------------------------------------------------
// Heading — for section titles and content headings
// ---------------------------------------------------------------------------
export const headingStyles = {
  /** H1 equivalent — 40px bold */
  xl: {
    fontFamily:    fontFamilies.sans,
    fontSize:      fontSizes["5xl"],  // 40px
    fontWeight:    fontWeights.bold,
    lineHeight:    lineHeights.tight,  // 1.2
    letterSpacing: letterSpacings.tight,
  },
  /** H2 equivalent — 32px bold */
  lg: {
    fontFamily:    fontFamilies.sans,
    fontSize:      fontSizes["4xl"],  // 32px
    fontWeight:    fontWeights.bold,
    lineHeight:    lineHeights.h2,    // 1.3
    letterSpacing: letterSpacings.tight,
  },
  /** H3 equivalent — 24px bold */
  md: {
    fontFamily:    fontFamilies.sans,
    fontSize:      fontSizes["2xl"],  // 24px
    fontWeight:    fontWeights.bold,
    lineHeight:    lineHeights.h3,    // 1.4
    letterSpacing: letterSpacings.normal,
  },
  /** H4 equivalent — 20px medium */
  sm: {
    fontFamily:    fontFamilies.sans,
    fontSize:      fontSizes.xl,      // 20px
    fontWeight:    fontWeights.medium,
    lineHeight:    lineHeights.normal, // 1.5
    letterSpacing: letterSpacings.normal,
  },
  /** H5 equivalent — 18px medium */
  xs: {
    fontFamily:    fontFamilies.sans,
    fontSize:      fontSizes.lg,      // 18px
    fontWeight:    fontWeights.medium,
    lineHeight:    lineHeights.normal,
    letterSpacing: letterSpacings.normal,
  },
} as const satisfies Record<string, TypographyStyle>;

// ---------------------------------------------------------------------------
// Body — for paragraphs, descriptions, content
// ---------------------------------------------------------------------------
export const bodyStyles = {
  /** Extra large body — intro/lead paragraphs */
  xl: {
    fontFamily:    fontFamilies.sans,
    fontSize:      fontSizes.lg,      // 18px
    fontWeight:    fontWeights.regular,
    lineHeight:    lineHeights.relaxed, // 1.6
    letterSpacing: letterSpacings.normal,
  },
  /** Large body — secondary lead */
  lg: {
    fontFamily:    fontFamilies.sans,
    fontSize:      fontSizes.md,      // 16px — Opticule base body
    fontWeight:    fontWeights.regular,
    lineHeight:    lineHeights.relaxed, // 1.6 per spec
    letterSpacing: letterSpacings.normal,
  },
  /** Standard body — default reading text */
  md: {
    fontFamily:    fontFamilies.sans,
    fontSize:      fontSizes.md,      // 16px
    fontWeight:    fontWeights.regular,
    lineHeight:    lineHeights.relaxed,
    letterSpacing: letterSpacings.normal,
  },
  /** Small body — secondary content */
  sm: {
    fontFamily:    fontFamilies.sans,
    fontSize:      fontSizes.sm,      // 14px — Opticule "small"
    fontWeight:    fontWeights.regular,
    lineHeight:    lineHeights.normal,
    letterSpacing: letterSpacings.normal,
  },
  /** Extra small body — fine print */
  xs: {
    fontFamily:    fontFamilies.sans,
    fontSize:      fontSizes.xs,      // 12px
    fontWeight:    fontWeights.regular,
    lineHeight:    lineHeights.normal,
    letterSpacing: letterSpacings.normal,
  },
} as const satisfies Record<string, TypographyStyle>;

// ---------------------------------------------------------------------------
// Label — for form labels, button text, badges
// ---------------------------------------------------------------------------
export const labelStyles = {
  lg: {
    fontFamily:    fontFamilies.sans,
    fontSize:      fontSizes.md,      // 16px — Opticule label spec
    fontWeight:    fontWeights.medium,
    lineHeight:    lineHeights.normal,
    letterSpacing: letterSpacings.normal,
  },
  md: {
    fontFamily:    fontFamilies.sans,
    fontSize:      fontSizes.sm,      // 14px
    fontWeight:    fontWeights.medium,
    lineHeight:    lineHeights.normal,
    letterSpacing: letterSpacings.normal,
  },
  sm: {
    fontFamily:    fontFamilies.sans,
    fontSize:      fontSizes.xs,      // 12px
    fontWeight:    fontWeights.medium,
    lineHeight:    lineHeights.normal,
    letterSpacing: letterSpacings.wide,
  },
} as const satisfies Record<string, TypographyStyle>;

// ---------------------------------------------------------------------------
// Special — captions, overlines, code
// ---------------------------------------------------------------------------
export const captionStyle: TypographyStyle = {
  fontFamily:    fontFamilies.sans,
  fontSize:      fontSizes.xs,        // 12px
  fontWeight:    fontWeights.regular,
  lineHeight:    lineHeights.normal,
  letterSpacing: letterSpacings.normal,
};

export const overlineStyle: TypographyStyle = {
  fontFamily:    fontFamilies.sans,
  fontSize:      fontSizes.xs,        // 12px
  fontWeight:    fontWeights.medium,
  lineHeight:    lineHeights.normal,
  letterSpacing: letterSpacings.widest, // 0.1em
};

export const codeLg: TypographyStyle = {
  fontFamily:    fontFamilies.mono,
  fontSize:      fontSizes.md,        // 16px
  fontWeight:    fontWeights.regular,
  lineHeight:    lineHeights.relaxed,
  letterSpacing: letterSpacings.normal,
};

export const codeMd: TypographyStyle = {
  fontFamily:    fontFamilies.mono,
  fontSize:      fontSizes.sm,        // 14px
  fontWeight:    fontWeights.regular,
  lineHeight:    lineHeights.relaxed,
  letterSpacing: letterSpacings.normal,
};

export const codeSm: TypographyStyle = {
  fontFamily:    fontFamilies.mono,
  fontSize:      fontSizes.xs,        // 12px
  fontWeight:    fontWeights.regular,
  lineHeight:    lineHeights.normal,
  letterSpacing: letterSpacings.normal,
};

// Consolidated export
export const semanticTypography = {
  display: displayStyles,
  heading: headingStyles,
  body:    bodyStyles,
  label:   labelStyles,
  caption: captionStyle,
  overline: overlineStyle,
  code: {
    lg: codeLg,
    md: codeMd,
    sm: codeSm,
  },
} as const;

export type SemanticTypography = typeof semanticTypography;
