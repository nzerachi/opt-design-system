# Opticule Design System — Phase 0 Audit

**Date:** April 2026  

---

## 1. Project Overview

| Property | Value |
|---|---|
| Framework | React 19 + TypeScript |
| Build tool | Vite 7 (with `@vitejs/plugin-react-swc`) |
| Styling | Tailwind CSS v4 (via `@tailwindcss/vite` plugin) |
| Component primitives | Radix UI (full suite) |
| Variant management | class-variance-authority (CVA) |
| Icons | lucide-react |
| Class merging | clsx (`cn` helper) |
| Theme management | Manual localStorage + class toggle (`next-themes` installed but not wired) |
| Deployment | opticule-ds.vercel.app |
| Version | 0.1.0 |

---

## 2. File Structure

```
src/
├── App.tsx                          — Main shell with sidebar nav + section routing
├── main.tsx                         — React root entry
├── globals.css                      — Tailwind v4 config, CSS vars, font-faces
├── vite-env.d.ts
├── DESIGN_SYSTEM_GUIDE.md           — Design spec document
│
├── assets/
│   ├── wordmark.tsx                 — Opticule SVG wordmark component
│   ├── symbol.tsx                   — Opticule SVG symbol component
│   └── draft.tsx                    — Draft/WIP asset
│
├── ubuntu/                          — Self-hosted Ubuntu woff2 fonts
│   ├── ubuntu-300.woff2 / ubuntu-300italic.woff2
│   ├── ubuntu-400.woff2 / ubuntu-400italic.woff2
│   ├── ubuntu-500.woff2 / ubuntu-500italic.woff2
│   ├── ubuntu-700.woff2 / ubuntu-700italic.woff2
│   ├── ubuntu-mono-400.woff2 / ubuntu-mono-400italic.woff2
│   └── ubuntu-mono-700.woff2 / ubuntu-mono-700italic.woff2
│
├── components/
│   ├── Alert.tsx
│   ├── Badge.tsx
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Checkbox.tsx
│   ├── Input.tsx
│   ├── Modal.tsx
│   ├── Navigation.tsx
│   ├── Select.tsx
│   ├── Switch.tsx
│   ├── ThemeToggle.tsx
│   │
│   ├── ui/                          — shadcn/ui generated components (Radix-based)
│   │   ├── accordion.tsx
│   │   ├── alert-dialog.tsx
│   │   ├── alert.tsx
│   │   ├── aspect-ratio.tsx
│   │   ├── avatar.tsx
│   │   ├── badge.tsx
│   │   ├── breadcrumb.tsx
│   │   ├── button.tsx               — CVA button (shadcn variant)
│   │   ├── calendar.tsx
│   │   ├── card.tsx
│   │   ├── carousel.tsx
│   │   ├── chart.tsx
│   │   ├── checkbox.tsx
│   │   ├── collapsible.tsx
│   │   ├── command.tsx
│   │   ├── context-menu.tsx
│   │   ├── dialog.tsx
│   │   ├── drawer.tsx
│   │   ├── dropdown-menu.tsx
│   │   ├── form.tsx                 — react-hook-form integration
│   │   ├── hover-card.tsx
│   │   ├── input-otp.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── menubar.tsx
│   │   ├── navigation-menu.tsx
│   │   ├── pagination.tsx
│   │   ├── popover.tsx
│   │   ├── progress.tsx
│   │   ├── radio-group.tsx
│   │   ├── resizable.tsx
│   │   ├── scroll-area.tsx
│   │   ├── select.tsx
│   │   ├── separator.tsx
│   │   ├── sheet.tsx
│   │   ├── sidebar.tsx
│   │   ├── skeleton.tsx
│   │   ├── slider.tsx
│   │   ├── sonner.tsx
│   │   ├── switch.tsx
│   │   ├── table.tsx
│   │   ├── tabs.tsx
│   │   ├── textarea.tsx
│   │   ├── toggle.tsx
│   │   ├── toggle-group.tsx
│   │   ├── tooltip.tsx
│   │   ├── use-mobile.ts            — useIsMobile hook
│   │   └── utils.ts                 — cn() helper (clsx)
│   │
│   └── sections/                    — Documentation page sections (showcase only)
│       ├── BrandIdentitySection.tsx
│       ├── ComponentsSection.tsx
│       ├── FoundationsSection.tsx
│       ├── GovernanceSection.tsx
│       ├── PatternsSection.tsx
│       └── PrinciplesSection.tsx
```

