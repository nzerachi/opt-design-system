/**
 * ConditionalWrap — wraps children in a wrapper component only when `condition` is true.
 * Avoids extra DOM nesting when a wrapper is situational.
 *
 * @example
 * <ConditionalWrap
 *   condition={isTooltipNeeded}
 *   wrap={(children) => <Tooltip content="Upgrade to pro">{children}</Tooltip>}
 * >
 *   <Button disabled={!isPro}>Export</Button>
 * </ConditionalWrap>
 */

import type { ReactNode } from "react";

export interface ConditionalWrapProps {
  condition: boolean;
  wrap: (children: ReactNode) => ReactNode;
  children: ReactNode;
}

export function ConditionalWrap({ condition, wrap, children }: ConditionalWrapProps) {
  return condition ? <>{wrap(children)}</> : <>{children}</>;
}

ConditionalWrap.displayName = "ConditionalWrap";
