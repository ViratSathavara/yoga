import type { Metadata } from "next";
import Image from "next/image";
import FreeTrialForm from "./FreeTrialForm";
import { CheckCircle, ArrowRight, Phone, CalendarCheck, Sparkles, Star } from "lucide-react";

export const metadata: Metadata = {
  title:
    "Book Free Yoga Trial Class Ahmedabad | No Experience Needed | Priya Sharma Yoga",
  description:
    "Book your FREE yoga trial class with Priya Sharma in Ahmedabad. No experience needed. Online & offline options. Choose your goal, pick a time and join us — absolutely free, no commitment.",
  keywords: [
    "free yoga class Ahmedabad",
    "trial yoga class Ahmedabad",
    "beginner yoga Ahmedabad",
    "yoga free trial",
    "online yoga free class",
    "yoga near me Ahmedabad",
  ],
  openGraph: {
    title: "Book Free Yoga Trial Class Ahmedabad | No Experience Needed",
    description:
      "Your first yoga class with Priya Sharma is completely FREE. No experience needed. Book your spot today.",
    url: "https://priyasharmayoga.com/free-trial",
    type: "website",
  },
};

const trialBenefits = [
  {
    icon: "🎯",
    title: "Personalised from Day One",
    desc: "Priya takes a few minutes before class to understand your goals and any physical considerations — so your very first class is tailored to you.",
  },
  {
    icon: "🤝",
    title: "Zero Pressure Environment",
    desc: "Your free trial has absolutely no sales pressure. Join the class, experience the practice, and decide only when you're ready.",
  },
  {
    icon: "🌐",
    title: "Online or In-Person — Your Choice",
    desc: "Attend from our studio in Ahmedabad or from the comfort of your home. The quality and attention are the same either way.",
  },
];

const whatHappensNext = [
  {
    step: "1",
    icon: CalendarCheck,
    title: "Submit Your Details",
    desc: "Fill the short form below. It takes less than 2 minutes.",
  },
  {
    step: "2",
    icon: Phone,
    title: "We Call You Within 2 Hours",
    desc: "Priya or her team will call to confirm your slot and answer any questions — personally, not through a chatbot.",
  },
  {
    step: "3",
    icon: Sparkles,
    title: "Join Your Free Class",
    desc: "Show up (online or in-person), experience the class and discover the difference a great teacher makes.",
  },
];

const testimonials = [
  {
    name: "Divya Menon",
    role: "First-timer, now 8 months in",
    avatar: "/images/avatar-riya.jpg",
    stars: 5,
    quote:
      "I was so nervous about my free trial — I thought everyone would be super advanced. Priya made me feel completely at home in 5 minutes. I signed up that same evening.",
  },
  {
    name: "Rahul Gupta",
    role: "Corporate professional",
    avatar: "/images/avatar-rahul.jpg",
    stars: 5,
    quote:
      "I came for the free class with zero intention of continuing. I left having booked a 3-month plan. The experience was that good. Priya is genuinely gifted.",
  },
  {
    name: "Smita Joshi",
    role: "Mother of three",
    avatar: "/images/avatar-sneha.jpg",
    stars: 5,
    quote:
      "The free trial took away all my fears. I'm not flexible, I'm not young, but Priya showed me yoga is for everyone. That class changed the direction of my health journey.",
  },
];

const faqItems = [
  {
    q: "What should I bring or wear for the free trial?",
    a: "Wear comfortable, stretchy clothing. If attending in-person, bring a water bottle — we have yoga mats available. For online, you'll need a yoga mat and a clear space of about 6x4 feet.",
  },
  {
    q: "Is the free trial really free? Are there any hidden charges?",
    a: "100% free. No hidden charges, no credit card needed, no commitment whatsoever. We believe in earning your trust through the quality of our teaching — not locking you in.",
  },
  {
    q: "What if I've never done yoga before in my life?",
    a: "Perfect — you're exactly who the free trial is designed for! Priya loves working with complete beginners. She will guide you step by step and make sure you feel confident and comfortable throughout.",
  },
];

