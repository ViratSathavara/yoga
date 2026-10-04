import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SectionLabel from "@/components/SectionLabel";
import {
  Video,
  CheckCircle,
  Clock,
  Laptop,
  Users,
  Calendar,
  Sparkles,
  ArrowRight,
  MessageCircle,
  Star,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Online Yoga Classes Ahmedabad & Worldwide | Live Interactive Sessions",
  description:
    "Join live interactive online yoga classes with Priya Sharma via Zoom. Real-time posture correction, flexible morning & evening batches. Book your free online trial!",
  keywords: [
    "online yoga classes",
    "live yoga classes Zoom",
    "online yoga teacher India",
    "best online yoga classes Ahmedabad",
    "home yoga training",
  ],
};

export default function OnlineYogaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#F8F5F0] via-[#E8F1F5] to-[#C5D9C2] pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <SectionLabel icon={<Video className="w-4 h-4" />}>Live Interactive Classes</SectionLabel>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-playfair)] text-[#6B4F3A] mt-4 mb-6 leading-tight">
            Practice Yoga Anywhere, Anytime
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            Experience the warmth and precision of studio yoga from the comfort of your living room. Live two-way video coaching with real-time posture corrections.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/free-trial" className="btn-primary">
              Book Free Online Trial Class
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="https://wa.me/919876543210?text=Hi%20Priya!%20I%20am%20interested%20in%20Online%20Yoga%20Classes."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <MessageCircle className="w-5 h-5" />
              Ask Questions on WhatsApp
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-xs md:text-sm text-gray-600">
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle className="w-4 h-4 text-[#6B9E5E]" /> Live Zoom Sessions (Not pre-recorded)
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle className="w-4 h-4 text-[#6B9E5E]" /> Max 12 students per batch
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle className="w-4 h-4 text-[#6B9E5E]" /> Recorded review access included
            </span>
          </div>
        </div>
      </section>

      {/* ── Featured Visual ── */}
      <section className="max-w-5xl mx-auto px-6 -mt-10 sm:-mt-14 relative z-10 mb-8">
        <div className="relative aspect-[21/9] sm:aspect-[16/7] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#F5EDD6]">
          <Image
            src="/images/program-online.jpg"
            alt="Live Interactive Online Yoga Sessions with Priya Sharma"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-6 flex flex-wrap items-center justify-between gap-2 text-white">
            <span className="text-xs sm:text-sm font-medium bg-black/50 backdrop-blur-md px-3.5 py-1.5 rounded-full">
              💻 2-Way High Definition Zoom Video · Real-Time Adjustments
            </span>
            <span className="text-xs font-semibold bg-[#3A5E8C] px-3 py-1 rounded-full shadow">
              Global Students Welcome
            </span>
          </div>
        </div>
      </section>

      {/* How Online Classes Work */}
      <section className="py-16 md:py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel>Simple Setup</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] text-[#6B4F3A] mt-2">
              How Live Online Yoga Works
            </h2>
            <p className="text-gray-600 mt-2 max-w-xl mx-auto">
              Getting started is seamless. You do not need expensive gear or high-tech equipment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-[#F8F5F0] border border-[#EDE8DF] text-center">
              <div className="w-14 h-14 rounded-2xl bg-[#6B9E5E]/15 text-[#6B9E5E] flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-[#6B4F3A] mb-3">Click Your Zoom Link</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Receive the secure class link directly on WhatsApp and email 15 minutes before your scheduled batch time.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#F8F5F0] border border-[#EDE8DF] text-center">
              <div className="w-14 h-14 rounded-2xl bg-[#6B9E5E]/15 text-[#6B9E5E] flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-[#6B4F3A] mb-3">Camera On for Corrections</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Position your phone, tablet, or laptop 6 feet away. Priya watches every movement and gives verbal posture alignment cues in real time.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#F8F5F0] border border-[#EDE8DF] text-center">
              <div className="w-14 h-14 rounded-2xl bg-[#6B9E5E]/15 text-[#6B9E5E] flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-[#6B4F3A] mb-3">Re-energize & Relax</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Finish every session with deep pranayama breathing and guided savasana relaxation. No commuting in traffic required!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Need */}
      <section className="py-20 px-6 bg-[#F8F5F0]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionLabel>Requirements</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] text-[#6B4F3A] mt-2 mb-6">
                What You Need at Home
              </h2>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-[#6B9E5E]/20 text-[#6B9E5E] mt-0.5">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <strong>Yoga Mat:</strong> Any non-slip standard yoga mat.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-[#6B9E5E]/20 text-[#6B9E5E] mt-0.5">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <strong>Device with Camera:</strong> Laptop, iPad, or smartphone with Zoom installed.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-[#6B9E5E]/20 text-[#6B9E5E] mt-0.5">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <strong>Floor Space:</strong> Just a 6ft × 4ft open space with good lighting.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-[#6B9E5E]/20 text-[#6B9E5E] mt-0.5">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <strong>Comfortable Clothing:</strong> Stretchy clothes that allow free natural movement.
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border border-[#86A873]/20">
              <span className="text-xs uppercase font-bold text-[#6B9E5E] tracking-wider">Online Batches</span>
              <h3 className="text-2xl font-bold text-[#6B4F3A] mt-1 mb-6">Current Online Timings</h3>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-[#F8F5F0] flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text-[#6B4F3A]">Morning Online Batch</h4>
                    <p className="text-xs text-gray-500">Mon / Wed / Fri</p>
                  </div>
                  <span className="font-semibold text-sm text-[#6B9E5E]">7:30 AM – 8:15 AM</span>
                </div>

                <div className="p-4 rounded-2xl bg-[#F8F5F0] flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text-[#6B4F3A]">Evening Online Batch</h4>
                    <p className="text-xs text-gray-500">Tue / Thu / Sat</p>
                  </div>
                  <span className="font-semibold text-sm text-[#6B9E5E]">7:30 PM – 8:15 PM</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <span className="text-xs text-gray-500">Monthly Plan</span>
                  <p className="text-2xl font-bold text-[#6B4F3A]">₹1,999 <span className="text-xs font-normal text-gray-400">/month</span></p>
                </div>
                <Link href="/free-trial" className="btn-primary text-sm py-2.5 px-6">
                  Try 1st Class Free
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 px-6 bg-[#6B4F3A] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold font-[family-name:var(--font-playfair)] mb-4">
            Test Your First Online Class at Zero Cost
          </h2>
          <p className="text-[#C5D9C2] mb-8 max-w-xl mx-auto">
            See for yourself how interactive and personal online sessions feel. No card needed, zero obligation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/free-trial" className="btn-primary">
              Book Free Online Trial Class
            </Link>
            <a
              href="https://wa.me/919876543210?text=Hi%20Priya!%20Can%20I%20get%20more%20details%20about%20the%20Online%20Yoga%20sessions?"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              💬 WhatsApp Enquiry
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
