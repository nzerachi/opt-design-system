/**
 * ContextMenu — a right-click (or long-press) menu built on Radix UI.
 *
 * @example
 * <ContextMenu>
 *   <ContextMenuTrigger>
 *     <div className="p-8 border border-dashed">Right-click me</div>
 *   </ContextMenuTrigger>
 *   <ContextMenuContent>
 *     <ContextMenuItem>Open</ContextMenuItem>
 *     <ContextMenuSeparator />
 *     <ContextMenuItem disabled>Delete</ContextMenuItem>
 *   </ContextMenuContent>
 * </ContextMenu>
 */

import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from "react";
import * as RadixContextMenu from "@radix-ui/react-context-menu";
import { Check, ChevronRight, Circle } from "lucide-react";
import { cn } from "../../lib/utils";

// ---------------------------------------------------------------------------
// Re-exports
// ---------------------------------------------------------------------------

export const ContextMenu         = RadixContextMenu.Root;
export const ContextMenuTrigger  = RadixContextMenu.Trigger;
export const ContextMenuGroup    = RadixContextMenu.Group;
export const ContextMenuSub      = RadixContextMenu.Sub;
export const ContextMenuRadioGroup = RadixContextMenu.RadioGroup;

// ---------------------------------------------------------------------------
// Shared item class
// ---------------------------------------------------------------------------

const itemBase = cn(
  "relative flex cursor-default select-none items-center gap-2 rounded-md px-2 py-1.5 text-sm outline-none",
  "text-foreground",
  "focus:bg-muted-light/60 focus:text-foreground",
  "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
);

// ---------------------------------------------------------------------------
// ContextMenuContent
// ---------------------------------------------------------------------------

export const ContextMenuContent = forwardRef<
  ElementRef<typeof RadixContextMenu.Content>,
  ComponentPropsWithoutRef<typeof RadixContextMenu.Content>
>(({ className, children, ...props }, ref) => (
  <RadixContextMenu.Portal>
    <RadixContextMenu.Content
      ref={ref}
      className={cn(
        "z-[850] min-w-[10rem] overflow-hidden rounded-lg border border-border",
        "bg-background p-1 shadow-[var(--shadow-lg)]",
        "animate-in fade-in-0 zoom-in-95",
        "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
        className,
      )}
      {...props}
    >
      {children}
    </RadixContextMenu.Content>
  </RadixContextMenu.Portal>
));
ContextMenuContent.displayName = "ContextMenu.Content";

// ---------------------------------------------------------------------------
// ContextMenuItem
// ---------------------------------------------------------------------------

export interface ContextMenuItemProps
  extends ComponentPropsWithoutRef<typeof RadixContextMenu.Item> {
  inset?: boolean;
}

export const ContextMenuItem = forwardRef<
  ElementRef<typeof RadixContextMenu.Item>,
  ContextMenuItemProps
>(({ className, inset, ...props }, ref) => (
  <RadixContextMenu.Item
    ref={ref}
    className={cn(itemBase, inset && "pl-8", className)}
    {...props}
  />
));
ContextMenuItem.displayName = "ContextMenu.Item";

// ---------------------------------------------------------------------------
// ContextMenuCheckboxItem
// ---------------------------------------------------------------------------

export const ContextMenuCheckboxItem = forwardRef<
  ElementRef<typeof RadixContextMenu.CheckboxItem>,
  ComponentPropsWithoutRef<typeof RadixContextMenu.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <RadixContextMenu.CheckboxItem
    ref={ref}
    className={cn(itemBase, "pl-8", className)}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex size-3.5 items-center justify-center">
      <RadixContextMenu.ItemIndicator>
        <Check className="size-4" />
      </RadixContextMenu.ItemIndicator>
    </span>
    {children}
  </RadixContextMenu.CheckboxItem>
));
ContextMenuCheckboxItem.displayName = "ContextMenu.CheckboxItem";

// ---------------------------------------------------------------------------
// ContextMenuRadioItem
// ---------------------------------------------------------------------------

