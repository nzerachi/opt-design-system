/**
 * Center — centers content both horizontally and vertically using flexbox.
 *
 * @example
 * <Center className="h-64">
 *   <Spinner />
 * </Center>
 */

import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "../../lib/utils";

export const Center = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex items-center justify-center", className)}
      {...props}
    />
  ),
);

Center.displayName = "Center";
