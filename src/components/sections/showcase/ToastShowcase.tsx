import { useState } from "react";
import { Toaster, toast } from "../../feedback/Toast";
import { Button } from "../../inputs/Button";
import {
  PageHeader,
  DocSection,
  DemoBlock,
  UsageBlock,
  PropsTable,
  AccessibilitySection,
  A11yPoint,
  IC,
  AnatomyList,
  CodeBlock,
} from "./DocComponents";

export function ToastShowcase() {
  const [position, setPosition] = useState<
    "top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right"
  >("bottom-right");

  return (
    <div className="space-y-16">
      {/* Toaster lives here for the demo */}
      <Toaster position={position} />

      <PageHeader
        title="Toast & Notifications"
        description="A non-blocking notification system built on Sonner. Toasts are temporary messages that communicate system-level feedback — successes, errors, warnings, and loading states — without interrupting the user's flow."
        badges={[
          { label: "Stable", color: "green" },
          { label: "v1.0.0", color: "gray" },
        ]}
        importPath={`import { Toaster, toast, useToast } from "@opticule/ds"`}
      />

      <DocSection title="Anatomy">
        <AnatomyList items={[
          { number: 1, label: "Toaster container", description: "The global provider component added once to your app root. Controls position and appearance of all toasts." },
          { number: 2, label: "Toast card", description: "Individual notification card with icon, title, optional description, and close button." },
          { number: 3, label: "Title", description: "Required short message. Should be a complete sentence with a full stop or not — but consistent." },
          { number: 4, label: "Description", description: "Optional supporting detail. Use to explain cause or suggest next steps." },
          { number: 5, label: "Action button", description: "Optional CTA for undoable actions or navigation (e.g. 'Undo', 'View')." },
          { number: 6, label: "Close button", description: "Dismisses the toast immediately. Always visible when closeButton=true." },
        ]} />
      </DocSection>

      <DocSection title="Usage guidelines">
        <UsageBlock
          use={[
            { text: "Use toasts for system-generated feedback that doesn't require a response (saved, uploaded, deleted)." },
            { text: "Use toast.success() for completed actions, toast.error() for failures, toast.loading() for async operations." },
            { text: "Pair toast.promise() with async tasks — it automatically transitions from loading → success/error." },
            { text: "Keep toast titles under 60 characters. If more context is needed, use a description." },
            { text: "Add an undo action for destructive operations like delete — give users a recovery path." },
          ]}
          avoid={[
            { text: "Don't use toasts for errors that require user action — use an inline Alert or Modal instead." },
            { text: "Don't show more than 3 toasts at a time — it becomes overwhelming." },
            { text: "Don't use toasts for marketing messages or upsells." },
            { text: "Don't show persistent toasts (no duration) without a manual close button." },
          ]}
        />
      </DocSection>

      <DocSection title="Toast Variants">
        <DemoBlock label="all types — click to trigger" vertical>
          <div className="flex flex-wrap gap-3">
            <Button
              variant="outline"
              onClick={() => toast.success("File saved successfully.")}
            >
              Success
            </Button>
            <Button
              variant="outline"
              onClick={() => toast.error("Upload failed.", { description: "Check your internet connection and try again." })}
            >
              Error
            </Button>
            <Button
              variant="outline"
              onClick={() => toast.warning("Storage is almost full.", { description: "You have 200 MB remaining." })}
            >
              Warning
            </Button>
            <Button
              variant="outline"
              onClick={() => toast.info("New version available.", { description: "Refresh to get v2.1.0 features." })}
            >
              Info
            </Button>
            <Button
              variant="outline"
              onClick={() => toast("Design token update", { description: "5 new component tokens were added." })}
            >
              Default
            </Button>
          </div>
        </DemoBlock>

        <DemoBlock label="with action (undo)" vertical>
          <Button
            variant="outline"
            onClick={() =>
              toast("Component deleted.", {
                action: {
                  label: "Undo",
                  onClick: () => toast.success("Deletion undone."),
                },
              })
            }
          >
            Delete with Undo
          </Button>
        </DemoBlock>

        <DemoBlock label="loading + promise" vertical>
          <Button
            variant="primary"
            onClick={() =>
              toast.promise(
                new Promise((resolve) => setTimeout(resolve, 2500)),
                {
                  loading: "Exporting data…",
                  success: "Export complete. File ready.",
                  error: "Export failed. Try again.",
                }
              )
            }
          >
            Export (2.5s)
          </Button>
        </DemoBlock>

        <DemoBlock label="custom duration" vertical>
          <div className="flex flex-wrap gap-3">
            <Button variant="outline" size="sm" onClick={() => toast("Disappears in 1.5s", { duration: 1500 })}>
              1.5s
            </Button>
            <Button variant="outline" size="sm" onClick={() => toast("Disappears in 5s", { duration: 5000 })}>
              5s
            </Button>
            <Button variant="outline" size="sm" onClick={() => toast("Persistent toast — close manually", { duration: Infinity })}>
              Persistent
            </Button>
          </div>
        </DemoBlock>
      </DocSection>

      <DocSection title="Position" description="The Toaster position can be changed globally. Click a position to preview.">
        <DemoBlock label="position variants" vertical>
          <div className="grid grid-cols-3 gap-2 w-full max-w-xs">
            {(["top-left", "top-center", "top-right", "bottom-left", "bottom-center", "bottom-right"] as const).map((p) => (
              <button
                key={p}
                onClick={() => {
                  setPosition(p);
                  toast(`Toast at ${p}`);
                }}
                className={`text-xs px-2 py-1.5 rounded-lg border transition-all ${
                  position === p
                    ? "border-brand-orange bg-brand-orange/10 text-brand-orange font-medium"
                    : "border-border hover:border-foreground/30 text-foreground/60"
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </DemoBlock>
      </DocSection>

      <DocSection title="Code Examples">
        <CodeBlock
          language="tsx"
          code={`// 1. Add Toaster once at your app root
import { Toaster } from "@opticule/ds";
<Toaster position="bottom-right" closeButton richColors />

// 2. Trigger toasts from anywhere
import { toast } from "@opticule/ds";

toast.success("Saved!");
toast.error("Failed.", { description: "Check your connection." });
toast.warning("Disk space low.");
toast.loading("Processing…");

// 3. Async promise
toast.promise(saveDocument(), {
  loading: "Saving document…",
  success: "Document saved!",
  error: "Failed to save.",
});

// 4. With action
toast("File deleted.", {
  action: { label: "Undo", onClick: () => restore() },
  duration: 8000,
});

// 5. useToast hook
import { useToast } from "@opticule/ds";
const { success, error, dismiss } = useToast();
success("Profile updated.");`}
        />
      </DocSection>

      <DocSection title="API Reference">
        <PropsTable
          title="Toaster props"
          rows={[
            { name: "position", type: `"top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right"`, default: `"bottom-right"`, description: "Screen position for all toasts." },
            { name: "richColors", type: "boolean", default: "true", description: "Apply semantic colors (green success, red error, etc.)." },
            { name: "closeButton", type: "boolean", default: "true", description: "Show a close button on each toast." },
            { name: "duration", type: "number", default: "4000", description: "Default display duration in milliseconds." },
            { name: "expand", type: "boolean", default: "false", description: "Show all toasts expanded instead of stacked." },
            { name: "visibleToasts", type: "number", default: "3", description: "Maximum number of visible toasts at a time." },
          ]}
        />
        <PropsTable
          title="toast() options"
          rows={[
            { name: "description", type: "string | ReactNode", description: "Supporting detail shown below the title." },
            { name: "duration", type: "number", description: "Per-toast duration override. Infinity = persistent." },
            { name: "action", type: "{ label: string; onClick: () => void }", description: "Optional action button." },
            { name: "cancel", type: "{ label: string; onClick: () => void }", description: "Optional cancel/dismiss button." },
            { name: "id", type: "string | number", description: "Deduplication key — updates existing toast if same id." },
            { name: "onDismiss", type: "(toast) => void", description: "Called when toast is dismissed." },
            { name: "onAutoClose", type: "(toast) => void", description: "Called when toast auto-closes." },
          ]}
        />
      </DocSection>

      <DocSection title="Accessibility">
        <AccessibilitySection>
          <A11yPoint>Toasts are rendered in a live region (<IC>aria-live="polite"</IC> for success/info; <IC>aria-live="assertive"</IC> for errors) so screen readers announce them automatically.</A11yPoint>
          <A11yPoint>The close button is keyboard-focusable and has an accessible label. Users can dismiss toasts via <IC>Escape</IC> or by tabbing to and activating the close button.</A11yPoint>
          <A11yPoint>Persistent toasts (duration=Infinity) must always include a visible close button — they cannot auto-dismiss.</A11yPoint>
          <A11yPoint>Don't use toast for errors that require the user to take action — use an inline <IC>Alert</IC> component so the message remains visible until resolved.</A11yPoint>
          <A11yPoint>Users with <IC>prefers-reduced-motion</IC> see toasts without slide/fade animations.</A11yPoint>
        </AccessibilitySection>
      </DocSection>
    </div>
  );
}
