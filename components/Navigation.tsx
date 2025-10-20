'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence, useDragControls } from 'framer-motion'
import { Home, User, Briefcase, Code, Mail, Menu, X, Move } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const navigation = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'About', href: '#about', icon: User },
  { name: 'Projects', href: '#projects', icon: Briefcase },
  { name: 'Skills', href: '#skills', icon: Code },
  { name: 'Contact', href: '#contact', icon: Mail },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isDragging, setIsDragging] = useState(false)
  const dragControls = useDragControls()

  useEffect(() => {
    const handleScroll = () => {
      // Detect active section
      const sections = ['home', 'about', 'projects', 'skills', 'contact']
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setIsOpen(false)

  return (
    <>
      {/* Floating Centered Navigation - Desktop (Always Visible & Draggable) */}
      <motion.nav
        drag
        dragControls={dragControls}
        dragMomentum={false}
        dragElastic={0}
        dragListener={false}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
        style={{ x: "-50%" }}
        className="hidden md:block fixed top-6 left-1/2 z-50 select-none"
      >
        <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-gray-200 dark:border-gray-700 rounded-full shadow-2xl px-6 py-3 select-none">
          <div className="flex items-center space-x-2">
            {/* Logo */}
            <Link 
              href="/" 
              className="text-xl font-bold bg-gradient-to-r from-primary-600 to-blue-600 dark:from-primary-400 dark:to-blue-400 bg-clip-text text-transparent hover:from-primary-700 hover:to-blue-700 transition-all mr-2"
              draggable={false}
            >
              RR
            </Link>
            
            {/* Drag Handle */}
            <div 
              className="cursor-move p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 select-none touch-none"
              onPointerDown={(e) => dragControls.start(e)}
            >
              <Move className="w-4 h-4 pointer-events-none" />
            </div>
            
            {/* Separator */}
            <div className="w-px h-6 bg-gray-300 dark:bg-gray-600 mx-1"></div>
            
            {/* Navigation Items */}
            {navigation.map((item) => {
              const Icon = item.icon
              const isActive = activeSection === item.href.slice(1)
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative group"
                  onClick={closeMenu}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 rounded-full transition-all duration-300 ${
                      isActive
                        ? 'bg-primary-600 dark:bg-primary-500 text-white'
                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.div>
                  
                  {/* Tooltip */}
                  {!isDragging && (
                    <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 dark:bg-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                      {item.name}
                    </span>
                  )}
                </Link>
              )
            })}
            
            {/* Separator */}
            <div className="w-px h-6 bg-gray-300 dark:bg-gray-600 mx-1"></div>
            
            {/* Theme Toggle */}
            <ThemeToggle />
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Button - Top Right */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <button
          className="p-2 rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 shadow-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25 }}
            className="md:hidden fixed inset-y-0 right-0 z-50 w-64"
          >
            <div className="h-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-2xl border-l border-gray-200 dark:border-gray-700 p-6">
              <div className="flex justify-between items-center mb-10">
                {/* Logo */}
                <Link 
                  href="/" 
                  className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-blue-600 dark:from-primary-400 dark:to-blue-400 bg-clip-text text-transparent"
                  onClick={closeMenu}
                >
                  RR
                </Link>
                
                {/* Close Button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <nav className="space-y-2 mt-4">
                {navigation.map((item, index) => {
                  const Icon = item.icon
                  const isActive = activeSection === item.href.slice(1)
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
                          isActive
                            ? 'bg-primary-600 dark:bg-primary-500 text-white shadow-lg'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                        }`}
                        onClick={closeMenu}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="font-medium">{item.name}</span>
                      </Link>
                    </motion.div>
                  )
                })}
              </nav>
              
              {/* Theme Toggle - Mobile */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700"
              >
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">
                  Theme
                </p>
                <ThemeToggle />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop for mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  )
}