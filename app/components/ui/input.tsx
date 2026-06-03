import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export default function Input({ label, error, className = "", ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label className="text-xs text-summit-muted tracking-wide">{label}</label>
      )}
      <input
        className={`
          w-full px-4 py-3 rounded-sm text-sm
          bg-[#0d1f1a] border border-summit-border
          text-summit-text placeholder:text-summit-muted/60
          focus:outline-none focus:border-white/50 focus:ring-1 focus:ring-white/20
          transition-all duration-200
          ${error ? "border-red-500/60" : ""}
          ${className}
        `}
        {...props}
      />
      {error && <span className="text-xs text-red-400">{error}</span>}
    </div>
  );
}