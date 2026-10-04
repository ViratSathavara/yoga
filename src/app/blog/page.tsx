'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, ArrowRight, Rss, Mail } from 'lucide-react';

// ─── Types ───────────────────────────────────────────────────────────────────

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  emoji: string;
  image: string;
  readTime: number;
  date: string;
  featured?: boolean;
}

// ─── Data ────────────────────────────────────────────────────────────────────

const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'is-yoga-good-for-beginners',
    title: 'Is Yoga Good for Beginners? Everything You Need to Know',
    excerpt:
      "New to yoga and wondering if it's right for you? Discover why yoga is one of the most beginner-friendly practices, what to expect in your first class, and how to get started safely.",
    category: 'Beginners',
    emoji: '🌱',
    image: '/images/blog-beginners.jpg',
    readTime: 5,
    date: 'Sep 28, 2026',
    featured: true,
  },
  {
    slug: 'how-many-days-a-week-should-i-do-yoga',
    title: 'How Many Days a Week Should I Do Yoga?',
    excerpt:
      'Wondering how often to practice? We break down the ideal yoga frequency for beginners, intermediates, and busy professionals to help you build a sustainable routine.',
    category: 'Beginners',
    emoji: '📅',
    image: '/images/blog-frequency.jpg',
    readTime: 4,
    date: 'Sep 20, 2026',
  },
  {
    slug: 'yoga-for-weight-management',
    title: 'Yoga for Weight Management: Does It Really Work?',
    excerpt:
      'Beyond calories burned — explore the science-backed ways yoga supports healthy weight through metabolism, mindful eating, stress hormones, and body awareness.',
    category: 'Weight',
    emoji: '⚖️',
    image: '/images/blog-weight.jpg',
    readTime: 6,
    date: 'Sep 14, 2026',
  },
  {
    slug: 'best-yoga-poses-for-back-pain',
    title: 'Best Yoga Poses for Back Pain Relief',
    excerpt:
      'Suffering from lower back pain? These 8 gentle yoga poses can strengthen your spine, release tight muscles, and bring lasting relief — no gym equipment needed.',
    category: 'Back Pain',
    emoji: '🦴',
    image: '/images/blog-backpain.jpg',
    readTime: 5,
    date: 'Sep 7, 2026',
  },
  {
    slug: 'morning-yoga-routine-for-beginners',
    title: 'Morning Yoga Routine for Beginners',
    excerpt:
      'Start your day with clarity and energy. This 20-minute morning sequence is designed specifically for beginners — gentle, invigorating, and easy to follow.',
    category: 'Beginners',
    emoji: '🌅',
    image: '/images/blog-morning.jpg',
    readTime: 7,
    date: 'Aug 30, 2026',
  },
  {
    slug: 'online-vs-offline-yoga',
    title: 'Online vs Offline Yoga: Which is Better?',
    excerpt:
      "Can't decide between joining a studio or practicing from home? We weigh the honest pros and cons of both so you can choose what suits your lifestyle best.",
    category: 'Wellness',
    emoji: '💻',
    image: '/images/blog-online.jpg',
    readTime: 4,
    date: 'Aug 22, 2026',
  },
  {
    slug: 'what-to-eat-before-and-after-yoga',
    title: 'What to Eat Before & After Yoga',
    excerpt:
      'Nutrition and yoga go hand in hand. Learn what to eat (and what to avoid) before and after your practice to maximise energy, recovery, and results.',
    category: 'Wellness',
    emoji: '🥗',
    image: '/images/blog-nutrition.jpg',
    readTime: 5,
    date: 'Aug 15, 2026',
  },
  {
    slug: 'yoga-for-stress',
    title: 'Yoga for Stress: 5 Poses That Actually Work',
    excerpt:
      'Feeling overwhelmed? These five evidence-backed yoga poses activate your parasympathetic nervous system, reduce cortisol, and deliver calm — fast.',
    category: 'Wellness',
    emoji: '🧘',
    image: '/images/blog-stress.jpg',
    readTime: 6,
    date: 'Aug 8, 2026',
  },
];

const CATEGORIES = ['All', 'Beginners', 'Wellness', 'Weight', 'Back Pain'];

// ─── Sub-components ──────────────────────────────────────────────────────────

