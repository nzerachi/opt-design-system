import { SelectHTMLAttributes, forwardRef, ReactNode } from "react";
import { ChevronDown } from "lucide-react";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  helpText?: string;
  options: { value: string; label: string }[];
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, helpText, options, className = "", ...props }, ref) => {
    const hasError = Boolean(error);

    return (
      <div className="w-full">
        {label && (
          <label className="block mb-2 text-foreground font-normal">
            {label}
          </label>
        )}

        <div className="relative">
          <select
            ref={ref}
            className={`
              w-full px-4 py-2.5 pr-10
              bg-input-background backdrop-blur-sm
              border border-border rounded-lg
              text-foreground
              appearance-none
              transition-all
              focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent
              disabled:opacity-50 disabled:cursor-not-allowed
              ${hasError ? "border-brand-folly focus:ring-brand-folly/50" : ""}
              ${className}
            `}
            {...props}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <ChevronDown className="w-4 h-4 text-foreground/75" />
          </div>
        </div>

        {(error || helpText) && (
          <div className="mt-1.5 text-sm">
            {error && (
              <p className="text-brand-folly flex items-center gap-1">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                {error}
              </p>
            )}
            {!error && helpText && (
              <p className="text-foreground/75">{helpText}</p>
            )}
          </div>
        )}
      </div>
    );
  },
);

Select.displayName = "Select";
