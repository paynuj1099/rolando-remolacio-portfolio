'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { SiDotnet, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss } from 'react-icons/si'

const techStack = [
  { label: 'C#', custom: true, color: '#9B4F96' },
  { Icon: SiDotnet, label: '.NET', color: '#512BD4' },
  { Icon: SiJavascript, label: 'JavaScript', color: '#F7DF1E' },
  { Icon: SiTypescript, label: 'TypeScript', color: '#3178C6' },
  { Icon: SiReact, label: 'React', color: '#61DAFB' },
  { Icon: SiNextdotjs, label: 'Next.js', color: null },
  { Icon: SiTailwindcss, label: 'Tailwind CSS', color: '#06B6D4' },
]

interface HeroProps {
  showResume?: boolean;
}

export default function Hero({ showResume = false }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen lg:h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-950 transition-colors duration-300 lg:overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-12 relative w-full pt-20 pb-0 lg:h-full lg:py-0">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left z-10 flex flex-col justify-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium mb-6">
                <span className="relative flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-blue-500"></span>
                </span>
                Full Stack Developer
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Hi, I'm{' '}
                <span className="text-primary-600 dark:text-primary-400 relative">
                  Rolando Remolacio
                  <motion.div
                    className="absolute -bottom-2 left-0 w-full h-1 bg-primary-400 dark:bg-primary-500 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  />
                </span>
              </h1>
              <p className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mt-8">
                Based in the Philippines
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed max-w-2xl"
            >
              I transform ideas into elegant, efficient code.
              Building modern web applications that solve real-world problems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                href="#projects"
                className="inline-flex items-center justify-center whitespace-nowrap px-5 lg:px-6 py-3 text-base font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 transition-colors"
              >
                View My Work
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center whitespace-nowrap px-5 lg:px-6 py-3 text-base font-medium rounded-lg text-primary-600 dark:text-primary-400 bg-white dark:bg-gray-800 border-2 border-primary-600 dark:border-primary-500 hover:bg-primary-50 dark:hover:bg-gray-700 transition-colors"
              >
                Get In Touch
              </Link>
              {showResume && (
                <a
                  href="/resume.pdf"
                  download="Rolando_Remolacio_Resume.pdf"
                  className="inline-flex items-center justify-center whitespace-nowrap px-5 lg:px-6 py-3 text-base font-medium rounded-lg border-2 bg-blue-50 border-blue-400 text-blue-700 hover:bg-blue-100 hover:border-blue-500 dark:text-primary-400 dark:border-primary-500 dark:bg-gray-900 dark:hover:bg-gray-800 transition-colors"
                >
                  Download Resume
                </a>
              )}
            </motion.div>

            {/* Tech Stack Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8"
            >
              <p className="text-xs font-semibold tracking-wider text-gray-500 dark:text-gray-400 uppercase mb-3 text-center lg:text-left">
                Technologies I work with
              </p>
              <div className="flex flex-nowrap lg:flex-wrap justify-center lg:justify-start gap-1.5 sm:gap-2.5 lg:gap-3">
                {techStack.map(({ Icon, label, color, custom }) => (
                  <div
                    key={label}
                    title={label}
                    className="w-10 h-10 sm:w-11 sm:h-11 lg:w-14 lg:h-14 shrink-0 flex items-center justify-center rounded-lg lg:rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm"
                  >
                    {custom ? (
                      <span
                        className="w-7 h-7 sm:w-7 sm:h-7 lg:w-9 lg:h-9 rounded-md flex items-center justify-center text-white text-[10px] sm:text-[10px] lg:text-xs font-bold"
                        style={{ backgroundColor: color }}
                      >
                        C#
                      </span>
                    ) : (
                      Icon && (
                        <Icon
                          className={`w-5 h-5 sm:w-5 sm:h-5 lg:w-7 lg:h-7 ${color ? '' : 'text-gray-900 dark:text-white'}`}
                          style={color ? { color } : undefined}
                        />
                      )
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full aspect-square lg:aspect-auto lg:h-full"
          >
            {/* Square dots pattern */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="hidden lg:grid absolute top-56 left-4 grid-cols-6 gap-3.5 z-20 pointer-events-none"
            >
              {Array.from({ length: 30 }).map((_, i) => (
                <span
                  key={i}
                  className="w-1.5 h-1.5 rounded-sm bg-primary-400/70 dark:bg-primary-300/50"
                />
              ))}
            </motion.div>

            <div className="relative w-full h-full lg:absolute lg:inset-y-0 lg:left-[2%] lg:w-[165%]">
              <Image
                src="/images/profile1.png"
                alt="Rolando Remolacio"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 65vw"
                className="object-contain object-bottom pointer-events-none select-none"
                priority
                draggable={false}
              />
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="hidden lg:block absolute bottom-6 left-1/2 -translate-x-1/2 z-20"
          >
            <Link
              href="#about"
              className="flex flex-col items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              Scroll to explore
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ChevronDown className="w-6 h-6" />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}