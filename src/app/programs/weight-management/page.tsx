import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Flame,
  Heart,
  Apple,
  Brain,
  Shield,
  Zap,
  Star,
  CheckCircle,
  ArrowRight,
  Clock,
  Users,
  Leaf,
} from "lucide-react";
import WeightManagementFAQ from "./WeightManagementFAQ";

export const metadata: Metadata = {
  title:
    "Weight Management Yoga Ahmedabad | Sustainable Wellness | Priya Sharma Yoga",
  description:
    "Achieve sustainable wellness through yoga in Ahmedabad. Priya Sharma's Weight Management program focuses on boosting metabolism, building strength and developing mindful eating — not quick fixes.",
  keywords: [
    "weight management yoga Ahmedabad",
    "yoga for weight loss Ahmedabad",
    "vinyasa yoga Ahmedabad",
    "metabolism yoga",
    "mindful eating yoga",
    "yoga wellness Ahmedabad",
  ],
  openGraph: {
    title: "Weight Management Yoga Ahmedabad | Sustainable Results",
    description:
      "Science-backed yoga for lasting wellness. Build metabolism, strength and body awareness with Priya Sharma in Ahmedabad.",
    url: "https://priyasharmayoga.com/programs/weight-management",
    type: "website",
  },
};

const benefits = [
  {
    icon: Flame,
    title: "Boosts Metabolism",
    description:
      "Dynamic Vinyasa sequences and power yoga raise your resting metabolic rate, helping your body burn energy more efficiently — even at rest.",
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: Zap,
    title: "Builds Lean Strength & Flexibility",
    description:
      "Yoga builds functional strength without bulk, improves posture and makes everyday movement effortless. You'll feel stronger within weeks.",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    icon: Apple,
    title: "Develops Mindful Eating",
    description:
      "Yoga cultivates body awareness that naturally reduces emotional eating, improves digestion and helps you recognize true hunger cues.",
    color: "bg-green-100 text-green-700",
  },
  {
    icon: Brain,
    title: "Reduces Stress-Related Weight Gain",
    description:
      "Chronic stress raises cortisol, which promotes fat storage especially around the abdomen. Our program directly targets this hormonal root cause.",
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    icon: Heart,
    title: "Improves Body Awareness & Self-Love",
    description:
      "We cultivate a positive relationship with your body — appreciating what it can do, not just how it looks. This mindset creates lasting change.",
    color: "bg-rose-100 text-rose-600",
  },
];

const programIncludes = [
  {
    icon: Flame,
    name: "Dynamic Vinyasa Flow",
    desc: "Linked breath-to-movement sequences that build cardiovascular fitness, heat the body and engage every major muscle group.",
  },
  {
    icon: Zap,
    name: "Core Strengthening Work",
    desc: "Targeted Navasana, Plank variations and Pilates-inspired yoga movements to build a strong, stable core.",
  },
  {
    icon: Leaf,
    name: "Breath & Energy Techniques",
    desc: "Kapalabhati and Agni Sara pranayama to stoke your digestive fire and improve energy levels throughout the day.",
  },
  {
    icon: Apple,
    name: "Holistic Nutrition Tips",
    desc: "Ayurveda-inspired guidance on eating for your body type — no crash diets, just sustainable and enjoyable food choices.",
  },
];

const journeys = [
  {
    name: "Meera Patel",
    role: "Teacher & Mother, 36",
    stars: 5,
    before: "Felt sluggish, low energy, uncomfortable in her body after her second child.",
    after:
      "After 4 months, wakes up energetic, moves with ease, and says she finally feels at home in her body again.",
    quote:
      "Priya never once talked about my weight. She talked about my energy, my strength, my breath. And somehow, everything else fell into place. I feel like myself again.",
  },
  {
    name: "Arjun Nair",
    role: "Software Engineer, 29",
    stars: 5,
    before: "Sedentary lifestyle, desk job, bloating and low stamina. Tried the gym but quit after 2 months.",
    after:
      "6 months in — consistent 5-days-a-week practice, improved digestion, confident and genuinely enjoys moving his body.",
    quote:
      "The gym felt like punishment. Yoga feels like a reward. I actually look forward to class. My waist size has gone down but more importantly, my energy and mood are completely transformed.",
  },
  {
    name: "Sunita Sharma",
    role: "Homemaker, 43",
    stars: 5,
    before: "Hormonal imbalances causing fatigue and weight gain. Felt like nothing would work.",
    after:
      "After 3 months of consistent practice combined with Ayurvedic guidance, her energy and hormonal symptoms improved measurably.",
    quote:
      "Priya understood that my issue was hormonal and treated me holistically. No generic fitness advice. Just thoughtful, compassionate guidance that actually worked.",
  },
];

