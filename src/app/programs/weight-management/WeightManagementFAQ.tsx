"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Will I actually lose weight doing yoga?",
    a: "Yoga creates the conditions for sustainable weight management — it boosts metabolism, reduces stress hormones that cause fat storage, improves digestion, and builds mindful eating habits. Many students do see changes in their body composition over time. However, we don't make specific weight-loss promises because everyone's body is unique and results depend on many factors including diet, sleep and lifestyle.",
  },
  {
    q: "How is this different from going to the gym?",
    a: "The gym is great for certain goals, but yoga offers something different: it works on your nervous system, hormonal balance, and relationship with your body — not just muscle and calorie burning. Many students who struggled to stick with the gym find yoga sustainable because it feels good rather than punishing. The two can also complement each other wonderfully.",
  },
  {
    q: "I'm very out of shape / have never exercised. Is this for me?",
    a: "Absolutely yes. We begin with modified, accessible poses and build gradually. There is no judgement about where you are starting from — only celebration of every step forward. Several of our most dedicated students started with very low fitness levels.",
  },
  {
    q: "Do you provide a diet plan?",
    a: "We provide Ayurveda-inspired nutritional guidance and tips rather than a strict diet plan. We believe in adding nourishing foods rather than restriction. For personalised clinical nutrition, we recommend consulting a registered dietitian — and we're happy to refer you to trusted professionals in Ahmedabad.",
  },
  {
    q: "How long before I see results?",
    a: "Energy levels and mood improvements are often felt within the first 2–3 weeks. Strength and flexibility gains typically become noticeable after 4–6 weeks of consistent practice. Body composition changes, for those that occur, generally take 3–6 months of consistent effort — as they should for sustainable results.",
  },
];

export default function WeightManagementFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div key={i} className="rounded-2xl border border-[#e8e0d0] bg-white overflow-hidden">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
          >
            <span className="font-semibold text-[#3A2E1E]">{faq.q}</span>
            <ChevronDown
              className={`h-5 w-5 shrink-0 text-[#6B4F3A] transition-transform duration-200 ${
                open === i ? "rotate-180" : ""
              }`}
            />
          </button>
          {open === i && (
            <div className="border-t border-[#e8e0d0] bg-[#FFF8F0] px-6 py-5">
              <p className="text-[#6B4F3A] leading-relaxed">{faq.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
