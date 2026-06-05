const testimonials = [
  {
    initials: "AO",
    name: "Dr. Amara Okezie",
    role: "Group Director",
    quote:
      "Attending Caleb's previous sessions was the turning point for my school group in Lagos. We finally stopped just 'surviving' and started scaling with intention.",
  },
  {
    initials: "AK",
    name: "Dr. Amara K.",
    role: "School Owner (Kenya)",
    quote:
      "The financial strategies shared transformed how we run our school. It's no longer just a service; it's a high-performing enterprise.",
  },
   {
    initials: "AK",
    name: "Dr. Amara K.",
    role: "School Owner (Kenya)",
    quote:
      "The financial strategies shared transformed how we run our school. It's no longer just a service; it's a high-performing enterprise.",
  },
   {
    initials: "AK",
    name: "Dr. Amara K.",
    role: "School Owner (Kenya)",
    quote:
      "The financial strategies shared transformed how we run our school. It's no longer just a service; it's a high-performing enterprise.",
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
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl border border-gray-200 p-8 flex flex-col justify-between gap-8"
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
