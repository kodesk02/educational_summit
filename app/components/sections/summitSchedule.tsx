"use client";
import { useState } from "react";

interface ScheduleItem {
  time: string;
  duration?: string;
  title: string;
  description?: string;
}

interface SessionBlock {
  label: string;
  timeRange: string;
  items: ScheduleItem[];
}

interface DaySchedule {
  day: string;
  sessions: SessionBlock[];
}

const scheduleData: DaySchedule[] = [
  {
    day: "Day 1 (Friday, June 26th)",
    sessions: [
      {
        label: "Opening",
        timeRange: "",
        items: [
          {
            time: "18:00",
            duration: "10 MINS",
            title: "Opening Ceremony (Welcome Address)",
            description:
              "A formal introduction to the EduSummit 2024 themes and objectives, setting the tone for regional collaboration.",
          },
          {
            time: "18:10",
            duration: "30 MINS",
            title: "Future of Education Leadership in Africa",
            description:
              "A deep dive into the evolving paradigms of institutional governance across the continent.",
          },
          {
            time: "18:40",
            duration: "30 MINS",
            title: "Emerging Career Paths in Schools",
            description:
              "Identifying new roles and expertise required for modern school ecosystems, from digital curators to wellness leads.",
          },
          {
            time: "19:10",
            duration: "30 MINS",
            title: "Regional School Challenges in Southern Africa",
            description:
              "An analytical session focusing on infrastructure, policy, and demographic shifts within the SADC region.",
          },
          {
            time: "19:40",
            duration: "CLOSING",
            title: "Networking and Reflection Session",
            description:
              "An unstructured block for delegates to connect, share insights, and prepare for the intensive Day 2 sessions.",
          },
        ],
      },
    ],
  },
  {
    day: "Day 2 (Saturday, June 27th)",
    sessions: [
      {
        label: "Morning Session",
        timeRange: "10:00 AM - 12:00 NOON SAST",
        items: [
          {
            time: "10:00 - 10:50 AM",
            title: "School Financial Management Systems",
          },
          {
            time: "10:50 - 11:40 AM",
            title: "Revenue Growth & Sustainability Strategies",
          },
          {
            time: "11:40 - 12:00 PM",
            title: "Interactive Session Q&A",
          },
        ],
      },
      {
        label: "Afternoon Session",
        timeRange: "2:00 PM - 4:00 PM SAST",
        items: [
          {
            time: "2:00 - 2:50 PM",
            title: "Building Financially Healthy Schools",
          },
          {
            time: "2:50 - 3:30 PM",
            title: "Becoming an Executive CEO",
          },
          {
            time: "3:30 - 3:50 PM",
            title: "Strategic Action Planning Workshop",
          },
          {
            time: "3:50 - 4:00 PM",
            title: "Closing Ceremony",
          },
        ],
      },
    ],
  },
];

export default function SummitSchedule() {
  const [activeDay, setActiveDay] = useState(0);
  const current = scheduleData[activeDay];

  return (
    <section
      id="schedule"
      className="py-20 bg-[#01183A] relative"
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
        fontFamily: "var(--font-serif)",
      }}
    >
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="font-display text-4xl font-semibold text-white">
            Summit Schedule
          </h2>
          <p className="text-white text-sm leading-relaxed mt-3 max-w-lg mx-auto">
            Explore two days of intensive leadership development, financial
            strategy, and collaborative workshops designed for the modern
            educator.
          </p>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-10">
          <div className="border rounded-2xl border-white/20 p-1 flex bg-white shadow-sm">
            {scheduleData.map((d, i) => (
              <button
                key={d.day}
                onClick={() => setActiveDay(i)}
                className={`px-6 py-2.5 rounded-2xl text-sm font-medium tracking-wide transition-all duration-200 ${
                  activeDay === i
                    ? "bg-[#062b62] text-white shadow"
                    : "text-[#062b62] hover:text-[#062b62]"
                }`}
              >
                {d.day}
              </button>
            ))}
          </div>
        </div>

        {/* Sessions */}
        <div className="space-y-10">
          {current.sessions.map((session) => (
            <div key={session.label}>
              {/* Session block header — only show if timeRange exists */}
              {session.timeRange && (
                <div className="flex items-baseline gap-3 mb-5 border-l-[3px] border-[#cc9f39] pl-4">
                  <h3 className="font-display text-2xl font-semibold text-white">
                    {session.label}
                  </h3>
                  <span className="text-xs tracking-widest text-[var(--text-light)] uppercase">
                    {session.timeRange}
                  </span>
                </div>
              )}

              {/* Items */}
              <div className="divide-y divide-gray-200">
                {session.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="py-5 grid grid-cols-[160px_1fr] gap-4 items-start group transition-colors px-1 -mx-1"
                  >
                    {/* Time col */}
                    <div>
                      <p className="text-sm font-semibold text-[#cc9f39] font-display">
                        {item.time}
                      </p>
                      {item.duration && (
                        <p
                          className={`text-[10px] tracking-widest uppercase mt-0.5 font-medium ${
                            item.duration === "CLOSING"
                              ? "text-[#cc9f39]"
                              : "text-[#cc9f39]"
                          }`}
                        >
                          {item.duration}
                        </p>
                      )}
                    </div>

                    {/* Content col */}
                    <div>
                      <h4 className="text-base font-semibold text-white leading-snug">
                        {item.title}
                      </h4>
                      {item.description && (
                        <p className="text-xs text-white leading-relaxed mt-1.5">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}