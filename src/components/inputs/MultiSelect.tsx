/**
 * MultiSelect — a searchable, multi-value select with tag display.
 *
 * Features:
 * - Keyboard: Arrow keys, Enter to select, Backspace to remove last tag
 * - Search/filter options
 * - Select all / clear all
 * - Groups support
 * - Accessible: listbox pattern with aria-multiselectable
 *
 * @example
 * <MultiSelect
 *   options={[
 *     { label: "React", value: "react" },
 *     { label: "TypeScript", value: "ts" },
 *   ]}
 *   value={selected}
 *   onChange={setSelected}
 *   placeholder="Select frameworks…"
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

export interface MultiSelectOption {
  label: string;
  value: string;
  disabled?: boolean;
  group?: string;
}

export interface MultiSelectProps {
  options: MultiSelectOption[];
  value?: string[];
  onChange?: (value: string[]) => void;
  placeholder?: string;
  label?: string;
  error?: string;
  description?: string;
  disabled?: boolean;
  maxSelected?: number;
  searchable?: boolean;
  clearable?: boolean;
  className?: string;
  id?: string;
}

// ---------------------------------------------------------------------------
// MultiSelect
// ---------------------------------------------------------------------------

export const MultiSelect = forwardRef<HTMLDivElement, MultiSelectProps>(
  (
    {
      options,
      value = [],
      onChange,
      placeholder = "Select options…",
      label,
      error,
      description,
      disabled = false,
      maxSelected,
      searchable = true,
      clearable = true,
      className,
      id: idProp,
    },
    ref,
  ) => {
    const autoId = useId("multiselect");
    const id = idProp ?? autoId;
    const listboxId = `${id}-listbox`;
    const descId = `${id}-desc`;
    const errId = `${id}-err`;

    const containerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState("");

    useClickOutside(containerRef, () => {
      setOpen(false);
      setQuery("");
    });

    const toggle = (optValue: string) => {
      const next = value.includes(optValue)
        ? value.filter((v) => v !== optValue)
        : maxSelected && value.length >= maxSelected
          ? value
          : [...value, optValue];
      onChange?.(next);
    };

    const remove = useCallback(
      (optValue: string, e?: React.MouseEvent) => {
        e?.stopPropagation();
        onChange?.(value.filter((v) => v !== optValue));
      },
      [value, onChange],
    );

    const clear = (e: React.MouseEvent) => {
      e.stopPropagation();
      onChange?.([]);
      setQuery("");
    };

    const filtered = query
      ? options.filter((o) => o.label.toLowerCase().includes(query.toLowerCase()))
      : options;

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Backspace" && !query && value.length > 0) {
        onChange?.(value.slice(0, -1));
      }
      if (e.key === "Escape") {
        setOpen(false);
        setQuery("");
      }
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setOpen(true);
      }
    };

    const selectedOptions = options.filter((o) => value.includes(o.value));
    const hasError = !!error;

    return (
      <div
        ref={(node) => {
          containerRef.current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) ref.current = node;
        }}
        className={cn("flex flex-col gap-1.5", className)}
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
          id={id}
          role="combobox"
          aria-expanded={open}
          aria-haspopup="listbox"
          aria-controls={listboxId}
          aria-invalid={hasError}
          aria-describedby={
            [description && descId, hasError && errId].filter(Boolean).join(" ") || undefined
          }
          onClick={() => {
            if (!disabled) {
              setOpen((o) => !o);
              inputRef.current?.focus();
            }
          }}
          className={cn(
            "min-h-10 flex flex-wrap items-center gap-1.5 px-3 py-2 rounded-lg border",
            "bg-background transition-all cursor-text",
            open
              ? "border-brand-orange ring-2 ring-brand-orange/20"
              : hasError
                ? "border-brand-folly"
                : "border-border hover:border-brand-orange/50",
            disabled && "opacity-50 cursor-not-allowed",
          )}
        >
          {/* Selected tags */}
          {selectedOptions.map((opt) => (
            <span
              key={opt.value}
              className="inline-flex items-center gap-1 rounded-md bg-muted-light/60 px-2 py-0.5 text-xs font-medium text-foreground"
            >
              {opt.label}
              <button
                type="button"
                onClick={(e) => remove(opt.value, e)}
                aria-label={`Remove ${opt.label}`}
                disabled={disabled}
                className="text-foreground/50 hover:text-foreground transition-colors focus:outline-none"
              >
                <X className="size-3" aria-hidden />
              </button>
            </span>
          ))}

          {/* Search input */}
          {searchable && (
            <input
              ref={inputRef}
              id={`${id}-input`}
              type="text"
              value={query}
              disabled={disabled}
              placeholder={value.length === 0 ? placeholder : ""}
              onChange={(e) => {
                setQuery(e.target.value);
                setOpen(true);
              }}
              onKeyDown={handleKeyDown}
              onFocus={() => setOpen(true)}
              className={cn(
                "flex-1 min-w-[80px] bg-transparent text-sm text-foreground",
                "focus:outline-none placeholder:text-foreground/40",
                "disabled:cursor-not-allowed",
              )}
            />
          )}

          {/* Trailing controls */}
          <div className="ml-auto flex items-center gap-1 pl-2">
            {clearable && value.length > 0 && !disabled && (
              <button
                type="button"
                onClick={clear}
                aria-label="Clear all"
                className="text-foreground/40 hover:text-foreground transition-colors focus:outline-none"
              >
                <X className="size-4" aria-hidden />
              </button>
            )}
            {maxSelected && (
              <span className="text-xs text-foreground/40 tabular-nums">
                {value.length}/{maxSelected}
              </span>
            )}
            <ChevronDown
              className={cn(
                "size-4 text-foreground/50 transition-transform",
                open && "rotate-180",
              )}
              aria-hidden
            />
          </div>
        </div>

        {/* Dropdown */}
        {open && (
          <div
            id={listboxId}
            role="listbox"
            aria-multiselectable="true"
            aria-label={label ?? "Options"}
            className={cn(
              "absolute z-[850] mt-1 max-h-56 w-full overflow-y-auto rounded-lg border border-border",
              "bg-background shadow-[var(--shadow-lg)] p-1",
              "animate-in fade-in-0 zoom-in-95",
            )}
          >
            {filtered.length === 0 ? (
              <p className="px-3 py-6 text-center text-sm text-foreground/50">
                No options found
              </p>
            ) : (
              filtered.map((opt) => {
                const selected = value.includes(opt.value);
                return (
                  <div
                    key={opt.value}
                    role="option"
                    aria-selected={selected}
                    aria-disabled={opt.disabled}
                    onClick={() => !opt.disabled && toggle(opt.value)}
                    className={cn(
                      "relative flex cursor-default select-none items-center gap-2 rounded-md px-3 py-1.5 text-sm",
                      "transition-colors",
                      selected
                        ? "bg-muted-light/50 text-foreground font-medium"
                        : "text-foreground hover:bg-muted-light/40",
                      opt.disabled && "pointer-events-none opacity-50",
                    )}
                  >
                    <span className={cn("flex size-4 items-center justify-center rounded border", selected ? "border-brand-orange bg-brand-orange text-white" : "border-border")}>
                      {selected && <Check className="size-3" aria-hidden />}
                    </span>
                    {opt.label}
                  </div>
                );
              })
            )}
          </div>
        )}

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
MultiSelect.displayName = "MultiSelect";
