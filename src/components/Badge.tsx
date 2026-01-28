import { ReactNode } from "react";

export interface BadgeProps {
  children: ReactNode;
  variant?:
    | "default"
    | "gradient"
    | "success"
    | "warning"
    | "error"
    | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  size = "md",
  className = "",
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-lg whitespace-nowrap";

  const variantStyles = {
    default: "bg-foreground text-background",
    gradient:
      "bg-gradient-to-r from-brand-purple via-brand-folly to-brand-orange text-white",
    success: "bg-brand-folly/20 text-brand-folly",
    warning: "bg-brand-orange/20 text-brand-orange",
    error: "bg-brand-folly/20 text-brand-folly",
    outline: "border-2 border-border bg-transparent text-foreground",
  };

  const sizeStyles = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-2.5 py-1 text-sm",
    lg: "px-3 py-1.5 text-base",
  };

  return (
    <span
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </span>
  );
}
