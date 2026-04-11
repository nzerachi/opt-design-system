import { useState } from "react";
import { Plus, Download, Trash2, Heart, Send, ArrowRight, Search } from "lucide-react";
import { Button } from "../../inputs/Button";
import { IconButton } from "../../inputs/IconButton";
import { ButtonGroup } from "../../inputs/ButtonGroup";
import { CopyButton } from "../../inputs/CopyButton";
import {
  PageHeader,
  DocSection,
  DemoBlock,
  UsageBlock,
  PropsTable,
  KeyboardTable,
  AccessibilitySection,
  A11yPoint,
  AnatomyList,
  IC,
} from "./DocComponents";

export function ButtonsShowcase() {
  const [loading, setLoading] = useState(false);

  const handleLoading = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="space-y-16">
      <PageHeader
        title="Buttons & Actions"
        description="Buttons trigger discrete actions — submitting a form, opening a modal, navigating to another page. They communicate action and intent through their hierarchy, label, and placement."
        badges={[
          { label: "Stable", color: "green" },
          { label: "Accessible", color: "blue" },
          { label: "v1.0.0", color: "gray" },
        ]}
        importPath={`import { Button, IconButton, ButtonGroup, CopyButton } from "@opticule/ds"`}
      />

      {/* ── Overview ─────────────────────────────────────────────── */}
      <DocSection title="Overview">
        <p className="text-sm text-foreground/60 leading-relaxed max-w-3xl">
          The <IC>Button</IC> component is the system's primary interactive element. It supports 7 visual variants,
          5 sizes, loading states, left/right icon slots, and polymorphic rendering via the <IC>as</IC> prop.
          All button components pass full keyboard focus management and meet WCAG 2.1 AA contrast requirements.
        </p>
        <AnatomyList items={[
          { number: 1, label: "Container", description: "Rounded rectangle with consistent padding per size tier." },
          { number: 2, label: "Label", description: "Short, sentence-case action text (imperative verb preferred)." },
          { number: 3, label: "Left icon (optional)", description: "16–22 px icon placed before the label, 8 px gap." },
          { number: 4, label: "Right icon (optional)", description: "16–22 px icon placed after the label, 8 px gap." },
          { number: 5, label: "Loading spinner", description: "Replaces icon slot; label remains visible (aria-hidden)." },
          { number: 6, label: "Focus ring", description: "2 px brand-orange ring offset by 1 px on keyboard focus." },
        ]} />
      </DocSection>

      {/* ── Usage ────────────────────────────────────────────────── */}
      <DocSection title="Usage guidelines">
        <UsageBlock
          use={[
            { text: "Use a Primary button for the single most important action on a page or in a section." },
            { text: "Use Secondary or Outline for supportive actions that accompany a primary CTA." },
            { text: "Use Ghost or Text for low-emphasis actions in toolbars, table rows, or sidebars." },
            { text: "Use Destructive exclusively for irreversible, data-deleting actions." },
            { text: "Use the Gradient variant for high-impact marketing CTAs where brand expression is warranted." },
            { text: "Use loading state whenever an action triggers an async operation longer than ~300 ms." },
          ]}
          avoid={[
            { text: "Don't use more than one Primary button in the same visual region — this dilutes hierarchy." },
            { text: "Don't use Destructive for cancellation or neutral navigation actions." },
            { text: "Don't use Gradient buttons inside forms or data-dense UIs — reserve for CTAs." },
            { text: "Don't put more than two to three words in a button label." },
            { text: "Don't disable a button without providing context about why it is disabled." },
            { text: "Don't render a button as a `<div>` or `<span>` — use the `as` prop to keep semantics." },
          ]}
        />
      </DocSection>

      {/* ── Variants ─────────────────────────────────────────────── */}
      <DocSection title="Variants" description="Seven visual levels communicate action hierarchy from highest to lowest emphasis.">
        <DemoBlock label="all 7 variants">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="text">Text</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="gradient">Gradient</Button>
        </DemoBlock>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs text-foreground/70">
          {[
            { v: "primary", desc: "Highest emphasis. One per view." },
            { v: "secondary", desc: "Supporting action alongside primary." },
            { v: "outline", desc: "Moderate emphasis, bordered." },
            { v: "ghost", desc: "Low emphasis — toolbars, rows." },
            { v: "text", desc: "Minimal — inline contextual links." },
            { v: "destructive", desc: "Danger — irreversible actions only." },
            { v: "gradient", desc: "Brand CTA — marketing contexts." },
          ].map(({ v, desc }) => (
            <div key={v} className="flex gap-2 p-3 rounded-lg border border-border bg-bg-secondary/20">
              <code className="text-brand-orange shrink-0">{v}</code>
              <span className="text-foreground/50">—</span>
              <span>{desc}</span>
            </div>
          ))}
        </div>
      </DocSection>

      {/* ── Sizes ────────────────────────────────────────────────── */}
      <DocSection title="Sizes" description="Five size tiers map to different UI contexts.">
        <DemoBlock label="xs → xl" description="Sizes share the same variants — choose the tier that fits the surrounding UI density.">
          <Button size="xs">Extra Small</Button>
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
          <Button size="xl">Extra Large</Button>
        </DemoBlock>
        <div className="rounded-xl border border-border overflow-hidden">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-border bg-foreground/3">
                <th className="text-left px-4 py-2.5 font-semibold text-foreground/50 uppercase tracking-wider">Size</th>
                <th className="text-left px-4 py-2.5 font-semibold text-foreground/50 uppercase tracking-wider">Padding</th>
                <th className="text-left px-4 py-2.5 font-semibold text-foreground/50 uppercase tracking-wider">Font</th>
                <th className="text-left px-4 py-2.5 font-semibold text-foreground/50 uppercase tracking-wider">Use case</th>
              </tr>
            </thead>
            <tbody>
              {[
                { size: "xs", pad: "10px / 6px",  font: "12px", use: "Table rows, chips, dense toolbars" },
                { size: "sm", pad: "12px / 6px",  font: "14px", use: "Secondary actions, sidebars, cards" },
                { size: "md", pad: "16px / 8px",  font: "16px", use: "Default — most form and page actions" },
                { size: "lg", pad: "24px / 12px", font: "18px", use: "Hero sections, important CTAs" },
                { size: "xl", pad: "32px / 16px", font: "20px", use: "Landing pages, marketing banners" },
              ].map((r, i) => (
                <tr key={r.size} className={`border-b border-border last:border-0 ${i % 2 ? "bg-foreground/1.5" : ""}`}>
                  <td className="px-4 py-2.5"><code className="text-brand-orange">{r.size}</code></td>
                  <td className="px-4 py-2.5 text-foreground/60">{r.pad}</td>
                  <td className="px-4 py-2.5 text-foreground/60">{r.font}</td>
                  <td className="px-4 py-2.5 text-foreground/60">{r.use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </DocSection>

      {/* ── Icon Slots ───────────────────────────────────────────── */}
      <DocSection title="Icon Slots" description="Buttons accept a left icon, right icon, or both. Icons scale with the button size.">
        <DemoBlock label="left icon, right icon, both">
          <Button leftIcon={<Plus size={16} />}>Add Item</Button>
          <Button rightIcon={<ArrowRight size={16} />}>Continue</Button>
          <Button leftIcon={<Download size={16} />} rightIcon={<ArrowRight size={16} />} variant="secondary">
            Download
          </Button>
          <Button leftIcon={<Trash2 size={16} />} variant="destructive">Delete</Button>
          <Button leftIcon={<Send size={16} />} variant="gradient">Get Started</Button>
        </DemoBlock>
        <p className="text-xs text-foreground/50 leading-relaxed">
          Use icons to reinforce the action — not to decorate. Pair icons that have a universal meaning
          (trash = delete, arrow = navigate). Avoid using icons that require prior knowledge to interpret.
        </p>
      </DocSection>

      {/* ── States ───────────────────────────────────────────────── */}
      <DocSection title="States" description="All buttons have hover, active, focus-visible, disabled, and loading states built in.">
        <DemoBlock label="default, loading, disabled">
          <Button onClick={handleLoading} loading={loading}>
            {loading ? "Processing…" : "Click to Load"}
          </Button>
          <Button disabled>Disabled Primary</Button>
          <Button variant="outline" disabled>Disabled Outline</Button>
          <Button variant="gradient" disabled>Disabled Gradient</Button>
        </DemoBlock>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-foreground/70">
          {[
            { state: "hover",         desc: "Background darkens or lightens to indicate interactivity." },
            { state: "active/pressed", desc: "Further darkens on mousedown to confirm the click." },
            { state: "focus-visible", desc: "2px brand-orange ring, only on keyboard navigation." },
            { state: "disabled",      desc: "50% opacity, cursor-not-allowed, non-interactive." },
            { state: "loading",       desc: "Spinner replaces icon slot, label fades, cursor-wait." },
          ].map(({ state, desc }) => (
            <div key={state} className="flex gap-2 p-3 rounded-lg border border-border bg-bg-secondary/20">
              <code className="text-brand-purple shrink-0">{state}</code>
              <span className="text-foreground/50">—</span>
              <span>{desc}</span>
            </div>
          ))}
        </div>
      </DocSection>

      {/* ── Icon Button ──────────────────────────────────────────── */}
      <DocSection title="Icon Button" description="Square buttons for icon-only actions. Always requires a label prop for accessibility.">
        <DemoBlock label="variants and sizes">
          <IconButton icon={<Heart size={16} />} label="Like" variant="primary" />
          <IconButton icon={<Heart size={16} />} label="Like" variant="secondary" />
          <IconButton icon={<Heart size={16} />} label="Like" variant="outline" />
          <IconButton icon={<Heart size={16} />} label="Like" variant="ghost" />
          <IconButton icon={<Heart size={16} />} label="Like" variant="destructive" />
          <div className="w-px h-8 bg-border" />
          <IconButton icon={<Search size={14} />} label="Search" size="xs" />
          <IconButton icon={<Search size={16} />} label="Search" size="sm" />
          <IconButton icon={<Search size={18} />} label="Search" size="md" />
          <IconButton icon={<Search size={20} />} label="Search" size="lg" />
          <IconButton icon={<Search size={22} />} label="Search" size="xl" />
        </DemoBlock>
        <DemoBlock label="rounded variant">
          <IconButton icon={<Heart size={16} />} label="Like" rounded />
          <IconButton icon={<Plus size={16} />} label="Add" variant="primary" rounded />
          <IconButton icon={<Search size={16} />} label="Search" variant="secondary" rounded />
        </DemoBlock>
        <p className="text-xs text-foreground/50 leading-relaxed">
          The <IC>label</IC> prop is rendered as <IC>aria-label</IC> on the button element and as visually-hidden text
          for screen readers. It is <strong className="text-foreground/70">required</strong> — omitting it will
          cause a TypeScript error.
        </p>
      </DocSection>

      {/* ── Button Group ─────────────────────────────────────────── */}
      <DocSection title="Button Group" description="Groups related actions with shared sizing and optional border collapse.">
        <DemoBlock label="default spacing">
          <ButtonGroup>
            <Button variant="outline">Day</Button>
            <Button variant="outline">Week</Button>
            <Button variant="outline">Month</Button>
            <Button variant="outline">Year</Button>
          </ButtonGroup>
        </DemoBlock>
        <DemoBlock label="attached (no gap)">
          <ButtonGroup attached>
            <Button variant="outline">Left</Button>
            <Button variant="primary">Center</Button>
            <Button variant="outline">Right</Button>
          </ButtonGroup>
        </DemoBlock>
        <DemoBlock label="vertical">
          <ButtonGroup orientation="vertical">
            <Button variant="outline">Top</Button>
            <Button variant="outline">Middle</Button>
            <Button variant="outline">Bottom</Button>
          </ButtonGroup>
        </DemoBlock>
      </DocSection>

      {/* ── Copy Button ──────────────────────────────────────────── */}
      <DocSection title="Copy Button" description="One-click clipboard copy with 2-second visual confirmation state.">
        <DemoBlock label="standalone + inline with code">
          <CopyButton value="npm install @opticule/ds" />
          <CopyButton value="npm install @opticule/ds" size="sm" />
          <div className="flex items-center gap-2 border border-border rounded-lg px-4 py-2 bg-muted-light/20 font-mono text-sm">
            <span className="text-foreground/70">npm install @opticule/ds</span>
            <CopyButton value="npm install @opticule/ds" size="sm" variant="ghost" />
          </div>
        </DemoBlock>
      </DocSection>

      {/* ── Polymorphic Rendering ────────────────────────────────── */}
      <DocSection
        title="Polymorphic Rendering"
        description="Pass as='a' to render a semantic link with full button styles — useful for navigation CTAs."
      >
        <DemoBlock label="rendered as anchor elements">
          <Button as="a" href="#" onClick={(e) => e.preventDefault()}>Link Button</Button>
          <Button as="a" href="#" onClick={(e) => e.preventDefault()} variant="outline" rightIcon={<ArrowRight size={16} />}>
            External Link
          </Button>
          <Button as="a" href="#" onClick={(e) => e.preventDefault()} variant="gradient">
            CTA Link
          </Button>
        </DemoBlock>
        <p className="text-xs text-foreground/50 leading-relaxed">
          When rendered as <IC>&lt;a&gt;</IC>, <IC>disabled</IC> is set via <IC>aria-disabled</IC> instead of the
          HTML attribute (which has no effect on anchors). Always provide an <IC>href</IC> — empty anchors
          break keyboard navigation.
        </p>
      </DocSection>

      {/* ── API ──────────────────────────────────────────────────── */}
      <DocSection title="API Reference">
        <PropsTable
          title="Button"
          rows={[
            { name: "variant",      type: `"primary" | "secondary" | "outline" | "ghost" | "text" | "gradient" | "destructive"`, default: `"primary"`,  description: "Visual style and emphasis level." },
            { name: "size",         type: `"xs" | "sm" | "md" | "lg" | "xl"`,                                                      default: `"md"`,       description: "Controls padding, font size, and icon size." },
            { name: "loading",      type: "boolean",                                                                                 default: "false",      description: "Shows a spinner and disables the button. Use for async actions." },
            { name: "loadingText",  type: "string",                                                                                  default: `"Loading…"`, description: "Screen-reader-only text announced during loading." },
            { name: "leftIcon",     type: "ReactNode",                                                                               default: "—",          description: "Icon rendered before the label. Scale the icon to match the size." },
            { name: "rightIcon",    type: "ReactNode",                                                                               default: "—",          description: "Icon rendered after the label." },
            { name: "as",           type: "ElementType",                                                                             default: `"button"`,   description: "Render as a different element (e.g. 'a', 'div'). Keeps all styles." },
            { name: "disabled",     type: "boolean",                                                                                 default: "false",      description: "Disables interaction and reduces opacity to 50%." },
            { name: "className",    type: "string",                                                                                  default: "—",          description: "Additional Tailwind classes merged onto the root element." },
            { name: "children",     type: "ReactNode",                                                                               required: true,        description: "Button label or content." },
          ]}
        />
        <PropsTable
          title="IconButton"
          rows={[
            { name: "icon",    type: "ReactNode", required: true, description: "Icon to render. Size the icon to match the button size." },
            { name: "label",   type: "string",    required: true, description: "Accessible label — used as aria-label and visually hidden text." },
            { name: "variant", type: `"primary" | "secondary" | "outline" | "ghost" | "text" | "gradient" | "destructive"`, default: `"ghost"`, description: "Visual style." },
            { name: "size",    type: `"xs" | "sm" | "md" | "lg" | "xl"`,                                                    default: `"md"`,   description: "Button dimensions." },
            { name: "rounded", type: "boolean",                                                                               default: "false",  description: "Full circle shape instead of rounded-lg." },
            { name: "loading", type: "boolean",                                                                               default: "false",  description: "Shows a spinner." },
          ]}
        />
        <PropsTable
          title="ButtonGroup"
          rows={[
            { name: "attached",     type: "boolean",                          default: "false",        description: "Removes gaps and collapses inner borders into a single shared border." },
            { name: "orientation",  type: `"horizontal" | "vertical"`,        default: `"horizontal"`, description: "Layout direction of the group." },
            { name: "children",     type: "ReactNode",                         required: true,          description: "Button children — all should share the same variant and size." },
          ]}
        />
        <PropsTable
          title="CopyButton"
          rows={[
            { name: "value",       type: "string",                                    required: true, description: "Text to copy to the clipboard on click." },
            { name: "label",       type: "string",                                    default: `"Copy"`,    description: "aria-label when idle." },
            { name: "copiedLabel", type: "string",                                    default: `"Copied!"`, description: "aria-label during the confirmation window." },
            { name: "variant",     type: `"default" | "outline" | "ghost"`,           default: `"default"`, description: "Visual style." },
            { name: "size",        type: `"xs" | "sm" | "md" | "lg"`,                default: `"md"`,      description: "Button dimensions." },
            { name: "timeout",     type: "number",                                    default: "2000",      description: "Milliseconds the copied state is shown before reverting." },
            { name: "showLabel",   type: "boolean",                                   default: "false",     description: "Show the label text beside the icon." },
          ]}
        />
      </DocSection>

      {/* ── Keyboard ─────────────────────────────────────────────── */}
      <DocSection title="Keyboard Interaction">
        <KeyboardTable rows={[
          { key: "Tab",          description: "Move focus to the next interactive element." },
          { key: "Shift + Tab",  description: "Move focus to the previous interactive element." },
          { key: "Enter",        description: "Activate the focused button (works for both <button> and <a>)." },
          { key: "Space",        description: "Activate the focused <button> element." },
        ]} />
        <p className="text-xs text-foreground/50 mt-2">
          Focus ring is visible <em>only</em> during keyboard navigation (<IC>:focus-visible</IC>).
          Mouse clicks do not show the ring, preventing visual noise during pointer interaction.
        </p>
      </DocSection>

      {/* ── Accessibility ────────────────────────────────────────── */}
      <DocSection title="Accessibility">
        <AccessibilitySection>
          <A11yPoint>All variants meet WCAG 2.1 AA 4.5:1 contrast ratio for text on their respective backgrounds.</A11yPoint>
          <A11yPoint>Loading state uses <IC>aria-disabled</IC> and a visually-hidden <IC>loadingText</IC> so screen readers announce "Loading…" rather than the button label.</A11yPoint>
          <A11yPoint>IconButton's <IC>label</IC> prop is set as both <IC>aria-label</IC> on the element and as a visually-hidden span — ensuring screen readers and voice control software both identify the button correctly.</A11yPoint>
          <A11yPoint>ButtonGroup receives <IC>role="group"</IC> so assistive technology can announce the group boundary.</A11yPoint>
          <A11yPoint>Polymorphic buttons rendered as <IC>&lt;a&gt;</IC> set <IC>aria-disabled="true"</IC> when disabled, since the HTML <IC>disabled</IC> attribute is not valid on anchor elements.</A11yPoint>
          <A11yPoint>All focus indicators use <IC>:focus-visible</IC> — visible for keyboard users, hidden for mouse users — following the WCAG 2.1 2.4.11 Focus Appearance guideline.</A11yPoint>
        </AccessibilitySection>
      </DocSection>
    </div>
  );
}
