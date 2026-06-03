import type { Metadata } from "next";
import { Playfair_Display, Noto_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

// ✅ Only instantiate each font ONCE
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Education CEOs Summit Africa 2026",
  description:
    "The New Education Economy: Emerging Career Paths and Financial Strategies for Sustainable Educational Growth.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full antialiased",
        playfairDisplay.variable,
        notoSans.variable
      )}
    >
      {/* ✅ Apply the sans font as the base body font */}
      <body className={cn("min-h-full flex flex-col", notoSans.className)}>
        {children}
      </body>
    </html>
  );
}