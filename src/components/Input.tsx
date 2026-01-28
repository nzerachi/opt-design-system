import {
  InputHTMLAttributes,
  forwardRef,
  ReactNode,
  TextareaHTMLAttributes,
} from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  success?: boolean;
  helpText?: string;
  icon?: ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { label, error, success, helpText, icon, className = "", ...props },
    ref,
  ) => {
    const hasError = Boolean(error);

    return (
      <div className="w-full">
        {label && (
          <label className="block mb-2 text-foreground font-normal">
            {label}
          </label>
        )}

        <div className="relative">
          {icon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/75">
              {icon}
            </div>
          )}

          <input
            ref={ref}
            className={`
              w-full px-4 py-2.5 
              bg-input-background backdrop-blur-sm
              border border-border rounded-lg
              text-foreground placeholder:text-foreground/75
              transition-all
              focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent
              disabled:opacity-50 disabled:cursor-not-allowed
              ${hasError ? "border-brand-folly focus:ring-brand-folly/50" : ""}
              ${success ? "border-brand-folly focus:ring-brand-folly/50" : ""}
              ${icon ? "pl-10" : ""}
              ${className}
            `}
            {...props}
          />
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

Input.displayName = "Input";

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helpText?: string;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, error, helpText, rows = 4, className = "", ...props }, ref) => {
    const hasError = Boolean(error);

    return (
      <div className="w-full">
        {label && (
          <label className="block mb-2 text-foreground font-normal">
            {label}
          </label>
        )}

        <textarea
          ref={ref}
          rows={rows}
          className={`
            w-full px-4 py-2.5
            bg-input-background backdrop-blur-sm
            border border-border rounded-lg
            text-foreground placeholder:text-foreground/75
            transition-all resize-vertical
            focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent
            disabled:opacity-50 disabled:cursor-not-allowed
            ${hasError ? "border-brand-folly focus:ring-brand-folly/50" : ""}
            ${className}
          `}
          {...props}
        />

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

TextArea.displayName = "TextArea";
