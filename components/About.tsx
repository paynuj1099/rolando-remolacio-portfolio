'use client'

import { motion } from 'framer-motion'
import { AcademicCapIcon, BriefcaseIcon, UserIcon } from '@heroicons/react/24/outline'

const timelineData = [
  {
    type: 'education',
    title: 'Computer Science Degree',
    organization: 'University Name',
    period: '2018 - 2022',
    description: 'Bachelor\'s degree in Computer Science with focus on software development and web technologies.',
    icon: AcademicCapIcon,
  },
  {
    type: 'experience',
    title: 'Full Stack Developer',
    organization: 'Tech Company Inc.',
    period: '2022 - Present',
    description: 'Developing modern web applications using React, Next.js, Node.js, and cloud technologies. Leading frontend architecture decisions.',
    icon: BriefcaseIcon,
  },
  {
    type: 'experience',
    title: 'Frontend Developer Intern',
    organization: 'Startup XYZ',
    period: '2021 - 2022',
    description: 'Built responsive web applications and improved user experience. Worked with React, TypeScript, and modern CSS frameworks.',
    icon: BriefcaseIcon,
  },
  {
    type: 'certification',
    title: 'AWS Certified Developer',
    organization: 'Amazon Web Services',
    period: '2023',
    description: 'Certified in building and deploying applications on AWS cloud platform.',
    icon: AcademicCapIcon,
  },
]

const stats = [
  { label: 'Years of Experience', value: '3+' },
  { label: 'Projects Completed', value: '50+' },
  { label: 'Technologies Mastered', value: '20+' },
  { label: 'Happy Clients', value: '25+' },
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
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
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a passionate full-stack developer with a love for creating innovative solutions 
            and bringing ideas to life through code.
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
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <UserIcon className="w-8 h-8 text-primary-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">My Story</h3>
              </div>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  My journey in software development started with a curiosity about how websites work. 
                  That curiosity quickly evolved into a passion for creating digital experiences that 
                  make a difference in people's lives.
                </p>
                <p>
                  I specialize in modern web technologies, with expertise in React, Next.js, Node.js, 
                  and cloud platforms. I love the challenge of turning complex problems into elegant, 
                  user-friendly solutions.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing to 
                  open-source projects, or sharing knowledge with the developer community.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 text-center shadow-lg"
                >
                  <div className="text-3xl font-bold text-primary-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">My Journey</h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-300"></div>
              
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
                      <div className="absolute left-0 top-2 w-12 h-12 bg-white border-4 border-primary-200 rounded-full flex items-center justify-center shadow-lg">
                        <Icon className="w-6 h-6 text-primary-600" />
                      </div>
                      
                      {/* Content */}
                      <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                          <h4 className="text-lg font-semibold text-gray-900">
                            {item.title}
                          </h4>
                          <span className="text-sm text-primary-600 font-medium">
                            {item.period}
                          </span>
                        </div>
                        <p className="text-primary-700 font-medium mb-2">
                          {item.organization}
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
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
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              I'm always excited to work on new projects and collaborate with talented people. 
              Whether you have a project in mind or just want to connect, I'd love to hear from you.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get In Touch
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}