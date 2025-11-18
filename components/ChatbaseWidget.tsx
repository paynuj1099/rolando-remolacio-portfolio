'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function ChatbaseWidget() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 w-14 h-14 bg-primary-600 dark:bg-primary-500 text-white rounded-full shadow-lg hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors flex items-center justify-center"
        aria-label="Toggle Chatbase Assistant"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 sm:inset-auto sm:bottom-24 sm:right-6 z-50 sm:w-96 sm:max-w-md sm:h-[500px] sm:rounded-2xl shadow-2xl overflow-hidden"
          >
            <iframe
              src="https://www.chatbase.co/chatbot-iframe/kgFk4M06j__SjfgdeXWeY"
              width="100%"
              height="100%"
              frameBorder="0"
              className="w-full h-full rounded-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
