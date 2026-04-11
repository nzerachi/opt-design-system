import { Link } from "../../navigation/Link";
import { Paragraph } from "../../typography/Paragraph";
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
  AnatomyList,
  CodeBlock,
} from "./DocComponents";

export function LinkShowcase() {
  return (
    <div className="space-y-16">
      <PageHeader
        title="Link"
        description="A styled anchor element with five semantic variants. Works as a plain <a> tag and composes with any router library via the as prop. Supports external links with automatic rel='noopener noreferrer' and an external icon."
        badges={[
          { label: "Stable", color: "green" },
          { label: "v1.0.0", color: "gray" },
        ]}
        importPath={`import { Link } from "@opticule/ds"`}
      />

      <DocSection title="Anatomy">
        <AnatomyList items={[
          { number: 1, label: "Label text", description: "The visible, clickable text. Should describe the destination — never 'click here'." },
          { number: 2, label: "External icon", description: "Small arrow-out icon shown when external=true. Hidden from screen readers with aria-label." },
          { number: 3, label: "Focus ring", description: "2px brand-orange ring visible on keyboard focus. Never removed." },
          { number: 4, label: "Underline decoration", description: "Visible in default, brand, and underline variants. Indicates interactivity for all users." },
        ]} />
      </DocSection>

      <DocSection title="Usage guidelines">
        <UsageBlock
          use={[
            { text: "Use Link for navigation between pages or to external resources." },
            { text: "Use the brand variant for primary CTA links within body copy." },
            { text: "Use the nav variant inside navigation menus and sidebars." },
            { text: "Use the subtle variant for secondary or supporting references in dense text." },
            { text: "Always set external=true for links that open in a new tab — adds the rel and the icon automatically." },
          ]}
          avoid={[
            { text: "Don't use Link for actions that don't navigate (form submission, toggle). Use Button instead." },
            { text: "Don't use 'click here', 'read more', or 'learn more' as link text — they're meaningless out of context." },
            { text: "Don't open non-external links in new tabs without warning the user." },
            { text: "Don't apply Link styling to non-anchor elements — use the as prop if you must." },
          ]}
        />
      </DocSection>

      <DocSection title="Variants">
        <DemoBlock label="all variants" vertical>
          <div className="space-y-4">
            <div className="flex items-center gap-4 flex-wrap">
              <span className="text-xs text-foreground/40 font-mono w-20 shrink-0">default</span>
              <Paragraph size="sm">
                Read the full <Link href="#">component documentation</Link> for setup instructions.
              </Paragraph>
            </div>
            <div className="flex items-center gap-4 flex-wrap">
              <span className="text-xs text-foreground/40 font-mono w-20 shrink-0">brand</span>
              <Paragraph size="sm">
                Get started with <Link href="#" variant="brand">Opticule Design System</Link> in 5 minutes.
              </Paragraph>
            </div>
            <div className="flex items-center gap-4 flex-wrap">
              <span className="text-xs text-foreground/40 font-mono w-20 shrink-0">subtle</span>
              <Paragraph size="sm">
                See <Link href="#" variant="subtle">accessibility guidelines</Link> for WCAG compliance notes.
              </Paragraph>
            </div>
            <div className="flex items-center gap-4 flex-wrap">
              <span className="text-xs text-foreground/40 font-mono w-20 shrink-0">underline</span>
              <Paragraph size="sm">
                View the <Link href="#" variant="underline">release notes</Link> for v2.1.0 changes.
              </Paragraph>
            </div>
            <div className="flex items-center gap-4 flex-wrap">
              <span className="text-xs text-foreground/40 font-mono w-20 shrink-0">nav</span>
              <div className="flex items-center gap-4">
                <Link href="#" variant="nav">Overview</Link>
                <Link href="#" variant="nav">Components</Link>
                <Link href="#" variant="nav">Patterns</Link>
              </div>
            </div>
          </div>
        </DemoBlock>

        <DemoBlock label="external links" vertical>
          <div className="space-y-3">
            <Paragraph size="sm">
              Opticule DS is built on <Link href="https://www.radix-ui.com" external>Radix UI</Link> primitives.
            </Paragraph>
            <Paragraph size="sm">
              Icons come from <Link href="https://lucide.dev" external variant="brand">Lucide React</Link> (1400+ icons).
            </Paragraph>
          </div>
        </DemoBlock>

        <DemoBlock label="disabled state" vertical>
          <Paragraph size="sm">
            This link is <Link href="#" disabled>temporarily unavailable</Link> while maintenance is underway.
          </Paragraph>
        </DemoBlock>
      </DocSection>

      <DocSection title="In Context — Prose">
        <DemoBlock label="links embedded in paragraphs" vertical>
          <div className="max-w-2xl space-y-4">
            <Paragraph>
              The Opticule Design System follows{" "}
              <Link href="#">WCAG 2.1 AA</Link> accessibility standards across all components.
              Every interactive element is keyboard-accessible and has a visible focus indicator.
              Read the <Link href="#" variant="brand">accessibility guidelines</Link> for detailed patterns.
            </Paragraph>
            <Paragraph>
              Components are built on <Link href="https://www.radix-ui.com" external>Radix UI</Link>{" "}
              primitives and styled with <Link href="https://tailwindcss.com" external>Tailwind CSS v4</Link>.
              The full source is available on <Link href="https://github.com" external variant="subtle">GitHub</Link>.
            </Paragraph>
          </div>
        </DemoBlock>
      </DocSection>

      <DocSection title="With React Router / Next.js">
        <CodeBlock
          language="tsx"
          code={`import { Link as RouterLink } from "react-router-dom";
import { Link } from "@opticule/ds";

// Compose with react-router-dom
<Link as={RouterLink} to="/components" variant="nav">
  Component Library
</Link>

// Next.js app router
import NextLink from "next/link";
<Link as={NextLink} href="/foundations" variant="brand">
  Design Foundations
</Link>

// Plain anchor (default)
<Link href="/docs">Documentation</Link>

// External with automatic rel + icon
<Link href="https://example.com" external>
  External resource
</Link>`}
        />
      </DocSection>

      <DocSection title="API Reference">
        <PropsTable
          title="Link props"
          rows={[
            { name: "variant", type: `"default" | "subtle" | "brand" | "underline" | "nav"`, default: `"default"`, description: "Visual style." },
            { name: "external", type: "boolean", default: "false", description: "Adds target='_blank', rel='noopener noreferrer', and an external icon." },
            { name: "disabled", type: "boolean", default: "false", description: "Prevents interaction. Sets aria-disabled and tabIndex=-1." },
            { name: "as", type: "ElementType", default: `"a"`, description: "Render as a different component (e.g. RouterLink, NextLink)." },
            { name: "href", type: "string", description: "The URL the link points to." },
            { name: "className", type: "string", description: "Additional Tailwind classes." },
          ]}
        />
      </DocSection>

      <DocSection title="Keyboard Interaction">
        <KeyboardTable rows={[
          { key: "Tab", description: "Move focus to the link" },
          { key: "Enter", description: "Navigate to the linked destination" },
          { key: "Shift + Tab", description: "Move focus to the previous focusable element" },
        ]} />
      </DocSection>

      <DocSection title="Accessibility">
        <AccessibilitySection>
          <A11yPoint>Links use the native <IC>&lt;a&gt;</IC> element which gives them correct semantics automatically — screen readers identify them as links and announce the destination.</A11yPoint>
          <A11yPoint>External links include <IC>rel="noopener noreferrer"</IC> automatically when <IC>external=true</IC> to prevent tab-napping security vulnerabilities.</A11yPoint>
          <A11yPoint>The external icon uses <IC>aria-label="(opens in new tab)"</IC> so screen readers announce the behavior change to users.</A11yPoint>
          <A11yPoint>Disabled links use <IC>aria-disabled="true"</IC> and <IC>tabIndex=-1</IC> — they remain in the DOM for visual context but are removed from tab order.</A11yPoint>
          <A11yPoint>Link text must describe the destination — never use 'click here', 'read more', or 'here' as the only visible text.</A11yPoint>
        </AccessibilitySection>
      </DocSection>
    </div>
  );
}
