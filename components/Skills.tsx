'use client'

import { motion } from 'framer-motion'
import { 
  CodeBracketIcon, 
  DevicePhoneMobileIcon, 
  CloudIcon, 
  CpuChipIcon,
  PaintBrushIcon,
  UserGroupIcon 
} from '@heroicons/react/24/outline'

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: CodeBracketIcon,
    color: 'blue',
    skills: [
      { name: 'React', level: 95, icon: '⚛️' },
      { name: 'Next.js', level: 90, icon: '🔺' },
      { name: 'TypeScript', level: 88, icon: '📘' },
      { name: 'Tailwind CSS', level: 92, icon: '🎨' },
      { name: 'JavaScript', level: 95, icon: '💛' },
      { name: 'HTML/CSS', level: 98, icon: '🌐' },
    ]
  },
  {
    title: 'Backend Development',
    icon: CpuChipIcon,
    color: 'green',
    skills: [
      { name: 'Node.js', level: 85, icon: '🟢' },
      { name: 'Express.js', level: 88, icon: '⚡' },
      { name: 'Python', level: 75, icon: '🐍' },
      { name: 'PostgreSQL', level: 80, icon: '🐘' },
      { name: 'MongoDB', level: 82, icon: '🍃' },
      { name: 'REST APIs', level: 90, icon: '🔌' },
    ]
  },
  {
    title: 'Mobile Development',
    icon: DevicePhoneMobileIcon,
    color: 'purple',
    skills: [
      { name: 'React Native', level: 78, icon: '📱' },
      { name: 'Expo', level: 80, icon: '🚀' },
      { name: 'iOS Development', level: 65, icon: '🍎' },
      { name: 'Android Development', level: 70, icon: '🤖' },
    ]
  },
  {
    title: 'Cloud & DevOps',
    icon: CloudIcon,
    color: 'indigo',
    skills: [
      { name: 'AWS', level: 75, icon: '☁️' },
      { name: 'Vercel', level: 92, icon: '▲' },
      { name: 'Docker', level: 70, icon: '🐳' },
      { name: 'Git/GitHub', level: 95, icon: '📚' },
      { name: 'CI/CD', level: 72, icon: '🔄' },
    ]
  },
  {
    title: 'Design & UI/UX',
    icon: PaintBrushIcon,
    color: 'pink',
    skills: [
      { name: 'Figma', level: 85, icon: '🎭' },
      { name: 'Adobe XD', level: 78, icon: '🎨' },
      { name: 'Photoshop', level: 75, icon: '🖼️' },
      { name: 'UI Design', level: 88, icon: '✨' },
      { name: 'UX Research', level: 80, icon: '🔍' },
    ]
  },
  {
    title: 'Soft Skills',
    icon: UserGroupIcon,
    color: 'orange',
    skills: [
      { name: 'Team Leadership', level: 85, icon: '👥' },
      { name: 'Communication', level: 90, icon: '💬' },
      { name: 'Problem Solving', level: 92, icon: '🧩' },
      { name: 'Project Management', level: 83, icon: '📋' },
      { name: 'Mentoring', level: 80, icon: '🎓' },
    ]
  },
]

const getColorClasses = (color: string) => {
  const colorMap = {
    blue: 'from-blue-500 to-blue-600 text-blue-600 bg-blue-50',
    green: 'from-green-500 to-green-600 text-green-600 bg-green-50',
    purple: 'from-purple-500 to-purple-600 text-purple-600 bg-purple-50',
    indigo: 'from-indigo-500 to-indigo-600 text-indigo-600 bg-indigo-50',
    pink: 'from-pink-500 to-pink-600 text-pink-600 bg-pink-50',
    orange: 'from-orange-500 to-orange-600 text-orange-600 bg-orange-50',
  }
  return colorMap[color as keyof typeof colorMap] || colorMap.blue
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
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
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here's a comprehensive overview of my technical skills and expertise areas, 
            continuously growing through hands-on projects and learning.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon
            const colorClasses = getColorClasses(category.color)
            
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-xl ${colorClasses.split(' ').slice(2).join(' ')} mr-4`}>
                    <Icon className={`w-6 h-6 ${colorClasses.split(' ')[2]}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.6, 
                        delay: (categoryIndex * 0.1) + (skillIndex * 0.05) 
                      }}
                      className="group"
                    >
                      {/* Skill Header */}
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <span className="text-lg mr-2">{skill.icon}</span>
                          <span className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-sm font-medium text-gray-500">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 1, 
                            delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.3,
                            ease: "easeOut"
                          }}
                          className={`h-full bg-gradient-to-r ${colorClasses.split(' ').slice(0, 2).join(' ')} rounded-full relative`}
                        >
                          <div className="absolute inset-0 bg-white opacity-20 rounded-full"></div>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl p-8 text-center text-white"
        >
          <h3 className="text-2xl font-bold mb-4">
            Always Learning & Growing
          </h3>
          <p className="text-primary-100 mb-6 max-w-3xl mx-auto">
            Technology evolves rapidly, and so do I. I'm constantly learning new tools, 
            frameworks, and methodologies to stay at the forefront of web development. 
            Currently exploring: GraphQL, Machine Learning, and Web3 technologies.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
              🧠 Currently Learning: GraphQL
            </span>
            <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
              🤖 Exploring: AI/ML Integration
            </span>
            <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
              🔗 Interested: Web3 Development
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}