---

## 3. Design Tokens — Exact Values

### 3.1 Brand Colors (Exact Hex)

| Token Name | Hex Value | Usage |
|---|---|---|
| `brand-purple` | `#CC33FF` | Primary brand accent, gradient start |
| `brand-folly` | `#FF004F` | Error, destructive, gradient mid |
| `brand-orange` | `#FF8000` | Warning, primary CTA accent, gradient end |
| Supporting purple | `#9B59B6` | Secondary accent |
| Brand gray | `#808080` | Neutral brand |

**Primary Brand Gradient:** `linear-gradient(45deg, #CC33FF, #FF004F, #FF8000)`

### 3.2 Semantic Colors — CSS Custom Properties (HSL format)

#### Light Mode (`:root`)
```css
--background:   0 0% 100%     /* #FFFFFF */
--obackground:  0 0% 95%      /* #F2F2F2 */
--foreground:   0 0% 0%       /* #000000 */
--muted-light:  0 0% 85%      /* #D9D9D9 */
--muted-dark:   0 0% 50%      /* #808080 */
--destructive:  340 100% 50%  /* #FF004F */
--border:       0 0% 90%      /* #E6E6E6 */
--input:        0 0% 90%      /* #E6E6E6 */
--ring:         0 0% 10%      /* #1A1A1A */
--radius:       0.5rem         /* 8px */
```

#### Dark Mode (`.dark`)
```css
--background:   0 0% 0%       /* #000000 */
--obackground:  0 0% 10%      /* #1A1A1A */
--foreground:   0 0% 100%     /* #FFFFFF */
--muted-light:  0 0% 15%      /* #262626 */
--muted-dark:   0 0% 50%      /* #808080 */
--destructive:  340 100% 50%  /* #FF004F */
--border:       0 0% 18%      /* #2E2E2E */
--input:        0 0% 18%      /* #2E2E2E */
--ring:         0 0% 80%      /* #CCCCCC */
```

### 3.3 Typography

#### Font Families
- **Sans:** `"Ubuntu", ui-sans-serif, system-ui, sans-serif`
- **Mono:** `"Ubuntu Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas`

#### Font Weights Available
| Weight | Name |
|---|---|
| 300 | Light |
| 400 | Regular |
| 500 | Medium (labeled "SemiBold" in font files) |
| 700 | Bold |

#### Type Scale (from DESIGN_SYSTEM_GUIDE.md)
| Role | Size | Weight | Line Height |
|---|---|---|---|
| H1 | 40px / 2.5rem | 700 Bold | 1.2 |
| H2 | 32px / 2rem | 700 Bold | 1.3 |
| H3 | 24px / 1.5rem | 700 Bold | 1.4 |
| H4 | 20px / 1.25rem | 500 Medium | 1.5 |
| Body | 16px / 1rem | 400 Regular | 1.6 |
| Small | 14px / 0.875rem | 400 Regular | — |
| Label | 16px / 1rem | 400 Regular | — |

### 3.4 Spacing & Sizing

- **Base unit:** Tailwind default (4px)
- **Input padding:** `px-4 py-2.5` (16px / 10px)
- **Button sizes:**
  - sm: `px-3 py-1.5` (12px / 6px)
  - md: `px-4 py-2` (16px / 8px)
  - lg: `px-6 py-3` (24px / 12px)
