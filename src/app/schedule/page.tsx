"use client";

import { useState } from "react";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import { Clock, Users, Video, MapPin, Calendar, Check, ArrowRight } from "lucide-react";
import { scheduleData } from "@/lib/data";

type FilterType = "All" | "Morning" | "Evening" | "Online" | "Offline";

export default function SchedulePage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");

  const filteredSchedule = scheduleData.filter((item) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Online") return item.mode === "Online";
    if (activeFilter === "Offline") return item.mode === "Offline";
    if (activeFilter === "Morning") return item.time.includes("AM");
    if (activeFilter === "Evening") return item.time.includes("PM");
    return true;
  });

  return (
    <>
      {/* Hero */}
      <section className="bg-[#566748] pt-32 pb-20 px-6 text-center text-[#fbf8ef]">
        <div className="max-w-4xl mx-auto">
          <p className="eyebrow !text-[#e4e8db] mb-2 justify-center">Make a little room</p>
          <h1 className="text-4xl md:text-5xl font-serif text-[#fbf8ef] mt-2 mb-4">
            A rhythm that fits.
          </h1>
          <p className="text-base md:text-lg text-[#faf8ef]/80 max-w-2xl mx-auto leading-relaxed">
            Morning starts or evening resets — choose from in-studio batches at Satellite, Ahmedabad or live online via Zoom.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-6 px-6 bg-[#fbfaf5] sticky top-[72px] z-20 border-b border-[#dedbd2] shadow-sm">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-2 justify-center">
          {(["All", "Morning", "Evening", "Offline", "Online"] as FilterType[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`px-5 py-2 rounded-full font-medium text-xs transition-all duration-200 cursor-pointer ${
                activeFilter === tab
                  ? "bg-[#566748] text-white shadow-sm"
                  : "bg-transparent border border-[#dedbd0] text-[#73746a] hover:border-[#566748]"
              }`}
            >
              {tab === "Offline" ? "📍 Studio Batches" : tab === "Online" ? "💻 Live Online" : `${tab} Batches`}
            </button>
          ))}
        </div>
      </section>

      {/* Schedule Table & Cards */}
      <section className="py-16 px-6 bg-[#f7f5ed]">
        <div className="max-w-5xl mx-auto">
          {/* Desktop Table View */}
          <div className="hidden md:block bg-[#fbfaf5] rounded-xl shadow-sm border border-[#dedbd2] overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#414c39] text-[#f2f1e7] text-xs uppercase tracking-wider">
                  <th className="py-4 px-6 font-semibold">Program</th>
                  <th className="py-4 px-6 font-semibold">Days</th>
                  <th className="py-4 px-6 font-semibold">Timing</th>
                  <th className="py-4 px-6 font-semibold">Mode</th>
                  <th className="py-4 px-6 font-semibold">Available Spots</th>
                  <th className="py-4 px-6 font-semibold text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#dedbd2] text-[13px]">
                {filteredSchedule.map((item) => (
                  <tr key={item.id} className="hover:bg-[#f7f5ed]/80 transition-colors">
                    <td className="py-5 px-6 font-medium text-[#364132] flex items-center gap-2 font-serif text-[15px]">
                      <span className="w-2 h-2 rounded-full bg-[#566748]" />
                      {item.program}
                    </td>
                    <td className="py-5 px-6 text-[#55574c] font-medium">{item.days}</td>
                    <td className="py-5 px-6 text-[#55574c]">
                      <div className="flex items-center gap-1.5 font-semibold text-[#566748]">
                        <Clock className="w-3.5 h-3.5" />
                        {item.time}
                      </div>
                      <span className="text-[11px] text-[#77796f]">({item.duration})</span>
                    </td>
                    <td className="py-5 px-6">
                      <span
                        className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[#e4e8db] text-[#364132]"
                      >
                        {item.mode === "Online" ? <Video className="w-3 h-3" /> : <MapPin className="w-3 h-3" />}
                        {item.mode}
                      </span>
                    </td>
                    <td className="py-5 px-6 text-[#77796f]">
                      <span className="inline-flex items-center gap-1 font-medium text-[#566748] bg-[#e9ece2] px-2.5 py-0.5 rounded-full text-[11px]">
                        <Users className="w-3 h-3" />
                        {item.spots} spots left
                      </span>
                    </td>
                    <td className="py-5 px-6 text-right">
                      <Link
                        href="/free-trial"
                        className="inline-flex items-center gap-1 text-[11.5px] font-semibold px-3.5 py-1.5 bg-[#566748] text-white rounded hover:bg-[#435439] transition-all shadow-sm"
                      >
                        <span>Book Trial</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden space-y-4">
            {filteredSchedule.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-5 shadow-md border border-[#86A873]/20 space-y-3"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-lg text-[#6B4F3A]">{item.program}</h3>
                    <p className="text-xs font-medium text-[#6B9E5E] flex items-center gap-1 mt-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.days}
                    </p>
                  </div>
                  <span
                    className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                      item.mode === "Online"
                        ? "bg-blue-50 text-blue-700"
                        : "bg-[#C5D9C2]/60 text-[#3D6B45]"
                    }`}
                  >
                    {item.mode}
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm pt-2 border-t border-gray-100">
                  <span className="font-semibold text-gray-700 flex items-center gap-1">
                    <Clock className="w-4 h-4 text-[#6B9E5E]" />
                    {item.time}
                  </span>
                  <span className="text-xs text-amber-700 font-semibold bg-amber-50 px-2 py-0.5 rounded-full">
                    {item.spots} spots left
                  </span>
                </div>

                <Link
                  href="/free-trial"
                  className="w-full btn-primary justify-center text-sm py-2.5 mt-2"
                >
                  Book Free Trial in This Batch
                </Link>
              </div>
            ))}
          </div>

          {/* Personal Training Notice */}
          <div className="mt-12 bg-white rounded-3xl p-8 border border-[#86A873]/20 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs uppercase font-bold text-[#6B9E5E] tracking-wider">Need Custom Timings?</span>
              <h3 className="text-2xl font-bold font-[family-name:var(--font-playfair)] text-[#6B4F3A] mt-1">
                1-on-1 Personal Yoga Training
              </h3>
              <p className="text-sm text-gray-600 mt-2 max-w-xl">
                Can&apos;t match our group batch schedule? Book personalized 1-on-1 yoga sessions at your home or private online sessions at times that suit you.
              </p>
            </div>
            <a
              href="https://wa.me/919876543210?text=Hi%20Priya!%20I%20am%20interested%20in%20Personal%201-on-1%20Yoga%20Training."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp flex-shrink-0"
            >
              💬 Ask for Personal Slots
            </a>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-6 bg-white border-t border-[#EDE8DF]">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <SectionLabel>Schedule FAQ</SectionLabel>
          <h2 className="text-3xl font-bold font-[family-name:var(--font-playfair)] text-[#6B4F3A] mt-3">
            Common Schedule Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          <div className="p-6 rounded-2xl bg-[#F8F5F0] border border-[#EDE8DF]">
            <h4 className="font-bold text-[#6B4F3A] mb-2">Can I switch batches if my work schedule changes?</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Yes! We offer batch flexibility. Just let Priya know in advance, and you can switch between morning and evening batches or attend an online session if you cannot travel.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-[#F8F5F0] border border-[#EDE8DF]">
            <h4 className="font-bold text-[#6B4F3A] mb-2">What happens if I miss a class?</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              For online sessions, you receive class notes and makeup slot options. For offline students, you can attend a makeup session in an alternate batch during the same month.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
