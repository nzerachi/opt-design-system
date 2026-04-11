/**
 * Breadcrumb — a navigation trail showing the user's current location.
 *
 * WCAG: nav[aria-label="Breadcrumb"], aria-current="page" on last item.
 *
 * @example
 * <Breadcrumb>
 *   <BreadcrumbList>
 *     <BreadcrumbItem>
 *       <BreadcrumbLink href="/">Home</BreadcrumbLink>
 *     </BreadcrumbItem>
 *     <BreadcrumbSeparator />
 *     <BreadcrumbItem>
 *       <BreadcrumbLink href="/components">Components</BreadcrumbLink>
 *     </BreadcrumbItem>
 *     <BreadcrumbSeparator />
 *     <BreadcrumbItem>
 *       <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
 *     </BreadcrumbItem>
 *   </BreadcrumbList>
 * </Breadcrumb>
 */

import { forwardRef, type HTMLAttributes, type AnchorHTMLAttributes } from "react";
import { ChevronRight, MoreHorizontal } from "lucide-react";
import { cn } from "../../lib/utils";

// ---------------------------------------------------------------------------
// Breadcrumb (nav wrapper)
// ---------------------------------------------------------------------------

export const Breadcrumb = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => (
    <nav
      ref={ref}
      aria-label="Breadcrumb"
      className={cn("", className)}
      {...props}
    />
  ),
);
Breadcrumb.displayName = "Breadcrumb";

// ---------------------------------------------------------------------------
// BreadcrumbList (ol)
// ---------------------------------------------------------------------------

export const BreadcrumbList = forwardRef<
  HTMLOListElement,
  HTMLAttributes<HTMLOListElement>
>(({ className, ...props }, ref) => (
  <ol
    ref={ref}
    className={cn(
      "flex flex-wrap items-center gap-1.5 break-words text-sm text-foreground/60",
      className,
    )}
    {...props}
  />
));
BreadcrumbList.displayName = "Breadcrumb.List";

// ---------------------------------------------------------------------------
// BreadcrumbItem (li)
// ---------------------------------------------------------------------------

export const BreadcrumbItem = forwardRef<
  HTMLLIElement,
  HTMLAttributes<HTMLLIElement>
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={cn("inline-flex items-center gap-1.5", className)}
    {...props}
  />
));
BreadcrumbItem.displayName = "Breadcrumb.Item";

// ---------------------------------------------------------------------------
// BreadcrumbLink (a)
// ---------------------------------------------------------------------------

export const BreadcrumbLink = forwardRef<
  HTMLAnchorElement,
  AnchorHTMLAttributes<HTMLAnchorElement>
>(({ className, ...props }, ref) => (
  <a
    ref={ref}
    className={cn(
      "transition-colors hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/50 rounded",
      className,
    )}
    {...props}
  />
));
BreadcrumbLink.displayName = "Breadcrumb.Link";

// ---------------------------------------------------------------------------
// BreadcrumbPage (current page — not a link)
// ---------------------------------------------------------------------------

export const BreadcrumbPage = forwardRef<
  HTMLSpanElement,
  HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    role="link"
    aria-disabled="true"
    aria-current="page"
    className={cn("font-medium text-foreground", className)}
    {...props}
  />
));
BreadcrumbPage.displayName = "Breadcrumb.Page";

// ---------------------------------------------------------------------------
// BreadcrumbSeparator
// ---------------------------------------------------------------------------

export function BreadcrumbSeparator({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLLIElement>) {
  return (
    <li
      role="presentation"
      aria-hidden="true"
      className={cn("text-foreground/30", className)}
      {...props}
    >
      {children ?? <ChevronRight className="size-3.5" />}
    </li>
  );
}
BreadcrumbSeparator.displayName = "Breadcrumb.Separator";

// ---------------------------------------------------------------------------
// BreadcrumbEllipsis — collapsed items indicator
// ---------------------------------------------------------------------------

export function BreadcrumbEllipsis({
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      role="presentation"
      aria-hidden="true"
      className={cn("flex size-9 items-center justify-center", className)}
      {...props}
    >
      <MoreHorizontal className="size-4" />
      <span className="sr-only">More pages</span>
    </span>
  );
}
BreadcrumbEllipsis.displayName = "Breadcrumb.Ellipsis";