- **Card padding:**
  - sm: `p-4` (16px)
  - md: `p-6` (24px)
  - lg: `p-8` (32px)
- **Modal max-widths:** sm=md (448px), md=lg (512px), lg=2xl (672px), xl=4xl (896px)

### 3.5 Border Radii
- `--radius: 0.5rem` (8px) — base
- `--radius-lg`: `var(--radius)` = 8px
- `--radius-md`: `calc(var(--radius) - 2px)` = 6px
- `--radius-sm`: `calc(var(--radius) - 4px)` = 4px
- Components use `rounded-lg` (8px) consistently
- Buttons use `rounded-lg`
- Full circle: `rounded-full` (badge pill, avatar)

### 3.6 Shadows
- Card default: `shadow-sm`
- Card glass: `shadow-lg`
- Card hover: `hover:shadow-lg`
- Modal: `shadow-2xl`
- Button gradient: `shadow-lg`

### 3.7 Breakpoints (Tailwind v4 theme)
- `xs`: 520px (custom)
- `sm`: 640px (Tailwind default)
- `md`: 768px (Tailwind default)
- `md2`: 900px (custom — used for sidebar breakpoint)
- `lg`: 1024px (Tailwind default)
- `xl`: 1280px (Tailwind default)
- `2xl`: 1536px (Tailwind default)

### 3.8 Animations
- `accordion-down`: `0.2s ease-out` (height 0 → content height)
- `accordion-up`: `0.2s ease-out` (height content → 0)
- All interactive transitions: `transition-all` (Tailwind default = `150ms ease`)
- Hover opacity changes: `hover:opacity-90`, `hover:opacity-70`

### 3.9 Special Styling
- **Input focus ring:** `box-shadow: 0 0 0 4px rgba(255, 128, 0, 0.2)` + brand-orange border
- **Input caret:** `#FF8000`
- **Input accent:** `#FF8000`
- **Text selection:** `background-color: #FF800034` (orange at ~20% opacity)
- **Backdrop blur:** `backdrop-blur-sm` (modal), `backdrop-blur-md` (card glass, sidebar), `backdrop-blur-lg` (header)
- **Header:** `bg-background/25 backdrop-blur-lg border-b border-border/50` (glassmorphism)

---

## 4. Existing Components

### 4.1 Hand-Written Components (`src/components/`)

#### Button (`Button.tsx`)
- **Props:** `variant`, `size`, `className`, `children`, `disabled`, `...rest`
- **Variants:** `primary` | `secondary` | `outline` | `text` | `gradient`
- **Sizes:** `sm` | `md` | `lg`
- **States:** hover, active, disabled
- **Convenience exports:** `PrimaryButton`, `SecondaryButton`, `OutlineButton`, `TextButton`, `GradientButton`
- **Missing:** `forwardRef`, `loading` state, `as` prop, `displayName`, `xs`/`xl` sizes, `icon` support

#### Input (`Input.tsx`)
- **Props:** `label`, `error`, `success`, `helpText`, `icon`, standard HTML input attrs
- **Has:** `forwardRef`, `displayName`
- **Missing:** size variants, loading state, clear button

#### TextArea (`Input.tsx`)
- **Props:** `label`, `error`, `helpText`, standard textarea attrs
- **Has:** `forwardRef`, `displayName`

#### Select (`Select.tsx`)
- **Props:** `label`, `error`, `helpText`, `options[]`
- **Has:** `forwardRef`, `displayName`
- **Pattern:** Native `<select>` with custom chevron overlay

#### Card (`Card.tsx`)
- **Props:** `variant`, `padding`, `hover`, `className`, `children`
- **Variants:** `default` | `glass` | `outlined`
- **Padding:** `none` | `sm` | `md` | `lg`
- **Sub-components:** `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`
- **Missing:** `forwardRef`, `as` prop

