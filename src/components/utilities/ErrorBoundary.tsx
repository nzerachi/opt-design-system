/**
 * ErrorBoundary — a React class-based error boundary with a customizable fallback UI.
 *
 * @example
 * <ErrorBoundary fallback={<p>Something went wrong.</p>}>
 *   <RiskyComponent />
 * </ErrorBoundary>
 *
 * // With render prop for error details:
 * <ErrorBoundary fallback={(error) => <Alert variant="error">{error.message}</Alert>}>
 *   <RiskyComponent />
 * </ErrorBoundary>
 */

import { Component, type ErrorInfo, type ReactNode } from "react";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface ErrorBoundaryProps {
  children: ReactNode;
  /** Static fallback UI or a render function receiving the error */
  fallback?: ReactNode | ((error: Error, reset: () => void) => ReactNode);
  /** Called when an error is caught */
  onError?: (error: Error, info: ErrorInfo) => void;
}

interface ErrorBoundaryState {
  error: Error | null;
}

// ---------------------------------------------------------------------------
// ErrorBoundary
// ---------------------------------------------------------------------------

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  static displayName = "ErrorBoundary";

  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { error: null };
    this.reset = this.reset.bind(this);
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { error };
  }

  override componentDidCatch(error: Error, info: ErrorInfo) {
    this.props.onError?.(error, info);
  }

  reset() {
    this.setState({ error: null });
  }

  override render() {
    const { error } = this.state;
    const { children, fallback } = this.props;

    if (error) {
      const safeError =
        error instanceof Error ? error : new Error(String(error));
      if (typeof fallback === "function") {
        return fallback(safeError, this.reset);
      }
      if (fallback) {
        return fallback;
      }
      // Default fallback
      return (
        <div
          role="alert"
          className="rounded-lg border border-brand-folly/30 bg-brand-folly/10 p-4"
        >
          <p className="text-sm font-medium text-brand-folly">Something went wrong</p>
          <p className="mt-1 text-xs text-brand-folly/75">{safeError.message}</p>
          <button
            type="button"
            onClick={this.reset}
            className="mt-3 text-xs font-medium text-brand-folly underline hover:no-underline"
          >
            Try again
          </button>
        </div>
      );
    }

    return children;
  }
}
