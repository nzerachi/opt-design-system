import {
  Search, Bell, Trash2, Heart, Settings, ArrowRight,
  Sun, Moon, Star, AlertTriangle, CheckCircle, Info,
} from "lucide-react";
import { Box } from "../../primitives/Box";
import { Text } from "../../primitives/Text";
import { Heading } from "../../primitives/Heading";
import { Icon } from "../../primitives/Icon";
import { VisuallyHidden } from "../../primitives/VisuallyHidden";
import {
  PageHeader,
  DocSection,
  DemoBlock,
  UsageBlock,
  PropsTable,
  AccessibilitySection,
  A11yPoint,
  IC,
  CodeBlock,
} from "./DocComponents";

export function PrimitivesShowcase() {
  return (
    <div className="space-y-16">
      <PageHeader
        title="Primitives"
        description="The foundational building blocks used by every other component in the system. Box is the polymorphic layout atom, Text is the typography atom, Heading provides semantic structure, Icon wraps Lucide icons with consistent sizing and accessibility, and VisuallyHidden hides content from sighted users while keeping it in the accessibility tree."
        badges={[
          { label: "Stable", color: "green" },
          { label: "v1.0.0", color: "gray" },
        ]}
        importPath={`import { Box, Text, Heading, Icon, VisuallyHidden } from "@opticule/ds"`}
      />

      {/* ── Box ── */}
      <DocSection
        title="Box"
        description="The polymorphic layout primitive. Renders as <div> by default. Use the as prop to render as any HTML element — section, article, nav, ul, li, etc. — while passing all HTML attributes through."
      >
        <UsageBlock
          use={[
            { text: "Use Box as a building block for custom component layouts." },
            { text: "Use as='section' or as='article' to apply semantic HTML without additional wrappers." },
            { text: "Combine with Tailwind classes for any layout need." },
          ]}
          avoid={[
            { text: "Don't use Box as a substitute for layout components (Stack, Grid, Container) — those handle spacing and responsive behavior." },
            { text: "Don't nest Box unnecessarily — a direct className on a layout component is cleaner." },
          ]}
        />
        <DemoBlock label="Box as various HTML elements" vertical>
          <Box as="section" className="rounded-xl border border-border p-5 space-y-3">
            <Box as="header" className="border-b border-border pb-3">
              <p className="text-xs font-mono text-foreground/40">as="section" + as="header"</p>
            </Box>
            <Box as="article" className="text-sm text-foreground/70">
              This <IC>{"<Box as='article'>"}</IC> renders as a semantic <IC>&lt;article&gt;</IC> element while accepting all HTML attributes and Tailwind classes.
            </Box>
            <Box as="footer" className="text-xs text-foreground/40 border-t border-border pt-3 font-mono">
              as="footer"
            </Box>
          </Box>
        </DemoBlock>
        <PropsTable
          title="Box props"
          rows={[
            { name: "as", type: "ElementType", default: `"div"`, description: "The HTML element or React component to render as." },
            { name: "className", type: "string", description: "Tailwind CSS classes applied to the rendered element." },
            { name: "children", type: "ReactNode", description: "Content rendered inside the element." },
            { name: "...rest", type: "ComponentPropsWithoutRef<C>", description: "All HTML attributes for the resolved element type." },
          ]}
        />
        <CodeBlock
          language="tsx"
          code={`import { Box } from "@opticule/ds";

// Renders as <div> by default
<Box className="flex gap-4 p-6">Content</Box>

// Semantic section
<Box as="section" className="space-y-8">…</Box>

// Unordered list
<Box as="ul" className="list-none space-y-2">
  <Box as="li">Item one</Box>
  <Box as="li">Item two</Box>
</Box>

// With nav element
<Box as="nav" aria-label="Breadcrumb">…</Box>`}
        />
      </DocSection>

      {/* ── Text ── */}
      <DocSection
        title="Text"
        description="The typography atom. Renders as <span> by default. Provides size, weight, color, alignment, truncation, italic, and underline variants. Use as='p', as='label', as='div' for semantic needs."
      >
        <DemoBlock label="size scale" vertical>
          <div className="space-y-2">
            {(["2xs", "xs", "sm", "md", "lg", "xl"] as const).map((size) => (
              <div key={size} className="flex items-baseline gap-4">
                <span className="text-[10px] font-mono text-foreground/40 w-8 shrink-0">{size}</span>
                <Text size={size}>The quick brown fox jumps over the lazy dog</Text>
              </div>
            ))}
          </div>
        </DemoBlock>
        <DemoBlock label="color variants" vertical>
          <div className="space-y-2">
            {(["primary", "secondary", "disabled", "brand", "error", "warning", "success", "info"] as const).map((color) => (
              <div key={color} className="flex items-center gap-4">
                <span className="text-[10px] font-mono text-foreground/40 w-16 shrink-0">{color}</span>
                <Text size="sm" color={color}>Sample text with {color} color</Text>
              </div>
            ))}
          </div>
        </DemoBlock>
        <DemoBlock label="weight + modifiers">
          <div className="space-y-2">
            <Text weight="light">Light weight</Text>
            <Text weight="regular">Regular weight</Text>
            <Text weight="medium">Medium weight</Text>
            <Text weight="bold">Bold weight</Text>
            <Text italic>Italic modifier</Text>
            <Text underline>Underline modifier</Text>
          </div>
        </DemoBlock>
        <DemoBlock label="truncation — fixed-width container" vertical>
          <Box className="w-64">
            <Text truncate>This very long text string will be truncated with an ellipsis when it overflows its container</Text>
          </Box>
        </DemoBlock>
        <PropsTable
          title="Text props"
          rows={[
            { name: "as", type: "ElementType", default: `"span"`, description: "Element to render. Use 'p', 'label', 'div' for semantic needs." },
            { name: "size", type: `"2xs" | "xs" | "sm" | "md" | "lg" | "xl"`, default: `"md"`, description: "Font size (12px–20px scale)." },
            { name: "weight", type: `"light" | "regular" | "medium" | "bold"`, default: `"regular"`, description: "Font weight." },
            { name: "color", type: `"primary" | "secondary" | "disabled" | "brand" | "error" | "warning" | "success" | "info" | "inherit"`, default: `"primary"`, description: "Semantic text color." },
            { name: "align", type: `"left" | "center" | "right" | "justify"`, description: "Text alignment." },
            { name: "truncate", type: "boolean", default: "false", description: "Truncate with ellipsis on overflow." },
            { name: "italic", type: "boolean", default: "false", description: "Italic style." },
            { name: "underline", type: "boolean", default: "false", description: "Underline decoration." },
          ]}
        />
      </DocSection>

      {/* ── Heading ── */}
      <DocSection
        title="Heading"
        description="Semantic heading levels h1–h6 with independent visual size control. The level prop sets the DOM element; the size prop sets the visual weight. Use level for document outline, size for visual hierarchy."
      >
        <DemoBlock label="semantic levels — default sizes" vertical>
          {([1, 2, 3, 4, 5, 6] as const).map((level) => (
            <Heading key={level} level={level}>Heading {level}</Heading>
          ))}
        </DemoBlock>
        <DemoBlock label="size override — h2 rendered at multiple visual sizes" vertical>
          {(["xs", "md", "xl", "3xl"] as const).map((size) => (
            <div key={size} className="flex items-baseline gap-3">
              <span className="text-[10px] font-mono text-foreground/40 w-8 shrink-0">{size}</span>
              <Heading level={2} size={size}>h2 at size="{size}"</Heading>
            </div>
          ))}
        </DemoBlock>
        <PropsTable
          title="Heading props"
          rows={[
            { name: "level", type: "1 | 2 | 3 | 4 | 5 | 6", required: true, description: "HTML element rendered. Sets semantic document outline." },
            { name: "size", type: `"xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl"`, description: "Visual size, independent of semantic level." },
            { name: "weight", type: `"normal" | "medium" | "semibold" | "bold"`, default: `"bold"`, description: "Font weight." },
            { name: "className", type: "string", description: "Tailwind classes for gradient text, custom color, etc." },
          ]}
        />
      </DocSection>

      {/* ── Icon ── */}
      <DocSection
        title="Icon"
        description="Wraps any Lucide React icon with consistent Opticule sizing tokens and correct accessibility behaviour. Decorative icons are aria-hidden by default; labeled icons get role='img'.">
        <DemoBlock label="size scale" >
          {(["xs", "sm", "md", "lg", "xl", "2xl"] as const).map((size) => (
            <div key={size} className="flex flex-col items-center gap-1.5">
              <Icon icon={Star} size={size} />
              <span className="text-[10px] font-mono text-foreground/40">{size}</span>
            </div>
          ))}
        </DemoBlock>
        <DemoBlock label="semantic icons — with accessible labels">
          <Icon icon={CheckCircle} size="lg" label="Success" className="text-green-500" />
          <Icon icon={AlertTriangle} size="lg" label="Warning" className="text-brand-orange" />
          <Icon icon={Info} size="lg" label="Information" className="text-blue-500" />
          <Icon icon={Trash2} size="lg" label="Delete" className="text-brand-folly" />
        </DemoBlock>
        <DemoBlock label="decorative icons — aria-hidden (no label)">
          {[Search, Bell, Heart, Settings, ArrowRight, Sun, Moon].map((IconComp, i) => (
            <Icon key={i} icon={IconComp} size="md" className="text-foreground/60" />
          ))}
        </DemoBlock>
        <PropsTable
          title="Icon props"
          rows={[
            { name: "icon", type: "ComponentType<SVGProps<SVGSVGElement>>", required: true, description: "Any Lucide React (or compatible) icon component." },
            { name: "size", type: `"xs" | "sm" | "md" | "lg" | "xl" | "2xl"`, default: `"md"`, description: "Size token: xs=12px, sm=16px, md=20px, lg=24px, xl=32px, 2xl=40px." },
            { name: "label", type: "string", description: "When provided, adds role='img' and aria-label. When omitted, the icon is aria-hidden." },
          ]}
        />
      </DocSection>

      {/* ── VisuallyHidden ── */}
      <DocSection
        title="VisuallyHidden"
        description="Renders content that is invisible to sighted users but present in the accessibility tree. The gold standard for providing context to screen readers without cluttering the visual design."
      >
        <UsageBlock
          use={[
            { text: "Use to label icon-only buttons: wrap the accessible name in VisuallyHidden inside an IconButton." },
            { text: "Use to provide extra context for screen readers: 'Current page:' before a breadcrumb trail." },
            { text: "Use instead of aria-label when the text is complex or contains markup." },
          ]}
          avoid={[
            { text: "Don't use display:none or visibility:hidden — those hide content from screen readers too." },
            { text: "Don't use VisuallyHidden to hide error messages from sighted users — errors must be visible." },
          ]}
        />
        <DemoBlock label="icon button with hidden label" vertical>
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="p-2 rounded-lg border border-border hover:bg-muted-light/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/50"
              aria-label="Delete item"
            >
              <Icon icon={Trash2} size="md" className="text-brand-folly" />
              <VisuallyHidden>Delete item</VisuallyHidden>
            </button>
            <Text size="sm" color="secondary">Icon button — visually icon only, screen reader announces "Delete item"</Text>
          </div>
        </DemoBlock>
        <CodeBlock
          language="tsx"
          code={`import { VisuallyHidden } from "@opticule/ds";

// Pattern 1: Icon-only button
<button type="button">
  <SearchIcon aria-hidden />
  <VisuallyHidden>Search</VisuallyHidden>
</button>

// Pattern 2: Supplemental screen-reader context
<nav>
  <VisuallyHidden as="h2">Breadcrumb navigation</VisuallyHidden>
  <ol>…</ol>
</nav>

// Pattern 3: Skip link (visually hidden until focused)
<a href="#main-content" className="sr-only focus:not-sr-only">
  Skip to main content
</a>`}
        />
      </DocSection>

      <DocSection title="Accessibility">
        <AccessibilitySection>
          <A11yPoint><IC>Box</IC> renders semantic HTML when <IC>as</IC> is a semantic element — use <IC>as="nav"</IC>, <IC>as="main"</IC>, <IC>as="section"</IC> freely.</A11yPoint>
          <A11yPoint><IC>Icon</IC> is <IC>aria-hidden</IC> by default (decorative) and gets <IC>role="img"</IC> only when a <IC>label</IC> prop is provided — never use an empty label.</A11yPoint>
          <A11yPoint><IC>Heading</IC> always renders the correct DOM element regardless of <IC>size</IC> — screen readers traverse headings by semantic level, not visual size.</A11yPoint>
          <A11yPoint><IC>VisuallyHidden</IC> uses the CSS clip-path technique that's invisible to sighted users but fully in the accessibility tree — never use <IC>display:none</IC> for this purpose.</A11yPoint>
        </AccessibilitySection>
      </DocSection>
    </div>
  );
}
