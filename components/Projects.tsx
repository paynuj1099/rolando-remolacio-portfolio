'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
  ExternalLink,
  Code2,
  Github,
} from 'lucide-react'

const projects = [
  {
    id: 2,
    title: 'Verde by Renzo',
    description:
      'Full-stack premium golf ecommerce platform built with Next.js and Firebase. Features a responsive customer storefront, Firebase Authentication with OAuth 2.0 social login, Firestore-powered product and account data, PayMongo payment processing, shopping cart and wishlist functionality, product variants, order tracking, and customer account management. Includes a dedicated admin dashboard for managing products, inventory, customer accounts, orders, payments, and day-to-day ecommerce store operations.',
    image: '/images/projects/verde-by-ulo.png',
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Firebase',
      'Firebase Auth',
      'Firestore',
      'OAuth 2.0',
      'PayMongo API',
      'REST API',
      'GCP',
      'Vercel',
    ],
    githubUrl:
      'https://github.com/paynuj1099/verde-by-renzo',
    liveUrl:
      'https://verde-by-renzo.vercel.app/',
    category: 'Full Stack',
    tag: 'Live',
    platform: 'Web',
  },

  {
    id: 3,
    title: 'Website Auditor Tool',
    description:
      'Web-based website auditing and SEO analysis tool designed to evaluate websites and identify areas for improvement. Provides structured website insights, SEO-related analysis, visual analytics, scoring, and actionable recommendations to help users understand website quality and improve search visibility. Built with Next.js and TypeScript, with Recharts used to present audit results through clear and interactive data visualizations.',
    image: '/images/projects/seo_auditor.png',
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Recharts',
      'SEO',
    ],
    // githubUrl: '#',
    liveUrl:
      'https://seoauditor-nu.vercel.app/',
    category: 'Full Stack',
    tag: 'Live',
    platform: 'Web',
  },

  {
    id: 6,
    title: 'Product Landing Page',
    description:
      'Interactive product showcase built with React, TypeScript, and Three.js to demonstrate immersive 3D experiences on the web. Combines real-time 3D product presentation with responsive layouts and interactive frontend elements, providing a more engaging alternative to traditional static product landing pages. The project focuses on modern product presentation, visual interaction, responsive design, and browser-based 3D rendering.',
    image:
      '/images/projects/product_landing_page_demo.png',
    technologies: [
      'React',
      'TypeScript',
      'Three.js',
      'Vite',
      'Vercel',
    ],
    githubUrl:
      'https://github.com/paynuj1099/React3DThreeJS',
    liveUrl:
      'https://productlandingpage-ten.vercel.app/',
    category: 'Frontend',
    tag: 'Live',
    platform: 'Web',
  },

  {
    id: 1,
    title: 'Assisteon Staffing',
    description:
      'Professional staffing and business solutions platform supporting workforce recruitment and business operations across multiple industries. The public website presents specialized staffing services for Healthcare, Finance, IT & Digital Solutions, Digital Operations, Retail, Staffing, and Real Estate, along with contact and lead-generation functionality. The project also includes a custom in-house Analytics Dashboard designed specifically for Assisteon, providing a centralized interface for internal analytics, operational reporting, performance visibility, and business-focused data presentation tailored to their workflow and organizational needs.',
    image:
      '/images/projects/assisteon_staffing_project.png',
    technologies: [
      '.NET Core',
      'C#',
      'JavaScript',
      'Razor Pages',
      'HTML',
      'CSS',
      'Smarter ASP',
      'SEO',
    ],
    // githubUrl: '#',
    liveUrl:
      'https://assisteonstaffing.com',
    category: 'Frontend',
    tag: 'Live',
    platform: 'Web',
  },

  {
    id: 4,
    title: 'Modern Portfolio Website',
    description:
      'Interactive developer portfolio built with React, TypeScript, Tailwind CSS, and GSAP to showcase professional experience, technical skills, and software development projects. Features responsive layouts, dark mode support, animated interfaces, immersive transitions, interactive project presentation, and motion-driven user experiences. Designed with a strong focus on visual storytelling, responsive behavior, smooth animations, usability, and modern frontend development practices.',
    image:
      '/images/projects/modern_portfolio.png',
    technologies: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'GSAP',
      'Vercel',
    ],
    githubUrl:
      'https://github.com/paynuj1099/modern-portfolio',
    liveUrl:
      'https://modern-portfolio-vert-pi.vercel.app/',
    category: 'Full Stack',
    tag: 'Live',
    platform: 'Web',
  },

  {
    id: 5,
    title: 'Data Mapping Automation',
    description:
      'Internal Windows desktop application developed to automate repetitive data mapping, transformation, and database-driven workflows in a production environment. Integrates with Microsoft SQL Server to retrieve, process, organize, validate, and update structured business data, reducing manual operations and improving processing efficiency. Built with C# and .NET Windows Forms with a focus on reliability, maintainability, data accuracy, and streamlined internal workflows.',
    image:
      '/images/projects/data_mapping_automation.png',
    technologies: [
      '.NET Windows Forms',
      'C#',
      'MS SQL Server',
      'SQL',
      'Data Processing',
      'Automation',
    ],
    // githubUrl: '#',
    liveUrl: null,
    category: 'Full Stack',
    tag: 'In-House',
    platform: 'Windows',
  },

  // {
  //   id: 7,
  //   title: 'Data Retrieval Ledger',
  //   description:
  //     'Internal web application designed to manage, monitor, and track data retrieval requests across business operations. Provides centralized request management, user roles, request status tracking, reporting features, and database-driven workflows. Built using React, Node.js, Express.js, and Microsoft SQL Server to improve visibility and reduce manual coordination between users and internal teams.',
  //   image:
  //     '/images/projects/data_retrieval_ledger.png',
  //   technologies: [
  //     'React',
  //     'JavaScript',
  //     'Node.js',
  //     'Express.js',
  //     'MS SQL Server',
  //     'jQuery',
  //   ],
  //   // githubUrl: '#',
  //   liveUrl: null,
  //   category: 'Backend',
  //   tag: 'In-House',
  //   platform: 'Web',
  // },
]

