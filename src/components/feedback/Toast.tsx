/**
 * Toast / Toaster — notification system built on Sonner.
 *
 * Exports:
 * - Toaster: the global container — add once to your app root
 * - toast: the imperative API for triggering toasts
 * - useToast: convenience hook wrapping the toast API
 *
 * Includes custom styles matching Opticule design tokens.
 *
 * @example
 * // App root (once)
 * <Toaster />
 *
 * // Anywhere in your app
 * import { toast } from "@opticule/ds";
 * toast.success("File saved!");
 * toast.error("Upload failed.", { description: "Check your network." });
 * toast.loading("Processing…");
 * toast("Custom notification", { action: { label: "Undo", onClick: () => {} } });
 */

import { Toaster as SonnerToaster, toast } from "sonner";

// ---------------------------------------------------------------------------
// Re-export the imperative toast API directly
// ---------------------------------------------------------------------------

export { toast };

// ---------------------------------------------------------------------------
// Toaster — styled wrapper around Sonner's Toaster
// ---------------------------------------------------------------------------

export interface ToasterProps {
  position?: "top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right";
  richColors?: boolean;
  closeButton?: boolean;
  duration?: number;
  expand?: boolean;
  visibleToasts?: number;
}

export function Toaster({
  position = "bottom-right",
  richColors = true,
  closeButton = true,
  duration = 4000,
  expand = false,
  visibleToasts = 3,
}: ToasterProps) {
  return (
    <SonnerToaster
      position={position}
      richColors={richColors}
      closeButton={closeButton}
      duration={duration}
      expand={expand}
      visibleToasts={visibleToasts}
      toastOptions={{
        classNames: {
          toast: [
            "group",
            "bg-background border border-border rounded-lg shadow-[var(--shadow-lg)]",
            "text-foreground font-medium text-sm",
            "flex items-start gap-3 p-4",
          ].join(" "),
          title:       "text-foreground font-semibold text-sm",
          description: "text-foreground/70 text-xs mt-0.5",
          success:     "!border-brand-purple/40 ![--toast-icon-color:theme(colors.brand.purple)]",
          error:       "!border-brand-folly/40",
          warning:     "!border-brand-orange/40",
          info:        "!border-blue-500/40",
          closeButton: [
            "absolute top-2 right-2",
            "text-foreground/40 hover:text-foreground",
            "transition-colors focus:outline-none",
          ].join(" "),
          actionButton: [
            "!bg-foreground !text-background",
            "text-xs font-medium rounded-md px-2.5 py-1.5",
            "hover:!bg-foreground/80 transition-colors",
          ].join(" "),
          cancelButton: [
            "!bg-muted-light/50 !text-foreground/70",
            "text-xs font-medium rounded-md px-2.5 py-1.5",
            "hover:!bg-muted-light transition-colors",
          ].join(" "),
        },
      }}
    />
  );
}

Toaster.displayName = "Toaster";

// ---------------------------------------------------------------------------
// useToast — convenience wrapper
// ---------------------------------------------------------------------------

export function useToast() {
  return {
    toast,
    success: toast.success,
    error:   toast.error,
    warning: toast.warning,
    info:    toast.info,
    loading: toast.loading,
    promise: toast.promise,
    dismiss: toast.dismiss,
  };
}
