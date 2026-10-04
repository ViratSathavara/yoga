import Link from 'next/link';
import { Flower2, ArrowUpRight, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="site-footer bg-[#414c39] text-[#f2f1e7] pt-16 pb-8 border-t border-[#414c39]">
      <div className="wrap">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-14 border-b border-[#66705e]/60">
          {/* Col 1: Brand & Ethos */}
          <div className="flex flex-col items-start gap-4">
            <Link href="/" className="brand-lockup group" aria-label="SattvaYoga home">
              <span className="brand-mark !border-[#8a947f] !text-[#d0d7c7]">
                <Flower2 size={20} strokeWidth={1.4} />
              </span>
              <span className="flex flex-col">
                <strong className="font-serif tracking-tight text-[20px] leading-tight !text-[#f4f1e7]">
                  SattvaYoga
                </strong>
                <small className="text-[8.5px] uppercase tracking-[0.16em] font-medium !text-[#c4c8b9]">
                  Mind · Body · Balance
                </small>
              </span>
            </Link>
            <p className="text-[#d1d1c4] text-[12.5px] leading-relaxed max-w-[270px] mt-1">
              Guiding you towards a healthier, happier and more balanced life through practical and sustainable yoga practices.
            </p>
            <div className="inline-flex items-center gap-2 bg-[#566748]/60 text-[#e4e8db] text-[10.5px] px-3 py-1.5 rounded-full border border-[#8a947f]/40 font-medium">
              <span>Satellite, Ahmedabad · In-Studio & Online</span>
            </div>
          </div>

          {/* Col 2: Explore */}
          <div>
            <p className="text-[#f2f1e7] text-[12px] font-semibold uppercase tracking-wider mb-4 text-[#c4c8b9]">
              Explore
            </p>
            <ul className="flex flex-col gap-2.5 text-[12.5px]">
              <li>
                <Link href="/about" className="text-[#eeece2] hover:text-[#c6d0b9] transition-colors">
                  Our approach
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-[#eeece2] hover:text-[#c6d0b9] transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="text-[#eeece2] hover:text-[#c6d0b9] transition-colors">
                  Class schedule
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-[#eeece2] hover:text-[#c6d0b9] transition-colors">
                  Studio Gallery
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-[#eeece2] hover:text-[#c6d0b9] transition-colors">
                  Journal & Articles
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-[#eeece2] hover:text-[#c6d0b9] transition-colors">
                  Help & FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Programs */}
          <div>
            <p className="text-[#f2f1e7] text-[12px] font-semibold uppercase tracking-wider mb-4 text-[#c4c8b9]">
              Find your practice
            </p>
            <ul className="flex flex-col gap-2.5 text-[12.5px]">
              <li>
                <Link href="/programs/beginner-yoga" className="text-[#eeece2] hover:text-[#c6d0b9] transition-colors">
                  Beginner Yoga
                </Link>
              </li>
              <li>
                <Link href="/programs/stress-relief" className="text-[#eeece2] hover:text-[#c6d0b9] transition-colors">
                  Stress Relief
                </Link>
              </li>
              <li>
                <Link href="/programs/weight-management" className="text-[#eeece2] hover:text-[#c6d0b9] transition-colors">
                  Weight Management
                </Link>
              </li>
              <li>
                <Link href="/programs/womens-yoga" className="text-[#eeece2] hover:text-[#c6d0b9] transition-colors">
                  Women&apos;s Yoga
                </Link>
              </li>
              <li>
                <Link href="/programs/online-yoga" className="text-[#eeece2] hover:text-[#c6d0b9] transition-colors">
                  Online Yoga Classes
                </Link>
              </li>
              <li>
                <Link href="/programs/corporate-yoga" className="text-[#eeece2] hover:text-[#c6d0b9] transition-colors">
                  Corporate Wellness
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Say Hello & Contact */}
          <div>
            <p className="text-[#f2f1e7] text-[12px] font-semibold uppercase tracking-wider mb-4 text-[#c4c8b9]">
              Say hello
            </p>
            <div className="flex flex-col gap-3 text-[12px] text-[#eeece2] mb-5">
              <div className="flex items-start gap-2.5">
                <MapPin size={15} className="text-[#c6d0b9] mt-0.5 flex-shrink-0" />
                <span>Satellite, Ahmedabad, Gujarat, India – 380015</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={14} className="text-[#c6d0b9] flex-shrink-0" />
                <a href="tel:+919876543210" className="hover:text-[#c6d0b9] transition-colors">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={14} className="text-[#c6d0b9] flex-shrink-0" />
                <a href="mailto:info@sattvayoga.com" className="hover:text-[#c6d0b9] transition-colors">
                  info@sattvayoga.com
                </a>
              </div>
            </div>

            <a
              href="https://wa.me/919876543210?text=Hi%20SattvaYoga!%20I'd%20like%20to%20inquire%20about%20joining%20yoga%20classes."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#c6d0b9] hover:text-[#f2f1e7] border-b border-[#8a947f] pb-1 text-[12px] font-medium transition-colors"
            >
              <span>WhatsApp inquiry</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10.5px] text-[#c9ccbf]">
          <p>© {new Date().getFullYear()} SattvaYoga · Mind · Body · Balance. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/free-trial" className="hover:text-[#f2f1e7] transition-colors">
              Book Trial
            </Link>
            <span>·</span>
            <Link href="/admin" className="hover:text-[#f2f1e7] transition-colors">
              Leads Portal
            </Link>
            <span>·</span>
            <span>Made for a more mindful day</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
