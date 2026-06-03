interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "gold" | "green" | "outline";
  className?: string;
}

const variantStyles = {
  default: "bg-summit-card border border-summit-border text-summit-muted",
  gold: "bg-white/10 border border-white/40 text-white",
  green: "bg-summit-accent/20 border border-summit-accent/40 text-summit-text",
  outline: "bg-transparent border border-summit-border text-summit-text",
};

export default function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-4 py-2 rounded-sm text-xs font-medium tracking-wide ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}