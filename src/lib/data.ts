// ============================================================
// YOGA WEBSITE — Demo Data with Curated Photos
// ============================================================

export const WHATSAPP_NUMBER = "919876543210";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Priya!%20I%20am%20interested%20in%20your%20yoga%20classes.`;
export const PHONE = "+91 98765 43210";
export const EMAIL = "priya@priyasharmayoga.com";
export const ADDRESS = "Near Satellite Road, Ahmedabad, Gujarat 380015";

// ─── Programs ───────────────────────────────────────────────

export const programs = [
  {
    id: "beginner-yoga",
    emoji: "🧘",
    title: "Beginner Yoga",
    tagline: "Start Your Yoga Journey",
    description:
      "Designed for people with little or no yoga experience. Learn proper alignment, breathing, and foundational poses in a welcoming environment.",
    features: ["No experience needed", "Small batch sizes", "Personalized attention"],
    duration: "60 min/class",
    level: "Beginner",
    href: "/programs/beginner-yoga",
    image: "/images/program-beginner.jpg",
    color: "sage",
  },
  {
    id: "weight-management",
    emoji: "🔥",
    title: "Weight Management Yoga",
    tagline: "Sustainable Wellness",
    description:
      "A dynamic yoga program combining active asanas and pranayama to boost metabolism, build core strength, and cultivate mindful eating habits.",
    features: ["Boosts metabolism", "Builds core strength", "Mindful eating"],
    duration: "75 min/class",
    level: "All Levels",
    href: "/programs/weight-management",
    image: "/images/program-weight.jpg",
    color: "earth",
  },
  {
    id: "stress-relief",
    emoji: "🌿",
    title: "Stress Relief Yoga",
    tagline: "Find Your Calm",
    description:
      "A calming blend of restorative poses, pranayama breathing, and yoga nidra to melt away stress, anxiety, and tension.",
    features: ["Reduces cortisol", "Improves sleep", "Calms the mind"],
    duration: "60 min/class",
    level: "All Levels",
    href: "/programs/stress-relief",
    image: "/images/program-stress.jpg",
    color: "green",
  },
  {
    id: "online-yoga",
    emoji: "💻",
    title: "Online Yoga Classes",
    tagline: "Practice Anywhere",
    description:
      "Live interactive classes via Zoom. Get real-time corrections, personalized guidance, and the full studio experience from your home.",
    features: ["Live & interactive", "Recorded review access", "Practice from home"],
    duration: "45 min/class",
    level: "All Levels",
    href: "/programs/online-yoga",
    image: "/images/program-online.jpg",
    color: "blue",
  },
  {
    id: "womens-yoga",
    emoji: "👩",
    title: "Women's Yoga",
    tagline: "Nurture Your Feminine Strength",
    description:
      "A safe, nurturing space for women to build strength, balance hormones, and embrace body positivity through yoga.",
    features: ["Hormonal balance", "Body positivity", "Women-only batches"],
    duration: "60 min/class",
    level: "All Levels",
    href: "/programs/womens-yoga",
    image: "/images/program-womens.jpg",
    color: "pink",
  },
  {
    id: "corporate-yoga",
    emoji: "🏢",
    title: "Corporate Yoga",
    tagline: "Wellness at Work",
    description:
      "On-site or virtual yoga sessions for teams. Reduce employee stress, improve focus, and boost overall workplace well-being.",
    features: ["On-site or virtual", "Team sessions", "Desk ergonomics"],
    duration: "45–60 min/session",
    level: "All Levels",
    href: "/programs/corporate-yoga",
    image: "/images/program-corporate.jpg",
    color: "brown",
  },
];

// ─── Testimonials ────────────────────────────────────────────

export const testimonials = [
  {
    id: 1,
    name: "Riya Patel",
    role: "Beginner Yoga Student",
    review:
      "I joined the beginner yoga program 3 months ago. In just 4 weeks I felt more active and flexible than I had in years. Priya's teaching style is so patient and encouraging!",
    rating: 5,
    program: "Beginner Yoga",
    image: "/images/avatar-riya.jpg",
  },
  {
    id: 2,
    name: "Amit Shah",
    role: "Weight Management Program",
    review:
      "The weight management program truly changed my lifestyle. I feel stronger, more energetic, and my relationship with food has completely transformed. Highly recommended!",
    rating: 5,
    program: "Weight Management",
    image: "/images/avatar-amit.jpg",
  },
  {
    id: 3,
    name: "Kavya Mehta",
    role: "Stress Relief Program",
    review:
      "I used to suffer from terrible sleep and constant anxiety. After 2 months of stress relief yoga, I sleep so much better and feel calm throughout the day. Life-changing!",
    rating: 5,
    program: "Stress Relief",
    image: "/images/avatar-kavya.jpg",
  },
  {
    id: 4,
    name: "Priti Desai",
    role: "Women's Yoga Student",
    review:
      "The women's yoga batch is such a safe and welcoming space. Priya understands women's unique needs and the classes are perfectly designed. I feel stronger and more confident.",
    rating: 5,
    program: "Women's Yoga",
    image: "/images/avatar-priti.jpg",
  },
  {
    id: 5,
    name: "Rahul Joshi",
    role: "Online Yoga Student",
    review:
      "I was skeptical about online yoga but Priya's live classes are just as effective as in-person. Real-time corrections make a huge difference. Perfect for my busy schedule!",
    rating: 5,
    program: "Online Yoga",
    image: "/images/avatar-rahul.jpg",
  },
  {
    id: 6,
    name: "Sneha Modi",
    role: "Corporate Yoga Participant",
    review:
      "Our team did 6 weeks of corporate yoga sessions and the difference in morale and energy levels is remarkable. Everyone is less stressed and more focused. Worth every rupee!",
    rating: 5,
    program: "Corporate Yoga",
    image: "/images/avatar-sneha.jpg",
  },
  {
    id: 7,
    name: "Deepa Nair",
    role: "Stress Relief & Beginner",
    review:
      "Started with beginner yoga and now doing stress relief too. My back pain is 80% better, I have way more energy, and my doctor is impressed with my improvement.",
    rating: 5,
    program: "Beginner + Stress Relief",
    image: "/images/avatar-deepa.jpg",
  },
  {
    id: 8,
    name: "Vikram Rao",
    role: "Weight Management Program",
    review:
      "6 months into the weight management program — I've lost 12 kgs, gained muscle tone, and most importantly built sustainable healthy habits. Priya's guidance is invaluable.",
    rating: 5,
    program: "Weight Management",
    image: "/images/avatar-vikram.jpg",
  },
  {
    id: 9,
    name: "Hetal Shah",
    role: "Women's Yoga & Online",
    review:
      "The combination of in-person women's yoga and online weekend classes fits perfectly in my schedule. Priya is incredibly knowledgeable about women's health and yoga therapy.",
    rating: 5,
    program: "Women's Yoga",
    image: "/images/avatar-hetal.jpg",
  },
];

// ─── Schedule ────────────────────────────────────────────────

export const scheduleData = [
  {
    id: 1,
    program: "Beginner Yoga",
    days: "Mon / Wed / Fri",
    time: "6:30 AM – 7:30 AM",
    duration: "60 min",
    level: "Beginner",
    mode: "Offline",
    spots: 8,
    color: "sage",
  },
  {
    id: 2,
    program: "Stress Relief Yoga",
    days: "Tue / Thu / Sat",
    time: "7:00 AM – 8:00 AM",
    duration: "60 min",
    level: "All Levels",
    mode: "Offline",
    spots: 6,
    color: "green",
  },
  {
    id: 3,
    program: "Weight Management",
    days: "Mon / Wed / Fri",
    time: "6:00 PM – 7:15 PM",
    duration: "75 min",
    level: "All Levels",
    mode: "Offline",
    spots: 5,
    color: "earth",
  },
  {
    id: 4,
    program: "Women's Yoga",
    days: "Tue / Thu",
    time: "6:30 PM – 7:30 PM",
    duration: "60 min",
    level: "All Levels",
    mode: "Offline",
    spots: 8,
    color: "pink",
  },
  {
    id: 5,
    program: "Online Yoga – Morning",
    days: "Mon / Wed / Fri",
    time: "7:30 AM – 8:15 AM",
    duration: "45 min",
    level: "All Levels",
    mode: "Online",
    spots: 12,
    color: "blue",
  },
  {
    id: 6,
    program: "Online Yoga – Evening",
    days: "Tue / Thu / Sat",
    time: "7:30 PM – 8:15 PM",
    duration: "45 min",
    level: "All Levels",
    mode: "Online",
    spots: 12,
    color: "blue",
  },
  {
    id: 7,
    program: "Weekend Wellness",
    days: "Sat / Sun",
    time: "7:00 AM – 8:30 AM",
    duration: "90 min",
    level: "All Levels",
    mode: "Offline",
    spots: 10,
    color: "beige",
  },
];

// ─── Blog Posts ──────────────────────────────────────────────

export const blogPosts = [
  {
    slug: "is-yoga-good-for-beginners",
    title: "Is Yoga Good for Beginners? Everything You Need to Know",
    excerpt:
      "If you've been thinking about trying yoga but aren't sure where to start, this guide covers everything — from what to expect in your first class to tips for building a consistent practice.",
    readTime: "5 min read",
    category: "Beginners",
    emoji: "🧘",
    date: "2026-09-28",
    image: "/images/blog-beginners.jpg",
  },
  {
    slug: "how-many-days-yoga-per-week",
    title: "How Many Days a Week Should I Do Yoga?",
    excerpt:
      "The answer depends on your goals. Whether you practice 2 days or 6 days a week, consistency matters more than frequency. Here's a practical guide.",
    readTime: "4 min read",
    category: "Beginners",
    emoji: "📅",
    date: "2026-09-20",
    image: "/images/blog-frequency.jpg",
  },
  {
    slug: "yoga-for-weight-management",
    title: "Yoga for Weight Management: Does It Really Work?",
    excerpt:
      "Yoga isn't a magic weight-loss pill, but it is one of the most sustainable tools for managing weight. Here's how it works and what to realistically expect.",
    readTime: "6 min read",
    category: "Weight",
    emoji: "🔥",
    date: "2026-09-14",
    image: "/images/blog-weight.jpg",
  },
  {
    slug: "yoga-poses-for-back-pain",
    title: "Best Yoga Poses for Back Pain Relief",
    excerpt:
      "Millions of people suffer from back pain. These 7 yoga poses — practiced regularly — can significantly reduce stiffness, strengthen the spine, and provide lasting relief.",
    readTime: "5 min read",
    category: "Back Pain",
    emoji: "💪",
    date: "2026-09-07",
    image: "/images/blog-backpain.jpg",
  },
  {
    slug: "morning-yoga-routine-beginners",
    title: "Morning Yoga Routine for Beginners (15 Minutes)",
    excerpt:
      "Start your day right with this simple 15-minute morning yoga routine. No equipment needed. Perfect for those new to yoga who want to build a healthy morning habit.",
    readTime: "7 min read",
    category: "Beginners",
    emoji: "🌅",
    date: "2026-08-30",
    image: "/images/blog-morning.jpg",
  },
  {
    slug: "online-vs-offline-yoga",
    title: "Online vs Offline Yoga: Which is Better for You?",
    excerpt:
      "Both have their merits. Online classes offer flexibility while offline classes provide community and hands-on adjustments. Here's how to decide what works for you.",
    readTime: "4 min read",
    category: "Wellness",
    emoji: "💻",
    date: "2026-08-22",
    image: "/images/blog-online.jpg",
  },
  {
    slug: "what-to-eat-before-yoga",
    title: "What to Eat Before & After Yoga (Complete Guide)",
    excerpt:
      "Nutrition and yoga go hand-in-hand. Learn what to eat, when to eat, and what to avoid to get the most out of your yoga practice.",
    readTime: "5 min read",
    category: "Wellness",
    emoji: "🥗",
    date: "2026-08-15",
    image: "/images/blog-nutrition.jpg",
  },
  {
    slug: "yoga-for-stress-5-poses",
    title: "Yoga for Stress: 5 Poses That Actually Work",
    excerpt:
      "Feeling overwhelmed? These 5 yoga poses activate the parasympathetic nervous system — your body's natural 'rest and digest' mode — to melt away stress fast.",
    readTime: "6 min read",
    category: "Wellness",
    emoji: "🌿",
    date: "2026-08-08",
    image: "/images/blog-stress.jpg",
  },
];

// ─── FAQs ────────────────────────────────────────────────────

export const faqs = [
  {
    category: "General",
    question: "Do I need previous yoga experience to join?",
    answer:
      "Absolutely not! Our beginner yoga program is specifically designed for people with little or no experience. Priya will guide you through every pose with detailed instructions and modifications.",
  },
  {
    category: "General",
    question: "How long does each class last?",
    answer:
      "Class duration varies by program: Beginner Yoga and Stress Relief are 60 minutes, Weight Management is 75 minutes, and Online Classes are 45 minutes. Weekend Wellness sessions are 90 minutes.",
  },
  {
    category: "General",
    question: "What should I wear to class?",
    answer:
      "Wear comfortable, stretchy clothing that allows for a full range of motion. Avoid very loose clothes that might flip over during inversions. Yoga is practiced barefoot.",
  },
  {
    category: "General",
    question: "Do you offer trial classes?",
    answer:
      "Yes! We offer a completely FREE trial class with no commitments. Just fill out the booking form or WhatsApp us to schedule your first class.",
  },
  {
    category: "Beginners",
    question: "I'm very inflexible — is yoga still for me?",
    answer:
      "Yes! Flexibility is the result of yoga practice, not a prerequisite. Yoga meets you exactly where you are. Everyone starts at their own level, and improvement comes naturally over time.",
  },
  {
    category: "Beginners",
    question: "What equipment do I need?",
    answer:
      "For in-person classes, we provide yoga mats and all props. For online classes, you'll need a yoga mat, comfortable clothing, and a device with a camera. Blocks and straps are helpful but not required.",
  },
  {
    category: "Online Classes",
    question: "Are online classes as effective as in-person?",
    answer:
      "Absolutely! Our live online classes include real-time guidance and corrections through your camera. Many students find online classes more convenient while maintaining the same quality.",
  },
  {
    category: "Online Classes",
    question: "What platform do you use for online classes?",
    answer:
      "We use Zoom for live interactive classes. You'll receive a link before each session. Sessions are also recorded and shared for 48 hours so you can revisit the practice.",
  },
  {
    category: "Pricing",
    question: "How much do classes cost?",
    answer:
      "Pricing varies by program. Beginner Yoga starts at ₹2,999/month. Contact us via WhatsApp or book a free trial to learn about current pricing and any available offers.",
  },
  {
    category: "Pricing",
    question: "What payment methods do you accept?",
    answer:
      "We accept UPI (GPay, PhonePe, Paytm), bank transfer, and cash. Monthly and quarterly payment options are available.",
  },
  {
    category: "Health & Safety",
    question: "Is yoga safe if I have back pain?",
    answer:
      "Yoga can be very beneficial for back pain when practiced correctly. Please inform Priya about your condition before class. She will suggest appropriate modifications to ensure safety.",
  },
  {
    category: "Health & Safety",
    question: "Can I practice yoga during pregnancy?",
    answer:
      "Priya holds a prenatal yoga certification. However, please always consult your doctor first. We recommend joining only after medical clearance, especially for the first trimester.",
  },
];
