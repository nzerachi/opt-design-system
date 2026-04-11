/**
 * Search — a search input with clear button, loading state, and keyboard shortcut hint.
 *
 * @example
 * <Search placeholder="Search components…" />
 * <Search value={query} onChange={(v) => setQuery(v)} loading={isSearching} />
 * <Search shortcut="⌘K" onShortcut={() => openCommandPalette()} />
 */

import {
  forwardRef,
  useCallback,
  useRef,
  type InputHTMLAttributes,
} from "react";
import { Search as SearchIcon, X, Loader2 } from "lucide-react";
import { cn } from "../../lib/utils";
import { useMergeRefs } from "../../hooks/useMergeRefs";
import { useId } from "../../hooks/useId";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type SearchSize = "sm" | "md" | "lg";

export interface SearchProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size" | "onChange"> {
  value?: string;
  onChange?: (value: string) => void;
  /** Show loading spinner instead of search icon. Default: false */
  loading?: boolean;
  size?: SearchSize;
  /** Keyboard shortcut hint displayed on the right. E.g. "⌘K" */
  shortcut?: string;
  /** Called when the shortcut hint is clicked */
  onShortcut?: () => void;
}

const sizeConfig: Record<SearchSize, { wrapper: string; text: string; icon: string }> = {
  sm: { wrapper: "h-8 pl-8 pr-3",   text: "text-sm",   icon: "size-3.5 left-2.5" },
  md: { wrapper: "h-10 pl-10 pr-4",  text: "text-sm",   icon: "size-4 left-3" },
  lg: { wrapper: "h-12 pl-11 pr-4",  text: "text-base", icon: "size-4.5 left-3.5" },
};

// ---------------------------------------------------------------------------
// Search
// ---------------------------------------------------------------------------

export const Search = forwardRef<HTMLInputElement, SearchProps>(
  (
    {
      value,
      onChange,
      loading = false,
      size = "md",
      shortcut,
      onShortcut,
      disabled,
      className,
      id: idProp,
      ...props
    },
    forwardedRef,
  ) => {
    const internalRef = useRef<HTMLInputElement>(null);
    const ref = useMergeRefs(forwardedRef, internalRef);
    const autoId = useId("search");
    const id = idProp ?? autoId;

    const { wrapper, text, icon } = sizeConfig[size];

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => onChange?.(e.target.value),
      [onChange],
    );

    const handleClear = useCallback(() => {
      onChange?.("");
      internalRef.current?.focus();
    }, [onChange]);

    return (
      <div className={cn("relative flex items-center", className)}>
        {/* Leading icon */}
        <span
          className={cn("absolute pointer-events-none text-foreground/50", icon)}
          aria-hidden
        >
          {loading ? (
            <Loader2 className="size-4 animate-spin" />
          ) : (
            <SearchIcon className="size-4" />
          )}
        </span>

        <input
          ref={ref}
          id={id}
          type="search"
          role="searchbox"
          value={value}
          disabled={disabled}
          onChange={handleChange}
          className={cn(
            wrapper,
            text,
            "w-full rounded-lg border border-border bg-background text-foreground",
            "placeholder:text-foreground/40",
            "transition-all",
            "focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            // hide native clear button on webkit
            "[&::-webkit-search-decoration]:hidden [&::-webkit-search-cancel-button]:hidden",
            value && "pr-8",
            shortcut && !value && "pr-16",
          )}
          {...props}
        />

        {/* Clear button */}
        {value && (
          <button
            type="button"
            onClick={handleClear}
            aria-label="Clear search"
            tabIndex={-1}
            className="absolute right-2.5 text-foreground/50 hover:text-foreground transition-colors focus:outline-none"
          >
            <X className="size-4" aria-hidden />
          </button>
        )}

        {/* Keyboard shortcut hint */}
        {shortcut && !value && (
          <button
            type="button"
            onClick={onShortcut}
            tabIndex={-1}
            aria-label={`Press ${shortcut} to search`}
            className={cn(
              "absolute right-2.5 flex items-center gap-0.5",
              "text-xs font-mono text-foreground/40 pointer-events-none",
              onShortcut && "pointer-events-auto hover:text-foreground/70 transition-colors cursor-pointer",
            )}
          >
            <kbd className="inline-flex items-center rounded border border-border bg-muted-light/50 px-1.5 py-0.5 text-xs">
              {shortcut}
            </kbd>
          </button>
        )}
      </div>
    );
  },
);
Search.displayName = "Search";
