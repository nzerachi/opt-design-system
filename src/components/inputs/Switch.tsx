/**
 * Switch / Toggle — an accessible toggle switch.
 *
 * Features:
 * - forwardRef + displayName
 * - Controlled and uncontrolled modes
 * - label + description support
 * - size variants: sm, md, lg
 * - Proper ARIA role="switch"
 * - Keyboard: Space to toggle
 *
 * @example
 * <Switch label="Dark mode" />
 * <Switch checked={isDark} onChange={setIsDark} />
 * <Switch label="Notifications" description="Receive push notifications" size="sm" />
 */

import {
  forwardRef,
  useCallback,
  type InputHTMLAttributes,
} from "react";
import { cn } from "../../lib/utils";
import { useId } from "../../hooks/useId";
import { useControllable } from "../../hooks/useControllable";

export interface SwitchProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size" | "onChange"> {
  /** Controlled checked state */
  checked?: boolean;
  /** Default checked state for uncontrolled mode */
  defaultChecked?: boolean;
  /** Change handler */
  onChange?: (checked: boolean) => void;
  /** Visual label */
  label?: string;
  /** Label placement. Default: "right" */
  labelPlacement?: "left" | "right";
  /** Description below label */
  description?: string;
  /** Size variant. Default: "md" */
  size?: "sm" | "md" | "lg";
}

const sizeConfig = {
  sm: {
    track: "h-4 w-7",
    thumb: "size-3",
    translateX: "translate-x-3",
    label: "text-xs",
  },
  md: {
    track: "h-6 w-11",
    thumb: "size-4",
    translateX: "translate-x-5",
    label: "text-sm",
  },
  lg: {
    track: "h-7 w-14",
    thumb: "size-6",
    translateX: "translate-x-7",
    label: "text-base",
  },
};

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  (
    {
      checked: controlledChecked,
      defaultChecked = false,
      onChange,
      label,
      labelPlacement = "right",
      description,
      size = "md",
      disabled,
      className,
      id: idProp,
      ...props
    },
    ref,
  ) => {
    const autoId = useId("switch");
    const id = idProp ?? autoId;
    const descId = `${id}-desc`;

    const [checked, setChecked] = useControllable(
      controlledChecked,
      onChange,
      defaultChecked,
    );

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(e.target.checked);
      },
      [setChecked],
    );

    const { track, thumb, translateX, label: labelSize } = sizeConfig[size];

    const labelEl = (label || description) && (
      <div className={cn(labelPlacement === "left" ? "text-right" : "")}>
        {label && (
          <span className={cn(labelSize, "font-medium text-foreground")}>{label}</span>
        )}
        {description && (
          <p id={descId} className="text-xs text-foreground/75 mt-0.5">
            {description}
          </p>
        )}
      </div>
    );

    return (
      <label
        htmlFor={id}
        className={cn(
          "inline-flex items-start gap-3 cursor-pointer select-none",
          disabled && "opacity-50 cursor-not-allowed",
          className,
        )}
      >
        {labelPlacement === "left" && labelEl}

        <div className="relative inline-flex shrink-0 mt-px">
          <input
            ref={ref}
            id={id}
            type="checkbox"
            role="switch"
            checked={checked}
            disabled={disabled}
            aria-checked={checked}
            aria-describedby={description ? descId : undefined}
            onChange={handleChange}
            className="peer sr-only"
            {...props}
          />

          {/* Track */}
          <div
            className={cn(
              track,
              "rounded-full transition-colors",
              "peer-checked:bg-foreground bg-muted-light",
              "peer-focus-visible:ring-2 peer-focus-visible:ring-brand-orange/50 peer-focus-visible:ring-offset-2",
              "peer-disabled:opacity-50",
            )}
          />

          {/* Thumb */}
          <span
            className={cn(
              thumb,
              "absolute left-1 top-1/2 -translate-y-1/2 rounded-full bg-white transition-transform shadow-sm",
              checked ? translateX : "translate-x-0",
            )}
          />
        </div>

        {labelPlacement === "right" && labelEl}
      </label>
    );
  },
);

Switch.displayName = "Switch";
