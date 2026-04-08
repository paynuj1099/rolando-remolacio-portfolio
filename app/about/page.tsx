import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { GraduationCap, Briefcase, Code2, Target, Heart, Lightbulb, Users, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Rolando Remolacio - Full Stack Developer',
  description: 'Learn about Rolando Remolacio, a passionate Full Stack Developer with expertise in .NET, React, TypeScript, and modern web technologies. Discover my journey, skills, and approach to software development.',
  keywords: ['Rolando Remolacio bio', 'Full Stack Developer Philippines', 'software engineer background', 'web developer story', 'developer journey'],
  openGraph: {
    title: 'About Rolando Remolacio - Full Stack Developer',
    description: 'Learn about my journey as a Full Stack Developer and my passion for building elegant software solutions.',
    type: 'profile',
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 transition-colors duration-300">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A journey from curiosity to craftsmanship in software development
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Profile Column */}
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 sticky top-8">
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-br from-primary-200 to-primary-400 dark:from-primary-800 dark:to-primary-600 flex items-center justify-center">
                  <div className="text-5xl font-bold text-white">RR</div>
                  <Image
                    src="/images/profile.png"
                    alt="Rolando Remolacio"
                    fill
                    className="object-cover pointer-events-none select-none"
                  />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-2">
                  Rolando Remolacio
                </h2>
                <p className="text-primary-600 dark:text-primary-400 text-center font-medium mb-6">
                  Full Stack Developer
                </p>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <Code2 className="w-4 h-4" />
                    <span>3+ years experience</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <GraduationCap className="w-4 h-4" />
                    <span>BS Computer Engineering</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <Briefcase className="w-4 h-4" />
                    <span>Currently at Practice AI</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* My Story */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                  <Heart className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                  My Story
                </h2>
                <div className="prose prose-lg dark:prose-invert max-w-none space-y-4 text-gray-700 dark:text-gray-300">
                  <p>
                    Hi! I'm Rolando, but most people call me Jun. I'm a Full Stack Developer based in San Pedro, Laguna, Philippines, 
                    with a passion for building software that makes a real difference in people's lives.
                  </p>
                  <p>
                    My journey into software development started during my Computer Engineering studies at Cavite State University - Carmona, 
                    where I graduated in 2023. What began as curiosity about how things work evolved into a deep love for creating 
                    elegant solutions to complex problems.
                  </p>
                  <p>
                    I've had the privilege of working across various industries, from semiconductor manufacturing at ROHM Electronics 
                    to enterprise software development at Vertere Global Solutions, and now contributing to AI-powered solutions at Practice AI. 
                    Each role has shaped my understanding of what it takes to build robust, scalable, and user-friendly applications.
                  </p>
                  <p>
                    What drives me isn't just writing code—it's the satisfaction of seeing an idea transform into a functional, 
                    polished product that solves real problems. I believe in writing clean, maintainable code that other developers 
                    can understand and build upon. Good software isn't just about making it work; it's about making it work elegantly.
                  </p>
                  <p>
                    When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                    or spending time with my adorable dog, Phoebe. I'm always eager to learn, collaborate, and take on new challenges 
                    that push me to grow as a developer.
                  </p>
                </div>
              </div>

              {/* Professional Philosophy */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                  <Lightbulb className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                  My Approach to Development
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                      <Target className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                      User-Centered Design
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Every line of code I write is with the end-user in mind. Great software should be intuitive, 
                      accessible, and solve real problems effectively.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                      <Code2 className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                      Clean Code Philosophy
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      I'm committed to writing clean, well-documented code that follows best practices and industry standards. 
                      Code should be a pleasure to read and maintain.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                      <Users className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                      Collaborative Mindset
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      The best solutions come from collaboration. I value teamwork, code reviews, and knowledge sharing 
                      to build better products together.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                      <Award className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                      Continuous Learning
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Technology evolves rapidly, and so do I. I'm constantly learning new frameworks, patterns, 
                      and best practices to stay at the forefront of web development.
                    </p>
                  </div>
                </div>
              </div>

              {/* Professional Experience Timeline */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                  <Briefcase className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                  Professional Journey
                </h2>
                <div className="space-y-8">
                  {/* Practice AI */}
                  <div className="relative pl-8 border-l-2 border-primary-600 dark:border-primary-400">
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary-600 dark:bg-primary-400"></div>
                    <div className="mb-1 flex items-center gap-2">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">Full Stack Developer</h3>
                      <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs rounded-full">
                        Current
                      </span>
                    </div>
                    <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">Practice AI · Remote</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">December 2025 – Present</p>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                      Contributing to cutting-edge AI-powered applications, working with microservices architecture, 
                      .NET backend systems, subscription management, and Blazor frontends. Focused on delivering 
                      scalable solutions for modern web applications in the AI space.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full">.NET</span>
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full">Blazor</span>
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full">Microservices</span>
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full">AI Integration</span>
                    </div>
                  </div>

                  {/* Vertere Global Solutions */}
                  <div className="relative pl-8 border-l-2 border-gray-300 dark:border-gray-600">
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-gray-400 dark:bg-gray-600"></div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Programmer Analyst</h3>
                    <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">Vertere Global Solutions, Inc. · Hybrid</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">April 2025 – December 2025 · 9 months</p>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                      Developed enterprise-level applications using the full Microsoft stack. Built and maintained 
                      complex web applications with .NET, C#, and React, utilizing Azure DevOps for CI/CD, and 
                      managing MS SQL databases. Collaborated with cross-functional teams to deliver high-quality solutions.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs rounded-full">.NET Core</span>
                      <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs rounded-full">React</span>
                      <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs rounded-full">Azure DevOps</span>
                      <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs rounded-full">MS SQL</span>
                    </div>
                  </div>

                  {/* ROHM Electronics */}
                  <div className="relative pl-8 border-l-2 border-gray-300 dark:border-gray-600">
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-gray-400 dark:bg-gray-600"></div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Assistant Engineer 1</h3>
                    <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">ROHM Electronics Philippines, Inc. · On-site</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">May 2023 – April 2025 · 2 years</p>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                      Started my professional journey developing internal web applications for manufacturing operations. 
                      Gained hands-on experience with various web technologies, database management, and agile development 
                      practices. Contributed to process improvements and system maintenance.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs rounded-full">JavaScript</span>
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs rounded-full">Database</span>
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs rounded-full">Manufacturing Systems</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                  <GraduationCap className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                  Education
                </h2>
                <div className="border-l-2 border-primary-600 dark:border-primary-400 pl-8 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary-600 dark:bg-primary-400"></div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Bachelor of Science in Computer Engineering
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                    Cavite State University - Carmona
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Graduated 2023</p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Built a solid foundation in computer architecture, programming fundamentals, database design, 
                    software engineering principles, and systems development. Developed strong problem-solving skills 
                    and analytical thinking that I apply daily in my professional work.
                  </p>
                </div>
              </div>

              {/* Why Work With Me */}
              <div className="bg-gradient-to-br from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-2xl shadow-lg p-8 border border-primary-200 dark:border-primary-800">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Why Work With Me?
                </h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p className="flex items-start gap-3">
                    <span className="text-2xl">💡</span>
                    <span><strong>Problem Solver:</strong> I don't just write code; I solve problems. I take time to understand 
                    the business requirements and provide solutions that align with your goals.</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-2xl">🎯</span>
                    <span><strong>Detail-Oriented:</strong> Quality matters. From pixel-perfect UIs to optimized backend logic, 
                    I pay attention to the details that make great software.</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-2xl">🚀</span>
                    <span><strong>Reliable & Professional:</strong> I take deadlines seriously and communicate proactively. 
                    You can count on me to deliver quality work on time.</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-2xl">🤝</span>
                    <span><strong>Easy to Work With:</strong> I value clear communication, constructive feedback, and 
                    collaborative problem-solving. Your success is my success.</span>
                  </p>
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Let's Build Something Great Together
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                  Whether you have a project in mind or just want to chat about technology, 
                  I'd love to hear from you. Let's create something amazing!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/#contact"
                    className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 transition-colors"
                  >
                    Get In Touch
                  </Link>
                  <Link
                    href="/blog"
                    className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg text-primary-600 dark:text-primary-400 bg-white dark:bg-gray-800 border-2 border-primary-600 dark:border-primary-500 hover:bg-primary-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    Read My Blog
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