#### Alert (`Alert.tsx`)
- **Props:** `variant`, `icon`, `onClose`, `className`, `children`
- **Variants:** `info` | `warning` | `error` | `success`
- **Sub-components:** `AlertTitle`, `AlertDescription`
- **Note:** "success" variant uses brand-purple (not green) — brand-specific choice

#### Badge (`Badge.tsx`)
- **Props:** `variant`, `size`, `className`, `children`
- **Variants:** `default` | `gradient` | `success` | `warning` | `error` | `outline`
- **Sizes:** `sm` | `md` | `lg`
- **Note:** `success` and `error` both use `brand-folly` — likely a bug (success should use brand-purple)

#### Checkbox (`Checkbox.tsx`)
- **Props:** `label`, `error`, standard HTML checkbox attrs
- **Has:** `forwardRef`, `displayName`, custom styled visual checkbox
- **Pattern:** Hidden native input + custom visual div with `peer` CSS trick

#### Switch (`Switch.tsx`)
- **Props:** `checked`, `onChange`, `disabled`, `label`, `className`
- **Pattern:** Controlled/uncontrolled with internal state fallback
- **Missing:** `forwardRef`, `id` for label association

#### Modal (`Modal.tsx`)
- **Props:** `isOpen`, `onClose`, `size`, `closeOnBackdropClick`, `className`, `children`
- **Sizes:** `sm` | `md` | `lg` | `xl`
- **Has:** Escape key handler, body scroll lock, backdrop click close
- **Sub-components:** `ModalHeader`, `ModalTitle`, `ModalContent`, `ModalFooter`
- **Missing:** `aria-labelledby`, `aria-describedby`, focus trap, Portal rendering

#### Navigation (`Navigation.tsx`)
- **Props:** `items[]`, `showCTA`, `ctaText`, `onCTAClick`
- **Has:** Mobile hamburger menu, responsive, theme toggle
- **Pattern:** Desktop (hidden md:flex) + mobile (md:hidden) layouts
- **Missing:** Active state styling, keyboard navigation, aria-current

#### ThemeToggle (`ThemeToggle.tsx`)
- **Pattern:** Manual localStorage + classList toggle (no next-themes usage)
- **Renders:** Custom sun/moon SVG icon using `hsl(var(--foreground))`

### 4.2 shadcn/ui Components (`src/components/ui/`)

These are standard shadcn/ui components generated with Radix UI primitives and CVA:

| Component | Radix Primitive |
|---|---|
| accordion | `@radix-ui/react-accordion` |
| alert-dialog | `@radix-ui/react-alert-dialog` |
| aspect-ratio | `@radix-ui/react-aspect-ratio` |
| avatar | `@radix-ui/react-avatar` |
| calendar | `react-day-picker` |
| carousel | `embla-carousel-react` |
| chart | `recharts` |
| checkbox | `@radix-ui/react-checkbox` |
| collapsible | `@radix-ui/react-collapsible` |
| command | `cmdk` |
| context-menu | `@radix-ui/react-context-menu` |
| dialog | `@radix-ui/react-dialog` |
| drawer | `vaul` |
| dropdown-menu | `@radix-ui/react-dropdown-menu` |
| form | `react-hook-form` + `@radix-ui/react-label` |
| hover-card | `@radix-ui/react-hover-card` |
| input-otp | `input-otp` |
| label | `@radix-ui/react-label` |
| menubar | `@radix-ui/react-menubar` |
| navigation-menu | `@radix-ui/react-navigation-menu` |
| popover | `@radix-ui/react-popover` |
| progress | `@radix-ui/react-progress` |
| radio-group | `@radix-ui/react-radio-group` |
| resizable | `react-resizable-panels` |
| scroll-area | `@radix-ui/react-scroll-area` |
| select | `@radix-ui/react-select` |
| separator | `@radix-ui/react-separator` |
| sheet | `@radix-ui/react-dialog` (re-used) |
| sidebar | custom (complex) |
| slider | `@radix-ui/react-slider` |
| sonner | `sonner` (toast) |
| switch | `@radix-ui/react-switch` |
| tabs | `@radix-ui/react-tabs` |
| toggle | `@radix-ui/react-toggle` |
| toggle-group | `@radix-ui/react-toggle-group` |
| tooltip | `@radix-ui/react-tooltip` |

