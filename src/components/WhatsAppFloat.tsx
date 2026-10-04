'use client';

import React, { useState } from 'react';
import { Flower2, X, MessageCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const WHATSAPP_URL =
  "https://wa.me/919876543210?text=Hi%20SattvaYoga!%20I'd%20like%20to%20know%20more%20about%20your%20yoga%20classes.";

export default function WhatsAppFloat() {
  const [isOpenNotice, setIsOpenNotice] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpenNotice(true)}
        className="whatsapp-float group cursor-pointer focus:outline-none"
        aria-label="Chat with a yoga expert"
      >
        <span className="wa-dot" />
        <span className="font-medium tracking-wide">Ask about a class</span>
      </button>

      {/* Interactive Quick Modal Dialog */}
      {isOpenNotice && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setIsOpenNotice(false)}
        >
          <div
            className="bg-[#fbfaf5] border border-[#dedbd2] rounded-lg max-w-md w-full p-7 shadow-2xl relative animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              onClick={() => setIsOpenNotice(false)}
              className="absolute top-4 right-4 text-[#77796f] hover:text-[#364132] p-1.5 rounded-full hover:bg-[#dedbd2]/40 transition-colors"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            <span className="eyebrow mb-2">
              <Flower2 size={13} className="text-[#566748]" />
              Direct Yoga Guidance
            </span>

            <h3 className="serif text-[26px] text-[#364132] font-serif leading-tight my-2">
              We&apos;d love to hear from you.
            </h3>

            <p className="text-[#77796f] text-[13px] leading-relaxed mb-6">
              Connect directly with our instructor on WhatsApp for quick questions on class timings, batches, fees, or book your free trial class online.
            </p>

            <div className="flex flex-col gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpenNotice(false)}
                className="btn-primary w-full justify-center !bg-[#25D366] hover:!bg-[#1ea851] !text-white text-[13px]"
              >
                <MessageCircle size={17} />
                <span>Chat on WhatsApp</span>
              </a>

              <Link
                href="/free-trial"
                onClick={() => setIsOpenNotice(false)}
                className="btn-secondary w-full justify-center text-[13px]"
              >
                <span>Request a Free Trial</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
