import { useState } from "react";
import { User, Settings, LogOut, Bell, CreditCard, HelpCircle, ChevronDown, LayoutGrid, List, Columns } from "lucide-react";
import { Button } from "../../inputs/Button";
import { Avatar } from "../../data-display/Avatar";
import { Badge } from "../../inputs/Badge";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "../../navigation/Tabs";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "../../navigation/Breadcrumb";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "../../navigation/Pagination";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "../../navigation/DropdownMenu";
import { Stepper } from "../../navigation/Stepper";
import { SegmentedControl } from "../../navigation/SegmentedControl";
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
} from "./DocComponents";

const WIZARD_STEPS = [
  { label: "Account",     description: "Create your account"         },
  { label: "Profile",     description: "Tell us about yourself"      },
  { label: "Preferences", description: "Customize your experience"   },
  { label: "Review",      description: "Confirm and submit"          },
];

export function NavigationShowcase() {
  const [currentStep, setCurrentStep] = useState(1);
  const [currentPage, setCurrentPage] = useState(3);
  const [view, setView]               = useState("grid");
  const [tabVariant, setTabVariant]   = useState<"underline" | "pill" | "enclosed">("underline");

  const totalPages = 10;

  return (
    <div className="space-y-16">
      <PageHeader
        title="Navigation"
        description="Components that help users move through and orient themselves within an application — tabs, breadcrumbs, pagination, dropdown menus, steppers, and segmented controls."
        badges={[
          { label: "Stable",     color: "green" },
          { label: "Accessible", color: "blue"  },
          { label: "v1.0.0",     color: "gray"  },
        ]}
        importPath={`import { Tabs, Breadcrumb, Pagination, DropdownMenu, Stepper, SegmentedControl } from "@opticule/ds"`}
      />

      {/* ── Overview ───────────────────────────────────────────────── */}
      <DocSection title="Overview">
        <p className="text-sm text-foreground/60 leading-relaxed max-w-3xl">
          Navigation components help users understand where they are and how to get where they want to go.
          Choose based on the navigation model required:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            { name: "Tabs",             model: "View switching",    desc: "Switch between related content sections in-place." },
            { name: "Breadcrumb",       model: "Location",          desc: "Show the user's position in a hierarchy." },
            { name: "Pagination",       model: "Page navigation",   desc: "Navigate through paginated data sets." },
            { name: "DropdownMenu",     model: "Command list",      desc: "Open a positioned list of actions or options." },
            { name: "Stepper",          model: "Progress",          desc: "Guide users through a multi-step process." },
            { name: "SegmentedControl", model: "Option selection",  desc: "Mutually exclusive option picker." },
          ].map((c) => (
            <div key={c.name} className="flex gap-3 p-3 rounded-lg border border-border bg-bg-secondary/20">
              <div>
                <p className="text-sm font-medium"><code className="text-brand-orange">{c.name}</code></p>
                <p className="text-xs text-brand-purple/80 mt-0.5">{c.model}</p>
                <p className="text-xs text-foreground/50 mt-1">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </DocSection>

      {/* ── Usage ──────────────────────────────────────────────────── */}
      <DocSection title="Usage guidelines">
        <UsageBlock
          use={[
            { text: "Use Tabs to switch between closely related views without a page load — overview, details, settings." },
            { text: "Use Breadcrumb in hierarchical structures with 3+ levels to help users navigate up." },
            { text: "Use Pagination for server-side paginated lists where virtualization is impractical." },
            { text: "Use DropdownMenu for action lists with more than 3 items that don't all need to be visible." },
            { text: "Use Stepper for multi-step flows where linear progression is required (forms, onboarding)." },
            { text: "Use SegmentedControl for 2–5 mutually exclusive options that should all be visible at once." },
          ]}
          avoid={[
            { text: "Don't use Tabs for navigation between unrelated pages — use a sidebar nav or links instead." },
            { text: "Don't show Breadcrumb on top-level pages where there is no parent to navigate to." },
            { text: "Don't use Pagination for short lists — show all items or use load-more instead." },
            { text: "Don't put more than 8 items in a DropdownMenu — consider a searchable Combobox instead." },
            { text: "Don't use SegmentedControl for more than 5 options — use Tabs or Select instead." },
            { text: "Don't allow users to skip required Stepper steps unless the step is optional." },
          ]}
        />
      </DocSection>

      {/* ── Tabs ───────────────────────────────────────────────────── */}
      <DocSection title="Tabs" description="Three visual variants — underline, pill, and enclosed. All support full keyboard navigation.">
        <DemoBlock label="variant switcher" vertical>
          <div className="flex gap-2">
            {(["underline", "pill", "enclosed"] as const).map((v) => (
              <Button
                key={v}
                size="xs"
                variant={tabVariant === v ? "primary" : "outline"}
                onClick={() => setTabVariant(v)}
              >
                {v}
              </Button>
            ))}
          </div>
          <Tabs defaultValue="overview" className="w-full">
            <TabsList variant={tabVariant}>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="components">Components</TabsTrigger>
              <TabsTrigger value="tokens">Tokens</TabsTrigger>
              <TabsTrigger value="changelog">Changelog</TabsTrigger>
            </TabsList>
            <TabsContent value="overview"   className="pt-4 text-sm text-foreground/60">Overview panel — describes the design system at a high level.</TabsContent>
            <TabsContent value="components" className="pt-4 text-sm text-foreground/60">Components panel — browsable list of all components.</TabsContent>
            <TabsContent value="tokens"     className="pt-4 text-sm text-foreground/60">Tokens panel — all primitive and semantic design tokens.</TabsContent>
            <TabsContent value="changelog"  className="pt-4 text-sm text-foreground/60">Changelog panel — version history and migration guides.</TabsContent>
          </Tabs>
        </DemoBlock>
        <DemoBlock label="with badge counts" vertical>
          <Tabs defaultValue="all" className="w-full">
            <TabsList variant="pill">
              <TabsTrigger value="all">All <Badge size="sm" variant="neutral"  className="ml-1.5">42</Badge></TabsTrigger>
              <TabsTrigger value="stable">Stable <Badge size="sm" variant="success" className="ml-1.5">38</Badge></TabsTrigger>
              <TabsTrigger value="beta">Beta <Badge size="sm" variant="warning" className="ml-1.5">4</Badge></TabsTrigger>
              <TabsTrigger value="planned">Planned <Badge size="sm" variant="info" className="ml-1.5">12</Badge></TabsTrigger>
            </TabsList>
            <TabsContent value="all"     className="pt-4 text-sm text-foreground/60">Showing all 42 components.</TabsContent>
            <TabsContent value="stable"  className="pt-4 text-sm text-foreground/60">Showing 38 stable components.</TabsContent>
            <TabsContent value="beta"    className="pt-4 text-sm text-foreground/60">Showing 4 beta components.</TabsContent>
            <TabsContent value="planned" className="pt-4 text-sm text-foreground/60">Showing 12 planned components.</TabsContent>
          </Tabs>
        </DemoBlock>
        <PropsTable
          title="Tabs props"
          rows={[
            { name: "defaultValue", type: "string",  required: true,  description: "Default active tab (uncontrolled)." },
            { name: "value",        type: "string",  description: "Controlled active tab value." },
            { name: "onValueChange",type: "(v: string) => void", description: "Called when the active tab changes." },
          ]}
        />
        <PropsTable
          title="TabsList props"
          rows={[
            { name: "variant", type: `"underline" | "pill" | "enclosed"`, default: `"underline"`, description: "Visual style of the tab strip." },
          ]}
        />
        <PropsTable
          title="TabsTrigger props"
          rows={[
            { name: "value",    type: "string",    required: true, description: "Unique identifier matching a TabsContent value." },
            { name: "disabled", type: "boolean",   default: "false", description: "Prevents selecting this tab." },
            { name: "children", type: "ReactNode", required: true, description: "Tab label — text, or text + icon/badge." },
          ]}
        />
      </DocSection>

      {/* ── Breadcrumb ─────────────────────────────────────────────── */}
      <DocSection title="Breadcrumb" description="Shows the user's location in a hierarchy. Use whenever the page depth is 3 or more levels.">
        <DemoBlock label="navigation trail" vertical>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink href="#" onClick={(e) => e.preventDefault()}>Home</BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbLink href="#" onClick={(e) => e.preventDefault()}>Components</BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbPage>Breadcrumb</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink href="#" onClick={(e) => e.preventDefault()}>Opticule DS</BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbLink href="#" onClick={(e) => e.preventDefault()}>Design Foundations</BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbLink href="#" onClick={(e) => e.preventDefault()}>Color System</BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbPage>Brand Colors</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </DemoBlock>
      </DocSection>

      {/* ── Pagination ─────────────────────────────────────────────── */}
      <DocSection title="Pagination" description="Navigate through paginated data. The active page is announced to screen readers via aria-current.">
        <DemoBlock label="controlled pagination" vertical>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(e) => { e.preventDefault(); setCurrentPage(Math.max(1, currentPage - 1)); }}
                  aria-disabled={currentPage === 1}
                />
              </PaginationItem>
              {[1, 2, 3].map((p) => (
                <PaginationItem key={p}>
                  <PaginationLink href="#" isActive={currentPage === p} onClick={(e) => { e.preventDefault(); setCurrentPage(p); }}>
                    {p}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem><PaginationEllipsis /></PaginationItem>
              {[8, 9, 10].map((p) => (
                <PaginationItem key={p}>
                  <PaginationLink href="#" isActive={currentPage === p} onClick={(e) => { e.preventDefault(); setCurrentPage(p); }}>
                    {p}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={(e) => { e.preventDefault(); setCurrentPage(Math.min(totalPages, currentPage + 1)); }}
                  aria-disabled={currentPage === totalPages}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
          <p className="text-sm text-foreground/50 text-center">Page {currentPage} of {totalPages}</p>
        </DemoBlock>
      </DocSection>

      {/* ── Dropdown Menu ──────────────────────────────────────────── */}
      <DocSection title="Dropdown Menu" description="Click-triggered positioned list for commands, options, and actions. Supports checkboxes, radio groups, and separators.">
        <DemoBlock label="account menu + options menu">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-2 rounded-full pr-2 pl-0.5 py-0.5 border border-border hover:bg-muted-light/30 transition-colors">
                <Avatar name="Nze Rachi" size="sm" status="online" />
                <span className="text-sm font-medium">Nze Rachi</span>
                <ChevronDown size={14} className="text-foreground/50" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-52">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem><User       size={14} className="mr-2" /> Profile</DropdownMenuItem>
              <DropdownMenuItem><Settings   size={14} className="mr-2" /> Settings</DropdownMenuItem>
              <DropdownMenuItem><CreditCard size={14} className="mr-2" /> Billing</DropdownMenuItem>
              <DropdownMenuItem><Bell       size={14} className="mr-2" /> Notifications</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem><HelpCircle size={14} className="mr-2" /> Help &amp; Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive"><LogOut size={14} className="mr-2" /> Sign out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" rightIcon={<ChevronDown size={14} />}>View options</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48">
              <DropdownMenuLabel>Display</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem checked>Show labels</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem checked>Show descriptions</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Compact mode</DropdownMenuCheckboxItem>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>Sort by</DropdownMenuLabel>
              <DropdownMenuRadioGroup value="name">
                <DropdownMenuRadioItem value="name">Name</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="date">Date modified</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="size">File size</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </DemoBlock>
      </DocSection>

      {/* ── Stepper ────────────────────────────────────────────────── */}
      <DocSection title="Stepper" description="Visual progress indicator for multi-step workflows. Steps can be horizontal or vertical.">
        <DemoBlock label="horizontal — interactive" vertical>
          <Stepper steps={WIZARD_STEPS} currentStep={currentStep} orientation="horizontal" className="w-full" />
          <div className="flex gap-3">
            <Button size="sm" variant="outline" onClick={() => setCurrentStep(Math.max(0, currentStep - 1))} disabled={currentStep === 0}>
              Previous
            </Button>
            <Button size="sm" onClick={() => setCurrentStep(Math.min(WIZARD_STEPS.length - 1, currentStep + 1))} disabled={currentStep === WIZARD_STEPS.length - 1}>
              Next Step
            </Button>
          </div>
          <p className="text-sm text-foreground/50">
            Step {currentStep + 1} of {WIZARD_STEPS.length}: <span className="text-foreground">{WIZARD_STEPS[currentStep].label}</span>
          </p>
        </DemoBlock>
        <DemoBlock label="vertical orientation">
          <Stepper steps={WIZARD_STEPS} currentStep={2} orientation="vertical" />
        </DemoBlock>
        <PropsTable
          title="Stepper props"
          rows={[
            { name: "steps",        type: `{ label: string; description?: string }[]`, required: true,  description: "Ordered list of step objects." },
            { name: "currentStep",  type: "number",                                    required: true,  description: "Zero-indexed active step." },
            { name: "orientation",  type: `"horizontal" | "vertical"`,                 default: `"horizontal"`, description: "Layout direction." },
          ]}
        />
      </DocSection>

      {/* ── Segmented Control ──────────────────────────────────────── */}
      <DocSection
        title="Segmented Control"
        description="Mutually exclusive option picker — all options are always visible. Keyboard navigable with arrow keys."
      >
        <DemoBlock label="view switcher" vertical>
          <SegmentedControl
            value={view}
            onChange={setView}
            options={[
              { label: <span className="flex items-center gap-1.5"><LayoutGrid size={14} /> Grid</span>,  value: "grid"  },
              { label: <span className="flex items-center gap-1.5"><List       size={14} /> List</span>,  value: "list"  },
              { label: <span className="flex items-center gap-1.5"><Columns    size={14} /> Board</span>, value: "board" },
            ]}
          />
          <p className="text-sm text-foreground/50">Active view: <span className="text-brand-orange">{view}</span></p>
        </DemoBlock>
        <DemoBlock label="sizes">
          <SegmentedControl value="a" onChange={() => {}} size="sm" options={[{ label: "Small",  value: "a" }, { label: "Options", value: "b" }, { label: "Here", value: "c" }]} />
          <SegmentedControl value="a" onChange={() => {}} size="md" options={[{ label: "Medium", value: "a" }, { label: "Options", value: "b" }, { label: "Here", value: "c" }]} />
          <SegmentedControl value="a" onChange={() => {}} size="lg" options={[{ label: "Large",  value: "a" }, { label: "Options", value: "b" }, { label: "Here", value: "c" }]} />
        </DemoBlock>
        <PropsTable
          title="SegmentedControl props"
          rows={[
            { name: "options",  type: `{ label: ReactNode; value: string; disabled?: boolean }[]`, required: true, description: "List of options to display." },
            { name: "value",    type: "string",                                                     required: true, description: "Currently selected value." },
            { name: "onChange", type: "(value: string) => void",                                    required: true, description: "Called when the selected option changes." },
            { name: "size",     type: `"sm" | "md" | "lg"`,                                        default: `"md"`, description: "Height and font size." },
          ]}
        />
      </DocSection>

      {/* ── Keyboard ───────────────────────────────────────────────── */}
      <DocSection title="Keyboard Interaction">
        <KeyboardTable rows={[
          { key: "Tab",          description: "Move focus to the next navigation component." },
          { key: "Shift + Tab",  description: "Move focus to the previous navigation component." },
          { key: "← / →",        description: "Switch between tabs (Tabs) or options (SegmentedControl)." },
          { key: "↑ / ↓",        description: "Navigate DropdownMenu items." },
          { key: "Enter / Space", description: "Select the focused tab, dropdown item, or segmented control option." },
          { key: "Escape",        description: "Close an open DropdownMenu." },
          { key: "Home",          description: "Jump to the first item in a DropdownMenu." },
          { key: "End",           description: "Jump to the last item in a DropdownMenu." },
        ]} />
      </DocSection>

      {/* ── Accessibility ──────────────────────────────────────────── */}
      <DocSection title="Accessibility">
        <AccessibilitySection>
          <A11yPoint>Tabs follows the ARIA Tabs pattern with <IC>role="tablist"</IC>, <IC>role="tab"</IC>, and <IC>role="tabpanel"</IC>. Arrow keys navigate between tabs; <IC>aria-selected</IC> marks the active tab.</A11yPoint>
          <A11yPoint>Breadcrumb uses <IC>aria-label="Breadcrumb"</IC> on the <IC>&lt;nav&gt;</IC> and <IC>aria-current="page"</IC> on the current item.</A11yPoint>
          <A11yPoint>Pagination uses <IC>aria-label="Pagination"</IC> on the <IC>&lt;nav&gt;</IC>; the active link has <IC>aria-current="page"</IC>.</A11yPoint>
          <A11yPoint>DropdownMenu uses Radix UI under the hood — it handles <IC>role="menu"</IC>, <IC>role="menuitem"</IC>, focus management, and keyboard navigation per the ARIA Menu Button pattern.</A11yPoint>
          <A11yPoint>Stepper uses <IC>role="list"</IC> with each step as a <IC>role="listitem"</IC>. Completed steps are labeled with a visually-hidden "Complete" status.</A11yPoint>
          <A11yPoint>SegmentedControl uses <IC>role="group"</IC> with each option as a <IC>role="radio"</IC> button, following the ARIA Radio Group pattern. Arrow keys navigate options.</A11yPoint>
        </AccessibilitySection>
      </DocSection>
    </div>
  );
}
