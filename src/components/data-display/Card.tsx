/**
 * Card — a content container with multiple layout variants.
 *
 * Improvements over original Card.tsx:
 * - forwardRef on all sub-components
 * - New "elevated" and "interactive" variants
 * - Better glassmorphism styles
 * - Proper compound component pattern
 *
 * @example
 * <Card>
 *   <CardHeader>
 *     <CardTitle>Title</CardTitle>
 *     <CardDescription>Subtitle</CardDescription>
 *   </CardHeader>
 *   <CardContent>Body</CardContent>
 *   <CardFooter>
 *     <Button>Action</Button>
 *   </CardFooter>
 * </Card>
 */

import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "../../lib/utils";

// ---------------------------------------------------------------------------
// Card
// ---------------------------------------------------------------------------

export type CardVariant = "default" | "glass" | "outlined" | "elevated" | "interactive";
export type CardPadding = "none" | "sm" | "md" | "lg" | "xl";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Visual variant. Default: "default" */
  variant?: CardVariant;
  /** Internal padding. Default: "md" */
  padding?: CardPadding;
  /** Enable hover lift effect (adds to interactive variant automatically) */
  hover?: boolean;
}

const variantClasses: Record<CardVariant, string> = {
  default:
    "bg-background border border-border shadow-[var(--shadow-sm)]",
  glass:
    "bg-background/50 dark:bg-background/30 backdrop-blur-md border border-border/50 shadow-[var(--shadow-lg)]",
  outlined:
    "bg-transparent border-2 border-border",
  elevated:
    "bg-background border-0 shadow-[var(--shadow-md)]",
  interactive:
    "bg-background border border-border shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-lg)] hover:-translate-y-1 cursor-pointer",
};

const paddingClasses: Record<CardPadding, string> = {
  none: "",
  sm:   "p-4",
  md:   "p-6",
  lg:   "p-8",
  xl:   "p-12",
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    { variant = "default", padding = "md", hover = false, className, ...props },
    ref,
  ) => (
    <div
      ref={ref}
      className={cn(
        "rounded-lg transition-all",
        variantClasses[variant],
        paddingClasses[padding],
        hover &&
          variant !== "interactive" &&
          "hover:shadow-[var(--shadow-lg)] hover:-translate-y-1 cursor-pointer",
        className,
      )}
      {...props}
    />
  ),
);

Card.displayName = "Card";

// ---------------------------------------------------------------------------
// CardHeader
// ---------------------------------------------------------------------------

export const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("mb-4", className)} {...props} />
  ),
);
CardHeader.displayName = "Card.Header";

// ---------------------------------------------------------------------------
// CardTitle
// ---------------------------------------------------------------------------

export const CardTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn("text-xl font-bold text-foreground leading-tight", className)}
      {...props}
    />
  ),
);
CardTitle.displayName = "Card.Title";

// ---------------------------------------------------------------------------
// CardDescription
// ---------------------------------------------------------------------------

export const CardDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("text-sm text-foreground/75 mt-1", className)}
      {...props}
    />
  ),
);
CardDescription.displayName = "Card.Description";

// ---------------------------------------------------------------------------
// CardContent
// ---------------------------------------------------------------------------

export const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn(className)} {...props} />
  ),
);
CardContent.displayName = "Card.Content";

// ---------------------------------------------------------------------------
// CardFooter
// ---------------------------------------------------------------------------

export const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("mt-4 pt-4 border-t border-border flex items-center", className)}
      {...props}
    />
  ),
);
CardFooter.displayName = "Card.Footer";

// ---------------------------------------------------------------------------
// CardBadge — optional absolute-positioned badge (top-right corner)
// ---------------------------------------------------------------------------

export const CardBadge = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("absolute top-3 right-3", className)}
      {...props}
    />
  ),
);
CardBadge.displayName = "Card.Badge";
