import { FileUpload } from "../../inputs/FileUpload";
import {
  PageHeader,
  DocSection,
  DemoBlock,
  UsageBlock,
  PropsTable,
  KeyboardTable,
  AccessibilitySection,
  A11yPoint,
  IC,
  AnatomyList,
} from "./DocComponents";

export function FileUploadShowcase() {
  return (
    <div className="space-y-16">
      <PageHeader
        title="File Upload"
        description="A drag-and-drop file uploader with visual drop feedback, per-file validation, a preview list with remove actions, and full keyboard support. Handles single or multiple files, MIME-type filtering, and max-size enforcement."
        badges={[
          { label: "Stable", color: "green" },
          { label: "Accessible", color: "blue" },
          { label: "v1.0.0", color: "gray" },
        ]}
        importPath={`import { FileUpload } from "@opticule/ds"`}
      />

      <DocSection title="Anatomy">
        <AnatomyList items={[
          { number: 1, label: "Drop zone", description: "The interactive area that accepts dragged files. Shows a dashed border and transitions to an active state on hover/drag." },
          { number: 2, label: "Upload icon", description: "Visual cue indicating the component's function. Changes color on drag-over." },
          { number: 3, label: "Label", description: "Describes what the user should do. Also serves as the aria-label for the button role." },
          { number: 4, label: "Helper text", description: "Shows accepted formats and max file size constraints." },
          { number: 5, label: "File list", description: "Previews selected files with name, size, and a remove button. Displays per-file errors for validation failures." },
          { number: 6, label: "Error state", description: "Shown when a file exceeds maxSize or when an external error prop is passed." },
        ]} />
      </DocSection>

      <DocSection title="Usage guidelines">
        <UsageBlock
          use={[
            { text: "Use for tasks that require the user to upload one or more files (images, documents, exports)." },
            { text: "Always set accept to restrict files to relevant MIME types — reduces user error." },
            { text: "Set maxSize to prevent large uploads and provide clear feedback when a file is rejected." },
            { text: "Use multiple when the user needs to upload several files in one step." },
            { text: "Place FileUpload inside a Form with a submit button — don't auto-upload on select." },
          ]}
          avoid={[
            { text: "Don't use FileUpload for single-field inline image selection (use a styled input instead)." },
            { text: "Don't hide the file list — users need confirmation of what they've selected." },
            { text: "Don't strip the max-size constraint without a server-side fallback validation." },
            { text: "Don't use FileUpload for required fields without validating selection before form submission." },
          ]}
        />
      </DocSection>

      <DocSection title="Variants & States">
        <DemoBlock label="default — single file" vertical>
          <div className="w-full max-w-md">
            <FileUpload
              label="Upload a document"
              description="PDF, DOCX, or TXT supported"
              accept="application/pdf,application/msword,text/plain,.pdf,.doc,.docx,.txt"
            />
          </div>
        </DemoBlock>

        <DemoBlock label="multiple files with max size" vertical>
          <div className="w-full max-w-md">
            <FileUpload
              label="Upload images"
              multiple
              accept="image/*,.png,.jpg,.jpeg,.webp,.gif"
              maxSize={5 * 1024 * 1024}
              description="PNG, JPG, WebP, or GIF · Max 5 MB each"
            />
          </div>
        </DemoBlock>

        <DemoBlock label="disabled state" vertical>
          <div className="w-full max-w-md">
            <FileUpload
              label="Upload disabled"
              disabled
              description="This uploader is currently unavailable"
            />
          </div>
        </DemoBlock>

        <DemoBlock label="with external error" vertical>
          <div className="w-full max-w-md">
            <FileUpload
              label="Upload profile photo"
              accept="image/png,image/jpeg,.png,.jpg"
              error="Only JPEG and PNG images are accepted for profile photos."
            />
          </div>
        </DemoBlock>
      </DocSection>

      <DocSection title="API Reference">
        <PropsTable
          title="FileUpload props"
          rows={[
            { name: "label", type: "string", default: `"Upload files"`, description: "Text shown inside the drop zone and used as the button's aria-label." },
            { name: "description", type: "string", description: "Helper text shown below the label — use to describe accepted formats." },
            { name: "accept", type: "Record<string, string[]>", description: "MIME type to extension map. e.g. { 'image/*': ['.png', '.jpg'] }" },
            { name: "multiple", type: "boolean", default: "false", description: "Allow selecting multiple files." },
            { name: "maxSize", type: "number", description: "Max file size in bytes. Files exceeding this show a per-file error." },
            { name: "onChange", type: "(files: File[]) => void", description: "Called with the array of valid (non-errored) files after each change." },
            { name: "error", type: "string", description: "External error message shown below the drop zone." },
            { name: "disabled", type: "boolean", default: "false", description: "Disables all interaction." },
          ]}
        />
      </DocSection>

      <DocSection title="Keyboard Interaction">
        <KeyboardTable rows={[
          { key: "Tab", description: "Focus the drop zone" },
          { key: "Enter / Space", description: "Open the native file picker dialog" },
          { key: "Tab (in file list)", description: "Move focus to each file's remove button" },
          { key: "Enter / Space (on remove button)", description: "Remove the focused file from the list" },
        ]} />
      </DocSection>

      <DocSection title="Accessibility">
        <AccessibilitySection>
          <A11yPoint>The drop zone has <IC>role="button"</IC> and uses the <IC>label</IC> prop as its <IC>aria-label</IC> — screen readers announce it as an interactive button.</A11yPoint>
          <A11yPoint>The file list uses <IC>aria-live="polite"</IC> so screen readers announce additions and removals without interrupting the user.</A11yPoint>
          <A11yPoint>Each file's remove button has <IC>aria-label="Remove [filename]"</IC> so its purpose is unambiguous.</A11yPoint>
          <A11yPoint>Per-file errors are rendered in the list item alongside the file name — not in a separate live region — so context is preserved.</A11yPoint>
          <A11yPoint>The hidden <IC>&lt;input type="file"&gt;</IC> is visually hidden but not <IC>display:none</IC>, ensuring it remains accessible to assistive technology.</A11yPoint>
        </AccessibilitySection>
      </DocSection>
    </div>
  );
}