const categories = [
  'All',
  'Full Stack',
  'Frontend',
  'Backend',
]

export default function Projects() {
  const [selectedCategory, setSelectedCategory] =
    useState('All')

  const [
    expandedProjects,
    setExpandedProjects,
  ] = useState<number[]>([])

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter(
          (project) =>
            project.category === selectedCategory,
        )

  const toggleDescription = (
    projectId: number,
  ) => {
    setExpandedProjects((prev) =>
      prev.includes(projectId)
        ? prev.filter(
            (id) => id !== projectId,
          )
        : [...prev, projectId],
    )
  }

  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-4">
            Here are some of my recent
            projects that showcase my skills
            in web development, from frontend
            interfaces to full-stack
            applications.
          </p>

          <p className="text-sm text-gray-500 dark:text-gray-500 italic mb-8">
            *Project images and website links
            are used under fair use and
            demonstration purposes.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map(
              (category) => (
                <motion.button
                  key={category}
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  onClick={() =>
                    setSelectedCategory(
                      category,
                    )
                  }
                  className={`px-6 py-2 rounded-full font-medium transition-colors ${
                    selectedCategory ===
                    category
                      ? 'bg-primary-600 dark:bg-primary-500 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {category}
                </motion.button>
              ),
            )}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(
            (project, index) => {
              const isExpanded =
                expandedProjects.includes(
                  project.id,
                )

              const hasLongDescription =
                project.description.length >
                160

              return (
                <motion.div
                  key={project.id}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden group shadow-sm hover:shadow-lg transition-shadow duration-300"
                >
                  {/* Project Image */}
                  <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 overflow-hidden">
                    {project.image ? (
                      <Image
                        src={
                          project.image
                        }
                        alt={
                          project.title
                        }
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          e.currentTarget.style.display =
                            'none'
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
                          href={
                            project.liveUrl
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center space-x-2"
                        >
                          <ExternalLink className="w-4 h-4" />

                          <span>
                            Live View
                          </span>
                        </Link>
                      ) : (
                        <span className="bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-300 px-4 py-2 rounded-lg font-medium flex items-center space-x-2 cursor-not-allowed">
                          <ExternalLink className="w-4 h-4" />

                          <span>
                            In-House
                            Project
                          </span>
                        </span>
                      )}

                      {project.githubUrl && (
                        <Link
                          href={
                            project.githubUrl
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gray-900 dark:bg-gray-700 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors flex items-center space-x-2"
                        >
                          <Github className="w-4 h-4" />

                          <span>
                            Code
                          </span>
                        </Link>
                      )}
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    {/* Badges */}
                    <div className="flex items-center gap-2 mb-3 flex-wrap">
                      {/* Live / In-House */}
                      <span
                        className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                          project.tag ===
                          'Live'
                            ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                            : 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300'
                        }`}
                      >
                        {project.tag}
                      </span>

                      {/* Category */}
                      <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs font-medium rounded-full">
                        {
                          project.category
                        }
                      </span>

                      {/* Platform */}
                      <span
                        className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                          project.platform ===
                          'Web'
                            ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                            : 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300'
                        }`}
                      >
                        {
                          project.platform
                        }
                      </span>
                    </div>

                    {/* Project Title */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <div className="mb-4">
                      <p
                        className={`text-gray-600 dark:text-gray-300 text-sm leading-relaxed ${
                          !isExpanded &&
                          hasLongDescription
                            ? 'line-clamp-3'
                            : ''
                        }`}
                      >
                        {
                          project.description
                        }
                      </p>

                      {hasLongDescription && (
                        <button
                          type="button"
                          onClick={() =>
                            toggleDescription(
                              project.id,
                            )
                          }
                          aria-expanded={
                            isExpanded
                          }
                          className="mt-2 text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                        >
                          {isExpanded
                            ? 'See less'
                            : 'See more...'}
                        </button>
                      )}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map(
                        (tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md font-medium"
                          >
                            {tech}
                          </span>
                        ),
                      )}
                    </div>
                  </div>
                </motion.div>
              )
            },
          )}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Interested in working together?
          </h3>

          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing
            new opportunities and interesting
            projects. Let's create something
            amazing together!
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