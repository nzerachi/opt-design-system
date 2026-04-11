import Symbol from "@/assets/symbol";
import { Eye, Search, ShoppingCart, Filter, ChevronDown, X, CheckCircle, AlertTriangle, Info, Loader2, CheckCircle2, Clock, XCircle, Plus, Minus } from "lucide-react";
import { useState } from "react";
import { Alert } from "../feedback/Alert";
import { Badge } from "../inputs/Badge";
import { Button } from "../inputs/Button";
import { Spinner } from "../feedback/Spinner";
import { ProgressBar } from "../feedback/ProgressBar";
import { Input } from "../inputs/Input";
import { Checkbox } from "../inputs/Checkbox";

interface PatternsSectionProps {
  activeSubSection: string;
}

export function PatternsSection({ activeSubSection }: PatternsSectionProps) {
  switch (activeSubSection) {
    case "layout-patterns":      return <LayoutPatterns />;
    case "functional-patterns":  return <FunctionalPatterns />;
    case "dialogs":              return <DialogsPattern />;
    case "empty-states":         return <EmptyStatesPattern />;
    case "filtering":            return <FilteringPattern />;
    case "forms-pattern":        return <FormsPattern />;
    case "loading-pattern":      return <LoadingPattern />;
    case "notifications-pattern": return <NotificationsPattern />;
    case "status-indicators":    return <StatusIndicatorsPattern />;
    default:                     return <LayoutPatterns />;
  }
}

// ─── Shared doc header ────────────────────────────────────────────────────────

function PatternHeader({ title, description }: { title: string; description: string }) {
  return (
    <div className="space-y-4 mb-12 pb-8 border-b border-border">
      <div className="flex items-center gap-2 mb-2">
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
          Pattern
        </span>
      </div>
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-lg text-foreground/60 max-w-3xl leading-relaxed">{description}</p>
    </div>
  );
}

function P({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">{title}</h2>
      {children}
    </section>
  );
}

function Demo({ label, children, vertical }: { label: string; children: React.ReactNode; vertical?: boolean }) {
  return (
    <div className="space-y-2">
      <h3 className="text-xs font-semibold uppercase tracking-widest text-foreground/40">{label}</h3>
      <div className={`border border-border rounded-xl p-6 bg-bg-secondary/30 ${vertical ? "flex flex-col gap-4" : "flex flex-wrap gap-3 items-center"}`}>
        {children}
      </div>
    </div>
  );
}

// ─── Layout Patterns ──────────────────────────────────────────────────────────

function LayoutPatterns() {
  return (
    <div className="space-y-12">
      <PatternHeader title="Layout Patterns" description="Common layout structures for consistent page architecture across products." />

      <P title="Hero Section">
        <Demo label="landing page hero" vertical>
          <div className="border border-border rounded-xl overflow-hidden w-full">
            <div className="bg-linear-to-br from-muted/50 to-muted/20 p-16 text-center">
              <h1 className="md:text-5xl text-[44px] leading-12 font-bold mb-4">See the World Clearly</h1>
              <p className="text-sm text-foreground/75 max-w-2xl mx-auto mb-8">Browse our curated and certified exclusive frames</p>
              <button className="px-8 py-4 bg-foreground hover:bg-background hover:text-foreground hover:outline-2 focus:bg-background focus:text-foreground focus:outline-2 text-background rounded-lg font-bold">
                Get a Pair Now
              </button>
            </div>
          </div>
        </Demo>
      </P>

      <P title="Card Grid">
        <Demo label="responsive product/feature grid" vertical>
          <div className="border border-border rounded-xl p-8 w-full">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="border border-border rounded-lg p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-muted-light flex items-center justify-center mx-auto mb-3">
                    <Symbol className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-sm mb-1">Feature {i}</h3>
                  <p className="text-xs text-foreground/75">Description here</p>
                </div>
              ))}
            </div>
          </div>
        </Demo>
      </P>

      <P title="Two-Column Layout">
        <Demo label="image + text split" vertical>
          <div className="border border-border rounded-xl overflow-hidden w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              <div className="bg-muted-light aspect-square flex items-center justify-center">
                <Symbol className="w-24 h-24 text-foreground/75" />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">About Our Lenses</h3>
                <p className="text-foreground/75 mb-6">With approximately <strong>576 megapixels</strong>, your eyes are so <em className="text-brand-folly not-italic">powerful</em> that millions of photoreceptors send visual data to your brain.</p>
                <button className="px-6 py-3 bg-foreground text-background rounded-lg font-medium self-start">Learn More</button>
              </div>
            </div>
          </div>
        </Demo>
      </P>

      <P title="Dashboard Layout">
        <Demo label="sidebar + content area" vertical>
          <div className="border border-border rounded-xl overflow-hidden w-full">
            <div className="flex h-[300px]">
              <div className="w-40 bg-muted-light border-r border-border p-4 space-y-2">
                {[0, 1, 2, 3].map((i) => (
                  <div key={i} className={`h-8 rounded ${i === 0 ? "bg-foreground/15" : "bg-muted-light"}`} />
                ))}
              </div>
              <div className="flex-1 p-6">
                <div className="h-6 bg-muted-light rounded w-40 mb-5" />
                <div className="grid grid-cols-3 gap-4 mb-5">
                  {[0, 1, 2].map((i) => <div key={i} className="h-20 bg-muted/50 rounded" />)}
                </div>
                <div className="h-32 bg-muted-light rounded" />
              </div>
            </div>
          </div>
        </Demo>
      </P>
    </div>
  );
}

