/**
 * Blockquote — a styled pull-quote element.
 *
 * @example
 * <Blockquote cite="Steve Jobs">
 *   Design is not just what it looks like. Design is how it works.
 * </Blockquote>
 */

import { forwardRef, type BlockquoteHTMLAttributes } from "react";
import { cn } from "../../lib/utils";

export interface BlockquoteProps extends BlockquoteHTMLAttributes<HTMLQuoteElement> {
  cite?: string;
}

export const Blockquote = forwardRef<HTMLQuoteElement, BlockquoteProps>(
  ({ cite, className, children, ...props }, ref) => (
    <figure className={cn("my-6", className)}>
      <blockquote
        ref={ref}
        cite={cite}
        className={cn(
          "border-l-4 border-brand-orange pl-6 italic text-foreground/80 text-lg leading-relaxed",
        )}
        {...props}
      >
        {children}
      </blockquote>
      {cite && (
        <figcaption className="mt-2 pl-6 text-sm text-foreground/50">
          — {cite}
        </figcaption>
      )}
    </figure>
  ),
);
Blockquote.displayName = "Blockquote";
