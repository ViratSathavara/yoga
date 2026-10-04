import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Star, Play, Quote, Users, ThumbsUp, MessageSquare } from 'lucide-react';

// ─── Types ───────────────────────────────────────────────────────────────────

interface Testimonial {
  name: string;
  location: string;
  program: string;
  rating: number;
  text: string;
  initials: string;
  avatarColor: string;
  duration: string;
  avatar: string;
}

// ─── Data ────────────────────────────────────────────────────────────────────

const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Meera Joshi',
    location: 'Satellite, Ahmedabad',
    program: 'Beginner Yoga',
    rating: 5,
    text: "I was 42 years old and had never done yoga in my life. Priya made me feel so comfortable from day one. Three months in, my back pain is almost completely gone and I sleep better than I have in years. I only wish I'd started sooner!",
    initials: 'MJ',
    avatarColor: 'bg-purple-100 text-purple-700',
    duration: '3 months',
    avatar: '/images/avatar-riya.jpg',
  },
  {
    name: 'Rahul Sharma',
    location: 'Vastrapur, Ahmedabad',
    program: 'Weight Management',
    rating: 5,
    text: "I joined for weight management but got so much more. My energy levels doubled, my stress is gone, and I've lost 8 kgs over 5 months. Priya's holistic approach — combining yoga with mindful eating — made all the difference. Highly recommended!",
    initials: 'RS',
    avatarColor: 'bg-blue-100 text-blue-700',
    duration: '5 months',
    avatar: '/images/avatar-rahul.jpg',
  },
  {
    name: 'Ananya Desai',
    location: 'Bopal, Ahmedabad',
    program: 'Online Yoga',
    rating: 5,
    text: "Being a working mother, I couldn't make it to a studio. Priya's online classes are a blessing! Same quality, same personal attention — just from the comfort of my living room. The flexibility has made yoga a permanent part of my daily routine.",
    initials: 'AD',
    avatarColor: 'bg-rose-100 text-rose-700',
    duration: '6 months',
    avatar: '/images/avatar-sneha.jpg',
  },
  {
    name: 'Vikram Patel',
    location: 'Bodakdev, Ahmedabad',
    program: 'Stress Relief',
    rating: 5,
    text: "I was dealing with severe work-related anxiety and insomnia. After just 6 weeks of Priya's stress relief program, I was sleeping properly for the first time in years. The breathing techniques she taught me are genuinely life-changing.",
    initials: 'VP',
    avatarColor: 'bg-green-100 text-green-700',
    duration: '4 months',
    avatar: '/images/avatar-vikram.jpg',
  },
  {
    name: 'Shruti Mehta',
    location: 'Prahlad Nagar, Ahmedabad',
    program: "Women's Yoga",
    rating: 5,
    text: "Priya understands women's bodies and health challenges better than anyone I've met. The women's program addresses hormonal balance, PCOS, and stress in such a thoughtful way. I feel more in tune with my body than ever before.",
    initials: 'SM',
    avatarColor: 'bg-pink-100 text-pink-700',
    duration: '7 months',
    avatar: '/images/avatar-kavya.jpg',
  },
  {
    name: 'Deepak Nair',
    location: 'Thaltej, Ahmedabad',
    program: 'Corporate Yoga',
    rating: 5,
    text: "We hired Priya for corporate wellness sessions for our 50-person team and the impact was immediate. Productivity improved, sick days reduced, and team morale went up. She customised everything perfectly for busy professionals. Worth every rupee.",
    initials: 'DN',
    avatarColor: 'bg-orange-100 text-orange-700',
    duration: '8 months',
    avatar: '/images/avatar-amit.jpg',
  },
  {
    name: 'Kavya Reddy',
    location: 'Science City, Ahmedabad',
    program: 'Beginner Yoga',
    rating: 5,
    text: "I was extremely stiff and self-conscious about joining. Priya's gentle encouragement and the small class size made all the difference. Now, four months later, I look forward to every session. It has become the highlight of my week!",
    initials: 'KR',
    avatarColor: 'bg-teal-100 text-teal-700',
    duration: '4 months',
    avatar: '/images/avatar-priti.jpg',
  },
  {
    name: 'Pooja Shah',
    location: 'Maninagar, Ahmedabad',
    program: 'Online Yoga',
    rating: 5,
    text: "I live 45 minutes away so in-person wasn't practical. The online experience exceeded every expectation. Priya corrects my posture over video better than some teachers do in person! The community she's built online is so warm and supportive.",
    initials: 'PS',
    avatarColor: 'bg-indigo-100 text-indigo-700',
    duration: '5 months',
    avatar: '/images/avatar-deepa.jpg',
  },
  {
    name: 'Amit Kulkarni',
    location: 'Navrangpura, Ahmedabad',
    program: 'Weight Management',
    rating: 5,
    text: "Lost 12 kgs in 6 months and gained something far more valuable — consistency and a positive relationship with my body. Priya never made it about the scale. It was always about how I felt, and that mindset shift made everything click.",
    initials: 'AK',
    avatarColor: 'bg-amber-100 text-amber-700',
    duration: '6 months',
    avatar: '/images/avatar-hetal.jpg',
  },
];

