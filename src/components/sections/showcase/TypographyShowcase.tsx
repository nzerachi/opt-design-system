import { Heading } from "../../primitives/Heading";
import { Paragraph } from "../../typography/Paragraph";
import { Code, CodeBlock } from "../../typography/Code";
import { Kbd } from "../../typography/Kbd";
import { Blockquote } from "../../typography/Blockquote";
import { Highlight } from "../../typography/Highlight";
import {
  PageHeader,
  DocSection,
  DemoBlock,
  UsageBlock,
  PropsTable,
  AccessibilitySection,
  A11yPoint,
  IC,
} from "./DocComponents";

const CODE_SAMPLE = `import { Button } from "@opticule/ds";

export function MyComponent() {
  return (
    <Button variant="gradient" size="lg">
      Get Started
    </Button>
  );
}`;

const CSS_SAMPLE = `/* Opticule design token usage */
.card {
  background: var(--background);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-6);
}`;

export function TypographyShowcase() {
  return (
    <div className="space-y-16">
      <PageHeader
        title="Typography"
        description="Semantic heading hierarchy, paragraph styles, code blocks, keyboard shortcut keys, blockquotes, and text highlights. All typography components use the Ubuntu typeface and respect the system's design token scale."
        badges={[
          { label: "Stable",  color: "green" },
          { label: "v1.0.0",  color: "gray"  },
        ]}
        importPath={`import { Heading, Paragraph, Code, CodeBlock, Kbd, Blockquote, Highlight } from "@opticule/ds"`}
      />

      <DocSection title="Usage guidelines">
        <UsageBlock
          use={[
            { text: "Use Heading to establish semantic document structure (h1–h6) independently from visual size." },
            { text: "Use Paragraph for body copy — it handles size, leading, muted, and lead variants." },
            { text: "Use Code for inline technical terms, variable names, and short snippets within prose." },
            { text: "Use CodeBlock for multi-line code samples that benefit from syntax structure." },
            { text: "Use Kbd to document keyboard shortcuts in help text, tooltips, and reference tables." },
            { text: "Use Blockquote to cite or emphasize text from an external or internal source." },
            { text: "Use Highlight sparingly — for key terms, changes, or warnings within prose." },
          ]}
          avoid={[
            { text: "Don't use Heading to make text visually large without semantic intent — use className font-size utilities instead." },
            { text: "Don't use Code for non-technical text — it implies a literal, machine-readable value." },
            { text: "Don't use Highlight for more than 3–5 spans per paragraph — it loses emphasis effect." },
            { text: "Don't stack multiple levels of semantic weight (lead + bold) on the same text block." },
          ]}
        />
      </DocSection>

      {/* Heading */}
      <DocSection title="Heading" description="The level prop sets HTML semantics (h1–h6); the size prop controls visual weight independently.">
        <DemoBlock label="all levels (default size per level)" vertical>
          <Heading level={1}>Heading 1 — 40px / H1</Heading>
          <Heading level={2}>Heading 2 — 32px / H2</Heading>
          <Heading level={3}>Heading 3 — 24px / H3</Heading>
          <Heading level={4}>Heading 4 — 20px / H4</Heading>
          <Heading level={5}>Heading 5 — 18px / H5</Heading>
          <Heading level={6}>Heading 6 — 16px / H6</Heading>
        </DemoBlock>
        <DemoBlock label="size override — h2 with various visual sizes" vertical>
          <Heading level={2} size="xs">h2 rendered at xs size</Heading>
          <Heading level={2} size="lg">h2 rendered at lg size</Heading>
          <Heading level={2} size="2xl">h2 rendered at 2xl size</Heading>
          <Heading level={2} size="4xl">h2 rendered at 4xl size</Heading>
        </DemoBlock>
        <DemoBlock label="display / hero headings" vertical>
          <Heading level={1} size="4xl">The Future of Design Systems</Heading>
          <Heading level={1} size="3xl" className="bg-gradient-to-r from-brand-purple via-brand-folly to-brand-orange bg-clip-text text-transparent">
            Built with Opticule
          </Heading>
        </DemoBlock>
        <PropsTable
          title="Heading props"
          rows={[
            { name: "level",    type: "1 | 2 | 3 | 4 | 5 | 6", required: true, description: "HTML element rendered (h1–h6). Controls semantic outline." },
            { name: "size",     type: `"xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl"`, description: "Visual size — overrides the default size for the given level." },
            { name: "weight",   type: `"normal" | "medium" | "semibold" | "bold"`, default: `"bold"`, description: "Font weight." },
            { name: "className",type: "string", description: "Additional Tailwind classes (e.g. gradient text, custom color)." },
          ]}
        />
      </DocSection>

      {/* Paragraph */}
      <DocSection title="Paragraph" description="Body text component with size, lead, and muted modifiers.">
        <DemoBlock label="sizes" vertical>
          <Paragraph size="sm">
            Small paragraph (sm) — captions, helper text, and secondary content. Slightly smaller than the base reading size.
          </Paragraph>
          <Paragraph size="md">
            Medium paragraph (md) — the base body text size. Optimized for readability at 16px with a 1.6 line height.
          </Paragraph>
          <Paragraph size="lg">
            Large paragraph (lg) — lead text and intro paragraphs. Slightly larger at 18px for visual prominence.
          </Paragraph>
        </DemoBlock>
        <DemoBlock label="lead and muted" vertical>
          <Paragraph lead>
            Lead paragraph — introduces a section with higher visual weight. Used as the first paragraph of an article or docs page.
          </Paragraph>
          <Paragraph muted>
            Muted paragraph — reduced opacity for secondary or helper text. Great for subtitles, footnotes, or supporting copy.
          </Paragraph>
        </DemoBlock>
        <PropsTable
          title="Paragraph props"
          rows={[
            { name: "size",   type: `"sm" | "md" | "lg"`, default: `"md"`, description: "Font size tier." },
            { name: "lead",   type: "boolean", default: "false", description: "Increases size and weight for intro paragraphs." },
            { name: "muted",  type: "boolean", default: "false", description: "Reduces opacity for secondary text." },
            { name: "as",     type: "ElementType", default: `"p"`, description: "Render as a different element (e.g. 'span', 'div')." },
          ]}
        />
      </DocSection>

      {/* Code */}
      <DocSection title="Code" description="Inline code for technical terms and multi-line CodeBlock for full code samples.">
        <DemoBlock label="inline code" vertical>
          <Paragraph>
            Import the button: <Code>import {"{"} Button {"}"} from '@opticule/ds'</Code>
          </Paragraph>
          <Paragraph>
            Use <Code>variant="gradient"</Code> for the brand CTA, or <Code>variant="destructive"</Code> for dangerous actions.
          </Paragraph>
          <Paragraph>
            The theme provider reads from <Code>localStorage</Code> key <Code>opticule-theme</Code> on mount.
          </Paragraph>
        </DemoBlock>
        <DemoBlock label="code block — tsx" vertical>
          <CodeBlock language="tsx" showLineNumbers className="w-full max-w-2xl">
            {CODE_SAMPLE}
          </CodeBlock>
        </DemoBlock>
        <DemoBlock label="code block — css" vertical>
          <CodeBlock language="css" showLineNumbers className="w-full max-w-2xl">
            {CSS_SAMPLE}
          </CodeBlock>
        </DemoBlock>
        <DemoBlock label="code block — plain (no lang)" vertical>
          <CodeBlock className="w-full max-w-2xl">
            {`npm install @opticule/ds\nnpx opticule-ds init`}
          </CodeBlock>
        </DemoBlock>
        <PropsTable
          title="CodeBlock props"
          rows={[
            { name: "language",       type: "string",  description: "Language hint shown in the header bar (e.g. 'tsx', 'css')." },
            { name: "showLineNumbers",type: "boolean", default: "false", description: "Display line numbers on the left." },
            { name: "children",       type: "string",  required: true, description: "Raw code string." },
          ]}
        />
      </DocSection>

      {/* Kbd */}
      <DocSection title="Keyboard (Kbd)" description="Styled key caps for documenting keyboard shortcuts in help text, tooltips, and reference tables.">
        <DemoBlock label="shortcut keys" vertical>
          <Paragraph>Open command palette: <Kbd>⌘</Kbd> <Kbd>K</Kbd></Paragraph>
          <Paragraph>Save document: <Kbd>⌘</Kbd> <Kbd>S</Kbd></Paragraph>
          <Paragraph>Close dialog: <Kbd>Esc</Kbd></Paragraph>
          <Paragraph>Bold: <Kbd>⌘</Kbd> <Kbd>B</Kbd> &nbsp;·&nbsp; Italic: <Kbd>⌘</Kbd> <Kbd>I</Kbd> &nbsp;·&nbsp; Underline: <Kbd>⌘</Kbd> <Kbd>U</Kbd></Paragraph>
        </DemoBlock>
        <DemoBlock label="keyboard shortcut reference table" vertical>
          <div className="w-full max-w-md divide-y divide-border border border-border rounded-xl overflow-hidden">
            <div className="flex justify-between items-center px-4 py-2 bg-muted-light/20">
              <span className="text-xs font-semibold text-foreground/50 uppercase tracking-wider">Action</span>
              <span className="text-xs font-semibold text-foreground/50 uppercase tracking-wider">Shortcut</span>
            </div>
            {[
              { action: "Command Palette", keys: ["⌘", "K"] },
              { action: "Search",          keys: ["⌘", "/"] },
              { action: "New Component",   keys: ["⌘", "N"] },
              { action: "Toggle Theme",    keys: ["⌘", "Shift", "D"] },
              { action: "Close Panel",     keys: ["Esc"] },
            ].map(({ action, keys }) => (
              <div key={action} className="flex justify-between items-center px-4 py-2.5">
                <span className="text-sm">{action}</span>
                <div className="flex gap-1">
                  {keys.map((k) => <Kbd key={k}>{k}</Kbd>)}
                </div>
              </div>
            ))}
          </div>
        </DemoBlock>
      </DocSection>

      {/* Blockquote */}
      <DocSection title="Blockquote" description="Styled citation block with optional attribution.">
        <DemoBlock label="with and without attribution" vertical>
          <Blockquote cite="Carbon Design System">
            The design system is a collection of reusable components, guided by clear standards, that can be assembled to build any number of applications.
          </Blockquote>
          <Blockquote>
            Good design is as little design as possible. Less, but better — because it concentrates on the essential aspects.
          </Blockquote>
          <Blockquote cite="Nze Rachi, Opticule DS">
            A design system is only as good as its documentation. Every component deserves a story.
          </Blockquote>
        </DemoBlock>
        <PropsTable
          title="Blockquote props"
          rows={[
            { name: "cite",    type: "string",    description: "Attribution shown below the quote." },
            { name: "children",type: "ReactNode", required: true, description: "The quoted content." },
          ]}
        />
      </DocSection>

      {/* Highlight */}
      <DocSection title="Highlight" description="Inline text highlight with semantic color variants for emphasis within prose.">
        <DemoBlock label="color variants" vertical>
          <Paragraph>The <Highlight>default highlight</Highlight> uses a subtle brand-orange tint for general emphasis.</Paragraph>
          <Paragraph>Use <Highlight color="brand">brand orange</Highlight> for primary CTA terms and interactive keywords.</Paragraph>
          <Paragraph>Mark <Highlight color="success">successful outcomes</Highlight> and positive results with the purple highlight.</Paragraph>
          <Paragraph>Flag <Highlight color="warning">caution areas</Highlight> or deprecated APIs with the warning highlight.</Paragraph>
          <Paragraph>Indicate <Highlight color="error">errors and breaking changes</Highlight> with the red-tinted highlight.</Paragraph>
        </DemoBlock>
        <DemoBlock label="in prose context" vertical>
          <div className="max-w-2xl text-sm text-foreground/75 leading-relaxed space-y-3">
            <p>
              Opticule DS ships with a <Highlight color="brand">ThemeProvider</Highlight> that injects CSS custom properties into the document root.
              Simply wrap your app once and use <Highlight>semantic tokens</Highlight> like <Code>var(--foreground)</Code> throughout — the theme switch is handled automatically.
            </p>
            <p>
              The <Highlight color="success">v2.1.0 release</Highlight> includes 14 new components and a complete token audit.
              Note the <Highlight color="warning">breaking changes</Highlight> to the <Code>Modal</Code> API — see the <Highlight color="error">migration guide</Highlight> before upgrading.
            </p>
          </div>
        </DemoBlock>
        <PropsTable
          title="Highlight props"
          rows={[
            { name: "color",    type: `"default" | "brand" | "success" | "warning" | "error"`, default: `"default"`, description: "Background tint color." },
            { name: "children", type: "ReactNode", required: true, description: "The text to highlight." },
          ]}
        />
      </DocSection>

      {/* Accessibility */}
      <DocSection title="Accessibility">
        <AccessibilitySection>
          <A11yPoint>Heading renders the correct HTML element (<IC>&lt;h1&gt;</IC>–<IC>&lt;h6&gt;</IC>) regardless of visual size — screen readers traverse headings by semantic level, not font size.</A11yPoint>
          <A11yPoint>CodeBlock uses <IC>&lt;pre&gt;&lt;code&gt;</IC> semantics so screen readers announce it as a code region. The language badge is <IC>aria-hidden</IC>.</A11yPoint>
          <A11yPoint>Kbd uses the native <IC>&lt;kbd&gt;</IC> element so screen readers recognize and announce it as a keyboard key.</A11yPoint>
          <A11yPoint>Blockquote uses the native <IC>&lt;blockquote&gt;</IC> element; the <IC>cite</IC> attribution renders as a <IC>&lt;cite&gt;</IC> element for correct screen reader semantics.</A11yPoint>
          <A11yPoint>Highlight uses <IC>&lt;mark&gt;</IC> — screen readers may announce "highlighted" before and after the text, depending on user settings.</A11yPoint>
        </AccessibilitySection>
      </DocSection>
    </div>
  );
}
