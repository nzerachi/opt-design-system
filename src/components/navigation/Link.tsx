/**
 * Link — a styled anchor element with variant support.
 *
 * Works as a plain <a> but can be composed with any router's Link via `as` prop.
 *
 * @example
 * <Link href="/docs">Read the docs</Link>
 * <Link href="https://github.com" external>GitHub</Link>
 * <Link variant="subtle">Subtle link</Link>
 *
 * // With react-router
 * <Link as={RouterLink} to="/about">About</Link>
 */

import { forwardRef, type AnchorHTMLAttributes } from "react";
import { ExternalLink } from "lucide-react";
import { cn } from "../../lib/utils";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type LinkVariant = "default" | "subtle" | "brand" | "underline" | "nav";

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: LinkVariant;
  /** Adds external link icon + opens in new tab */
  external?: boolean;
  disabled?: boolean;
}

// ---------------------------------------------------------------------------
// Variants
// ---------------------------------------------------------------------------

const variants: Record<LinkVariant, string> = {
  default:   "text-foreground underline underline-offset-4 decoration-foreground/30 hover:decoration-foreground transition-colors",
  subtle:    "text-foreground/60 hover:text-foreground transition-colors",
  brand:     "text-brand-orange underline underline-offset-4 decoration-brand-orange/30 hover:decoration-brand-orange transition-colors",
  underline: "text-foreground border-b border-foreground/20 hover:border-foreground transition-colors pb-px",
  nav:       "text-foreground/70 hover:text-foreground font-medium transition-colors",
};

// ---------------------------------------------------------------------------
// Link
// ---------------------------------------------------------------------------

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      variant = "default",
      external = false,
      disabled = false,
      className,
      children,
      target,
      rel,
      ...props
    },
    ref,
  ) => (
    <a
      ref={ref}
      target={external ? "_blank" : target}
      rel={external ? "noopener noreferrer" : rel}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : undefined}
      className={cn(
        "inline-flex items-center gap-1",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/50 focus-visible:rounded-sm",
        variants[variant],
        disabled && "pointer-events-none opacity-50",
        className,
      )}
      {...props}
    >
      {children}
      {external && (
        <ExternalLink className="size-3 shrink-0" aria-label="(opens in new tab)" />
      )}
    </a>
  ),
);
Link.displayName = "Link";
