/**
 * Alert — inline status message with icon and optional close button.
 *
 * Improvements over original Alert.tsx:
 * - forwardRef + displayName
 * - New "neutral" variant
 * - Optional title + description compound pattern
 * - Proper aria-live / role
 *
 * @example
 * <Alert variant="error">
 *   <AlertTitle>Error</AlertTitle>
 *   <AlertDescription>Something went wrong.</AlertDescription>
 * </Alert>
 */

import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import { X } from "lucide-react";
import { cn } from "../../lib/utils";

export type AlertVariant = "info" | "success" | "warning" | "error" | "neutral";

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  /** Semantic variant. Default: "info" */
  variant?: AlertVariant;
  /** Custom icon to override the default variant icon */
  icon?: ReactNode;
  /** Whether to show the default variant icon. Default: true */
  showIcon?: boolean;
  /** Callback when the close button is clicked */
  onClose?: () => void;
  /**
   * Live region announcement behavior.
   * - "polite" (default): announces when idle
   * - "assertive": announces immediately (use only for critical errors)
   */
  live?: "polite" | "assertive";
}

// ---------------------------------------------------------------------------
// Default icons per variant
// ---------------------------------------------------------------------------

function DefaultIcon({ variant }: { variant: AlertVariant }) {
  const cls = "size-5 shrink-0";

  if (variant === "error") return (
    <svg className={cls} fill="currentColor" viewBox="0 0 20 20" aria-hidden>
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
    </svg>
  );
  if (variant === "success") return (
    <svg className={cls} fill="currentColor" viewBox="0 0 20 20" aria-hidden>
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
  );
  if (variant === "warning") return (
    <svg className={cls} fill="currentColor" viewBox="0 0 20 20" aria-hidden>
      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
    </svg>
  );
  if (variant === "info") return (
    <svg className={cls} fill="currentColor" viewBox="0 0 20 20" aria-hidden>
      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
    </svg>
  );
  return null;
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const variantStyles: Record<AlertVariant, string> = {
  info:    "bg-gradient-to-r from-brand-purple/10 via-brand-folly/10 to-brand-orange/10 border-brand-purple text-foreground",
  success: "bg-brand-purple/10 border-brand-purple text-foreground",
  warning: "bg-brand-orange/10 border-brand-orange text-foreground",
  error:   "bg-brand-folly/10 border-brand-folly text-foreground",
  neutral: "bg-muted-light/50 border-border text-foreground",
};

const iconColorClasses: Record<AlertVariant, string> = {
  info:    "text-brand-purple",
  success: "text-brand-purple",
  warning: "text-brand-orange",
  error:   "text-brand-folly",
  neutral: "text-foreground/50",
};

// ---------------------------------------------------------------------------
// Alert
// ---------------------------------------------------------------------------

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      variant = "info",
      icon,
      showIcon = true,
      onClose,
      live = "polite",
      className,
      children,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      role="alert"
      aria-live={live}
      className={cn(
        "rounded-lg border-2 p-4",
        variantStyles[variant],
        className,
      )}
      {...props}
    >
      <div className="flex items-start gap-3">
        {showIcon && (
          <div className={cn("shrink-0 mt-0.5", iconColorClasses[variant])}>
            {icon ?? <DefaultIcon variant={variant} />}
          </div>
        )}
        <div className="flex-1 min-w-0">{children}</div>
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Dismiss alert"
            className="shrink-0 p-1 rounded hover:opacity-70 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/50"
          >
            <X className="size-4" aria-hidden />
          </button>
        )}
      </div>
    </div>
  ),
);

Alert.displayName = "Alert";

// ---------------------------------------------------------------------------
// AlertTitle
// ---------------------------------------------------------------------------

export const AlertTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h4
      ref={ref}
      className={cn("font-bold text-sm mb-1 leading-tight", className)}
      {...props}
    />
  ),
);
AlertTitle.displayName = "Alert.Title";

// ---------------------------------------------------------------------------
// AlertDescription
// ---------------------------------------------------------------------------

export const AlertDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-sm leading-relaxed", className)} {...props} />
  ),
);
AlertDescription.displayName = "Alert.Description";
