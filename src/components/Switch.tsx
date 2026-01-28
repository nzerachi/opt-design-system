import { useState } from "react";

export interface SwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
  className?: string;
}

export function Switch({
  checked: controlledChecked,
  onChange,
  disabled = false,
  label,
  className = "",
}: SwitchProps) {
  const [internalChecked, setInternalChecked] = useState(false);

  const isControlled = controlledChecked !== undefined;
  const checked = isControlled ? controlledChecked : internalChecked;

  const handleToggle = () => {
    if (disabled) return;

    const newValue = !checked;

    if (!isControlled) {
      setInternalChecked(newValue);
    }

    onChange?.(newValue);
  };

  return (
    <label
      className={`inline-flex items-center gap-3 cursor-pointer ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}
    >
      <div
        className={`
          relative inline-flex h-6 w-11 items-center rounded-full transition-colors
          ${checked ? "bg-switch-background" : "bg-muted"}
          ${disabled ? "" : "hover:opacity-90"}
          focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2
        `}
        onClick={handleToggle}
      >
        <input
          type="checkbox"
          className="sr-only"
          checked={checked}
          onChange={handleToggle}
          disabled={disabled}
          aria-label={label}
        />
        <span
          className={`
            inline-block h-4 w-4 transform rounded-full bg-white transition-transform
            ${checked ? "translate-x-6" : "translate-x-1"}
          `}
        />
      </div>
      {label && (
        <span className="text-sm font-medium text-foreground">{label}</span>
      )}
    </label>
  );
}
