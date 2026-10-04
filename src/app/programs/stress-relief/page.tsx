import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Wind,
  Heart,
  Moon,
  Brain,
  CheckCircle,
  Star,
  ChevronDown,
  ArrowRight,
  Clock,
  Users,
  Leaf,
  Sparkles,
} from "lucide-react";
import StressReliefFAQ from "./StressReliefFAQ";

export const metadata: Metadata = {
  title: "Stress Relief Yoga Ahmedabad | Find Your Calm | Priya Sharma Yoga",
  description:
    "Struggling with stress, anxiety or burnout? Join Priya Sharma's Stress Relief Yoga program in Ahmedabad. Pranayama, Restorative poses, Meditation & Yoga Nidra. Book your free trial today.",
  keywords: [
    "stress relief yoga Ahmedabad",
    "anxiety yoga Ahmedabad",
    "relaxation yoga",
    "yoga nidra Ahmedabad",
    "pranayama classes Ahmedabad",
    "restorative yoga",
    "meditation Ahmedabad",
  ],
  openGraph: {
    title: "Stress Relief Yoga Ahmedabad | Find Your Calm",
    description:
      "Science-backed yoga techniques to melt away stress. Join Priya Sharma's calm, welcoming classes in Ahmedabad.",
    url: "https://priyasharmayoga.com/programs/stress-relief",
    type: "website",
  },
};

const stats = [
  { value: "89%", label: "of Indians report significant stress daily" },
  { value: "76%", label: "of doctor visits are stress-related" },
  { value: "₹1.1L Cr", label: "lost in productivity to stress annually in India" },
  { value: "3x", label: "higher risk of heart disease from chronic stress" },
];

const benefits = [
  {
    icon: Brain,
    title: "Lowers Cortisol Levels",
    description:
      "Studies show regular yoga reduces cortisol (the stress hormone) by up to 30%, leading to calmer reactions and better decision-making.",
    color: "bg-sage/20 text-sage",
  },
  {
    icon: Heart,
    title: "Regulates the Nervous System",
    description:
      "Pranayama activates the parasympathetic (rest-and-digest) nervous system, countering the chronic fight-or-flight state most of us live in.",
    color: "bg-green-100 text-green-700",
  },
  {
    icon: Moon,
    title: "Dramatically Improves Sleep",
    description:
      "Yoga Nidra and deep relaxation techniques improve sleep quality by 55% on average, according to clinical research.",
    color: "bg-indigo-100 text-indigo-700",
  },
  {
    icon: Wind,
    title: "Sharpens Mental Clarity",
    description:
      "Mindful movement and breath work clear mental fog, reduce anxiety-driven overthinking, and improve focus at work and home.",
    color: "bg-amber-100 text-amber-700",
  },
];

const programIncludes = [
  {
    icon: Wind,
    name: "Pranayama Techniques",
    desc: "Nadi Shodhana, Bhramari, 4-7-8 breathing and more — each chosen to instantly calm a racing mind.",
  },
  {
    icon: Leaf,
    name: "Restorative Poses",
    desc: "Supported Supta Baddha Konasana, Legs-Up-the-Wall, Child's Pose — held with bolsters for deep nervous system release.",
  },
  {
    icon: Sparkles,
    name: "Guided Meditation",
    desc: "Body-scan, loving-kindness and visualisation meditations. No prior experience needed — just a willingness to pause.",
  },
  {
    icon: Moon,
    name: "Yoga Nidra",
    desc: "Called 'yogic sleep', this 30-minute practice is equivalent to 4 hours of rest. A complete reset for your body and mind.",
  },
];

const schedule = [
  {
    batch: "Morning Calm",
    days: "Mon / Wed / Fri",
    time: "6:30 AM – 7:30 AM",
    mode: "Offline",
    spots: 4,
  },
  {
    batch: "Lunch Reset",
    days: "Tue / Thu",
    time: "12:30 PM – 1:15 PM",
    mode: "Online",
    spots: 8,
  },
  {
    batch: "Evening Unwind",
    days: "Mon – Sat",
    time: "7:00 PM – 8:00 PM",
    mode: "Offline + Online",
    spots: 3,
  },
  {
    batch: "Weekend Deep Dive",
    days: "Saturday",
    time: "8:00 AM – 10:00 AM",
    mode: "Offline",
    spots: 6,
  },
];

