/**
 * useDisclosure — manages open/closed state for modals, drawers, popovers, etc.
 *
 * @example
 * const { isOpen, open, close, toggle } = useDisclosure();
 */

import { useCallback, useState } from "react";

export interface UseDisclosureOptions {
  /** Initial open state */
  defaultOpen?: boolean;
  /** Controlled open state */
  open?: boolean;
  /** Callback when state changes */
  onOpenChange?: (open: boolean) => void;
}

export interface UseDisclosureReturn {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
  /** Spread these props onto a trigger element */
  getButtonProps: (props?: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    "aria-expanded": boolean;
    onClick: () => void;
  };
  /** Spread these props onto the disclosure content */
  getDisclosureProps: () => {
    hidden: boolean;
    "aria-hidden": boolean;
  };
}

import type React from "react";

export function useDisclosure(
  options: UseDisclosureOptions = {},
): UseDisclosureReturn {
  const { defaultOpen = false, open: controlledOpen, onOpenChange } = options;

  const [internalOpen, setInternalOpen] = useState(defaultOpen);

  const isControlled = controlledOpen !== undefined;
  const isOpen = isControlled ? controlledOpen : internalOpen;

  const setOpen = useCallback(
    (next: boolean) => {
      if (!isControlled) setInternalOpen(next);
      onOpenChange?.(next);
    },
    [isControlled, onOpenChange],
  );

  const open = useCallback(() => setOpen(true), [setOpen]);
  const close = useCallback(() => setOpen(false), [setOpen]);
  const toggle = useCallback(() => setOpen(!isOpen), [isOpen, setOpen]);

  const getButtonProps = useCallback(
    (props: React.ButtonHTMLAttributes<HTMLButtonElement> = {}) => ({
      ...props,
      "aria-expanded": isOpen,
      onClick: () => {
        toggle();
        props.onClick?.({} as React.MouseEvent<HTMLButtonElement>);
      },
    }),
    [isOpen, toggle],
  );

  const getDisclosureProps = useCallback(
    () => ({
      hidden: !isOpen,
      "aria-hidden": !isOpen,
    }),
    [isOpen],
  );

  return {
    isOpen,
    open,
    close,
    toggle,
    getButtonProps,
    getDisclosureProps,
  };
}
