/**
 * Shared utilities for the Opticule Design System component library.
 */

import { clsx, type ClassValue } from "clsx";

/**
 * Merges class names using clsx.
 * Re-exported here so components import from a single location.
 */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}

/**
 * Creates a compound component display name.
 * @example compoundName("Card", "Header") → "Card.Header"
 */
export function compoundName(parent: string, child: string): string {
  return `${parent}.${child}`;
}

/**
 * Returns a stable random ID string. NOT cryptographically secure.
 * Used for generating unique IDs for ARIA associations.
 */
export function generateId(prefix = "opticule"): string {
  return `${prefix}-${Math.random().toString(36).slice(2, 9)}`;
}

/**
 * Checks if a value is a React element.
 */
export { isValidElement } from "react";

/**
 * Omits specified keys from an object. Useful for separating HTML props
 * from custom props when both are spread.
 */
export function omit<T extends object, K extends keyof T>(
  obj: T,
  ...keys: K[]
): Omit<T, K> {
  const result = { ...obj };
  for (const key of keys) {
    delete result[key];
  }
  return result as Omit<T, K>;
}

/**
 * Picks specified keys from an object.
 */
export function pick<T extends object, K extends keyof T>(
  obj: T,
  ...keys: K[]
): Pick<T, K> {
  const result = {} as Pick<T, K>;
  for (const key of keys) {
    if (key in obj) result[key] = obj[key];
  }
  return result;
}

/**
 * Type-safe Object.entries.
 */
export function typedEntries<T extends object>(
  obj: T,
): [keyof T, T[keyof T]][] {
  return Object.entries(obj) as [keyof T, T[keyof T]][];
}

/**
 * Merges two event handlers into one.
 * Both handlers will be called; if the first calls e.preventDefault(),
 * the second is still called unless `stopIfPrevented` is true.
 */
export function mergeEventHandlers<E extends React.SyntheticEvent>(
  userHandler?: (e: E) => void,
  internalHandler?: (e: E) => void,
  { stopIfPrevented = false } = {},
): (e: E) => void {
  return (e: E) => {
    userHandler?.(e);
    if (!stopIfPrevented || !e.defaultPrevented) {
      internalHandler?.(e);
    }
  };
}

import type React from "react";