const schedule = [
  {
    batch: "Power Morning",
    days: "Mon / Wed / Fri",
    time: "6:00 AM – 7:15 AM",
    mode: "Offline",
    spots: 5,
  },
  {
    batch: "Dynamic Evening",
    days: "Tue / Thu / Sat",
    time: "6:30 PM – 7:45 PM",
    mode: "Offline + Online",
    spots: 3,
  },
  {
    batch: "Online Vinyasa",
    days: "Mon – Sat",
    time: "7:00 AM – 8:00 AM",
    mode: "Online",
    spots: 10,
  },
  {
    batch: "Weekend Intensive",
    days: "Sunday",
    time: "7:00 AM – 9:00 AM",
    mode: "Offline",
    spots: 6,
  },
];

const pricing = [
  {
    plan: "Monthly",
    price: "₹2,799",
    per: "/ month",
    highlight: false,
    features: [
      "12 classes / month",
      "WhatsApp support",
      "Diet guidance document",
    ],
  },
  {
    plan: "Quarterly",
    price: "₹7,499",
    per: "/ 3 months",
    highlight: true,
    badge: "Best Value",
    features: [
      "36 classes",
      "Priority WhatsApp support",
      "Personalised diet tips",
      "1-on-1 progress check-in",
      "Save ₹900",
    ],
  },
  {
    plan: "Online-Only",
    price: "₹1,999",
    per: "/ month",
    highlight: false,
    features: [
      "12 online live classes",
      "Recorded session access",
      "Email Q&A support",
    ],
  },
];

const whatsappUrl =
  "https://wa.me/919876543210?text=Hi%20Priya%2C%20I%27m%20interested%20in%20the%20Weight%20Management%20Yoga%20program.%20Can%20I%20book%20a%20free%20trial%3F";

