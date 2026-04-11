import {
  PageHeader,
  DocSection,
  DemoBlock,
  UsageBlock,
  AccessibilitySection,
  A11yPoint,
  IC,
  CodeBlock,
  PropsTable,
  AnatomyList,
} from "./showcase/DocComponents";
import { Alert } from "../feedback/Alert";
import { Badge } from "../inputs/Badge";
import { Kbd } from "../typography/Kbd";

interface GuidelinesSectionProps {
  activeSubSection: string;
}

export function GuidelinesSection({ activeSubSection }: GuidelinesSectionProps) {
  switch (activeSubSection) {
    case "accessibility":      return <AccessibilityGuideline />;
    case "content":            return <ContentGuideline />;
    case "themes":             return <ThemesGuideline />;
    case "data-visualization": return <DataVizGuideline />;
    default:                   return <AccessibilityGuideline />;
  }
}

// ─── Accessibility ────────────────────────────────────────────────────────────

function AccessibilityGuideline() {
  return (
    <div className="space-y-16">
      <PageHeader
        title="Accessibility"
        description="Opticule DS is built accessible by default. Every interactive component meets WCAG 2.1 AA, uses semantic HTML, and is operable by keyboard, screen reader, and pointer. This page documents the guidelines and patterns that ensure this standard."
        badges={[
          { label: "WCAG 2.1 AA", color: "green" },
          { label: "Required", color: "orange" },
        ]}
      />

      <DocSection title="Overview">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: "Perceivable", icon: "👁", desc: "All non-text content has a text alternative. Color is never the only means of conveying information. Contrast ratios meet AA minimums." },
            { title: "Operable", icon: "⌨️", desc: "Every interactive element is keyboard-accessible. No keyboard traps. Focus order is logical. Skip-link provided." },
            { title: "Understandable", icon: "💬", desc: "Language is declared. Error messages describe how to fix the problem. Labels are visible and persistent." },
            { title: "Robust", icon: "🔧", desc: "Components use semantic HTML and ARIA correctly. Tested with NVDA, VoiceOver, and Axe DevTools." },
          ].map((p) => (
            <div key={p.title} className="rounded-xl border border-border bg-bg-secondary/20 p-5 space-y-2">
              <div className="text-2xl">{p.icon}</div>
              <p className="font-semibold text-sm">{p.title}</p>
              <p className="text-xs text-foreground/60 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </DocSection>

      <DocSection title="Color & Contrast" description="All text and interactive elements meet WCAG 2.1 AA contrast ratios. Use semantic color tokens — never hard-code color values.">
        <DemoBlock label="contrast ratio minimums" vertical>
          <div className="space-y-4 w-full max-w-2xl">
            {[
              { label: "Normal text (< 18px)", ratio: "4.5:1", badge: "AA", color: "green" },
              { label: "Large text (≥ 18px bold / ≥ 24px)", ratio: "3:1", badge: "AA", color: "green" },
              { label: "UI components & graphical objects", ratio: "3:1", badge: "AA", color: "green" },
              { label: "Enhanced text (< 18px)", ratio: "7:1", badge: "AAA", color: "blue" },
              { label: "Large enhanced text", ratio: "4.5:1", badge: "AAA", color: "blue" },
            ].map((row) => (
              <div key={row.label} className="flex items-center justify-between gap-4 p-3 rounded-lg border border-border bg-bg-secondary/10">
                <span className="text-sm text-foreground/80">{row.label}</span>
                <div className="flex items-center gap-2 shrink-0">
                  <code className="text-sm font-mono font-semibold text-brand-orange">{row.ratio}</code>
                  <Badge variant={row.color === "green" ? "success" : "info"} size="sm">{row.badge}</Badge>
                </div>
              </div>
            ))}
          </div>
        </DemoBlock>
        <DemoBlock label="color alone is not meaning" vertical>
          <Alert variant="warning" title="Never use color alone">
            Always pair color with a label, icon, or text pattern. Users with color blindness or who print in monochrome must still understand the meaning.
          </Alert>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
            <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-4">
              <p className="text-xs font-semibold text-red-600 uppercase tracking-wide mb-2">✗ Avoid</p>
              <div className="flex gap-2 items-center">
                <div className="size-3 rounded-full bg-red-500" />
                <div className="size-3 rounded-full bg-green-500" />
                <p className="text-sm text-foreground/70 ml-1">Status dots only</p>
              </div>
            </div>
            <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-4">
              <p className="text-xs font-semibold text-green-600 uppercase tracking-wide mb-2">✓ Do</p>
              <div className="flex gap-2 items-center">
                <Badge variant="error" size="sm">Offline</Badge>
                <Badge variant="success" size="sm">Online</Badge>
              </div>
            </div>
          </div>
        </DemoBlock>
      </DocSection>

      <DocSection title="Keyboard Navigation" description="All interactive components must be fully operable by keyboard. This section documents the standard keyboard patterns used across the system.">
        <DemoBlock label="global keyboard conventions" vertical>
          <div className="w-full max-w-2xl space-y-2">
            {[
              { keys: ["Tab"], action: "Move focus forward through interactive elements" },
              { keys: ["Shift", "Tab"], action: "Move focus backward" },
              { keys: ["Enter"], action: "Activate buttons, links, and selected menu items" },
              { keys: ["Space"], action: "Toggle checkboxes, activate buttons, open select menus" },
              { keys: ["Escape"], action: "Close overlays (Modal, Drawer, Popover, Tooltip, DropdownMenu)" },
              { keys: ["Arrow keys"], action: "Navigate within compound widgets (RadioGroup, Tabs, Slider, Select)" },
              { keys: ["Home", "End"], action: "Jump to first/last item in a list or slider" },
            ].map((row) => (
              <div key={row.action} className="flex items-start gap-4 p-3 rounded-lg border border-border bg-bg-secondary/10">
                <div className="flex items-center gap-1 shrink-0 min-w-[140px] flex-wrap">
                  {row.keys.map((k, i) => (
                    <span key={i} className="flex items-center gap-0.5">
                      <Kbd>{k}</Kbd>
                      {i < row.keys.length - 1 && <span className="text-foreground/30 text-xs mx-0.5">+</span>}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-foreground/70">{row.action}</p>
              </div>
            ))}
          </div>
        </DemoBlock>
        <DemoBlock label="focus visible" vertical>
          <Alert variant="info" title="Focus indicators are required">
            Never remove focus outlines with outline: none without providing a custom visible focus style. Opticule components use a 2px brand-orange ring by default.
          </Alert>
          <CodeBlock
            code={`/* ✓ Correct — custom focus style */
.custom-button:focus-visible {
  outline: 2px solid var(--color-brand-orange);
  outline-offset: 2px;
}

/* ✗ Never do this without a replacement */
.button { outline: none; }`}
            language="css"
          />
        </DemoBlock>
      </DocSection>

      <DocSection title="Screen Readers" description="Semantic HTML and ARIA patterns ensure assistive technology users get the same information as visual users.">
        <DemoBlock label="ARIA roles in use across the system" vertical>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full max-w-3xl">
            {[
              { role: "role=\"button\"", component: "IconButton, CopyButton", desc: "Non-button elements acting as buttons" },
              { role: "role=\"dialog\"", component: "Modal, AlertDialog", desc: "Overlay panels that trap focus" },
              { role: "role=\"alertdialog\"", component: "AlertDialog (destructive)", desc: "Interrupting confirmations" },
              { role: "role=\"switch\"", component: "Switch", desc: "Two-state toggle controls" },
              { role: "role=\"radiogroup\"", component: "RadioGroup, SegmentedControl", desc: "Grouped mutually exclusive options" },
              { role: "role=\"slider\"", component: "Slider", desc: "Range input with aria-valuenow/min/max" },
              { role: "role=\"tablist\"", component: "Tabs", desc: "Tab container with child role=\"tab\"" },
              { role: "role=\"status\"", component: "Badge (status)", desc: "Live region for non-critical updates" },
              { role: "role=\"alert\"", component: "Alert (error/warning)", desc: "Live region for critical messages" },
              { role: "aria-live=\"polite\"", component: "InlineLoading, FileUpload", desc: "Announce state changes politely" },
            ].map((row) => (
              <div key={row.role} className="p-3 rounded-lg border border-border bg-bg-secondary/10 space-y-1">
                <code className="text-xs font-mono text-brand-orange">{row.role}</code>
                <p className="text-xs font-medium text-foreground/80">{row.component}</p>
                <p className="text-xs text-foreground/50">{row.desc}</p>
              </div>
            ))}
          </div>
        </DemoBlock>
        <DemoBlock label="accessible name patterns" vertical>
          <CodeBlock
            code={`{/* Icon-only button: always provide aria-label */}
<IconButton icon={<Trash2 />} label="Delete item" variant="ghost" />

{/* Image: descriptive alt text */}
<img src="product.jpg" alt="Round acetate frames in tortoiseshell" />

{/* Decorative icon: aria-hidden */}
<ChevronDown aria-hidden="true" />

{/* Form field: visible label tied by htmlFor/id */}
<label htmlFor="email">Email address</label>
<input id="email" type="email" />`}
            language="tsx"
          />
        </DemoBlock>
      </DocSection>

      <DocSection title="Developers Checklist" description="Run this checklist before shipping any new component or page.">
        <div className="space-y-3 max-w-2xl">
          {[
            { check: "All interactive elements reachable by Tab", category: "Keyboard" },
            { check: "Focus order is logical (matches visual reading order)", category: "Keyboard" },
            { check: "Escape closes all overlays and menus", category: "Keyboard" },
            { check: "Custom widgets implement correct ARIA role + state", category: "ARIA" },
            { check: "All icons and images have accessible names or aria-hidden", category: "ARIA" },
            { check: "Color contrast ≥ 4.5:1 for normal text", category: "Color" },
            { check: "Color contrast ≥ 3:1 for large text and UI components", category: "Color" },
            { check: "Color is not the sole conveyor of meaning", category: "Color" },
            { check: "Error messages identify the field and describe how to fix", category: "Forms" },
            { check: "Required fields marked with aria-required or required", category: "Forms" },
            { check: "Tested with keyboard-only navigation", category: "Testing" },
            { check: "Tested with VoiceOver (macOS/iOS) or NVDA (Windows)", category: "Testing" },
          ].map((item) => (
            <div key={item.check} className="flex items-start gap-3 p-3 rounded-lg border border-border bg-bg-secondary/10">
              <div className="size-4 rounded border-2 border-border mt-0.5 shrink-0" />
              <div className="flex-1">
                <p className="text-sm text-foreground/80">{item.check}</p>
              </div>
              <Badge variant="outline" size="sm">{item.category}</Badge>
            </div>
          ))}
        </div>
      </DocSection>

      <DocSection title="Accessibility Resources">
        <AccessibilitySection>
          <A11yPoint>All Opticule DS components are built on <IC>Radix UI</IC> primitives, which implement WAI-ARIA design patterns by default — reducing the accessibility burden on consumers.</A11yPoint>
          <A11yPoint>Run <IC>@storybook/addon-a11y</IC> in Storybook to audit individual stories against Axe rules before shipping.</A11yPoint>
          <A11yPoint>Reference the <IC>WAI-ARIA Authoring Practices Guide</IC> at w3.org/WAI/ARIA/apg for correct keyboard interaction models for each widget type.</A11yPoint>
          <A11yPoint>Use <IC>useReducedMotion()</IC> from the hooks library to disable animations for users who prefer-reduced-motion.</A11yPoint>
        </AccessibilitySection>
      </DocSection>
    </div>
  );
}

// ─── Content Guidelines ───────────────────────────────────────────────────────

function ContentGuideline() {
  return (
    <div className="space-y-16">
      <PageHeader
        title="Content"
        description="Writing guidelines for product UI. Clear, concise, and human-centered copy helps users complete tasks without friction. These guidelines cover voice & tone, action labels, error messages, and formatting."
        badges={[{ label: "Editorial Standard", color: "blue" }]}
      />

      <DocSection title="Voice & Tone" description="Opticule DS products speak with a single, consistent voice — while adapting tone to match the user's context.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground/70 uppercase tracking-wider">Our Voice</h3>
            {[
              { trait: "Clear", desc: "Plain language. No jargon unless the user is a domain expert." },
              { trait: "Confident", desc: "Say what the product does. Avoid hedging words like 'might', 'could', or 'perhaps'." },
              { trait: "Human", desc: "Write like a knowledgeable colleague, not a legal document or a machine." },
              { trait: "Inclusive", desc: "Use gender-neutral language. Avoid idioms that don't translate across cultures." },
            ].map((v) => (
              <div key={v.trait} className="rounded-lg border border-border p-4 bg-bg-secondary/10">
                <p className="text-sm font-semibold mb-1">{v.trait}</p>
                <p className="text-xs text-foreground/60">{v.desc}</p>
              </div>
            ))}
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground/70 uppercase tracking-wider">Tone by Context</h3>
            {[
              { context: "Onboarding", tone: "Warm, encouraging, celebratory" },
              { context: "Errors", tone: "Direct, apologetic, solution-focused" },
              { context: "Warnings", tone: "Cautious, informative, non-alarming" },
              { context: "Empty states", tone: "Motivating, helpful, actionable" },
              { context: "Success states", tone: "Celebratory but brief" },
              { context: "Destructive actions", tone: "Serious, unambiguous, no softening" },
            ].map((v) => (
              <div key={v.context} className="flex items-center justify-between py-2.5 border-b border-border last:border-0">
                <span className="text-sm font-medium">{v.context}</span>
                <span className="text-xs text-foreground/60 text-right max-w-[55%]">{v.tone}</span>
              </div>
            ))}
          </div>
        </div>
      </DocSection>

      <DocSection title="Action Labels" description="Buttons and links must clearly communicate what will happen when activated. Labels are always verbs.">
        <UsageBlock
          use={[
            { text: "Use verb + noun for clarity: 'Save changes', 'Delete account', 'Export CSV'" },
            { text: "Prefer specific labels over generic ones: 'Submit form' → 'Create account'" },
            { text: "Confirm dialogs must echo the action: 'Delete' in the dialog, 'Delete' on the button" },
            { text: "Keep labels under 4 words. If more is needed, reconsider the interaction design." },
          ]}
          avoid={[
            { text: "Avoid 'Click here', 'Learn more', or 'Submit' alone — these are meaningless out of context." },
            { text: "Don't use gerunds as primary labels: 'Deleting' → 'Delete'" },
            { text: "Don't soften destructive actions: 'Remove' when you mean 'Delete permanently'" },
            { text: "Don't use ellipsis (...) to imply more steps — just describe the action directly." },
          ]}
        />
        <DemoBlock label="label examples — bad vs good" vertical>
          <div className="w-full max-w-2xl space-y-3">
            {[
              { bad: "Click here to proceed", good: "Continue to checkout" },
              { bad: "Submit", good: "Create account" },
              { bad: "Yes", good: "Delete file" },
              { bad: "OK", good: "Got it" },
              { bad: "Learn more", good: "View pricing details" },
            ].map((ex) => (
              <div key={ex.bad} className="grid grid-cols-2 gap-3">
                <div className="rounded-lg border border-red-500/20 bg-red-500/5 px-4 py-2.5">
                  <p className="text-[10px] font-semibold text-red-600 uppercase mb-1">✗ Avoid</p>
                  <p className="text-sm text-foreground/70">{ex.bad}</p>
                </div>
                <div className="rounded-lg border border-green-500/20 bg-green-500/5 px-4 py-2.5">
                  <p className="text-[10px] font-semibold text-green-600 uppercase mb-1">✓ Do</p>
                  <p className="text-sm text-foreground/70">{ex.good}</p>
                </div>
              </div>
            ))}
          </div>
        </DemoBlock>
      </DocSection>

      <DocSection title="Error Messages" description="Error messages are help text, not blame. They tell users exactly what went wrong and how to fix it.">
        <UsageBlock
          use={[
            { text: "Identify the specific problem: 'Email address is already in use'" },
            { text: "Tell the user how to fix it: 'Use a different email or sign in'" },
            { text: "Be specific about constraints: 'Password must be at least 8 characters'" },
            { text: "Place the error next to the field that caused it" },
          ]}
          avoid={[
            { text: "Don't blame the user: 'You entered an invalid email'" },
            { text: "Don't use technical language: 'HTTP 422 Unprocessable Entity'" },
            { text: "Don't use vague messages: 'An error occurred. Please try again.'" },
            { text: "Don't put errors only at the top of the form — always mark the failing field" },
          ]}
        />
        <DemoBlock label="error message examples" vertical>
          <div className="w-full max-w-lg space-y-3">
            <Alert variant="error" title="Something went wrong">
              <span className="text-xs">✗ Too vague — doesn't help the user.</span>
            </Alert>
            <Alert variant="error" title="Your session has expired">
              <span className="text-xs">✓ Clear, explains the cause. Pair with a 'Sign in again' action button.</span>
            </Alert>
            <Alert variant="error" title="Password must be at least 8 characters">
              <span className="text-xs">✓ Specific, actionable, no blame.</span>
            </Alert>
          </div>
        </DemoBlock>
      </DocSection>

      <DocSection title="Sentence Case vs Title Case" description="Opticule DS uses sentence case everywhere in the UI. Only proper nouns, product names, and acronyms are capitalized.">
        <DemoBlock label="capitalization rules" vertical>
          <div className="grid grid-cols-2 gap-4 w-full max-w-2xl">
            <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-4 space-y-3">
              <p className="text-xs font-semibold text-green-600 uppercase">✓ Sentence case</p>
              <ul className="space-y-1.5 text-sm text-foreground/70">
                <li>Save changes</li>
                <li>Upload a file</li>
                <li>Design foundations</li>
                <li>Select a theme</li>
                <li>Learn about Opticule DS</li>
              </ul>
            </div>
            <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-4 space-y-3">
              <p className="text-xs font-semibold text-red-600 uppercase">✗ Title case (avoid)</p>
              <ul className="space-y-1.5 text-sm text-foreground/70 line-through opacity-60">
                <li>Save Changes</li>
                <li>Upload A File</li>
                <li>Design Foundations</li>
                <li>Select A Theme</li>
                <li>Learn About Opticule DS</li>
              </ul>
            </div>
          </div>
        </DemoBlock>
      </DocSection>

      <DocSection title="Numbers & Formatting">
        <div className="rounded-xl border border-border overflow-hidden max-w-2xl">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-foreground/5">
                <th className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider text-foreground/50">Situation</th>
                <th className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider text-foreground/50">Format</th>
                <th className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider text-foreground/50">Example</th>
              </tr>
            </thead>
            <tbody>
              {[
                { situation: "Numbers 1–9 in prose", format: "Spell out", example: "three items selected" },
                { situation: "Numbers 10+ in prose", format: "Numerals", example: "24 components" },
                { situation: "File sizes", format: "KB / MB / GB", example: "4.2 MB" },
                { situation: "Percentages", format: "Symbol, no space", example: "75%" },
                { situation: "Currency", format: "Symbol + 2 decimals", example: "$89.00" },
                { situation: "Dates", format: "MMM D, YYYY", example: "Apr 11, 2026" },
                { situation: "Time", format: "12h with am/pm", example: "2:30 pm" },
              ].map((row, i) => (
                <tr key={row.situation} className={`border-b border-border last:border-0 ${i % 2 === 0 ? "" : "bg-foreground/[0.015]"}`}>
                  <td className="px-4 py-3 text-xs text-foreground/70">{row.situation}</td>
                  <td className="px-4 py-3 text-xs"><code className="font-mono text-brand-orange">{row.format}</code></td>
                  <td className="px-4 py-3 text-xs text-foreground/60">{row.example}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </DocSection>
    </div>
  );
}

// ─── Themes ───────────────────────────────────────────────────────────────────

function ThemesGuideline() {
  return (
    <div className="space-y-16">
      <PageHeader
        title="Themes"
        description="Opticule DS ships three built-in themes — Light, Dark, and High Contrast — all driven by the same three-tier token system. Switching themes never requires changing component code."
        badges={[
          { label: "3 built-in themes", color: "purple" },
          { label: "Customizable", color: "blue" },
        ]}
      />

      <DocSection title="Theme Overview">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: "Light", desc: "Default theme. White canvas (#FFFFFF), black text, subtle borders. High readability in well-lit environments.", bg: "bg-white border-gray-200", text: "text-gray-900" },
            { name: "Dark", desc: "Pure black (#000000) background. Designed for low-light environments and developer tools. High contrast without eye strain.", bg: "bg-black border-gray-700", text: "text-gray-100" },
            { name: "High Contrast", desc: "Meets WCAG AAA contrast ratios. For users with low vision or cognitive differences who require maximum legibility.", bg: "bg-black border-white", text: "text-white" },
          ].map((t) => (
            <div key={t.name} className={`rounded-xl border-2 ${t.bg} p-6 space-y-3`}>
              <p className={`font-bold text-lg ${t.text}`}>{t.name}</p>
              <p className={`text-xs leading-relaxed ${t.name === "Light" ? "text-gray-600" : "text-gray-400"}`}>{t.desc}</p>
            </div>
          ))}
        </div>
      </DocSection>

      <DocSection title="Token System" description="Themes are implemented via three layers of CSS custom properties. Always use semantic tokens in component code — never primitive values directly.">
        <AnatomyList items={[
          { number: 1, label: "Primitive tokens", description: "Raw values: brand colors, neutral scale, spacing sizes, shadow definitions. Never used directly in components." },
          { number: 2, label: "Semantic tokens", description: "Meaning-aware aliases: --color-background, --color-foreground, --color-border. These change per theme." },
          { number: 3, label: "Component tokens", description: "Component-scoped overrides: --button-primary-bg, --input-border-radius. Inherit from semantic layer." },
        ]} />
        <DemoBlock label="using semantic tokens in code" vertical>
          <CodeBlock
            code={`/* ✓ Use semantic tokens — adapts to all themes automatically */
.card {
  background: var(--color-background);
  color: var(--color-foreground);
  border: 1px solid var(--color-border);
}

/* ✗ Don't hardcode primitives — breaks in dark mode */
.card {
  background: #FFFFFF;
  color: #000000;
  border: 1px solid rgba(0,0,0,0.1);
}`}
            language="css"
          />
        </DemoBlock>
      </DocSection>

      <DocSection title="Setup & Usage" description="Wrap your application in ThemeProvider once. All components inside automatically respond to the theme.">
        <CodeBlock
          code={`import { ThemeProvider, Toaster } from "@opticule/ds";
import "@opticule/ds/styles";

// Wrap your app once at the root
export function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="opticule-theme">
      <YourApp />
      <Toaster />
    </ThemeProvider>
  );
}

// Change themes programmatically
import { useTheme } from "@opticule/ds";

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  return (
    <select value={theme} onChange={(e) => setTheme(e.target.value as any)}>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="high-contrast">High Contrast</option>
      <option value="system">System</option>
    </select>
  );
}`}
          language="tsx"
        />
        <PropsTable
          title="ThemeProvider props"
          rows={[
            { name: "defaultTheme", type: `"light" | "dark" | "high-contrast" | "system"`, default: `"system"`, description: "Initial theme. 'system' follows OS preference via prefers-color-scheme." },
            { name: "storageKey", type: "string", default: `"opticule-theme"`, description: "localStorage key for persisting the user's theme choice." },
            { name: "children", type: "ReactNode", required: true, description: "Your application tree." },
          ]}
        />
      </DocSection>

      <DocSection title="Customizing Tokens" description="Override any semantic token in your own CSS to create a custom branded theme.">
        <CodeBlock
          code={`/* globals.css — override in your project */
:root {
  /* Override brand colors */
  --color-brand-orange: #E57400;
  --color-brand-purple: #9B33FF;

  /* Override semantic tokens */
  --color-background: #F8F7F5;
  --color-foreground: #1A1A1A;

  /* Override component tokens */
  --button-radius: 9999px;   /* pill-shaped buttons */
  --input-radius: 4px;       /* square inputs */
}

.dark {
  --color-background: #0D0D0D;
  --color-foreground: #F0EDE8;
}`}
          language="css"
        />
      </DocSection>

      <DocSection title="Themed Component Variants">
        <DemoBlock label="semantic color tokens in context" vertical>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <div className="space-y-2">
              {["primary", "success", "warning", "error", "info"].map((v) => (
                <Alert key={v} variant={v as any} title={`${v.charAt(0).toUpperCase() + v.slice(1)} alert`}>
                  Styled using semantic color tokens. Adapts to all themes.
                </Alert>
              ))}
            </div>
            <div className="space-y-3">
              <div className="flex flex-wrap gap-2">
                {["default", "primary", "secondary", "success", "warning", "error", "info", "gradient", "outline"].map((v) => (
                  <Badge key={v} variant={v as any}>{v}</Badge>
                ))}
              </div>
            </div>
          </div>
        </DemoBlock>
      </DocSection>
    </div>
  );
}

// ─── Data Visualization ───────────────────────────────────────────────────────

function DataVizGuideline() {
  return (
    <div className="space-y-16">
      <PageHeader
        title="Data Visualization"
        description="Guidelines for presenting data clearly, accessibly, and consistently across Opticule DS products. Covers chart selection, color usage in charts, labeling, and accessibility patterns."
        badges={[{ label: "Guidelines", color: "blue" }]}
      />

      <DocSection title="Choosing the Right Chart Type" description="The chart type should match what the data is communicating — not be chosen for visual complexity.">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { type: "Bar / Column", use: "Compare values across discrete categories", icon: "▬▬▬", when: "Ranking, comparing groups" },
            { type: "Line", use: "Show change over time for continuous data", icon: "📈", when: "Trends, time-series" },
            { type: "Area", use: "Show cumulative totals over time", icon: "🔺", when: "Volume over time, stacked comparisons" },
            { type: "Pie / Donut", use: "Show parts of a whole (max 5–6 slices)", icon: "🥧", when: "Proportions, composition" },
            { type: "Scatter", use: "Reveal correlation between two variables", icon: "⚬ ⚬ ⚬", when: "Relationships, distributions" },
            { type: "Stat / Metric", use: "Highlight a single key number with context", icon: "42", when: "KPIs, summary numbers" },
          ].map((c) => (
            <div key={c.type} className="rounded-xl border border-border p-5 space-y-3 bg-bg-secondary/10">
              <div className="text-3xl font-mono leading-none">{c.icon}</div>
              <p className="font-semibold text-sm">{c.type}</p>
              <p className="text-xs text-foreground/60">{c.use}</p>
              <div className="text-[10px] font-medium text-brand-orange uppercase tracking-wide">Best for: {c.when}</div>
            </div>
          ))}
        </div>
      </DocSection>

      <DocSection title="Color in Data Visualization" description="Chart colors must be distinguishable without relying on hue alone. Use the approved data palette and always add text labels.">
        <UsageBlock
          use={[
            { text: "Use the designated data color palette — not brand colors directly." },
            { text: "Pair each data series with a distinct shape or pattern in addition to color." },
            { text: "Always include a legend or direct data labels so color doesn't carry the meaning alone." },
            { text: "Use the brand-orange as the primary series highlight color when there's a single key metric." },
          ]}
          avoid={[
            { text: "Don't use red and green together without additional differentiation — 8% of men have red-green color blindness." },
            { text: "Don't use more than 6–8 categorical colors in a single chart." },
            { text: "Don't use the gradient palette for sequential data — use a single-hue progression instead." },
            { text: "Don't rely on color alone to encode data — always add accessible labels." },
          ]}
        />
        <DemoBlock label="approved data color sequence" vertical>
          <div className="flex flex-wrap gap-3">
            {[
              { name: "Primary", hex: "#FF8000", tw: "bg-brand-orange" },
              { name: "Secondary", hex: "#CC33FF", tw: "bg-brand-purple" },
              { name: "Tertiary", hex: "#FF004F", tw: "bg-brand-folly" },
              { name: "Info", hex: "#3B82F6", tw: "bg-blue-500" },
              { name: "Success", hex: "#22C55E", tw: "bg-green-500" },
              { name: "Warning", hex: "#EAB308", tw: "bg-yellow-500" },
            ].map((c) => (
              <div key={c.name} className="flex flex-col items-center gap-1.5">
                <div className={`size-10 rounded-lg ${c.tw} shadow-sm`} />
                <p className="text-[10px] font-medium text-foreground/70">{c.name}</p>
                <p className="text-[9px] font-mono text-foreground/40">{c.hex}</p>
              </div>
            ))}
          </div>
        </DemoBlock>
      </DocSection>

      <DocSection title="Labeling & Axes" description="Labels are the primary way users read data. Every chart must have clear axis labels, value labels, and a descriptive title.">
        <UsageBlock
          use={[
            { text: "Include a clear chart title that states the insight (e.g., 'Sales grew 42% YoY')." },
            { text: "Label axes with both the measure name and unit: 'Revenue ($)' not just 'Revenue'." },
            { text: "Show data labels on bars and lines when there are fewer than 10 data points." },
            { text: "Use concise number formatting: 1.2M not 1,200,000; 45% not 0.45." },
          ]}
          avoid={[
            { text: "Don't start the Y-axis above zero for bar charts — it exaggerates differences." },
            { text: "Don't truncate axis labels — reduce tick frequency instead." },
            { text: "Don't use angled axis labels if you can use horizontal ones via reduced tick density." },
            { text: "Don't use 3D effects — they distort perceived values." },
          ]}
        />
      </DocSection>

      <DocSection title="Accessibility in Charts">
        <AccessibilitySection>
          <A11yPoint>Every chart must have an accessible title and description provided via <IC>aria-label</IC> on the SVG element or a visually-hidden caption.</A11yPoint>
          <A11yPoint>Provide a data table equivalent for all charts — link to or toggle a table view so screen reader users can access the underlying data.</A11yPoint>
          <A11yPoint>Don't use color as the only differentiator between data series. Always add a distinct shape, pattern, or direct label.</A11yPoint>
          <A11yPoint>Use <IC>role="img"</IC> on SVG elements and <IC>aria-describedby</IC> pointing to a summary text for complex charts.</A11yPoint>
          <A11yPoint>For interactive charts, ensure keyboard navigation works: Tab to focus the chart, arrow keys to move between data points, Enter to inspect a point.</A11yPoint>
        </AccessibilitySection>
        <DemoBlock label="accessible chart markup pattern" vertical>
          <CodeBlock
            code={`<figure>
  <figcaption className="sr-only">
    Monthly revenue chart. Revenue grew from $42K in January
    to $78K in June 2026, a 85% increase.
  </figcaption>
  <svg
    role="img"
    aria-label="Monthly revenue bar chart, Jan–Jun 2026"
    aria-describedby="revenue-summary"
  >
    {/* chart content */}
  </svg>
  {/* Accessible data table toggle */}
  <button aria-expanded={showTable} onClick={toggleTable}>
    View as table
  </button>
  {showTable && <RevenueDataTable />}
</figure>`}
            language="tsx"
          />
        </DemoBlock>
      </DocSection>

      <DocSection title="Built-in Stat Component" description="For single-metric KPIs, use the Stat component from the Data Display category rather than a chart.">
        <DemoBlock label="stat cards for key metrics">
          {[
            { label: "Total Revenue", value: "$142K", change: "+12%", up: true },
            { label: "Components", value: "100+", change: "+8 this week", up: true },
            { label: "Accessibility Score", value: "98/100", change: "AA standard", up: true },
          ].map((s) => (
            <div key={s.label} className="rounded-xl border border-border p-5 min-w-[160px] space-y-1 bg-bg-secondary/10">
              <p className="text-xs text-foreground/50 font-medium">{s.label}</p>
              <p className="text-2xl font-bold">{s.value}</p>
              <p className={`text-xs font-medium ${s.up ? "text-green-500" : "text-brand-folly"}`}>{s.change}</p>
            </div>
          ))}
        </DemoBlock>
      </DocSection>
    </div>
  );
}
