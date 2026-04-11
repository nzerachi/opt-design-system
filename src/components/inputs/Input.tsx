/**
 * Input — a fully featured text input with label, icons, and validation states.
 *
 * Features:
 * - forwardRef + displayName
 * - label with required indicator
 * - left/right icon slots
 * - left/right addon slots (text, e.g. "https://", ".com")
 * - error, success, warning states with icons
 * - helper text
 * - size variants: sm, md, lg
 * - disabled, readonly states
 * - accessible via aria-describedby
 *
 * @example
 * <Input label="Email" type="email" placeholder="you@example.com" />
 * <Input label="Search" leftIcon={Search} />
 * <Input label="Website" leftAddon="https://" rightAddon=".com" />
 * <Input label="Password" error="Too short" />
 */

import {
  forwardRef,
  type InputHTMLAttributes,
  type ReactNode,
} from "react";
import { cn } from "../../lib/utils";
import { useId } from "../../hooks/useId";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type InputSize = "sm" | "md" | "lg";
export type InputStatus = "default" | "error" | "success" | "warning";

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  /** Label above the input */
  label?: string;
  /** Makes the label show a required asterisk */
  required?: boolean;
  /** Error message — shown below the input */
  error?: string;
  /** Success message */
  success?: string;
  /** Warning message */
  warning?: string;
  /** Helper/hint text — shown below when no error/success/warning */
  helpText?: string;
  /** Icon rendered inside the input on the left */
  leftIcon?: ReactNode;
  /** Icon rendered inside the input on the right */
  rightIcon?: ReactNode;
  /** Text/element attached to the left of the input box (outside) */
  leftAddon?: ReactNode;
  /** Text/element attached to the right of the input box (outside) */
  rightAddon?: ReactNode;
  /** Input size. Default: "md" */
  size?: InputSize;
  /** Explicit status override */
  status?: InputStatus;
  /** Wrapper className */
  wrapperClassName?: string;
}

// ---------------------------------------------------------------------------
// Size styles
// ---------------------------------------------------------------------------

const inputSizeClasses: Record<InputSize, string> = {
  sm: "px-3 py-1.5 text-sm h-8",
  md: "px-4 py-2.5 text-base h-10",
  lg: "px-4 py-3.5 text-lg h-12",
};

const iconSizeClasses: Record<InputSize, string> = {
  sm: "size-4",
  md: "size-4",
  lg: "size-5",
};

const iconPaddingLeft: Record<InputSize, string> = {
  sm: "pl-9",
  md: "pl-10",
  lg: "pl-11",
};

const iconPaddingRight: Record<InputSize, string> = {
  sm: "pr-9",
  md: "pr-10",
  lg: "pr-11",
};

// ---------------------------------------------------------------------------
// Status helpers
// ---------------------------------------------------------------------------

function StatusIcon({ status }: { status: Exclude<InputStatus, "default"> }) {
  if (status === "error") {
    return (
      <svg className="size-4 text-brand-folly" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
      </svg>
    );
  }
  if (status === "success") {
    return (
      <svg className="size-4 text-brand-purple" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    );
  }
  if (status === "warning") {
    return (
      <svg className="size-4 text-brand-orange" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
      </svg>
    );
  }
  return null;
}

// ---------------------------------------------------------------------------
// Input Component
// ---------------------------------------------------------------------------

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      required,
      error,
      success,
      warning,
      helpText,
      leftIcon,
      rightIcon,
      leftAddon,
      rightAddon,
      size = "md",
      status: statusProp,
      disabled,
      wrapperClassName,
      className,
      id: idProp,
      ...props
    },
    ref,
  ) => {
    const autoId = useId("input");
    const id = idProp ?? autoId;
    const helpId = `${id}-help`;
    const errorId = `${id}-error`;

    // Derive status from explicit props
    const status: InputStatus =
      statusProp ??
      (error ? "error" : success ? "success" : warning ? "warning" : "default");

    const hasMessage = Boolean(error || success || warning || helpText);
    const messageId = error ? errorId : helpId;

    const borderClasses = {
      default:  "border-border focus:border-brand-orange",
      error:    "border-brand-folly focus:border-brand-folly",
      success:  "border-brand-purple focus:border-brand-purple",
      warning:  "border-brand-orange focus:border-brand-orange",
    }[status];

    return (
      <div className={cn("w-full space-y-1.5", wrapperClassName)}>
        {/* Label */}
        {label && (
          <label
            htmlFor={id}
            className="block text-sm font-medium text-foreground"
          >
            {label}
            {required && (
              <span className="ml-0.5 text-brand-folly" aria-hidden>
                *
              </span>
            )}
          </label>
        )}

        {/* Input wrapper (handles addons) */}
        <div className={cn("flex items-stretch rounded-lg overflow-hidden", leftAddon || rightAddon ? "border border-border" : "")}>
          {/* Left addon */}
          {leftAddon && (
            <div className="flex items-center px-3 bg-muted-light/50 border-r border-border text-foreground/75 text-sm whitespace-nowrap shrink-0">
              {leftAddon}
            </div>
          )}

          {/* Input + icons wrapper */}
          <div className={cn("relative flex-1", !(leftAddon || rightAddon) && "")}>
            {leftIcon && (
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/50 pointer-events-none">
                {leftIcon}
              </div>
            )}

            <input
              ref={ref}
              id={id}
              disabled={disabled}
              aria-required={required}
              aria-invalid={status === "error"}
              aria-describedby={hasMessage ? messageId : undefined}
              className={cn(
                "w-full bg-input-background backdrop-blur-sm",
                "text-foreground placeholder:text-foreground/50",
                "transition-all",
                // Focus ring — Opticule spec: box-shadow 0 0 0 4px rgba(255,128,0,0.2)
                "focus:outline-none focus:ring-0",
                "focus:[box-shadow:0_0_0_3px_rgba(255,128,0,0.20)]",
                "disabled:opacity-50 disabled:cursor-not-allowed",
                // Border
                leftAddon || rightAddon ? "rounded-none border-0" : cn("rounded-lg border", borderClasses),
                inputSizeClasses[size],
                leftIcon && iconPaddingLeft[size],
                (rightIcon || status !== "default") && iconPaddingRight[size],
                className,
              )}
              {...props}
            />

            {/* Right icon (status icon or custom) */}
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
              {status !== "default" ? (
                <StatusIcon status={status} />
              ) : (
                rightIcon
              )}
            </div>
          </div>

          {/* Right addon */}
          {rightAddon && (
            <div className="flex items-center px-3 bg-muted-light/50 border-l border-border text-foreground/75 text-sm whitespace-nowrap shrink-0">
              {rightAddon}
            </div>
          )}
        </div>

        {/* Help / Error / Success / Warning text */}
        {hasMessage && (
          <div id={messageId} className="text-sm">
            {error && (
              <p className="flex items-center gap-1.5 text-brand-folly" role="alert">
                <StatusIcon status="error" /> {error}
              </p>
            )}
            {!error && success && (
              <p className="flex items-center gap-1.5 text-brand-purple">
                <StatusIcon status="success" /> {success}
              </p>
            )}
            {!error && !success && warning && (
              <p className="flex items-center gap-1.5 text-brand-orange">
                <StatusIcon status="warning" /> {warning}
              </p>
            )}
            {!error && !success && !warning && helpText && (
              <p className="text-foreground/75">{helpText}</p>
            )}
          </div>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";
