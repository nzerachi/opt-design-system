import { useState } from "react";
import { Alert, AlertTitle, AlertDescription } from "../../feedback/Alert";
import { Spinner } from "../../feedback/Spinner";
import { ProgressBar } from "../../feedback/ProgressBar";
import { InlineLoading } from "../../feedback/InlineLoading";
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
} from "./DocComponents";

export function FeedbackShowcase() {
  const [progress, setProgress] = useState(65);
  const [inlineStatus, setInlineStatus] = useState<"active" | "finished" | "error" | "inactive">("inactive");

  const simulateLoad = () => {
    setInlineStatus("active");
    setTimeout(() => setInlineStatus("finished"), 2200);
  };

  return (
    <div className="space-y-16">
      <PageHeader
        title="Feedback"
        description="Components that communicate system state to users — alert banners for status messages, spinners and progress bars for loading states, and inline loading indicators for inline async operations."
        badges={[
          { label: "Stable",     color: "green" },
          { label: "Accessible", color: "blue"  },
          { label: "v1.0.0",     color: "gray"  },
        ]}
        importPath={`import { Alert, Spinner, ProgressBar, InlineLoading } from "@opticule/ds"`}
      />

      <DocSection title="Usage guidelines">
        <UsageBlock
          use={[
            { text: "Use Alert for persistent, in-page status messages that require user awareness." },
            { text: "Use Spinner when content is loading and the layout is not yet known." },
            { text: "Use ProgressBar when the loading progress is known or estimable." },
            { text: "Use InlineLoading inside forms, tables, or cards for localized async feedback." },
            { text: "Use dismissible Alerts when the message is temporary or optional." },
          ]}
          avoid={[
            { text: "Don't use Alert for validation errors on a form field — use Input's error prop instead." },
            { text: "Don't use Spinner for progress that can be measured — use ProgressBar." },
            { text: "Don't show a global full-page Spinner for small, localized operations." },
            { text: "Don't auto-dismiss error Alerts — errors require user acknowledgment." },
          ]}
        />
      </DocSection>

      {/* Alert */}
      <DocSection title="Alert" description="In-page status banners for info, success, warning, error, and neutral messages.">
        <DemoBlock label="variants" vertical>
          <Alert variant="info">
            <AlertTitle>Info</AlertTitle>
            <AlertDescription>Your session will expire in 30 minutes. Save your work.</AlertDescription>
          </Alert>
          <Alert variant="success">
            <AlertTitle>Success</AlertTitle>
            <AlertDescription>Your changes have been saved successfully.</AlertDescription>
          </Alert>
          <Alert variant="warning">
            <AlertTitle>Warning</AlertTitle>
            <AlertDescription>This action will affect 24 other users in your organization.</AlertDescription>
          </Alert>
          <Alert variant="error">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>Failed to connect to the server. Check your network and try again.</AlertDescription>
          </Alert>
          <Alert variant="neutral">
            <AlertTitle>Update available</AlertTitle>
            <AlertDescription>Opticule DS v2.1.0 is available. Restart to apply.</AlertDescription>
          </Alert>
        </DemoBlock>
        <DemoBlock label="dismissible" vertical>
          <Alert variant="info" onClose={() => {}}>
            <AlertTitle>Dismissible alert</AlertTitle>
            <AlertDescription>Click the × to dismiss this alert.</AlertDescription>
          </Alert>
          <Alert variant="warning" onClose={() => {}}>
            <AlertDescription>Dismissible without a title — just a message.</AlertDescription>
          </Alert>
        </DemoBlock>
        <DemoBlock label="without icon" vertical>
          <Alert variant="success" showIcon={false}>
            <AlertTitle>No icon</AlertTitle>
            <AlertDescription>This alert renders without the default icon.</AlertDescription>
          </Alert>
        </DemoBlock>
        <PropsTable
          title="Alert props"
          rows={[
            { name: "variant",  type: `"info" | "success" | "warning" | "error" | "neutral"`, default: `"info"`, description: "Sets the icon, color, and semantic meaning of the alert." },
            { name: "onClose",  type: "() => void", description: "When provided, renders a dismiss (×) button." },
            { name: "showIcon", type: "boolean", default: "true", description: "Show or hide the leading status icon." },
            { name: "children", type: "ReactNode", required: true, description: "Use AlertTitle and AlertDescription subcomponents." },
          ]}
        />
      </DocSection>

      {/* Spinner */}
      <DocSection title="Spinner" description="Indeterminate loading indicator. Use when content is loading and progress is unknown.">
        <DemoBlock label="sizes">
          <Spinner size="xs" />
          <Spinner size="sm" />
          <Spinner size="md" />
          <Spinner size="lg" />
          <Spinner size="xl" />
        </DemoBlock>
        <DemoBlock label="colors">
          <Spinner color="current" />
          <Spinner color="brand" />
          <Spinner color="primary" />
          <Spinner color="muted" />
        </DemoBlock>
        <DemoBlock label="in context — loading buttons and states">
          <Button loading>Saving…</Button>
          <div className="flex items-center gap-2 text-sm text-foreground/60">
            <Spinner size="sm" color="brand" />
            <span>Loading design tokens…</span>
          </div>
          <div className="flex flex-col items-center gap-2 p-6 border border-border rounded-xl bg-background w-48">
            <Spinner size="lg" color="brand" />
            <span className="text-sm text-foreground/50">Loading content</span>
          </div>
        </DemoBlock>
        <PropsTable
          title="Spinner props"
          rows={[
            { name: "size",  type: `"xs" | "sm" | "md" | "lg" | "xl"`,           default: `"md"`,      description: "Spinner diameter." },
            { name: "color", type: `"current" | "brand" | "primary" | "muted"`,   default: `"current"`, description: "Stroke color — 'current' inherits from CSS color." },
          ]}
        />
      </DocSection>

      {/* Progress Bar */}
      <DocSection title="Progress Bar" description="Determinate and indeterminate progress indicators for file uploads, form steps, and loading sequences.">
        <DemoBlock label="colors" vertical>
          <div className="w-full max-w-md space-y-3">
            <ProgressBar value={75} color="brand" label="Brand (orange)" showValue />
            <ProgressBar value={60} color="success" label="Success (purple)" showValue />
            <ProgressBar value={45} color="info" label="Info (blue)" showValue />
            <ProgressBar value={30} color="warning" label="Warning" showValue />
            <ProgressBar value={85} color="error" label="Error" showValue />
            <ProgressBar value={50} color="neutral" label="Neutral" showValue />
          </div>
        </DemoBlock>
        <DemoBlock label="sizes" vertical>
          <div className="w-full max-w-md space-y-3">
            <ProgressBar value={progress} size="xs" label="Extra small (xs)" />
            <ProgressBar value={progress} size="sm" label="Small (sm)" />
            <ProgressBar value={progress} size="md" label="Medium (md)" />
            <ProgressBar value={progress} size="lg" label="Large (lg)" />
          </div>
          <div className="flex items-center gap-3">
            <Button size="sm" variant="outline" onClick={() => setProgress(Math.max(0, progress - 10))}>−10</Button>
            <span className="text-sm text-foreground/60 tabular-nums w-12 text-center">{progress}%</span>
            <Button size="sm" variant="outline" onClick={() => setProgress(Math.min(100, progress + 10))}>+10</Button>
          </div>
        </DemoBlock>
        <DemoBlock label="indeterminate" vertical>
          <div className="w-full max-w-md">
            <ProgressBar indeterminate label="Processing…" />
          </div>
        </DemoBlock>
        <PropsTable
          title="ProgressBar props"
          rows={[
            { name: "value",        type: "number",                                                          description: "Progress 0–100. Omit when indeterminate." },
            { name: "indeterminate",type: "boolean",                default: "false",                        description: "Shows an animated infinite progress." },
            { name: "size",         type: `"xs" | "sm" | "md" | "lg"`,             default: `"md"`,         description: "Track height." },
            { name: "color",        type: `"brand" | "success" | "info" | "warning" | "error" | "neutral"`, default: `"brand"`, description: "Fill color." },
            { name: "label",        type: "string",                                                          description: "Text label above the bar." },
            { name: "showValue",    type: "boolean",                default: "false",                        description: "Show the percentage value after the bar." },
          ]}
        />
      </DocSection>

      {/* Inline Loading */}
      <DocSection title="Inline Loading" description="Compact status indicator for inline use — save states, form submissions, and background tasks.">
        <DemoBlock label="all states" vertical>
          <InlineLoading status="active" description="Saving changes…" />
          <InlineLoading status="finished" description="Changes saved!" />
          <InlineLoading status="error" description="Failed to save. Please try again." />
          <InlineLoading status="inactive" description="Ready" />
        </DemoBlock>
        <DemoBlock label="interactive demo — simulated save" vertical>
          <div className="flex items-center gap-4">
            <Button size="sm" onClick={simulateLoad} disabled={inlineStatus === "active"}>
              Save Changes
            </Button>
            {inlineStatus !== "inactive" && (
              <InlineLoading
                status={inlineStatus}
                description={
                  inlineStatus === "active" ? "Saving…" :
                  inlineStatus === "finished" ? "Saved!" :
                  "Save failed"
                }
              />
            )}
          </div>
        </DemoBlock>
        <DemoBlock label="in context — auto-save bar" vertical>
          <div className="w-full max-w-sm rounded-lg border border-border p-4 flex items-center justify-between bg-background">
            <span className="text-sm text-foreground/70">Auto-save</span>
            <InlineLoading status="finished" description="Saved just now" />
          </div>
          <div className="w-full max-w-sm rounded-lg border border-border p-4 flex items-center justify-between bg-background">
            <span className="text-sm text-foreground/70">Syncing…</span>
            <InlineLoading status="active" description="Uploading file…" />
          </div>
        </DemoBlock>
        <PropsTable
          title="InlineLoading props"
          rows={[
            { name: "status",      type: `"active" | "finished" | "error" | "inactive"`, required: true, description: "Controls the icon and visual state shown." },
            { name: "description", type: "string",  description: "Short status text beside the icon." },
          ]}
        />
      </DocSection>

      {/* Accessibility */}
      <DocSection title="Accessibility">
        <AccessibilitySection>
          <A11yPoint>Alert uses <IC>role="alert"</IC> so screen readers announce new or updated alerts automatically without requiring focus.</A11yPoint>
          <A11yPoint>Spinner has <IC>aria-label="Loading"</IC> and <IC>role="status"</IC>. It renders a visually-hidden "Loading" text for screen readers.</A11yPoint>
          <A11yPoint>ProgressBar sets <IC>role="progressbar"</IC> with <IC>aria-valuenow</IC>, <IC>aria-valuemin</IC>, and <IC>aria-valuemax</IC>. Indeterminate bars omit <IC>aria-valuenow</IC>.</A11yPoint>
          <A11yPoint>InlineLoading uses <IC>role="status"</IC> so state changes (active → finished → error) are announced as live region updates.</A11yPoint>
          <A11yPoint>Alert's dismiss button has <IC>aria-label="Dismiss alert"</IC> for screen reader users who may not see the × icon.</A11yPoint>
        </AccessibilitySection>
      </DocSection>
    </div>
  );
}
