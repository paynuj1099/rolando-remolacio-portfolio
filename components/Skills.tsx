'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { 
  Code2,
  Database,
  Server,
  Layers,
  Cloud,
  GitBranch,
  Rocket,
  Zap,
  Target
} from 'lucide-react'

const skillCategories = [
  {
    title: 'Backend Development',
    icon: Server,
    color: 'blue',
    skills: [
      { name: '.NET / .NET Core', level: 85, years: '2.5 yrs' },
      { name: 'C#', level: 80, years: '2.5 yrs' },
      { name: 'VB.Net', level: 70, years: '2.5 yrs' },
      { name: 'Node.js', level: 70, years: '1 yr' },
      { name: 'PHP', level: 60, years: '1 yr' },
      { name: 'REST API', level: 85, years: '2.5 yrs' },
    ]
  },
  {
    title: 'Frontend Development',
    icon: Code2,
    color: 'purple',
    skills: [
      { name: 'JavaScript', level: 80, years: '2.5 yrs' },
      { name: 'TypeScript', level: 75, years: '1 yr' },
      { name: 'React', level: 75, years: '1 yr' },
      { name: 'Next.js', level: 70, years: '< 1 yr' },
      { name: 'Blazor', level: 75, years: '1 yr' },
    //   { name: 'jQuery', level: 85, years: '3 yrs' },
      { name: 'Tailwind CSS', level: 70, years: '1 yr' },
    //   { name: 'Bootstrap', level: 90, years: '3 yrs' },
    ]
  },
  {
    title: 'Database Management',
    icon: Database,
    color: 'green',
    skills: [
      { name: 'MS SQL Server', level: 90, years: '2.5 yrs' },
      { name: 'MySQL', level: 70, years: '1 yr' },
      { name: 'Database Design', level: 85, years: '2.5 yrs' },
    ]
  },
  {
    title: 'DevOps & Cloud',
    icon: Cloud,
    color: 'orange',
    skills: [
      { name: 'Azure DevOps', level: 85, years: '1 yr' },
      { name: 'CI/CD', level: 80, years: '1 yr' },
    ]
  },
  {
    title: 'Architecture & Design',
    icon: Layers,
    color: 'pink',
    skills: [
      { name: 'MVC Pattern', level: 85, years: '2.5 yrs' },
      { name: 'Microservices', level: 70, years: '< 1 yr' },
      { name: 'API Design', level: 85, years: '2.5 yrs' },
      { name: 'System Design', level: 80, years: '2.5 yrs' },
    ]
  },
  {
    title: 'Version Control',
    icon: GitBranch,
    color: 'indigo',
    skills: [
      { name: 'Git', level: 85, years: '2 yrs' },
      { name: 'GitHub', level: 85, years: '2 yrs' },
      { name: 'Azure Repos', level: 85, years: '1 yr' },
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
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
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
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Comprehensive overview of my technical skills and expertise, built through hands-on experience 
            in full-stack development and problem-solving.
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
                className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                  {/* Category Header */}
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-xl ${colorClasses.split(' ').slice(2).join(' ')} dark:bg-opacity-20 mr-4`}>
                      <Icon className={`w-6 h-6 ${colorClasses.split(' ')[2]} dark:text-primary-400`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
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
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-gray-900 dark:text-gray-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                            {skill.name}
                          </span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            {skill.years}
                          </span>
                        </div>
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
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

        {/* Carousel Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-primary-600 to-blue-600 dark:from-primary-700 dark:to-blue-700 rounded-2xl p-8 text-center text-white shadow-xl overflow-hidden"
        >
          <h3 className="text-2xl font-bold mb-4">
            Passionate About Technology
          </h3>
          <p className="text-primary-50 dark:text-primary-100 mb-8 max-w-3xl mx-auto">
            With a solid foundation in software development and a problem-solving mindset, 
            I enjoy turning complex requirements into clean, efficient solutions.
          </p>
          
          {/* Auto-scrolling Carousel */}
          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-4"
              animate={{
                x: [0, -1400],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
            >
              {/* First set of items */}
              <CarouselItem icon={Database} text="Full Stack Development" />
              <CarouselItem icon={Code2} text="Clean Code Advocate" />
              <CarouselItem icon={Server} text="Scalable Solutions" />
              <CarouselItem icon={Rocket} text="Fast Delivery" />
              <CarouselItem icon={Zap} text="Performance Optimization" />
              <CarouselItem icon={Target} text="Problem Solver" />
              <CarouselItem icon={Layers} text="Modern Architecture" />
              <CarouselItem icon={Cloud} text="Cloud Native" />
              
              {/* Duplicate set for seamless loop */}
              <CarouselItem icon={Database} text="Full Stack Development" />
              <CarouselItem icon={Code2} text="Clean Code Advocate" />
              <CarouselItem icon={Server} text="Scalable Solutions" />
              <CarouselItem icon={Rocket} text="Fast Delivery" />
              <CarouselItem icon={Zap} text="Performance Optimization" />
              <CarouselItem icon={Target} text="Problem Solver" />
              <CarouselItem icon={Layers} text="Modern Architecture" />
              <CarouselItem icon={Cloud} text="Cloud Native" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Carousel Item Component
function CarouselItem({ icon: Icon, text }: { icon: any; text: string }) {
  return (
    <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium whitespace-nowrap hover:bg-white/30 transition-colors">
      <Icon className="w-5 h-5" />
      {text}
    </div>
  )
}