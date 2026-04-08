import { Metadata } from 'next'
import Link from 'next/link'
import { Code, Database, Wrench, Layout, Server, TestTube, Palette, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Uses - My Development Setup & Tools',
  description: 'Explore the tools, software, and technologies I use daily for web development. From code editors to deployment platforms, discover the complete tech stack that powers my development workflow.',
  keywords: ['development tools', 'tech stack', 'developer setup', 'programming tools', 'web development tools', 'software developer tools'],
  openGraph: {
    title: 'Uses - My Development Setup & Tools',
    description: 'The complete tech stack and tools I use for professional web development',
    type: 'website',
  },
}

const categories = [
  {
    title: 'Development Environment',
    icon: Code,
    color: 'from-blue-500 to-blue-600',
    items: [
      {
        name: 'Visual Studio 2022',
        description: 'My primary IDE for .NET development, C#, and ASP.NET applications. Powerful debugging and built-in tools make it indispensable for backend work.',
        url: 'https://visualstudio.microsoft.com/',
      },
      {
        name: 'Visual Studio Code',
        description: 'Lightweight but powerful code editor for frontend development, TypeScript, React, and Next.js. Extensive extension ecosystem makes it incredibly versatile.',
        url: 'https://code.visualstudio.com/',
      },
      {
        name: 'Git',
        description: 'Version control system for tracking changes and collaborating with teams. Essential for any professional development workflow.',
        url: 'https://git-scm.com/',
      },
      {
        name: 'Windows Terminal',
        description: 'Modern terminal application for command-line tools, shells, and scripts. Clean interface with tabs and custom profiles.',
        url: 'https://github.com/microsoft/terminal',
      },
    ],
  },
  {
    title: 'Frontend Technologies',
    icon: Layout,
    color: 'from-purple-500 to-purple-600',
    items: [
      {
        name: 'React',
        description: 'JavaScript library for building user interfaces. Component-based architecture makes it perfect for building complex, interactive UIs.',
        url: 'https://react.dev/',
      },
      {
        name: 'Next.js',
        description: 'React framework for production with server-side rendering, static site generation, and excellent developer experience.',
        url: 'https://nextjs.org/',
      },
      {
        name: 'TypeScript',
        description: 'Typed superset of JavaScript that helps catch errors early and improves code quality with type safety.',
        url: 'https://www.typescriptlang.org/',
      },
      {
        name: 'Tailwind CSS',
        description: 'Utility-first CSS framework for rapidly building custom user interfaces. Makes styling consistent and maintainable.',
        url: 'https://tailwindcss.com/',
      },
      {
        name: 'Framer Motion',
        description: 'Production-ready motion library for React. Creates smooth, professional animations with minimal code.',
        url: 'https://www.framer.com/motion/',
      },
    ],
  },
  {
    title: 'Backend Technologies',
    icon: Server,
    color: 'from-green-500 to-green-600',
    items: [
      {
        name: '.NET Core',
        description: 'Cross-platform framework for building modern, cloud-based applications. My go-to for building robust backend systems.',
        url: 'https://dotnet.microsoft.com/',
      },
      {
        name: 'ASP.NET MVC',
        description: 'Framework for building web applications using Model-View-Controller pattern. Great for enterprise applications.',
        url: 'https://dotnet.microsoft.com/apps/aspnet/mvc',
      },
      {
        name: 'Node.js',
        description: 'JavaScript runtime for building server-side applications. Perfect for API development and microservices.',
        url: 'https://nodejs.org/',
      },
      {
        name: 'Express.js',
        description: 'Minimal and flexible Node.js web application framework. Makes building APIs fast and straightforward.',
        url: 'https://expressjs.com/',
      },
      {
        name: 'Blazor',
        description: 'Framework for building interactive web UIs using C# instead of JavaScript. Great for .NET developers.',
        url: 'https://dotnet.microsoft.com/apps/aspnet/web-apps/blazor',
      },
    ],
  },
  {
    title: 'Database & Storage',
    icon: Database,
    color: 'from-orange-500 to-orange-600',
    items: [
      {
        name: 'Microsoft SQL Server',
        description: 'Relational database management system. Robust, scalable, and integrates perfectly with .NET applications.',
        url: 'https://www.microsoft.com/sql-server',
      },
      {
        name: 'SQL Server Management Studio (SSMS)',
        description: 'Integrated environment for managing SQL Server infrastructure. Essential for database administration and development.',
        url: 'https://docs.microsoft.com/sql/ssms',
      },
      {
        name: 'PostgreSQL',
        description: 'Advanced open-source relational database. Great alternative to SQL Server with excellent performance.',
        url: 'https://www.postgresql.org/',
      },
      {
        name: 'MongoDB',
        description: 'NoSQL database for flexible, document-based data storage. Perfect for projects requiring schema flexibility.',
        url: 'https://www.mongodb.com/',
      },
    ],
  },
  {
    title: 'DevOps & Deployment',
    icon: Globe,
    color: 'from-pink-500 to-pink-600',
    items: [
      {
        name: 'Azure DevOps',
        description: 'Complete DevOps solution for planning, developing, and deploying applications. Great for CI/CD pipelines.',
        url: 'https://azure.microsoft.com/services/devops/',
      },
      {
        name: 'Vercel',
        description: 'Platform for deploying Next.js applications. Incredible performance and developer experience.',
        url: 'https://vercel.com/',
      },
      {
        name: 'Microsoft Azure',
        description: 'Cloud computing platform for hosting applications, databases, and services at scale.',
        url: 'https://azure.microsoft.com/',
      },
      {
        name: 'Docker',
        description: 'Platform for containerizing applications. Ensures consistency across development and production environments.',
        url: 'https://www.docker.com/',
      },
    ],
  },
  {
    title: 'Testing & Quality Assurance',
    icon: TestTube,
    color: 'from-indigo-500 to-indigo-600',
    items: [
      {
        name: 'Postman',
        description: 'API development and testing tool. Makes it easy to test, document, and share APIs.',
        url: 'https://www.postman.com/',
      },
      {
        name: 'Chrome DevTools',
        description: 'Built-in browser developer tools for debugging and optimizing web applications.',
        url: 'https://developer.chrome.com/docs/devtools/',
      },
      {
        name: 'xUnit',
        description: 'Unit testing framework for .NET. Helps ensure code quality and catch bugs early.',
        url: 'https://xunit.net/',
      },
    ],
  },
  {
    title: 'Design & Productivity',
    icon: Palette,
    color: 'from-rose-500 to-rose-600',
    items: [
      {
        name: 'Figma',
        description: 'Collaborative design tool for creating UI/UX mockups and prototypes. Great for planning interfaces.',
        url: 'https://www.figma.com/',
      },
      {
        name: 'Notion',
        description: 'All-in-one workspace for notes, documentation, and project management. Keeps everything organized.',
        url: 'https://www.notion.so/',
      },
      {
        name: 'Lucide Icons',
        description: 'Beautiful, consistent icon library for web applications. Clean design and easy to implement.',
        url: 'https://lucide.dev/',
      },
      {
        name: 'Claude AI (Sonnet 4.5)',
        description: 'AI assistant for learning best practices, debugging, and exploring new patterns in web development.',
        url: 'https://www.anthropic.com/claude',
      },
    ],
  },
  {
    title: 'Other Tools',
    icon: Wrench,
    color: 'from-teal-500 to-teal-600',
    items: [
      {
        name: 'GitHub',
        description: 'Version control hosting platform. Essential for code collaboration and open-source contributions.',
        url: 'https://github.com/',
      },
      {
        name: 'NPM / Yarn',
        description: 'Package managers for JavaScript dependencies. NPM comes with Node.js, Yarn offers faster installs.',
        url: 'https://www.npmjs.com/',
      },
      {
        name: 'ESLint',
        description: 'Linting tool for identifying and fixing code quality issues in JavaScript and TypeScript.',
        url: 'https://eslint.org/',
      },
      {
        name: 'Prettier',
        description: 'Code formatter that enforces consistent style across the codebase automatically.',
        url: 'https://prettier.io/',
      },
    ],
  },
]

