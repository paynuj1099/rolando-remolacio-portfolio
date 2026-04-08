import { Metadata } from 'next'
import Link from 'next/link'
import { Code, Database, Globe, Server, Smartphone, Zap, CheckCircle, ArrowRight, MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Services - Full Stack Development Solutions',
  description: 'Professional web development services including custom web applications, API development, database design, frontend development with React/Next.js, and backend development with .NET and Node.js. Get expert full-stack solutions tailored to your business needs.',
  keywords: ['web development services', 'custom web applications', 'API development', 'React development service', '.NET development', 'full stack developer hire', 'web app development Philippines', 'software development services'],
  openGraph: {
    title: 'Services - Full Stack Development Solutions',
    description: 'Expert web development services for custom applications, APIs, and modern web solutions.',
    type: 'website',
  },
}

const services = [
  {
    icon: Globe,
    title: 'Custom Web Application Development',
    description: 'Build modern, scalable web applications tailored to your specific business needs. From concept to deployment, I create solutions that drive results.',
    features: [
      'Full-stack web application development',
      'Progressive Web Apps (PWA)',
      'Single Page Applications (SPA)',
      'Enterprise web solutions',
      'E-commerce platforms',
      'Content management systems',
    ],
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Code,
    title: 'Frontend Development',
    description: 'Create stunning, responsive user interfaces that provide exceptional user experiences across all devices and platforms.',
    features: [
      'React & Next.js development',
      'TypeScript implementation',
      'Responsive web design',
      'Component-based architecture',
      'Performance optimization',
      'Modern UI/UX implementation',
    ],
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Server,
    title: 'Backend Development',
    description: 'Build robust, secure, and scalable backend systems that power your applications and handle complex business logic.',
    features: [
      '.NET Core & C# development',
      'Node.js & Express.js',
      'RESTful API design',
      'Microservices architecture',
      'Authentication & authorization',
      'Third-party API integration',
    ],
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Database,
    title: 'Database Design & Management',
    description: 'Design and implement efficient database solutions that ensure data integrity, security, and optimal performance.',
    features: [
      'SQL Server database design',
      'Database optimization',
      'Data modeling & architecture',
      'Migration & synchronization',
      'Backup & recovery strategies',
      'Query optimization',
    ],
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: Zap,
    title: 'API Development & Integration',
    description: 'Create powerful APIs and integrate third-party services to extend your application\'s functionality and connectivity.',
    features: [
      'RESTful API development',
      'API documentation',
      'Third-party service integration',
      'Webhook implementation',
      'API security best practices',
      'Version control & management',
    ],
    color: 'from-pink-500 to-pink-600',
  },
  {
    icon: Smartphone,
    title: 'Maintenance & Support',
    description: 'Keep your applications running smoothly with ongoing maintenance, updates, and technical support.',
    features: [
      'Bug fixes & troubleshooting',
      'Performance monitoring',
      'Security updates',
      'Feature enhancements',
      'Technical documentation',
      '24/7 support availability',
    ],
    color: 'from-indigo-500 to-indigo-600',
  },
]

const techStack = {
  frontend: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'],
  backend: ['.NET Core', 'C#', 'ASP.NET MVC', 'Node.js', 'Express.js', 'VB.NET'],
  database: ['MS SQL Server', 'PostgreSQL', 'MongoDB'],
  tools: ['Git', 'Azure DevOps', 'Docker', 'Postman', 'Visual Studio', 'VS Code'],
}

const process = [
  {
    step: '01',
    title: 'Discovery & Planning',
    description: 'We start by understanding your business goals, requirements, and target audience. I work with you to define project scope, timeline, and deliverables.',
  },
  {
    step: '02',
    title: 'Design & Architecture',
    description: 'I create a detailed technical architecture and design mockups. This phase ensures we have a solid foundation before writing any code.',
  },
  {
    step: '03',
    title: 'Development',
    description: 'Using agile methodologies, I build your application in iterative sprints. You\'ll receive regular updates and have opportunities to provide feedback.',
  },
  {
    step: '04',
    title: 'Testing & Quality Assurance',
    description: 'Rigorous testing ensures your application works flawlessly. I test for functionality, performance, security, and cross-browser compatibility.',
  },
  {
    step: '05',
    title: 'Deployment & Launch',
    description: 'I handle the entire deployment process, from server setup to going live. Your application is launched smoothly with minimal downtime.',
  },
  {
    step: '06',
    title: 'Maintenance & Support',
    description: 'Post-launch, I provide ongoing support, updates, and enhancements to keep your application running at peak performance.',
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 transition-colors duration-300">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Professional Web Development Services
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            Transform your ideas into powerful, scalable web solutions. I deliver full-stack development 
            services that drive business growth and user engagement.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-3 text-base font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 transition-colors"
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What I Offer
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Comprehensive development services to bring your vision to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Technology Stack
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Modern tools and frameworks for building exceptional software
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <Code className="w-6 h-6 text-blue-500" />
                Frontend
              </h3>
              <div className="flex flex-wrap gap-2">
                {techStack.frontend.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <Server className="w-6 h-6 text-green-500" />
                Backend
              </h3>
              <div className="flex flex-wrap gap-2">
                {techStack.backend.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <Database className="w-6 h-6 text-purple-500" />
                Database
              </h3>
              <div className="flex flex-wrap gap-2">
                {techStack.database.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <Zap className="w-6 h-6 text-orange-500" />
                Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {techStack.tools.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              My Development Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A structured approach to delivering high-quality software on time and within budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-5xl font-bold text-primary-600 dark:text-primary-400 mb-4 opacity-30">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-600 to-blue-600 dark:from-primary-700 dark:to-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <MessageCircle className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how I can help bring your ideas to life. Get in touch for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg text-primary-600 bg-white hover:bg-gray-100 transition-colors"
            >
              Contact Me
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg text-white border-2 border-white hover:bg-white/10 transition-colors"
            >
              View My Blog
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
