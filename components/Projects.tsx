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
    title: 'Assisteon Staffing',
    description: 'Staffing agency website with detailed services and contact forms built using .NET Razor Pages.',
    image: '/images/projects/assisteon_staffing_project.png',
    technologies: ['.NET Core', 'C#', 'JavaScript', 'Razor Pages', 'Smarter ASP'],
    // githubUrl: '#',
    liveUrl: 'https://assisteonstaffing.com',
    category: 'Frontend',
    tag: 'Live',
    platform: 'Web',
  },
    {
    id: 6,
    title: 'Product Landing Page',
    description: 'Landing page demo showcasing product features with interactive 3D elements using Three.js.',
    image: '/images/projects/product_landing_page_demo.png',
    technologies: ['React', 'TypeScript', 'Three.js', 'Vite', 'Vercel'],
    // githubUrl: '#',
    liveUrl: 'https://productlandingpage-ten.vercel.app/',
    category: 'Frontend',
    tag: 'Live',
    platform: 'Web',
  },
  {
    id: 2,
    title: 'Digital Ledger',
    description: 'Inventory tracking application with automated stock alerts, barcode scanning, and comprehensive reporting dashboard built with MVC and SQL Server.',
    image: '/images/projects/digital_ledger.png',
    technologies: ['.NET Core MVC', 'C#', 'MS SQL', 'Bootstrap'],
    // githubUrl: '#',
    liveUrl: null,
    category: 'Full Stack',
    tag: 'In-House',
    platform: 'Web',
  },
  {
    id: 3,
    title: 'Product Status Visualization',
    description: 'Production tracking desktop application with real-time status updates, data visualization, and reporting features using Windows Forms and MS SQL.',
    image: '/images/projects/product_placement_category_visualization.png',
    technologies: ['.NET Windows Form', 'C#', 'MS SQL'],
    // githubUrl: '#',
    liveUrl: null,
    category: 'Full Stack',
    tag: 'In-House',
    platform: 'Windows',
  },
  {
    id: 4,
    title: 'Daily Checksheet',
    description: 'Web-based daily checksheet application for logging and tracking daily tasks using barcodes, with user authentication and roles.',
    image: '/images/projects/daily_checksheet.png',
    technologies: ['.NET', 'C#', 'MS SQL', 'JavaScript', 'Bootstrap'],
    // githubUrl: '#',
    liveUrl: null,
    category: 'Full Stack',
    tag: 'In-House',
    platform: 'Web',
  },
  {
    id: 5,
    title: 'Data Mapping Automation',
    description: 'Desktop application to automate data mapping and transformation tasks, integrating MS SQL for efficient data handling.',
    image: '/images/projects/data_mapping_automation.png',
    technologies: ['.NET Windows Form', 'C#', 'MS SQL'],
    // githubUrl: '#',
    liveUrl: null,
    category: 'Full Stack',
    tag: 'In-House',
    platform: 'Windows',
  },
  // {
  //   id: 6,
  //   title: 'Data Retrieval Ledger',
  //   description: 'Web application for managing and tracking data retrieval requests, with user roles and reporting features.',
  //   image: '/images/projects/data_retrieval_ledger.png',
  //   technologies: ['React', 'JavaScript', 'NodeJS', 'ExpressJS', 'MS SQL', 'Jquery'],
  //   // githubUrl: '#',
  //   liveUrl: null,
  //   category: 'Backend',
  //   tag: 'In-House',
  //   platform: 'Web',
  // },
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
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-4">
            Here are some of my recent projects that showcase my skills in web development, 
            from frontend interfaces to full-stack applications.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500 italic mb-8">
            *Project images and website links are used under fair use and demonstration purposes.
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
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                      }}
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-200 via-primary-300 to-primary-400 flex items-center justify-center">
                      <Code2 className="w-16 h-16 text-white opacity-50" />
                    </div>
                  )}
                
                {/* Overlay with links */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                  {project.liveUrl ? (
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center space-x-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live View</span>
                    </Link>
                  ) : (
                    <span className="bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-300 px-4 py-2 rounded-lg font-medium flex items-center space-x-2 cursor-not-allowed">
                      <ExternalLink className="w-4 h-4" />
                      <span>In-House Project</span>
                    </span>
                  )}
                  {/* GitHub button
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-900 dark:bg-gray-700 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors flex items-center space-x-2"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </Link>
                  */}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Tag and Category Badges */}
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  {/* Tag 1: Live or In-House */}
                  <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                    project.tag === 'Live' 
                      ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300' 
                      : 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300'
                  }`}>
                    {project.tag}
                  </span>
                  {/* Category Badge */}
                  <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                  {/* Tag 2: Web or Windows */}
                  <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                    project.platform === 'Web'
                      ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                      : 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300'
                  }`}>
                    {project.platform}
                  </span>
                </div>
                
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

