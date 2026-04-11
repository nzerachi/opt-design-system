/**
 * ButtonGroup — renders a group of buttons with shared borders (no double-borders).
 *
 * Handles the border-collapse trick so adjacent buttons share a single border.
 * All children should be Button components with the same variant and size.
 *
 * @example
 * <ButtonGroup>
 *   <Button variant="outline">Copy</Button>
 *   <Button variant="outline">Paste</Button>
 *   <Button variant="outline">Delete</Button>
 * </ButtonGroup>
 *
 * <ButtonGroup attached>
 *   <Button variant="secondary">Previous</Button>
 *   <Button variant="secondary">Next</Button>
 * </ButtonGroup>
 */

import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "../../lib/utils";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type ButtonGroupOrientation = "horizontal" | "vertical";

export interface ButtonGroupProps extends HTMLAttributes<HTMLDivElement> {
  /** Remove gaps and merge borders. Default: false */
  attached?: boolean;
  orientation?: ButtonGroupOrientation;
}

// ---------------------------------------------------------------------------
// ButtonGroup
// ---------------------------------------------------------------------------

export const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ attached = false, orientation = "horizontal", className, children, ...props }, ref) => (
    <div
      ref={ref}
      role="group"
      className={cn(
        "inline-flex",
        orientation === "vertical" ? "flex-col" : "flex-row",
        !attached && "gap-2",
        // Attached mode: collapse borders + round only outermost corners
        attached && [
          orientation === "horizontal" && [
            "[&>*]:rounded-none",
            "[&>*:first-child]:rounded-l-lg",
            "[&>*:last-child]:rounded-r-lg",
            // Remove double left borders
            "[&>*+*]:-ml-px",
          ],
          orientation === "vertical" && [
            "[&>*]:rounded-none",
            "[&>*:first-child]:rounded-t-lg",
            "[&>*:last-child]:rounded-b-lg",
            "[&>*+*]:-mt-px",
          ],
        ],
        className,
      )}
      {...props}
    />
  ),
);
ButtonGroup.displayName = "ButtonGroup";
