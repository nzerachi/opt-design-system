/**
 * Grid, SimpleGrid — CSS Grid layout components.
 *
 * Grid: full grid control with columns, rows, gap, and alignment.
 * SimpleGrid: auto-fills columns with a minimum width (responsive without breakpoints).
 *
 * @example
 * <Grid columns={3} gap="lg">
 *   <Card>1</Card>
 *   <Card>2</Card>
 *   <Card>3</Card>
 * </Grid>
 *
 * @example
 * <SimpleGrid minChildWidth={280} gap="md">
 *   {items.map(item => <ProductCard key={item.id} {...item} />)}
 * </SimpleGrid>
 */

import { forwardRef, type CSSProperties, type HTMLAttributes } from "react";
import { cn } from "../../lib/utils";

// ---------------------------------------------------------------------------
// Grid
// ---------------------------------------------------------------------------

export type GridSpacing =
  | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "8" | "10" | "12" | "16"
  | "xs" | "sm" | "md" | "lg" | "xl";

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  /** Number of columns. Can be a number (1-12) or "auto" */
  columns?: number | "auto";
  /** Number of rows */
  rows?: number;
  /** Gap between cells. Default: "md" */
  gap?: GridSpacing;
  /** Column gap (overrides gap for columns) */
  columnGap?: GridSpacing;
  /** Row gap (overrides gap for rows) */
  rowGap?: GridSpacing;
  /** align-items */
  align?: "start" | "end" | "center" | "stretch" | "baseline";
  /** justify-items */
  justify?: "start" | "end" | "center" | "stretch";
  /** Template columns — raw CSS value */
  templateColumns?: string;
  /** Template rows — raw CSS value */
  templateRows?: string;
}

const spacingClasses: Record<GridSpacing, string> = {
  "0": "gap-0", "1": "gap-1", "2": "gap-2", "3": "gap-3",
  "4": "gap-4", "5": "gap-5", "6": "gap-6", "8": "gap-8",
  "10": "gap-10", "12": "gap-12", "16": "gap-16",
  xs: "gap-2", sm: "gap-3", md: "gap-4", lg: "gap-6", xl: "gap-8",
};

const colSpacingClasses: Record<GridSpacing, string> = {
  "0": "gap-x-0", "1": "gap-x-1", "2": "gap-x-2", "3": "gap-x-3",
  "4": "gap-x-4", "5": "gap-x-5", "6": "gap-x-6", "8": "gap-x-8",
  "10": "gap-x-10", "12": "gap-x-12", "16": "gap-x-16",
  xs: "gap-x-2", sm: "gap-x-3", md: "gap-x-4", lg: "gap-x-6", xl: "gap-x-8",
};

const rowSpacingClasses: Record<GridSpacing, string> = {
  "0": "gap-y-0", "1": "gap-y-1", "2": "gap-y-2", "3": "gap-y-3",
  "4": "gap-y-4", "5": "gap-y-5", "6": "gap-y-6", "8": "gap-y-8",
  "10": "gap-y-10", "12": "gap-y-12", "16": "gap-y-16",
  xs: "gap-y-2", sm: "gap-y-3", md: "gap-y-4", lg: "gap-y-6", xl: "gap-y-8",
};

const gridColsClasses: Record<number, string> = {
  1: "grid-cols-1", 2: "grid-cols-2", 3: "grid-cols-3", 4: "grid-cols-4",
  5: "grid-cols-5", 6: "grid-cols-6", 7: "grid-cols-7", 8: "grid-cols-8",
  9: "grid-cols-9", 10: "grid-cols-10", 11: "grid-cols-11", 12: "grid-cols-12",
};

export const Grid = forwardRef<HTMLDivElement, GridProps>(
  (
    {
      columns,
      rows,
      gap = "md",
      columnGap,
      rowGap,
      align,
      justify,
      templateColumns,
      templateRows,
      style,
      className,
      ...props
    },
    ref,
  ) => {
    const inlineStyle: CSSProperties = {
      ...style,
    };

    if (templateColumns) inlineStyle.gridTemplateColumns = templateColumns;
    else if (typeof columns === "number" && !gridColsClasses[columns]) {
      inlineStyle.gridTemplateColumns = `repeat(${columns}, minmax(0, 1fr))`;
    }

    if (templateRows) inlineStyle.gridTemplateRows = templateRows;
    else if (rows) inlineStyle.gridTemplateRows = `repeat(${rows}, minmax(0, 1fr))`;

    return (
      <div
        ref={ref}
        style={inlineStyle}
        className={cn(
          "grid",
          // Only use Tailwind class if columns is a known value
          typeof columns === "number" && gridColsClasses[columns],
          // Gap
          columnGap ? colSpacingClasses[columnGap] : "",
          rowGap ? rowSpacingClasses[rowGap] : "",
          !columnGap && !rowGap ? spacingClasses[gap] : "",
          // Alignment
          align === "start"    && "items-start",
          align === "end"      && "items-end",
          align === "center"   && "items-center",
          align === "stretch"  && "items-stretch",
          align === "baseline" && "items-baseline",
          justify === "start"   && "justify-items-start",
          justify === "end"     && "justify-items-end",
          justify === "center"  && "justify-items-center",
          justify === "stretch" && "justify-items-stretch",
          className,
        )}
        {...props}
      />
    );
  },
);

Grid.displayName = "Grid";

// ---------------------------------------------------------------------------
// SimpleGrid
// ---------------------------------------------------------------------------

export interface SimpleGridProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Minimum child width in pixels. Grid auto-fills columns to fit.
   * Default: 200px
   */
  minChildWidth?: number;
  /** Gap between cells. Default: "md" */
  gap?: GridSpacing;
}

export const SimpleGrid = forwardRef<HTMLDivElement, SimpleGridProps>(
  ({ minChildWidth = 200, gap = "md", style, className, ...props }, ref) => {
    return (
      <Grid
        ref={ref}
        templateColumns={`repeat(auto-fill, minmax(${minChildWidth}px, 1fr))`}
        gap={gap}
        style={style}
        className={className}
        {...props}
      />
    );
  },
);

SimpleGrid.displayName = "SimpleGrid";
