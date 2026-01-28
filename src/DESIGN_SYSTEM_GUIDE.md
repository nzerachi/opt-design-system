# Opticule Design System Guide

## Overview

The Opticule Design System is a comprehensive blueprint for building consistent, accessible, and beautiful interfaces for eye care products and services. It embodies modern glassmorphism design with the Ubuntu font family, creating a trustworthy yet vibrant brand experience.

## Brand Identity

### Tagline

**"Your trusted partner for eye care"**

### Brand Values

- **Trust**: Reliable and professional in all interactions
- **Care**: Empathetic and helpful to customers
- **Expertise**: Knowledge-driven approach to eye health
- **Clarity**: Clear communication and visual design

### Voice & Tone

- Friendly and professional
- Reassuring without being patronizing
- Educational and helpful
- Use clear, actionable language (e.g., "Get started", "Protect your vision")

## Visual Style

### Design Philosophy

- **Modern Minimalism**: Clean layouts with purposeful whitespace
- **Glassmorphism**: Semi-transparent elements with backdrop blur
- **Accessibility-First**: WCAG AA compliant with proper contrast ratios
- **Responsive**: Adapts seamlessly across devices

## Color System

### Brand Colors

#### Primary Accent (Use Sparingly)

- **Gradient**: `linear-gradient(45deg, #CC33FF, #FF004F, #FF8000)`
  - From: purple `#CC33FF`
  - Via: Magenta `#FF004F`
  - To: Orange `#FF8000`
- Usage: CTAs, highlights, special emphasis

#### Secondary Brand Colors

- **Purple**: `#9B59B6` - Supporting accent
- **Gray**: `#808080` - Brand neutral

### Neutral Palette

#### Light Theme

- **Background**: `#FFFFFF`
- **Foreground**: `#000000`
- **Muted**: `rgba(128, 128, 128, 0.1)`
- **Border**: `rgba(0, 0, 0, 0.1)`

#### Dark Theme

- **Background**: `#121212` (not pure black for comfort)
- **Foreground**: `#F5F5F5` (off-white for readability)
- **Muted**: `rgba(255, 255, 255, 0.1)`
- **Border**: `rgba(255, 255, 255, 0.1)`

### Color Usage Guidelines

- Primary actions use black (light mode) or white (dark mode)
- Secondary actions use outlined styles
- Accent gradient reserved for major CTAs
- Never use pure #000000 or #FFFFFF except for primary elements
- Maintain 4.5:1 contrast ratio for text
- Use opacity variations for hierarchy

## Typography

### Font Family

**Ubuntu** - Modern, approachable, and highly legible

### Type Scale

#### Headings

- **H1**: 40px / 2.5rem, Ubuntu Bold, line-height: 1.2
- **H2**: 32px / 2rem, Ubuntu Bold, line-height: 1.3
- **H3**: 24px / 1.5rem, Ubuntu Bold, line-height: 1.4
- **H4**: 20px / 1.25rem, Ubuntu Medium, line-height: 1.5

#### Body

- **Body**: 16px / 1rem, Ubuntu Regular, line-height: 1.6
- **Small**: 14px / 0.875rem, Ubuntu Regular
- **Label**: 16px / 1rem, Ubuntu Regular

#### Weights

- **Regular**: 400 (body text, labels)
- **Medium**: 500 (buttons, emphasized text)
- **Bold**: 700 (headings, important info)
- **Italic**: Available for all weights

### Typography Best Practices

- Use bold for all headings
- Maintain consistent line heights for readability
- Don't manually set font sizes; use semantic HTML
- Respect the type scale for visual hierarchy

## Components

### Buttons

#### Variants

1. **Primary**: Solid background, high contrast
   - Light: Black bg, white text
   - Dark: White bg, black text
   - Usage: Main actions, form submissions

2. **Secondary**: Outlined style
   - Transparent bg with border
   - Usage: Alternative actions, cancel buttons

3. **Outline**: Bordered with hover fill
   - Usage: Tertiary actions

4. **Text**: Plain text with hover underline
   - Usage: Low-emphasis actions, links

5. **Gradient**: Brand gradient background
   - Usage: Premium CTAs, special promotions

#### Sizes

- **Small**: `px-3 py-1.5` - Compact spaces
- **Medium**: `px-4 py-2` - Standard
- **Large**: `px-6 py-3` - Hero sections

#### States

- **Hover**: Reduced opacity or color shift
- **Active**: Further reduced opacity
- **Disabled**: 50% opacity, cursor not-allowed
- **Focus**: 2px ring in brand accent

### Forms & Inputs

#### Input Fields

- **Background**: `rgba(128, 128, 128, 0.1)` - 10% opacity gray
- **Border**: Subtle, rounded (8px)
- **Focus**: Ring in accent color gradient
- **Padding**: 16px (comfortable touch targets)

#### Labels

- Position: Above input field
- Font: Ubuntu Regular
- Required indicators: Use asterisk (\*)

#### Validation

- **Error**: Red/magenta border and text `#FF004F`
- **Success**: Green indicator
- **Icons**: Show error/success icons inline
- **Messages**: Display below field

### Cards

#### Variants

1. **Default**: White (light) or dark gray `#1E1E1E` (dark) with shadow
2. **Glass**: Semi-transparent with backdrop blur
3. **Outlined**: Transparent with 2px border

#### Structure

