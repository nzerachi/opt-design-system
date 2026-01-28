import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "text" | "gradient";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-lg font-medium transition-all focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50 disabled:cursor-not-allowed";

  const variantStyles = {
    primary: "bg-foreground text-background hover:opacity-90 active:opacity-80",
    secondary:
      "bg-secondary text-secondary-foreground border border-border hover:bg-muted-light active:bg-accent",
    outline:
      "bg-transparent border border-foreground text-foreground hover:bg-foreground hover:text-background active:bg-foreground/90",
    text: "bg-transparent text-foreground hover:underline active:opacity-70",
    gradient:
      "bg-gradient-to-r from-brand-purple via-brand-folly to-brand-orange text-white hover:opacity-90 active:opacity-80 shadow-lg",
  };

  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

export function PrimaryButton(props: Omit<ButtonProps, "variant">) {
  return <Button variant="primary" {...props} />;
}

export function SecondaryButton(props: Omit<ButtonProps, "variant">) {
  return <Button variant="secondary" {...props} />;
}

export function OutlineButton(props: Omit<ButtonProps, "variant">) {
  return <Button variant="outline" {...props} />;
}

export function TextButton(props: Omit<ButtonProps, "variant">) {
  return <Button variant="text" {...props} />;
}

export function GradientButton(props: Omit<ButtonProps, "variant">) {
  return <Button variant="gradient" {...props} />;
}
