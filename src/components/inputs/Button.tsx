/**
 * Button — the primary interactive element.
 *
 * Production-quality implementation with:
 * - forwardRef + displayName
 * - Polymorphic `as` prop (renders as <a>, <div>, etc.)
 * - 5 variants: primary, secondary, outline, text, gradient, destructive, ghost
 * - 5 sizes: xs, sm, md, lg, xl
 * - States: hover, focus-visible, active, disabled, loading
 * - Full keyboard accessibility
 * - Left/right icon slots
 * - Loading spinner with accessible text
 * - className merging (never overrides internals)
 * - Rest props spread to root element
 *
 * @example
 * <Button variant="primary">Save changes</Button>
 * <Button variant="gradient" size="lg">Get a Pair Now</Button>
 * <Button variant="outline" loading>Processing...</Button>
 * <Button variant="secondary" leftIcon={<Plus />}>Add item</Button>
 * <Button as="a" href="/signup" variant="primary">Sign up</Button>
 */

import {
  forwardRef,
  type ButtonHTMLAttributes,
  type ElementType,
  type ReactNode,
} from "react";
import { cn } from "../../lib/utils";
import { VisuallyHidden } from "../primitives/VisuallyHidden";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "text"
  | "gradient"
  | "destructive"
  | "ghost";

export type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Visual variant. Default: "primary"
   *
   * - `primary`: filled, high-contrast (black light / white dark)
   * - `secondary`: outlined/transparent with border
   * - `outline`: transparent, fills on hover
   * - `text`: plain text, hover underline
   * - `gradient`: brand gradient (purple→folly→orange) CTA
   * - `destructive`: red/folly, for dangerous actions
   * - `ghost`: subtle, for toolbars and icon buttons
   */
  variant?: ButtonVariant;
  /**
   * Size. Default: "md"
   */
  size?: ButtonSize;
  /** Show a loading spinner and disable the button */
  loading?: boolean;
  /** Loading text for screen readers. Default: "Loading…" */
  loadingText?: string;
  /** Icon rendered to the left of children */
  leftIcon?: ReactNode;
  /** Icon rendered to the right of children */
  rightIcon?: ReactNode;
  /**
   * Render as a different HTML element or React component.
   * Useful for rendering as `<a>` for navigation CTAs.
   */
  as?: ElementType;
}

// ---------------------------------------------------------------------------
// Class maps
// ---------------------------------------------------------------------------

const baseClasses =
  "inline-flex items-center justify-center font-medium rounded-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/50 focus-visible:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed select-none shrink-0";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-foreground text-background hover:bg-foreground/90 active:bg-foreground/80",
  secondary:
    "bg-transparent border border-border text-foreground hover:bg-muted-light/50 active:bg-muted-light",
  outline:
    "bg-transparent border border-foreground text-foreground hover:bg-foreground hover:text-background active:bg-foreground/90",
  text:
    "bg-transparent text-foreground hover:underline active:opacity-70 focus-visible:underline",
  gradient:
    "bg-gradient-to-r from-brand-purple via-brand-folly to-brand-orange text-white hover:opacity-90 active:opacity-80 shadow-lg shadow-brand-orange/25",
  destructive:
    "bg-brand-folly text-white hover:bg-brand-folly/90 active:bg-brand-folly/80",
  ghost:
    "bg-transparent text-foreground hover:bg-muted-light/50 active:bg-muted-light",
};

const sizeClasses: Record<ButtonSize, string> = {
  xs: "px-2.5 py-1.5 text-xs gap-1",
  sm: "px-3 py-1.5 text-sm gap-1.5",
  md: "px-4 py-2 text-base gap-2",
  lg: "px-6 py-3 text-lg gap-2",
  xl: "px-8 py-4 text-xl gap-2.5",
};

const iconSizeClasses: Record<ButtonSize, string> = {
  xs: "size-3",
  sm: "size-4",
  md: "size-[18px]",
  lg: "size-5",
  xl: "size-6",
};

// ---------------------------------------------------------------------------
// Spinner
// ---------------------------------------------------------------------------

function ButtonSpinner({ size }: { size: ButtonSize }) {
  return (
    <svg
      className={cn("animate-spin shrink-0", iconSizeClasses[size])}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Button Component
// ---------------------------------------------------------------------------

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      loading = false,
      loadingText = "Loading…",
      leftIcon,
      rightIcon,
      disabled,
      className,
      children,
      as: Component = "button",
      ...props
    },
    ref,
  ) => {
    const isDisabled = disabled || loading;

    return (
      <Component
        ref={ref}
        disabled={Component === "button" ? isDisabled : undefined}
        aria-disabled={Component !== "button" ? isDisabled : undefined}
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          loading && "cursor-wait",
          className,
        )}
        {...props}
      >
        {loading ? (
          <>
            <ButtonSpinner size={size} />
            <VisuallyHidden>{loadingText}</VisuallyHidden>
            <span aria-hidden>{children}</span>
          </>
        ) : (
          <>
            {leftIcon}
            {children}
            {rightIcon}
          </>
        )}
      </Component>
    );
  },
);

Button.displayName = "Button";

// ---------------------------------------------------------------------------
// Convenience exports (backward compat + ergonomics)
// ---------------------------------------------------------------------------

export function PrimaryButton(props: Omit<ButtonProps, "variant">) {
  return <Button variant="primary" {...props} />;
}
PrimaryButton.displayName = "PrimaryButton";

export function SecondaryButton(props: Omit<ButtonProps, "variant">) {
  return <Button variant="secondary" {...props} />;
}
SecondaryButton.displayName = "SecondaryButton";

export function OutlineButton(props: Omit<ButtonProps, "variant">) {
  return <Button variant="outline" {...props} />;
}
OutlineButton.displayName = "OutlineButton";

export function TextButton(props: Omit<ButtonProps, "variant">) {
  return <Button variant="text" {...props} />;
}
TextButton.displayName = "TextButton";

export function GradientButton(props: Omit<ButtonProps, "variant">) {
  return <Button variant="gradient" {...props} />;
}
GradientButton.displayName = "GradientButton";
