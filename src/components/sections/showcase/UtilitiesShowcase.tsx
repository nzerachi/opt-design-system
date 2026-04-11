import { useState } from "react";
import { ScrollArea } from "../../utilities/ScrollArea";
import { ErrorBoundary } from "../../utilities/ErrorBoundary";
import { ClientOnly } from "../../utilities/ClientOnly";
import { CommandPalette, CommandPaletteGroup, CommandPaletteItem } from "../../overlay/CommandPalette";
import { Button } from "../../inputs/Button";
import { Badge } from "../../inputs/Badge";
import { Kbd } from "../../typography/Kbd";
import {
  PageHeader,
  DocSection,
  DemoBlock,
  UsageBlock,
  PropsTable,
  KeyboardTable,
  AccessibilitySection,
  A11yPoint,
  IC,
  CodeBlock,
} from "./DocComponents";

// ─── Fake error component for ErrorBoundary demo ─────────────────────────────

function BrokenComponent({ shouldThrow }: { shouldThrow: boolean }) {
  if (shouldThrow) throw new Error("Demo error — component crashed.");
  return (
    <div className="p-4 rounded-lg border border-border bg-bg-secondary/10 text-sm text-foreground/70">
      Component rendering normally.
    </div>
  );
}

// ─── Showcase ─────────────────────────────────────────────────────────────────

