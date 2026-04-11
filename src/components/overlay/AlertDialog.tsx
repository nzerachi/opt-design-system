/**
 * AlertDialog — a modal dialog that interrupts the user with important content
 * and expects a response. Unlike Modal, it traps focus entirely and does NOT
 * close on backdrop click (per WAI-ARIA AlertDialog pattern).
 *
 * Built on Radix UI AlertDialog for correct focus management and ARIA.
 *
 * @example
 * <AlertDialog>
 *   <AlertDialogTrigger asChild>
 *     <Button variant="destructive">Delete account</Button>
 *   </AlertDialogTrigger>
 *   <AlertDialogContent>
 *     <AlertDialogHeader>
 *       <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
 *       <AlertDialogDescription>
 *         This action cannot be undone.
 *       </AlertDialogDescription>
 *     </AlertDialogHeader>
 *     <AlertDialogFooter>
 *       <AlertDialogCancel>Cancel</AlertDialogCancel>
 *       <AlertDialogAction>Delete</AlertDialogAction>
 *     </AlertDialogFooter>
 *   </AlertDialogContent>
 * </AlertDialog>
 */

import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from "react";
import * as RadixAlertDialog from "@radix-ui/react-alert-dialog";
import { cn } from "../../lib/utils";

// ---------------------------------------------------------------------------
// Re-exports
// ---------------------------------------------------------------------------

export const AlertDialog        = RadixAlertDialog.Root;
export const AlertDialogTrigger = RadixAlertDialog.Trigger;

// ---------------------------------------------------------------------------
// AlertDialogContent
// ---------------------------------------------------------------------------

export const AlertDialogContent = forwardRef<
  ElementRef<typeof RadixAlertDialog.Content>,
  ComponentPropsWithoutRef<typeof RadixAlertDialog.Content>
>(({ className, children, ...props }, ref) => (
  <RadixAlertDialog.Portal>
    {/* Overlay */}
    <RadixAlertDialog.Overlay
      className={cn(
        "fixed inset-0 z-[800] bg-black/50 backdrop-blur-sm",
        "animate-in fade-in-0",
        "data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
      )}
    />
    {/* Content */}
    <RadixAlertDialog.Content
      ref={ref}
      className={cn(
        "fixed z-[801] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
        "w-full max-w-lg max-h-[90vh] overflow-y-auto",
        "bg-background rounded-lg shadow-[var(--shadow-2xl)]",
        "p-6",
        "outline-none",
        "animate-in fade-in-0 zoom-in-95",
        "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
        className,
      )}
      {...props}
    >
      {children}
    </RadixAlertDialog.Content>
  </RadixAlertDialog.Portal>
));
AlertDialogContent.displayName = "AlertDialog.Content";

// ---------------------------------------------------------------------------
// AlertDialogHeader
// ---------------------------------------------------------------------------

export const AlertDialogHeader = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col gap-2 mb-6", className)}
    {...props}
  />
));
AlertDialogHeader.displayName = "AlertDialog.Header";

// ---------------------------------------------------------------------------
// AlertDialogTitle
// ---------------------------------------------------------------------------

export const AlertDialogTitle = forwardRef<
  ElementRef<typeof RadixAlertDialog.Title>,
  ComponentPropsWithoutRef<typeof RadixAlertDialog.Title>
>(({ className, ...props }, ref) => (
  <RadixAlertDialog.Title
    ref={ref}
    className={cn("text-2xl font-bold text-foreground", className)}
    {...props}
  />
));
AlertDialogTitle.displayName = "AlertDialog.Title";

// ---------------------------------------------------------------------------
// AlertDialogDescription
// ---------------------------------------------------------------------------

export const AlertDialogDescription = forwardRef<
  ElementRef<typeof RadixAlertDialog.Description>,
  ComponentPropsWithoutRef<typeof RadixAlertDialog.Description>
>(({ className, ...props }, ref) => (
  <RadixAlertDialog.Description
    ref={ref}
    className={cn("text-sm text-foreground/75", className)}
    {...props}
  />
));
AlertDialogDescription.displayName = "AlertDialog.Description";

// ---------------------------------------------------------------------------
// AlertDialogFooter
// ---------------------------------------------------------------------------

export const AlertDialogFooter = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center justify-end gap-3 mt-6", className)}
    {...props}
  />
));
AlertDialogFooter.displayName = "AlertDialog.Footer";

// ---------------------------------------------------------------------------
// AlertDialogCancel
// ---------------------------------------------------------------------------

export const AlertDialogCancel = forwardRef<
  ElementRef<typeof RadixAlertDialog.Cancel>,
  ComponentPropsWithoutRef<typeof RadixAlertDialog.Cancel>
>(({ className, ...props }, ref) => (
  <RadixAlertDialog.Cancel
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center gap-2",
      "h-10 px-5 rounded-lg text-sm font-medium",
      "border border-border bg-transparent text-foreground",
      "hover:bg-muted-light/50 transition-colors",
      "focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/50",
      className,
    )}
    {...props}
  />
));
AlertDialogCancel.displayName = "AlertDialog.Cancel";

// ---------------------------------------------------------------------------
// AlertDialogAction
// ---------------------------------------------------------------------------

export const AlertDialogAction = forwardRef<
  ElementRef<typeof RadixAlertDialog.Action>,
  ComponentPropsWithoutRef<typeof RadixAlertDialog.Action>
>(({ className, ...props }, ref) => (
  <RadixAlertDialog.Action
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center gap-2",
      "h-10 px-5 rounded-lg text-sm font-medium",
      "bg-brand-folly text-white",
      "hover:bg-brand-folly/90 transition-colors",
      "focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-folly/50",
      className,
    )}
    {...props}
  />
));
AlertDialogAction.displayName = "AlertDialog.Action";