export default function WeightManagementPage() {
  return (
    <main className="min-h-screen bg-[#F8F5F0]">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#6B4F3A] via-[#8a6348] to-[#a07855] py-24 md:py-36">
        <div className="pointer-events-none absolute -top-20 -right-20 h-80 w-80 rounded-full bg-white/5" />
        <div className="pointer-events-none absolute bottom-0 -left-16 h-60 w-60 rounded-full bg-white/5" />

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 text-center text-white">
          <span className="mb-4 inline-block rounded-full bg-white/15 px-4 py-1 text-sm font-medium tracking-wide">
            🔥 Weight Management Program
          </span>
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
            Sustainable Wellness.{" "}
            <span className="text-[#f5d5a0]">Not Quick Fixes.</span>
          </h1>
          <p className="mx-auto mb-4 max-w-2xl text-lg text-amber-100 md:text-xl">
            A compassionate, science-backed yoga program that builds a healthier body from the
            inside out — through metabolism, strength, mindfulness and joy.
          </p>

          {/* Ethical note banner */}
          <div className="mx-auto mb-10 max-w-xl rounded-2xl border border-white/30 bg-white/10 px-6 py-4">
            <div className="flex items-center gap-2 justify-center">
              <Shield className="h-5 w-5 text-amber-200" />
              <p className="text-sm font-medium text-amber-100">
                Our Promise: We focus on sustainable wellness and how you feel — not the number on
                a scale.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/free-trial"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-[#6B4F3A] shadow-lg transition hover:bg-amber-50 hover:scale-105"
            >
              Book Free Trial Class <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 font-semibold text-white transition hover:bg-white/10"
            >
              Chat on WhatsApp
            </a>
          </div>
          <p className="mt-6 text-sm text-amber-200">
            ✓ All body types welcome &nbsp;·&nbsp; ✓ Beginner-friendly &nbsp;·&nbsp; ✓ Online &
            Offline
          </p>
        </div>
      </section>

      {/* ── Featured Visual ── */}
      <section className="max-w-5xl mx-auto px-4 -mt-16 sm:-mt-20 relative z-10 mb-12">
        <div className="relative aspect-[21/9] sm:aspect-[16/7] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#F5EDD6]">
          <Image
            src="/images/program-weight.jpg"
            alt="Dynamic Vinyasa Flow for Sustainable Weight Management Ahmedabad"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-6 flex flex-wrap items-center justify-between gap-2 text-white">
            <span className="text-xs sm:text-sm font-medium bg-black/50 backdrop-blur-md px-3.5 py-1.5 rounded-full">
              🌿 Dynamic Asanas + Pranayama + Mindful Nutrition Guidance
            </span>
            <span className="text-xs font-semibold bg-[#6B4F3A] px-3 py-1 rounded-full shadow">
              Holistic &amp; Sustainable
            </span>
          </div>
        </div>
      </section>

      {/* ── Ethical Philosophy Banner ── */}
      <section className="bg-[#FFF8F0] border-b border-[#e8d8c0] py-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <h2 className="mb-3 text-2xl font-bold text-[#3A2E1E]">Our Philosophy is Different</h2>
          <p className="mx-auto max-w-3xl text-[#6B4F3A] leading-relaxed">
            We don't promise "lose X kg in Y days." Those claims are misleading and often harmful.
            Instead, we help you build a body and lifestyle that{" "}
            <span className="font-semibold text-[#6B4F3A]">feels good</span> — one where energy
            is high, movement is joyful, digestion is smooth and you genuinely love how you feel.
            The physical changes that result are real, lasting, and yours to keep.
          </p>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-[#3A2E1E] md:text-4xl">
              5 Ways Yoga Transforms Your Body & Mind
            </h2>
            <p className="mx-auto max-w-2xl text-[#6B4F3A]">
              Each benefit reinforces the others, creating a powerful cycle of lasting wellness.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.title}
                  className={`rounded-2xl bg-[#F8F5F0] p-6 border border-[#e8e0d0] ${
                    i === 4 ? "md:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  <div
                    className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${b.color}`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 font-semibold text-[#3A2E1E] text-lg">{b.title}</h3>
                  <p className="text-sm text-[#6B4F3A] leading-relaxed">{b.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── What's Included ── */}
      <section className="py-16 md:py-24 bg-[#F8F5F0]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-[#3A2E1E] md:text-4xl">
              What's Included in Every Class
            </h2>
            <p className="mx-auto max-w-2xl text-[#6B4F3A]">
              A complete, holistic approach designed for real-world Indian lifestyles.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {programIncludes.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.name}
                  className="rounded-2xl bg-white p-6 text-center border border-[#e8e0d0] hover:border-[#a07855] transition"
                >
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#6B4F3A]/10 text-[#6B4F3A]">
                    <Icon className="h-7 w-7" />
                  </div>
                  <span className="mb-1 block text-xs font-bold uppercase tracking-widest text-[#a07855]">
                    0{idx + 1}
                  </span>
                  <h3 className="mb-3 font-semibold text-[#3A2E1E]">{item.name}</h3>
                  <p className="text-xs text-[#6B4F3A] leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Student Journeys ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="mb-4 text-center">
            <h2 className="mb-4 text-3xl font-bold text-[#3A2E1E] md:text-4xl">
              Real Student Journeys
            </h2>
            <p className="mx-auto max-w-2xl text-[#6B4F3A]">
              These stories are about energy, confidence and lifestyle — because that's what truly
              matters.
            </p>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {journeys.map((j) => (
              <div
                key={j.name}
                className="rounded-2xl border border-[#e8e0d0] bg-[#F8F5F0] overflow-hidden"
              >
                <div className="bg-[#FFF3E8] px-6 py-4 border-b border-[#e8d8c0]">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#a07855] mb-1">
                    Before
                  </p>
                  <p className="text-sm text-[#6B4F3A]">{j.before}</p>
                </div>
                <div className="bg-[#F0F7EC] px-6 py-4 border-b border-[#c8dfc0]">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#6B9E5E] mb-1">
                    After
                  </p>
                  <p className="text-sm text-[#3A2E1E]">{j.after}</p>
                </div>
                <div className="px-6 py-5">
                  <div className="mb-3 flex gap-0.5">
                    {Array.from({ length: j.stars }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="mb-4 text-sm italic text-[#3A2E1E] leading-relaxed">
                    "{j.quote}"
                  </p>
                  <p className="font-semibold text-[#3A2E1E] text-sm">{j.name}</p>
                  <p className="text-xs text-[#6B4F3A]">{j.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Schedule ── */}
      <section className="py-16 md:py-24 bg-[#F8F5F0]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-[#3A2E1E] md:text-4xl">Batch Schedule</h2>
            <p className="text-[#6B4F3A]">Limited batch sizes for personalised attention.</p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-[#e8e0d0] bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#e8e0d0] bg-[#FFF8F0]">
                  <th className="px-5 py-4 text-left font-semibold text-[#3A2E1E]">Batch</th>
                  <th className="px-5 py-4 text-left font-semibold text-[#3A2E1E]">Days</th>
                  <th className="px-5 py-4 text-left font-semibold text-[#3A2E1E]">Time</th>
                  <th className="px-5 py-4 text-left font-semibold text-[#3A2E1E]">Mode</th>
                  <th className="px-5 py-4 text-left font-semibold text-[#3A2E1E]">Spots</th>
                  <th className="px-5 py-4 text-left font-semibold text-[#3A2E1E]"></th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((row, i) => (
                  <tr
                    key={row.batch}
                    className={`border-b border-[#e8e0d0] last:border-0 ${
                      i % 2 === 0 ? "bg-white" : "bg-[#fafaf8]"
                    }`}
                  >
                    <td className="px-5 py-4 font-medium text-[#3A2E1E]">{row.batch}</td>
                    <td className="px-5 py-4 text-[#6B4F3A]">{row.days}</td>
                    <td className="px-5 py-4 text-[#6B4F3A]">
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {row.time}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-[#6B4F3A]">{row.mode}</td>
                    <td className="px-5 py-4">
                      <span
                        className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium ${
                          row.spots <= 4
                            ? "bg-red-100 text-red-700"
                            : "bg-green-100 text-green-700"
                        }`}
                      >
                        <Users className="h-3 w-3" /> {row.spots} left
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <Link
                        href="/free-trial"
                        className="rounded-full bg-[#6B4F3A] px-4 py-2 text-xs font-semibold text-white hover:bg-[#5a3e2b] transition"
                      >
                        Book Spot
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-[#3A2E1E] md:text-4xl">Simple Pricing</h2>
            <p className="text-[#6B4F3A]">Start with a free trial — no commitment needed.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {pricing.map((p) => (
              <div
                key={p.plan}
                className={`relative rounded-2xl p-7 border-2 transition ${
                  p.highlight
                    ? "border-[#6B4F3A] bg-[#FFF8F0] shadow-lg"
                    : "border-[#e8e0d0] bg-[#F8F5F0]"
                }`}
              >
                {p.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#6B4F3A] px-4 py-1 text-xs font-bold text-white">
                    {p.badge}
                  </span>
                )}
                <p className="mb-1 font-semibold text-[#6B4F3A]">{p.plan}</p>
                <p className="mb-5 text-4xl font-bold text-[#3A2E1E]">
                  {p.price}{" "}
                  <span className="text-base font-normal text-[#6B4F3A]">{p.per}</span>
                </p>
                <ul className="mb-7 space-y-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-[#3A2E1E]">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#6B9E5E]" /> {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/free-trial"
                  className={`block rounded-full py-3 text-center text-sm font-semibold transition ${
                    p.highlight
                      ? "bg-[#6B4F3A] text-white hover:bg-[#5a3e2b]"
                      : "border border-[#6B4F3A] text-[#6B4F3A] hover:bg-[#FFF8F0]"
                  }`}
                >
                  Start Free Trial
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 md:py-24 bg-[#F8F5F0]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-[#3A2E1E] md:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>
          <WeightManagementFAQ />
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-gradient-to-br from-[#6B4F3A] to-[#a07855] py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center text-white">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Begin your sustainable wellness journey. 🌱
          </h2>
          <p className="mb-8 text-amber-100 text-lg">
            Your first class is completely free. No pressure, no judgment — just a warm, supportive
            space to begin.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/free-trial"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-[#6B4F3A] shadow-lg transition hover:scale-105"
            >
              Book My Free Trial <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 font-semibold text-white transition hover:bg-white/10"
            >
              WhatsApp Priya
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
