import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import AIAssistant from '@/components/AIAssistant'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Rolando Remolacio - Full Stack Developer',
    template: '%s | Rolando Remolacio'
  },
  description: 'Full-stack developer passionate about creating innovative web solutions using modern technologies.',
  keywords: ['Rolando Remolacio', 'Full Stack Developer', 'React', 'Next.js', 'TypeScript', 'Web Development'],
  authors: [{ name: 'Rolando Remolacio' }],
  creator: 'Rolando Remolacio',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://rolandoremolacioje.azurewebsites.net',
    title: 'Rolando Remolacio - Full Stack Developer',
    description: 'Full-stack developer passionate about creating innovative web solutions using modern technologies.',
    siteName: 'Rolando Remolacio Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rolando Remolacio - Full Stack Developer',
    description: 'Full-stack developer passionate about creating innovative web solutions using modern technologies.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <AIAssistant />
      </body>
    </html>
  )
}