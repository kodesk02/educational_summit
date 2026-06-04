"use client";

import { useState } from "react";

const countries = [
  { name: "Nigeria", flag: "🇳🇬" },
  { name: "South Africa", flag: "🇿🇦" },
  { name: "Kenya", flag: "🇰🇪" },
  { name: "Ghana", flag: "🇬🇭" },
  { name: "Ethiopia", flag: "🇪🇹" },
  { name: "Egypt", flag: "🇪🇬" },
  { name: "Tanzania", flag: "🇹🇿" },
  { name: "Uganda", flag: "🇺🇬" },
  { name: "Rwanda", flag: "🇷🇼" },
  { name: "Senegal", flag: "🇸🇳" },
  { name: "Côte d'Ivoire", flag: "🇨🇮" },
  { name: "Cameroon", flag: "🇨🇲" },
  { name: "Zimbabwe", flag: "🇿🇼" },
  { name: "Zambia", flag: "🇿🇲" },
  { name: "Morocco", flag: "🇲🇦" },
  { name: "Tunisia", flag: "🇹🇳" },
  { name: "Algeria", flag: "🇩🇿" },
  { name: "Angola", flag: "🇦🇴" },
  { name: "Mozambique", flag: "🇲🇿" },
  { name: "Botswana", flag: "🇧🇼" },
  { name: "Namibia", flag: "🇳🇦" },
  { name: "Malawi", flag: "🇲🇼" },
  { name: "Mali", flag: "🇲🇱" },
  { name: "Burkina Faso", flag: "🇧🇫" },
  { name: "Niger", flag: "🇳🇪" },
  { name: "Chad", flag: "🇹🇩" },
  { name: "Sudan", flag: "🇸🇩" },
  { name: "DR Congo", flag: "🇨🇩" },
  { name: "Gabon", flag: "🇬🇦" },
  { name: "Togo", flag: "🇹🇬" },
  { name: "Benin", flag: "🇧🇯" },
  { name: "Sierra Leone", flag: "🇸🇱" },
  { name: "Liberia", flag: "🇱🇷" },
  { name: "Guinea", flag: "🇬🇳" },
  { name: "Mauritius", flag: "🇲🇺" },
  { name: "Eswatini", flag: "🇸🇿" },
  { name: "Lesotho", flag: "🇱🇸" },
  { name: "Djibouti", flag: "🇩🇯" },
  { name: "Eritrea", flag: "🇪🇷" },
  { name: "Libya", flag: "🇱🇾" },
  { name: "Cape Verde", flag: "🇨🇻" },
  { name: "Gambia", flag: "🇬🇲" },
  { name: "Burundi", flag: "🇧🇮" },
  { name: "South Sudan", flag: "🇸🇸" },
];

export default function AfricaTicker() {
  const [paused, setPaused] = useState(false);

  const trackStyle: React.CSSProperties = {
    display: "flex",
    width: "max-content",
    animation: "ticker-scroll 55s linear infinite",
    animationPlayState: paused ? "paused" : "running",
  };

  return (
    <>
      <style>{`
        @keyframes ticker-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <div className="w-full overflow-hidden">
        <div
          style={trackStyle}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {[...countries, ...countries].map((c, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 px-8 py-3.5 bg-[#01183A] transition-colors cursor-default"
            >
              <span className="text-xl leading-none">{c.flag}</span>
              <span className="text-xs text-white hover:text-summit-text transition-colors">
                {c.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
