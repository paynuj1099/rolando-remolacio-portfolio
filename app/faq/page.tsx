'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, HelpCircle, Code, DollarSign, Clock, MessageCircle } from 'lucide-react'
import Link from 'next/link'

const faqs = [
  {
    category: 'General',
    icon: HelpCircle,
    questions: [
      {
        question: 'What services do you offer?',
        answer: 'I offer comprehensive full-stack development services including custom web application development, frontend development with React/Next.js, backend development with .NET and Node.js, API development and integration, database design and management, and ongoing maintenance and support. I work with modern technologies to build scalable, performant web solutions.',
      },
      {
        question: 'What industries do you work with?',
        answer: 'I have experience working across various industries including e-commerce, healthcare technology, manufacturing, SaaS platforms, and enterprise software solutions. My background in different sectors allows me to understand diverse business requirements and deliver tailored solutions that meet specific industry needs.',
      },
      {
        question: 'Do you work with clients internationally?',
        answer: 'Yes! I work with clients globally. I\'m based in the Philippines but have experience collaborating with remote teams and clients across different time zones. I use modern communication tools and project management platforms to ensure smooth collaboration regardless of location.',
      },
      {
        question: 'What makes you different from other developers?',
        answer: 'I bring a unique combination of technical expertise, attention to detail, and commitment to clean code. With 3+ years of professional experience, I don\'t just write code that works—I write code that\'s maintainable, scalable, and follows industry best practices. I\'m also committed to clear communication and delivering projects on time.',
      },
    ],
  },
  {
    category: 'Technical',
    icon: Code,
    questions: [
      {
        question: 'What technologies do you specialize in?',
        answer: 'My core tech stack includes: Frontend - React, Next.js, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS; Backend - .NET Core, C#, ASP.NET MVC, Node.js, Express.js; Database - MS SQL Server, PostgreSQL, MongoDB; Tools - Git, Azure DevOps, Docker. I stay updated with the latest technologies and best practices in web development.',
      },
      {
        question: 'Can you work with my existing codebase?',
        answer: 'Absolutely! I have extensive experience working with legacy code, refactoring existing applications, and adding new features to established systems. I can quickly understand existing codebases, identify areas for improvement, and implement changes while maintaining code quality and stability.',
      },
      {
        question: 'Do you follow coding best practices and standards?',
        answer: 'Yes, I\'m committed to writing clean, maintainable code. I follow industry best practices including SOLID principles, clean code principles, proper documentation, version control with Git, code reviews, automated testing where applicable, and comprehensive error handling. Quality is never compromised.',
      },
      {
        question: 'Can you integrate third-party APIs and services?',
        answer: 'Yes, I have extensive experience integrating various third-party services including payment gateways (Stripe, PayPal), authentication providers (OAuth, Auth0), cloud services (Azure, AWS), email services, SMS providers, social media APIs, and more. I can handle complex integrations while ensuring security and reliability.',
      },
      {
        question: 'Do you build mobile-responsive applications?',
        answer: 'Yes, all web applications I build are fully responsive and mobile-friendly. I use modern CSS frameworks like Tailwind CSS and follow mobile-first design principles to ensure your application looks great and functions perfectly on all devices - desktops, tablets, and smartphones.',
      },
    ],
  },
  {
    category: 'Process & Timeline',
    icon: Clock,
    questions: [
      {
        question: 'What is your development process?',
        answer: 'My process includes 6 key phases: 1) Discovery & Planning - understanding requirements and goals, 2) Design & Architecture - creating technical specifications, 3) Development - building in iterative sprints with regular updates, 4) Testing & QA - ensuring quality and functionality, 5) Deployment & Launch - smooth go-live process, 6) Maintenance & Support - ongoing improvements and updates.',
      },
      {
        question: 'How long does a typical project take?',
        answer: 'Project timelines vary based on scope and complexity. A simple landing page might take 1-2 weeks, while a full web application could take 2-3 months or more. During our initial consultation, I\'ll provide a detailed timeline based on your specific requirements. I believe in realistic timelines and delivering quality work on schedule.',
      },
      {
        question: 'Do you provide project updates during development?',
        answer: 'Yes! Transparency is key. I provide regular updates throughout the development process, typically weekly or bi-weekly depending on the project. You\'ll have access to progress reports, demo environments to test features, and can provide feedback at each stage. I use project management tools to keep everything organized and visible.',
      },
      {
        question: 'What happens after the project is completed?',
        answer: 'After launch, I provide a warranty period for bug fixes and minor adjustments. I also offer ongoing maintenance and support packages if needed. You\'ll receive all source code, documentation, and training materials. I\'m available for future enhancements, updates, and new features as your business grows.',
      },
      {
        question: 'Can I request changes during development?',
        answer: 'Yes, I use an agile approach which allows for flexibility. Minor changes and refinements are expected and welcomed. For significant scope changes, we\'ll discuss the impact on timeline and budget. I believe in collaboration and want to ensure the final product meets your vision.',
      },
    ],
  },
  {
    category: 'Pricing & Payment',
    icon: DollarSign,
    questions: [
      {
        question: 'How do you charge for your services?',
        answer: 'I offer flexible pricing models: hourly rates for smaller tasks or ongoing support, fixed-price packages for well-defined projects, and monthly retainers for long-term partnerships. The pricing depends on project scope, complexity, timeline, and technologies involved. I provide detailed quotes after understanding your requirements.',
      },
      {
        question: 'Do you require upfront payment?',
        answer: 'Yes, I typically require a deposit (usually 30-50%) to begin work, with the remainder split into milestones or paid upon completion. This protects both parties and ensures commitment. For larger projects, I can set up milestone-based payments aligned with deliverables.',
      },
      {
        question: 'What payment methods do you accept?',
        answer: 'I accept various payment methods including bank transfers, PayPal, and other secure online payment platforms. For international clients, I can accommodate different payment providers to make the process as convenient as possible.',
      },
      {
        question: 'Do you offer discounts for long-term projects?',
        answer: 'Yes, I offer competitive rates for long-term engagements and retainer agreements. If you\'re planning an ongoing relationship or have multiple projects, we can discuss volume discounts and special pricing arrangements.',
      },
      {
        question: 'What if I\'m not satisfied with the work?',
        answer: 'Your satisfaction is my priority. I work closely with clients throughout the project to ensure expectations are met. If there are issues, I\'ll work to resolve them promptly. I provide revisions as part of the project scope, and we\'ll agree on deliverables upfront to avoid misunderstandings.',
      },
    ],
  },
  {
    category: 'Support & Maintenance',
    icon: MessageCircle,
    questions: [
      {
        question: 'Do you provide ongoing support after launch?',
        answer: 'Yes, I offer various support and maintenance packages tailored to your needs. This can include bug fixes, security updates, performance monitoring, feature enhancements, and technical support. I\'m committed to ensuring your application continues to run smoothly long after launch.',
      },
      {
        question: 'How quickly do you respond to support requests?',
        answer: 'For clients on maintenance plans, I typically respond within 24 hours for normal requests and within a few hours for urgent issues. Response times may vary based on the support package you choose. Critical issues affecting your site\'s functionality are always prioritized.',
      },
      {
        question: 'Can you help with hosting and deployment?',
        answer: 'Yes, I can assist with hosting setup, deployment configuration, domain management, SSL certificates, and server maintenance. I work with various cloud platforms including Azure, AWS, Vercel, and Netlify. I can recommend the best hosting solution based on your specific needs and budget.',
      },
      {
        question: 'Do you provide training for my team?',
        answer: 'Yes, I can provide training and documentation to help your team understand and manage the application. This includes user guides, admin documentation, video tutorials, and live training sessions if needed. I want to ensure your team feels confident using and maintaining the system.',
      },
      {
        question: 'What if I need emergency support?',
        answer: 'For clients on premium support packages, I offer emergency support with faster response times. Critical issues that affect your business operations are always prioritized. I\'m committed to keeping your applications running smoothly and minimizing any downtime.',
      },
    ],
  },
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-200 dark:border-gray-700 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-start justify-between text-left hover:bg-gray-50 dark:hover:bg-gray-800/50 px-4 rounded-lg transition-colors"
      >
        <span className="text-lg font-semibold text-gray-900 dark:text-white pr-8">
          {question}
        </span>
        {isOpen ? (
          <ChevronUp className="w-6 h-6 text-primary-600 dark:text-primary-400 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="px-4 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  )
}

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 transition-colors duration-300">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <HelpCircle className="w-16 h-16 text-primary-600 dark:text-primary-400 mx-auto mb-6" />
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Find answers to common questions about my services, process, and how we can work together
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          {faqs.map((category, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-primary-600 to-blue-600 dark:from-primary-700 dark:to-blue-700 px-8 py-6">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                  <category.icon className="w-7 h-7" />
                  {category.category}
                </h2>
              </div>
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {category.questions.map((faq, qIdx) => (
                  <FAQItem key={qIdx} question={faq.question} answer={faq.answer} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Don't hesitate to reach out. I'm here to help and answer any questions you may have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 transition-colors"
            >
              Contact Me
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg text-primary-600 dark:text-primary-400 bg-white dark:bg-gray-900 border-2 border-primary-600 dark:border-primary-500 hover:bg-primary-50 dark:hover:bg-gray-700 transition-colors"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
