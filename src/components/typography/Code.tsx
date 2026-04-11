/**
 * Code — inline and block code display.
 *
 * Code: inline monospace snippet.
 * CodeBlock: multi-line code block with optional language label and copy button.
 *
 * @example
 * <Code>npm install @opticule/ds</Code>
 *
 * <CodeBlock language="tsx" showLineNumbers>
 *   {`const Button = () => <button>Click me</button>;`}
 * </CodeBlock>
 */

import { forwardRef, useState, type HTMLAttributes } from "react";
import { Copy, Check } from "lucide-react";
import { cn } from "../../lib/utils";

// ---------------------------------------------------------------------------
// Code (inline)
// ---------------------------------------------------------------------------

export const Code = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => (
    <code
      ref={ref}
      className={cn(
        "relative rounded-md bg-muted-light/50 px-1.5 py-0.5",
        "font-mono text-[0.875em] text-brand-orange",
        "border border-border/50",
        className,
      )}
      {...props}
    />
  ),
);
Code.displayName = "Code";

// ---------------------------------------------------------------------------
// CodeBlock
// ---------------------------------------------------------------------------

export interface CodeBlockProps extends HTMLAttributes<HTMLPreElement> {
  language?: string;
  showLineNumbers?: boolean;
  showCopy?: boolean;
}

export const CodeBlock = forwardRef<HTMLPreElement, CodeBlockProps>(
  (
    { language, showLineNumbers = false, showCopy = true, className, children, ...props },
    ref,
  ) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
      const text =
        typeof children === "string"
          ? children
          : (children as { props?: { children?: string } })?.props?.children ?? "";
      navigator.clipboard.writeText(String(text)).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    };

    return (
      <div className="group relative my-4 overflow-hidden rounded-lg border border-border">
        {/* Header bar */}
        {(language || showCopy) && (
          <div className="flex items-center justify-between bg-muted-light/30 px-4 py-2 border-b border-border">
            {language && (
              <span className="text-xs font-mono text-foreground/50 uppercase tracking-wider">
                {language}
              </span>
            )}
            {showCopy && (
              <button
                type="button"
                onClick={handleCopy}
                aria-label={copied ? "Copied!" : "Copy code"}
                className={cn(
                  "ml-auto flex items-center gap-1.5 text-xs px-2 py-1 rounded-md transition-colors",
                  "text-foreground/50 hover:text-foreground hover:bg-muted-light/50",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/50",
                )}
              >
                {copied ? (
                  <><Check className="size-3.5 text-brand-purple" /> Copied</>
                ) : (
                  <><Copy className="size-3.5" /> Copy</>
                )}
              </button>
            )}
          </div>
        )}

        {/* Code content */}
        <pre
          ref={ref}
          className={cn(
            "overflow-x-auto p-4 text-sm font-mono leading-relaxed text-foreground",
            "bg-background",
            showLineNumbers && "[counter-reset:line]",
            className,
          )}
          {...props}
        >
          {children}
        </pre>
      </div>
    );
  },
);
CodeBlock.displayName = "CodeBlock";
