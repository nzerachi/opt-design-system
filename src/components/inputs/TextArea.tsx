/**
 * TextArea — a multi-line text input with label and validation states.
 *
 * @example
 * <TextArea label="Message" placeholder="Type your message..." />
 * <TextArea label="Bio" rows={6} maxLength={500} showCount />
 * <TextArea error="Required field" />
 */

import {
  forwardRef,
  type TextareaHTMLAttributes,
} from "react";
import { cn } from "../../lib/utils";
import { useId } from "../../hooks/useId";

export type TextAreaStatus = "default" | "error" | "success" | "warning";

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Label above the textarea */
  label?: string;
  /** Required indicator */
  required?: boolean;
  /** Error message */
  error?: string;
  /** Success message */
  success?: string;
  /** Helper text */
  helpText?: string;
  /** Explicit status */
  status?: TextAreaStatus;
  /** Show character count. Requires maxLength prop. */
  showCount?: boolean;
  /** Wrapper className */
  wrapperClassName?: string;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      label,
      required,
      error,
      success,
      helpText,
      status: statusProp,
      showCount = false,
      maxLength,
      disabled,
      rows = 4,
      wrapperClassName,
      className,
      id: idProp,
      value,
      defaultValue,
      ...props
    },
    ref,
  ) => {
    const autoId = useId("textarea");
    const id = idProp ?? autoId;
    const helpId = `${id}-help`;
    const errorId = `${id}-error`;

    const status: TextAreaStatus =
      statusProp ??
      (error ? "error" : success ? "success" : "default");

    const hasMessage = Boolean(error || success || helpText);
    const messageId = error ? errorId : helpId;

    const borderClasses = {
      default:  "border-border focus:border-brand-orange",
      error:    "border-brand-folly focus:border-brand-folly",
      success:  "border-brand-purple focus:border-brand-purple",
      warning:  "border-brand-orange focus:border-brand-orange",
    }[status];

    // Character count (for controlled or uncontrolled)
    const charCount = typeof value === "string"
      ? value.length
      : typeof defaultValue === "string"
      ? defaultValue.length
      : 0;

    return (
      <div className={cn("w-full space-y-1.5", wrapperClassName)}>
        {label && (
          <label htmlFor={id} className="block text-sm font-medium text-foreground">
            {label}
            {required && (
              <span className="ml-0.5 text-brand-folly" aria-hidden>*</span>
            )}
          </label>
        )}

        <textarea
          ref={ref}
          id={id}
          rows={rows}
          maxLength={maxLength}
          disabled={disabled}
          value={value}
          defaultValue={defaultValue}
          aria-required={required}
          aria-invalid={status === "error"}
          aria-describedby={hasMessage ? messageId : undefined}
          className={cn(
            "w-full px-4 py-2.5",
            "bg-input-background backdrop-blur-sm",
            "border rounded-lg",
            borderClasses,
            "text-base text-foreground placeholder:text-foreground/50",
            "transition-all resize-vertical",
            "focus:outline-none focus:ring-0",
            "focus:[box-shadow:0_0_0_3px_rgba(255,128,0,0.20)]",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            className,
          )}
          {...props}
        />

        {/* Counter + message row */}
        <div className="flex items-start justify-between gap-2">
          <div id={messageId} className="text-sm flex-1">
            {error && (
              <p className="text-brand-folly flex items-center gap-1.5" role="alert">
                <svg className="size-4 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {error}
              </p>
            )}
            {!error && success && (
              <p className="text-brand-purple text-sm">{success}</p>
            )}
            {!error && !success && helpText && (
              <p className="text-foreground/75">{helpText}</p>
            )}
          </div>

          {showCount && maxLength && (
            <p
              className={cn(
                "text-xs shrink-0",
                charCount >= maxLength ? "text-brand-folly" : "text-foreground/50",
              )}
              aria-live="polite"
            >
              {charCount}/{maxLength}
            </p>
          )}
        </div>
      </div>
    );
  },
);

TextArea.displayName = "TextArea";
