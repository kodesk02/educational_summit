import SectionHeading from "./sectionHeading";
import Image from "next/image";

const stats = [
  { value: "15+", label: "Years of Executive Experience" },
  { value: "500", label: "School Leaders Mentored Across Africa" },
];

export default function Facilitator() {
  return (
    <section id="speakers" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="mb-20">
          <SectionHeading title="Speakers & Facilitators" light={false} />
          <div className="border-2 w-1/4 rounded-r-2xl border-[#cc9f39]/70 " />
        </div>

        {/* ================= SPEAKER 1 ================= */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-full max-w-sm">
              <div className="absolute -top-4 -left-4 w-full h-full border border-[#cc9f39]/30 rounded-sm" />

              <div className="relative bg-gradient-to-b from-[#1a3a2e] to-[#01183A] rounded-sm overflow-hidden aspect-[3/4]">
                <Image
                  src="/images/person.png"
                  alt="Caleb T. Epivays"
                  fill
                  className="object-cover opacity-80"
                />

                <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm px-5 py-4">
                  <p
                    className="text-[#01183A] text-sm font-semibold"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Caleb T. Epivays
                  </p>

                  <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em] mt-1">
                    Lead Facilitator
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-8">
            <SectionHeading title="Expertise You Can Trust" light={false} />

            <p className="text-gray-500 text-sm leading-relaxed">
              {/* With over 15 years at the intersection of finance and education,
              Caleb has pioneered systems that transformed struggling
              institutions into multi-million dollar regional hubs. */}
              Education Consultant and Systems Strategist with extensive
              experience in school operations, leadership development, and
              institutional transformation. Caleb helps education leaders build
              sustainable systems that drive growth, impact, and long-term
              success.
            </p>

            <div className="flex flex-col gap-5">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="flex items-center gap-6">
                    <span
                      className="text-2xl font-bold text-[#01183A]"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {stat.value}
                    </span>

                    <span className="text-gray-600 text-xs tracking-wide">
                      {stat.label}
                    </span>
                  </div>

                  <div className="w-full h-px bg-gray-200 mt-3" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= SPEAKER 2 ================= */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center mt-24">
          {/* Content First */}
          <div className="flex order-last md:order-first flex-col gap-8">
            <SectionHeading
              title="Building Educational Excellence"
              light={false}
            />

            <p className="text-gray-500 text-sm leading-relaxed">
              Human Capital Development Professional, Educator, and Certified
              International Career Coach. Martha is passionate about empowering
              leaders, developing talent, and helping professionals thrive in an
              evolving education landscape.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col items-start gap-2">
                <span
                  className="text-2xl font-light text-[#01183A]"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Expert
                </span>

                <span className="text-gray-600 text-xs tracking-wide">
                  Educator & Influencer
                </span>
              </div>

              <div className="flex flex-col items-start gap-2">
                <span
                  className="text-2xl font-light text-[#01183A]"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Certified
                </span>

                <span className="text-gray-600 text-xs tracking-wide">
                  Developmental Analyst
                </span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="flex order-first md:order-last justify-center md:justify-end">
            <div className="relative w-full max-w-sm">
              <div className="absolute -top-4 -left-4 w-full h-full border border-[#cc9f39]/30 rounded-sm" />

              <div className="relative bg-gradient-to-b from-[#1a3a2e] to-[#01183A] rounded-sm overflow-hidden aspect-[3/4]">
                <Image
                  src="/images/2.png"
                  alt="Speaker 2"
                  fill
                  className="object-cover opacity-80"
                />

                <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm px-5 py-4">
                  <p
                    className="text-[#01183A] text-sm font-semibold"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Martha Nghinongelwa
                  </p>

                  <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em] mt-1">
                    Coach
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= SPEAKER 3 ================= */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center mt-24">
          {/* Image */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-full max-w-sm">
              <div className="absolute -top-4 -left-4 w-full h-full border border-[#cc9f39]/30 rounded-sm" />

              <div className="relative bg-gradient-to-b from-[#1a3a2e] to-[#01183A] rounded-sm overflow-hidden aspect-[3/4]">
                <Image
                  src="/images/3.png"
                  alt="Speaker 3"
                  fill
                  className="object-cover opacity-80"
                />

                <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm px-5 py-4">
                  <p
                    className="text-[#01183A] text-sm font-semibold"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Rachael Muyaya
                  </p>

                  <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em] mt-1">
                    Coach
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-8">
            <SectionHeading
              title="Transforming School Leadership"
              light={false}
            />

            <p className="text-gray-500 text-sm leading-relaxed">
              Human Capital Development Professional, Youth Mentor, and
              Certified International Career Coach. Rachael specializes in
              leadership development, career growth, and equipping individuals
              to achieve their full potential.
            </p>

            <div className="bg-[#01183A]/20 border border-[#01183A]/30 p-6 rounded-lg">
              <span
                className="text-lg font-light text-[#01183A]"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Youth Mentor | Certified International Career Coach | Leadership
                Development
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
