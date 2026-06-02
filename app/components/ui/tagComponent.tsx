interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "gold" | "green" | "outline";
  className?: string;
}

const variantStyles = {
  default: "bg-summit-card border border-summit-border text-summit-muted",
  gold: "bg-summit-gold/10 border border-summit-gold/40 text-summit-gold",
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