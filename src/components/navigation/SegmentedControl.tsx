/**
 * SegmentedControl — a mutually exclusive option picker styled as a button group.
 *
 * Semantically a radiogroup. Keyboard: arrow keys navigate between options.
 *
 * @example
 * const [view, setView] = useState("list");
 *
 * <SegmentedControl
 *   value={view}
 *   onChange={setView}
 *   options={[
 *     { label: "List", value: "list" },
 *     { label: "Grid", value: "grid" },
 *     { label: "Kanban", value: "kanban" },
 *   ]}
 * />
 */

import { forwardRef, useRef, type HTMLAttributes } from "react";
import { cn } from "../../lib/utils";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface SegmentedOption {
  label: React.ReactNode;
  value: string;
  disabled?: boolean;
}

export type SegmentedSize = "sm" | "md" | "lg";

export interface SegmentedControlProps extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  options: SegmentedOption[];
  value: string;
  onChange: (value: string) => void;
  size?: SegmentedSize;
  fullWidth?: boolean;
}

const sizeClasses: Record<SegmentedSize, string> = {
  sm: "text-xs h-7 px-3",
  md: "text-sm h-9 px-4",
  lg: "text-base h-11 px-5",
};

// ---------------------------------------------------------------------------
// SegmentedControl
// ---------------------------------------------------------------------------

export const SegmentedControl = forwardRef<HTMLDivElement, SegmentedControlProps>(
  (
    { options, value, onChange, size = "md", fullWidth = false, className, ...props },
    ref,
  ) => {
    const groupRef = useRef<HTMLDivElement>(null);

    const handleKeyDown = (e: React.KeyboardEvent, currentValue: string) => {
      const enabledOptions = options.filter((o) => !o.disabled);
      const currentIndex = enabledOptions.findIndex((o) => o.value === currentValue);

      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        const next = enabledOptions[(currentIndex + 1) % enabledOptions.length];
        onChange(next.value);
        const btn = groupRef.current?.querySelector<HTMLButtonElement>(
          `[data-value="${next.value}"]`,
        );
        btn?.focus();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        const prev = enabledOptions[(currentIndex - 1 + enabledOptions.length) % enabledOptions.length];
        onChange(prev.value);
        const btn = groupRef.current?.querySelector<HTMLButtonElement>(
          `[data-value="${prev.value}"]`,
        );
        btn?.focus();
      }
    };

    return (
      <div
        ref={(node) => {
          groupRef.current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) ref.current = node;
        }}
        role="radiogroup"
        className={cn(
          "inline-flex items-center rounded-lg bg-muted-light/30 p-1 gap-1",
          fullWidth && "w-full",
          className,
        )}
        {...props}
      >
        {options.map((option) => {
          const isSelected = option.value === value;
          return (
            <button
              key={option.value}
              type="button"
              role="radio"
              aria-checked={isSelected}
              data-value={option.value}
              disabled={option.disabled}
              tabIndex={isSelected ? 0 : -1}
              onClick={() => !option.disabled && onChange(option.value)}
              onKeyDown={(e) => handleKeyDown(e, option.value)}
              className={cn(
                "inline-flex items-center justify-center rounded-md font-medium transition-all",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/50",
                "disabled:pointer-events-none disabled:opacity-50",
                fullWidth && "flex-1",
                sizeClasses[size],
                isSelected
                  ? "bg-background text-foreground shadow-[var(--shadow-sm)]"
                  : "text-foreground/60 hover:text-foreground hover:bg-muted-light/50",
              )}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    );
  },
);
SegmentedControl.displayName = "SegmentedControl";
