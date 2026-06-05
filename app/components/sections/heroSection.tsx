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
          backgroundImage: "url('/images/1.png')",
        }}
      />

      {/* =========================
          DARK + GREEN BACKDROP
      ========================= */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(1,24,58,0.95) 20%, rgba(1,24,58,0.65) 50%, rgba(1,24,58,0.5) 100%)",
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
          <div className="inline-flex items-center gap-2 bg-[#cc9f39]/20 border border-[#cc9f39]/30 rounded-lg px-4 py-2 self-start">
            <span className="w-1.5 h-1.5 rounded-full bg-[#cc9f39]" />
            <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#cc9f39]">
              Pioneer Leadership 2026
            </span>
          </div>

          {/* Headline */}
          <div className="flex flex-col gap-3">
            <h1
              className="font-bold text-4xl text-white md:text-5xl lg:text-6xl leading-[1.1]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Education CEOs{" "}
              <span className="text-[#cc9f39]">Summit Africa</span> 2026
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
            <CountdownTimer targetDate="2026-06-26T09:00:00" />
          </div>

          {/* Meta tags */}
          <div className="flex flex-wrap gap-3 pt-2 ">
            {["26th – 27th June 2026", "Online · Global Virtual Access"].map(
              (item) => (
                <span
                  key={item}
                  className="text-xs text-[#cc9f39] bg-[#cc9f39]/20 border border-[#cc9f39]/30 rounded-lg px-3 py-1.5 tracking-wide"
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

          </div>
        </div>
      </div>
    </section>
  );
}
