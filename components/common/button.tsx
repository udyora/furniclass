import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  ariaLabel?: string;
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  ariaLabel,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-quicksand font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-xs cursor-pointer";

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-base sm:text-lg",
  };

  const variantStyles = {
    primary:
      "bg-primary text-white hover:bg-primary-hover hover:bg-white hover:border-primary hover:text-primary shadow-xs border border-transparent",
    secondary:
      "border border-primary text-primary bg-transparent hover:bg-primary hover:text-white",
    ghost:
      "text-dark hover:text-primary bg-transparent hover:bg-bg-card border border-transparent",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} aria-label={ariaLabel} {...props}>
      {children}
    </button>
  );
}
