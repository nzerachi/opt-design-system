/**
 * Portal — renders children into a DOM node outside the React tree.
 *
 * Used by Modal, Drawer, Tooltip, Toast to escape overflow/stacking contexts.
 * SSR-safe: renders nothing on the server.
 *
 * @example
 * <Portal>
 *   <div className="fixed inset-0 z-modal">...</div>
 * </Portal>
 *
 * @example
 * // Custom container
 * <Portal container={document.getElementById("overlays")}>
 *   <Tooltip>...</Tooltip>
 * </Portal>
 */

import { type ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

export interface PortalProps {
  children: ReactNode;
  /** DOM element to portal into. Defaults to document.body */
  container?: Element | DocumentFragment | null;
}

export function Portal({ children, container }: PortalProps): React.ReactElement | null {
  const [mounted, setMounted] = useState(false);

  // Only mount on client (SSR safe)
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const target = container ?? document.body;
  return createPortal(children, target);
}

Portal.displayName = "Portal";

import type React from "react";
