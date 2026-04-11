/**
 * Checkbox — an accessible checkbox with label, description, and error state.
 *
 * Uses the native input + custom visual pattern (peer CSS trick).
 * forwardRef + displayName.
 *
 * @example
 * <Checkbox label="Accept terms" />
 * <Checkbox label="Subscribe" description="Receive weekly digest" />
 * <Checkbox error="You must agree to continue" />
 * <Checkbox indeterminate />
 */

import {
  forwardRef,
  useEffect,
  useRef,
  type InputHTMLAttributes,
} from "react";
import { Check, Minus } from "lucide-react";
import { cn } from "../../lib/utils";
import { useMergeRefs } from "../../hooks/useMergeRefs";
import { useId } from "../../hooks/useId";

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
  /** Visual label displayed next to the checkbox */
  label?: string;
  /** Optional description displayed below the label */
  description?: string;
  /** Error message */
  error?: string;
  /** Size variant. Default: "md" */
  size?: "sm" | "md" | "lg";
  /**
   * Indeterminate state — shows a dash instead of a checkmark.
   * Must be set via prop (not via DOM directly) as React doesn't handle it natively.
   */
  indeterminate?: boolean;
}

const sizeClasses = {
  sm: { box: "size-4", icon: "size-2.5", label: "text-xs", gap: "gap-1.5" },
  md: { box: "size-5", icon: "size-3", label: "text-sm", gap: "gap-2" },
  lg: { box: "size-6", icon: "size-4", label: "text-base", gap: "gap-2.5" },
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      label,
      description,
      error,
      size = "md",
      indeterminate = false,
      disabled,
      className,
      id: idProp,
      ...props
    },
    forwardedRef,
  ) => {
    const autoId = useId("checkbox");
    const id = idProp ?? autoId;
    const errorId = `${id}-error`;
    const descId = `${id}-desc`;

    const internalRef = useRef<HTMLInputElement>(null);
    const ref = useMergeRefs(forwardedRef, internalRef);

    // Set indeterminate state imperatively (React doesn't support this attribute)
    useEffect(() => {
      if (internalRef.current) {
        internalRef.current.indeterminate = indeterminate;
      }
    }, [indeterminate]);

    const { box, icon, label: labelSize, gap } = sizeClasses[size];

    return (
      <div className={cn("flex flex-col", className)}>
        <label
          htmlFor={id}
          className={cn(
            "inline-flex items-start cursor-pointer group select-none",
            gap,
            disabled && "opacity-50 cursor-not-allowed",
          )}
        >
          {/* Hidden native checkbox */}
          <input
            ref={ref}
            id={id}
            type="checkbox"
            disabled={disabled}
            aria-invalid={Boolean(error)}
            aria-describedby={
              [error && errorId, description && descId]
                .filter(Boolean)
                .join(" ") || undefined
            }
            className="peer sr-only"
            {...props}
          />

          {/* Custom visual checkbox */}
          <div
            className={cn(
              box,
              "shrink-0 mt-px border-2 rounded transition-all",
              "peer-checked:bg-foreground peer-checked:border-foreground",
              "peer-indeterminate:bg-foreground peer-indeterminate:border-foreground",
              "peer-focus-visible:ring-2 peer-focus-visible:ring-brand-orange/50 peer-focus-visible:ring-offset-1",
              error ? "border-brand-folly" : "border-border",
              "group-hover:border-foreground/50",
              "peer-disabled:opacity-50 peer-disabled:cursor-not-allowed",
              "relative flex items-center justify-center",
            )}
          >
            {indeterminate ? (
              <Minus className={cn(icon, "text-background")} strokeWidth={3} />
            ) : (
              <Check
                className={cn(
                  icon,
                  "text-background opacity-0 peer-checked:opacity-100 transition-opacity",
                )}
                strokeWidth={3}
              />
            )}
          </div>

          {/* Label + description */}
          {(label || description) && (
            <div>
              {label && (
                <span className={cn(labelSize, "font-medium text-foreground leading-5")}>
                  {label}
                </span>
              )}
              {description && (
                <p id={descId} className="text-xs text-foreground/75 mt-0.5">
                  {description}
                </p>
              )}
            </div>
          )}
        </label>

        {error && (
          <p
            id={errorId}
            className="mt-1 text-sm text-brand-folly flex items-center gap-1.5"
            role="alert"
          >
            <svg className="size-4 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {error}
          </p>
        )}
      </div>
    );
  },
);

Checkbox.displayName = "Checkbox";
