/**
 * Stepper / Wizard — a multi-step progress indicator.
 *
 * Features:
 * - Horizontal and vertical orientations
 * - Three step states: complete, current, upcoming
 * - Optional step descriptions
 * - Connector lines between steps
 * - Accessible: aria-current="step" on active step
 *
 * @example
 * <Stepper currentStep={1} steps={[
 *   { label: "Account", description: "Basic info" },
 *   { label: "Profile", description: "Your details" },
 *   { label: "Review", description: "Confirm" },
 * ]} />
 */

import { forwardRef, type HTMLAttributes } from "react";
import { Check } from "lucide-react";
import { cn } from "../../lib/utils";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface StepItem {
  label: string;
  description?: string;
  icon?: React.ReactNode;
}

export type StepperOrientation = "horizontal" | "vertical";

export interface StepperProps extends HTMLAttributes<HTMLOListElement> {
  steps: StepItem[];
  /** Zero-based index of the active step */
  currentStep: number;
  orientation?: StepperOrientation;
}

export interface StepProps extends HTMLAttributes<HTMLLIElement> {
  label: string;
  description?: string;
  stepNumber: number;
  isComplete: boolean;
  isCurrent: boolean;
  isLast: boolean;
  orientation: StepperOrientation;
  customIcon?: React.ReactNode;
}

// ---------------------------------------------------------------------------
// Step (internal)
// ---------------------------------------------------------------------------

function Step({
  label,
  description,
  stepNumber,
  isComplete,
  isCurrent,
  isLast,
  orientation,
  customIcon,
  className,
  ...props
}: StepProps) {
  return (
    <li
      aria-current={isCurrent ? "step" : undefined}
      className={cn(
        "flex",
        orientation === "horizontal" ? "flex-col items-center flex-1" : "flex-row gap-4",
        !isLast && orientation === "horizontal" && "relative",
        className,
      )}
      {...props}
    >
      {/* Connector line — horizontal */}
      {!isLast && orientation === "horizontal" && (
        <div
          className={cn(
            "absolute top-5 left-1/2 w-full h-px -translate-y-1/2",
            isComplete ? "bg-brand-orange" : "bg-border",
          )}
          aria-hidden
        />
      )}

      <div className={cn("flex", orientation === "vertical" && "flex-col items-center gap-1")}>
        {/* Circle indicator */}
        <div
          className={cn(
            "relative z-10 flex size-10 items-center justify-center rounded-full border-2 transition-all shrink-0",
            isComplete
              ? "bg-brand-orange border-brand-orange text-white"
              : isCurrent
              ? "bg-background border-brand-orange text-brand-orange"
              : "bg-background border-border text-foreground/50",
          )}
        >
          {isComplete ? (
            customIcon ?? <Check className="size-5" aria-hidden />
          ) : (
            <span className="text-sm font-medium">{stepNumber}</span>
          )}
        </div>

        {/* Vertical connector */}
        {!isLast && orientation === "vertical" && (
          <div
            className={cn("w-px flex-1 min-h-[2rem]", isComplete ? "bg-brand-orange" : "bg-border")}
            aria-hidden
          />
        )}
      </div>

      {/* Label + description */}
      <div
        className={cn(
          orientation === "horizontal" ? "mt-2 text-center" : "pb-6",
        )}
      >
        <p
          className={cn(
            "text-sm font-medium",
            isCurrent ? "text-foreground" : isComplete ? "text-foreground/75" : "text-foreground/50",
          )}
        >
          {label}
        </p>
        {description && (
          <p className="text-xs text-foreground/50 mt-0.5">{description}</p>
        )}
      </div>
    </li>
  );
}

// ---------------------------------------------------------------------------
// Stepper
// ---------------------------------------------------------------------------

export const Stepper = forwardRef<HTMLOListElement, StepperProps>(
  ({ steps, currentStep, orientation = "horizontal", className, ...props }, ref) => (
    <ol
      ref={ref}
      aria-label="Progress"
      className={cn(
        orientation === "horizontal"
          ? "flex items-start w-full"
          : "flex flex-col",
        className,
      )}
      {...props}
    >
      {steps.map((step, index) => (
        <Step
          key={index}
          label={step.label}
          description={step.description}
          stepNumber={index + 1}
          isComplete={index < currentStep}
          isCurrent={index === currentStep}
          isLast={index === steps.length - 1}
          orientation={orientation}
          customIcon={step.icon}
        />
      ))}
    </ol>
  ),
);
Stepper.displayName = "Stepper";
