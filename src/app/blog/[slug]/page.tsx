import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import SectionLabel from "@/components/SectionLabel";
import { blogPosts } from "@/lib/data";
import { Clock, Calendar, ArrowLeft, ArrowRight, MessageCircle, Share2, CheckCircle } from "lucide-react";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Blog Post Not Found" };

  return {
    title: `${post.title} | Priya Sharma Yoga Ahmedabad`,
    description: post.excerpt,
    keywords: [`yoga ${post.category.toLowerCase()}`, post.title, "yoga Ahmedabad", "yoga blog"],
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      {/* Article Header */}
      <section className="bg-gradient-to-br from-[#F8F5F0] via-[#EDE8DF] to-[#C5D9C2] pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#6B4F3A] hover:text-[#6B9E5E] transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Back to all articles
          </Link>

          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#6B9E5E]/15 text-[#4A7C59]">
              {post.category}
            </span>
            <span className="text-xs text-gray-500 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {post.date}
            </span>
            <span className="text-xs text-gray-500 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-playfair)] text-[#6B4F3A] leading-tight mb-6">
            {post.title}
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed font-medium">
            {post.excerpt}
          </p>

          <div className="flex items-center gap-3 pt-6 border-t border-[#EDE8DF] mt-6">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#6B9E5E] shadow-sm shrink-0">
              <Image
                src="/images/teacher-priya.jpg"
                alt="Priya Sharma"
                fill
                className="object-cover object-top"
              />
            </div>
            <div>
              <p className="font-bold text-[#6B4F3A] text-sm">Priya Sharma</p>
              <p className="text-xs text-gray-500">RYT-500 Certified Yoga Instructor • Ahmedabad</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Hero Cover Image */}
      {post.image && (
        <section className="bg-white pt-8 pb-4 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden shadow-xl border-4 border-[#F8F5F0]">
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </section>
      )}

      {/* Article Content */}
      <section className="py-12 md:py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto space-y-8 text-gray-700 leading-relaxed">
          <div className="bg-[#F8F5F0] rounded-2xl p-6 border-l-4 border-[#6B9E5E] text-sm">
            <p className="font-semibold text-[#6B4F3A] mb-1">💡 Key Takeaway:</p>
            <p className="text-gray-600">
              Yoga is not about perfection or flexibility — it is about awareness, breath, and sustainable consistency. Start where you are, use modifications, and give your body time to adapt.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#6B4F3A] mb-4 font-[family-name:var(--font-playfair)]">
              1. Understanding the Foundations
            </h2>
            <p className="mb-4">
              When people first contemplate beginning a yoga practice, their biggest fear is often flexibility. &quot;I cannot even touch my toes,&quot; is the sentence Priya hears most frequently from first-time students in Ahmedabad.
            </p>
            <p className="mb-4">
              Saying you are too stiff for yoga is like saying you are too dirty to take a shower. Flexibility is the natural outcome of regular practice, never the prerequisite. In authentic Hatha and Vinyasa traditions, asanas (postures) are designed to meet your body where it currently rests.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#6B4F3A] mb-4 font-[family-name:var(--font-playfair)]">
              2. The Role of Breath (Pranayama)
            </h2>
            <p className="mb-4">
              Unlike ordinary gym workouts where breathing is often shallow or uncoordinated, yoga unites movement with intentional respiration. Inhaling expands the ribcage and energizes the nervous system; exhaling engages the parasympathetic tone, releasing muscle guarding and lowering blood pressure.
            </p>
            <p className="mb-4">
              Practicing just 10 minutes of diaphragmatic breathing daily can dramatically decrease serum cortisol and alleviate physical tension across the upper back and neck.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#6B4F3A] mb-4 font-[family-name:var(--font-playfair)]">
              3. Building a Routine That Lasts
            </h2>
            <p className="mb-4">
              Consistency always beats intensity. A gentle 45-minute practice 3 times a week produces far superior long-term results than an exhausting 2-hour session done once a fortnight.
            </p>
            <ul className="space-y-3 my-6">
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-5 h-5 text-[#6B9E5E] flex-shrink-0 mt-0.5" />
                <span><strong>Morning Practice:</strong> Ideal for boosting circulation, spinal mobility, and mental focus for the workday.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-5 h-5 text-[#6B9E5E] flex-shrink-0 mt-0.5" />
                <span><strong>Evening Practice:</strong> Exceptional for releasing accumulated desk fatigue, loosening tight hip flexors, and preparing for restorative sleep.</span>
              </li>
            </ul>
          </div>

          {/* Inline CTA Box */}
          <div className="bg-gradient-to-br from-[#F8F5F0] to-[#E8F1E5] rounded-3xl p-8 border border-[#86A873]/30 text-center my-10 space-y-4">
            <span className="text-2xl">🧘</span>
            <h3 className="text-2xl font-bold text-[#6B4F3A] font-[family-name:var(--font-playfair)]">
              Want to Learn Under Expert Personal Guidance?
            </h3>
            <p className="text-sm text-gray-600 max-w-lg mx-auto">
              Book a complimentary 100% free trial class at our Satellite studio in Ahmedabad or join live online from anywhere.
            </p>
            <div className="flex flex-wrap gap-3 justify-center pt-2">
              <Link href="/free-trial" className="btn-primary">
                Book My Free Trial Class
              </Link>
              <a
                href="https://wa.me/919876543210?text=Hi%20Priya!%20I%20read%20your%20article%20and%20would%20like%20to%20learn%20more."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                💬 Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 px-6 bg-[#F8F5F0] border-t border-[#EDE8DF]">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-[#6B4F3A] mb-8 font-[family-name:var(--font-playfair)]">
            Related Wellness Guides
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((r) => (
              <Link
                key={r.slug}
                href={`/blog/${r.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#EDE8DF] hover:-translate-y-1 flex flex-col"
              >
                {r.image && (
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F5EDD6]">
                    <Image
                      src={r.image}
                      alt={r.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 300px"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="p-5 flex flex-col flex-1">
                  <span className="text-xs font-semibold text-[#6B9E5E]">{r.category}</span>
                  <h4 className="font-bold text-[#3a2e24] text-base mt-1 line-clamp-2 group-hover:text-[#6B9E5E] transition-colors">
                    {r.title}
                  </h4>
                  <p className="text-xs text-gray-500 mt-auto pt-3">{r.readTime}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