export const ContextMenuRadioItem = forwardRef<
  ElementRef<typeof RadixContextMenu.RadioItem>,
  ComponentPropsWithoutRef<typeof RadixContextMenu.RadioItem>
>(({ className, children, ...props }, ref) => (
  <RadixContextMenu.RadioItem
    ref={ref}
    className={cn(itemBase, "pl-8", className)}
    {...props}
  >
    <span className="absolute left-2 flex size-3.5 items-center justify-center">
      <RadixContextMenu.ItemIndicator>
        <Circle className="size-2 fill-current" />
      </RadixContextMenu.ItemIndicator>
    </span>
    {children}
  </RadixContextMenu.RadioItem>
));
ContextMenuRadioItem.displayName = "ContextMenu.RadioItem";

// ---------------------------------------------------------------------------
// ContextMenuLabel
// ---------------------------------------------------------------------------

export interface ContextMenuLabelProps
  extends ComponentPropsWithoutRef<typeof RadixContextMenu.Label> {
  inset?: boolean;
}

export const ContextMenuLabel = forwardRef<
  ElementRef<typeof RadixContextMenu.Label>,
  ContextMenuLabelProps
>(({ className, inset, ...props }, ref) => (
  <RadixContextMenu.Label
    ref={ref}
    className={cn(
      "px-2 py-1.5 text-xs font-semibold text-foreground/50 uppercase tracking-wider",
      inset && "pl-8",
      className,
    )}
    {...props}
  />
));
ContextMenuLabel.displayName = "ContextMenu.Label";

// ---------------------------------------------------------------------------
// ContextMenuSeparator
// ---------------------------------------------------------------------------

export const ContextMenuSeparator = forwardRef<
  ElementRef<typeof RadixContextMenu.Separator>,
  ComponentPropsWithoutRef<typeof RadixContextMenu.Separator>
>(({ className, ...props }, ref) => (
  <RadixContextMenu.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-border", className)}
    {...props}
  />
));
ContextMenuSeparator.displayName = "ContextMenu.Separator";

// ---------------------------------------------------------------------------
// ContextMenuShortcut
// ---------------------------------------------------------------------------

export function ContextMenuShortcut({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn("ml-auto text-xs tracking-widest text-foreground/50", className)}
      {...props}
    />
  );
}
ContextMenuShortcut.displayName = "ContextMenu.Shortcut";

// ---------------------------------------------------------------------------
// ContextMenuSubTrigger
// ---------------------------------------------------------------------------

export const ContextMenuSubTrigger = forwardRef<
  ElementRef<typeof RadixContextMenu.SubTrigger>,
  ComponentPropsWithoutRef<typeof RadixContextMenu.SubTrigger> & { inset?: boolean }
>(({ className, inset, children, ...props }, ref) => (
  <RadixContextMenu.SubTrigger
    ref={ref}
    className={cn(itemBase, "data-[state=open]:bg-muted-light/60", inset && "pl-8", className)}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto size-4" />
  </RadixContextMenu.SubTrigger>
));
ContextMenuSubTrigger.displayName = "ContextMenu.SubTrigger";

// ---------------------------------------------------------------------------
// ContextMenuSubContent
// ---------------------------------------------------------------------------

export const ContextMenuSubContent = forwardRef<
  ElementRef<typeof RadixContextMenu.SubContent>,
  ComponentPropsWithoutRef<typeof RadixContextMenu.SubContent>
>(({ className, ...props }, ref) => (
  <RadixContextMenu.Portal>
    <RadixContextMenu.SubContent
      ref={ref}
      className={cn(
        "z-[860] min-w-[8rem] overflow-hidden rounded-lg border border-border",
        "bg-background p-1 shadow-[var(--shadow-lg)]",
        "animate-in fade-in-0 zoom-in-95 slide-in-from-left-1",
        className,
      )}
      {...props}
    />
  </RadixContextMenu.Portal>
));
ContextMenuSubContent.displayName = "ContextMenu.SubContent";
