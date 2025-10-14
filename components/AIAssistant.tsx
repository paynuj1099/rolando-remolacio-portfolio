'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  MessageCircle,
  X,
  Send,
  Sparkles,
  User
} from 'lucide-react'

interface Message {
  id: string
  content: string
  isUser: boolean
  timestamp: Date
}

const predefinedResponses = {
  greeting: [
    "Hi! I'm Rolando's AI assistant. I can help you learn about his experience, skills, and projects. What would you like to know?",
    "Hello! Welcome to Rolando's portfolio. He's a Full Stack Developer with 3+ years of experience. How can I help you?",
    "Hey there! I'm here to answer questions about Rolando's background and work. Ask me anything!"
  ],
  experience: [
    "Rolando is currently a Programmer Analyst at Vertere Global Solutions (2025-Present). Previously, he worked at ROHM Electronics Philippines (2023-2025). He graduated with a BS in Computer Engineering from Cavite State University in 2023.",
    "He has 3+ years of full-stack development experience, specializing in .NET, C#, JavaScript, and React. He's worked on enterprise applications, inventory systems, and customer portals."
  ],
  skills: [
    "Backend: .NET/Core, C#, VB.Net, Node.js, PHP | Frontend: React, Next.js, TypeScript, Blazor, jQuery | Databases: MS SQL, MySQL, PostgreSQL | DevOps: Azure, Docker, CI/CD",
    "His main skills include .NET (3 yrs), C# (3 yrs), JavaScript (3 yrs), React (1.5 yrs), MS SQL (3 yrs), and Azure DevOps. He also works with TypeScript, Next.js, and Tailwind CSS."
  ],
  projects: [
    "Rolando has built ERP systems, inventory management tools, customer portals, business dashboards, document management systems, and API integration platforms using modern tech stacks.",
    "His projects include real-time inventory tracking, automated reporting dashboards, secure document management, and microservices-based platforms."
  ],
  contact: [
    "You can reach Rolando at rolandojrremolacio@gmail.com or call +639625871454. He's based in San Pedro, Laguna, Philippines.",
    "Contact him via email (rolandojrremolacio@gmail.com), the contact form below, or connect on LinkedIn and GitHub. He's open to new opportunities!"
  ],
  default: [
    "I can answer questions about Rolando's experience, skills, and projects. What would you like to know?",
    "I'm here to help you learn about Rolando's work and expertise. Feel free to ask about his background or projects!",
    "That's a great question! For specific details, please use the contact form below or reach out directly."
  ]
}

const quickQuestions = [
  "What's your experience?",
  "What technologies do you use?", 
  "Tell me about your projects",
  "How can I contact you?"
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
        onClick={() => {
          if (!isOpen) {
            initializeChat()
          } else {
            setIsOpen(false)
          }
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary-600 dark:bg-primary-500 text-white rounded-full shadow-lg hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors flex items-center justify-center"
        aria-label="Toggle AI Assistant"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-96 h-[500px] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col overflow-hidden transition-colors duration-300"
          >
            {/* Header */}
            <div 
              className="bg-gradient-to-r from-primary-600 to-blue-600 dark:from-primary-700 dark:to-blue-700 p-4 text-white flex items-center justify-between"
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold">AI Assistant</h3>
                  <p className="text-xs text-primary-100">Ask me about Rolando</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
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
                        ? 'bg-primary-600 dark:bg-primary-500 text-white rounded-br-md'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-bl-md'
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
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-2xl rounded-bl-md">
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
                          className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full"
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Quick Questions */}
              {messages.length <= 1 && !isTyping && (
                <div className="space-y-2">
                  <p className="text-xs text-gray-500 dark:text-gray-400 text-center">Quick questions:</p>
                  <div className="grid grid-cols-1 gap-2">
                    {quickQuestions.map((question, index) => (
                      <motion.button
                        key={question}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => handleQuickQuestion(question)}
                        className="text-xs bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 p-2 rounded-lg border border-gray-200 dark:border-gray-600 text-left transition-colors"
                      >
                        {question}
                      </motion.button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 bg-gray-50 dark:bg-gray-900">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage(inputMessage)}
                  placeholder="Ask me anything..."
                  className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm"
                />
                <button
                  onClick={() => sendMessage(inputMessage)}
                  disabled={!inputMessage.trim() || isTyping}
                  className="px-3 py-2 bg-primary-600 dark:bg-primary-500 text-white rounded-lg hover:bg-primary-700 dark:hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}