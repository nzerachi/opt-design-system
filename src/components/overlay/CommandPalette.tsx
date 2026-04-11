/**
 * CommandPalette — a Cmd+K style command menu built on cmdk.
 *
 * Features:
 * - Fuzzy search across all commands
 * - Groups with labels
 * - Keyboard navigation (arrow keys, enter, escape)
 * - Empty state
 * - Recent items support
 * - Accessible: role="combobox" + aria-expanded pattern
 *
 * @example
 * const { isOpen, open, close } = useDisclosure();
 *
 * // Register global shortcut:
 * useKeyboard("k", open, { ctrl: true });
 * useKeyboard("k", open, { meta: true });
 *
 * <CommandPalette open={isOpen} onClose={close}>
 *   <CommandPaletteGroup label="Navigation">
 *     <CommandPaletteItem onSelect={() => navigate("/dashboard")} icon={<Home />}>
 *       Dashboard
 *     </CommandPaletteItem>
 *   </CommandPaletteGroup>
 * </CommandPalette>
 */

import {
  forwardRef,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import { Command } from "cmdk";
import { Search, Loader2 } from "lucide-react";
import { cn } from "../../lib/utils";
import { Portal } from "../primitives/Portal";
import { useScrollLock } from "../../hooks/useScrollLock";
import { useKeyboard } from "../../hooks/useKeyboard";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface CommandPaletteProps {
  open: boolean;
  onClose: () => void;
  placeholder?: string;
  loading?: boolean;
  children: ReactNode;
  /** Filter function — return true to show item. Default: built-in fuzzy */
  filter?: (value: string, search: string) => number;
}

// ---------------------------------------------------------------------------
// CommandPalette
// ---------------------------------------------------------------------------

export function CommandPalette({
  open,
  onClose,
  placeholder = "Search commands…",
  loading = false,
  children,
  filter,
}: CommandPaletteProps) {
  useScrollLock(open);
  useKeyboard("Escape", onClose, { enabled: open });

  if (!open) return null;

  return (
    <Portal>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[900] flex items-start justify-center pt-[15vh] px-4 animate-[fade-in_100ms_ease-out]"
        onClick={onClose}
      >
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          aria-hidden
        />

        {/* Panel */}
        <Command
          filter={filter}
          className={cn(
            "relative w-full max-w-xl overflow-hidden rounded-xl border border-border",
            "bg-background shadow-[var(--shadow-2xl)]",
            "animate-[scale-in_150ms_ease-out]",
          )}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Search input */}
          <div className="flex items-center gap-3 border-b border-border px-4 h-14">
            {loading ? (
              <Loader2 className="size-4 shrink-0 text-brand-orange animate-spin" aria-hidden />
            ) : (
              <Search className="size-4 shrink-0 text-foreground/40" aria-hidden />
            )}
            <Command.Input
              placeholder={placeholder}
              className={cn(
                "flex-1 bg-transparent text-sm text-foreground",
                "placeholder:text-foreground/40",
                "focus:outline-none",
              )}
            />
            <kbd className="shrink-0 hidden sm:inline-flex items-center gap-0.5 rounded border border-border bg-muted-light/50 px-1.5 py-0.5 text-xs text-foreground/40">
              Esc
            </kbd>
          </div>

          {/* Results */}
          <Command.List className="max-h-[400px] overflow-y-auto p-2">
            <Command.Empty className="py-10 text-center text-sm text-foreground/50">
              No results found.
            </Command.Empty>

            {children}
          </Command.List>

          {/* Footer hint */}
          <div className="flex items-center gap-4 border-t border-border px-4 py-2.5 text-xs text-foreground/40">
            <span className="flex items-center gap-1">
              <kbd className="rounded border border-border bg-muted-light/50 px-1 py-0.5 text-xs">↑↓</kbd>
              navigate
            </span>
            <span className="flex items-center gap-1">
              <kbd className="rounded border border-border bg-muted-light/50 px-1 py-0.5 text-xs">↵</kbd>
              select
            </span>
            <span className="flex items-center gap-1">
              <kbd className="rounded border border-border bg-muted-light/50 px-1 py-0.5 text-xs">Esc</kbd>
              close
            </span>
          </div>
        </Command>
      </div>
    </Portal>
  );
}

// ---------------------------------------------------------------------------
// CommandPaletteGroup
// ---------------------------------------------------------------------------

export interface CommandPaletteGroupProps {
  label?: string;
  children: ReactNode;
}

export function CommandPaletteGroup({ label, children }: CommandPaletteGroupProps) {
  return (
    <Command.Group
      heading={label}
      className={cn(
        "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5",
        "[&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-semibold",
        "[&_[cmdk-group-heading]]:text-foreground/40 [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-wider",
      )}
    >
      {children}
    </Command.Group>
  );
}

// ---------------------------------------------------------------------------
// CommandPaletteItem
// ---------------------------------------------------------------------------

export interface CommandPaletteItemProps {
  onSelect?: () => void;
  icon?: ReactNode;
  shortcut?: string;
  disabled?: boolean;
  children: ReactNode;
  /** Value used for filtering. Defaults to children text. */
  value?: string;
}

export const CommandPaletteItem = forwardRef<HTMLDivElement, CommandPaletteItemProps>(
  ({ onSelect, icon, shortcut, disabled, children, value }, ref) => (
    <Command.Item
      ref={ref}
      value={value}
      disabled={disabled}
      onSelect={onSelect}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm cursor-default",
        "text-foreground/80 transition-colors select-none",
        "aria-selected:bg-muted-light/50 aria-selected:text-foreground",
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      )}
    >
      {icon && (
        <span className="flex size-5 items-center justify-center text-foreground/50 shrink-0" aria-hidden>
          {icon}
        </span>
      )}
      <span className="flex-1 truncate">{children}</span>
      {shortcut && (
        <span className="ml-auto flex items-center gap-0.5">
          {shortcut.split("+").map((key, i) => (
            <kbd
              key={i}
              className="inline-flex items-center rounded border border-border bg-muted-light/50 px-1.5 py-0.5 text-xs text-foreground/40"
            >
              {key}
            </kbd>
          ))}
        </span>
      )}
    </Command.Item>
  ),
);
CommandPaletteItem.displayName = "CommandPalette.Item";

// ---------------------------------------------------------------------------
// CommandPaletteSeparator
// ---------------------------------------------------------------------------

export function CommandPaletteSeparator({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <Command.Separator
      className={cn("-mx-2 my-1 h-px bg-border", className)}
      {...props}
    />
  );
}
