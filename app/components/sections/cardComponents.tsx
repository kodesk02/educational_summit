import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  highlighted?: boolean;
  hover?: boolean;
}

export default function Card({
  children,
  className = "",
  highlighted = false,
  hover = true,
}: CardProps) {
  return (
    <div
      className={`
        rounded-sm border p-5
        ${highlighted
          ? "bg-summit-green border-summit-accent/60"
          : "bg-summit-card border-summit-border"
        }
        ${hover ? "hover:border-white/40 transition-all duration-300" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}