// ─── Functional Patterns ──────────────────────────────────────────────────────

function FunctionalPatterns() {
  return (
    <div className="space-y-12">
      <PatternHeader title="Functional Patterns" description="Reusable solutions for common user interactions and flows." />

      <P title="Search Pattern">
        <Demo label="search with suggestions" vertical>
          <div className="max-w-md w-full">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/75" />
              <input type="search" placeholder="Search frames, lenses, accessories…" className="w-full pl-10 pr-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/20" />
            </div>
            <div className="mt-2 border border-border rounded-lg bg-background p-4 shadow-lg">
              <p className="text-xs text-foreground/75 mb-2">Popular Searches</p>
              <div className="space-y-2">
                {["Blue light glasses", "Aviator sunglasses", "Progressive lenses"].map((s) => (
                  <div key={s} className="flex items-center gap-2 p-2 hover:bg-muted-light rounded cursor-pointer">
                    <Search className="w-4 h-4 text-foreground/75" />
                    <span className="text-sm">{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Demo>
      </P>

      <P title="Authentication Pattern">
        <Demo label="sign-in form with social options" vertical>
          <div className="max-w-md mx-auto w-full">
            <h3 className="text-2xl font-bold mb-6 text-center">Sign In</h3>
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input type="email" placeholder="you@example.com" className="w-full px-4 py-3 bg-input-background border border-border rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Password</label>
                <input type="password" placeholder="••••••••" className="w-full px-4 py-3 bg-input-background border border-border rounded-lg" />
              </div>
            </div>
            <Button variant="primary" className="w-full mb-4">Sign In</Button>
            <div className="relative mb-4">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-border" /></div>
              <div className="relative flex justify-center text-sm"><span className="px-2 bg-background text-foreground/75">Or continue with</span></div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <button className="px-4 py-2 border border-border rounded-lg hover:bg-muted">Google</button>
              <button className="px-4 py-2 border border-border rounded-lg hover:bg-muted">Apple</button>
            </div>
          </div>
        </Demo>
      </P>

      <P title="Cart Summary Pattern">
        <Demo label="shopping cart with totals" vertical>
          <div className="max-w-md w-full">
            <h3 className="font-bold mb-4 flex items-center gap-2"><ShoppingCart className="w-5 h-5" /> Cart (2 items)</h3>
            <div className="space-y-4 mb-6">
              {[{ name: "Classic Round Frames", desc: "Black, Medium", price: "$89.00" }, { name: "Blue Light Blockers", desc: "Clear, Large", price: "$69.00" }].map((item) => (
                <div key={item.name} className="flex gap-4">
                  <div className="w-14 h-14 bg-muted-light rounded flex items-center justify-center shrink-0"><Eye className="w-7 h-7 text-foreground/75" /></div>
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">{item.name}</h4>
                    <p className="text-xs text-foreground/75">{item.desc}</p>
                    <p className="text-sm font-bold mt-1">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-border pt-4 space-y-2">
              <div className="flex justify-between text-sm"><span className="text-foreground/75">Subtotal</span><span>$158.00</span></div>
              <div className="flex justify-between text-sm"><span className="text-foreground/75">Shipping</span><span>$10.00</span></div>
              <div className="flex justify-between font-bold pt-2 border-t border-border"><span>Total</span><span>$168.00</span></div>
            </div>
            <Button variant="primary" className="w-full mt-6">Proceed to Checkout</Button>
          </div>
        </Demo>
      </P>
    </div>
  );
}

// ─── Dialogs Pattern ──────────────────────────────────────────────────────────

function DialogsPattern() {
  return (
    <div className="space-y-12">
      <PatternHeader
        title="Dialogs"
        description="Guidelines for choosing between Modal, Drawer, AlertDialog, Popover, and HoverCard. Each dialog type serves a distinct interaction model — choosing the right one is critical to avoiding workflow interruption."
      />

      <P title="Dialog Type Selector">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { component: "Modal", trigger: "User action", blocking: true, use: "Multi-step tasks, forms, confirmations that require the user's full attention", example: "Edit profile, create new record" },
            { component: "AlertDialog", trigger: "Destructive action", blocking: true, use: "Irreversible actions that require explicit confirmation before proceeding", example: "Delete account, discard changes" },
            { component: "Drawer", trigger: "User action", blocking: true, use: "Mobile-first flows, secondary panels, settings that slide in from an edge", example: "Filter panel, shopping cart" },
            { component: "Popover", trigger: "Click", blocking: false, use: "Supplemental options, form inputs within context (date picker, color picker)", example: "Date picker, more options menu" },
            { component: "HoverCard", trigger: "Hover", blocking: false, use: "Preview information without navigating away — non-interactive content", example: "User profile preview, link preview" },
            { component: "Tooltip", trigger: "Hover / Focus", blocking: false, use: "Short labels for icon-only buttons and UI elements that lack visible text", example: "Icon button label, truncated text" },
          ].map((d) => (
            <div key={d.component} className="rounded-xl border border-border p-5 space-y-3 bg-bg-secondary/10">
              <div className="flex items-center justify-between">
                <code className="text-sm font-mono font-semibold text-brand-orange">{d.component}</code>
                <Badge variant={d.blocking ? "error" : "success"} size="sm">{d.blocking ? "Blocking" : "Non-blocking"}</Badge>
              </div>
              <div className="text-xs text-foreground/40 font-mono">Trigger: {d.trigger}</div>
              <p className="text-xs text-foreground/70 leading-relaxed">{d.use}</p>
              <p className="text-xs text-foreground/40 italic">{d.example}</p>
            </div>
          ))}
        </div>
      </P>

      <P title="When to Use a Dialog">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-5 space-y-3">
            <p className="text-xs font-semibold text-green-600 uppercase tracking-wide">Use a dialog when</p>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li className="flex gap-2"><CheckCircle className="size-4 text-green-500 shrink-0 mt-0.5" /><span>The task cannot be done inline without losing context</span></li>
              <li className="flex gap-2"><CheckCircle className="size-4 text-green-500 shrink-0 mt-0.5" /><span>The action is destructive or irreversible</span></li>
              <li className="flex gap-2"><CheckCircle className="size-4 text-green-500 shrink-0 mt-0.5" /><span>The user needs to complete a multi-step form</span></li>
              <li className="flex gap-2"><CheckCircle className="size-4 text-green-500 shrink-0 mt-0.5" /><span>The user needs preview information before navigating</span></li>
            </ul>
          </div>
          <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5 space-y-3">
            <p className="text-xs font-semibold text-red-600 uppercase tracking-wide">Don't use a dialog when</p>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li className="flex gap-2"><X className="size-4 text-red-500 shrink-0 mt-0.5" /><span>The action can be done inline with inline editing</span></li>
              <li className="flex gap-2"><X className="size-4 text-red-500 shrink-0 mt-0.5" /><span>The content is complex enough to be its own page</span></li>
              <li className="flex gap-2"><X className="size-4 text-red-500 shrink-0 mt-0.5" /><span>You need to nest dialogs (dialog inside a dialog)</span></li>
              <li className="flex gap-2"><X className="size-4 text-red-500 shrink-0 mt-0.5" /><span>The dialog would show on every page load</span></li>
            </ul>
          </div>
        </div>
      </P>

      <P title="Accessibility Requirements">
        <div className="rounded-xl border border-blue-500/20 bg-blue-500/5 p-5 space-y-3">
          <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide">Dialog Accessibility Checklist</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-sm text-foreground/70">
            {[
              "Focus moves to the dialog on open",
              "Focus is trapped inside until closed",
              "Escape key closes the dialog",
              "Focus returns to trigger on close",
              "Background content is aria-hidden",
              "role='dialog' or role='alertdialog'",
              "aria-modal='true' on the dialog container",
              "aria-labelledby pointing to the title",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <div className="size-4 rounded border-2 border-blue-400/40 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </P>
    </div>
  );
}

// ─── Empty States Pattern ─────────────────────────────────────────────────────

function EmptyStatesPattern() {
  return (
    <div className="space-y-12">
      <PatternHeader
        title="Empty States"
        description="Empty states appear when there is no content to display in a container. A well-designed empty state provides context, guides the user toward the next action, and keeps the experience coherent."
      />

      <P title="Empty State Anatomy">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              type: "First Use",
              desc: "User hasn't created any content yet. Motivate them to get started.",
              icon: "✦",
              title: "No components yet",
              body: "Start building your design system by adding your first component.",
              action: "Add component",
            },
            {
              type: "No Results",
              desc: "Search or filter returned nothing. Help them adjust their query.",
              icon: "⊘",
              title: "No results for 'button'",
              body: "Try different keywords or clear your filters.",
              action: "Clear filters",
            },
            {
              type: "Error State",
              desc: "Something failed. Give a path to recovery.",
              icon: "⚠",
              title: "Couldn't load components",
              body: "There was a problem fetching the component list.",
              action: "Try again",
            },
          ].map((s) => (
            <div key={s.type} className="space-y-2">
              <Badge variant="outline" size="sm">{s.type}</Badge>
              <div className="rounded-xl border border-border p-8 text-center space-y-4 bg-bg-secondary/10">
                <div className="text-4xl text-foreground/20 font-mono">{s.icon}</div>
                <div className="space-y-2">
                  <p className="font-semibold text-sm">{s.title}</p>
                  <p className="text-xs text-foreground/60 max-w-[200px] mx-auto">{s.body}</p>
                </div>
                <Button variant="primary" size="sm">{s.action}</Button>
              </div>
              <p className="text-xs text-foreground/50">{s.desc}</p>
            </div>
          ))}
        </div>
      </P>

      <P title="Rules for Empty States">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-5 space-y-2">
            <p className="text-xs font-semibold text-green-600 uppercase tracking-wide">Do</p>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>• Always include a heading that describes what's empty</li>
              <li>• Provide a primary action to fill the void</li>
              <li>• Use an illustration or icon for visual context</li>
              <li>• Be specific: "No saved searches" not "Nothing here"</li>
              <li>• For no-results, show what was searched and how to adjust</li>
            </ul>
          </div>
          <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5 space-y-2">
            <p className="text-xs font-semibold text-red-600 uppercase tracking-wide">Don't</p>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>• Don't leave it completely blank — always communicate</li>
              <li>• Don't use vague copy like "Nothing to show"</li>
              <li>• Don't show an empty state while content is loading</li>
              <li>• Don't make the primary action ambiguous</li>
              <li>• Don't use the same empty state for all contexts</li>
            </ul>
          </div>
        </div>
      </P>
    </div>
  );
}

// ─── Filtering Pattern ────────────────────────────────────────────────────────

function FilteringPattern() {
  const [activeFilters, setActiveFilters] = useState<string[]>(["Stable"]);
  const [search, setSearch] = useState("");

  const filters = ["Stable", "Beta", "Deprecated", "New"];
  const categories = ["Inputs", "Layout", "Feedback", "Navigation", "Overlay", "Typography"];

  const toggle = (f: string) =>
    setActiveFilters((prev) => prev.includes(f) ? prev.filter((x) => x !== f) : [...prev, f]);

  return (
    <div className="space-y-12">
      <PatternHeader
        title="Filtering"
        description="Filtering patterns help users narrow large datasets. Opticule DS supports inline filters, filter tags with clear actions, faceted search, and combined search + filter workflows."
      />

      <P title="Filter Types">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { type: "Inline filter bar", use: "Compact toolbar above a list or grid. Best for 3–8 filter options.", example: "Status filter above a component list" },
            { type: "Filter panel (sidebar)", use: "Complex filtering with many facets. Stays visible while browsing.", example: "E-commerce product filters" },
            { type: "Filter tags", use: "Show active filters as removable chips. Always pair with a 'Clear all' option.", example: "Active search refinements" },
          ].map((ft) => (
            <div key={ft.type} className="rounded-xl border border-border p-5 space-y-2 bg-bg-secondary/10">
              <p className="text-sm font-semibold">{ft.type}</p>
              <p className="text-xs text-foreground/60">{ft.use}</p>
              <p className="text-[10px] text-foreground/40 italic">{ft.example}</p>
            </div>
          ))}
        </div>
      </P>

      <P title="Interactive Demo — Inline Filter Bar">
        <Demo label="search + filter bar" vertical>
          <div className="w-full space-y-4">
            <div className="flex flex-wrap gap-3 items-center">
              <div className="relative flex-1 min-w-[200px]">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-foreground/50" />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search components…"
                  className="w-full pl-9 pr-4 py-2 text-sm bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange/30"
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                {filters.map((f) => (
                  <button
                    key={f}
                    onClick={() => toggle(f)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-full border transition-all ${
                      activeFilters.includes(f)
                        ? "bg-brand-orange/15 border-brand-orange/50 text-brand-orange"
                        : "border-border text-foreground/60 hover:border-foreground/30"
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            {activeFilters.length > 0 && (
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs text-foreground/40 font-medium">Active:</span>
                {activeFilters.map((f) => (
                  <div key={f} className="flex items-center gap-1 bg-brand-orange/10 border border-brand-orange/30 rounded-full pl-2.5 pr-1 py-0.5">
                    <span className="text-xs font-medium text-brand-orange">{f}</span>
                    <button onClick={() => toggle(f)} className="size-4 rounded-full hover:bg-brand-orange/20 flex items-center justify-center">
                      <X className="size-2.5 text-brand-orange" />
                    </button>
                  </div>
                ))}
                <button onClick={() => setActiveFilters([])} className="text-xs text-foreground/50 hover:text-foreground underline">
                  Clear all
                </button>
              </div>
            )}

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {categories.map((cat) => (
                <div key={cat} className="rounded-lg border border-border p-3 text-sm font-medium bg-background">{cat}</div>
              ))}
            </div>
          </div>
        </Demo>
      </P>

      <P title="Filter Accessibility">
        <Alert variant="info" title="Announce filter changes to screen readers">
          When filters are applied and the result count changes, use an <code className="text-xs">aria-live="polite"</code> region to announce the new count: "Showing 12 of 48 components."
        </Alert>
      </P>
    </div>
  );
}

// ─── Forms Pattern ────────────────────────────────────────────────────────────

function FormsPattern() {
  const [step, setStep] = useState(0);
  const steps = ["Account", "Profile", "Review"];

  return (
    <div className="space-y-12">
      <PatternHeader
        title="Forms"
        description="Guidelines for designing forms that users can complete quickly and without errors. Covers single-step forms, multi-step wizards, inline editing, and validation patterns."
      />

      <P title="Form Layout Principles">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { principle: "One column", desc: "Single-column layouts are faster to complete. Multi-column only when fields are tightly related (First + Last name)." },
            { principle: "Logical grouping", desc: "Group related fields with a visible heading or card boundary. Don't mix personal info with payment fields without separation." },
            { principle: "Top-aligned labels", desc: "Labels above inputs have the fastest completion time. Avoid placeholder-only labels — they disappear on focus." },
          ].map((p) => (
            <div key={p.principle} className="rounded-xl border border-border p-5 space-y-2 bg-bg-secondary/10">
              <p className="text-sm font-semibold">{p.principle}</p>
              <p className="text-xs text-foreground/60 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </P>

      <P title="Multi-Step Form (Wizard)">
        <Demo label="step-by-step form with progress indicator" vertical>
          <div className="w-full max-w-md space-y-6">
            <div className="flex items-center gap-0 w-full">
              {steps.map((s, i) => (
                <div key={s} className="flex items-center flex-1">
                  <button
                    onClick={() => setStep(i)}
                    className={`size-8 rounded-full text-xs font-bold shrink-0 border-2 transition-all ${
                      i < step ? "bg-brand-orange border-brand-orange text-white" :
                      i === step ? "border-brand-orange text-brand-orange bg-brand-orange/10" :
                      "border-border text-foreground/40 bg-background"
                    }`}
                  >
                    {i < step ? "✓" : i + 1}
                  </button>
                  <span className={`text-xs font-medium ml-2 ${i === step ? "text-foreground" : "text-foreground/40"}`}>{s}</span>
                  {i < steps.length - 1 && <div className={`flex-1 h-px mx-3 ${i < step ? "bg-brand-orange" : "bg-border"}`} />}
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-border p-5 space-y-4 bg-bg-secondary/10 min-h-[120px]">
              {step === 0 && (
                <div className="space-y-3">
                  <p className="text-sm font-semibold">Account details</p>
                  <input placeholder="Email address" className="w-full px-3 py-2 text-sm border border-border rounded-lg bg-input-background" />
                  <input placeholder="Password" type="password" className="w-full px-3 py-2 text-sm border border-border rounded-lg bg-input-background" />
                </div>
              )}
              {step === 1 && (
                <div className="space-y-3">
                  <p className="text-sm font-semibold">Profile information</p>
                  <input placeholder="Full name" className="w-full px-3 py-2 text-sm border border-border rounded-lg bg-input-background" />
                  <input placeholder="Job title" className="w-full px-3 py-2 text-sm border border-border rounded-lg bg-input-background" />
                </div>
              )}
              {step === 2 && (
                <div className="space-y-3">
                  <p className="text-sm font-semibold">Review & submit</p>
                  <p className="text-xs text-foreground/60">Check your details before creating your account.</p>
                  <Alert variant="success" title="Everything looks good!" />
                </div>
              )}
            </div>

            <div className="flex justify-between">
              <Button variant="outline" size="sm" disabled={step === 0} onClick={() => setStep((s) => s - 1)}>Back</Button>
              <Button variant="primary" size="sm" onClick={() => setStep((s) => Math.min(s + 1, steps.length - 1))}>
                {step === steps.length - 1 ? "Create account" : "Continue"}
              </Button>
            </div>
          </div>
        </Demo>
      </P>

      <P title="Validation Best Practices">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-5 space-y-2">
            <p className="text-xs font-semibold text-green-600 uppercase">Do</p>
            <ul className="space-y-1.5 text-sm text-foreground/70">
              <li>• Validate on blur (when the user leaves the field)</li>
              <li>• Show success confirmation for critical fields (email)</li>
              <li>• Display error adjacent to the failing field</li>
              <li>• Preserve valid input on submit failure</li>
              <li>• Focus the first error on submit</li>
            </ul>
          </div>
          <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5 space-y-2">
            <p className="text-xs font-semibold text-red-600 uppercase">Don't</p>
            <ul className="space-y-1.5 text-sm text-foreground/70">
              <li>• Don't validate while the user is still typing</li>
              <li>• Don't show errors only at the top of the form</li>
              <li>• Don't clear the form on submit failure</li>
              <li>• Don't use modal dialogs for form errors</li>
              <li>• Don't use color alone to indicate errors</li>
            </ul>
          </div>
        </div>
      </P>
    </div>
  );
}

// ─── Loading Pattern ──────────────────────────────────────────────────────────

function LoadingPattern() {
  return (
    <div className="space-y-12">
      <PatternHeader
        title="Loading"
        description="Guidelines for representing loading states at every level — from page loads to individual component fetches. The right loading pattern reduces perceived wait time and keeps users informed."
      />

      <P title="Choosing the Right Loading Pattern">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { component: "Skeleton", use: "Known content shape — replaces text, images, cards while loading. Reduces layout shift.", when: "Lists, feeds, profile cards, dashboards", score: "Best for complex pages" },
            { component: "Spinner", use: "Unknown duration or shape — single action loading state.", when: "Button loading, page transition, lazy-loaded section", score: "Best for actions" },
            { component: "ProgressBar", use: "Known progress — file upload, multi-step process, installation.", when: "Upload, export, onboarding steps", score: "Best for measurable progress" },
            { component: "InlineLoading", use: "Small inline status within a form field, table row, or button.", when: "Auto-save indicator, row-level action", score: "Best for inline contexts" },
          ].map((p) => (
            <div key={p.component} className="rounded-xl border border-border p-5 space-y-3 bg-bg-secondary/10">
              <div className="flex items-center justify-between">
                <code className="text-sm font-mono font-semibold text-brand-orange">{p.component}</code>
                <span className="text-[10px] font-medium text-brand-purple/80">{p.score}</span>
              </div>
              <p className="text-xs text-foreground/70">{p.use}</p>
              <p className="text-[10px] text-foreground/40">Used for: {p.when}</p>
            </div>
          ))}
        </div>
      </P>

      <P title="Live Examples">
        <Demo label="spinner — action loading" vertical>
          <div className="flex flex-wrap gap-6 items-center">
            {(["sm", "md", "lg", "xl"] as const).map((size) => (
              <div key={size} className="flex flex-col items-center gap-2">
                <Spinner size={size} color="brand" />
                <span className="text-xs text-foreground/40 font-mono">{size}</span>
              </div>
            ))}
          </div>
        </Demo>
        <Demo label="progress bar — known progress" vertical>
          <div className="w-full max-w-md space-y-3">
            <ProgressBar value={35} label="Uploading design tokens…" showValue />
            <ProgressBar value={72} color="success" label="Processing components…" showValue />
            <ProgressBar value={100} color="success" label="Export complete" showValue />
          </div>
        </Demo>
        <Demo label="skeleton — content placeholder" vertical>
          <div className="w-full max-w-sm space-y-4">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-full bg-muted-light/50 animate-pulse shrink-0" />
              <div className="flex-1 space-y-1.5">
                <div className="h-3 bg-muted-light/50 rounded animate-pulse w-32" />
                <div className="h-2.5 bg-muted-light/30 rounded animate-pulse w-20" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-3 bg-muted-light/50 rounded animate-pulse w-full" />
              <div className="h-3 bg-muted-light/50 rounded animate-pulse w-5/6" />
              <div className="h-3 bg-muted-light/30 rounded animate-pulse w-4/6" />
            </div>
            <div className="h-24 bg-muted-light/30 rounded-xl animate-pulse w-full" />
          </div>
        </Demo>
      </P>

      <P title="Loading Best Practices">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-5 space-y-2">
            <p className="text-xs font-semibold text-green-600 uppercase">Do</p>
            <ul className="space-y-1.5 text-sm text-foreground/70">
              <li>• Show skeleton screens for content with a known shape</li>
              <li>• Indicate progress percentage when it's measurable</li>
              <li>• Use optimistic UI for fast operations (under 1s)</li>
              <li>• Always show a spinner for async button actions</li>
              <li>• Announce loading state to screen readers with aria-live</li>
            </ul>
          </div>
          <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5 space-y-2">
            <p className="text-xs font-semibold text-red-600 uppercase">Don't</p>
            <ul className="space-y-1.5 text-sm text-foreground/70">
              <li>• Don't show a progress bar for operations under 1 second</li>
              <li>• Don't use spinner + skeleton together in the same area</li>
              <li>• Don't block the entire page for partial data loads</li>
              <li>• Don't animate loading states for users with prefers-reduced-motion</li>
              <li>• Don't leave the user without feedback for more than 300ms</li>
            </ul>
          </div>
        </div>
      </P>
    </div>
  );
}

// ─── Notifications Pattern ────────────────────────────────────────────────────

function NotificationsPattern() {
  return (
    <div className="space-y-12">
      <PatternHeader
        title="Notifications"
        description="Guidelines for communicating system and application events. Choosing the right notification type depends on urgency, persistence, and whether user action is required."
      />

      <P title="Notification Type Selector">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { type: "Toast", urgency: "Low–Medium", persistent: false, requires_action: false, use: "Transient system feedback. Auto-dismisses. Non-blocking.", examples: "Saved, copied, deleted, exported" },
            { type: "Inline Alert", urgency: "Medium–High", persistent: true, requires_action: false, use: "Contextual feedback within a page or form section. Stays until resolved.", examples: "Form validation summary, API warning" },
            { type: "Banner (page-level)", urgency: "High", persistent: true, requires_action: true, use: "System-wide messages that affect the entire product. Cannot be dismissed without action.", examples: "Service outage, billing overdue, security alert" },
            { type: "Modal AlertDialog", urgency: "Critical", persistent: true, requires_action: true, use: "Interrupting messages requiring immediate decision. Blocks all interaction.", examples: "Confirm delete, session expired, critical error" },
          ].map((n) => (
            <div key={n.type} className="rounded-xl border border-border p-5 space-y-3 bg-bg-secondary/10">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <code className="text-sm font-mono font-semibold text-brand-orange">{n.type}</code>
                <div className="flex gap-1.5">
                  <Badge variant={n.persistent ? "warning" : "success"} size="sm">{n.persistent ? "Persistent" : "Auto-dismiss"}</Badge>
                  <Badge variant={n.requires_action ? "error" : "outline"} size="sm">{n.requires_action ? "Action required" : "Optional"}</Badge>
                </div>
              </div>
              <p className="text-xs text-foreground/70">{n.use}</p>
              <p className="text-[10px] text-foreground/40 italic">{n.examples}</p>
            </div>
          ))}
        </div>
      </P>

      <P title="Live Alert Examples">
        <Demo label="all alert variants" vertical>
          <Alert variant="info" title="New component available" description="Tile component is now in Beta. Check the Component Library." />
          <Alert variant="success" title="Export complete" description="Your design tokens have been exported as tokens.json." />
          <Alert variant="warning" title="Deprecated prop" description="The size='large' prop is deprecated. Use size='lg' instead." />
          <Alert variant="error" title="Build failed" description="TypeScript errors in ButtonsShowcase.tsx on line 42." />
        </Demo>
      </P>

      <P title="Notification Hierarchy — Visual Priority Order">
        <div className="rounded-xl border border-border overflow-hidden max-w-lg">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-foreground/5">
                <th className="text-left px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-foreground/50">Priority</th>
                <th className="text-left px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-foreground/50">Type</th>
                <th className="text-left px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-foreground/50">Disruption</th>
              </tr>
            </thead>
            <tbody>
              {[
                { priority: "1 — Highest", type: "AlertDialog / Modal", disruption: "Full-page block" },
                { priority: "2", type: "Page banner", disruption: "Top of page, scrolls with content" },
                { priority: "3", type: "Toast (error)", disruption: "Corner overlay, auto-dismisses" },
                { priority: "4", type: "Inline Alert", disruption: "Within content, persistent" },
                { priority: "5 — Lowest", type: "Toast (success/info)", disruption: "Corner overlay, auto-dismisses" },
              ].map((row, i) => (
                <tr key={row.priority} className={`border-b border-border last:border-0 ${i % 2 === 0 ? "" : "bg-foreground/[0.015]"}`}>
                  <td className="px-4 py-3 text-xs text-foreground/60">{row.priority}</td>
                  <td className="px-4 py-3 text-xs"><code className="font-mono text-brand-orange">{row.type}</code></td>
                  <td className="px-4 py-3 text-xs text-foreground/60">{row.disruption}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </P>
    </div>
  );
}

// ─── Status Indicators Pattern ────────────────────────────────────────────────

function StatusIndicatorsPattern() {
  return (
    <div className="space-y-12">
      <PatternHeader
        title="Status Indicators"
        description="Guidelines for communicating the state of objects, processes, and systems. Status must always use both color and a text label — never color alone."
      />

      <P title="Status Color Semantics">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {[
            { color: "bg-green-500", label: "Success / Active / Online", text: "text-green-600 dark:text-green-400", border: "border-green-500/20", bg: "bg-green-500/10" },
            { color: "bg-brand-orange", label: "Warning / Pending / Draft", text: "text-brand-orange", border: "border-brand-orange/20", bg: "bg-brand-orange/10" },
            { color: "bg-brand-folly", label: "Error / Failed / Danger", text: "text-brand-folly", border: "border-brand-folly/20", bg: "bg-brand-folly/10" },
            { color: "bg-blue-500", label: "Info / In Progress / Syncing", text: "text-blue-600 dark:text-blue-400", border: "border-blue-500/20", bg: "bg-blue-500/10" },
            { color: "bg-foreground/30", label: "Neutral / Inactive / Unknown", text: "text-foreground/50", border: "border-border", bg: "bg-foreground/5" },
          ].map((s) => (
            <div key={s.label} className={`rounded-xl border ${s.border} ${s.bg} p-4 space-y-2`}>
              <div className={`size-4 rounded-full ${s.color}`} />
              <p className={`text-xs font-medium ${s.text} leading-tight`}>{s.label}</p>
            </div>
          ))}
        </div>
      </P>

      <P title="Status Badge Examples">
        <Demo label="status badges — always color + label" vertical>
          <div className="space-y-4 w-full">
            <div className="flex flex-wrap gap-2">
              {[
                { label: "Active", variant: "success" as const },
                { label: "Pending", variant: "warning" as const },
                { label: "Failed", variant: "error" as const },
                { label: "Draft", variant: "secondary" as const },
                { label: "Stable", variant: "success" as const },
                { label: "Beta", variant: "info" as const },
                { label: "Deprecated", variant: "warning" as const },
                { label: "Archived", variant: "outline" as const },
              ].map((b) => (
                <Badge key={b.label} variant={b.variant}>{b.label}</Badge>
              ))}
            </div>
          </div>
        </Demo>
      </P>

      <P title="Process Status">
        <Demo label="multi-step process status" vertical>
          <div className="w-full max-w-sm space-y-3">
            {[
              { label: "Design tokens exported", status: "complete", icon: CheckCircle2 },
              { label: "Components building…", status: "in-progress", icon: Loader2 },
              { label: "Storybook publishing", status: "pending", icon: Clock },
              { label: "NPM release", status: "pending", icon: Clock },
              { label: "CDN cache invalidation", status: "failed", icon: XCircle },
            ].map((step) => {
              const Icon_ = step.icon;
              const color =
                step.status === "complete" ? "text-green-500" :
                step.status === "in-progress" ? "text-brand-orange animate-spin" :
                step.status === "failed" ? "text-brand-folly" : "text-foreground/30";
              return (
                <div key={step.label} className="flex items-center gap-3">
                  <Icon_ className={`size-4 shrink-0 ${color}`} />
                  <span className={`text-sm ${step.status === "pending" ? "text-foreground/40" : "text-foreground/70"}`}>
                    {step.label}
                  </span>
                  {step.status === "in-progress" && <Badge variant="warning" size="sm">Running</Badge>}
                  {step.status === "failed" && <Badge variant="error" size="sm">Failed</Badge>}
                </div>
              );
            })}
          </div>
        </Demo>
      </P>

      <P title="Accessibility Requirements">
        <Alert variant="warning" title="Color alone is never sufficient for status">
          Always pair status colors with a text label, icon with an accessible name, or both. Users with color blindness or those viewing in monochrome must still understand the status from non-color cues alone.
        </Alert>
      </P>
    </div>
  );
}
