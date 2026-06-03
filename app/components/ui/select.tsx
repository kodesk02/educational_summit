import React from "react";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: { value: string; label: string }[];
}

export default function Select({
  label,
  options,
  className = "",
  ...props
}: SelectProps) {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label className="text-xs text-summit-muted tracking-wide">
          {label}
        </label>
      )}
      <select
        className={`
          w-full px-4 py-3 rounded-sm text-sm
          bg-[#0d1f1a] border border-summit-border
          text-summit-text
          focus:outline-none focus:border-white/50 focus:ring-1 focus:ring-white/20
          transition-all duration-200 cursor-pointer
          ${className}
        `}
        {...props}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
