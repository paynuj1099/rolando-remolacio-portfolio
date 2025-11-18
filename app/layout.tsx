import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AIAssistant from "@/components/AIAssistant";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ChatbaseWidget from "@/components/ChatbaseWidget";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Rolando Remolacio",
    template: "%s | Rolando Remolacio",
  },
  description:
    "Full-stack developer passionate about creating innovative web solutions using modern technologies.",
  keywords: [
    "Rolando Remolacio",
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Web Development",
  ],
  authors: [{ name: "Rolando Remolacio" }],
  creator: "Rolando Remolacio",
  openGraph: {
    type: "website",
    locale: "en_US",
    url:
      process.env.NEXT_PUBLIC_SITE_URL ||
      "https://rolando-remolacio-portfolio.vercel.app",
    title: "Rolando Remolacio",
    description:
      "Full-stack developer passionate about creating innovative web solutions using modern technologies.",
    siteName: "Rolando Remolacio Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rolando Remolacio - Full Stack Developer",
    description:
      "Full-stack developer passionate about creating innovative web solutions using modern technologies.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="scroll-smooth overflow-x-hidden"
      suppressHydrationWarning
    >
      <body
        className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 antialiased transition-colors duration-300 overflow-x-hidden w-full`}
      >
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1337466475251034"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <ThemeProvider>
          <Navigation />
          <main className="min-h-screen overflow-x-hidden">{children}</main>
          <Footer />
          {/* <ChatbaseWidget /> */}
          <AIAssistant />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
