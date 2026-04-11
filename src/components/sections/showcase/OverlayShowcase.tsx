import { useState } from "react";
import { Settings, Info, AlertTriangle, Trash2, Filter, Bell, Copy, ExternalLink } from "lucide-react";
import { Button } from "../../inputs/Button";
import { IconButton } from "../../inputs/IconButton";
import { Avatar } from "../../data-display/Avatar";
import { Badge } from "../../inputs/Badge";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "../../overlay/Tooltip";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "../../overlay/Popover";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "../../overlay/HoverCard";
import {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalContent,
  ModalFooter,
} from "../../overlay/Modal";
import {
  Drawer,
  DrawerHeader,
  DrawerTitle,
  DrawerContent,
  DrawerFooter,
} from "../../overlay/Drawer";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "../../overlay/AlertDialog";
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuLabel,
  ContextMenuShortcut,
} from "../../overlay/ContextMenu";
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

export function OverlayShowcase() {
  const [modalOpen, setModalOpen]         = useState(false);
  const [drawerOpen, setDrawerOpen]       = useState(false);
  const [drawerPlacement, setDrawerPlacement] = useState<"right" | "left" | "top" | "bottom">("right");

  const openDrawer = (placement: "right" | "left" | "top" | "bottom") => {
    setDrawerPlacement(placement);
    setDrawerOpen(true);
  };

  return (
    <TooltipProvider>
      <div className="space-y-16">
        <PageHeader
          title="Overlay"
          description="Floating and modal UI that renders above page content — tooltips, popovers, hover cards, modals, drawers, alert dialogs, and context menus. All overlay components use portals, manage focus correctly, and handle Escape to close."
          badges={[
            { label: "Stable",     color: "green" },
            { label: "Accessible", color: "blue"  },
            { label: "v1.0.0",     color: "gray"  },
          ]}
          importPath={`import { Tooltip, Popover, Modal, Drawer, AlertDialog, ContextMenu, HoverCard } from "@opticule/ds"`}
        />

        {/* ── Overview ───────────────────────────────────────────── */}
        <DocSection title="Overview">
          <p className="text-sm text-foreground/60 leading-relaxed max-w-3xl">
            Overlay components float above the main page content. They are grouped by interaction model:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { name: "Tooltip",       model: "Hover / Focus",    desc: "Non-interactive label for a UI element." },
              { name: "Popover",       model: "Click",            desc: "Interactive floating panel." },
              { name: "HoverCard",     model: "Hover",            desc: "Rich preview card on hover." },
              { name: "Modal",         model: "Programmatic",     desc: "Full focus-trapped dialog." },
              { name: "Drawer",        model: "Programmatic",     desc: "Slide-in panel from any edge." },
              { name: "AlertDialog",   model: "Click + Confirm",  desc: "Blocking confirmation dialog." },
              { name: "ContextMenu",   model: "Right-click",      desc: "Contextual action menu." },
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

        {/* ── Usage ──────────────────────────────────────────────── */}
        <DocSection title="Usage guidelines">
          <UsageBlock
            use={[
              { text: "Use Tooltip for brief, non-interactive labels on icons or truncated text." },
              { text: "Use Popover when the overlay content needs to be interactive (forms, lists, filters)." },
              { text: "Use HoverCard for rich preview content that helps users decide before clicking." },
              { text: "Use Modal for tasks that require full user attention before returning to the page." },
              { text: "Use Drawer for secondary workflows or settings that don't need to block the main view." },
              { text: "Use AlertDialog exclusively for irreversible or high-stakes confirmations." },
              { text: "Use ContextMenu only for secondary, discovered actions — not primary workflows." },
            ]}
            avoid={[
              { text: "Don't use Tooltip for critical information — it's invisible without hover/focus." },
              { text: "Don't nest modals — open a second modal only if you close the first." },
              { text: "Don't use AlertDialog for informational messages — use a Modal or Toast instead." },
              { text: "Don't put long forms in a Popover — use a Modal or Drawer for complex inputs." },
              { text: "Don't rely on ContextMenu as the only access point for an action — keyboard users may not discover it." },
              { text: "Don't use Drawer when the content is short enough to fit in a Modal." },
            ]}
          />
        </DocSection>

        {/* ── Tooltip ────────────────────────────────────────────── */}
        <DocSection title="Tooltip" description="Non-interactive floating labels. Appear on hover or keyboard focus after a configurable delay.">
          <DemoBlock label="placement sides">
            <Tooltip content="Top tooltip"    side="top">    <Button variant="outline" size="sm">Top</Button>    </Tooltip>
            <Tooltip content="Right tooltip"  side="right">  <Button variant="outline" size="sm">Right</Button>  </Tooltip>
            <Tooltip content="Bottom tooltip" side="bottom"> <Button variant="outline" size="sm">Bottom</Button> </Tooltip>
            <Tooltip content="Left tooltip"   side="left">   <Button variant="outline" size="sm">Left</Button>   </Tooltip>
          </DemoBlock>
          <DemoBlock label="on icon buttons">
            <Tooltip content="Copy to clipboard">
              <IconButton icon={<Copy size={16} />}         label="Copy"          variant="ghost" />
            </Tooltip>
            <Tooltip content="Open settings">
              <IconButton icon={<Settings size={16} />}     label="Settings"      variant="ghost" />
            </Tooltip>
            <Tooltip content="Notifications (3 unread)">
              <IconButton icon={<Bell size={16} />}         label="Notifications" variant="ghost" />
            </Tooltip>
            <Tooltip content="Open in new tab">
              <IconButton icon={<ExternalLink size={16} />} label="External link" variant="ghost" />
            </Tooltip>
          </DemoBlock>
          <DemoBlock label="instant (no delay)">
            <Tooltip content="No delay — opens immediately" delayDuration={0}>
              <Button variant="outline" size="sm">Instant tooltip</Button>
            </Tooltip>
          </DemoBlock>
          <PropsTable
            title="Tooltip props"
            rows={[
              { name: "content",        type: "ReactNode", required: true, description: "The tooltip label content." },
              { name: "children",       type: "ReactNode", required: true, description: "The trigger element — must accept ref." },
              { name: "side",           type: `"top" | "right" | "bottom" | "left"`, default: `"top"`,    description: "Which side to show the tooltip." },
              { name: "align",          type: `"start" | "center" | "end"`,           default: `"center"`, description: "Alignment along the chosen side." },
              { name: "delayDuration",  type: "number",                               default: "400",      description: "Delay in ms before the tooltip opens." },
              { name: "open",           type: "boolean",                              description: "Controlled open state." },
              { name: "defaultOpen",    type: "boolean",                              description: "Default open state (uncontrolled)." },
            ]}
          />
        </DocSection>

        {/* ── Popover ────────────────────────────────────────────── */}
        <DocSection title="Popover" description="Click-triggered floating panels for interactive content like filters, forms, and menus.">
          <DemoBlock label="click to open">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" leftIcon={<Filter size={16} />}>Filter</Button>
              </PopoverTrigger>
              <PopoverContent className="w-64 space-y-3 p-4">
                <p className="text-sm font-semibold">Filter options</p>
                <div className="space-y-2 text-sm">
                  {["Status", "Category", "Date range", "Assignee"].map((f) => (
                    <label key={f} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded" defaultChecked={f === "Status"} />
                      <span>{f}</span>
                    </label>
                  ))}
                </div>
                <Button size="sm" className="w-full">Apply filters</Button>
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" leftIcon={<Bell size={16} />}>Notifications</Button>
              </PopoverTrigger>
              <PopoverContent className="w-80 p-0 overflow-hidden">
                <div className="p-4 border-b border-border">
                  <p className="text-sm font-semibold">Notifications</p>
                  <p className="text-xs text-foreground/50">3 unread</p>
                </div>
                <div className="divide-y divide-border">
                  {[
                    { text: "New component published",  time: "2m ago", unread: true  },
                    { text: "Theme update available",   time: "1h ago", unread: true  },
                    { text: "PR merged: Button v2",     time: "3h ago", unread: false },
                  ].map((n) => (
                    <div key={n.text} className={`px-4 py-3 text-sm flex gap-3 ${n.unread ? "bg-brand-orange/5" : ""}`}>
                      {n.unread && <div className="mt-1.5 size-2 rounded-full bg-brand-orange shrink-0" />}
                      <div className={n.unread ? "" : "ml-5"}>
                        <p>{n.text}</p>
                        <p className="text-xs text-foreground/40 mt-0.5">{n.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
          </DemoBlock>
        </DocSection>

        {/* ── HoverCard ──────────────────────────────────────────── */}
        <DocSection title="Hover Card" description="Rich preview cards that appear on hover — useful for user profiles, link previews, and contextual data.">
          <DemoBlock label="user profile preview">
            <p className="text-sm">
              Built by{" "}
              <HoverCard>
                <HoverCardTrigger asChild>
                  <span className="text-brand-orange font-medium cursor-pointer hover:underline">@nzerachi</span>
                </HoverCardTrigger>
                <HoverCardContent className="w-72">
                  <div className="flex gap-3">
                    <Avatar name="Nze Rachi" size="lg" status="online" />
                    <div className="space-y-1">
                      <p className="font-semibold text-sm">Nze Rachi</p>
                      <p className="text-xs text-foreground/50">@nzerachi</p>
                      <p className="text-xs text-foreground/60">UI/UX Designer & Frontend Engineer — Opticule DS</p>
                      <div className="flex gap-1 pt-1">
                        <Badge variant="success" size="sm">Online</Badge>
                        <Badge variant="neutral" size="sm">Designer</Badge>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
              {" "}at Opticule.
            </p>
          </DemoBlock>
        </DocSection>

        {/* ── Modal ──────────────────────────────────────────────── */}
        <DocSection title="Modal" description="Focus-trapped dialog with portal rendering, body scroll lock, and smooth animation.">
          <DemoBlock label="open modal">
            <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
          </DemoBlock>
          <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
            <ModalHeader onClose={() => setModalOpen(false)}>
              <ModalTitle>Publish Component</ModalTitle>
            </ModalHeader>
            <ModalContent>
              <p className="text-sm text-foreground/70 mb-4">
                You're about to publish <span className="font-semibold text-foreground">Button v2.1.0</span> to
                the Opticule component registry. This will affect all projects using Opticule DS.
              </p>
              <div className="rounded-lg border border-border bg-muted-light/20 p-4 space-y-1 text-sm">
                <div className="flex justify-between"><span className="text-foreground/50">Package</span><span>@opticule/ds</span></div>
                <div className="flex justify-between"><span className="text-foreground/50">Version</span><span className="text-brand-orange">2.1.0</span></div>
                <div className="flex justify-between"><span className="text-foreground/50">Components</span><span>1 changed</span></div>
                <div className="flex justify-between"><span className="text-foreground/50">Breaking changes</span><span className="text-brand-purple">None</span></div>
              </div>
            </ModalContent>
            <ModalFooter>
              <Button variant="secondary" onClick={() => setModalOpen(false)}>Cancel</Button>
              <Button variant="gradient" onClick={() => setModalOpen(false)}>Publish</Button>
            </ModalFooter>
          </Modal>
          <PropsTable
            title="Modal props"
            rows={[
              { name: "isOpen",    type: "boolean",           required: true, description: "Controls visibility." },
              { name: "onClose",   type: "() => void",        required: true, description: "Called when the modal requests to close (backdrop click, Escape key, close button)." },
              { name: "children",  type: "ReactNode",         required: true, description: "Use ModalHeader, ModalContent, ModalFooter." },
              { name: "size",      type: `"sm" | "md" | "lg" | "xl" | "full"`, default: `"md"`, description: "Max-width of the modal panel." },
            ]}
          />
        </DocSection>

        {/* ── Drawer ─────────────────────────────────────────────── */}
        <DocSection title="Drawer" description="Slide-in panel from any screen edge. Use for settings panels, navigation, and secondary workflows.">
          <DemoBlock label="placement variants">
            <Button variant="outline" onClick={() => openDrawer("right")}>Right</Button>
            <Button variant="outline" onClick={() => openDrawer("left")}>Left</Button>
            <Button variant="outline" onClick={() => openDrawer("top")}>Top</Button>
            <Button variant="outline" onClick={() => openDrawer("bottom")}>Bottom</Button>
          </DemoBlock>
          <Drawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} placement={drawerPlacement}>
            <DrawerHeader onClose={() => setDrawerOpen(false)}>
              <DrawerTitle>Settings ({drawerPlacement})</DrawerTitle>
            </DrawerHeader>
            <DrawerContent className="space-y-4">
              <p className="text-sm text-foreground/60">
                Drawer slides in from the <span className="font-medium text-foreground">{drawerPlacement}</span>.
                Focus is trapped inside; Escape or the × button closes it.
              </p>
              <div className="space-y-3">
                {["Profile", "Appearance", "Notifications", "Privacy", "Integrations"].map((item) => (
                  <div key={item} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                    <span className="text-sm">{item}</span>
                    <Button size="xs" variant="ghost">Edit</Button>
                  </div>
                ))}
              </div>
            </DrawerContent>
            <DrawerFooter>
              <Button variant="secondary" onClick={() => setDrawerOpen(false)}>Close</Button>
              <Button onClick={() => setDrawerOpen(false)}>Save Changes</Button>
            </DrawerFooter>
          </Drawer>
          <PropsTable
            title="Drawer props"
            rows={[
              { name: "isOpen",    type: "boolean",                                    required: true, description: "Controls visibility." },
              { name: "onClose",   type: "() => void",                                 required: true, description: "Called when the drawer requests to close." },
              { name: "placement", type: `"left" | "right" | "top" | "bottom"`,        default: `"right"`, description: "Which edge the drawer slides in from." },
              { name: "size",      type: "string",                                     default: `"md"`,    description: "Width (left/right) or height (top/bottom) of the panel." },
              { name: "children",  type: "ReactNode",                                  required: true,     description: "Use DrawerHeader, DrawerContent, DrawerFooter." },
            ]}
          />
        </DocSection>

        {/* ── AlertDialog ────────────────────────────────────────── */}
        <DocSection
          title="Alert Dialog"
          description="Blocking confirmation dialog — does NOT close on backdrop click, following the WAI-ARIA AlertDialog pattern."
        >
          <DemoBlock label="destructive confirmation">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive" leftIcon={<Trash2 size={16} />}>Delete Account</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Delete your account?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action is permanent and cannot be undone. All your data, projects, and settings will
                    be permanently deleted from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction className="bg-brand-folly text-white hover:bg-brand-folly/90">
                    Yes, delete account
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline" leftIcon={<AlertTriangle size={16} />}>Discard Changes</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Discard unsaved changes?</AlertDialogTitle>
                  <AlertDialogDescription>
                    You have unsaved changes. If you leave now, your work will be lost.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Keep editing</AlertDialogCancel>
                  <AlertDialogAction>Discard changes</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </DemoBlock>
          <p className="text-xs text-foreground/50 leading-relaxed">
            AlertDialog differs from Modal in one key way: clicking the backdrop does <em>not</em> close it.
            This forces the user to make an explicit choice, preventing accidental dismissal of destructive confirmations.
          </p>
        </DocSection>

        {/* ── ContextMenu ────────────────────────────────────────── */}
        <DocSection title="Context Menu" description="Right-click menu for secondary, contextual actions on a target area.">
          <DemoBlock label="right-click zone">
            <ContextMenu>
              <ContextMenuTrigger>
                <div className="border-2 border-dashed border-border rounded-xl p-10 text-center text-sm text-foreground/40 cursor-context-menu select-none hover:border-brand-orange/40 hover:text-foreground/60 transition-colors w-72">
                  Right-click anywhere here
                </div>
              </ContextMenuTrigger>
              <ContextMenuContent className="w-52">
                <ContextMenuLabel>File Actions</ContextMenuLabel>
                <ContextMenuItem>
                  <Copy size={14} className="mr-2" /> Copy
                  <ContextMenuShortcut>⌘C</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem>
                  <ExternalLink size={14} className="mr-2" /> Open in new tab
                  <ContextMenuShortcut>⌘↵</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem>
                  <Settings size={14} className="mr-2" /> Properties
                </ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem className="text-brand-folly focus:text-brand-folly">
                  <Trash2 size={14} className="mr-2" /> Delete
                  <ContextMenuShortcut>⌫</ContextMenuShortcut>
                </ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          </DemoBlock>
        </DocSection>

        {/* ── Keyboard ───────────────────────────────────────────── */}
        <DocSection title="Keyboard Interaction">
          <KeyboardTable rows={[
            { key: "Escape",       description: "Close any open overlay (Tooltip, Popover, Modal, Drawer). AlertDialog does not close on Escape." },
            { key: "Tab",          description: "Cycle through focusable elements inside a Modal or Drawer (focus is trapped)." },
            { key: "Shift + Tab",  description: "Reverse-cycle through focusable elements inside a focus-trapped overlay." },
            { key: "Enter / Space", description: "Activate the focused trigger or menu item." },
            { key: "↑ / ↓",        description: "Navigate items in ContextMenu." },
            { key: "Home / End",   description: "Jump to the first / last item in a ContextMenu." },
          ]} />
        </DocSection>

        {/* ── Accessibility ──────────────────────────────────────── */}
        <DocSection title="Accessibility">
          <AccessibilitySection>
            <A11yPoint>Tooltip uses <IC>role="tooltip"</IC> and wires <IC>aria-describedby</IC> on the trigger automatically so screen readers announce it.</A11yPoint>
            <A11yPoint>Modal and Drawer trap focus inside the panel — tab cycles only through the overlay's focusable elements until it is closed.</A11yPoint>
            <A11yPoint>Modal sets <IC>role="dialog"</IC> and <IC>aria-modal="true"</IC>; the title is linked via <IC>aria-labelledby</IC>.</A11yPoint>
            <A11yPoint>AlertDialog uses <IC>role="alertdialog"</IC> which causes screen readers to immediately announce the dialog's contents on open.</A11yPoint>
            <A11yPoint>All overlays render in a Portal at the document body level, preventing z-index stacking context issues.</A11yPoint>
            <A11yPoint>Body scroll is locked while a Modal or Drawer is open to prevent disorientation for users with cognitive disabilities.</A11yPoint>
            <A11yPoint>ContextMenu is triggered by right-click; the menu receives focus automatically and can be navigated fully via keyboard (↑ ↓ Enter Escape).</A11yPoint>
          </AccessibilitySection>
        </DocSection>
      </div>
    </TooltipProvider>
  );
}
