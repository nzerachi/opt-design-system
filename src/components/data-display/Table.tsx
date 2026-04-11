/**
 * Table — a full-featured data table.
 *
 * Compound components:
 * Table, TableHeader, TableBody, TableFooter
 * TableRow, TableHead, TableCell, TableCaption
 *
 * Higher-level DataTable adds: sorting, selection, pagination, empty state, loading.
 *
 * @example
 * // Basic
 * <Table>
 *   <TableHeader>
 *     <TableRow>
 *       <TableHead>Name</TableHead>
 *       <TableHead>Status</TableHead>
 *     </TableRow>
 *   </TableHeader>
 *   <TableBody>
 *     <TableRow>
 *       <TableCell>Alice</TableCell>
 *       <TableCell><Badge>Active</Badge></TableCell>
 *     </TableRow>
 *   </TableBody>
 * </Table>
 */

import { forwardRef, type HTMLAttributes, type TdHTMLAttributes, type ThHTMLAttributes } from "react";
import { ArrowUp, ArrowDown, ArrowUpDown } from "lucide-react";
import { cn } from "../../lib/utils";

// ---------------------------------------------------------------------------
// Table wrapper (adds horizontal scroll)
// ---------------------------------------------------------------------------

export const Table = forwardRef<HTMLTableElement, HTMLAttributes<HTMLTableElement>>(
  ({ className, ...props }, ref) => (
    <div className="relative w-full overflow-auto rounded-lg border border-border">
      <table
        ref={ref}
        className={cn("w-full caption-bottom text-sm border-collapse", className)}
        {...props}
      />
    </div>
  ),
);
Table.displayName = "Table";

// ---------------------------------------------------------------------------
// TableHeader
// ---------------------------------------------------------------------------

export const TableHeader = forwardRef<
  HTMLTableSectionElement,
  HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead
    ref={ref}
    className={cn("bg-muted-light/30 border-b border-border", className)}
    {...props}
  />
));
TableHeader.displayName = "Table.Header";

// ---------------------------------------------------------------------------
// TableBody
// ---------------------------------------------------------------------------

export const TableBody = forwardRef<
  HTMLTableSectionElement,
  HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn("[&_tr:last-child]:border-0", className)}
    {...props}
  />
));
TableBody.displayName = "Table.Body";

// ---------------------------------------------------------------------------
// TableFooter
// ---------------------------------------------------------------------------

export const TableFooter = forwardRef<
  HTMLTableSectionElement,
  HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      "bg-muted-light/20 border-t border-border font-medium",
      "[&>tr]:last:border-b-0",
      className,
    )}
    {...props}
  />
));
TableFooter.displayName = "Table.Footer";

// ---------------------------------------------------------------------------
// TableRow
// ---------------------------------------------------------------------------

export interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {
  selected?: boolean;
  clickable?: boolean;
}

export const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ className, selected, clickable, ...props }, ref) => (
    <tr
      ref={ref}
      className={cn(
        "border-b border-border transition-colors",
        "hover:bg-muted-light/20",
        selected && "bg-brand-orange/10",
        clickable && "cursor-pointer",
        className,
      )}
      {...props}
    />
  ),
);
TableRow.displayName = "Table.Row";

// ---------------------------------------------------------------------------
// TableHead (th)
// ---------------------------------------------------------------------------

export type SortDirection = "asc" | "desc" | false;

export interface TableHeadProps extends ThHTMLAttributes<HTMLTableCellElement> {
  sortable?: boolean;
  sortDirection?: SortDirection;
  onSort?: () => void;
}

export const TableHead = forwardRef<HTMLTableCellElement, TableHeadProps>(
  ({ className, sortable, sortDirection, onSort, children, ...props }, ref) => (
    <th
      ref={ref}
      className={cn(
        "h-10 px-4 text-left text-xs font-semibold text-foreground/60 uppercase tracking-wider whitespace-nowrap",
        sortable && "cursor-pointer select-none hover:text-foreground transition-colors",
        className,
      )}
      onClick={sortable ? onSort : undefined}
      aria-sort={
        sortDirection === "asc"
          ? "ascending"
          : sortDirection === "desc"
            ? "descending"
            : sortable
              ? "none"
              : undefined
      }
      {...props}
    >
      <span className={cn("inline-flex items-center gap-1.5")}>
        {children}
        {sortable && (
          <span className="inline-flex shrink-0 text-foreground/40">
            {sortDirection === "asc" ? (
              <ArrowUp className="size-3.5" aria-hidden />
            ) : sortDirection === "desc" ? (
              <ArrowDown className="size-3.5" aria-hidden />
            ) : (
              <ArrowUpDown className="size-3.5" aria-hidden />
            )}
          </span>
        )}
      </span>
    </th>
  ),
);
TableHead.displayName = "Table.Head";

// ---------------------------------------------------------------------------
// TableCell (td)
// ---------------------------------------------------------------------------

export const TableCell = forwardRef<HTMLTableCellElement, TdHTMLAttributes<HTMLTableCellElement>>(
  ({ className, ...props }, ref) => (
    <td
      ref={ref}
      className={cn("px-4 py-3 align-middle text-sm text-foreground", className)}
      {...props}
    />
  ),
);
TableCell.displayName = "Table.Cell";

// ---------------------------------------------------------------------------
// TableCaption
// ---------------------------------------------------------------------------

export const TableCaption = forwardRef<
  HTMLTableCaptionElement,
  HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn("mt-4 text-sm text-foreground/50", className)}
    {...props}
  />
));
TableCaption.displayName = "Table.Caption";
