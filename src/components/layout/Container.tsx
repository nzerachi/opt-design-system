/**
 * Container — centers content with a max-width and responsive horizontal padding.
 *
 * @example
 * <Container>
 *   <Heading>Page Title</Heading>
 *   <Text>Page content here.</Text>
 * </Container>
 *
 * @example
 * <Container size="sm" centered>
 *   <AuthForm />
 * </Container>
 */

import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "../../lib/utils";

export type ContainerSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "full";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  /** Max-width breakpoint. Default: "xl" (1280px) */
  size?: ContainerSize;
  /** Whether to center the container. Default: true */
  centered?: boolean;
  /** Horizontal padding. Default: true */
  padded?: boolean;
}

const sizeClasses: Record<ContainerSize, string> = {
  xs:    "max-w-[520px]",
  sm:    "max-w-[640px]",
  md:    "max-w-[768px]",
  lg:    "max-w-[1024px]",
  xl:    "max-w-[1280px]",
  "2xl": "max-w-[1536px]",
  full:  "max-w-full",
};

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  (
    {
      size = "xl",
      centered = true,
      padded = true,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "w-full",
          sizeClasses[size],
          centered && "mx-auto",
          padded && "px-4 md:px-6 lg:px-8",
          className,
        )}
        {...props}
      />
    );
  },
);

Container.displayName = "Container";
