import { AlertTriangle, CheckCircle2 } from "lucide-react";
import SectionHeading from "./sectionHeading";

const challenges = [
  "⁠Uncertainty about career opportunities.",
  " ⁠Limited revenue sources.",
  "⁠Financial leakages",
  "⁠Difficulty accessing funding",
  "⁠Poor financial visibility",
];

const outcomes = [
  "Clear understanding of emerging education careers",
  "Multiple revenue-generation strategies",
  "⁠Strong financial management systems",
  "⁠Funding readiness",
  "⁠Strategic growth plan",
];

export default function StrategicTransformation() {
  return (
    <section
      id="agenda"
      className="relative py-24 bg-white"
      //   style={{
      //     background: "linear-gradient(180deg, #f5f3ee 0%, #edeae3 100%)",
      //   }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12 flex justify-center">
          <SectionHeading
            title="The Strategic Transformation"
            align="center"
            light={false}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Current Challenges */}
          <div className="bg-gray-50 border border-gray-200 rounded-sm p-8">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle size={18} className="text-amber-500" />
              <span className="text-xs font-mono uppercase tracking-[0.18em] text-amber-600">
                Current Challenges
              </span>
            </div>
            <ul className="flex flex-col gap-4">
              {challenges.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Summit Outcomes */}
          <div
            className="rounded-sm p-8"
            style={{
              background: "linear-gradient(145deg, #2c4a52 40%, #091510 100%)",
              border: "1px solid rgba(45,106,79,0.4)",
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle2 size={18} className="text-white" />
              <span className="text-xs font-mono uppercase tracking-[0.18em] text-white">
                Summit Outcomes
              </span>
            </div>
            <ul className="flex flex-col gap-4">
              {outcomes.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={15}
                    className="text-[#2d6a4f] mt-0.5 shrink-0"
                  />
                  <p className="text-white text-sm leading-relaxed">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
