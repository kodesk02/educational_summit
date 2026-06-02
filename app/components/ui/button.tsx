import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

type ButtonVariant = "primary" | "outline" | "ghost" | "gold";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
  showArrow?: boolean;
  href?: string;
  fullWidth?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-summit-accent text-white border border-summit-accent hover:bg-transparent hover:text-summit-accent transition-all duration-300",
  outline:
    "bg-transparent text-summit-text border border-summit-border hover:border-summit-gold hover:text-summit-gold transition-all duration-300",
  ghost:
    "bg-white text-[#2c4a52] hover:text-summit-text transition-all duration-300",
  gold:
    "bg-gradient-to-r from-[#2c4a52] to-[#2c4a52] text-[#fff] font-semibold hover:opacity-90 transition-all duration-300",
};

export default function Button({
  variant = "primary",
  children,
  showArrow = false,
  href,
  fullWidth = false,
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-sm text-sm font-medium tracking-wide cursor-pointer focus:outline-none focus:ring-2 focus:ring-summit-gold/40";
  const classes = `${base} ${variantStyles[variant]} ${fullWidth ? "w-full" : ""} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
        {showArrow && <ArrowRight size={16} />}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
      {showArrow && <ArrowRight size={16} />}
    </button>
  );
}