---

## 5. CSS Approach

| Aspect | Approach |
|---|---|
| Primary styling | Tailwind CSS v4 utility classes |
| Theme variables | CSS custom properties in `:root` / `.dark` |
| Variant management | CVA (`class-variance-authority`) in `ui/` components |
| Class merging | `clsx` via `cn()` helper |
| No CSS Modules | — |
| No CSS-in-JS | — |
| Inline styles | None |
| Global overrides | `@layer base` in `globals.css` |
| Custom utilities | `@layer utilities` for hatch patterns |

---

## 6. Naming Conventions

### File Naming
- Hand-written components: **PascalCase** (`Button.tsx`, `Card.tsx`)
- shadcn/ui components: **kebab-case** (`alert-dialog.tsx`, `hover-card.tsx`)
- Section components: **PascalCase** (`ComponentsSection.tsx`)
- Assets: **camelCase** (`wordmark.tsx`, `symbol.tsx`)
- Hooks: **camelCase** (`use-mobile.ts`)

### Prop Naming
- All props: **camelCase**
- Event handlers: `on` prefix (`onChange`, `onClose`, `onCTAClick`)
- Boolean props: descriptive (`disabled`, `hover`, `showCTA`)

### CSS Class Naming
- Tailwind utilities only
- No BEM, no custom CSS class names

### Component Naming
- Exports: **PascalCase** named exports (no default exports in components)
- Sub-components: Compound naming (`CardHeader`, `ModalTitle`, `AlertDescription`)

---

## 7. Theme / Dark Mode

- **Mechanism:** CSS class toggle (`document.documentElement.classList.toggle('dark')`)
- **Persistence:** `localStorage.setItem('theme', 'dark'|'light')`
- **Initialization:** `useEffect` on mount checks localStorage and applies class
- **Tailwind:** `dark:` variant prefix used throughout
- **No system preference detection** (`prefers-color-scheme` not implemented)
- **next-themes installed** but not yet wired — all theme logic is manual

---

## 8. Export Patterns

- **No barrel exports** (`src/index.ts` does not exist)
- Each component file exports named exports
- `src/components/ui/utils.ts` exports `cn()` helper
- App imports directly from file paths

---

## 9. Hooks & Utilities

| Hook/Util | File | Description |
|---|---|---|
| `cn()` | `src/components/ui/utils.ts` | Class merging with clsx |
| `useIsMobile()` | `src/components/ui/use-mobile.ts` | 768px breakpoint mobile detection |

No custom hooks beyond these two exist currently.

---

## 10. Application Shell (App.tsx)

The app is a **single-page design system documentation site** with:
- Fixed glassmorphism header (logo + theme toggle)
- Collapsible sidebar navigation (desktop sticky, mobile drawer)
- URL hash-based routing (`#section/sub-section`)
- Prev/Next page navigation
- Section content components for each documentation area

**Documentation sections:**
1. Foundational Principles
2. Brand Identity (logos, wordmark, symbol, combined, usage)
3. Design Foundations (colors, typography, iconography, imagery, spacing)
4. Component Library (buttons, inputs, navigation, cards, feedback, dashboard)
5. Pattern Library (layout, functional)
6. Documentation (code, usage guidelines, contribution)

---

## 11. Dependencies Audit