export function UtilitiesShowcase() {
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [shouldThrow, setShouldThrow] = useState(false);
  const [throwKey, setThrowKey] = useState(0);


  return (
    <div className="space-y-16">
      <PageHeader
        title="Utilities"
        description="Non-visual utility components that improve developer experience and UX patterns. Includes ScrollArea (custom styled scrollbars), CommandPalette (searchable command launcher), ErrorBoundary (crash recovery), and ClientOnly (SSR hydration guard)."
        badges={[
          { label: "Stable", color: "green" },
          { label: "v1.0.0", color: "gray" },
        ]}
        importPath={`import { ScrollArea, CommandPalette, ErrorBoundary, ClientOnly } from "@opticule/ds"`}
      />

      {/* ── ScrollArea ── */}
      <DocSection
        title="ScrollArea"
        description="A cross-browser custom scrollbar container built on Radix UI. Replaces native OS scrollbars with consistently styled thin scrollbars that work on Windows, macOS, and Linux."
      >
        <UsageBlock
          use={[
            { text: "Use for fixed-height content areas that may overflow (sidebars, lists, code blocks, chat logs)." },
            { text: "Use orientation='horizontal' for wide tables or tag lists that scroll horizontally." },
            { text: "Use orientation='both' for 2D canvas-style content that can scroll in either direction." },
          ]}
          avoid={[
            { text: "Don't wrap the entire page in a ScrollArea — use the native browser scroll instead." },
            { text: "Don't use ScrollArea for content that rarely overflows — the Radix overhead isn't justified." },
          ]}
        />
        <DemoBlock label="vertical scroll — fixed height list" vertical>
          <ScrollArea className="h-48 w-full max-w-sm rounded-xl border border-border">
            <div className="p-4 space-y-2">
              {Array.from({ length: 20 }, (_, i) => (
                <div key={i} className="flex items-center justify-between py-1.5 border-b border-border last:border-0">
                  <span className="text-sm font-medium">Component {i + 1}</span>
                  <Badge variant="outline" size="sm">Stable</Badge>
                </div>
              ))}
            </div>
          </ScrollArea>
        </DemoBlock>
        <DemoBlock label="horizontal scroll — wide content" vertical>
          <ScrollArea orientation="horizontal" className="w-full max-w-md rounded-xl border border-border">
            <div className="flex gap-3 p-4 w-max">
              {["React", "TypeScript", "Tailwind CSS", "Radix UI", "Vite", "Storybook", "Zod", "React Hook Form", "Lucide React", "Sonner"].map((tech) => (
                <div key={tech} className="shrink-0 rounded-lg border border-border bg-bg-secondary/20 px-4 py-3 text-sm font-medium">
                  {tech}
                </div>
              ))}
            </div>
          </ScrollArea>
        </DemoBlock>
        <PropsTable
          title="ScrollArea props"
          rows={[
            { name: "orientation", type: `"vertical" | "horizontal" | "both"`, default: `"vertical"`, description: "Which scrollbar(s) to show." },
            { name: "scrollbarClassName", type: "string", description: "Additional classes applied to the scrollbar track element." },
            { name: "className", type: "string", description: "Applied to the root element. Set a fixed height here for vertical scroll." },
          ]}
        />
      </DocSection>

      {/* ── CommandPalette ── */}
      <DocSection
        title="CommandPalette"
        description="A searchable command launcher triggered by ⌘K (or Ctrl+K). Supports grouped commands, keyboard navigation, and custom action callbacks. Essential for power-user workflows."
      >
        <DemoBlock label="open the command palette" vertical>
          <div className="flex items-center gap-3">
            <Button variant="outline" onClick={() => setPaletteOpen(true)}>
              Open Command Palette
            </Button>
            <span className="text-xs text-foreground/50">or press</span>
            <div className="flex items-center gap-1">
              <Kbd>⌘</Kbd>
              <Kbd>K</Kbd>
            </div>
          </div>
          <CommandPalette
            open={paletteOpen}
            onClose={() => setPaletteOpen(false)}
          >
            <CommandPaletteGroup label="Navigation">
              <CommandPaletteItem onSelect={() => setPaletteOpen(false)}>
                Go to Design Foundations
              </CommandPaletteItem>
              <CommandPaletteItem onSelect={() => setPaletteOpen(false)}>
                View Buttons showcase
              </CommandPaletteItem>
              <CommandPaletteItem onSelect={() => setPaletteOpen(false)}>
                View Color System
              </CommandPaletteItem>
            </CommandPaletteGroup>
            <CommandPaletteGroup label="Actions">
              <CommandPaletteItem onSelect={() => setPaletteOpen(false)}>
                Export design tokens
              </CommandPaletteItem>
              <CommandPaletteItem onSelect={() => setPaletteOpen(false)}>
                Run accessibility audit
              </CommandPaletteItem>
            </CommandPaletteGroup>
            <CommandPaletteGroup label="Settings">
              <CommandPaletteItem onSelect={() => setPaletteOpen(false)}>
                Switch to Light theme
              </CommandPaletteItem>
              <CommandPaletteItem onSelect={() => setPaletteOpen(false)}>
                Switch to Dark theme
              </CommandPaletteItem>
            </CommandPaletteGroup>
          </CommandPalette>
        </DemoBlock>
        <KeyboardTable rows={[
          { key: "⌘ + K / Ctrl + K", description: "Open the command palette" },
          { key: "↑ / ↓", description: "Navigate between commands" },
          { key: "Enter", description: "Execute the selected command" },
          { key: "Escape", description: "Close without selecting" },
        ]} />
        <CodeBlock
          language="tsx"
          code={`import { CommandPalette, CommandPaletteGroup, CommandPaletteItem } from "@opticule/ds";
import { useState, useEffect } from "react";

function App() {
  const [open, setOpen] = useState(false);

  // Wire up ⌘K globally
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(true);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <CommandPalette open={open} onClose={() => setOpen(false)}>
      <CommandPaletteGroup label="Navigation">
        <CommandPaletteItem onSelect={() => setOpen(false)}>
          Go to Home
        </CommandPaletteItem>
      </CommandPaletteGroup>
      <CommandPaletteGroup label="Actions">
        <CommandPaletteItem onSelect={() => setOpen(false)}>
          Create new document
        </CommandPaletteItem>
      </CommandPaletteGroup>
    </CommandPalette>
  );
}`}
        />
      </DocSection>

      {/* ── ErrorBoundary ── */}
      <DocSection
        title="ErrorBoundary"
        description="A React error boundary that catches rendering errors in its subtree and displays a fallback UI instead of crashing the entire application."
      >
        <DemoBlock label="error recovery demo" vertical>
          <div className="space-y-3 w-full max-w-sm">
            <ErrorBoundary
              key={throwKey}
              fallback={
                <div className="rounded-xl border border-brand-folly/30 bg-brand-folly/5 p-4 space-y-2">
                  <p className="text-sm font-semibold text-brand-folly">Something went wrong</p>
                  <p className="text-xs text-foreground/60">The component crashed. Click below to reset.</p>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => { setShouldThrow(false); setThrowKey((k) => k + 1); }}
                  >
                    Reset
                  </Button>
                </div>
              }
            >
              <BrokenComponent shouldThrow={shouldThrow} />
            </ErrorBoundary>
            <Button
              variant="destructive"
              size="sm"
              onClick={() => setShouldThrow(true)}
            >
              Trigger error
            </Button>
          </div>
        </DemoBlock>
        <CodeBlock
          language="tsx"
          code={`import { ErrorBoundary } from "@opticule/ds";

// With custom fallback
<ErrorBoundary
  fallback={
    <div>
      <p>Something went wrong.</p>
      <button onClick={reset}>Try again</button>
    </div>
  }
>
  <RiskyComponent />
</ErrorBoundary>

// With onError callback for logging
<ErrorBoundary
  onError={(error, info) => {
    Sentry.captureException(error, { extra: info });
  }}
  fallback={<ErrorFallback />}
>
  <App />
</ErrorBoundary>`}
        />
      </DocSection>

      {/* ── ClientOnly ── */}
      <DocSection
        title="ClientOnly"
        description="Renders children only after client-side hydration. Use to wrap components that depend on browser APIs (window, localStorage, document) in SSR environments like Next.js."
      >
        <DemoBlock label="SSR hydration guard" vertical>
          <div className="rounded-xl border border-border bg-bg-secondary/10 p-5 space-y-2 max-w-sm">
            <ClientOnly fallback={
              <span className="text-xs text-foreground/50 font-mono">Server rendering...</span>
            }>
              <span className="text-sm text-foreground/70">
                Rendered on the client — window.innerWidth: <code className="text-brand-orange font-mono">{typeof window !== "undefined" ? window.innerWidth : "N/A"}px</code>
              </span>
            </ClientOnly>
          </div>
        </DemoBlock>
        <CodeBlock
          language="tsx"
          code={`import { ClientOnly } from "@opticule/ds";

// ✓ Wrap browser-API-dependent components
<ClientOnly fallback={<Skeleton className="h-10 w-full" />}>
  <ThemeToggle />
</ClientOnly>

// ✓ Wrap localStorage-dependent UI
<ClientOnly>
  <UserPreferences />
</ClientOnly>`}
        />
        <PropsTable
          title="ClientOnly props"
          rows={[
            { name: "children", type: "ReactNode", required: true, description: "Content rendered only after client-side hydration." },
            { name: "fallback", type: "ReactNode", description: "Content shown during SSR and before hydration. Defaults to null." },
          ]}
        />
      </DocSection>

      <DocSection title="Accessibility">
        <AccessibilitySection>
          <A11yPoint>ScrollArea exposes custom scrollbars but the scroll viewport is the native scrollable element — keyboard scrolling (arrow keys, Page Up/Down, Home/End) still works.</A11yPoint>
          <A11yPoint>CommandPalette uses <IC>role="combobox"</IC> with <IC>aria-expanded</IC>, <IC>aria-controls</IC>, and an ARIA listbox for the command list — fully screen-reader navigable.</A11yPoint>
          <A11yPoint>ErrorBoundary fallback content should include a visible error message and a recovery action (Reset/Retry button) — never render an empty fallback.</A11yPoint>
          <A11yPoint>ClientOnly's <IC>fallback</IC> should match the dimensions of the client content to prevent layout shift on hydration.</A11yPoint>
        </AccessibilitySection>
      </DocSection>
    </div>
  );
}