function CategoryBadge({ category }: { category: string }) {
  const colors: Record<string, string> = {
    Beginners: 'bg-[#86A873]/15 text-[#6B9E5E]',
    Wellness: 'bg-[#8FAF8B]/15 text-[#6B4F3A]',
    Weight: 'bg-amber-100 text-amber-700',
    'Back Pain': 'bg-blue-50 text-blue-600',
  };
  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${colors[category] ?? 'bg-gray-100 text-gray-600'}`}
    >
      {category}
    </span>
  );
}

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group bg-white rounded-2xl border border-[#86A873]/20 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col">
      {/* Cover Image */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F5EDD6]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3">
          <CategoryBadge category={post.category} />
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        {/* Title */}
        <h3 className="font-bold text-[#3a2e24] text-lg leading-snug mb-3 group-hover:text-[#6B9E5E] transition-colors duration-200" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-[#5a4a3a] text-sm leading-relaxed line-clamp-3 flex-1 mb-5">
          {post.excerpt}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-[#86A873]/15">
          <div className="flex items-center gap-1.5 text-xs text-[#7a6a5a]">
            <Clock size={13} />
            <span>{post.readTime} min read</span>
            <span className="mx-1">·</span>
            <span>{post.date}</span>
          </div>
          <Link
            href={`/blog/${post.slug}`}
            className="flex items-center gap-1 text-[#6B9E5E] text-sm font-semibold hover:gap-2 transition-all duration-200"
          >
            Read Article <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </article>
  );
}

function FeaturedCard({ post }: { post: BlogPost }) {
  return (
    <article className="group bg-white rounded-3xl border border-[#86A873]/25 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden grid grid-cols-1 md:grid-cols-12">
      {/* Hero Image */}
      <div className="md:col-span-6 relative aspect-[16/10] md:aspect-auto min-h-[300px] overflow-hidden bg-[#F5EDD6]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 550px"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent md:hidden" />
        <span className="absolute top-4 left-4 bg-[#6B4F3A] text-white text-xs font-semibold px-3.5 py-1.5 rounded-full shadow">
          ✦ Featured Article
        </span>
      </div>

      <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-center">
        <div className="flex items-center gap-3 mb-4">
          <CategoryBadge category={post.category} />
          <span className="flex items-center gap-1 text-xs text-[#7a6a5a]">
            <Clock size={13} /> {post.readTime} min read
          </span>
          <span className="text-xs text-[#7a6a5a]">{post.date}</span>
        </div>

        <h2
          className="text-2xl md:text-3xl font-bold text-[#3a2e24] leading-snug mb-4 group-hover:text-[#6B9E5E] transition-colors duration-200"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          {post.title}
        </h2>

        <p className="text-[#5a4a3a] leading-relaxed mb-6 text-sm md:text-base">{post.excerpt}</p>

        <div>
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#6B9E5E] hover:bg-[#5a8a4e] text-white font-semibold text-sm transition-all duration-300 shadow-md shadow-[#6B9E5E]/30 hover:shadow-lg hover:-translate-y-0.5"
          >
            Read Full Article <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const featuredPost = BLOG_POSTS.find((p) => p.featured)!;
  const filteredPosts = BLOG_POSTS.filter((p) => {
    if (activeCategory === 'All') return true;
    return p.category === activeCategory;
  });

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  }

  return (
    <div className="min-h-screen bg-[#f7f5ed] text-[#364132]">

      {/* ── Hero ── */}
      <section className="relative pt-32 pb-20 bg-[#566748] text-center text-[#fbf8ef] overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <p className="eyebrow !text-[#e4e8db] mb-2 justify-center">
            Notes for your practice
          </p>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#fbf8ef] leading-tight mb-4"
          >
            A Little Inspiration
          </h1>
          <p className="text-base md:text-lg text-[#faf8ef]/80 max-w-2xl mx-auto leading-relaxed">
            Thoughtful reads, grounded insights and everyday routines for wherever you are on your yoga journey.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* ── Featured Post ── */}
        <div className="mb-14">
          <FeaturedCard post={featuredPost} />
        </div>

        {/* ── Category Filter ── */}
        <div className="flex flex-wrap gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#566748] text-white shadow-sm'
                  : 'bg-[#fbfaf5] text-[#55574c] border border-[#dedbd2] hover:border-[#566748]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── Blog Grid ── */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
            {filteredPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-[#6B4F3A]/50">
            <span className="text-5xl mb-4 block">🔍</span>
            <p className="text-lg font-medium">No articles in this category yet.</p>
            <p className="text-sm mt-1">Check back soon — new posts every week!</p>
          </div>
        )}

        {/* ── Newsletter ── */}
        <section className="bg-gradient-to-br from-[#6B9E5E] to-[#86A873] rounded-3xl p-10 md:p-14 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/10 blur-2xl pointer-events-none" />

          <div className="relative z-10">
            <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-5">
              <Mail size={26} className="text-white" />
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Get Free Yoga Tips in Your Inbox
            </h2>
            <p className="text-white/85 text-lg mb-8 max-w-xl mx-auto">
              Join 2,000+ students who get weekly yoga guides, pose breakdowns, and wellness advice straight to their inbox. No spam, ever.
            </p>

            {subscribed ? (
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto">
                <span className="text-4xl mb-3 block">🎉</span>
                <p className="font-bold text-lg">You're in! Welcome to the community.</p>
                <p className="text-white/80 text-sm mt-1">Your first yoga tip is on its way.</p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-5 py-3.5 rounded-full bg-white/20 backdrop-blur-sm text-white placeholder-white/60 border border-white/30 focus:outline-none focus:border-white transition-colors"
                />
                <button
                  type="submit"
                  className="px-7 py-3.5 rounded-full bg-white text-[#6B9E5E] font-bold text-sm hover:bg-[#F5EDD6] transition-colors duration-200 whitespace-nowrap shadow-lg"
                >
                  Subscribe Free
                </button>
              </form>
            )}

            <p className="text-white/60 text-xs mt-4">
              🔒 No spam. Unsubscribe anytime.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