const pricing = [
  {
    plan: "Monthly",
    price: "₹2,499",
    per: "/ month",
    highlight: false,
    features: ["12 classes / month", "WhatsApp support", "Home practice guide"],
  },
  {
    plan: "Quarterly",
    price: "₹6,499",
    per: "/ 3 months",
    highlight: true,
    badge: "Most Popular",
    features: [
      "36 classes",
      "Priority WhatsApp support",
      "Home practice guide",
      "1 free Yoga Nidra session",
      "Save ₹999",
    ],
  },
  {
    plan: "Online-Only",
    price: "₹1,799",
    per: "/ month",
    highlight: false,
    features: ["12 online classes / month", "Recorded sessions access", "Email support"],
  },
];

const testimonials = [
  {
    name: "Rohan Mehta",
    role: "IT Manager, 34",
    stars: 5,
    quote:
      "I was on the verge of burnout — 12-hour days and insomnia. Within 3 weeks of Priya's evening classes, I was sleeping 7 hours. My colleagues literally noticed the change.",
  },
  {
    name: "Ananya Desai",
    role: "CA & Mother of Two, 38",
    stars: 5,
    quote:
      "The Yoga Nidra sessions are magical. I didn't believe anything could calm my anxious mind. Now I do it every night. Life-changing is not an exaggeration.",
  },
  {
    name: "Kiran Shah",
    role: "Business Owner, 45",
    stars: 5,
    quote:
      "Priya understands the stress of a busy professional. She customises each session. My blood pressure medication dosage has reduced — with my doctor's approval!",
  },
];

const whatsappUrl =
  "https://wa.me/919876543210?text=Hi%20Priya%2C%20I%27m%20interested%20in%20the%20Stress%20Relief%20Yoga%20program.%20Can%20I%20book%20a%20free%20trial%3F";

