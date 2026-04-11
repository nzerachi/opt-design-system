/**
 * Avatar — a user/entity avatar with image, initials fallback, and status indicator.
 *
 * @example
 * <Avatar src="/photo.jpg" name="Jane Doe" />
 * <Avatar name="John Smith" size="lg" />
 * <Avatar src="/photo.jpg" status="online" />
 * <AvatarGroup>
 *   <Avatar src="/a.jpg" name="Alice" />
 *   <Avatar src="/b.jpg" name="Bob" />
 *   <Avatar name="+3" />
 * </AvatarGroup>
 */

import { forwardRef, useState, type HTMLAttributes, type ImgHTMLAttributes } from "react";
import { cn } from "../../lib/utils";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
export type AvatarStatus = "online" | "offline" | "busy" | "away";

export interface AvatarProps extends HTMLAttributes<HTMLSpanElement> {
  /** Image source URL */
  src?: string;
  /** Alt text for the image */
  alt?: string;
  /** Full name — used to generate initials as fallback */
  name?: string;
  /** Size variant. Default: "md" */
  size?: AvatarSize;
  /** Status indicator dot */
  status?: AvatarStatus;
  /** Image loading props */
  imgProps?: ImgHTMLAttributes<HTMLImageElement>;
}

// ---------------------------------------------------------------------------
// Size config
// ---------------------------------------------------------------------------

const sizeClasses: Record<AvatarSize, string> = {
  xs:   "size-6 text-[10px]",
  sm:   "size-8 text-xs",
  md:   "size-10 text-sm",
  lg:   "size-12 text-base",
  xl:   "size-16 text-lg",
  "2xl": "size-20 text-xl",
};

const statusSizeClasses: Record<AvatarSize, string> = {
  xs:   "size-1.5",
  sm:   "size-2",
  md:   "size-2.5",
  lg:   "size-3",
  xl:   "size-3.5",
  "2xl": "size-4",
};

const statusColors: Record<AvatarStatus, string> = {
  online:  "bg-green-500",
  offline: "bg-neutral-400",
  busy:    "bg-brand-folly",
  away:    "bg-brand-orange",
};

// ---------------------------------------------------------------------------
// Initials helper
// ---------------------------------------------------------------------------

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

// ---------------------------------------------------------------------------
// Avatar Component
// ---------------------------------------------------------------------------

export const Avatar = forwardRef<HTMLSpanElement, AvatarProps>(
  (
    { src, alt, name, size = "md", status, imgProps, className, ...props },
    ref,
  ) => {
    const [imgError, setImgError] = useState(false);
    const showImage = src && !imgError;
    const initials = name ? getInitials(name) : "?";
    const ariaLabel = alt ?? name;

    return (
      <span
        ref={ref}
        role="img"
        aria-label={ariaLabel}
        className={cn(
          "relative inline-flex items-center justify-center rounded-full shrink-0 overflow-hidden select-none",
          "bg-muted-light text-foreground font-medium",
          sizeClasses[size],
          className,
        )}
        {...props}
      >
        {showImage ? (
          <img
            src={src}
            alt={ariaLabel ?? ""}
            className="size-full object-cover"
            onError={() => setImgError(true)}
            {...imgProps}
          />
        ) : (
          <span aria-hidden>{initials}</span>
        )}

        {/* Status indicator */}
        {status && (
          <span
            aria-label={status}
            className={cn(
              "absolute bottom-0 right-0 rounded-full ring-2 ring-background",
              statusSizeClasses[size],
              statusColors[status],
            )}
          />
        )}
      </span>
    );
  },
);

Avatar.displayName = "Avatar";

// ---------------------------------------------------------------------------
// AvatarGroup — overlapping stack of avatars
// ---------------------------------------------------------------------------

export interface AvatarGroupProps extends HTMLAttributes<HTMLDivElement> {
  /** Maximum avatars to show before "+N" overflow */
  max?: number;
  /** Size applied to all avatars */
  size?: AvatarSize;
  /** Spacing between avatars (negative margin). Default: -2 */
  spacing?: number;
}

export const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ max = 4, size = "md", spacing = -2, className, children, ...props }, ref) => {
    const childArray = Array.isArray(children) ? children : [children];
    const visible = max ? childArray.slice(0, max) : childArray;
    const overflow = max ? childArray.length - max : 0;

    const marginClass = `ml-[${spacing * 4}px]`;

    return (
      <div
        ref={ref}
        className={cn("flex items-center", className)}
        {...props}
      >
        {visible.map((child, i) => (
          <span
            key={i}
            style={{ marginLeft: i === 0 ? 0 : spacing * 4 }}
            className="ring-2 ring-background rounded-full"
          >
            {child}
          </span>
        ))}
        {overflow > 0 && (
          <span
            style={{ marginLeft: spacing * 4 }}
            className={cn(
              "ring-2 ring-background rounded-full",
              "inline-flex items-center justify-center",
              "bg-muted-light text-foreground font-medium",
              sizeClasses[size],
            )}
          >
            <span aria-label={`${overflow} more`}>+{overflow}</span>
          </span>
        )}
      </div>
    );
  },
);

AvatarGroup.displayName = "AvatarGroup";