- **Padding**: 16px (sm), 24px (md), 32px (lg)
- **Border Radius**: 8px
- **Shadow**: Subtle elevation
- **Hover**: Lift effect with increased shadow (optional)

### Modals

#### Behavior

- **Backdrop**: Semi-transparent black `rgba(0, 0, 0, 0.5)` with blur
- **Dismissal**: Close button, Escape key, backdrop click
- **Focus Trap**: Keep keyboard focus within modal
- **Scroll**: Body scroll locked when open

#### Structure

- **Header**: Title + close button
- **Content**: Main body with padding
- **Footer**: Actions aligned right

### Alerts & Notifications

#### Types

1. **Info**: Gradient background (brand colors)
2. **Warning**: Orange background `#FF8000`
3. **Error**: Magenta background `#FF004F`
4. **Success**: purple background `#CC33FF`

#### Elements

- Icon indicating type
- Title (optional)
- Description text
- Close button (optional)
- Rounded corners (8px)

### Navigation

#### Desktop Header

- **Logo**: Left-aligned
- **Menu Links**: Center
- **Actions**: Right (search, account, cart)
- **CTA Button**: Prominent on right
- **Height**: 64-80px

#### Mobile

- **Hamburger Menu**: Slides in from side or expands
- **Touch Targets**: Minimum 44x44px
- **Theme Toggle**: Always accessible

## Imagery & Icons

### Photography

- **Style**: Professional, friendly, diverse
- **Subjects**: People wearing glasses, eye care scenarios
- **Tone**: Positive and approachable
- **Resolution**: High-quality, optimized for web

### Illustrations

- **Style**: Clean, slightly abstract
- **Colors**: Use brand palette
- **Examples**: Light spectrum arcs, eye science diagrams
- **Clarity**: Simple, easy to understand

### Icons

- **Style**: Line icons (lucide-react)
- **Size**: 16px, 20px, 24px, 32px
- **Color**: Inherits from parent or uses brand colors
- **Consistency**: Single style throughout

## Dark & Light Themes

### Implementation

- Use CSS custom properties
- Tailwind `dark:` variant for theme-specific styles
- Store preference in localStorage
- Provide toggle in header

### Color Adjustments

- Light mode: White backgrounds, black text
- Dark mode: Dark gray backgrounds `#121212`, off-white text `#F5F5F5`
- Maintain contrast ratios in both themes
- Accent colors remain consistent

## Accessibility

### Standards

- **WCAG 2.1 Level AA** compliance
- Minimum contrast ratio 4.5:1 for text
- Minimum contrast ratio 3:1 for UI elements

### Keyboard Navigation

- All interactive elements accessible via Tab
- Focus indicators visible (ring style)
- Logical tab order
- Escape to close modals/dropdowns

### Screen Readers

- Semantic HTML (`nav`, `main`, `button`, `label`)
- ARIA labels where needed
- Alternative text for images
- Form field associations

### Touch Targets

- Minimum 44x44px for mobile
- Adequate spacing between elements
- Hover states for desktop, active states for mobile

## Code Implementation

### Design Tokens (CSS Variables)

\`\`\`css
:root {
/_ Brand Colors _/
--brand-purple: #CC33FF;
--brand-folly: #FF004F;
--brand-orange: #FF8000;
--brand-purple: #9B59B6;
--brand-gray: #808080;

/_ Neutrals _/
--neutral-black: #000000;
--neutral-white: #ffffff;
--neutral-dark: #121212;
--neutral-light: #F5F5F5;

/_ Semantic _/
--background: #ffffff;
--foreground: #000000;
--border: rgba(0, 0, 0, 0.1);
--input-background: rgba(128, 128, 128, 0.1);
}
\`\`\`

### Tailwind Utilities

\`\`\`tsx
// Brand colors

<div className="bg-brand-purple text-white">
<div className="border-brand-folly">

// Gradient

<div className="bg-gradient-to-r from-brand-purple via-brand-folly to-brand-orange">

// Theme-aware

<div className="bg-background text-foreground">
<div className="dark:bg-neutral-dark dark:text-neutral-light">
\`\`\`

### Component Example

\`\`\`tsx
import { Button } from './components/Button';

<Button variant="primary" size="md" onClick={handleClick}>
  Get Started
</Button>
\`\`\`

## Best Practices

### Do's ✅

- Use the Ubuntu font family consistently
- Maintain generous whitespace
- Apply glassmorphism effects appropriately
- Ensure proper color contrast
- Test with keyboard navigation
- Provide clear focus indicators
- Use semantic HTML
- Keep touch targets large enough

### Don'ts ❌

- Don't overuse the accent gradient
- Don't use pure black/white excessively
- Don't reduce font sizes below 14px
- Don't omit focus styles
- Don't rely on color alone to convey information
- Don't create custom components without accessibility

## Resources

### Component Library

- All components in `/components` directory
- TypeScript types included
- Props documentation via JSDoc
- Storybook examples (future)

### Tools

- Tailwind CSS v4
- React with TypeScript
- Lucide React (icons)
- CSS custom properties

## Support

For questions about implementation or design decisions, refer to this guide first. When creating new components or patterns:

1. Check if existing components can be composed
2. Follow established patterns
3. Maintain accessibility standards
4. Document new patterns
5. Update this guide as needed

---

**Version**: 1.2.4  
**Last Updated**: January 2026  
**Maintained By**: Opticule Design Team
