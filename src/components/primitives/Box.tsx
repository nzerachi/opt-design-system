/**
 * Box — the foundational layout primitive.
 *
 * A polymorphic div-by-default element that accepts an `as` prop to render
 * as any HTML element or React component. All HTML attributes are forwarded.
 *
 * @example
 * <Box as="section" className="p-6">Content</Box>
 * <Box as="article" className="bg-card rounded-lg">Article</Box>
 */

import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementType,
  type ForwardedRef,
} from "react";
import { cn } from "../../lib/utils";

// ---------------------------------------------------------------------------
// Polymorphic types
// ---------------------------------------------------------------------------

type AsProp<C extends ElementType> = {
  /** The element or component to render as. Default: "div" */
  as?: C;
};

type PropsToOmit<C extends ElementType, P> = keyof (AsProp<C> & P);

type PolymorphicComponentProp<
  C extends ElementType,
  Props = Record<never, never>,
> = React.PropsWithChildren<Props & AsProp<C>> &
  Omit<ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

type PolymorphicRef<C extends ElementType> = React.ComponentPropsWithRef<C>["ref"];

type PolymorphicComponentPropWithRef<
  C extends ElementType,
  Props = Record<never, never>,
> = PolymorphicComponentProp<C, Props> & { ref?: PolymorphicRef<C> };

// ---------------------------------------------------------------------------
// Box Props
// ---------------------------------------------------------------------------

export type BoxProps<C extends ElementType = "div"> =
  PolymorphicComponentPropWithRef<C>;

// ---------------------------------------------------------------------------
// Box Component
// ---------------------------------------------------------------------------

type BoxComponent = <C extends ElementType = "div">(
  props: BoxProps<C>,
) => React.ReactElement | null;

export const Box: BoxComponent = forwardRef(
  <C extends ElementType = "div">(
    { as, className, ...props }: BoxProps<C>,
    ref: ForwardedRef<Element>,
  ) => {
    const Component = as ?? "div";
    return (
      <Component
        ref={ref}
        className={cn(className)}
        {...props}
      />
    );
  },
) as BoxComponent;

(Box as unknown as { displayName: string }).displayName = "Box";
