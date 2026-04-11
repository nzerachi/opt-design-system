/**
 * Icon — wraps lucide-react icons with consistent sizing and accessibility.
 *
 * Accepts any lucide-react icon component as the `icon` prop.
 * Provides standard size tokens and an optional accessible label.
 *
 * @example
 * import { Search } from "lucide-react";
 * <Icon icon={Search} size="md" />
 * <Icon icon={Bell} size="lg" label="Notifications" />
 */

import { forwardRef, type ComponentType, type SVGProps } from "react";
import { cn } from "../../lib/utils";
import { VisuallyHidden } from "./VisuallyHidden";

export type IconSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

export interface IconProps extends SVGProps<SVGSVGElement> {
  /** The lucide-react (or compatible) icon component to render */
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  /** Visual size. Default: "md" (20px) */
  size?: IconSize;
  /**
   * Accessible label for the icon. When provided, the icon is announced
   * to screen readers with this label. When omitted, the icon is hidden
   * from assistive tech (aria-hidden="true").
   */
  label?: string;
  /** Additional CSS classes */
  className?: string;
}

const sizeClasses: Record<IconSize, string> = {
  xs:   "size-3",    // 12px
  sm:   "size-4",    // 16px
  md:   "size-5",    // 20px — default
  lg:   "size-6",    // 24px
  xl:   "size-8",    // 32px
  "2xl": "size-10",  // 40px
};

export const Icon = forwardRef<SVGSVGElement, IconProps>(
  ({ icon: IconComponent, size = "md", label, className, ...props }, ref) => {
    return (
      <>
        <IconComponent
          ref={ref}
          aria-hidden={!label}
          role={label ? "img" : undefined}
          aria-label={label}
          className={cn(
            "shrink-0",
            sizeClasses[size],
            className,
          )}
          strokeWidth={1.75}
          {...props}
        />
        {label && <VisuallyHidden>{label}</VisuallyHidden>}
      </>
    );
  },
);

Icon.displayName = "Icon";
