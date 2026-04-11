/**
 * Select — native select with custom styling and label/validation support.
 *
 * @example
 * <Select
 *   label="Country"
 *   options={[{ value: "us", label: "United States" }, ...]}
 * />
 * <Select label="Status" error="Please select a status" />
 */

import {
  forwardRef,
  type SelectHTMLAttributes,
} from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "../../lib/utils";
import { useId } from "../../hooks/useId";

export type SelectSize = "sm" | "md" | "lg";

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectGroup {
  label: string;
  options: SelectOption[];
}

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  /** Label above the select */
  label?: string;
  /** Required indicator */
  required?: boolean;
  /** Error message */
  error?: string;
  /** Helper text */
  helpText?: string;
  /**
   * Flat list of options or grouped options.
   * Mutually exclusive: if groups is provided, options is ignored.
   */
  options?: SelectOption[];
  /** Grouped options */
  groups?: SelectGroup[];
  /** Placeholder option (empty value). Default: "Select an option" */
  placeholder?: string;
  /** Whether to show the placeholder option */
  showPlaceholder?: boolean;
  /** Size variant. Default: "md" */
  size?: SelectSize;
  /** Wrapper className */
  wrapperClassName?: string;
}

const sizeClasses: Record<SelectSize, string> = {
  sm: "pl-3 pr-9 py-1.5 text-sm h-8",
  md: "pl-4 pr-10 py-2.5 text-base h-10",
  lg: "pl-4 pr-10 py-3.5 text-lg h-12",
};

const chevronSizeClasses: Record<SelectSize, string> = {
  sm: "size-3.5 right-2",
  md: "size-4 right-3",
  lg: "size-5 right-3",
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      required,
      error,
      helpText,
      options,
      groups,
      placeholder = "Select an option",
      showPlaceholder = true,
      size = "md",
      disabled,
      wrapperClassName,
      className,
      id: idProp,
      ...props
    },
    ref,
  ) => {
    const autoId = useId("select");
    const id = idProp ?? autoId;
    const helpId = `${id}-help`;
    const errorId = `${id}-error`;
    const hasError = Boolean(error);

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

        <div className="relative">
          <select
            ref={ref}
            id={id}
            disabled={disabled}
            aria-required={required}
            aria-invalid={hasError}
            aria-describedby={error ? errorId : helpText ? helpId : undefined}
            className={cn(
              "w-full appearance-none",
              "bg-input-background backdrop-blur-sm",
              "border rounded-lg",
              hasError
                ? "border-brand-folly focus:border-brand-folly"
                : "border-border focus:border-brand-orange",
              "text-foreground",
              "transition-all",
              "focus:outline-none focus:ring-0",
              "focus:[box-shadow:0_0_0_3px_rgba(255,128,0,0.20)]",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              sizeClasses[size],
              className,
            )}
            {...props}
          >
            {showPlaceholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}

            {groups
              ? groups.map((group) => (
                  <optgroup key={group.label} label={group.label}>
                    {group.options.map((opt) => (
                      <option
                        key={opt.value}
                        value={opt.value}
                        disabled={opt.disabled}
                      >
                        {opt.label}
                      </option>
                    ))}
                  </optgroup>
                ))
              : options?.map((opt) => (
                  <option key={opt.value} value={opt.value} disabled={opt.disabled}>
                    {opt.label}
                  </option>
                ))}
          </select>

          {/* Custom chevron */}
          <div
            className={cn(
              "absolute top-1/2 -translate-y-1/2 pointer-events-none text-foreground/60",
              chevronSizeClasses[size],
            )}
          >
            <ChevronDown className="size-full" />
          </div>
        </div>

        {(error || helpText) && (
          <div className="text-sm">
            {error && (
              <p
                id={errorId}
                className="text-brand-folly flex items-center gap-1.5"
                role="alert"
              >
                <svg className="size-4 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {error}
              </p>
            )}
            {!error && helpText && (
              <p id={helpId} className="text-foreground/75">{helpText}</p>
            )}
          </div>
        )}
      </div>
    );
  },
);

Select.displayName = "Select";
