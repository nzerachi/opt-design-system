/**
 * CopyButton — a button that copies text to the clipboard with visual feedback.
 *
 * @example
 * <CopyButton value="npm install @opticule/ds" />
 * <CopyButton value={apiKey} size="sm" variant="ghost" />
 */

import { forwardRef, type ButtonHTMLAttributes } from "react";
import { Copy, Check } from "lucide-react";
import { cn } from "../../lib/utils";
import { useClipboard } from "../../hooks/useClipboard";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type CopyButtonVariant = "default" | "outline" | "ghost";
export type CopyButtonSize   = "xs" | "sm" | "md" | "lg";

export interface CopyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Text to copy */
  value: string;
  /** Custom label for the button */
  label?: string;
  /** Label shown after copying */
  copiedLabel?: string;
  variant?: CopyButtonVariant;
  size?: CopyButtonSize;
  /** Duration the "copied" state is shown in ms. Default: 2000 */
  timeout?: number;
  /** Show label text alongside icon. Default: false */
  showLabel?: boolean;
}

// ---------------------------------------------------------------------------
// Style maps
// ---------------------------------------------------------------------------

const variantClasses: Record<CopyButtonVariant, string> = {
  default: "bg-muted-light/40 hover:bg-muted-light/70 text-foreground/70 hover:text-foreground border border-border",
  outline: "border border-border bg-transparent hover:bg-muted-light/50 text-foreground/70 hover:text-foreground",
  ghost:   "bg-transparent hover:bg-muted-light/40 text-foreground/50 hover:text-foreground",
};

const sizeClasses: Record<CopyButtonSize, string> = {
  xs: "h-6 px-1.5 gap-1 text-xs rounded-md",
  sm: "h-7 px-2 gap-1 text-xs rounded-md",
  md: "h-8 px-2.5 gap-1.5 text-sm rounded-lg",
  lg: "h-10 px-3 gap-2 text-sm rounded-lg",
};

const iconSizes: Record<CopyButtonSize, string> = {
  xs: "size-3",
  sm: "size-3.5",
  md: "size-4",
  lg: "size-4.5",
};

// ---------------------------------------------------------------------------
// CopyButton
// ---------------------------------------------------------------------------

export const CopyButton = forwardRef<HTMLButtonElement, CopyButtonProps>(
  (
    {
      value,
      label = "Copy",
      copiedLabel = "Copied!",
      variant = "default",
      size = "md",
      timeout = 2000,
      showLabel = false,
      className,
      disabled,
      ...props
    },
    ref,
  ) => {
    const { copy, hasCopied } = useClipboard(timeout);

    return (
      <button
        ref={ref}
        type="button"
        onClick={() => copy(value)}
        disabled={disabled}
        aria-label={hasCopied ? copiedLabel : label}
        className={cn(
          "inline-flex items-center justify-center font-medium transition-all",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/50",
          "disabled:pointer-events-none disabled:opacity-50",
          variantClasses[variant],
          sizeClasses[size],
          hasCopied && "text-brand-purple border-brand-purple/40",
          className,
        )}
        {...props}
      >
        {hasCopied ? (
          <Check className={cn(iconSizes[size], "text-brand-purple")} aria-hidden />
        ) : (
          <Copy className={iconSizes[size]} aria-hidden />
        )}
        {showLabel && (
          <span>{hasCopied ? copiedLabel : label}</span>
        )}
      </button>
    );
  },
);
CopyButton.displayName = "CopyButton";
