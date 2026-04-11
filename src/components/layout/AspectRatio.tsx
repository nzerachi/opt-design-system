/**
 * AspectRatio — maintains a fixed width/height ratio.
 *
 * @example
 * <AspectRatio ratio={16/9}>
 *   <img src="..." alt="..." className="w-full h-full object-cover rounded-lg" />
 * </AspectRatio>
 */

import { forwardRef, type HTMLAttributes, type CSSProperties } from "react";
import { cn } from "../../lib/utils";

export interface AspectRatioProps extends HTMLAttributes<HTMLDivElement> {
  /** Width-to-height ratio. Default: 1 (square) */
  ratio?: number;
}

export const AspectRatio = forwardRef<HTMLDivElement, AspectRatioProps>(
  ({ ratio = 1, className, style, children, ...props }, ref) => {
    const inlineStyle: CSSProperties = {
      position: "relative",
      width: "100%",
      paddingBottom: `${(1 / ratio) * 100}%`,
      ...style,
    };

    return (
      <div ref={ref} style={inlineStyle} className={cn("overflow-hidden", className)} {...props}>
        <div className="absolute inset-0">{children}</div>
      </div>
    );
  },
);

AspectRatio.displayName = "AspectRatio";
