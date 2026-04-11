/**
 * FileUpload — a drag-and-drop file uploader with preview list.
 *
 * Features:
 * - Drag over → visual feedback
 * - accept, multiple, maxSize validation
 * - File list with name, size, remove action
 * - Error messages per file
 * - Accessible: keyboard-operable, ARIA live region for errors
 *
 * @example
 * <FileUpload
 *   accept={{ "image/*": [".png", ".jpg", ".webp"] }}
 *   multiple
 *   maxSize={5 * 1024 * 1024}
 *   onChange={(files) => setFiles(files)}
 * />
 */

import {
  forwardRef,
  useCallback,
  useRef,
  useState,
  type DragEvent,
  type InputHTMLAttributes,
} from "react";
import { Upload, X, File as FileIcon, AlertCircle } from "lucide-react";
import { cn } from "../../lib/utils";
import { useId } from "../../hooks/useId";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface FileWithError {
  file: File;
  error?: string;
}

export interface FileUploadProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "onChange" | "value"> {
  onChange?: (files: File[]) => void;
  maxSize?: number;
  label?: string;
  description?: string;
  error?: string;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function formatBytes(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

// ---------------------------------------------------------------------------
// FileUpload
// ---------------------------------------------------------------------------

export const FileUpload = forwardRef<HTMLInputElement, FileUploadProps>(
  (
    {
      onChange,
      maxSize,
      label = "Upload files",
      description,
      error: externalError,
      accept,
      multiple = false,
      disabled = false,
      className,
      id: idProp,
      ...props
    },
    forwardedRef,
  ) => {
    const autoId = useId("file-upload");
    const id = idProp ?? autoId;
    const inputRef = useRef<HTMLInputElement>(null);
    const [dragging, setDragging] = useState(false);
    const [files, setFiles] = useState<FileWithError[]>([]);

    const processFiles = useCallback(
      (incoming: File[]) => {
        const processed: FileWithError[] = incoming.map((file) => {
          if (maxSize && file.size > maxSize) {
            return {
              file,
              error: `File too large. Max size is ${formatBytes(maxSize)}.`,
            };
          }
          return { file };
        });
        const all = multiple ? [...files, ...processed] : processed;
        setFiles(all);
        onChange?.(all.filter((f) => !f.error).map((f) => f.file));
      },
      [files, maxSize, multiple, onChange],
    );

    const handleDrop = useCallback(
      (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDragging(false);
        if (disabled) return;
        const dropped = Array.from(e.dataTransfer.files);
        processFiles(dropped);
      },
      [disabled, processFiles],
    );

    const handleInputChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const selected = Array.from(e.target.files ?? []);
        processFiles(selected);
        e.target.value = "";
      },
      [processFiles],
    );

    const removeFile = useCallback(
      (index: number) => {
        const next = files.filter((_, i) => i !== index);
        setFiles(next);
        onChange?.(next.filter((f) => !f.error).map((f) => f.file));
      },
      [files, onChange],
    );

    return (
      <div className={cn("flex flex-col gap-3", className)}>
        {/* Drop zone */}
        <div
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
          onDrop={handleDrop}
          onClick={() => !disabled && inputRef.current?.click()}
          onKeyDown={(e) => {
            if ((e.key === "Enter" || e.key === " ") && !disabled) {
              e.preventDefault();
              inputRef.current?.click();
            }
          }}
          role="button"
          aria-label={label}
          tabIndex={disabled ? -1 : 0}
          aria-disabled={disabled}
          className={cn(
            "flex flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed",
            "p-8 text-center transition-all cursor-pointer",
            dragging
              ? "border-brand-orange bg-brand-orange/10 scale-[1.01]"
              : "border-border hover:border-brand-orange/50 hover:bg-muted-light/20",
            disabled && "opacity-50 cursor-not-allowed",
          )}
        >
          <div className={cn(
            "flex size-12 items-center justify-center rounded-full",
            dragging ? "bg-brand-orange/20 text-brand-orange" : "bg-muted-light/50 text-foreground/50",
          )}>
            <Upload className="size-5" aria-hidden />
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">
              {dragging ? "Drop files here" : label}
            </p>
            {description && (
              <p className="text-xs text-foreground/60 mt-1">{description}</p>
            )}
            {!description && (
              <p className="text-xs text-foreground/50 mt-1">
                Drag & drop or <span className="text-brand-orange underline">browse</span>
                {maxSize && ` · Max ${formatBytes(maxSize)}`}
              </p>
            )}
          </div>
        </div>

        {/* Hidden input */}
        <input
          ref={(node) => {
            inputRef.current = node;
            if (typeof forwardedRef === "function") forwardedRef(node);
            else if (forwardedRef) forwardedRef.current = node;
          }}
          id={id}
          type="file"
          className="sr-only"
          accept={accept as string}
          multiple={multiple}
          disabled={disabled}
          onChange={handleInputChange}
          {...props}
        />

        {/* External error */}
        {externalError && (
          <p role="alert" className="flex items-center gap-1.5 text-xs text-brand-folly">
            <AlertCircle className="size-3.5 shrink-0" aria-hidden />
            {externalError}
          </p>
        )}

        {/* File list */}
        {files.length > 0 && (
          <ul className="flex flex-col gap-2" aria-label="Selected files" aria-live="polite">
            {files.map(({ file, error: fileError }, i) => (
              <li
                key={i}
                className={cn(
                  "flex items-center gap-3 rounded-lg border px-3 py-2",
                  fileError ? "border-brand-folly/40 bg-brand-folly/5" : "border-border bg-background",
                )}
              >
                <FileIcon
                  className={cn("size-4 shrink-0", fileError ? "text-brand-folly" : "text-foreground/50")}
                  aria-hidden
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">{file.name}</p>
                  {fileError ? (
                    <p className="text-xs text-brand-folly">{fileError}</p>
                  ) : (
                    <p className="text-xs text-foreground/50">{formatBytes(file.size)}</p>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => removeFile(i)}
                  aria-label={`Remove ${file.name}`}
                  className="shrink-0 text-foreground/50 hover:text-brand-folly transition-colors focus:outline-none"
                >
                  <X className="size-4" aria-hidden />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  },
);
FileUpload.displayName = "FileUpload";
