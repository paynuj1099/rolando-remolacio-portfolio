'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Monitor } from 'lucide-react'

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 animate-pulse" />
    )
  }

  const themes = [
    { value: 'system', icon: Monitor, label: 'System' },
    { value: 'light', icon: Sun, label: 'Light' },
    { value: 'dark', icon: Moon, label: 'Dark' },
  ]

  return (
    <div className="relative">
      <div className="flex items-center gap-1 p-1 bg-gray-100 dark:bg-gray-800 rounded-lg">
        {themes.map((t) => {
          const Icon = t.icon
          const isActive = theme === t.value
          
          return (
            <motion.button
              key={t.value}
              onClick={() => setTheme(t.value)}
              className={`relative p-2 rounded-md transition-all duration-200 group ${
                isActive
                  ? 'bg-white dark:bg-gray-700'
                  : 'hover:bg-gray-200 dark:hover:bg-gray-700/50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`Switch to ${t.label} theme`}
            >
              <Icon
                className={`w-5 h-5 relative z-10 transition-colors ${
                  isActive
                    ? 'text-primary-600 dark:text-primary-400'
                    : 'text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300'
                }`}
              />
              
              {/* Tooltip */}
              <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 dark:bg-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {t.label}
              </span>
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}
