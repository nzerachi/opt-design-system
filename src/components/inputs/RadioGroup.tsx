/**
 * RadioGroup — a group of mutually exclusive radio inputs.
 *
 * Built on Radix UI RadioGroup for keyboard navigation and ARIA.
 * Supports horizontal/vertical layout, sizes, and descriptions.
 *
 * @example
 * <RadioGroup defaultValue="option-a" orientation="vertical">
 *   <RadioGroupItem value="option-a" label="Option A" description="Best choice" />
 *   <RadioGroupItem value="option-b" label="Option B" />
 *   <RadioGroupItem value="option-c" label="Option C" disabled />
 * </RadioGroup>
 */

import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from "react";
import * as RadixRadioGroup from "@radix-ui/react-radio-group";
import { cn } from "../../lib/utils";
import { useId } from "../../hooks/useId";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type RadioGroupSize = "sm" | "md" | "lg";

export interface RadioGroupItemProps
  extends ComponentPropsWithoutRef<typeof RadixRadioGroup.Item> {
  label?: string;
  description?: string;
  size?: RadioGroupSize;
}

// ---------------------------------------------------------------------------
// RadioGroup
// ---------------------------------------------------------------------------

export interface RadioGroupProps
  extends ComponentPropsWithoutRef<typeof RadixRadioGroup.Root> {
  size?: RadioGroupSize;
}

export const RadioGroup = forwardRef<
  ElementRef<typeof RadixRadioGroup.Root>,
  RadioGroupProps
>(({ className, orientation = "vertical", size: _size, ...props }, ref) => (
  <RadixRadioGroup.Root
    ref={ref}
    orientation={orientation}
    className={cn(
      "flex",
      orientation === "vertical" ? "flex-col gap-3" : "flex-row flex-wrap gap-4",
      className,
    )}
    {...props}
  />
));
RadioGroup.displayName = "RadioGroup";

// ---------------------------------------------------------------------------
// RadioGroupItem
// ---------------------------------------------------------------------------

const indicatorSize: Record<RadioGroupSize, { outer: string; inner: string }> = {
  sm: { outer: "size-4",    inner: "size-1.5" },
  md: { outer: "size-[18px]", inner: "size-2" },
  lg: { outer: "size-5",    inner: "size-2.5" },
};

const labelSize: Record<RadioGroupSize, string> = {
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base",
};

export const RadioGroupItem = forwardRef<
  ElementRef<typeof RadixRadioGroup.Item>,
  RadioGroupItemProps
>(
  (
    { label, description, size = "md", className, disabled, ...props },
    ref,
  ) => {
    const autoId = useId("radio");
    const id = props.id ?? autoId;
    const descId = `${id}-desc`;
    const { outer, inner } = indicatorSize[size];

    return (
      <label
        htmlFor={id}
        className={cn(
          "inline-flex items-start gap-2.5 cursor-pointer select-none",
          disabled && "opacity-50 cursor-not-allowed",
        )}
      >
        <RadixRadioGroup.Item
          ref={ref}
          id={id}
          disabled={disabled}
          aria-describedby={description ? descId : undefined}
          className={cn(
            outer,
            "mt-0.5 shrink-0 rounded-full border-2 border-border",
            "transition-colors",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/50 focus-visible:ring-offset-1",
            "data-[state=checked]:border-brand-orange data-[state=checked]:bg-brand-orange",
            "disabled:cursor-not-allowed",
            className,
          )}
          {...props}
        >
          <RadixRadioGroup.Indicator className="flex items-center justify-center w-full h-full">
            <span className={cn(inner, "rounded-full bg-white block")} />
          </RadixRadioGroup.Indicator>
        </RadixRadioGroup.Item>

        {(label || description) && (
          <div>
            {label && (
              <span className={cn("font-medium text-foreground", labelSize[size])}>
                {label}
              </span>
            )}
            {description && (
              <p id={descId} className="text-xs text-foreground/60 mt-0.5">
                {description}
              </p>
            )}
          </div>
        )}
      </label>
    );
  },
);
RadioGroupItem.displayName = "RadioGroup.Item";
