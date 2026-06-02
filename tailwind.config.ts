import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        summit: {
          dark: "#0d1f1a",
          darker: "#091510",
          green: "#1a3a2e",
          olive: "#4a5c2e",
          gold: "#c8a96e",
          "gold-light": "#e8c98e",
          accent: "#2d6a4f",
          text: "#e8e0d0",
          muted: "#8a9a8e",
          card: "#132820",
          border: "#2a3f32",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #091510 0%, #0d1f1a 50%, #1a3a2e 100%)",
        "card-gradient":
          "linear-gradient(145deg, #132820 0%, #0d1f1a 100%)",
        "gold-gradient":
          "linear-gradient(90deg, #c8a96e 0%, #e8c98e 50%, #c8a96e 100%)",
        "dark-gradient":
          "linear-gradient(180deg, #091510 0%, #0d1f1a 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.8s ease forwards",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        countdown: "countPulse 1s ease-in-out infinite",
        scroll: "scroll 55s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        countPulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;