export default function UsesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 transition-colors duration-300">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <Wrench className="w-16 h-16 text-primary-600 dark:text-primary-400 mx-auto mb-6" />
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Tools & Technologies I Use
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive look at the software, tools, and technologies that power my development workflow. 
            From code editors to deployment platforms, here's everything I use to build modern web applications.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            {categories.map((category, idx) => (
              <div key={idx} className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
                    >
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                        {item.url ? (
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-600 dark:text-primary-400 hover:underline"
                          >
                            {item.name} ↗
                          </a>
                        ) : (
                          item.name
                        )}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hardware Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Hardware Setup
          </h2>
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8">
            <div className="space-y-6 text-gray-700 dark:text-gray-300">
              <p className="flex items-start gap-3">
                <span className="text-2xl">💻</span>
                <span><strong>Laptop:</strong> Custom Windows machine optimized for development work with sufficient RAM and processing power for running multiple development environments simultaneously.</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-2xl">⌨️</span>
                <span><strong>Input:</strong> Mechanical keyboard for comfortable typing during long coding sessions, paired with a precision mouse for design work.</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-2xl">🎧</span>
                <span><strong>Audio:</strong> Quality headphones for focused work and clear communication during remote meetings.</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-2xl">📱</span>
                <span><strong>Testing:</strong> Multiple devices (desktop, laptop, tablet, smartphones) for testing responsive designs and cross-browser compatibility.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            My Tool Philosophy
          </h2>
          <div className="bg-gradient-to-br from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-2xl shadow-lg p-8 border border-primary-200 dark:border-primary-800">
            <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
              <p>
                I believe in using the right tool for the job. While I have my favorites, I'm always open to exploring 
                new technologies and tools that can improve my workflow or deliver better results for my clients.
              </p>
              <p>
                The tools listed here represent my current setup, but technology evolves rapidly. I'm constantly learning, 
                experimenting, and refining my toolkit to stay current with industry best practices and emerging technologies.
              </p>
              <p>
                More important than the specific tools is understanding the underlying principles of good software development: 
                clean code, proper architecture, testing, documentation, and a user-first mindset. Tools change, but these 
                principles remain constant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-600 to-blue-600 dark:from-primary-700 dark:to-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Want to Work Together?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's build something amazing with these tools and technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg text-primary-600 bg-white hover:bg-gray-100 transition-colors"
            >
              Get In Touch
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg text-white border-2 border-white hover:bg-white/10 transition-colors"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
