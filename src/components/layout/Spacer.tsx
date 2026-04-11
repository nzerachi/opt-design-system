/**
 * Spacer — flexible empty space that fills available room in a flex container.
 * Used to push elements apart in HStack/VStack.
 *
 * @example
 * <HStack>
 *   <Logo />
 *   <Spacer />
 *   <NavLinks />
 * </HStack>
 */

import { forwardRef, type HTMLAttributes } from "react";

export const Spacer = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ style, ...props }, ref) => (
    <div
      ref={ref}
      aria-hidden
      style={{ flex: 1, ...style }}
      {...props}
    />
  ),
);

Spacer.displayName = "Spacer";
