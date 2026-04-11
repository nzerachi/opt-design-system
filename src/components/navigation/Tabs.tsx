/**
 * Tabs — keyboard-accessible tabbed interface.
 *
 * Built on Radix UI Tabs with Opticule design tokens.
 * Supports three visual variants: underline, pill, enclosed.
 *
 * @example
 * <Tabs defaultValue="overview">
 *   <TabsList>
 *     <TabsTrigger value="overview">Overview</TabsTrigger>
 *     <TabsTrigger value="details">Details</TabsTrigger>
 *   </TabsList>
 *   <TabsContent value="overview">Overview content</TabsContent>
 *   <TabsContent value="details">Details content</TabsContent>
 * </Tabs>
 */

import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from "react";
import * as RadixTabs from "@radix-ui/react-tabs";
import { cn } from "../../lib/utils";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type TabsVariant = "underline" | "pill" | "enclosed";

// ---------------------------------------------------------------------------
// Root
// ---------------------------------------------------------------------------

export const Tabs = RadixTabs.Root;

// ---------------------------------------------------------------------------
// TabsList
// ---------------------------------------------------------------------------

export interface TabsListProps
  extends ComponentPropsWithoutRef<typeof RadixTabs.List> {
  variant?: TabsVariant;
}

const listVariant: Record<TabsVariant, string> = {
  underline: "border-b border-border bg-transparent gap-0",
  pill:      "bg-muted-light/30 rounded-lg p-1 gap-1",
  enclosed:  "border border-border rounded-lg p-1 gap-1 bg-transparent",
};

export const TabsList = forwardRef<
  ElementRef<typeof RadixTabs.List>,
  TabsListProps
>(({ className, variant = "underline", ...props }, ref) => (
  <RadixTabs.List
    ref={ref}
    data-variant={variant}
    className={cn(
      "inline-flex items-center",
      listVariant[variant],
      className,
    )}
    {...props}
  />
));
TabsList.displayName = "Tabs.List";

// ---------------------------------------------------------------------------
// TabsTrigger
// ---------------------------------------------------------------------------

export interface TabsTriggerProps
  extends ComponentPropsWithoutRef<typeof RadixTabs.Trigger> {
  variant?: TabsVariant;
}

const triggerVariant: Record<TabsVariant, string> = {
  underline: cn(
    "relative px-4 py-2.5 text-sm font-medium text-foreground/60 transition-colors",
    "hover:text-foreground",
    "data-[state=active]:text-foreground",
    "after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:rounded-full after:bg-brand-orange",
    "after:scale-x-0 data-[state=active]:after:scale-x-100 after:transition-transform",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/50 focus-visible:rounded-md",
  ),
  pill: cn(
    "rounded-md px-4 py-1.5 text-sm font-medium text-foreground/60 transition-all",
    "hover:text-foreground hover:bg-muted-light/50",
    "data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-[var(--shadow-sm)]",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/50",
  ),
  enclosed: cn(
    "rounded-md px-4 py-1.5 text-sm font-medium text-foreground/60 transition-all",
    "hover:text-foreground hover:bg-muted-light/30",
    "data-[state=active]:bg-muted-light/60 data-[state=active]:text-foreground",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/50",
  ),
};

export const TabsTrigger = forwardRef<
  ElementRef<typeof RadixTabs.Trigger>,
  TabsTriggerProps
>(({ className, variant = "underline", ...props }, ref) => (
  <RadixTabs.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center gap-2 whitespace-nowrap",
      "disabled:pointer-events-none disabled:opacity-50",
      triggerVariant[variant],
      className,
    )}
    {...props}
  />
));
TabsTrigger.displayName = "Tabs.Trigger";

// ---------------------------------------------------------------------------
// TabsContent
// ---------------------------------------------------------------------------

export const TabsContent = forwardRef<
  ElementRef<typeof RadixTabs.Content>,
  ComponentPropsWithoutRef<typeof RadixTabs.Content>
>(({ className, ...props }, ref) => (
  <RadixTabs.Content
    ref={ref}
    className={cn(
      "mt-4 outline-none",
      "focus-visible:ring-2 focus-visible:ring-brand-orange/50 focus-visible:rounded-md",
      className,
    )}
    {...props}
  />
));
TabsContent.displayName = "Tabs.Content";
