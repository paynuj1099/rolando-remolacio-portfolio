'use client'

import { motion, useAnimation } from 'framer-motion'
import { GraduationCap, Briefcase, User, Code2, Quote, Calendar, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import type { PostMeta } from '@/lib/posts'

const quotes = [
  { text: "Code is like humor. When you have to explain it, it's bad.", author: "Cory House" },
  { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
  { text: "Experience is the name everyone gives to their mistakes.", author: "Oscar Wilde" },
  { text: "In order to be irreplaceable, one must always be different.", author: "Coco Chanel" },
  { text: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
  { text: "Make it work, make it right, make it fast.", author: "Kent Beck" },
]

const timelineData = [
  {
    type: 'experience',
    title: 'Programmer Analyst',
    organization: 'Vertere Global Solutions, Inc.',
    period: '2025 - Present',
    description: 'Full-stack development using .NET, C#, JavaScript, and React. Built enterprise applications with Azure DevOps, MS SQL, and modern web technologies.',
    icon: Briefcase,
  },
  {
    type: 'experience',
    title: 'Assistant Engineer 1',
    organization: 'ROHM Electronics Philippines, Inc.',
    period: 'May 2023 — April 2025',
    description: 'Developed web applications using various technologies. Maintained and enhanced existing systems, collaborated with cross-functional teams, and contributed to process improvements.',
    icon: Briefcase,
  },
  {
    type: 'education',
    title: 'BS in Computer Engineering',
    organization: 'Cavite State University - Carmona',
    period: 'Graduated 2023',
    description: 'Graduated with a degree in Computer Engineering, building a strong foundation in programming, database management, and software development.',
    icon: GraduationCap,
  },
]

export default function About({ featuredPosts }: { featuredPosts?: PostMeta[] }) {
  const [isPaused, setIsPaused] = useState(false)

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I'm a passionate Full Stack Developer with hands-on experience in building robust, scalable, 
            and user-friendly applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">My Story</h3>
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  I'm a passionate Full Stack Developer with hands-on experience in building robust, scalable, 
                  and user-friendly applications. I specialize in both frontend and backend technologies.
                </p>
                <p>
                  My expertise includes .NET, .NET Core, MVC, C#, VB.Net, JavaScript, jQuery, Node.js, React, 
                  Blazor, MS SQL Server, REST APIs, and modern web development practices using HTML5, CSS3, and Bootstrap 5.
                </p>
                <p>
                  With a solid foundation in software development and a problem-solving mindset, I enjoy turning 
                  complex requirements into clean, efficient solutions that make a real impact.
                </p>
              </div>
            </div>

            {/* Quotes Carousel */}
            <div 
              className="mt-8 relative overflow-hidden"
            >
              {/* Gradient fade edges */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 dark:from-gray-900 to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 dark:from-gray-900 to-transparent z-10 pointer-events-none"></div>
              
              <motion.div 
                className="flex cursor-grab active:cursor-grabbing"
                drag="x"
                dragConstraints={{ left: -2400, right: 0 }}
                dragElastic={0.1}
                onDragStart={() => setIsPaused(true)}
                onDragEnd={() => setIsPaused(false)}
                onClick={() => setIsPaused(!isPaused)}
                animate={!isPaused ? {
                  x: [0, -2400]
                } : {}}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20,
                    ease: "linear",
                  },
                }}
              >
                {[...quotes, ...quotes].map((quote, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-80 mx-4 p-6 bg-gradient-to-br from-primary-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-xl border border-primary-200 dark:border-gray-600"
                  >
                    <Quote className="w-8 h-8 text-primary-600 dark:text-primary-400 mb-4" />
                    <p className="text-gray-700 dark:text-gray-300 italic mb-3">
                      "{quote.text}"
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                      — {quote.author}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">My Journey</h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700"></div>
              
              <div className="space-y-8">
                {timelineData.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="relative pl-16"
                    >
                      {/* Timeline dot */}
                      <div className="absolute left-0 top-2 w-12 h-12 bg-white dark:bg-gray-800 border-4 border-primary-200 dark:border-primary-700 rounded-full flex items-center justify-center shadow-lg">
                        <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                      </div>
                      
                      {/* Content */}
                      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {item.title}
                          </h4>
                          <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                            {item.period}
                          </span>
                        </div>
                        <p className="text-primary-700 dark:text-primary-400 font-medium mb-2">
                          {item.organization}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16 mb-16"
        >
          <div className="bg-gradient-to-r from-primary-600 to-blue-600 dark:from-primary-700 dark:to-blue-700 rounded-2xl p-8 text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-4">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-primary-50 dark:text-primary-100 mb-6 max-w-2xl mx-auto">
              I'm always excited to work on new projects and collaborate with talented people. 
              Whether you have a project in mind or just want to connect, I'd love to hear from you.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg bg-white dark:bg-gray-100 text-primary-600 dark:text-primary-700 hover:bg-gray-100 dark:hover:bg-white transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </motion.div>

        {/* Latest from Blog */}
        {featuredPosts && featuredPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Latest from the Blog
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Thoughts, tutorials, and insights on web development and technology
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {featuredPosts.slice(0, 3).map((post: PostMeta) => (
                <article
                  key={post.slug}
                  className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </div>
                    
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h4>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors"
                    >
                      Read more
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/blog"
                className="inline-flex items-center px-6 py-3 border-2 border-primary-600 dark:border-primary-500 text-primary-600 dark:text-primary-400 font-semibold rounded-lg hover:bg-primary-50 dark:hover:bg-gray-800 transition-colors"
              >
                View All Posts
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}