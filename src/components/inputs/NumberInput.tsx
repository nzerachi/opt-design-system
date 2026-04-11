/**
 * NumberInput — a numeric spinner with increment/decrement controls.
 *
 * Features:
 * - Min, max, step enforcement
 * - Controlled and uncontrolled modes
 * - Label, error, description support
 * - Keyboard: Up/Down arrow keys, Home/End
 * - Three sizes
 *
 * @example
 * <NumberInput label="Quantity" defaultValue={1} min={1} max={99} />
 * <NumberInput value={count} onChange={setCount} step={5} />
 */

import {
  forwardRef,
  useCallback,
  useState,
  type KeyboardEvent,
  type InputHTMLAttributes,
} from "react";
import { Minus, Plus } from "lucide-react";
import { cn } from "../../lib/utils";
import { useId } from "../../hooks/useId";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type NumberInputSize = "sm" | "md" | "lg";

export interface NumberInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size" | "onChange" | "value"> {
  value?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  label?: string;
  required?: boolean;
  error?: string;
  description?: string;
  size?: NumberInputSize;
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const sizeConfig: Record<NumberInputSize, { wrapper: string; input: string; btn: string }> = {
  sm: { wrapper: "h-8",  input: "text-sm",  btn: "px-2" },
  md: { wrapper: "h-10", input: "text-sm",  btn: "px-2.5" },
  lg: { wrapper: "h-12", input: "text-base", btn: "px-3" },
};

// ---------------------------------------------------------------------------
// NumberInput
// ---------------------------------------------------------------------------

export const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
  (
    {
      value: controlledValue,
      defaultValue = 0,
      onChange,
      min = -Infinity,
      max = Infinity,
      step = 1,
      label,
      required,
      error,
      description,
      size = "md",
      disabled,
      className,
      id: idProp,
      ...props
    },
    ref,
  ) => {
    const autoId = useId("number-input");
    const id = idProp ?? autoId;
    const descId = `${id}-desc`;
    const errId = `${id}-err`;

    const isControlled = controlledValue !== undefined;
    const [internalValue, setInternalValue] = useState(defaultValue);
    const current = isControlled ? controlledValue : internalValue;

    const clamp = useCallback(
      (val: number) => Math.min(max, Math.max(min, val)),
      [min, max],
    );

    const setValue = useCallback(
      (next: number) => {
        const clamped = clamp(next);
        if (!isControlled) setInternalValue(clamped);
        onChange?.(clamped);
      },
      [clamp, isControlled, onChange],
    );

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "ArrowUp")   { e.preventDefault(); setValue(current + step); }
      if (e.key === "ArrowDown") { e.preventDefault(); setValue(current - step); }
      if (e.key === "Home")      { e.preventDefault(); setValue(min); }
      if (e.key === "End")       { e.preventDefault(); setValue(max); }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const parsed = parseFloat(e.target.value);
      if (!isNaN(parsed)) setValue(parsed);
    };

    const { wrapper, input: inputSize, btn } = sizeConfig[size];
    const hasError = !!error;

    return (
      <div className={cn("flex flex-col gap-1.5", className)}>
        {label && (
          <label
            htmlFor={id}
            className={cn(
              "text-sm font-medium",
              hasError ? "text-brand-folly" : "text-foreground",
            )}
          >
            {label}
            {required && <span className="text-brand-folly ml-1" aria-hidden>*</span>}
          </label>
        )}

        <div
          className={cn(
            wrapper,
            "inline-flex items-stretch rounded-lg border bg-background overflow-hidden",
            "transition-all",
            hasError
              ? "border-brand-folly focus-within:ring-2 focus-within:ring-brand-folly/30"
              : "border-border focus-within:border-brand-orange focus-within:ring-2 focus-within:ring-brand-orange/20",
            disabled && "opacity-50 cursor-not-allowed",
          )}
        >
          {/* Decrement */}
          <button
            type="button"
            aria-label="Decrease"
            disabled={disabled || current <= min}
            onClick={() => setValue(current - step)}
            tabIndex={-1}
            className={cn(
              btn,
              "flex items-center justify-center border-r border-border",
              "text-foreground/60 hover:text-foreground hover:bg-muted-light/50",
              "transition-colors disabled:opacity-40 disabled:cursor-not-allowed",
            )}
          >
            <Minus className="size-3.5" aria-hidden />
          </button>

          {/* Input */}
          <input
            ref={ref}
            id={id}
            type="number"
            value={current}
            min={min}
            max={max}
            step={step}
            disabled={disabled}
            aria-invalid={hasError}
            aria-describedby={
              [description && descId, hasError && errId].filter(Boolean).join(" ") || undefined
            }
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            className={cn(
              "flex-1 min-w-0 bg-transparent text-center font-medium text-foreground",
              "focus:outline-none",
              "disabled:cursor-not-allowed",
              "[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none",
              inputSize,
            )}
            {...props}
          />

          {/* Increment */}
          <button
            type="button"
            aria-label="Increase"
            disabled={disabled || current >= max}
            onClick={() => setValue(current + step)}
            tabIndex={-1}
            className={cn(
              btn,
              "flex items-center justify-center border-l border-border",
              "text-foreground/60 hover:text-foreground hover:bg-muted-light/50",
              "transition-colors disabled:opacity-40 disabled:cursor-not-allowed",
            )}
          >
            <Plus className="size-3.5" aria-hidden />
          </button>
        </div>

        {description && !hasError && (
          <p id={descId} className="text-xs text-foreground/60">
            {description}
          </p>
        )}
        {hasError && (
          <p id={errId} role="alert" className="text-xs text-brand-folly">
            {error}
          </p>
        )}
      </div>
    );
  },
);
NumberInput.displayName = "NumberInput";
