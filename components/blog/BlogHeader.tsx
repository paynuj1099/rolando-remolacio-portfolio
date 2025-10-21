'use client'

import { motion } from 'framer-motion'

export default function BlogHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 mt-12">
        Blog
      </h2>
      <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
        Thoughts, tutorials, personal experiences, insights on web development, design, and technology.
      </p>
    </motion.div>
  )
}
