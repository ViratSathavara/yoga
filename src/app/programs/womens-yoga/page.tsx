import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SectionLabel from "@/components/SectionLabel";
import {
  Heart,
  CheckCircle,
  Clock,
  Shield,
  Sparkles,
  ArrowRight,
  MessageCircle,
  Star,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Women's Yoga Classes Ahmedabad | Hormonal Health & Pelvic Wellness",
  description:
    "Specialized women-only yoga classes in Ahmedabad with certified instructor Priya Sharma. Hormonal balance, PCOS/PCOD support, prenatal wellness, and stress management.",
  keywords: [
    "women yoga Ahmedabad",
    "yoga for PCOS Ahmedabad",
    "prenatal yoga Ahmedabad",
    "hormonal balance yoga",
    "female yoga teacher Ahmedabad",
  ],
};

export default function WomensYogaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#F8F5F0] via-[#FCEEE9] to-[#C5D9C2] pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <SectionLabel icon={<Heart className="w-4 h-4 text-rose-500" />}>Women&apos;s Wellness Circle</SectionLabel>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-playfair)] text-[#6B4F3A] mt-4 mb-6 leading-tight">
            Nurture Your Strength, Balance Your Hormones
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            A supportive, safe, women-only space designed around female anatomy, hormonal cycles, pelvic wellness, and holistic rejuvenation.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/free-trial" className="btn-primary">
              Book Your Free Women&apos;s Trial
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="https://wa.me/919876543210?text=Hi%20Priya!%20I%20am%20interested%20in%20the%20Women's%20Yoga%20sessions."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <MessageCircle className="w-5 h-5" />
              Chat Confidentially on WhatsApp
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-xs md:text-sm text-gray-600">
            <span className="flex items-center gap-1.5 font-medium">
              <Shield className="w-4 h-4 text-[#6B9E5E]" /> 100% Women-Only Batches
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle className="w-4 h-4 text-[#6B9E5E]" /> Prenatal & Postnatal Certified
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <Sparkles className="w-4 h-4 text-[#6B9E5E]" /> PCOS, PCOD & Thyroid Adapted
            </span>
          </div>
        </div>
      </section>

      {/* ── Featured Visual ── */}
      <section className="max-w-5xl mx-auto px-6 -mt-10 sm:-mt-14 relative z-10 mb-8">
        <div className="relative aspect-[21/9] sm:aspect-[16/7] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#F5EDD6]">
          <Image
            src="/images/program-womens.jpg"
            alt="Gentle Restorative and Hormonal Balance Yoga for Women Ahmedabad"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-6 flex flex-wrap items-center justify-between gap-2 text-white">
            <span className="text-xs sm:text-sm font-medium bg-black/50 backdrop-blur-md px-3.5 py-1.5 rounded-full">
              🌸 Hormonal Balance · Prenatal &amp; Postnatal Gentle Care
            </span>
            <span className="text-xs font-semibold bg-[#8C3A5E] px-3 py-1 rounded-full shadow">
              100% Women-Only Community
            </span>
          </div>
        </div>
      </section>

      {/* Pillars of Women's Yoga */}
      <section className="py-16 md:py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel>Core Focus</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] text-[#6B4F3A] mt-2">
              Why Women Need a Tailored Yoga Practice
            </h2>
            <p className="text-gray-600 mt-2 max-w-xl mx-auto">
              A woman&apos;s body goes through unique hormonal cycles each month and across life stages. Generic high-intensity workouts can often increase cortisol and aggravate hormonal imbalances.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-[#F8F5F0] border border-[#EDE8DF]">
              <div className="text-3xl mb-4">🌸</div>
              <h3 className="text-xl font-bold text-[#6B4F3A] mb-3">Hormonal Balance & PCOS</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Gentle twists, hip openers, and endocrine-stimulating asanas help regulate insulin sensitivity, cortisol spikes, and thyroid function.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#F8F5F0] border border-[#EDE8DF]">
              <div className="text-3xl mb-4">🧘‍♀️</div>
              <h3 className="text-xl font-bold text-[#6B4F3A] mb-3">Pelvic & Core Health</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Strengthen and release the pelvic floor muscles, supporting posture, bladder control, lower back stability, and core revitalization.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#F8F5F0] border border-[#EDE8DF]">
              <div className="text-3xl mb-4">🌿</div>
              <h3 className="text-xl font-bold text-[#6B4F3A] mb-3">Deep Stress Reset</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Balancing career, family, and personal life places heavy demands on women. Guided Yoga Nidra and restorative postures deeply recharge your nervous system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Batch & Schedule Card */}
      <section className="py-20 px-6 bg-[#F8F5F0]">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-rose-100 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4">
            <span className="text-xs uppercase font-bold text-rose-600 tracking-wider">Exclusive Batch</span>
            <h3 className="text-2xl md:text-3xl font-bold text-[#6B4F3A]">Women&apos;s Evening Studio Batch</h3>
            <p className="text-gray-600 text-sm max-w-lg leading-relaxed">
              Tuesdays & Thursdays • 6:30 PM – 7:30 PM<br />
              Location: Satellite Studio, Ahmedabad (Mats & props provided)
            </p>
            <div className="flex items-center gap-2 text-amber-700 bg-amber-50 px-3 py-1 rounded-full text-xs font-semibold w-fit">
              <Sparkles className="w-3.5 h-3.5" /> Small batch capped at 8 women for maximum personal care
            </div>
          </div>
          <div className="flex-shrink-0 text-center">
            <p className="text-3xl font-bold text-[#6B4F3A] mb-2">₹3,499 <span className="text-sm font-normal text-gray-400">/mo</span></p>
            <Link href="/free-trial" className="btn-primary">
              Book Free Trial
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 px-6 bg-[#6B4F3A] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold font-[family-name:var(--font-playfair)] mb-4">
            Begin Your Gentle Wellness Journey
          </h2>
          <p className="text-[#C5D9C2] mb-8 max-w-xl mx-auto">
            Book a complimentary trial class. Discuss your body goals privately with Priya and experience how tailored yoga can restore your vitality.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/free-trial" className="btn-primary">
              Reserve Free Trial Class
            </Link>
            <a
              href="https://wa.me/919876543210?text=Hi%20Priya!%20I%20would%20like%20to%20know%20more%20about%20the%20Women's%20Yoga%20sessions."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              💬 WhatsApp Priya Directly
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
