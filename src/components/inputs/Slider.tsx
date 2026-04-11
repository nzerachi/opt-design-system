/**
 * Slider — a range input built on Radix UI Slider.
 *
 * Supports single value and range (two thumbs) modes,
 * optional value label, tick marks, and step snapping.
 *
 * @example
 * <Slider defaultValue={[40]} max={100} step={1} />
 *
 * // Range mode
 * <Slider defaultValue={[20, 80]} max={100} />
 *
 * // With labels
 * <Slider defaultValue={[50]} showValue formatValue={(v) => `${v}%`} />
 */

import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from "react";
import * as RadixSlider from "@radix-ui/react-slider";
import { cn } from "../../lib/utils";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type SliderSize = "sm" | "md" | "lg";

export interface SliderProps
  extends ComponentPropsWithoutRef<typeof RadixSlider.Root> {
  size?: SliderSize;
  /** Display current value(s) above the thumb(s). Default: false */
  showValue?: boolean;
  /** Format function for displayed value. Default: String */
  formatValue?: (value: number) => string;
  /** Show tick marks at each step. Use for small step ranges only. */
  showTicks?: boolean;
}

const trackHeight: Record<SliderSize, string> = {
  sm: "h-1",
  md: "h-1.5",
  lg: "h-2",
};

const thumbSize: Record<SliderSize, string> = {
  sm: "size-4",
  md: "size-5",
  lg: "size-6",
};

// ---------------------------------------------------------------------------
// Slider
// ---------------------------------------------------------------------------

export const Slider = forwardRef<
  ElementRef<typeof RadixSlider.Root>,
  SliderProps
>(
  (
    {
      className,
      size = "md",
      showValue = false,
      formatValue = String,
      showTicks = false,
      defaultValue,
      value,
      min = 0,
      max = 100,
      step = 1,
      ...props
    },
    ref,
  ) => {
    const currentValue = value ?? defaultValue ?? [min];

    return (
      <div className={cn("flex flex-col gap-2", className)}>
        {showValue && (
          <div className="flex justify-between text-xs font-medium text-foreground/75">
            {currentValue.map((v, i) => (
              <span key={i}>{formatValue(v)}</span>
            ))}
          </div>
        )}

        <RadixSlider.Root
          ref={ref}
          defaultValue={defaultValue}
          value={value}
          min={min}
          max={max}
          step={step}
          className={cn(
            "relative flex touch-none select-none items-center w-full",
            props.orientation === "vertical"
              ? "flex-col h-full w-auto"
              : "h-5",
          )}
          {...props}
        >
          {/* Track */}
          <RadixSlider.Track
            className={cn(
              "relative grow overflow-hidden rounded-full bg-muted-light",
              trackHeight[size],
              props.orientation === "vertical" ? "w-1.5 h-full" : "w-full",
            )}
          >
            <RadixSlider.Range
              className="absolute rounded-full bg-brand-orange h-full"
            />
          </RadixSlider.Track>

          {/* Thumb(s) */}
          {currentValue.map((_, i) => (
            <RadixSlider.Thumb
              key={i}
              className={cn(
                thumbSize[size],
                "block rounded-full border-2 border-brand-orange bg-background shadow-[var(--shadow-md)]",
                "transition-colors",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/50 focus-visible:ring-offset-1",
                "disabled:pointer-events-none disabled:opacity-50",
                "hover:bg-brand-orange/10",
              )}
            />
          ))}
        </RadixSlider.Root>

        {/* Min / max labels */}
        {showValue && (
          <div className="flex justify-between text-xs text-foreground/40">
            <span>{formatValue(min)}</span>
            <span>{formatValue(max)}</span>
          </div>
        )}
      </div>
    );
  },
);
Slider.displayName = "Slider";
