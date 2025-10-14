'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink, Code2, Github } from 'lucide-react'
import AnimatedCard from './ui/AnimatedCard'

const projects = [
  {
    id: 1,
    title: 'Enterprise Resource Planning System',
    description: 'Comprehensive ERP system built with .NET Core and React for managing business operations, inventory, and reporting. Features role-based access control and real-time data synchronization.',
    image: '/images/projects/erp.jpg',
    technologies: ['.NET Core', 'C#', 'React', 'MS SQL', 'Azure'],
    githubUrl: '#',
    liveUrl: '#',
    category: 'Full Stack',
  },
  {
    id: 2,
    title: 'Inventory Management System',
    description: 'Real-time inventory tracking application with automated stock alerts, barcode scanning, and comprehensive reporting dashboard built with Blazor and SQL Server.',
    image: '/images/projects/inventory.jpg',
    technologies: ['Blazor', 'C#', 'MS SQL', 'SignalR', 'Bootstrap'],
    githubUrl: '#',
    liveUrl: '#',
    category: 'Full Stack',
  },
  {
    id: 3,
    title: 'Customer Portal',
    description: 'Interactive customer-facing portal for order tracking, support tickets, and account management. Built with React and .NET Web API with JWT authentication.',
    image: '/images/projects/portal.jpg',
    technologies: ['React', 'JavaScript', '.NET Web API', 'MySQL', 'Tailwind CSS'],
    githubUrl: '#',
    liveUrl: '#',
    category: 'Full Stack',
  },
  {
    id: 4,
    title: 'Reporting Dashboard',
    description: 'Business intelligence dashboard with interactive charts, data visualization, and automated report generation using React and Chart.js.',
    image: '/images/projects/dashboard.jpg',
    technologies: ['React', 'Chart.js', 'Node.js', 'PostgreSQL'],
    githubUrl: '#',
    liveUrl: '#',
    category: 'Frontend',
  },
  {
    id: 5,
    title: 'Document Management System',
    description: 'Secure document storage and management system with version control, approval workflows, and Azure Blob storage integration.',
    image: '/images/projects/dms.jpg',
    technologies: ['.NET', 'VB.Net', 'Azure Blob', 'MS SQL', 'jQuery'],
    githubUrl: '#',
    liveUrl: '#',
    category: 'Backend',
  },
  {
    id: 6,
    title: 'API Integration Platform',
    description: 'Microservices-based API integration platform for connecting multiple third-party services with error handling and monitoring.',
    image: '/images/projects/api.jpg',
    technologies: ['.NET Core', 'C#', 'Redis', 'Docker', 'Azure DevOps'],
    githubUrl: '#',
    liveUrl: '#',
    category: 'Backend',
  },
]

const categories = ['All', 'Full Stack', 'Frontend', 'Backend']

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
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
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
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
                    ? 'bg-primary-600 dark:bg-primary-500 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
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
            <AnimatedCard
              key={project.id}
              glowColor="rgba(59, 130, 246, 0.3)"
              className="overflow-hidden group p-0"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                {/* Fallback gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-200 via-primary-300 to-primary-400 flex items-center justify-center">
                  <Code2 className="w-16 h-16 text-white opacity-50" />
                </div>
                
                {/* Overlay with links */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center space-x-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </Link>
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-900 dark:bg-gray-700 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors flex items-center space-x-2"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </Link>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Category Badge */}
                <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium rounded-full mb-3">
                  {project.category}
                </span>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              </motion.div>
            </AnimatedCard>
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
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Interested in working together?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting projects. 
            Let's create something amazing together!
          </p>
          <Link 
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 transition-colors"
          >
            Start a Project
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

