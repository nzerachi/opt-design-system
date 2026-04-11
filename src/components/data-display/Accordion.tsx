/**
 * Accordion — a vertically stacked list of collapsible panels.
 *
 * Built on Radix UI Accordion for WAI-ARIA compliance and keyboard navigation.
 * Supports single and multiple open panels, animated open/close.
 *
 * @example
 * // Single mode (only one panel open at a time)
 * <Accordion type="single" collapsible defaultValue="item-1">
 *   <AccordionItem value="item-1">
 *     <AccordionTrigger>What is Opticule DS?</AccordionTrigger>
 *     <AccordionContent>A world-class design system.</AccordionContent>
 *   </AccordionItem>
 * </Accordion>
 *
 * // Multiple mode
 * <Accordion type="multiple">
 *   <AccordionItem value="a"><AccordionTrigger>A</AccordionTrigger><AccordionContent>…</AccordionContent></AccordionItem>
 * </Accordion>
 */

import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from "react";
import * as RadixAccordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "../../lib/utils";

// ---------------------------------------------------------------------------
// Re-exports
// ---------------------------------------------------------------------------

export const Accordion = RadixAccordion.Root;

// ---------------------------------------------------------------------------
// AccordionItem
// ---------------------------------------------------------------------------

export const AccordionItem = forwardRef<
  ElementRef<typeof RadixAccordion.Item>,
  ComponentPropsWithoutRef<typeof RadixAccordion.Item>
>(({ className, ...props }, ref) => (
  <RadixAccordion.Item
    ref={ref}
    className={cn("border-b border-border", className)}
    {...props}
  />
));
AccordionItem.displayName = "Accordion.Item";

// ---------------------------------------------------------------------------
// AccordionTrigger
// ---------------------------------------------------------------------------

export interface AccordionTriggerProps
  extends ComponentPropsWithoutRef<typeof RadixAccordion.Trigger> {
  /** Hide the default chevron (for custom icons) */
  hideChevron?: boolean;
}

export const AccordionTrigger = forwardRef<
  ElementRef<typeof RadixAccordion.Trigger>,
  AccordionTriggerProps
>(({ className, children, hideChevron = false, ...props }, ref) => (
  <RadixAccordion.Header className="flex">
    <RadixAccordion.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 text-sm font-medium",
        "text-foreground transition-all",
        "hover:text-foreground/80",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/50 focus-visible:rounded-md",
        "[&[data-state=open]>svg]:rotate-180",
        className,
      )}
      {...props}
    >
      {children}
      {!hideChevron && (
        <ChevronDown
          className="size-4 shrink-0 text-foreground/50 transition-transform duration-200"
          aria-hidden
        />
      )}
    </RadixAccordion.Trigger>
  </RadixAccordion.Header>
));
AccordionTrigger.displayName = "Accordion.Trigger";

// ---------------------------------------------------------------------------
// AccordionContent
// ---------------------------------------------------------------------------

export const AccordionContent = forwardRef<
  ElementRef<typeof RadixAccordion.Content>,
  ComponentPropsWithoutRef<typeof RadixAccordion.Content>
>(({ className, children, ...props }, ref) => (
  <RadixAccordion.Content
    ref={ref}
    className={cn(
      "overflow-hidden text-sm",
      "data-[state=closed]:animate-[accordion-up_200ms_ease-out]",
      "data-[state=open]:animate-[accordion-down_200ms_ease-out]",
    )}
    {...props}
  >
    <div className={cn("pb-4 pt-0 text-foreground/80", className)}>
      {children}
    </div>
  </RadixAccordion.Content>
));
AccordionContent.displayName = "Accordion.Content";
