const testimonials = [
  {
    initials: "KN",
    name: "Klaudia Ndahangwapo",
    role: "Preschool Owner, Namibia",
    quote:
      "I gained practical skills in visionary leadership, school financial management, and preventing financial leakages. This program has strengthened my capacity to lead and grow my school effectively.",
  },
  {
    initials: "AD",
    name: "Mr. Ayodele Dairo",
    role: "Mujid Height Primary School, Lagos, Nigeria",
    quote:
      "The CPD Certified Leadership Programme equipped me with practical and impactful strategies that have enhanced my effectiveness as a school leader. I highly recommend it to educators committed to excellence and sustainable growth.",
  },
  {
    initials: "FO",
    name: "Mrs. Ojo Faith Freda",
    role: "Founder, Royal Crest School, Lagos, Nigeria",
    quote:
      "The programme taught me the power of systems-driven leadership, enabling me to build structures for sustainable school growth. A valuable experience for every school leader.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24" style={{ background: "#01183A" }}>
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <div className="flex flex-col items-center gap-3 mb-14">
          <h2
            className="text-3xl font-bold text-white"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Voices of Transformation
          </h2>
          <div className="border-2 w-1/4 rounded-2xl border-[#cc9f39]/70 " />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 place-items-center gap-6">
          {testimonials.map((t, index) => (
            <div
              key={t.name}
              className={`bg-white rounded-2xl border border-gray-200 p-8 flex flex-col justify-between gap-8
        ${
          testimonials.length % 2 !== 0 && index === testimonials.length - 1
            ? "md:col-span-2 md:w-1/2"
            : ""
        }`}
            >
              {/* Quote mark + text */}
              <div className="flex flex-col gap-5">
                <span
                  className="text-5xl font-serif leading-none text-gray-300 select-none"
                  aria-hidden
                >
                  &ldquo;
                </span>
                <p
                  className="text-gray-600 text-sm leading-relaxed italic -mt-3"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Divider */}
              <div className="h-px bg-gray-100" />

              {/* Author */}
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center text-white text-xs font-semibold shrink-0"
                  style={{ background: "#01183A" }}
                >
                  {t.initials}
                </div>
                <div>
                  <p
                    className="text-[#1a2e24] text-sm font-semibold"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {t.name}
                  </p>
                  <p className="text-gray-500 text-xs mt-0.5">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
