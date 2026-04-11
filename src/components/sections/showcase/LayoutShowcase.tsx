import { VStack, HStack } from "../../layout/Stack";
import { Grid, SimpleGrid } from "../../layout/Grid";
import { Container } from "../../layout/Container";
import { Divider } from "../../layout/Divider";
import { AspectRatio } from "../../layout/AspectRatio";
import { Center } from "../../layout/Center";
import { Spacer } from "../../layout/Spacer";
import { Spinner } from "../../feedback/Spinner";
import { Badge } from "../../inputs/Badge";
import {
  PageHeader,
  DocSection,
  DemoBlock,
  UsageBlock,
  PropsTable,
  IC,
} from "./DocComponents";

function Box({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div className={`rounded-lg border border-border bg-muted-light/30 text-xs text-foreground/60 flex items-center justify-center font-mono ${className}`}>
      {label}
    </div>
  );
}

export function LayoutShowcase() {
  return (
    <div className="space-y-16">
      <PageHeader
        title="Layout"
        description="Composable layout primitives that handle spacing, alignment, and responsive structure — without writing custom Flexbox or Grid CSS. Stack, Grid, Container, Divider, AspectRatio, Center, and Spacer."
        badges={[
          { label: "Stable",  color: "green" },
          { label: "v1.0.0",  color: "gray"  },
        ]}
        importPath={`import { VStack, HStack, Grid, Container, Divider, AspectRatio, Center, Spacer } from "@opticule/ds"`}
      />

      <DocSection title="Usage guidelines">
        <UsageBlock
          use={[
            { text: "Use VStack/HStack when you need consistent spacing between flex items." },
            { text: "Use Grid for regular multi-column layouts; SimpleGrid for responsive auto-fill grids." },
            { text: "Use Container to constrain max-width and center page-level content." },
            { text: "Use Divider to visually separate sections within a form, card, or list." },
            { text: "Use AspectRatio for images, videos, and embeds where the ratio must be preserved." },
            { text: "Use Center for empty states, loading placeholders, and centered hero content." },
            { text: "Use Spacer to push content to opposite ends of a flex row without hardcoding margins." },
          ]}
          avoid={[
            { text: "Don't use Stack when only one item is present — just apply gap/margin directly." },
            { text: "Don't nest Container inside another Container — they'll double the padding." },
            { text: "Don't use Grid for single-column content — a plain VStack is sufficient." },
          ]}
        />
      </DocSection>

      {/* VStack / HStack */}
      <DocSection title="Stack" description="VStack = vertical flex column; HStack = horizontal flex row. Both accept gap, align, and justify props.">
        <DemoBlock label="VStack — gap variants" vertical>
          <div className="flex gap-8 flex-wrap">
            {(["xs", "sm", "md", "lg", "xl"] as const).map((gap) => (
              <div key={gap} className="flex flex-col items-center gap-1">
                <span className="text-xs text-foreground/40 font-mono mb-1">gap="{gap}"</span>
                <VStack gap={gap}>
                  {[1, 2, 3].map((i) => (
                    <Box key={i} label={`${i}`} className="w-12 h-8" />
                  ))}
                </VStack>
              </div>
            ))}
          </div>
        </DemoBlock>
        <DemoBlock label="HStack — justify variants" vertical>
          {(["start", "center", "end", "between"] as const).map((j) => (
            <div key={j} className="w-full space-y-1">
              <span className="text-xs text-foreground/40 font-mono">justify="{j}"</span>
              <HStack gap="md" justify={j} className="w-full border border-border/50 rounded-lg p-2">
                <Box label="A" className="w-12 h-8" />
                <Box label="B" className="w-16 h-8" />
                <Box label="C" className="w-10 h-8" />
              </HStack>
            </div>
          ))}
        </DemoBlock>
      </DocSection>

      {/* Grid */}
      <DocSection title="Grid" description="CSS Grid wrapper with responsive column counts. SimpleGrid auto-fills columns based on a minimum child width.">
        <DemoBlock label="2, 3, 4 columns" vertical>
          {[2, 3, 4].map((cols) => (
            <div key={cols} className="w-full space-y-1">
              <span className="text-xs text-foreground/40 font-mono">columns={cols}</span>
              <Grid columns={cols} gap="sm" className="w-full">
                {Array.from({ length: cols * 2 }, (_, i) => (
                  <Box key={i} label={`${i + 1}`} className="h-10" />
                ))}
              </Grid>
            </div>
          ))}
        </DemoBlock>
        <DemoBlock label="SimpleGrid — responsive auto-fill" vertical>
          <SimpleGrid minChildWidth={120} gap="sm" className="w-full">
            {["React", "Vue", "Angular", "Svelte", "Solid", "Qwik", "Astro", "Next.js"].map((f) => (
              <div key={f} className="rounded-lg border border-border bg-background px-3 py-2 text-sm text-center font-medium">
                {f}
              </div>
            ))}
          </SimpleGrid>
          <p className="text-xs text-foreground/40">Resize the window — columns adjust automatically. minChildWidth=120px</p>
        </DemoBlock>
      </DocSection>

      {/* Container */}
      <DocSection title="Container" description="Centered max-width wrapper with responsive horizontal padding. Six size tiers from 520 px to 1536 px.">
        <DemoBlock label="size variants" vertical>
          {(["xs", "sm", "md", "lg", "xl", "2xl"] as const).map((size) => (
            <div key={size} className="w-full space-y-1">
              <Container size={size} className="border border-dashed border-brand-orange/30 rounded-lg py-2 px-4 bg-brand-orange/5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-brand-orange">size="{size}"</span>
                  <span className="text-xs text-foreground/40">
                    {size === "xs" ? "520px" : size === "sm" ? "640px" : size === "md" ? "768px" : size === "lg" ? "1024px" : size === "xl" ? "1280px" : "1536px"}
                  </span>
                </div>
              </Container>
            </div>
          ))}
        </DemoBlock>
      </DocSection>

      {/* Divider */}
      <DocSection title="Divider" description="Horizontal or vertical rule for separating content sections. Supports an optional text label.">
        <DemoBlock label="horizontal variants" vertical>
          <div className="w-full space-y-4">
            <Divider />
            <Divider label="Or continue with" />
            <Divider label="Section break" />
          </div>
        </DemoBlock>
        <DemoBlock label="vertical divider">
          <div className="flex items-center gap-4 h-8">
            <span className="text-sm">Left content</span>
            <Divider orientation="vertical" className="h-full" />
            <span className="text-sm">Right content</span>
            <Divider orientation="vertical" className="h-full" />
            <span className="text-sm">More content</span>
          </div>
        </DemoBlock>
      </DocSection>

      {/* Spacer */}
      <DocSection title="Spacer" description="A flex-grow element that fills available space, pushing sibling elements to opposite ends of a flex container.">
        <DemoBlock label="spacer pushes actions to end" vertical>
          <div className="w-full flex items-center border border-border rounded-lg px-4 py-3 bg-background">
            <span className="text-sm font-medium">Document Title</span>
            <Spacer />
            <div className="flex items-center gap-2">
              <Badge variant="success" size="sm">Saved</Badge>
              <button className="text-xs text-foreground/50 hover:text-foreground">Share</button>
            </div>
          </div>
        </DemoBlock>
      </DocSection>

      {/* AspectRatio */}
      <DocSection title="Aspect Ratio" description="Maintains a fixed width-to-height ratio regardless of container width — essential for responsive images, videos, and embeds.">
        <DemoBlock label="common ratios" vertical>
          <div className="grid grid-cols-3 gap-4 w-full">
            {[
              { ratio: 16 / 9, label: "16:9 — Video" },
              { ratio: 4 / 3, label: "4:3 — Photo" },
              { ratio: 1, label: "1:1 — Square" },
              { ratio: 3 / 2, label: "3:2 — Film" },
              { ratio: 21 / 9, label: "21:9 — Cinema" },
              { ratio: 9 / 16, label: "9:16 — Portrait" },
            ].map(({ ratio, label }) => (
              <div key={label} className="space-y-1">
                <AspectRatio ratio={ratio} className="rounded-lg border border-border bg-muted-light/20">
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-xs font-mono text-foreground/60">{label}</span>
                  </div>
                </AspectRatio>
              </div>
            ))}
          </div>
        </DemoBlock>
      </DocSection>

      {/* Center */}
      <DocSection title="Center" description="Centers children both horizontally and vertically within its container using flexbox.">
        <DemoBlock label="centered content in a fixed area">
          <Center className="w-48 h-32 border border-border rounded-xl bg-muted-light/20">
            <Spinner color="brand" size="lg" />
          </Center>
          <Center className="w-48 h-32 border border-border rounded-xl bg-muted-light/20">
            <div className="text-center space-y-1">
              <p className="text-sm font-semibold">No results</p>
              <p className="text-xs text-foreground/50">Try a different search</p>
            </div>
          </Center>
          <Center className="w-48 h-32 border-2 border-dashed border-brand-orange/30 rounded-xl">
            <Badge variant="gradient">Centered Badge</Badge>
          </Center>
        </DemoBlock>
      </DocSection>

      <DocSection title="API Reference">
        <PropsTable
          title="VStack / HStack"
          rows={[
            { name: "gap",     type: `"xs" | "sm" | "md" | "lg" | "xl"`,                                          default: `"md"`,     description: "Space between children." },
            { name: "align",   type: `"start" | "center" | "end" | "stretch" | "baseline"`,                       default: `"stretch"`,description: "align-items value." },
            { name: "justify", type: `"start" | "center" | "end" | "between" | "around" | "evenly"`,              default: `"start"`,  description: "justify-content value." },
            { name: "wrap",    type: "boolean",                                                                    default: "false",    description: "Allow children to wrap to the next line." },
          ]}
        />
        <PropsTable
          title="Grid"
          rows={[
            { name: "columns", type: "number | Partial<Record<'base'|'sm'|'md'|'lg'|'xl', number>>", required: true, description: "Column count or responsive column map." },
            { name: "gap",     type: `"xs" | "sm" | "md" | "lg" | "xl"`, default: `"md"`, description: "Gap between grid cells." },
          ]}
        />
        <PropsTable
          title="Container"
          rows={[
            { name: "size", type: `"xs" | "sm" | "md" | "lg" | "xl" | "2xl"`, default: `"xl"`, description: "Max-width breakpoint. xs=520px … 2xl=1536px." },
          ]}
        />
        <PropsTable
          title="Divider"
          rows={[
            { name: "orientation", type: `"horizontal" | "vertical"`, default: `"horizontal"`, description: "Direction of the rule line." },
            { name: "label",       type: "string",                                              description: "Optional centered text label." },
          ]}
        />
        <PropsTable
          title="AspectRatio"
          rows={[
            { name: "ratio", type: "number", required: true, description: "Width ÷ height. e.g. 16/9, 4/3, 1 (square)." },
          ]}
        />
      </DocSection>
    </div>
  );
}
