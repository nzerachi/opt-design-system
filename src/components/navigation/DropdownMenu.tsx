/**
 * DropdownMenu — an accessible drop-down menu built on Radix UI.
 *
 * @example
 * <DropdownMenu>
 *   <DropdownMenuTrigger asChild>
 *     <Button variant="outline">Open</Button>
 *   </DropdownMenuTrigger>
 *   <DropdownMenuContent align="end">
 *     <DropdownMenuLabel>My Account</DropdownMenuLabel>
 *     <DropdownMenuSeparator />
 *     <DropdownMenuItem>Profile</DropdownMenuItem>
 *     <DropdownMenuItem>Settings</DropdownMenuItem>
 *     <DropdownMenuSeparator />
 *     <DropdownMenuItem variant="destructive">Sign out</DropdownMenuItem>
 *   </DropdownMenuContent>
 * </DropdownMenu>
 */

import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from "react";
import * as RadixDropdown from "@radix-ui/react-dropdown-menu";
import { Check, ChevronRight, Circle } from "lucide-react";
import { cn } from "../../lib/utils";

// ---------------------------------------------------------------------------
// Re-exports
// ---------------------------------------------------------------------------

export const DropdownMenu         = RadixDropdown.Root;
export const DropdownMenuTrigger  = RadixDropdown.Trigger;
export const DropdownMenuGroup    = RadixDropdown.Group;
export const DropdownMenuSub      = RadixDropdown.Sub;
export const DropdownMenuRadioGroup = RadixDropdown.RadioGroup;

// ---------------------------------------------------------------------------
// Shared styles
// ---------------------------------------------------------------------------

const itemBase = cn(
  "relative flex cursor-default select-none items-center gap-2 rounded-md px-2 py-1.5 text-sm outline-none",
  "text-foreground transition-colors",
  "focus:bg-muted-light/60 focus:text-foreground",
  "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
);

// ---------------------------------------------------------------------------
// DropdownMenuContent
// ---------------------------------------------------------------------------

export const DropdownMenuContent = forwardRef<
  ElementRef<typeof RadixDropdown.Content>,
  ComponentPropsWithoutRef<typeof RadixDropdown.Content>
>(({ className, sideOffset = 8, align = "start", children, ...props }, ref) => (
  <RadixDropdown.Portal>
    <RadixDropdown.Content
      ref={ref}
      sideOffset={sideOffset}
      align={align}
      className={cn(
        "z-[850] min-w-[10rem] overflow-hidden rounded-lg border border-border",
        "bg-background p-1 shadow-[var(--shadow-lg)]",
        "animate-in fade-in-0 zoom-in-95",
        "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
        "data-[side=bottom]:slide-in-from-top-2",
        "data-[side=left]:slide-in-from-right-2",
        "data-[side=right]:slide-in-from-left-2",
        "data-[side=top]:slide-in-from-bottom-2",
        className,
      )}
      {...props}
    >
      {children}
    </RadixDropdown.Content>
  </RadixDropdown.Portal>
));
DropdownMenuContent.displayName = "DropdownMenu.Content";

// ---------------------------------------------------------------------------
// DropdownMenuItem
// ---------------------------------------------------------------------------

export interface DropdownMenuItemProps
  extends ComponentPropsWithoutRef<typeof RadixDropdown.Item> {
  inset?: boolean;
  variant?: "default" | "destructive";
}

export const DropdownMenuItem = forwardRef<
  ElementRef<typeof RadixDropdown.Item>,
  DropdownMenuItemProps
>(({ className, inset, variant = "default", ...props }, ref) => (
  <RadixDropdown.Item
    ref={ref}
    className={cn(
      itemBase,
      inset && "pl-8",
      variant === "destructive" && "text-brand-folly focus:bg-brand-folly/10 focus:text-brand-folly",
      className,
    )}
    {...props}
  />
));
DropdownMenuItem.displayName = "DropdownMenu.Item";

// ---------------------------------------------------------------------------
// DropdownMenuCheckboxItem
// ---------------------------------------------------------------------------

