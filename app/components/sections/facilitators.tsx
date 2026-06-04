import SectionHeading from "./sectionHeading";
import Image from "next/image";

const stats = [
  { value: "15+", label: "Years of Executive Experience" },
  { value: "12+", label: "Countries Consulted Across Africa" },
  { value: "500", label: "School Leaders Mentored" },
];

export default function Facilitator() {
  return (
    <section id="speakers" className="relative py-24 bg-white">
      <div className="max-w-6xl mx-auto px-18">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Photo card */}
          <div className="relative">
            <div className="relative w-full max-w-xs">
              {/* Gold accent border */}
              <div className="absolute -top-4 -left-4 w-full h-full border border-[#cc9f39]/30 rounded-sm pointer-events-none" />

              {/* Photo placeholder */}
              <div className="relative bg-gradient-to-b from-[#1a3a2e] to-[#01183A] rounded-sm overflow-hidden aspect-3/4">
                {/* Silhouette placeholder */}
                <Image
                  src="/images/person.png"
                  alt="Decorative visual"
                  className="w-full h-full object-fit opacity-80"
                  width={100}
                  height={100}
                />

                {/* <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex flex-col items-center gap-2 opacity-20">
                    <div className="w-20 h-20 rounded-full bg-[#cc9f39]" />
                    <div className="w-32 h-40 rounded-t-full bg-[#cc9f39]" />
                  </div>
                </div> */}

                {/* Name card overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm px-5 py-4">
                  <p
                    className="text-[#01183A] text-sm font-semibold"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Caleb T. Epivays
                  </p>
                  <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em] mt-0.5">
                    Lead Facilitator
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex flex-col gap-8">
            <SectionHeading title="Expertise You Can Trust" light={false} />

            <p className="text-gray-500 text-sm leading-relaxed -mt-4">
              With over 15 years at the intersection of finance and education,
              Caleb has pioneered systems that transformed struggling
              institutions into multi-million dollar regional hubs.
            </p>

            {/* Stats */}
            <div className="flex flex-col gap-5">
              {stats.map((stat) => (
                <div key={stat.label} className="w-full">
                  <div className="flex items-center gap-6">
                    <span
                      className="font-display text-2xl font-bold text-[#01183A]"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {stat.value}
                    </span>

                    <span className="text-gray-600 text-xs tracking-wide max-w-[180px]">
                      {stat.label}
                    </span>
                  </div>

                  <div className="w-full h-px bg-gray-200 mt-3" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
