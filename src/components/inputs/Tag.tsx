/**
 * Tag / Chip — a removable, interactive label.
 *
 * Unlike Badge (purely decorative), Tags are interactive:
 * they can be removed, selected, or used as filter chips.
 *
 * @example
 * <Tag onRemove={() => removeTag("react")}>React</Tag>
 * <Tag variant="outline" selected>TypeScript</Tag>
 *
 * // Tag input list
 * {tags.map(tag => (
 *   <Tag key={tag} onRemove={() => remove(tag)}>{tag}</Tag>
 * ))}
 */

import { forwardRef, type HTMLAttributes } from "react";
import { X } from "lucide-react";
import { cn } from "../../lib/utils";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type TagVariant = "filled" | "outline" | "subtle";
export type TagColor = "default" | "brand" | "success" | "warning" | "error" | "info";
export type TagSize = "sm" | "md" | "lg";

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: TagVariant;
  color?: TagColor;
  size?: TagSize;
  /** Makes the tag look selected/active */
  selected?: boolean;
  /** Render a remove (×) button */
  onRemove?: () => void;
  /** Disable interaction */
  disabled?: boolean;
  /** Make the whole tag clickable */
  onClick?: React.MouseEventHandler<HTMLSpanElement>;
}

// ---------------------------------------------------------------------------
// Style maps
// ---------------------------------------------------------------------------

const colorMap: Record<TagColor, Record<TagVariant, string>> = {
  default: {
    filled:  "bg-muted-light text-foreground",
    outline: "border border-border bg-transparent text-foreground",
    subtle:  "bg-muted-light/50 text-foreground",
  },
  brand: {
    filled:  "bg-brand-orange text-white",
    outline: "border border-brand-orange bg-transparent text-brand-orange",
    subtle:  "bg-brand-orange/15 text-brand-orange",
  },
  success: {
    filled:  "bg-brand-purple text-white",
    outline: "border border-brand-purple bg-transparent text-brand-purple",
    subtle:  "bg-brand-purple/15 text-brand-purple",
  },
  warning: {
    filled:  "bg-brand-orange text-white",
    outline: "border border-brand-orange bg-transparent text-brand-orange",
    subtle:  "bg-brand-orange/15 text-brand-orange",
  },
  error: {
    filled:  "bg-brand-folly text-white",
    outline: "border border-brand-folly bg-transparent text-brand-folly",
    subtle:  "bg-brand-folly/15 text-brand-folly",
  },
  info: {
    filled:  "bg-blue-500 text-white",
    outline: "border border-blue-500 bg-transparent text-blue-500",
    subtle:  "bg-blue-500/15 text-blue-500",
  },
};

const sizeClasses: Record<TagSize, string> = {
  sm: "text-xs px-2 py-0.5 gap-1",
  md: "text-sm px-2.5 py-1 gap-1.5",
  lg: "text-base px-3 py-1.5 gap-2",
};

const removeSize: Record<TagSize, string> = {
  sm: "size-3",
  md: "size-3.5",
  lg: "size-4",
};

// ---------------------------------------------------------------------------
// Tag
// ---------------------------------------------------------------------------

export const Tag = forwardRef<HTMLSpanElement, TagProps>(
  (
    {
      variant = "filled",
      color = "default",
      size = "md",
      selected = false,
      onRemove,
      disabled = false,
      className,
      children,
      onClick,
      ...props
    },
    ref,
  ) => (
    <span
      ref={ref}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      aria-pressed={onClick ? selected : undefined}
      onClick={disabled ? undefined : onClick}
      onKeyDown={
        onClick
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                if (!disabled) onClick?.(e as unknown as React.MouseEvent<HTMLSpanElement>);
              }
            }
          : undefined
      }
      className={cn(
        "inline-flex items-center rounded-full font-medium whitespace-nowrap leading-none",
        "transition-all",
        colorMap[color][variant],
        sizeClasses[size],
        selected && variant !== "filled" && "ring-2 ring-current ring-offset-1",
        onClick && !disabled && "cursor-pointer hover:opacity-80 active:scale-95",
        disabled && "opacity-50 cursor-not-allowed",
        className,
      )}
      {...props}
    >
      {children}
      {onRemove && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            if (!disabled) onRemove();
          }}
          aria-label="Remove tag"
          disabled={disabled}
          className={cn(
            removeSize[size],
            "flex items-center justify-center rounded-full",
            "hover:bg-black/10 transition-colors focus:outline-none",
            "disabled:cursor-not-allowed",
          )}
        >
          <X className="size-full" aria-hidden />
        </button>
      )}
    </span>
  ),
);
Tag.displayName = "Tag";