const RATING_BREAKDOWN = [
  { stars: 5, percent: 89 },
  { stars: 4, percent: 8 },
  { stars: 3, percent: 3 },
  { stars: 2, percent: 0 },
  { stars: 1, percent: 0 },
];

const JOURNEY_ITEMS = [
  {
    emoji: '😴',
    before: 'Restless nights, poor sleep',
    after: '7–8 hrs of deep, restorative sleep',
  },
  {
    emoji: '💪',
    before: 'Stiff joints and low energy',
    after: 'Flexible, energetic and pain-free',
  },
  {
    emoji: '🧠',
    before: 'Anxious, overwhelmed mind',
    after: 'Calm focus and mental clarity',
  },
  {
    emoji: '🌱',
    before: 'No consistent self-care routine',
    after: 'Daily yoga practice, joyfully maintained',
  },
  {
    emoji: '❤️',
    before: 'Low body confidence',
    after: 'Accepting and loving your body',
  },
  {
    emoji: '🎯',
    before: 'Vague wellness goals, no progress',
    after: 'Clear milestones, visible transformation',
  },
];

// ─── Sub-components ──────────────────────────────────────────────────────────

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={14}
          className={s <= rating ? 'fill-amber-400 text-amber-400' : 'text-gray-200'}
        />
      ))}
    </div>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <article className="bg-white rounded-2xl border border-[#86A873]/20 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col">
      {/* Quote icon */}
      <Quote size={24} className="text-[#86A873]/50 mb-4 flex-shrink-0" />

      {/* Text */}
      <p className="text-[#5a4a3a] text-sm leading-relaxed flex-1 mb-5 italic">
        "{t.text}"
      </p>

      {/* Footer */}
      <div className="flex items-center gap-3 pt-4 border-t border-[#86A873]/15">
        <div className="relative w-11 h-11 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#86A873]/30 shadow-sm bg-[#F5EDD6]">
          <Image
            src={t.avatar}
            alt={t.name}
            fill
            sizes="44px"
            className="object-cover object-center"
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-[#3a2e24] text-sm truncate">{t.name}</p>
          <p className="text-[#7a6a5a] text-xs truncate">{t.location}</p>
        </div>
        <div className="text-right flex-shrink-0">
          <StarRating rating={t.rating} />
          <span className="text-[10px] text-[#4A7C59] font-semibold mt-0.5 block">{t.program}</span>
        </div>
      </div>
    </article>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export const metadata = {
  title: 'Student Stories | Mind · Body · Balance — SattvaYoga',
  description:
    'Hear how thoughtful guidance and steady practice helped 500+ students establish a yoga routine they love in Ahmedabad.',
};

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-[#f7f5ed] text-[#364132]">

      {/* ── Hero ── */}
      <section className="relative pt-32 pb-20 bg-[#566748] text-center text-[#fbf8ef] overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <p className="eyebrow !text-[#e4e8db] mb-2 justify-center">
            What students say
          </p>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#fbf8ef] leading-tight mb-4"
          >
            Practice is Personal
          </h1>
          <p className="text-base md:text-lg text-[#faf8ef]/80 leading-relaxed max-w-2xl mx-auto">
            Hear from our community about how thoughtful, unhurried guidance transformed their physical ease and everyday calm.
          </p>
        </div>

        {/* Stats */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="grid grid-cols-3 gap-4 md:gap-8">
            {[
              { icon: Users, value: '500+', label: 'Happy Students', color: 'text-[#6B9E5E]' },
              { icon: Star, value: '4.9/5', label: 'Average Rating', color: 'text-amber-500' },
              { icon: MessageSquare, value: '200+', label: 'Reviews', color: 'text-[#6B4F3A]' },
            ].map(({ icon: Icon, value, label, color }) => (
              <div key={label} className="bg-white/80 backdrop-blur-sm rounded-2xl border border-[#86A873]/15 p-5 text-center shadow-sm">
                <Icon size={22} className={`${color} mx-auto mb-2`} />
                <p className={`text-2xl md:text-3xl font-bold ${color}`} style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  {value}
                </p>
                <p className="text-[#6B4F3A]/60 text-xs md:text-sm mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">

        {/* ── Testimonials Grid ── */}
        <div className="mb-20">
          <h2
            className="text-2xl md:text-3xl font-bold text-[#6B4F3A] text-center mb-10"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            What Our Students Say
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.name} t={t} />
            ))}
          </div>
        </div>

        {/* ── Video Testimonials ── */}
        <div className="mb-20">
          <h2
            className="text-2xl md:text-3xl font-bold text-[#6B4F3A] text-center mb-3"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Video Stories
          </h2>
          <p className="text-center text-[#6B4F3A]/60 mb-10">
            Hear directly from our students about their transformation journeys.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: 'Meera Joshi',
                program: 'Beginner Yoga • 3 Months',
                avatar: '/images/avatar-riya.jpg',
                cover: '/images/gallery-2.jpg',
                quote: '"From zero flexibility to touching my toes — my yoga journey with Priya"',
              },
              {
                name: 'Rahul Sharma',
                program: 'Weight Management • 5 Months',
                avatar: '/images/avatar-rahul.jpg',
                cover: '/images/gallery-6.jpg',
                quote: '"How I lost 8 kgs and found peace of mind with Priya\'s yoga"',
              },
            ].map((v) => (
              <div key={v.name} className="group relative rounded-3xl overflow-hidden shadow-md cursor-pointer hover:shadow-2xl transition-all duration-300">
                {/* Thumbnail */}
                <div className="relative h-64 w-full overflow-hidden bg-gray-900 flex items-center justify-center">
                  <Image
                    src={v.cover}
                    alt={v.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 550px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/50" />
                  
                  {/* Student Badge */}
                  <div className="absolute top-5 left-5 flex items-center gap-3 z-10">
                    <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-white/80 shadow-md">
                      <Image
                        src={v.avatar}
                        alt={v.name}
                        fill
                        sizes="44px"
                        className="object-cover object-center"
                      />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm drop-shadow">{v.name}</p>
                      <p className="text-white/80 text-xs drop-shadow">{v.program}</p>
                    </div>
                  </div>

                  {/* Play Button */}
                  <div className="relative z-10 w-16 h-16 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-[#6B9E5E] group-hover:text-white transition-all duration-300 shadow-2xl text-[#6B9E5E]">
                    <Play size={26} className="fill-current translate-x-0.5" />
                  </div>
                </div>

                {/* Caption */}
                <div className="bg-white p-5 border-t border-[#86A873]/10">
                  <p className="text-[#3a2e24] font-medium text-sm italic leading-relaxed">
                    {v.quote}
                  </p>
                  <div className="flex items-center gap-1 mt-2">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={12} className="fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-[#7a6a5a] text-xs ml-1 font-semibold">5.0 Verified Student</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Student Journey ── */}
        <div className="mb-20 bg-white rounded-3xl border border-[#86A873]/15 shadow-sm p-10 md:p-14">
          <div className="text-center mb-12">
            <h2
              className="text-2xl md:text-3xl font-bold text-[#6B4F3A] mb-3"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              The Student Journey
            </h2>
            <p className="text-[#6B4F3A]/60 max-w-xl mx-auto">
              Real lifestyle improvements our students experience — because transformation is more than just numbers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {JOURNEY_ITEMS.map((item) => (
              <div key={item.emoji} className="rounded-2xl border border-[#86A873]/15 overflow-hidden">
                {/* Before */}
                <div className="p-4 bg-[#F5EDD6]/60 border-b border-[#86A873]/15">
                  <p className="text-xs font-bold text-[#6B4F3A]/50 uppercase tracking-wider mb-2">Before</p>
                  <div className="flex items-start gap-2">
                    <span className="text-lg">{item.emoji}</span>
                    <p className="text-[#6B4F3A]/70 text-sm leading-relaxed">{item.before}</p>
                  </div>
                </div>
                {/* After */}
                <div className="p-4 bg-[#86A873]/8">
                  <p className="text-xs font-bold text-[#6B9E5E] uppercase tracking-wider mb-2">After ✨</p>
                  <div className="flex items-start gap-2">
                    <ThumbsUp size={16} className="text-[#6B9E5E] flex-shrink-0 mt-0.5" />
                    <p className="text-[#6B4F3A] text-sm font-medium leading-relaxed">{item.after}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Rating Breakdown ── */}
        <div className="mb-20 bg-white rounded-3xl border border-[#86A873]/15 shadow-sm p-10 md:p-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Overall score */}
            <div className="text-center">
              <p
                className="text-8xl font-bold text-[#6B4F3A]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                4.9
              </p>
              <div className="flex justify-center gap-1 my-3">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={28} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-[#6B4F3A]/60 text-sm">Based on 200+ verified student reviews</p>
            </div>

            {/* Bar chart */}
            <div className="space-y-3">
              {RATING_BREAKDOWN.map(({ stars, percent }) => (
                <div key={stars} className="flex items-center gap-3">
                  <div className="flex items-center gap-0.5 w-24 flex-shrink-0">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        size={11}
                        className={s <= stars ? 'fill-amber-400 text-amber-400' : 'text-gray-200'}
                      />
                    ))}
                  </div>
                  <div className="flex-1 h-3 bg-[#F5EDD6] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-amber-400 to-amber-500 rounded-full"
                      style={{ width: `${percent}%` }}
                    />
                  </div>
                  <span className="text-xs text-[#6B4F3A]/60 font-medium w-8 text-right">{percent}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Final CTA ── */}
        <section className="bg-gradient-to-br from-[#6B9E5E] to-[#86A873] rounded-3xl p-10 md:p-14 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/10 blur-2xl pointer-events-none" />

          <div className="relative z-10">
            <span className="text-5xl mb-4 block">🌿</span>
            <h2
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Ready to Write Your Own Success Story?
            </h2>
            <p className="text-white/85 text-lg mb-8 max-w-xl mx-auto">
              Join 500+ students who chose to invest in themselves. Your free trial class costs nothing but 60 minutes of your time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/free-trial"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-[#6B9E5E] font-bold text-sm hover:bg-[#F5EDD6] transition-colors duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                Book My Free Trial Class
              </Link>
              <a
                href="https://wa.me/919876543210?text=Hi%20Priya!%20I%20read%20the%20student%20stories%20and%20I%20want%20to%20try%20yoga."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/15 hover:bg-white/25 text-white font-semibold border border-white/30 transition-all duration-300"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
