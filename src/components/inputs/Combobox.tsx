/**
 * Combobox — a searchable single-value select (autocomplete).
 *
 * Built on Radix UI Popover + custom list for full control.
 * Supports groups, custom renderOption, create-new option.
 *
 * @example
 * <Combobox
 *   options={frameworks}
 *   value={selected}
 *   onChange={setSelected}
 *   placeholder="Select framework…"
 * />
 */

import {
  forwardRef,
  useCallback,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import { Check, ChevronDown, X } from "lucide-react";
import { cn } from "../../lib/utils";
import { useClickOutside } from "../../hooks/useClickOutside";
import { useId } from "../../hooks/useId";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface ComboboxOption {
  label: string;
  value: string;
  disabled?: boolean;
  group?: string;
}

export interface ComboboxProps {
  options: ComboboxOption[];
  value?: string | null;
  onChange?: (value: string | null) => void;
  placeholder?: string;
  label?: string;
  error?: string;
  description?: string;
  disabled?: boolean;
  clearable?: boolean;
  /** Render a "Create …" option when no match found */
  creatable?: boolean;
  onCreate?: (value: string) => void;
  className?: string;
  id?: string;
}

// ---------------------------------------------------------------------------
// Combobox
// ---------------------------------------------------------------------------

export const Combobox = forwardRef<HTMLDivElement, ComboboxProps>(
  (
    {
      options,
      value,
      onChange,
      placeholder = "Select…",
      label,
      error,
      description,
      disabled = false,
      clearable = true,
      creatable = false,
      onCreate,
      className,
      id: idProp,
    },
    ref,
  ) => {
    const autoId = useId("combobox");
    const id = idProp ?? autoId;
    const listboxId = `${id}-listbox`;
    const containerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [focused, setFocused] = useState(-1);

    useClickOutside(containerRef, () => {
      setOpen(false);
      setQuery("");
      setFocused(-1);
    });

    const selectedOption = options.find((o) => o.value === value);

    const filtered = query
      ? options.filter((o) => o.label.toLowerCase().includes(query.toLowerCase()))
      : options;

    const hasCreate = creatable && query && !filtered.some((o) => o.label.toLowerCase() === query.toLowerCase());
    const totalOptions = filtered.length + (hasCreate ? 1 : 0);

    const select = useCallback(
      (optValue: string) => {
        onChange?.(optValue === value ? null : optValue);
        setQuery("");
        setOpen(false);
        setFocused(-1);
        inputRef.current?.blur();
      },
      [onChange, value],
    );

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setFocused((f) => (f + 1) % totalOptions);
        setOpen(true);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setFocused((f) => (f - 1 + totalOptions) % totalOptions);
      } else if (e.key === "Enter" && open) {
        e.preventDefault();
        if (focused === filtered.length && hasCreate) {
          onCreate?.(query);
          setQuery("");
          setOpen(false);
        } else if (focused >= 0 && filtered[focused] && !filtered[focused].disabled) {
          select(filtered[focused].value);
        }
      } else if (e.key === "Escape") {
        setOpen(false);
        setQuery("");
      } else if (e.key === "Backspace" && !query && value) {
        onChange?.(null);
      }
    };

    const hasError = !!error;

    return (
      <div
        ref={(node) => {
          containerRef.current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) ref.current = node;
        }}
        className={cn("flex flex-col gap-1.5 relative", className)}
      >
        {label && (
          <label
            htmlFor={`${id}-input`}
            className={cn(
              "text-sm font-medium",
              hasError ? "text-brand-folly" : "text-foreground",
            )}
          >
            {label}
          </label>
        )}

        {/* Trigger */}
        <div
          role="combobox"
          aria-expanded={open}
          aria-haspopup="listbox"
          aria-controls={listboxId}
          aria-invalid={hasError}
          className={cn(
            "relative flex h-10 items-center rounded-lg border bg-background px-3 gap-2",
            "transition-all cursor-text",
            open
              ? "border-brand-orange ring-2 ring-brand-orange/20"
              : hasError
                ? "border-brand-folly"
                : "border-border hover:border-brand-orange/50",
            disabled && "opacity-50 cursor-not-allowed",
          )}
          onClick={() => {
            if (!disabled) {
              setOpen(true);
              inputRef.current?.focus();
            }
          }}
        >
          <input
            ref={inputRef}
            id={`${id}-input`}
            type="text"
            disabled={disabled}
            value={open ? query : (selectedOption?.label ?? "")}
            placeholder={placeholder}
            onChange={(e) => {
              setQuery(e.target.value);
              setOpen(true);
              setFocused(-1);
            }}
            onFocus={() => {
              setOpen(true);
              setQuery("");
            }}
            onKeyDown={handleKeyDown}
            className={cn(
              "flex-1 min-w-0 bg-transparent text-sm text-foreground",
              "focus:outline-none placeholder:text-foreground/40",
              "disabled:cursor-not-allowed",
            )}
          />

          <div className="flex items-center gap-1 ml-auto">
            {clearable && value && !disabled && (
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); onChange?.(null); setQuery(""); }}
                aria-label="Clear"
                className="text-foreground/40 hover:text-foreground transition-colors focus:outline-none"
              >
                <X className="size-4" aria-hidden />
              </button>
            )}
            <ChevronDown
              className={cn("size-4 text-foreground/50 transition-transform shrink-0", open && "rotate-180")}
              aria-hidden
            />
          </div>
        </div>

        {/* Dropdown */}
        {open && (
          <div
            id={listboxId}
            role="listbox"
            aria-label={label ?? "Options"}
            className={cn(
              "absolute top-full mt-1 left-0 right-0 z-[850]",
              "max-h-56 overflow-y-auto rounded-lg border border-border",
              "bg-background shadow-[var(--shadow-lg)] p-1",
              "animate-in fade-in-0 zoom-in-95",
            )}
          >
            {filtered.length === 0 && !hasCreate ? (
              <p className="px-3 py-6 text-center text-sm text-foreground/50">No results</p>
            ) : (
              <>
                {filtered.map((opt, i) => (
                  <div
                    key={opt.value}
                    role="option"
                    aria-selected={opt.value === value}
                    aria-disabled={opt.disabled}
                    onClick={() => !opt.disabled && select(opt.value)}
                    className={cn(
                      "flex items-center gap-2 rounded-md px-3 py-1.5 text-sm cursor-default select-none",
                      "transition-colors",
                      i === focused && "bg-muted-light/60",
                      opt.value === value ? "text-foreground font-medium" : "text-foreground",
                      opt.disabled && "pointer-events-none opacity-50",
                      "hover:bg-muted-light/40",
                    )}
                  >
                    <Check
                      className={cn("size-4 shrink-0", opt.value === value ? "opacity-100" : "opacity-0")}
                      aria-hidden
                    />
                    {opt.label}
                  </div>
                ))}
                {hasCreate && (
                  <div
                    role="option"
                    aria-selected={false}
                    onClick={() => { onCreate?.(query); setQuery(""); setOpen(false); }}
                    className={cn(
                      "flex items-center gap-2 rounded-md px-3 py-1.5 text-sm cursor-default",
                      "text-brand-orange hover:bg-brand-orange/10 transition-colors",
                      focused === filtered.length && "bg-brand-orange/10",
                    )}
                  >
                    <span className="text-xs font-medium">+ Create</span>
                    "{query}"
                  </div>
                )}
              </>
            )}
          </div>
        )}

        {description && !hasError && (
          <p className="text-xs text-foreground/60">{description}</p>
        )}
        {hasError && (
          <p role="alert" className="text-xs text-brand-folly">{error}</p>
        )}
      </div>
    );
  },
);
Combobox.displayName = "Combobox";
