import { InputHTMLAttributes, forwardRef } from "react";
import { Check } from "lucide-react";

export interface CheckboxProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> {
  label?: string;
  error?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, error, className = "", ...props }, ref) => {
    return (
      <div className={`flex flex-col ${className}`}>
        <label className="inline-flex items-center gap-2 cursor-pointer group">
          <div className="relative">
            <input
              ref={ref}
              type="checkbox"
              className="peer sr-only"
              {...props}
            />
            <div
              className={`
              w-5 h-5 border-2 rounded
              transition-all
              peer-checked:bg-foreground peer-checked:border-foreground
              peer-focus:ring-2 peer-focus:ring-ring
              peer-disabled:opacity-50 peer-disabled:cursor-not-allowed
              group-hover:border-foreground/50
              ${error ? "border-brand-folly" : "border-border"}
            `}
            >
              <Check
                className="w-full h-full text-background opacity-0 peer-checked:opacity-100 transition-opacity"
                strokeWidth={3}
              />
            </div>
          </div>
          {label && (
            <span className="text-sm text-foreground select-none">{label}</span>
          )}
        </label>
        {error && (
          <p className="mt-1 text-sm text-brand-folly flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            {error}
          </p>
        )}
      </div>
    );
  },
);

Checkbox.displayName = "Checkbox";
