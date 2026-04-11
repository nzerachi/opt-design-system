/**
 * IconButton — a square button containing only an icon.
 *
 * Always requires a `label` prop for accessibility (used as aria-label
 * and rendered visually hidden for screen readers).
 *
 * @example
 * import { Search } from "lucide-react";
 * <IconButton icon={Search} label="Search" />
 * <IconButton icon={X} label="Close dialog" variant="ghost" size="sm" />
 */

import { forwardRef, type ReactNode } from "react";
import { cn } from "../../lib/utils";
import { VisuallyHidden } from "../primitives/VisuallyHidden";
import type { ButtonVariant, ButtonSize } from "./Button";

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** The icon to render. Required. */
  icon: ReactNode;
  /** Accessible label. Rendered as aria-label and visually hidden text. */
  label: string;
  /** Visual variant. Default: "ghost" */
  variant?: ButtonVariant;
  /** Size. Default: "md" */
  size?: IconButtonSize;
  /** Rounded pill shape. Default: false */
  rounded?: boolean;
  /** Loading state */
  loading?: boolean;
}

export type IconButtonSize = "xs" | "sm" | "md" | "lg" | "xl";

const sizeClasses: Record<IconButtonSize, string> = {
  xs: "size-6",
  sm: "size-8",
  md: "size-9",    // 36px — comfortable click target with some padding
  lg: "size-10",
  xl: "size-12",
};

const iconSizeClasses: Record<IconButtonSize, string> = {
  xs: "size-3",
  sm: "size-4",
  md: "size-5",
  lg: "size-5",
  xl: "size-6",
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:     "bg-foreground text-background hover:bg-foreground/90 active:bg-foreground/80",
  secondary:   "border border-border text-foreground hover:bg-muted-light/50",
  outline:     "border border-foreground text-foreground hover:bg-foreground hover:text-background",
  text:        "text-foreground hover:opacity-70",
  gradient:    "bg-gradient-to-r from-brand-purple via-brand-folly to-brand-orange text-white hover:opacity-90",
  destructive: "bg-brand-folly text-white hover:bg-brand-folly/90",
  ghost:       "text-foreground hover:bg-muted-light/50 active:bg-muted-light",
};

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      icon,
      label,
      variant = "ghost",
      size = "md",
      rounded = false,
      loading = false,
      disabled,
      className,
      ...props
    },
    ref,
  ) => {
    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        aria-label={label}
        className={cn(
          "inline-flex items-center justify-center shrink-0 transition-all",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/50 focus-visible:ring-offset-1",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          sizeClasses[size],
          variantClasses[variant],
          rounded ? "rounded-full" : "rounded-lg",
          loading && "cursor-wait",
          className,
        )}
        {...props}
      >
        {loading ? (
          <svg
            className={cn("animate-spin", iconSizeClasses[size])}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        ) : (
          icon
        )}
        <VisuallyHidden>{label}</VisuallyHidden>
      </button>
    );
  },
);

IconButton.displayName = "IconButton";
