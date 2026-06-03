"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Button from "../ui/button";

const navLinks = [
  { label: "Agenda", href: "#agenda" },
  { label: "Speakers", href: "#speakers" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 lg:px-0 px-4 transition-all duration-500 ${
        scrolled
          ? "lg:bg-[#2c4a52] bg-white backdrop-blur-sm border-b border-summit-border/40 py-3"
          : "bg-white pt-3 py-0 lg:py-3"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className={`font-display text-sm lg:text-lg font-semibold py-3 tracking-wide ${scrolled ? "text-[#2c4a52] lg:text-white" : "text-[#2c4a52]"}`}
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Education CEOs Summit Africa 2026
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-xs tracking-widest uppercase transition-colors duration-200 ${scrolled ? "text-white hover:text-[#8e9775]" : "text-[#2c4a52] hover:text-[#8e9775]"}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <Button variant="gold" href="#register" className="text-xs px-5 py-2.5">
            Register Now
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[#2c4a52] hover:text-[#8e9775]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#2c4a52] border-t border-summit-border/40 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-summit-muted hover:text-white transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button variant="ghost" href="#register" className="text-xs mt-2">
            Register Now
          </Button>
        </div>
      )}
    </header>
  );
}