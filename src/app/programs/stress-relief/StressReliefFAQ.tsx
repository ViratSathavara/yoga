"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Do I need any experience with yoga or meditation to join?",
    a: "Absolutely not! The Stress Relief program is specifically designed to be beginner-friendly. We start at a very gentle pace and Priya provides step-by-step guidance. Many of our most transformed students had never done yoga before joining.",
  },
  {
    q: "How quickly will I notice a difference in my stress levels?",
    a: "Most students report feeling calmer and sleeping better within 1–2 weeks of consistent practice. Deeper, lasting changes in stress reactivity typically develop over 4–8 weeks. Yoga Nidra in particular tends to have an almost immediate effect on sleep quality.",
  },
  {
    q: "Can I join the online batch if I live outside Ahmedabad?",
    a: "Yes! Our online batches are open to students across India. All you need is a stable internet connection, a yoga mat and a quiet space. The experience is live and interactive — not pre-recorded.",
  },
  {
    q: "What should I do if I miss a class?",
    a: "Life happens! You can carry forward up to 4 missed classes per month. We also share a summary of key techniques via WhatsApp so you never fall too far behind.",
  },
  {
    q: "I have a medical condition (hypertension, anxiety disorder, etc.). Can I still join?",
    a: "In most cases, yes — yoga is therapeutic for many conditions. However, we ask that you inform Priya during your free trial class so the practice can be safely customised for you. We work closely with several doctors in Ahmedabad for integrated care.",
  },
];

export default function StressReliefFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div key={i} className="rounded-2xl border border-[#e8e0d0] bg-[#F8F5F0] overflow-hidden">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
          >
            <span className="font-semibold text-[#3A2E1E]">{faq.q}</span>
            <ChevronDown
              className={`h-5 w-5 shrink-0 text-[#6B9E5E] transition-transform duration-200 ${
                open === i ? "rotate-180" : ""
              }`}
            />
          </button>
          {open === i && (
            <div className="border-t border-[#e8e0d0] bg-white px-6 py-5">
              <p className="text-[#6B4F3A] leading-relaxed">{faq.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
