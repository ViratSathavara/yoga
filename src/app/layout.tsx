import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "SattvaYoga | Mind · Body · Balance — Ahmedabad",
    template: "%s | SattvaYoga",
  },
  description:
    "Find a yoga practice that fits your life. Personalised yoga classes for beginners, stress relief, weight management, and online sessions in Satellite, Ahmedabad.",
  keywords: [
    "SattvaYoga",
    "yoga classes Ahmedabad",
    "yoga teacher Satellite Ahmedabad",
    "beginner yoga classes",
    "stress relief yoga",
    "weight management yoga",
    "online yoga classes Ahmedabad",
    "mind body balance yoga",
  ],
  openGraph: {
    title: "SattvaYoga | Mind · Body · Balance",
    description:
      "Personalised yoga classes for a stronger body, a calmer mind and a healthier everyday in Ahmedabad.",
    type: "website",
    locale: "en_IN",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans antialiased bg-[#f7f5ed] text-[#364132] selection:bg-[#566748]/20 selection:text-[#364132]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}