export default function FreeTrialPage() {
  return (
    <main className="min-h-screen bg-[#f7f5ed] text-[#364132]">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[#566748] py-20 md:py-32 text-center text-[#fbf8ef]">
        <div className="pointer-events-none absolute -top-16 -right-16 h-72 w-72 rounded-full bg-white/5" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-white/5" />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center text-white">
          <p className="eyebrow !text-[#e4e8db] mb-3">Your first step can be simple</p>
          <h1 className="mb-4 font-serif text-4xl font-normal leading-tight md:text-6xl text-[#fbf8ef]">
            Come as you are.
            <br />
            <em className="text-[#cdd8be]">Leave a little lighter.</em>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-base md:text-lg text-[#faf8ef]/85 leading-relaxed">
            No experience needed. No pressure. Tell us what you&apos;re looking for and
            experience how personalized yoga feels.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-[#e4e8db]">
            <span className="flex items-center gap-1.5 bg-[#414c39]/50 px-3 py-1.5 rounded-full border border-[#8a947f]/40">
              <CheckCircle className="h-3.5 w-3.5 text-[#cdd8be]" /> 100% Complimentary
            </span>
            <span className="flex items-center gap-1.5 bg-[#414c39]/50 px-3 py-1.5 rounded-full border border-[#8a947f]/40">
              <CheckCircle className="h-3.5 w-3.5 text-[#cdd8be]" /> First-timer friendly
            </span>
            <span className="flex items-center gap-1.5 bg-[#414c39]/50 px-3 py-1.5 rounded-full border border-[#8a947f]/40">
              <CheckCircle className="h-3.5 w-3.5 text-[#cdd8be]" /> Online or Satellite studio
            </span>
          </div>
        </div>
      </section>

      {/* ── Why Free Trial ── */}
      <section className="bg-[#fbfaf5] border-b border-[#dedbd2] py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <p className="eyebrow mb-2">Practice without pressure</p>
            <h2 className="mb-3 font-serif text-3xl font-medium text-[#364132] md:text-4xl">
              Why We Offer a Free Trial
            </h2>
            <p className="mx-auto max-w-xl text-[13.5px] text-[#77796f]">
              We believe you should experience the quality of thoughtful guidance and a comfortable pace before deciding.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {trialBenefits.map((b) => (
              <div
                key={b.title}
                className="rounded-xl bg-[#f7f5ed] border border-[#dedbd2] p-6 text-center"
              >
                <div className="mb-3 text-3xl">{b.icon}</div>
                <h3 className="mb-2 font-serif text-[18px] text-[#364132]">{b.title}</h3>
                <p className="text-[12.5px] text-[#77796f] leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Form Section ── */}
      <section className="py-16 md:py-24 bg-[#f7f5ed]" id="booking-form">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <p className="eyebrow mb-2">Reserve your spot</p>
            <h2 className="mb-3 font-serif text-3xl font-medium text-[#364132] md:text-4xl">
              Book Your Free Trial Class
            </h2>
            <p className="text-[13.5px] text-[#77796f]">
              Fill in your details below and we&apos;ll confirm your spot within 2 hours.
            </p>
          </div>
          <FreeTrialForm />
        </div>
      </section>

      {/* ── What Happens Next ── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-2xl font-bold text-[#3A2E1E] md:text-3xl">
              What Happens After You Submit
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {whatHappensNext.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.step} className="flex flex-col items-center text-center">
                  <div className="relative mb-5">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#6B9E5E]/15">
                      <Icon className="h-7 w-7 text-[#6B9E5E]" />
                    </div>
                    <span className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#6B9E5E] text-xs font-bold text-white">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="mb-2 font-semibold text-[#3A2E1E]">{step.title}</h3>
                  <p className="text-sm text-[#6B4F3A] leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-16 md:py-24 bg-[#F8F5F0]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-2xl font-bold text-[#3A2E1E] md:text-3xl">
              What Students Said After Their First Free Class
            </h2>
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
                <p className="mb-5 text-[#3A2E1E] leading-relaxed italic text-sm">"{t.quote}"</p>
                <div className="flex items-center gap-3 pt-3 border-t border-[#f0ebe0]">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#86A873]/30 shadow-sm bg-[#F5EDD6]">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      fill
                      sizes="40px"
                      className="object-cover object-center"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-[#3A2E1E] text-sm">{t.name}</p>
                    <p className="text-xs text-[#6B4F3A]">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <h2 className="mb-3 text-2xl font-bold text-[#3A2E1E] md:text-3xl">
              Questions About the Free Trial
            </h2>
          </div>

          <div className="space-y-4">
            {faqItems.map((f) => (
              <div
                key={f.q}
                className="rounded-2xl border border-[#e8e0d0] bg-[#F8F5F0] p-6"
              >
                <p className="mb-2 font-semibold text-[#3A2E1E]">{f.q}</p>
                <p className="text-sm text-[#6B4F3A] leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Guarantee Banner ── */}
      <section className="bg-[#F0F7EC] border-y border-[#c8dfc0] py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <div className="mb-3 text-4xl">🛡️</div>
          <h2 className="mb-3 text-2xl font-bold text-[#3A2E1E]">Our Guarantee</h2>
          <p className="text-[#3d6b47] text-lg font-medium">
            Your free trial is 100% free, with zero commitment and absolutely no pressure to
            continue. We earn your trust through the quality of our teaching — nothing else.
          </p>
        </div>
      </section>
    </main>
  );
}
