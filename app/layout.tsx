import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import "highlight.js/styles/github-dark.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AIAssistant from "@/components/AIAssistant";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ChatbaseWidget from "@/components/ChatbaseWidget";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://rolando-remolacio-portfolio.vercel.app"),
  title: {
    default: "Rolando Remolacio | Full Stack Developer Portfolio",
    template: "%s | Rolando Remolacio",
  },
  description:
    "Professional Full Stack Developer specializing in .NET, C#, React, Next.js, and TypeScript. 3+ years of experience building enterprise web applications, inventory management systems, and customer portals. View my portfolio, projects, and blog.",
  keywords: [
    "Rolando Remolacio",
    "Full Stack Developer",
    "Web Developer Philippines",
    "React Developer",
    "Next.js Developer",
    "TypeScript Expert",
    ".NET Developer",
    "C# Programming",
    "Web Development",
    "Software Engineer",
    "Programmer Analyst",
    "Front End Developer",
    "Back End Developer",
    "JavaScript Developer",
    "Azure DevOps",
    "Portfolio Website",
    "Tech Blog",
    "San Pedro Laguna Developer",
  ],
  authors: [{ name: "Rolando Remolacio", url: "https://rolando-remolacio-portfolio.vercel.app" }],
  creator: "Rolando Remolacio",
  publisher: "Rolando Remolacio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://rolando-remolacio-portfolio.vercel.app",
    title: "Rolando Remolacio | Full Stack Developer Portfolio",
    description:
      "Professional Full Stack Developer with 3+ years of experience in .NET, React, Next.js, and TypeScript. Explore my projects, technical blog, and get in touch for collaboration opportunities.",
    siteName: "Rolando Remolacio Portfolio",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rolando Remolacio - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rolando Remolacio - Full Stack Developer",
    description:
      "Professional Full Stack Developer with 3+ years of experience in .NET, React, Next.js, and TypeScript. Building modern web applications.",
    images: ["/images/og-image.jpg"],
    creator: "@rolandoremolacio",
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
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || "https://rolando-remolacio-portfolio.vercel.app",
  },
  category: "Technology",
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
      <head>
        <link rel="canonical" href={process.env.NEXT_PUBLIC_SITE_URL || "https://rolando-remolacio-portfolio.vercel.app"} />
        <meta name="google-site-verification" content="your-google-site-verification-code" />
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Rolando Remolacio",
              url: process.env.NEXT_PUBLIC_SITE_URL || "https://rolando-remolacio-portfolio.vercel.app",
              image: "/images/profile.jpg",
              jobTitle: "Full Stack Developer",
              worksFor: {
                "@type": "Organization",
                name: "Vertere Global Solutions"
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "San Pedro",
                addressRegion: "Laguna",
                addressCountry: "Philippines"
              },
              email: "rolandojrremolacio@gmail.com",
              telephone: "+639625871454",
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Cavite State University"
              },
              knowsAbout: ["Web Development", "Full Stack Development", ".NET", "React", "Next.js", "TypeScript", "C#", "JavaScript"],
              sameAs: [
                "https://github.com/paynuj1099",
                "https://linkedin.com/in/rolando-remolacio"
              ]
            })
          }}
        />
      </head>
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
