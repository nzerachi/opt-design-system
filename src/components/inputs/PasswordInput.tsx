/**
 * PasswordInput — a password field with show/hide toggle.
 *
 * Extends the Input component with a reveal button.
 * Copies all Input props (label, error, size, addons, etc.)
 *
 * @example
 * <PasswordInput label="Password" placeholder="Enter your password" />
 * <PasswordInput label="Confirm password" error="Passwords don't match" />
 */

import { forwardRef, useState, type InputHTMLAttributes } from "react";
import { Eye, EyeOff } from "lucide-react";
import { cn } from "../../lib/utils";
import { useId } from "../../hooks/useId";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type PasswordInputSize = "sm" | "md" | "lg";
export type PasswordInputStatus = "default" | "error" | "success" | "warning";

export interface PasswordInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
  label?: string;
  required?: boolean;
  size?: PasswordInputSize;
  status?: PasswordInputStatus;
  error?: string;
  description?: string;
  showStrength?: boolean;
}

// ---------------------------------------------------------------------------
// Size map
// ---------------------------------------------------------------------------

const sizeConfig: Record<PasswordInputSize, { wrapper: string; text: string }> = {
  sm: { wrapper: "h-8 px-3",  text: "text-sm" },
  md: { wrapper: "h-10 px-3.5", text: "text-sm" },
  lg: { wrapper: "h-12 px-4",  text: "text-base" },
};

const borderStatus: Record<PasswordInputStatus, string> = {
  default: "border-border focus-within:border-brand-orange focus-within:ring-2 focus-within:ring-brand-orange/20",
  error:   "border-brand-folly focus-within:ring-2 focus-within:ring-brand-folly/30",
  success: "border-brand-purple focus-within:ring-2 focus-within:ring-brand-purple/30",
  warning: "border-brand-orange focus-within:ring-2 focus-within:ring-brand-orange/30",
};

// ---------------------------------------------------------------------------
// PasswordInput
// ---------------------------------------------------------------------------

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  (
    {
      label,
      required,
      size = "md",
      status = "default",
      error,
      description,
      disabled,
      className,
      id: idProp,
      ...props
    },
    ref,
  ) => {
    const [revealed, setRevealed] = useState(false);
    const autoId = useId("password-input");
    const id = idProp ?? autoId;
    const descId = `${id}-desc`;
    const errId = `${id}-err`;

    const resolvedStatus: PasswordInputStatus = error ? "error" : status;
    const { wrapper, text } = sizeConfig[size];

    return (
      <div className={cn("flex flex-col gap-1.5", className)}>
        {label && (
          <label
            htmlFor={id}
            className={cn(
              "text-sm font-medium",
              resolvedStatus === "error" ? "text-brand-folly" : "text-foreground",
            )}
          >
            {label}
            {required && <span className="text-brand-folly ml-1" aria-hidden>*</span>}
          </label>
        )}

        <div
          className={cn(
            wrapper,
            "flex items-center gap-2 rounded-lg border bg-background transition-all",
            borderStatus[resolvedStatus],
            disabled && "opacity-50 cursor-not-allowed",
          )}
        >
          <input
            ref={ref}
            id={id}
            type={revealed ? "text" : "password"}
            disabled={disabled}
            aria-invalid={resolvedStatus === "error"}
            aria-describedby={
              [description && descId, error && errId].filter(Boolean).join(" ") || undefined
            }
            className={cn(
              "flex-1 min-w-0 bg-transparent text-foreground",
              "focus:outline-none placeholder:text-foreground/40",
              "disabled:cursor-not-allowed",
              text,
            )}
            {...props}
          />

          <button
            type="button"
            tabIndex={-1}
            onClick={() => setRevealed((v) => !v)}
            aria-label={revealed ? "Hide password" : "Show password"}
            disabled={disabled}
            className={cn(
              "shrink-0 text-foreground/50 hover:text-foreground transition-colors",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/50 rounded",
              "disabled:cursor-not-allowed",
            )}
          >
            {revealed ? (
              <EyeOff className="size-4" aria-hidden />
            ) : (
              <Eye className="size-4" aria-hidden />
            )}
          </button>
        </div>

        {description && !error && (
          <p id={descId} className="text-xs text-foreground/60">
            {description}
          </p>
        )}
        {error && (
          <p id={errId} role="alert" className="text-xs text-brand-folly">
            {error}
          </p>
        )}
      </div>
    );
  },
);
PasswordInput.displayName = "PasswordInput";
