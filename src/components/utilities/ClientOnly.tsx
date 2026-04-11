/**
 * ClientOnly — renders children only on the client, after hydration.
 * Prevents SSR mismatches for browser-only APIs.
 *
 * @example
 * <ClientOnly fallback={<Skeleton />}>
 *   <ChartThatUsesWindow />
 * </ClientOnly>
 */

import { useState, useEffect, type ReactNode } from "react";

export interface ClientOnlyProps {
  children: ReactNode;
  fallback?: ReactNode;
}

export function ClientOnly({ children, fallback = null }: ClientOnlyProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? <>{children}</> : <>{fallback}</>;
}

ClientOnly.displayName = "ClientOnly";
