/**
 * Pagination — accessible page navigation controls.
 *
 * @example
 * <Pagination>
 *   <PaginationContent>
 *     <PaginationItem>
 *       <PaginationPrevious href="#" />
 *     </PaginationItem>
 *     <PaginationItem><PaginationLink href="#">1</PaginationLink></PaginationItem>
 *     <PaginationItem><PaginationLink href="#" isActive>2</PaginationLink></PaginationItem>
 *     <PaginationItem><PaginationEllipsis /></PaginationItem>
 *     <PaginationItem><PaginationLink href="#">10</PaginationLink></PaginationItem>
 *     <PaginationItem>
 *       <PaginationNext href="#" />
 *     </PaginationItem>
 *   </PaginationContent>
 * </Pagination>
 */

import { forwardRef, type HTMLAttributes, type AnchorHTMLAttributes } from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { cn } from "../../lib/utils";

// ---------------------------------------------------------------------------
// Pagination (nav)
// ---------------------------------------------------------------------------

export const Pagination = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => (
    <nav
      ref={ref}
      role="navigation"
      aria-label="Pagination"
      className={cn("mx-auto flex w-full justify-center", className)}
      {...props}
    />
  ),
);
Pagination.displayName = "Pagination";

// ---------------------------------------------------------------------------
// PaginationContent (ul)
// ---------------------------------------------------------------------------

export const PaginationContent = forwardRef<
  HTMLUListElement,
  HTMLAttributes<HTMLUListElement>
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("flex flex-row items-center gap-1", className)}
    {...props}
  />
));
PaginationContent.displayName = "Pagination.Content";

// ---------------------------------------------------------------------------
// PaginationItem (li)
// ---------------------------------------------------------------------------

export const PaginationItem = forwardRef<
  HTMLLIElement,
  HTMLAttributes<HTMLLIElement>
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props} />
));
PaginationItem.displayName = "Pagination.Item";

// ---------------------------------------------------------------------------
// PaginationLink (a)
// ---------------------------------------------------------------------------

export interface PaginationLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  isActive?: boolean;
  size?: "default" | "sm" | "lg";
}

export const PaginationLink = forwardRef<HTMLAnchorElement, PaginationLinkProps>(
  ({ className, isActive, size = "default", ...props }, ref) => (
    <a
      ref={ref}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/50",
        size === "default" && "h-9 w-9",
        size === "sm"      && "h-8 w-8 text-xs",
        size === "lg"      && "h-10 w-10",
        isActive
          ? "bg-foreground text-background"
          : "hover:bg-muted-light/50 text-foreground/75 hover:text-foreground",
        className,
      )}
      {...props}
    />
  ),
);
PaginationLink.displayName = "Pagination.Link";

// ---------------------------------------------------------------------------
// PaginationPrevious
// ---------------------------------------------------------------------------

export function PaginationPrevious({
  className,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      aria-label="Go to previous page"
      className={cn(
        "inline-flex items-center gap-1 px-3 h-9 rounded-lg text-sm font-medium",
        "text-foreground/75 hover:text-foreground hover:bg-muted-light/50 transition-colors",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/50",
        className,
      )}
      {...props}
    >
      <ChevronLeft className="size-4" />
      Previous
    </a>
  );
}
PaginationPrevious.displayName = "Pagination.Previous";

// ---------------------------------------------------------------------------
// PaginationNext
// ---------------------------------------------------------------------------

export function PaginationNext({
  className,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      aria-label="Go to next page"
      className={cn(
        "inline-flex items-center gap-1 px-3 h-9 rounded-lg text-sm font-medium",
        "text-foreground/75 hover:text-foreground hover:bg-muted-light/50 transition-colors",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/50",
        className,
      )}
      {...props}
    >
      Next
      <ChevronRight className="size-4" />
    </a>
  );
}
PaginationNext.displayName = "Pagination.Next";

// ---------------------------------------------------------------------------
// PaginationEllipsis
// ---------------------------------------------------------------------------

export function PaginationEllipsis({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      aria-hidden
      className={cn("flex h-9 w-9 items-center justify-center text-foreground/50", className)}
      {...props}
    >
      <MoreHorizontal className="size-4" />
      <span className="sr-only">More pages</span>
    </span>
  );
}
PaginationEllipsis.displayName = "Pagination.Ellipsis";