export const DropdownMenuCheckboxItem = forwardRef<
  ElementRef<typeof RadixDropdown.CheckboxItem>,
  ComponentPropsWithoutRef<typeof RadixDropdown.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <RadixDropdown.CheckboxItem
    ref={ref}
    className={cn(itemBase, "pl-8", className)}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex size-3.5 items-center justify-center">
      <RadixDropdown.ItemIndicator>
        <Check className="size-4" />
      </RadixDropdown.ItemIndicator>
    </span>
    {children}
  </RadixDropdown.CheckboxItem>
));
DropdownMenuCheckboxItem.displayName = "DropdownMenu.CheckboxItem";

// ---------------------------------------------------------------------------
// DropdownMenuRadioItem
// ---------------------------------------------------------------------------

export const DropdownMenuRadioItem = forwardRef<
  ElementRef<typeof RadixDropdown.RadioItem>,
  ComponentPropsWithoutRef<typeof RadixDropdown.RadioItem>
>(({ className, children, ...props }, ref) => (
  <RadixDropdown.RadioItem
    ref={ref}
    className={cn(itemBase, "pl-8", className)}
    {...props}
  >
    <span className="absolute left-2 flex size-3.5 items-center justify-center">
      <RadixDropdown.ItemIndicator>
        <Circle className="size-2 fill-current" />
      </RadixDropdown.ItemIndicator>
    </span>
    {children}
  </RadixDropdown.RadioItem>
));
DropdownMenuRadioItem.displayName = "DropdownMenu.RadioItem";

// ---------------------------------------------------------------------------
// DropdownMenuLabel
// ---------------------------------------------------------------------------

export const DropdownMenuLabel = forwardRef<
  ElementRef<typeof RadixDropdown.Label>,
  ComponentPropsWithoutRef<typeof RadixDropdown.Label> & { inset?: boolean }
>(({ className, inset, ...props }, ref) => (
  <RadixDropdown.Label
    ref={ref}
    className={cn(
      "px-2 py-1.5 text-xs font-semibold text-foreground/50 uppercase tracking-wider",
      inset && "pl-8",
      className,
    )}
    {...props}
  />
));
DropdownMenuLabel.displayName = "DropdownMenu.Label";

// ---------------------------------------------------------------------------
// DropdownMenuSeparator
// ---------------------------------------------------------------------------

export const DropdownMenuSeparator = forwardRef<
  ElementRef<typeof RadixDropdown.Separator>,
  ComponentPropsWithoutRef<typeof RadixDropdown.Separator>
>(({ className, ...props }, ref) => (
  <RadixDropdown.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-border", className)}
    {...props}
  />
));
DropdownMenuSeparator.displayName = "DropdownMenu.Separator";

// ---------------------------------------------------------------------------
// DropdownMenuShortcut
// ---------------------------------------------------------------------------

export function DropdownMenuShortcut({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn("ml-auto text-xs tracking-widest text-foreground/50", className)}
      {...props}
    />
  );
}
DropdownMenuShortcut.displayName = "DropdownMenu.Shortcut";

// ---------------------------------------------------------------------------
// DropdownMenuSubTrigger
// ---------------------------------------------------------------------------

export const DropdownMenuSubTrigger = forwardRef<
  ElementRef<typeof RadixDropdown.SubTrigger>,
  ComponentPropsWithoutRef<typeof RadixDropdown.SubTrigger> & { inset?: boolean }
>(({ className, inset, children, ...props }, ref) => (
  <RadixDropdown.SubTrigger
    ref={ref}
    className={cn(
      itemBase,
      "data-[state=open]:bg-muted-light/60",
      inset && "pl-8",
      className,
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto size-4" />
  </RadixDropdown.SubTrigger>
));
DropdownMenuSubTrigger.displayName = "DropdownMenu.SubTrigger";

// ---------------------------------------------------------------------------
// DropdownMenuSubContent
// ---------------------------------------------------------------------------

export const DropdownMenuSubContent = forwardRef<
  ElementRef<typeof RadixDropdown.SubContent>,
  ComponentPropsWithoutRef<typeof RadixDropdown.SubContent>
>(({ className, ...props }, ref) => (
  <RadixDropdown.Portal>
    <RadixDropdown.SubContent
      ref={ref}
      className={cn(
        "z-[860] min-w-[8rem] overflow-hidden rounded-lg border border-border",
        "bg-background p-1 shadow-[var(--shadow-lg)]",
        "animate-in fade-in-0 zoom-in-95 slide-in-from-left-1",
        className,
      )}
      {...props}
    />
  </RadixDropdown.Portal>
));
DropdownMenuSubContent.displayName = "DropdownMenu.SubContent";
