'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and inventory management.',
    image: '/images/projects/ecommerce.jpg',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
    githubUrl: 'https://github.com/rolandoremolacio/ecommerce-platform',
    liveUrl: 'https://ecommerce-demo.vercel.app',
    category: 'Full Stack',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    image: '/images/projects/taskmanager.jpg',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'Socket.io', 'Tailwind CSS'],
    githubUrl: 'https://github.com/rolandoremolacio/task-manager',
    liveUrl: 'https://taskmanager-demo.vercel.app',
    category: 'Frontend',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.',
    image: '/images/projects/weather.jpg',
    technologies: ['React', 'Chart.js', 'OpenWeather API', 'Styled Components'],
    githubUrl: 'https://github.com/rolandoremolacio/weather-dashboard',
    liveUrl: 'https://weather-dashboard-demo.vercel.app',
    category: 'Frontend',
  },
  {
    id: 4,
    title: 'Blog CMS',
    description: 'A content management system for bloggers with markdown support, SEO optimization, and analytics dashboard.',
    image: '/images/projects/blog-cms.jpg',
    technologies: ['Next.js', 'MDX', 'MongoDB', 'NextAuth.js', 'Vercel'],
    githubUrl: 'https://github.com/rolandoremolacio/blog-cms',
    liveUrl: 'https://blog-cms-demo.vercel.app',
    category: 'Full Stack',
  },
  {
    id: 5,
    title: 'Chat Application',
    description: 'Real-time chat application with private messaging, group chats, file sharing, and emoji reactions.',
    image: '/images/projects/chat-app.jpg',
    technologies: ['React', 'Socket.io', 'Express', 'MongoDB', 'Cloudinary'],
    githubUrl: 'https://github.com/rolandoremolacio/chat-app',
    liveUrl: 'https://chat-app-demo.vercel.app',
    category: 'Full Stack',
  },
  {
    id: 6,
    title: 'Portfolio Website',
    description: 'A responsive portfolio website with dynamic content, contact forms, and integrated blog functionality.',
    image: '/images/projects/portfolio.jpg',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'EmailJS'],
    githubUrl: 'https://github.com/rolandoremolacio/portfolio',
    liveUrl: 'https://rolandoremolacio.dev',
    category: 'Frontend',
  },
]

const categories = ['All', 'Full Stack', 'Frontend', 'Backend']

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Here are some of my recent projects that showcase my skills in web development, 
            from frontend interfaces to full-stack applications.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Fallback gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-200 via-primary-300 to-primary-400 flex items-center justify-center">
                  <CodeBracketIcon className="w-16 h-16 text-white opacity-50" />
                </div>
                
                {/* Overlay with links */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center space-x-2"
                  >
                    <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                    <span>Live Demo</span>
                  </Link>
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-900 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center space-x-2"
                  >
                    <CodeBracketIcon className="w-4 h-4" />
                    <span>Code</span>
                  </Link>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Category Badge */}
                <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full mb-3">
                  {project.category}
                </span>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Interested in working together?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting projects. 
            Let's create something amazing together!
          </p>
          <Link
            href="#contact"
            className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 inline-block"
          >
            Start a Project
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

