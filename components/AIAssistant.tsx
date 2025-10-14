'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ChatBubbleLeftRightIcon,
  XMarkIcon,
  PaperAirplaneIcon,
  SparklesIcon,
  UserIcon
} from '@heroicons/react/24/outline'

interface Message {
  id: string
  content: string
  isUser: boolean
  timestamp: Date
}

const predefinedResponses = {
  greeting: [
    "Hello! I'm Rolando's AI assistant. I can help you learn about his experience, skills, and projects. What would you like to know?",
    "Hi there! Welcome to Rolando's portfolio. I'm here to answer any questions about his background and work. How can I assist you?",
    "Greetings! I'm an AI assistant created to help visitors navigate Rolando's portfolio. Feel free to ask me anything about his skills or projects!"
  ],
  experience: [
    "Rolando has 3+ years of experience as a full-stack developer, specializing in React, Next.js, Node.js, and modern web technologies. He's worked on various projects ranging from e-commerce platforms to real-time applications.",
    "Rolando is experienced in both frontend and backend development, with expertise in React ecosystem, TypeScript, and cloud technologies. He's passionate about creating scalable and user-friendly applications."
  ],
  skills: [
    "Rolando's main skills include React, Next.js, TypeScript, Node.js, PostgreSQL, MongoDB, AWS, and modern CSS frameworks like Tailwind. He's also experienced in mobile development with React Native.",
    "His technical stack covers the full spectrum: Frontend (React, Next.js, TypeScript), Backend (Node.js, Express, Python), Databases (PostgreSQL, MongoDB), and Cloud (AWS, Vercel). Plus design skills with Figma and UI/UX principles."
  ],
  projects: [
    "Some of Rolando's notable projects include an e-commerce platform, task management app, weather dashboard, blog CMS, and real-time chat application. Each showcases different aspects of his full-stack capabilities.",
    "He's built various applications including collaborative tools, data visualization dashboards, and mobile apps. You can check out his projects section to see live demos and source code on GitHub."
  ],
  contact: [
    "You can reach Rolando through the contact form on this website, or connect with him on LinkedIn, GitHub, or Twitter. He's always interested in discussing new opportunities and projects!",
    "The best way to get in touch is through the contact section below. Rolando is open to freelance work, full-time opportunities, and collaboration on interesting projects."
  ],
  default: [
    "That's an interesting question! While I can tell you about Rolando's experience, skills, and projects, I'd recommend reaching out to him directly for more specific inquiries.",
    "I'm focused on helping with questions about Rolando's portfolio and background. For other topics, feel free to contact him directly using the form below!",
    "I can help you learn about Rolando's work experience, technical skills, projects, or how to get in touch with him. What specific area interests you?"
  ]
}

const quickQuestions = [
  "What's Rolando's experience?",
  "What technologies does he use?", 
  "Tell me about his projects",
  "How can I contact him?"
]

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputMessage, setInputMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const generateResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase()
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey') || message === '') {
      return predefinedResponses.greeting[Math.floor(Math.random() * predefinedResponses.greeting.length)]
    }
    
    if (message.includes('experience') || message.includes('work') || message.includes('background')) {
      return predefinedResponses.experience[Math.floor(Math.random() * predefinedResponses.experience.length)]
    }
    
    if (message.includes('skill') || message.includes('technology') || message.includes('tech') || message.includes('programming')) {
      return predefinedResponses.skills[Math.floor(Math.random() * predefinedResponses.skills.length)]
    }
    
    if (message.includes('project') || message.includes('work') || message.includes('portfolio')) {
      return predefinedResponses.projects[Math.floor(Math.random() * predefinedResponses.projects.length)]
    }
    
    if (message.includes('contact') || message.includes('reach') || message.includes('email') || message.includes('hire')) {
      return predefinedResponses.contact[Math.floor(Math.random() * predefinedResponses.contact.length)]
    }
    
    return predefinedResponses.default[Math.floor(Math.random() * predefinedResponses.default.length)]
  }

  const sendMessage = async (content: string) => {
    if (!content.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: content.trim(),
      isUser: true,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsTyping(true)

    // Simulate typing delay
    setTimeout(() => {
      const response = generateResponse(content)
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        isUser: false,
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, aiMessage])
      setIsTyping(false)
    }, 1000 + Math.random() * 1000) // Random delay between 1-2 seconds
  }

  const handleQuickQuestion = (question: string) => {
    sendMessage(question)
  }

  const initializeChat = () => {
    if (messages.length === 0) {
      const welcomeMessage: Message = {
        id: '0',
        content: "Hi! I'm Rolando's AI assistant. I can help you learn about his experience, skills, and projects. What would you like to know?",
        isUser: false,
        timestamp: new Date()
      }
      setMessages([welcomeMessage])
    }
    setIsOpen(true)
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={initializeChat}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary-600 text-white rounded-full shadow-lg hover:bg-primary-700 transition-colors flex items-center justify-center"
      >
        <ChatBubbleLeftRightIcon className="w-6 h-6" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-6 z-50 w-80 h-96 bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-600 to-blue-600 p-4 text-white flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <SparklesIcon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold">AI Assistant</h3>
                  <p className="text-xs text-primary-100">Ask me about Rolando</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <XMarkIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.isUser
                        ? 'bg-primary-600 text-white rounded-br-md'
                        : 'bg-gray-100 text-gray-900 rounded-bl-md'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.content}</p>
                  </div>
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-gray-100 p-3 rounded-2xl rounded-bl-md">
                    <div className="flex space-x-1">
                      {[1, 2, 3].map((dot) => (
                        <motion.div
                          key={dot}
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 1, 0.5]
                          }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            delay: dot * 0.2
                          }}
                          className="w-2 h-2 bg-gray-400 rounded-full"
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Quick Questions */}
              {messages.length <= 1 && !isTyping && (
                <div className="space-y-2">
                  <p className="text-xs text-gray-500 text-center">Quick questions:</p>
                  <div className="grid grid-cols-1 gap-2">
                    {quickQuestions.map((question, index) => (
                      <motion.button
                        key={question}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => handleQuickQuestion(question)}
                        className="text-xs bg-gray-50 hover:bg-gray-100 text-gray-700 p-2 rounded-lg border text-left transition-colors"
                      >
                        {question}
                      </motion.button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage(inputMessage)}
                  placeholder="Ask me anything..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm"
                />
                <motion.button
                  onClick={() => sendMessage(inputMessage)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={!inputMessage.trim() || isTyping}
                  className="px-3 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <PaperAirplaneIcon className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}