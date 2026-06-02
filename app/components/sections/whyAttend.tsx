
import {
  TrendingUp,
  Shield,
  DollarSign,
  PieChart,
  BookOpen,
  Building2,
} from "lucide-react";
import SectionHeading from "./sectionHeading";


export default function WhyAttend() {
  return (
    <section
      id="why-attend"
      className="relative py-24 bg-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <SectionHeading
            title="Why Attend the Summit?"
            light={false}
          />
          <div className="border-2 w-1/4 rounded-r-2xl border-[#c8a96e]/70 "/>
        </div>

        {/* Grid layout matching the design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Row 1: Large card + 2 small */}
          <div className="md:col-span-1 bg-white border border-gray-200 rounded-sm p-6 hover:border-[#2d6a4f]/40 transition-all duration-300">
            <TrendingUp size={22} className="text-[#2d6a4f] mb-4" />
            <h3 className="text-[#1a2e24] font-semibold text-sm mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
              Emerging Career Paths
            </h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              Unlock futuristic educational models that align with the 2030 job market demands.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-sm p-6 hover:border-[#2d6a4f]/40 transition-all duration-300">
            <Shield size={20} className="text-gray-400 mb-3" />
            <p className="text-gray-400 text-[10px] uppercase tracking-widest mb-2">Building Financially Stable Schools
</p>
            <p className="text-gray-500 text-xs leading-relaxed">
              Build resilient institutional structures for long-term survival.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-sm p-6 hover:border-[#2d6a4f]/40 transition-all duration-300">
            <DollarSign size={20} className="text-gray-400 mb-3" />
            <p className="text-gray-400 text-[10px] uppercase tracking-widest mb-2">Revenue Streams</p>
            <p className="text-gray-500 text-xs leading-relaxed">
              Diversify income sources beyond tuition fees effectively.
            </p>
          </div>

          {/* Row 2 */}
          <div
            className="bg-[#2c4a52] border border-[#4a5c2e] rounded-sm p-6 hover:border-[#c8a96e]/40 transition-all duration-300"
          >
            <PieChart size={20} className="text-[#c8a96e] mb-3" />
            <p className="text-[#c8a96e] text-[10px] uppercase tracking-widest mb-2"> Reducing Financial Leakages
</p>
            <p className="text-[#a0b090] text-xs leading-relaxed">
              Stop financial drain through smart operational audits.
            </p>
          </div>

          <div className="md:col-span-1 bg-white border border-gray-200 rounded-sm p-6 hover:border-[#2d6a4f]/40 transition-all duration-300">
            <BookOpen size={22} className="text-[#2d6a4f] mb-4" />
            <h3 className="text-[#1a2e24] font-semibold text-sm mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
            Tracking School Finances Effectively
            </h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              Implement transparent reporting systems for administrative clarity.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-sm p-6 hover:border-[#2d6a4f]/40 transition-all duration-300">
            <Building2 size={20} className="text-gray-400 mb-3" />
            <p className="text-gray-400 text-[10px] uppercase tracking-widest mb-2">Accessing Funding</p>
            <p className="text-gray-500 text-xs leading-relaxed">
              Learn to attract venture capital and grants for education.
            </p>
          </div>

          {/* Row 3 */}
          <div
            className="bg-[#2c4a52] border border-[#4a5c2e] rounded-sm p-6 hover:border-[#c8a96e]/40 transition-all duration-300 md:col-span-1"
          >
            <Building2 size={20} className="text-[#c8a96e] mb-3" />
            <p className="text-[#c8a96e] text-[10px] uppercase tracking-widest mb-2">School Expansion</p>
            <p className="text-[#a0b090] text-xs leading-relaxed">
              Scalable growth strategies for multi-campus management.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}