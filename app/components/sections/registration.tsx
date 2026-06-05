"use client";

import { useState } from "react";
import { Lock } from "lucide-react";
import { CountryDropdown } from "../ui/country_dropdown";

const hearAboutOptions = [
  { value: "WhatsApp Messenger" },
  { value: "Instagram" },
  { value: "Facebook" },
  { value: "Twitter / X" },
  { value: "LinkedIn" },
  { value: "Email Newsletter" },
  { value: "Google Search" },
  { value: "Friend / Colleague" },
  { value: "Other" },
];

const FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSejSfwEasfiyJjQSIHC3ptF-bI6upGyvgl8c90F_3EHb3ujiA/formResponse";

export default function Registration() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    institution: "",
    phone: "",
    position: "",
    country: "Nigeria",
    hearAbout: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();

    if (!form.fullName || !form.email) return;

    try {
      setLoading(true);

      const body = new URLSearchParams({
        "entry.545381036": form.fullName,
        "entry.124183664": form.email,
        "entry.1540689590": form.institution,
        "entry.1925275113": form.phone,
        "entry.205707122": form.position,
        "entry.422827716": form.country,
        "entry.320617047": form.hearAbout,
      });

      await fetch(FORM_ACTION, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: body.toString(),
      });

      setSubmitted(true);
    } catch (err) {
      console.error("Submission failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="register" className="relative py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid md:grid-cols-[280px_1fr] gap-0 rounded-sm overflow-hidden shadow-xl">
          {/* LEFT SIDE */}
          <div
            className="p-8 flex flex-col gap-6"
            style={{
              background: "linear-gradient(160deg, #062b62 0%, #01183A 100%)",
              borderRight: "1px solid rgba(45,106,79,0.3)",
            }}
          >
            <h3
              className="font-display text-base font-semibold text-white"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Event Brief
            </h3>

            <div className="flex flex-col gap-4">
              <div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-gray-400 mb-1">
                  Dates
                </p>
                <p className="text-white text-sm font-medium">
                  26th — 27th June 2026
                </p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-gray-400 mb-1">
                  Venue
                </p>
                <p className="text-white text-sm font-medium">
                  Online · Global Virtual Access
                </p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-gray-400 mb-1">
                  Training investment
                </p>
                  <p className="tracking-[0.18em] text-gray-400 text-[11px] uppercase font-medium">
                    Early birds - <span className="text-[#cc9f39]">$40</span>
                  </p>
                  <p className="tracking-[0.18em] text-gray-400 text-[11px] uppercase font-medium">
                    General - <span className="text-[#cc9f39]">$55</span>
                  </p>
              </div>

              {/* <div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-gray-400 mb-1">
                  Payment Info.
                </p>
                <p className="text-white text-sm font-medium">1234456789</p>
                <p className="text-white text-xs font-medium">Access Bank</p>
              </div> */}
            </div>

            <div className="mt-auto pt-6 border-t border-summit-border/40">
              <p
                className="text-gray-400 text-xs leading-relaxed italic"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                &ldquo;Education is the most powerful weapon which you can use
                to change the world.&rdquo;
              </p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="bg-white border p-8 flex flex-col gap-6">
            <h3
              className="font-display text-lg font-semibold text-[#1a2e24]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Claim Your Seat
            </h3>

            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-4 py-10 text-center">
                <div className="w-12 h-12 rounded-full bg-[#2d6a4f]/10 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-[#2d6a4f]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-[#1a2e24] font-semibold text-sm">
                    Registration Received!
                  </p>
                  <p className="text-gray-500 text-xs mt-1">
                    We&apos;ll contact you at {form.email}
                  </p>
                </div>
              </div>
            ) : (
              <>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-gray-500 tracking-wide">
                      Full Name
                    </label>
                    <input
                      name="fullName"
                      value={form.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 rounded-sm text-sm bg-[#f9f8f5] border border-gray-200 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[#2d6a4f]/50 focus:ring-1 focus:ring-[#2d6a4f]/20 transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-gray-500 tracking-wide">
                      Professional Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="email@institution.com"
                      className="w-full px-4 py-3 rounded-sm text-sm bg-[#f9f8f5] border border-gray-200 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[#2d6a4f]/50 focus:ring-1 focus:ring-[#2d6a4f]/20 transition-all"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-gray-500 tracking-wide">
                      Phone Number
                    </label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+234 800 000 0000"
                      className="w-full px-4 py-3 rounded-sm text-sm bg-[#f9f8f5] border border-gray-200 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[#2d6a4f]/50 focus:ring-1 focus:ring-[#2d6a4f]/20 transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-gray-500 tracking-wide">
                      Position
                    </label>
                    <input
                      name="position"
                      value={form.position}
                      onChange={handleChange}
                      placeholder="Head teacher"
                      className="w-full px-4 py-3 rounded-sm text-sm bg-[#f9f8f5] border border-gray-200 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[#2d6a4f]/50 focus:ring-1 focus:ring-[#2d6a4f]/20 transition-all"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-gray-500 tracking-wide">
                    Institution / School Name
                  </label>
                  <input
                    name="institution"
                    value={form.institution}
                    onChange={handleChange}
                    placeholder="Name of your organization"
                    className="w-full px-4 py-3 rounded-sm text-sm bg-[#f9f8f5] border border-gray-200 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[#2d6a4f]/50 focus:ring-1 focus:ring-[#2d6a4f]/20 transition-all"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-gray-500 tracking-wide">
                      Country
                    </label>
                    <CountryDropdown
                      defaultValue="NGA"
                      onChange={(country) =>
                        setForm((prev) => ({
                          ...prev,
                          country: country.name,
                        }))
                      }
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-gray-500 tracking-wide">
                      How did you hear about us?
                    </label>
                    <select
                      name="hearAbout"
                      value={form.hearAbout}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-sm text-sm bg-[#f9f8f5] border border-gray-200 text-gray-800 focus:outline-none focus:border-[#2d6a4f]/50 focus:ring-1 focus:ring-[#2d6a4f]/20 transition-all appearance-none"
                    >
                      <option value="" disabled>
                        Select an option
                      </option>
                      {hearAboutOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.value}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full py-4 rounded-sm text-xs font-semibold tracking-[0.15em] uppercase bg-[#01183A] text-white hover:bg-[#062b62] transition-all duration-300 mt-1"
                >
                  Secure my Seat
                </button>

                <div className="flex items-center justify-center gap-2 -mt-2">
                  <Lock size={11} className="text-gray-400" />
                  <p className="text-gray-400 text-[10px] text-center">
                    Secure payment processing &amp; simulated access link upon
                    confirmation
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
