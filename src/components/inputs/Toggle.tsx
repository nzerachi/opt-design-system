/**
 * Toggle — a single pressed/unpressed button built on Radix UI Toggle.
 * ToggleGroup — a group of toggles where one (or many) can be active.
 *
 * @example
 * // Standalone
 * <Toggle aria-label="Bold"><Bold className="size-4" /></Toggle>
 *
 * // Single-selection group
 * <ToggleGroup type="single" defaultValue="left">
 *   <ToggleGroupItem value="left"><AlignLeft /></ToggleGroupItem>
 *   <ToggleGroupItem value="center"><AlignCenter /></ToggleGroupItem>
 *   <ToggleGroupItem value="right"><AlignRight /></ToggleGroupItem>
 * </ToggleGroup>
 *
 * // Multi-selection group
 * <ToggleGroup type="multiple">
 *   <ToggleGroupItem value="bold"><Bold /></ToggleGroupItem>
 *   <ToggleGroupItem value="italic"><Italic /></ToggleGroupItem>
 * </ToggleGroup>
 */

import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from "react";
import * as RadixToggle from "@radix-ui/react-toggle";
import * as RadixToggleGroup from "@radix-ui/react-toggle-group";
import { cn } from "../../lib/utils";

// ---------------------------------------------------------------------------
// Shared styles
// ---------------------------------------------------------------------------

export type ToggleVariant = "default" | "outline" | "ghost";
export type ToggleSize   = "sm" | "md" | "lg";

const base = cn(
  "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all",
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/50",
  "disabled:pointer-events-none disabled:opacity-50",
  "data-[state=on]:bg-muted-light data-[state=on]:text-foreground",
);

const variants: Record<ToggleVariant, string> = {
  default: "bg-transparent hover:bg-muted-light/50 text-foreground/70 hover:text-foreground",
  outline: "border border-border bg-transparent hover:bg-muted-light/50 text-foreground/70 hover:text-foreground",
  ghost:   "hover:bg-muted-light/30 text-foreground/60 hover:text-foreground",
};

const sizes: Record<ToggleSize, string> = {
  sm: "h-8 px-2.5 text-xs",
  md: "h-10 px-3 text-sm",
  lg: "h-11 px-4 text-base",
};

// ---------------------------------------------------------------------------
// Toggle
// ---------------------------------------------------------------------------

export interface ToggleProps extends ComponentPropsWithoutRef<typeof RadixToggle.Root> {
  variant?: ToggleVariant;
  size?: ToggleSize;
}

export const Toggle = forwardRef<
  ElementRef<typeof RadixToggle.Root>,
  ToggleProps
>(({ className, variant = "default", size = "md", ...props }, ref) => (
  <RadixToggle.Root
    ref={ref}
    className={cn(base, variants[variant], sizes[size], className)}
    {...props}
  />
));
Toggle.displayName = "Toggle";

// ---------------------------------------------------------------------------
// ToggleGroup
// ---------------------------------------------------------------------------

export interface ToggleGroupProps
  extends ComponentPropsWithoutRef<typeof RadixToggleGroup.Root> {
  variant?: ToggleVariant;
  size?: ToggleSize;
}

export const ToggleGroup = forwardRef<
  ElementRef<typeof RadixToggleGroup.Root>,
  ToggleGroupProps
>(({ className, variant = "default", size = "md", children, ...props }, ref) => (
  <RadixToggleGroup.Root
    ref={ref}
    className={cn(
      "inline-flex items-center gap-1 rounded-lg",
      variant === "outline" && "border border-border p-0.5",
      variant === "default" && "bg-muted-light/20 p-0.5",
      className,
    )}
    {...props}
  >
    {children}
  </RadixToggleGroup.Root>
));
ToggleGroup.displayName = "ToggleGroup";

// ---------------------------------------------------------------------------
// ToggleGroupItem
// ---------------------------------------------------------------------------

export interface ToggleGroupItemProps
  extends ComponentPropsWithoutRef<typeof RadixToggleGroup.Item> {
  variant?: ToggleVariant;
  size?: ToggleSize;
}

export const ToggleGroupItem = forwardRef<
  ElementRef<typeof RadixToggleGroup.Item>,
  ToggleGroupItemProps
>(({ className, variant = "default", size = "md", ...props }, ref) => (
  <RadixToggleGroup.Item
    ref={ref}
    className={cn(base, variants[variant], sizes[size], className)}
    {...props}
  />
));
ToggleGroupItem.displayName = "ToggleGroup.Item";
