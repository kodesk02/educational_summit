const footerLinks = [
  { label: "Agenda", href: "#agenda" },
  { label: "Speakers", href: "#speakers" },
  // { label: "Privacy Policy", href: "#privacy" },
  // { label: "Terms of Service", href: "#terms" },
];

export default function Footer() {
  return (
    <footer
      className="relative py-12 border-t border-summit-border/30"
      style={{
        background: "linear-gradient(360deg, #062b62 0%, #01183A 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left */}
          <div className="flex flex-col gap-3">
            <h4
              className="font-display text-sm font-semibold text-white"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Education CEOs Summit Africa 2026
            </h4>
            <p className="text-white text-xs leading-relaxed max-w-xs">
              Empowering the architects of Africa&apos;s future through financial
              literacy and innovative educational leadership.
            </p>
          </div>

          {/* Right: Links */}
          <div className="flex flex-wrap gap-x-8 gap-y-3 md:justify-end">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs text-white hover:text-white transition-colors duration-200 tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-summit-border/20 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/50 text-[11px]">
            © 2026 Education CEOs Summit Africa. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse-slow" />
            <span className="text-white/50 text-[11px]">
              Registrations open
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}