export default function StressReliefPage() {
  return (
    <main className="min-h-screen bg-[#F8F5F0]">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#3d6b47] via-[#4a7a55] to-[#6B9E5E] py-24 md:py-36">
        {/* Decorative circles */}
        <div className="pointer-events-none absolute -top-20 -right-20 h-80 w-80 rounded-full bg-white/5" />
        <div className="pointer-events-none absolute bottom-0 -left-16 h-60 w-60 rounded-full bg-white/5" />

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 text-center text-white">
          <span className="mb-4 inline-block rounded-full bg-white/15 px-4 py-1 text-sm font-medium tracking-wide">
            🌿 Stress Relief Program
          </span>
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
            Breathe Out the Stress.{" "}
            <span className="text-[#d4e8a0]">Breathe In the Calm.</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-green-100 md:text-xl">
            A science-backed yoga program specifically designed to dissolve chronic stress, quiet
            anxiety and restore the deep rest your body is craving — even if you have never done
            yoga before.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/free-trial"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-[#3d6b47] shadow-lg transition hover:bg-green-50 hover:scale-105"
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
          <p className="mt-6 text-sm text-green-200">
            ✓ No prior yoga experience needed &nbsp;·&nbsp; ✓ Online & Offline batches
            &nbsp;·&nbsp; ✓ All stress levels welcome
          </p>
        </div>
      </section>

      {/* ── Featured Visual ── */}
      <section className="max-w-5xl mx-auto px-4 -mt-16 sm:-mt-20 relative z-10 mb-12">
        <div className="relative aspect-[21/9] sm:aspect-[16/7] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#F5EDD6]">
          <Image
            src="/images/program-stress.jpg"
            alt="Restorative Yoga and Pranayama Meditation for Stress Relief Ahmedabad"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-6 flex flex-wrap items-center justify-between gap-2 text-white">
            <span className="text-xs sm:text-sm font-medium bg-black/50 backdrop-blur-md px-3.5 py-1.5 rounded-full">
              🌿 Restorative Asanas · Deep Pranayama · Guided Yoga Nidra
            </span>
            <span className="text-xs font-semibold bg-[#3d6b47] px-3 py-1 rounded-full shadow">
              Lower Cortisol &amp; Sleep Deeply
            </span>
          </div>
        </div>
      </section>

      {/* ── Stress Epidemic Stats ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-[#3A2E1E] md:text-4xl">
              The Stress Epidemic Is Real
            </h2>
            <p className="mx-auto max-w-2xl text-[#6B4F3A]">
              You are not imagining it. Chronic stress has become one of the biggest health crises
              of our generation. The good news? Yoga is one of the most effective, evidence-based
              solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl bg-[#F8F5F0] p-6 text-center shadow-sm border border-[#e8e0d0]"
              >
                <p className="mb-2 text-3xl font-bold text-[#6B9E5E] md:text-4xl">{s.value}</p>
                <p className="text-sm text-[#6B4F3A] leading-snug">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl bg-[#F0F7EC] border border-[#c8dfc0] p-6 text-center">
            <p className="text-[#3d6b47] font-medium text-lg">
              💚 &nbsp; Yoga is not a luxury. For a stressed mind and body, it is medicine.
            </p>
          </div>
        </div>
      </section>

      {/* ── How Yoga Helps ── */}
      <section className="py-16 md:py-24 bg-[#F8F5F0]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-[#3A2E1E] md:text-4xl">
              How Yoga Relieves Stress — The Science
            </h2>
            <p className="mx-auto max-w-2xl text-[#6B4F3A]">
              These are not just ancient claims. Modern science confirms that regular yoga practice
              creates measurable changes in your brain and body.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.title}
                  className="flex gap-5 rounded-2xl bg-white p-6 shadow-sm border border-[#e8e0d0]"
                >
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${b.color}`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-[#3A2E1E] text-lg">{b.title}</h3>
                    <p className="text-sm text-[#6B4F3A] leading-relaxed">{b.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Program Includes ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-[#3A2E1E] md:text-4xl">
              What Your Sessions Include
            </h2>
            <p className="mx-auto max-w-2xl text-[#6B4F3A]">
              Each class is thoughtfully structured to take you from wound-up to deeply at ease.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {programIncludes.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.name}
                  className="rounded-2xl bg-[#F8F5F0] p-6 text-center border border-[#e8e0d0] hover:border-[#6B9E5E] transition"
                >
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#6B9E5E]/15 text-[#6B9E5E]">
                    <Icon className="h-7 w-7" />
                  </div>
                  <span className="mb-1 block text-xs font-bold uppercase tracking-widest text-[#6B9E5E]">
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

      {/* ── Schedule ── */}
      <section className="py-16 md:py-24 bg-[#F8F5F0]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-[#3A2E1E] md:text-4xl">
              Batch Schedule
            </h2>
            <p className="text-[#6B4F3A]">
              Find a time that fits your life. All batches are limited to 8 students for personal
              attention.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-[#e8e0d0] bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#e8e0d0] bg-[#F0F7EC]">
                  <th className="px-5 py-4 text-left font-semibold text-[#3A2E1E]">Batch</th>
                  <th className="px-5 py-4 text-left font-semibold text-[#3A2E1E]">Days</th>
                  <th className="px-5 py-4 text-left font-semibold text-[#3A2E1E]">Time</th>
                  <th className="px-5 py-4 text-left font-semibold text-[#3A2E1E]">Mode</th>
                  <th className="px-5 py-4 text-left font-semibold text-[#3A2E1E]">Spots Left</th>
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
                        className="rounded-full bg-[#6B9E5E] px-4 py-2 text-xs font-semibold text-white hover:bg-[#5a8a4d] transition"
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
            <p className="text-[#6B4F3A]">Start with a free trial — no credit card required.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {pricing.map((p) => (
              <div
                key={p.plan}
                className={`relative rounded-2xl p-7 border-2 transition ${
                  p.highlight
                    ? "border-[#6B9E5E] bg-[#F0F7EC] shadow-lg"
                    : "border-[#e8e0d0] bg-[#F8F5F0]"
                }`}
              >
                {p.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#6B9E5E] px-4 py-1 text-xs font-bold text-white">
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
                      ? "bg-[#6B9E5E] text-white hover:bg-[#5a8a4d]"
                      : "border border-[#6B9E5E] text-[#6B9E5E] hover:bg-[#F0F7EC]"
                  }`}
                >
                  Start Free Trial
                </Link>
              </div>
            ))}
          </div>

          <p className="mt-6 text-center text-sm text-[#6B4F3A]">
            💬 Need a custom plan? &nbsp;
            <a href={whatsappUrl} className="font-medium text-[#6B9E5E] underline underline-offset-2">
              Chat with Priya on WhatsApp
            </a>
          </p>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-16 md:py-24 bg-[#F8F5F0]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-[#3A2E1E] md:text-4xl">
              Real People. Real Relief.
            </h2>
            <p className="text-[#6B4F3A]">
              Here's what stressed professionals say after joining the program.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl bg-white p-7 shadow-sm border border-[#e8e0d0]"
              >
                <div className="mb-4 flex gap-0.5">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="mb-5 text-[#3A2E1E] leading-relaxed italic">"{t.quote}"</p>
                <div>
                  <p className="font-semibold text-[#3A2E1E]">{t.name}</p>
                  <p className="text-xs text-[#6B4F3A]">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-[#3A2E1E] md:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>
          <StressReliefFAQ />
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-gradient-to-br from-[#3d6b47] to-[#6B9E5E] py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center text-white">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Your calm is one class away. 🌿
          </h2>
          <p className="mb-8 text-green-100 text-lg">
            Join hundreds of students in Ahmedabad who have reclaimed their peace. Your first class
            is completely free — no commitment, no pressure.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/free-trial"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-[#3d6b47] shadow-lg transition hover:scale-105"
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
