import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,

  // Image optimization settings
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
  },

  // Compress responses for better performance
  compress: true,

  // PoweredBy header removal for security
  poweredByHeader: false,

  // Custom headers for SEO and security
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
      {
        source: "/sitemap.xml",
        headers: [
          { key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate" },
        ],
      },
    ];
  },

  async rewrites() {
    return [
      { source: "/trial", destination: "/free-trial" },
      { source: "/classes", destination: "/schedule" },
    ];
  },
};

export default nextConfig;
