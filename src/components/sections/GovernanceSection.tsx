import { Code, FileText, GitBranch, CheckCircle, Paintbrush, Terminal, Package, Sparkles } from "lucide-react";

interface GovernanceSectionProps {
  activeSubSection: string;
}

export function GovernanceSection({
  activeSubSection,
}: GovernanceSectionProps) {
  if (activeSubSection === "getting-started") {
    return <GettingStarted />;
  }

  if (activeSubSection === "code-implementation") {
    return <CodeImplementation />;
  }

  if (activeSubSection === "usage-guidelines") {
    return <UsageGuidelines />;
  }

  if (activeSubSection === "contribution") {
    return <ContributionModel />;
  }

  if (activeSubSection === "whats-new") {
    return <WhatsNew />;
  }

  return <GettingStarted />;
}

// ─── Getting Started ──────────────────────────────────────────────────────────

function GettingStarted() {
  return (
    <div className="space-y-12">
      <div className="space-y-4 mb-12 pb-8 border-b border-border">
        <h1 className="text-4xl font-bold">Getting Started</h1>
        <p className="text-lg text-foreground/60 max-w-3xl leading-relaxed">
          Everything you need to start using Opticule DS — whether you're a designer configuring Figma libraries or an engineer installing the npm package.
        </p>
      </div>

      {/* Audience cards */}
      <section className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-border rounded-xl p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-xl bg-brand-purple/10 flex items-center justify-center">
                <Paintbrush className="size-5 text-brand-purple" />
              </div>
              <h2 className="text-xl font-bold">For Designers</h2>
            </div>
            <p className="text-sm text-foreground/60">Access the Figma library, design tokens, and component specs.</p>
            <ol className="space-y-3 text-sm">
              {[
                "Open Figma and go to Assets → Teams → Opticule DS",
                "Enable the Opticule DS library in your file",
                "Apply the Light or Dark theme from the design token variables",
                "Drag components from the Components panel",
                "Read the Usage Guidelines for do/don't patterns per component",
              ].map((step, i) => (
                <li key={i} className="flex gap-3">
                  <span className="size-5 rounded-full bg-brand-purple/15 text-brand-purple text-xs font-bold flex items-center justify-center shrink-0">{i + 1}</span>
                  <span className="text-foreground/70">{step}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="border border-border rounded-xl p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-xl bg-brand-orange/10 flex items-center justify-center">
                <Terminal className="size-5 text-brand-orange" />
              </div>
              <h2 className="text-xl font-bold">For Engineers</h2>
            </div>
            <p className="text-sm text-foreground/60">Install the package, wrap your app, and start building.</p>
            <ol className="space-y-3 text-sm">
              {[
                "npm install @opticule/ds",
                "Import globals.css at your app entry point",
                "Wrap your app in <ThemeProvider>",
                "Add <Toaster /> for toast notifications",
                "Import and use components anywhere in your tree",
              ].map((step, i) => (
                <li key={i} className="flex gap-3">
                  <span className="size-5 rounded-full bg-brand-orange/15 text-brand-orange text-xs font-bold flex items-center justify-center shrink-0">{i + 1}</span>
                  <span className="text-foreground/70">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Install */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Installation</h2>
        <div className="border border-border rounded-xl overflow-hidden">
          <div className="bg-foreground/5 border-b border-border px-4 py-2.5 flex items-center gap-2">
            <Package className="size-4 text-foreground/40" />
            <span className="text-xs font-mono text-foreground/50">Terminal</span>
          </div>
          <div className="p-5 space-y-3 font-mono text-sm">
            <div className="text-foreground/40 text-xs">Step 1 — install</div>
            <pre className="text-brand-orange">npm install @opticule/ds</pre>
            <div className="text-foreground/40 text-xs">Step 2 — import styles (once, at app root)</div>
            <pre><span className="text-blue-400">import</span> <span className="text-yellow-400">'@opticule/ds/styles'</span>;</pre>
            <div className="text-foreground/40 text-xs">Step 3 — wrap your app</div>
            <pre className="text-foreground/70">{`import { ThemeProvider, Toaster } from '@opticule/ds';

export function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <YourApp />
      <Toaster />
    </ThemeProvider>
  );
}`}</pre>
          </div>
        </div>
      </section>

      {/* Quick component example */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Your First Component</h2>
        <div className="border border-border rounded-xl overflow-hidden">
          <div className="bg-foreground/5 border-b border-border px-4 py-2.5">
            <span className="text-xs font-mono text-foreground/50">MyComponent.tsx</span>
          </div>
          <pre className="p-5 text-sm overflow-x-auto">
            <code className="text-foreground/80">{`import { Button, Input, Alert } from '@opticule/ds';

export function ContactForm() {
  return (
    <div className="space-y-4 max-w-sm">
      <Alert variant="info" title="We'll respond within 24 hours." />
      <Input label="Your name" placeholder="Nze Rachi" />
      <Input label="Email" type="email" placeholder="you@example.com" />
      <Button variant="gradient">Send message</Button>
    </div>
  );
}`}</code>
          </pre>
        </div>
      </section>

      {/* Design principles */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Core Principles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { icon: "♿", title: "Accessible by default", desc: "Every component meets WCAG 2.1 AA. Built on Radix UI primitives with complete ARIA support." },
            { icon: "🎨", title: "Token-driven", desc: "Three-tier token system: primitive → semantic → component. Theme switching requires zero code changes." },
            { icon: "🔷", title: "Fully typed", desc: "Complete TypeScript types for every prop, variant, size, and event. IntelliSense works out of the box." },
            { icon: "🧩", title: "Composable", desc: "Compound component patterns throughout. Build custom components by composing primitives." },
            { icon: "🌙", title: "Dark mode first", desc: "Pure black (#000000) dark background. Three themes: Light, Dark, High Contrast." },
            { icon: "📦", title: "Tree-shakeable", desc: "Import only what you use. Zero runtime style-in-JS — pure CSS custom properties." },
          ].map((p) => (
            <div key={p.title} className="rounded-xl border border-border p-5 space-y-2 bg-bg-secondary/10">
              <div className="text-2xl">{p.icon}</div>
              <p className="font-semibold text-sm">{p.title}</p>
              <p className="text-xs text-foreground/60 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Component count summary */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">What's Included</h2>
        <div className="rounded-xl border border-border overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-foreground/5">
                <th className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider text-foreground/50">Category</th>
                <th className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider text-foreground/50">Components</th>
                <th className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider text-foreground/50">Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                { cat: "Buttons & Actions", comps: "Button, IconButton, ButtonGroup, CopyButton", status: "Stable" },
                { cat: "Inputs", comps: "Input, TextArea, Select, Search, NumberInput, PasswordInput, MultiSelect, Combobox", status: "Stable" },
                { cat: "Selection Controls", comps: "Checkbox, Switch, RadioGroup, Slider, Toggle, ToggleGroup", status: "Stable" },
                { cat: "Data Display", comps: "Card, Avatar, Badge, Tag, Stat, Accordion, Table, Skeleton", status: "Stable" },
                { cat: "Feedback", comps: "Alert, Spinner, ProgressBar, InlineLoading, Toast", status: "Stable" },
                { cat: "Overlay", comps: "Tooltip, Popover, HoverCard, Modal, Drawer, AlertDialog, ContextMenu, CommandPalette", status: "Stable" },
                { cat: "Navigation", comps: "Tabs, Breadcrumb, Pagination, DropdownMenu, Stepper, SegmentedControl, Link", status: "Stable" },
                { cat: "Layout", comps: "VStack, HStack, Grid, Container, Divider, Spacer, AspectRatio, Center", status: "Stable" },
                { cat: "Typography", comps: "Heading, Paragraph, Code, CodeBlock, Kbd, Blockquote, Highlight", status: "Stable" },
                { cat: "Forms", comps: "Form, FormField, FormItem, FormLabel, FormControl, FormMessage", status: "Stable" },
                { cat: "Media", comps: "Image", status: "Stable" },
                { cat: "Utilities", comps: "ScrollArea, ErrorBoundary, ClientOnly, ConditionalWrap", status: "Stable" },
                { cat: "Primitives", comps: "Box, Text, Icon, VisuallyHidden, Portal", status: "Stable" },
                { cat: "File Upload", comps: "FileUpload", status: "Stable" },
              ].map((row, i) => (
                <tr key={row.cat} className={`border-b border-border last:border-0 ${i % 2 === 0 ? "" : "bg-foreground/1.5"}`}>
                  <td className="px-4 py-3 text-xs font-medium">{row.cat}</td>
                  <td className="px-4 py-3 text-xs text-foreground/60">{row.comps}</td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20">
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

// ─── What's New ───────────────────────────────────────────────────────────────

function WhatsNew() {
  const releases = [
    {
      version: "v1.1.0",
      date: "April 2026",
      type: "Minor",
      highlights: [
        "Added 7 new component showcase pages (FileUpload, Toast, Link, Form, Media, Utilities, Primitives)",
        "New Guidelines section: Accessibility, Content, Themes, Data Visualization",
        "Patterns section expanded to 9 patterns (Dialogs, Empty States, Filtering, Forms, Loading, Notifications, Status Indicators)",
        "Getting Started guide added to Documentation",
        "Carbon Design System parity: full documentation depth across all 100+ components",
      ],
      breaking: [],
    },
    {
      version: "v1.0.0",
      date: "March 2026",
      type: "Major",
      highlights: [
        "Initial public release of Opticule Design System",
        "100+ production-ready React components",
        "Three-tier token system: primitive → semantic → component",
        "Light, Dark, and High Contrast themes",
        "Complete WCAG 2.1 AA accessibility compliance",
        "Storybook documentation site",
        "react-hook-form + zod Form integration",
        "Radix UI primitives throughout",
      ],
      breaking: [],
    },
  ];

  return (
    <div className="space-y-12">
      <div className="space-y-4 mb-12 pb-8 border-b border-border">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="size-5 text-brand-orange" />
          <span className="text-sm font-medium text-foreground/60">Release Notes</span>
        </div>
        <h1 className="text-4xl font-bold">What's New</h1>
        <p className="text-lg text-foreground/60 max-w-3xl leading-relaxed">
          Release history and changelog for Opticule Design System. The project follows semantic versioning: MAJOR.MINOR.PATCH.
        </p>
      </div>

      <div className="space-y-10">
        {releases.map((release) => (
          <div key={release.version} className="border border-border rounded-xl overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 bg-foreground/5 border-b border-border">
              <div className="flex items-center gap-3">
                <code className="text-lg font-mono font-bold text-brand-orange">{release.version}</code>
                <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border ${
                  release.type === "Major"
                    ? "bg-brand-purple/10 text-brand-purple border-brand-purple/20"
                    : "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20"
                }`}>
                  {release.type}
                </span>
              </div>
              <span className="text-sm text-foreground/50">{release.date}</span>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground/40 mb-3">Highlights</h3>
                <ul className="space-y-2">
                  {release.highlights.map((h) => (
                    <li key={h} className="flex gap-2.5 text-sm text-foreground/70">
                      <CheckCircle className="size-4 text-green-500 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {release.breaking.length > 0 && (
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-brand-folly mb-3">Breaking Changes</h3>
                  <ul className="space-y-1">
                    {release.breaking.map((b) => (
                      <li key={b} className="text-sm text-brand-folly/80 flex gap-2">
                        <span className="shrink-0">⚠</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Release Schedule</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { type: "PATCH (x.x.1)", desc: "Bug fixes, documentation corrections, accessibility fixes. Released as needed — no waiting for a minor cycle.", cadence: "As needed" },
            { type: "MINOR (x.1.x)", desc: "New components, new props, new patterns. Always backwards-compatible. No migration required.", cadence: "Monthly" },
            { type: "MAJOR (1.x.x)", desc: "Breaking changes to component APIs, token renames, or removed components. Includes a migration guide.", cadence: "Quarterly" },
          ].map((t) => (
            <div key={t.type} className="rounded-xl border border-border p-5 space-y-2 bg-bg-secondary/10">
              <code className="text-sm font-mono text-brand-orange">{t.type}</code>
              <p className="text-xs text-foreground/60 leading-relaxed">{t.desc}</p>
              <div className="text-[10px] font-medium text-brand-purple/80 uppercase tracking-wide">Cadence: {t.cadence}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function CodeImplementation() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-bold mb-4">Code Implementation</h1>
        <p className="text-lg text-foreground/75">
          Technical guidelines for implementing the design system in code
        </p>
      </div>

      {/* Tech Stack */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Tech Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-border rounded-lg p-6">
            <Code className="w-8 h-8 mb-3" />
            <h3 className="font-bold mb-2">React + TypeScript</h3>
            <p className="text-sm text-foreground/75">
              Component library built with React 18+ and TypeScript for type
              safety
            </p>
          </div>
          <div className="border border-border rounded-lg p-6">
            <Code className="w-8 h-8 mb-3" />
            <h3 className="font-bold mb-2">Tailwind CSS v4</h3>
            <p className="text-sm text-foreground/75">
              Utility-first CSS framework with custom design tokens
            </p>
          </div>
          <div className="border border-border rounded-lg p-6">
            <Code className="w-8 h-8 mb-3" />
            <h3 className="font-bold mb-2">Lucide React Icons</h3>
            <p className="text-sm text-foreground/75">
              Consistent icon library with 1000+ icons
            </p>
          </div>
        </div>
      </section>

      {/* Installation */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Installation</h2>
        <div className="border border-border rounded-lg p-6 bg-muted-light">
          <h3 className="font-bold mb-4">Install Dependencies</h3>
          <div className="bg-background rounded p-4 font-mono text-sm mb-4">
            <code className="text-brand-folly">npm install</code>{" "}
            tailwindcss@latest react lucide-react
          </div>
          <h3 className="font-bold mb-4 mt-6">Import Global Styles</h3>
          <div className="bg-background rounded p-4 font-mono text-sm">
            <code className="text-blue-600">import</code>{" "}
            <code className="text-yellow-600">'./styles/globals.css'</code>;
          </div>
        </div>
      </section>

      {/* Design Tokens */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Design Tokens</h2>
        <div className="border border-border rounded-lg overflow-hidden">
          <div className="bg-muted-light p-4 border-b border-border">
            <p className="text-sm font-mono">/styles/globals.css</p>
          </div>
          <div className="p-6 bg-background">
            <pre className="text-sm overflow-x-auto">
              <code>{`:root {
  /* Brand Colors */
  --color-white: #FFFFFF;
  --color-black: #000000;
  --color-dark-gray: #121212;
  --color-gray: #808080;
  --color-light-gray: #F5F5F5;
  
  /* Accent Colors */
  --color-accent-orange: #FF8000;
  --color-accent-folly: #FF004F;
  --color-accent-purple: #CC33FF;
  
  /* Semantic Tokens */
  --color-background: var(--color-white);
  --color-foreground: var(--color-black);
  --color-muted: var(--color-light-gray);
  --color-border: rgba(0, 0, 0, 0.1);
  
  /* Typography */
  --font-family: 'Ubuntu', sans-serif;
  
  /* Spacing (8pt grid) */
  --spacing-1: 0.25rem;  /* 4px */
  --spacing-2: 0.5rem;   /* 8px */
  --spacing-3: 0.75rem;  /* 12px */
  --spacing-4: 1rem;     /* 16px */
  --spacing-6: 1.5rem;   /* 24px */
  --spacing-8: 2rem;     /* 32px */
  
  /* Border Radius */
  --radius: 8px;
}

.dark {
  --color-background: var(--color-dark-gray);
  --color-foreground: var(--color-light-gray);
  --color-muted: #1F1F1F;
  --color-border: rgba(255, 255, 255, 0.1);
}`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Component Example */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Component Example</h2>
        <div className="border border-border rounded-lg overflow-hidden">
          <div className="bg-muted-light p-4 border-b border-border">
            <p className="text-sm font-mono">Button.tsx</p>
          </div>
          <div className="p-6 bg-background">
            <pre className="text-sm overflow-x-auto">
              <code>{`import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  className = '',
  children,
  ...props 
}: ButtonProps) {
  const baseStyles = 'rounded-lg font-medium transition-all';
  
  const variants = {
    primary: 'bg-foreground text-background hover:opacity-90',
    secondary: 'border-2 border-foreground hover:bg-foreground hover:text-background',
    gradient: 'bg-gradient-to-r from-brand-purple via-brand-folly to-brand-orange text-white'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  return (
    <button 
      className={\`\${baseStyles} \${variants[variant]} \${sizes[size]} \${className}\`}
      {...props}
    >
      {children}
    </button>
  );
}`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Accessibility */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Accessibility Implementation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-border rounded-lg p-6">
            <h3 className="font-bold mb-3">Semantic HTML</h3>
            <pre className="text-xs bg-muted-light p-3 rounded overflow-x-auto">
              <code>{`<nav>
  <ul>
    <li><a href="#">Link</a></li>
  </ul>
</nav>

<button type="button">
  Click me
</button>

<main>
  <article>Content</article>
</main>`}</code>
            </pre>
          </div>
          <div className="border border-border rounded-lg p-6">
            <h3 className="font-bold mb-3">ARIA Labels</h3>
            <pre className="text-xs bg-muted-light p-3 rounded overflow-x-auto">
              <code>{`<button aria-label="Close">
  <X className="w-4 h-4" />
</button>

<div role="alert">
  Error message
</div>

<input 
  aria-describedby="help"
  aria-invalid={hasError}
/>`}</code>
            </pre>
          </div>
        </div>
      </section>
    </div>
  );
}

function UsageGuidelines() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-bold mb-4">Usage Guidelines</h1>
        <p className="text-lg text-foreground/75">
          Best practices for using the design system effectively
        </p>
      </div>

      {/* When to Use */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Component Selection</h2>
        <div className="border border-border rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
          <table className="w-full min-w-sm text-sm">
            <thead className="bg-muted-light border-b border-border">
              <tr>
                <th className="text-left p-4 font-bold">Component</th>
                <th className="text-left p-4 font-bold">When to Use</th>
                <th className="text-left p-4 font-bold">When NOT to Use</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="p-4 font-medium">Primary Button</td>
                <td className="p-4 text-foreground/75">
                  Main action on a page (max 1-2)
                </td>
                <td className="p-4 text-foreground/75">
                  Multiple actions, navigation links
                </td>
              </tr>
              <tr>
                <td className="p-4 font-medium">Gradient Button</td>
                <td className="p-4 text-foreground/75">
                  Highest priority conversion action
                </td>
                <td className="p-4 text-foreground/75">
                  Anywhere else - use very sparingly
                </td>
              </tr>
              <tr>
                <td className="p-4 font-medium">Card</td>
                <td className="p-4 text-foreground/75">
                  Grouping related content
                </td>
                <td className="p-4 text-foreground/75">
                  Long-form text, full pages
                </td>
              </tr>
              <tr>
                <td className="p-4 font-medium">Alert</td>
                <td className="p-4 text-foreground/75">
                  Important feedback or warnings
                </td>
                <td className="p-4 text-foreground/75">
                  General information, permanent content
                </td>
              </tr>
              <tr>
                <td className="p-4 font-medium">Modal</td>
                <td className="p-4 text-foreground/75">
                  Critical decisions, focused tasks
                </td>
                <td className="p-4 text-foreground/75">
                  Primary content, navigation
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        </div>
      </section>

      {/* Color Usage */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Color Usage Rules</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border-2 border-brand-purple/50 rounded-lg p-6 bg-brand-purple/5">
            <div className="flex items-center gap-2 mb-4 text-brand-purple">
              <CheckCircle className="w-5 h-5" />
              <span className="font-bold">Do</span>
            </div>
            <ul className="space-y-2 text-sm">
              <li>• Use neutrals (90-95% of UI)</li>
              <li>• Reserve accents for CTAs and alerts</li>
              <li>• Test all color combinations for contrast</li>
              <li>• Use gradient max once per page</li>
              <li>• Follow semantic meaning (red=error, magenta=success)</li>
            </ul>
          </div>
          <div className="border-2 border-destructive/50 rounded-lg p-6 bg-destructive/5">
            <div className="flex items-center gap-2 mb-4 text-destructive">
              <CheckCircle className="w-5 h-5 rotate-45" />
              <span className="font-bold">Don't</span>
            </div>
            <ul className="space-y-2 text-sm">
              <li>• Don't overuse accent colors</li>
              <li>• Don't rely on color alone for meaning</li>
              <li>• Don't use gradient in logos/icons</li>
              <li>• Don't create new colors without approval</li>
              <li>• Don't use low-contrast combinations</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Spacing Guidelines */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Spacing Guidelines</h2>
        <div className="border border-border rounded-lg p-6">
          <div className="space-y-4">
            <div>
              <h4 className="font-bold mb-2">Component Padding</h4>
              <p className="text-sm text-foreground/75">
                Use 16px (1rem) or 24px (1.5rem) for internal spacing
              </p>
              <div className="mt-2 p-4 bg-muted-light hatch-brand-orange rounded border-2 border-brand-orange">
                <div className="bg-background p-4 rounded border-2 border-brand-orange">Content</div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-2">Section Spacing</h4>
              <p className="text-sm text-foreground/75">
                Use 48px (3rem) or 64px (4rem) between major sections
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Element Gaps</h4>
              <p className="text-sm text-foreground/75">
                Use 8px (0.5rem) to 16px (1rem) between related elements
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Common Mistakes to Avoid</h2>
        <div className="space-y-4">
          {[
            {
              mistake: "Using too many font sizes",
              solution: "Stick to the type scale. Maximum 4-5 sizes per page.",
            },
            {
              mistake: "Inconsistent button styling",
              solution:
                "Use the defined button variants. Don't create custom styles.",
            },
            {
              mistake: "Cramped layouts on mobile",
              solution:
                "Increase padding/spacing on small screens. Touch targets 44px minimum.",
            },
            {
              mistake: "Missing focus states",
              solution:
                "Ensure all interactive elements have visible focus indicators.",
            },
            {
              mistake: "Gradient overuse",
              solution:
                "Limit gradient to 1 element max per screen. It loses impact when overused.",
            },
          ].map((item, i) => (
            <div key={i} className="border border-border rounded-lg p-4">
              <div className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-destructive/20 text-destructive flex items-center justify-center shrink-0 text-xs font-bold">
                  !
                </div>
                <div className="flex-1">
                  <p className="font-bold mb-1">{item.mistake}</p>
                  <p className="text-sm text-foreground/75">{item.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function ContributionModel() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-bold mb-4">Contribution Model</h1>
        <p className="text-lg text-foreground/75">
          How to propose changes, add components, and extend the design system
        </p>
      </div>

      {/* Process Overview */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Contribution Process</h2>
        <div className="border border-border rounded-lg p-8">
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center shrink-0 font-bold">
                1
              </div>
              <div className="flex-1">
                <h3 className="font-bold mb-2">Identify the Need</h3>
                <p className="text-sm text-foreground/75">
                  Document the use case. Why is this new component or pattern
                  needed? What problem does it solve?
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center shrink-0 font-bold">
                2
              </div>
              <div className="flex-1">
                <h3 className="font-bold mb-2">Check Existing Solutions</h3>
                <p className="text-sm text-foreground/75">
                  Review the current design system. Can an existing component be
                  adapted? Avoid duplication.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center shrink-0 font-bold">
                3
              </div>
              <div className="flex-1">
                <h3 className="font-bold mb-2">Propose the Change</h3>
                <p className="text-sm text-foreground/75">
                  Create a proposal with mockups, use cases, and accessibility
                  considerations. Share with the design team.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center shrink-0 font-bold">
                4
              </div>
              <div className="flex-1">
                <h3 className="font-bold mb-2">Review & Iterate</h3>
                <p className="text-sm text-foreground/75">
                  Gather feedback from designers, developers, and stakeholders.
                  Refine based on input.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center shrink-0 font-bold">
                5
              </div>
              <div className="flex-1">
                <h3 className="font-bold mb-2">Implement & Document</h3>
                <p className="text-sm text-foreground/75">
                  Build the component, write tests, create documentation, and
                  update this design system guide.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center shrink-0 font-bold">
                6
              </div>
              <div className="flex-1">
                <h3 className="font-bold mb-2">Publish & Communicate</h3>
                <p className="text-sm text-foreground/75">
                  Release the new component. Announce to the team with examples
                  and migration guides if needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roles & Responsibilities */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Roles & Responsibilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-border rounded-lg p-6">
            <GitBranch className="w-8 h-8 mb-3" />
            <h3 className="font-bold mb-2">Design System Team</h3>
            <ul className="space-y-1 text-sm text-foreground/75">
              <li>• Maintain core components</li>
              <li>• Review proposals</li>
              <li>• Update documentation</li>
              <li>• Ensure consistency</li>
            </ul>
          </div>
          <div className="border border-border rounded-lg p-6">
            <FileText className="w-8 h-8 mb-3" />
            <h3 className="font-bold mb-2">Product Designers</h3>
            <ul className="space-y-1 text-sm text-foreground/75">
              <li>• Use existing components</li>
              <li>• Propose new patterns</li>
              <li>• Provide feedback</li>
              <li>• Ensure accessibility</li>
            </ul>
          </div>
          <div className="border border-border rounded-lg p-6">
            <Code className="w-8 h-8 mb-3" />
            <h3 className="font-bold mb-2">Engineers</h3>
            <ul className="space-y-1 text-sm text-foreground/75">
              <li>• Implement components</li>
              <li>• Report bugs</li>
              <li>• Suggest improvements</li>
              <li>• Write tests</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Version Control */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Version Control</h2>
        <div className="border border-border rounded-lg p-6">
          <h3 className="font-bold mb-4">Semantic Versioning</h3>
          <p className="text-sm text-foreground/75 mb-4">
            The design system follows semantic versioning:{" "}
            <code className="bg-muted-light px-2 py-1 rounded">
              MAJOR.MINOR.PATCH
            </code>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <p className="font-bold mb-2">MAJOR (1.x.x)</p>
              <p className="text-sm text-foreground/75">
                Breaking changes that require code updates
              </p>
            </div>
            <div>
              <p className="font-bold mb-2">MINOR (x.1.x)</p>
              <p className="text-sm text-foreground/75">
                New features, backwards compatible
              </p>
            </div>
            <div>
              <p className="font-bold mb-2">PATCH (x.x.1)</p>
              <p className="text-sm text-foreground/75">
                Bug fixes, small improvements
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Support */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Getting Help</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-border rounded-lg p-6">
            <h3 className="font-bold mb-3">Questions?</h3>
            <p className="text-sm text-foreground/75 mb-4">
              If you have questions about using the design system, reach out to:
            </p>
            <ul className="space-y-2 text-sm">
              <li>• #design-system Slack channel</li>
              <li>• design-system@opticule.com</li>
              <li>• Weekly office hours (Fridays 2pm)</li>
            </ul>
          </div>
          <div className="border border-border rounded-lg p-6">
            <h3 className="font-bold mb-3">Found a Bug?</h3>
            <p className="text-sm text-foreground/75 mb-4">
              Report issues through our tracking system:
            </p>
            <ul className="space-y-2 text-sm">
              <li>• GitHub Issues (design-system repo)</li>
              <li>• Include: component, browser, screenshot</li>
              <li>• Tag with severity label</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