### Production
```json
"@radix-ui/*"           — Full primitive set (15 packages)
"@tailwindcss/vite"     — Tailwind v4 Vite plugin
"class-variance-authority" — CVA for variant management
"clsx"                  — Class name utility
"cmdk"                  — Command menu primitive
"embla-carousel-react"  — Carousel
"input-otp"             — OTP input
"lucide-react"          — Icon library
"next-themes"           — Installed, NOT used
"react" / "react-dom"   — v19
"react-day-picker"      — Calendar/date picker
"react-hook-form"       — Form management
"react-resizable-panels" — Resizable layout
"recharts"              — Charts
"sonner"                — Toast notifications
"tailwindcss"           — v4
"vaul"                  — Drawer
```

### Dev
```json
"@types/node"           — Node types
"@types/react"          — React types
"@types/react-dom"      — React DOM types
"@vitejs/plugin-react-swc" — SWC-based React plugin
"vite"                  — v7
```

### Missing (needs adding for full expansion)
- `vitest` — unit testing
- `@testing-library/react` — component testing
- `@storybook/react-vite` — documentation
- `tsup` or Vite library mode — package build
- `zod` — schema validation
- `@types/css-font-loading-module` — font loading

---

## 12. Gaps & Issues Found

### Critical Gaps
1. **No barrel exports** — no `src/index.ts`; consumers cannot `import { Button } from 'opticule-ds'`
2. **No tests** — zero test files anywhere in the project
3. **No Storybook** — documentation is embedded in the app itself
4. **Duplicate component implementations** — Button/Card/Input exist in both `src/components/` (custom) and `src/components/ui/` (shadcn). The two are not unified.
5. **No token system** — design values are hardcoded inline as Tailwind classes, not centralized tokens

### Component Gaps
6. `Button` missing `forwardRef`, `loading` state, `as` prop, `displayName`
7. `Card` missing `forwardRef`
8. `Modal` missing focus trap, Portal rendering, `aria-labelledby`/`aria-describedby`
9. `Switch` missing `forwardRef`, `id` for label association
10. `Badge` — `success` variant incorrectly uses `brand-folly` (error color) instead of `brand-purple`
11. No `xs` or `xl` size on Button
12. No `IconButton` component
13. No `Spinner`/loading indicator
14. No `Tooltip` in hand-written layer (only shadcn)
15. No `Avatar` in hand-written layer

### CSS/Token Gaps
16. Input `bg-input-background` used as class but not defined as Tailwind theme variable (works because of CSS variable fallback but is fragile)
17. `bg-card` and `bg-card/50` referenced but `--card` CSS variable not defined in `:root` (likely inherits from shadcn defaults that aren't set)
18. `bg-switch-background` referenced in Switch but not defined anywhere
19. `text-card-foreground` referenced but `--card-foreground` not defined
20. No system `prefers-color-scheme` detection
21. No `prefers-reduced-motion` support

### Structural Gaps
22. No `ThemeProvider` component wrapping the app
23. No `src/tokens/` directory
24. No `src/hooks/` directory
25. No `src/patterns/` directory
26. `vite.config.ts` has no library mode configured
27. `package.json` has no `exports` field

---

## 13. Design Language Summary

The Opticule design language is characterized by:

1. **Glassmorphism aesthetic** — semi-transparent backgrounds with backdrop blur, especially for overlays, cards, and the header
2. **High-contrast monochromatic base** — pure black/white backgrounds with the `--background`/`--foreground` system; almost no grays in the base palette
3. **Vibrant tri-color brand accent** — the `#CC33FF → #FF004F → #FF8000` gradient is the signature visual element, used sparingly on CTAs and special elements
4. **Ubuntu typeface** — clean, humanist sans-serif; positions the brand as modern and approachable
5. **8px border radius** — consistent rounded-lg throughout, never sharp corners, never pill-shaped by default
6. **Orange as the primary interactive accent** — `#FF8000` is used for focus rings, carets, progress, and file upload buttons
7. **Minimal shadow system** — shadows used only for elevation (cards, modals), not decorative
8. **Opacity-based hierarchy** — `text-foreground/75` for secondary text, `border/50` for subtle borders — opacity rather than separate color values

---

*Phase 0 complete. Proceed to Phase 1 — Design Token System.*
