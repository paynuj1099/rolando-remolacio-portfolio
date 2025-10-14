'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, User, Code2 } from 'lucide-react'
import AnimatedCard from './ui/AnimatedCard'

const timelineData = [
  {
    type: 'experience',
    title: 'Programmer Analyst',
    organization: 'Vertere Global Solutions, Inc.',
    period: '2025 - Present',
    description: 'Full-stack development using .NET, C#, JavaScript, and React. Built enterprise applications with Azure DevOps, MS SQL, and modern web technologies. Lead backend architecture and database design.',
    icon: Briefcase,
  },
  {
    type: 'experience',
    title: 'Assistant Engineer 1',
    organization: 'ROHM Electronics Philippines, Inc.',
    period: 'May 2023 — April 2025',
    description: 'Developed responsive web applications using React, jQuery, and modern JavaScript frameworks. Collaborated with clients to deliver custom web solutions.',
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

export default function About() {
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
            <AnimatedCard glowColor="rgba(59, 130, 246, 0.3)">
              <div className="flex items-center mb-6">
                <User className="w-8 h-8 text-primary-600 dark:text-primary-400 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">My Story</h3>
              </div>
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
            </AnimatedCard>
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
                      <AnimatedCard glowColor="rgba(59, 130, 246, 0.2)" className="p-6">
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
                      </AnimatedCard>
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
          className="text-center mt-16"
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
      </div>
    </section>
  )
}