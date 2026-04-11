import { useState } from "react";
import { TrendingUp, Users, DollarSign, ShoppingCart, Star, Package } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../../data-display/Card";
import { Avatar, AvatarGroup } from "../../data-display/Avatar";
import { Badge } from "../../inputs/Badge";
import { Tag } from "../../inputs/Tag";
import { Stat } from "../../data-display/Stat";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../../data-display/Accordion";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell, TableCaption } from "../../data-display/Table";
import { Skeleton } from "../../data-display/Skeleton";
import { Button } from "../../inputs/Button";
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

export function DataDisplayShowcase() {
  const [tags, setTags] = useState(["React", "TypeScript", "Tailwind", "Radix UI", "Vite"]);

  return (
    <div className="space-y-16">
      <PageHeader
        title="Data Display"
        description="Components that present structured information — cards for surface containers, avatars for identity, badges and tags for metadata, stat cards for KPIs, accordions for progressive disclosure, tables for structured data, and skeletons for loading states."
        badges={[
          { label: "Stable",     color: "green" },
          { label: "Accessible", color: "blue"  },
          { label: "v1.0.0",     color: "gray"  },
        ]}
        importPath={`import { Card, Avatar, Badge, Tag, Stat, Accordion, Table, Skeleton } from "@opticule/ds"`}
      />

      <DocSection title="Usage guidelines">
        <UsageBlock
          use={[
            { text: "Use Card as a container for related content that belongs on a distinct surface." },
            { text: "Use Avatar to represent a user or entity — pair with name and status when context demands it." },
            { text: "Use Badge for compact, read-only status labels on other elements." },
            { text: "Use Tag/Chip for user-created or removable metadata items like category filters or skill sets." },
            { text: "Use Stat for KPI dashboards where at-a-glance numeric values and trends are the primary content." },
            { text: "Use Accordion for FAQ pages or settings panels with many optional sections." },
            { text: "Use Skeleton during initial data loads to prevent layout shift and reduce perceived wait time." },
          ]}
          avoid={[
            { text: "Don't use Card as a layout wrapper — it implies meaningful content grouping." },
            { text: "Don't use Badge as a button — it is non-interactive by design." },
            { text: "Don't use Accordion if all sections need to be open simultaneously — use a list instead." },
            { text: "Don't show Skeleton for more than a few seconds — it should be replaced by real content." },
            { text: "Don't use Tag for non-removable status labels — use Badge instead." },
          ]}
        />
      </DocSection>

      {/* Card */}
      <DocSection title="Card" description="Content surface with five visual variants and configurable padding tiers.">
        <DemoBlock label="variants">
          <Card className="w-56">
            <CardHeader>
              <CardTitle>Default Card</CardTitle>
              <CardDescription>Standard surface with border</CardDescription>
            </CardHeader>
            <CardContent><p className="text-sm text-foreground/60">Body content lives here.</p></CardContent>
            <CardFooter><Button size="sm">Action</Button></CardFooter>
          </Card>

          <Card variant="glass" className="w-56">
            <CardHeader>
              <CardTitle>Glass Card</CardTitle>
              <CardDescription>Frosted glass surface</CardDescription>
            </CardHeader>
            <CardContent><p className="text-sm text-foreground/60">Backdrop blur effect.</p></CardContent>
          </Card>

          <Card variant="outlined" className="w-56">
            <CardHeader>
              <CardTitle>Outlined Card</CardTitle>
              <CardDescription>Transparent with thick border</CardDescription>
            </CardHeader>
            <CardContent><p className="text-sm text-foreground/60">No fill, border only.</p></CardContent>
          </Card>

          <Card variant="elevated" className="w-56">
            <CardHeader>
              <CardTitle>Elevated Card</CardTitle>
              <CardDescription>Raised with shadow</CardDescription>
            </CardHeader>
            <CardContent><p className="text-sm text-foreground/60">Shadow-only elevation.</p></CardContent>
          </Card>

          <Card variant="interactive" className="w-56 cursor-pointer">
            <CardHeader>
              <CardTitle>Interactive Card</CardTitle>
              <CardDescription>Lifts on hover</CardDescription>
            </CardHeader>
            <CardContent><p className="text-sm text-foreground/60">Hover to see lift effect.</p></CardContent>
          </Card>
        </DemoBlock>
        <DemoBlock label="padding variants">
          <Card padding="none" className="w-36"><div className="h-14 flex items-center justify-center text-xs text-foreground/50">none</div></Card>
          <Card padding="sm"   className="w-36"><div className="h-14 flex items-center justify-center text-xs text-foreground/50">sm</div></Card>
          <Card padding="md"   className="w-36"><div className="h-14 flex items-center justify-center text-xs text-foreground/50">md</div></Card>
          <Card padding="lg"   className="w-36"><div className="h-14 flex items-center justify-center text-xs text-foreground/50">lg</div></Card>
          <Card padding="xl"   className="w-36"><div className="h-14 flex items-center justify-center text-xs text-foreground/50">xl</div></Card>
        </DemoBlock>
        <PropsTable
          title="Card props"
          rows={[
            { name: "variant", type: `"default" | "glass" | "outlined" | "elevated" | "interactive"`, default: `"default"`, description: "Visual style of the card surface." },
            { name: "padding", type: `"none" | "sm" | "md" | "lg" | "xl"`, default: `"none"`, description: "Inner padding tier. Use md/lg with CardHeader/CardContent/CardFooter." },
          ]}
        />
      </DocSection>

      {/* Avatar */}
      <DocSection title="Avatar" description="User identity component with image support, initials fallback, status rings, and group stacking.">
        <DemoBlock label="sizes">
          <Avatar name="Nze Rachi" size="xs" />
          <Avatar name="Nze Rachi" size="sm" />
          <Avatar name="Nze Rachi" size="md" />
          <Avatar name="Nze Rachi" size="lg" />
          <Avatar name="Nze Rachi" size="xl" />
          <Avatar name="Nze Rachi" size="2xl" />
        </DemoBlock>
        <DemoBlock label="status indicators">
          <Avatar name="Alice Wong" size="lg" status="online"  />
          <Avatar name="Bob Lee"    size="lg" status="busy"    />
          <Avatar name="Carol Kim"  size="lg" status="away"    />
          <Avatar name="Dave Chu"   size="lg" status="offline" />
        </DemoBlock>
        <DemoBlock label="image with fallback">
          <Avatar src="https://unavailable-image.test/photo.jpg" name="Fallback Demo" size="lg" />
          <Avatar name="Opticule DS" size="lg" />
          <Avatar size="lg" />
        </DemoBlock>
        <DemoBlock label="avatar group">
          <AvatarGroup>
            <Avatar name="Alice Wong" size="md" />
            <Avatar name="Bob Lee"    size="md" />
            <Avatar name="Carol Kim"  size="md" />
            <Avatar name="Dave Chu"   size="md" />
            <Avatar name="+3"         size="md" />
          </AvatarGroup>
        </DemoBlock>
        <PropsTable
          title="Avatar props"
          rows={[
            { name: "name",   type: "string",  description: "Full name — used to generate initials and as aria-label." },
            { name: "src",    type: "string",  description: "Image URL. Falls back to initials if unavailable." },
            { name: "size",   type: `"xs" | "sm" | "md" | "lg" | "xl" | "2xl"`, default: `"md"`, description: "Avatar diameter." },
            { name: "status", type: `"online" | "busy" | "away" | "offline"`,   description: "Colored status ring." },
            { name: "alt",    type: "string",  description: "Alt text for the image. Defaults to name." },
          ]}
        />
      </DocSection>

      {/* Badge */}
      <DocSection title="Badge" description="Compact read-only label for status, category, or count. Non-interactive.">
        <DemoBlock label="variants">
          <Badge variant="default">Default</Badge>
          <Badge variant="gradient">Gradient</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="error">Error</Badge>
          <Badge variant="info">Info</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="neutral">Neutral</Badge>
        </DemoBlock>
        <DemoBlock label="sizes">
          <Badge size="sm">Small</Badge>
          <Badge size="md">Medium</Badge>
          <Badge size="lg">Large</Badge>
        </DemoBlock>
        <DemoBlock label="dot variant (no text)">
          <Badge variant="success" dot />
          <Badge variant="warning" dot />
          <Badge variant="error"   dot />
          <Badge variant="info"    dot />
          <Badge variant="neutral" dot />
        </DemoBlock>
        <PropsTable
          title="Badge props"
          rows={[
            { name: "variant", type: `"default" | "gradient" | "success" | "warning" | "error" | "info" | "outline" | "neutral"`, default: `"default"`, description: "Semantic color scheme." },
            { name: "size",    type: `"sm" | "md" | "lg"`, default: `"md"`, description: "Text and padding size." },
            { name: "dot",     type: "boolean", default: "false", description: "Show only a colored dot, no text." },
          ]}
        />
      </DocSection>

      {/* Tag */}
      <DocSection title="Tag / Chip" description="Removable metadata labels. Use for user-created filters, categories, or skill tags.">
        <DemoBlock label="removable tags (live)">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Tag key={tag} onRemove={() => setTags(tags.filter((t) => t !== tag))}>
                {tag}
              </Tag>
            ))}
          </div>
        </DemoBlock>
        <DemoBlock label="variants and colors">
          <Tag variant="filled">Filled</Tag>
          <Tag variant="outline">Outline</Tag>
          <Tag variant="subtle">Subtle</Tag>
          <div className="w-full border-t border-border my-1" />
          <Tag color="brand">Brand</Tag>
          <Tag color="success">Success</Tag>
          <Tag color="warning">Warning</Tag>
          <Tag color="error">Error</Tag>
          <Tag color="info">Info</Tag>
        </DemoBlock>
        <DemoBlock label="selected state">
          <Tag selected>Active Filter</Tag>
          <Tag selected color="brand">Brand Filter</Tag>
          <Tag>Inactive</Tag>
        </DemoBlock>
      </DocSection>

      {/* Stat */}
      <DocSection title="Stat / KPI Card" description="At-a-glance numeric values with trend deltas for dashboards and analytics pages.">
        <DemoBlock label="live metrics with deltas">
          <Stat label="Total Revenue" value="$48,295" delta={12.4}  deltaLabel="vs last month" icon={<DollarSign size={20} />} />
          <Stat label="Active Users"  value="1,204"   delta={-3.1}  deltaLabel="vs last week"  icon={<Users      size={20} />} />
          <Stat label="Orders"        value="342"      delta={0}     deltaLabel="no change"      icon={<ShoppingCart size={20} />} />
          <Stat label="Avg. Rating"   value="4.8"      delta={5.2}                               icon={<Star       size={20} />} />
        </DemoBlock>
        <DemoBlock label="sizes">
          <Stat label="Revenue" value="$12K"       delta={8.1} size="sm" />
          <Stat label="Revenue" value="$12,000"    delta={8.1} size="md" />
          <Stat label="Revenue" value="$12,000.00" delta={8.1} size="lg" />
        </DemoBlock>
        <PropsTable
          title="Stat props"
          rows={[
            { name: "label",      type: "string",    required: true, description: "Metric name displayed above the value." },
            { name: "value",      type: "string | number", required: true, description: "Primary metric value." },
            { name: "delta",      type: "number",    description: "Percentage change. Positive = green up, negative = red down, 0 = neutral." },
            { name: "deltaLabel", type: "string",    description: "Context for the delta (e.g. 'vs last month')." },
            { name: "icon",       type: "ReactNode", description: "Icon displayed alongside the label." },
            { name: "size",       type: `"sm" | "md" | "lg"`, default: `"md"`, description: "Card density." },
          ]}
        />
      </DocSection>

      {/* Accordion */}
      <DocSection title="Accordion" description="Progressive disclosure for long-form content — single or multiple open panels.">
        <DemoBlock label="single mode (one open at a time)" vertical>
          <div className="w-full max-w-lg">
            <Accordion type="single" collapsible defaultValue="q1">
              <AccordionItem value="q1">
                <AccordionTrigger>What is Opticule Design System?</AccordionTrigger>
                <AccordionContent>
                  Opticule DS is a production-grade component library built with React 19, Tailwind CSS v4, and Radix UI
                  primitives — designed for speed, accessibility, and brand consistency.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2">
                <AccordionTrigger>How do I install it?</AccordionTrigger>
                <AccordionContent>
                  Run <code className="text-brand-orange">npm install @opticule/ds</code> then import components directly.
                  The package is fully tree-shakeable with no global CSS side-effects.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3">
                <AccordionTrigger>Does it support dark mode?</AccordionTrigger>
                <AccordionContent>
                  Yes. Opticule DS ships with a <code className="text-brand-orange">ThemeProvider</code> that handles
                  light, dark, and high-contrast themes with CSS variables. No extra setup required.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q4">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  All interactive components follow WAI-ARIA guidelines. Radix UI primitives power every overlay,
                  navigation, and form element — fully keyboard-navigable and screen-reader friendly.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </DemoBlock>
        <DemoBlock label="multiple mode (many open at once)" vertical>
          <div className="w-full max-w-lg">
            <Accordion type="multiple" defaultValue={["a", "b"]}>
              <AccordionItem value="a">
                <AccordionTrigger>Panel A (open by default)</AccordionTrigger>
                <AccordionContent>Content for panel A. Multiple panels can be open simultaneously.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="b">
                <AccordionTrigger>Panel B (open by default)</AccordionTrigger>
                <AccordionContent>Content for panel B. Each panel is independent.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="c">
                <AccordionTrigger>Panel C (closed)</AccordionTrigger>
                <AccordionContent>Content for panel C. Click to open.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </DemoBlock>
        <PropsTable
          title="Accordion props"
          rows={[
            { name: "type",         type: `"single" | "multiple"`, required: true, description: "Single allows one open panel; multiple allows many." },
            { name: "collapsible",  type: "boolean",               default: "false", description: "In single mode, allows closing the active panel." },
            { name: "defaultValue", type: "string | string[]",     description: "Default open panel(s) — uncontrolled." },
            { name: "value",        type: "string | string[]",     description: "Controlled open panel(s)." },
            { name: "onValueChange",type: "(v) => void",           description: "Called when open panels change." },
          ]}
        />
      </DocSection>

      {/* Table */}
      <DocSection title="Table" description="Semantic HTML table with consistent styling for structured data. Supports caption, hover rows, and sticky headers.">
        <DemoBlock label="data table" vertical>
          <div className="w-full overflow-x-auto">
            <Table>
              <TableCaption>Recent design system components</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Component</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Stories</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { name: "Button",         cat: "Inputs",       status: "Stable",  stories: 7 },
                  { name: "Card",           cat: "Data Display", status: "Stable",  stories: 5 },
                  { name: "Modal",          cat: "Overlay",      status: "Stable",  stories: 4 },
                  { name: "Slider",         cat: "Inputs",       status: "Stable",  stories: 3 },
                  { name: "CommandPalette", cat: "Overlay",      status: "Beta",    stories: 2 },
                  { name: "DataTable",      cat: "Patterns",     status: "Planned", stories: 0 },
                ].map((row) => (
                  <TableRow key={row.name}>
                    <TableCell className="font-medium">{row.name}</TableCell>
                    <TableCell className="text-foreground/60">{row.cat}</TableCell>
                    <TableCell>
                      <Badge
                        variant={row.status === "Stable" ? "success" : row.status === "Beta" ? "warning" : "neutral"}
                        size="sm"
                      >
                        {row.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">{row.stories}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </DemoBlock>
      </DocSection>

      {/* Skeleton */}
      <DocSection title="Skeleton" description="Placeholder shimmer for loading states — prevents layout shift and reduces perceived wait time.">
        <DemoBlock label="shapes" vertical>
          <Skeleton className="h-4 w-48" />
          <Skeleton variant="text"   lines={3} className="w-96" />
          <Skeleton variant="circle" className="size-12" />
          <Skeleton variant="rect"   className="h-32 w-full max-w-md" />
        </DemoBlock>
        <DemoBlock label="card loading state" vertical>
          <div className="w-72 border border-border rounded-xl p-5 space-y-4 bg-background">
            <div className="flex items-center gap-3">
              <Skeleton variant="circle" className="size-10 shrink-0" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-3.5 w-32" />
                <Skeleton className="h-3 w-20" />
              </div>
            </div>
            <Skeleton variant="rect" className="h-32 w-full rounded-lg" />
            <Skeleton variant="text" lines={2} />
            <div className="flex gap-2">
              <Skeleton className="h-8 w-20 rounded-lg" />
              <Skeleton className="h-8 w-16 rounded-lg" />
            </div>
          </div>
        </DemoBlock>
        <DemoBlock label="stat card loading state">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="border border-border rounded-xl p-5 space-y-3 w-44 bg-background">
              <Skeleton className="h-3 w-20" />
              <Skeleton className="h-7 w-28" />
              <Skeleton className="h-3 w-16" />
            </div>
          ))}
        </DemoBlock>
        <PropsTable
          title="Skeleton props"
          rows={[
            { name: "variant",   type: `"default" | "text" | "circle" | "rect"`, default: `"default"`, description: "Shape preset. 'text' repeats lines; 'circle' forces rounded-full." },
            { name: "lines",     type: "number",   default: "1",    description: "Number of lines (variant='text' only)." },
            { name: "className", type: "string",   description: "Width, height, and border-radius via Tailwind classes." },
          ]}
        />
      </DocSection>

      {/* Accessibility */}
      <DocSection title="Accessibility">
        <AccessibilitySection>
          <A11yPoint>Avatar provides <IC>aria-label</IC> with the person's name; the inner image uses the <IC>alt</IC> prop (defaults to <IC>name</IC>).</A11yPoint>
          <A11yPoint>Accordion follows the ARIA Accordion pattern: each trigger has <IC>aria-expanded</IC> and <IC>aria-controls</IC> linked to its content panel.</A11yPoint>
          <A11yPoint>Table uses semantic HTML (<IC>&lt;table&gt;</IC>, <IC>&lt;thead&gt;</IC>, <IC>&lt;th scope="col"&gt;</IC>) so screen readers can announce column headers per cell.</A11yPoint>
          <A11yPoint>Skeleton uses <IC>aria-busy="true"</IC> on its container and <IC>aria-label="Loading"</IC> so screen readers announce that content is loading.</A11yPoint>
          <A11yPoint>Badge uses <IC>role="status"</IC> when displaying dynamic values (counts) so updates are announced to screen readers.</A11yPoint>
          <A11yPoint>Tag's remove button has <IC>aria-label="Remove {label}"</IC> so keyboard and screen reader users know which tag they're removing.</A11yPoint>
        </AccessibilitySection>
      </DocSection>
    </div>
  );
}
