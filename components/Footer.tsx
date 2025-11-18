import Link from 'next/link'
import { Github, Linkedin, Mail, Heart, Facebook } from 'lucide-react'

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/paynuj1099',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/rolando-remolacio',
    icon: Linkedin,
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com/jun.yap1099',
    icon: Facebook,
  },
  {
    name: 'Email',
    href: 'mailto:rolandojrremolacio@gmail.com',
    icon: Mail,
  },
]

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Rolando Remolacio</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
              Full Stack Developer specializing in .NET, C#, JavaScript, and React. 
              Building robust, scalable, and user-friendly applications.
            </p>
            <div className="flex space-x-6">
              {socialLinks.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                  >
                    <Icon className="w-6 h-6" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              <li>
                <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-300 dark:border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © {new Date().getFullYear()} Rolando Remolacio. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-2 sm:mt-0">
              <Link 
                href="/privacy" 
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="text-gray-400">•</span>
              <Link 
                href="/terms" 
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm text-center">
            This portfolio is built using Next.js & Tailwind CSS. Deployed in Vercel.
          </p>
        </div>
      </div>
    </footer>
  )
}