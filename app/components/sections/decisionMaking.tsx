import SectionHeading from "./sectionHeading";

const roles = [
  "School Owners",
  "⁠School Directors",
  "Principals",
  "⁠Head Teachers",
  "⁠School Administrators",
  "Education Consultants",
  "⁠Teachers",
  "Students",
  "⁠Investors in Education",
  "⁠Professionals Seeking Opportunities in Education",
];

export default function ForDecisionMakers() {
  return (
    <section
      id="decision-makers"
      className="relative py-24 overflow-hidden bg-[#2c4a52]"
    >
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          background:
            "linear-gradient(135deg, rgba(44,74,82,0.95) 0%, rgba(44,74,82,0.85) 55%, rgba(44,74,82,0.75) 100%)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="flex flex-col items-center gap-4 mb-8">
          <SectionHeading
            title="Designed for Decision Makers"
            subtitle="A gathering of Africa's most visionary educational leaders."
            align="center"
            light
          />
        </div>

        {/* Role badges */}
        <div className="flex flex-wrap justify-center gap-3">
          {roles.map((role) => (
            <span
              key={role}
              className="px-5 py-2.5 text-xs font-medium tracking-wide bg-white/10 border border-white/20 rounded-md backdrop-blur-sm hover:border-white/40 text-white transition-all duration-300 cursor-default"
            >
              {role}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
