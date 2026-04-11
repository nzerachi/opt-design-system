/**
 * InlineLoading — a compact inline loading indicator with status states.
 *
 * Matches IBM Carbon's InlineLoading pattern exactly:
 * active → finished → error states with transitions.
 *
 * @example
 * <InlineLoading status="active" description="Saving…" />
 * <InlineLoading status="finished" description="Saved!" />
 * <InlineLoading status="error" description="Failed to save" />
 */

import { forwardRef, type HTMLAttributes } from "react";
import { Check, X, Loader2 } from "lucide-react";
import { cn } from "../../lib/utils";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type InlineLoadingStatus = "active" | "inactive" | "finished" | "error";

export interface InlineLoadingProps extends HTMLAttributes<HTMLDivElement> {
  status?: InlineLoadingStatus;
  description?: string;
  iconDescription?: string;
}

// ---------------------------------------------------------------------------
// InlineLoading
// ---------------------------------------------------------------------------

export const InlineLoading = forwardRef<HTMLDivElement, InlineLoadingProps>(
  (
    {
      status = "active",
      description,
      iconDescription,
      className,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      className={cn("inline-flex items-center gap-2", className)}
      aria-live="assertive"
      {...props}
    >
      {/* Icon */}
      <span className="flex size-4 items-center justify-center shrink-0">
        {status === "active" && (
          <Loader2
            className="size-4 animate-spin text-brand-orange"
            aria-label={iconDescription ?? "Loading"}
          />
        )}
        {status === "finished" && (
          <Check
            className="size-4 text-brand-purple"
            aria-label={iconDescription ?? "Finished"}
          />
        )}
        {status === "error" && (
          <X
            className="size-4 text-brand-folly"
            aria-label={iconDescription ?? "Error"}
          />
        )}
        {status === "inactive" && (
          <span className="size-2 rounded-full bg-foreground/20" aria-hidden />
        )}
      </span>

      {/* Description */}
      {description && (
        <span
          className={cn(
            "text-sm",
            status === "finished" && "text-brand-purple",
            status === "error"    && "text-brand-folly",
            (status === "active" || status === "inactive") && "text-foreground/70",
          )}
        >
          {description}
        </span>
      )}
    </div>
  ),
);
InlineLoading.displayName = "InlineLoading";
