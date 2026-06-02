interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  light?: boolean;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  const alignClass =
    align === "center"
      ? "text-center items-center"
      : align === "right"
      ? "text-right items-end"
      : "text-left items-start";

  return (
    <div className={`flex flex-col gap-3 ${alignClass}`}>
      {label && (
        <span className="text-xs font-mono tracking-[0.2em] uppercase text-summit-gold">
          {label}
        </span>
      )}
      <h2
        className={`font-display text-3xl md:text-4xl font-700 leading-tight ${
          light ? "text-white" : "text-[#2c4a52]"
        }`}
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-summit-muted text-sm md:text-base max-w-xl leading-relaxed">
          {subtitle}
        </p>
      )}
      <div
        className={`gold-divider mt-1 ${
          align === "center" ? "mx-auto" : align === "right" ? "ml-auto" : ""
        }`}
      />
    </div>
  );
}