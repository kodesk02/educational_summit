import Button from "../ui/button";
import CountdownTimer from "../ui/counterTimer";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* =========================
          BACKGROUND IMAGE
      ========================= */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/1.jpg')",
        }}
      />

      {/* =========================
          DARK + GREEN BACKDROP
      ========================= */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(44,74,82,0.95) 100%, rgba(44,74,82,0.85) 100%, rgba(44,74,82,0.75) 100%)",
        }}
      />

      {/* Optional noise overlay */}
      <div className="absolute inset-0 noise pointer-events-none" />

      {/* =========================
          YOUR CONTENT
      ========================= */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-16 grid md:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div className="flex flex-col gap-7">
          {/* Label pill */}
          <div className="inline-flex items-center gap-2 bg-[#c8a96e]/20 border border-[#c8a96e]/30 rounded-lg px-4 py-2 self-start">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c8a96e]" />
            <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#c8a96e]">
              Pioneer Leadership 2026
            </span>
          </div>

          {/* Headline */}
          <div className="flex flex-col gap-3">
            <h1
              className="font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.1]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Education CEOs{" "}
              <span className="text-[#c8a96e]">Summit Africa</span> 2026
            </h1>

            <p className="text-[#e8e0d0]/80 text-sm md:text-base leading-relaxed max-w-md">
              The New Education Economy: Emerging Career Paths and Financial
              Strategies for Sustainable Educational Growth.
            </p>
          </div>

          {/* CTA + Countdown */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <Button
              variant="ghost"
              href="#register"
              showArrow
              className="text-sm px-7 py-4.5"
            >
              Register Now
            </Button>
            <CountdownTimer targetDate="2026-06-18T09:00:00" />
          </div>

          {/* Meta tags */}
          <div className="flex flex-wrap gap-3 pt-2 ">
            {["18th – 20th June 2026", "Online · Global Virtual Access"].map(
              (item) => (
                <span
                  key={item}
                  className="text-xs text-[#c8a96e] bg-[#c8a96e]/20 border border-[#c8a96e]/30 rounded-lg px-3 py-1.5 tracking-wide"
                >
                  {item}
                </span>
              ),
            )}
          </div>
        </div>

        {/* Right card (unchanged) */}
        <div className="relative hidden md:flex justify-center">
          <div className="relative w-full max-w-sm">
            <div
              className="absolute inset-0 rounded-lg"
              style={{
                boxShadow:
                  "0 0 60px rgba(200,169,110,0.15), 0 0 120px rgba(45,106,79,0.1)",
              }}
            />

            <div className="relative bg-[#0d2820] border border-white/10 rounded-lg overflow-hidden aspect-[4/3] flex items-end justify-center">
              <div className="absolute inset-0 flex flex-col items-center justify-center pb-6">
                <div className="flex gap-10 mb-6">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="flex flex-col items-center">
                      <div className="w-1 h-8 bg-[#c8a96e]/30 rounded-full" />
                      <div
                        className="w-8 h-16 mt-1"
                        style={{
                          background:
                            "linear-gradient(180deg, rgba(200,169,110,0.3) 0%, transparent 100%)",
                          clipPath:
                            "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)",
                        }}
                      />
                    </div>
                  ))}
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-12 h-16 bg-gradient-to-b from-[#1a3a2e] to-[#0d2820] border border-white/10 rounded-sm" />
                  <div className="w-20 h-3 bg-[#2d6a4f]/60 rounded-sm -mt-1" />
                  <div className="w-28 h-2 bg-[#2d6a4f]/40 rounded-sm mt-0.5" />
                </div>
              </div>

              <div className="relative z-10 w-full bg-gradient-to-t from-[#091510]/80 to-transparent p-5">
                <p
                  className="text-sm text-[#c8a96e] text-center"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Powering Leadership. Shaping the Future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
