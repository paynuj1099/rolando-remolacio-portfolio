'use client'

import { useState } from 'react'
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
    "Hello! I'm Rolando's AI assistant. I can help you learn about his 3+ years of experience as a Full Stack Developer, technical skills in .NET, C#, JavaScript, React, and more. What would you like to know?",
    "Hi there! Welcome to Rolando's portfolio. He's currently a Programmer Analyst at Vertere Global Solutions with expertise in full-stack development. How can I assist you?",
    "Greetings! I'm here to help you learn about Rolando's journey from Computer Engineering graduate to experienced Full Stack Developer. Feel free to ask me anything!"
  ],
  experience: [
    "Rolando currently works as a Programmer Analyst at Vertere Global Solutions, Inc. (2025-Present). Previously, he was an Assistant Engineer at ROHM Electronics Philippines (May 2023 - April 2025). He graduated with a BS in Computer Engineering from Cavite State University - Carmona in 2023. He has 3+ years of hands-on full-stack development experience.",
    "With 3+ years of professional experience, Rolando specializes in .NET, .NET Core, C#, VB.Net for backend, and JavaScript, jQuery, React, Blazor for frontend. He has extensive experience with MS SQL Server, MySQL, REST APIs, Azure DevOps, and modern web technologies."
  ],
  skills: [
    "Rolando's backend skills include: .NET/Core (3 yrs), C# (3 yrs), VB.Net (3 yrs), Node.js (1 yr), PHP (1.5 yrs), REST APIs. Frontend: JavaScript (3 yrs), TypeScript (1.5 yrs), React (1.5 yrs), Next.js (1 yr), Blazor (1.5 yrs), jQuery (3 yrs). Databases: MS SQL (3 yrs), MySQL (1.5 yrs), PostgreSQL (1 yr). DevOps: Azure DevOps, Azure Cloud, CI/CD, Docker.",
    "His technical stack covers: Backend (.NET, C#, VB.Net, Node.js), Frontend (React, Next.js, TypeScript, Blazor, jQuery), Databases (MS SQL, MySQL, PostgreSQL), Cloud & DevOps (Azure, Docker, CI/CD), and modern styling (Tailwind CSS, Bootstrap 5, Framer Motion)."
  ],
  projects: [
    "Rolando has built enterprise-level projects including: ERP systems with .NET Core and React, Inventory Management with Blazor and SignalR, Customer Portals with JWT authentication, Business Intelligence Dashboards with Chart.js, Document Management Systems with Azure Blob storage, and API Integration Platforms with microservices architecture.",
    "His portfolio includes real-time inventory tracking systems, automated reporting dashboards, customer-facing portals, secure document management with version control, and microservices-based API integration platforms - all built with modern tech stacks."
  ],
  contact: [
    "You can reach Rolando at rolandojrremolacio@gmail.com or call +639625871454. He's based in San Pedro, Laguna, Philippines. Connect with him on GitHub (paynuj1099), LinkedIn, or Facebook. He's open to new opportunities and collaborations!",
    "The best way to contact Rolando is through the contact form below, email (rolandojrremolacio@gmail.com), or LinkedIn. He's currently available for freelance projects and full-time opportunities."
  ],
  default: [
    "That's an interesting question! While I can provide information about Rolando's 3+ years of experience in full-stack development, his technical skills (.NET, C#, React, etc.), and his enterprise projects, for more specific inquiries, please contact him directly.",
    "I specialize in answering questions about Rolando's professional background, technical expertise, and project portfolio. For other topics, feel free to reach out to him using the contact information provided!",
    "I can help you learn about Rolando's work experience at Vertere Global Solutions and ROHM Electronics, his technical skills in .NET/React/Azure, or his enterprise-level projects. What would you like to know?"
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
        onClick={initializeChat}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary-600 dark:bg-primary-500 text-white rounded-full shadow-lg hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors flex items-center justify-center"
        aria-label="Open AI Assistant"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-6 z-50 w-80 h-96 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col overflow-hidden transition-colors duration-300"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-600 to-blue-600 dark:from-primary-700 dark:to-blue-700 p-4 text-white flex items-center justify-between">
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
            <div className="p-4 border-t border-gray-200">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage(inputMessage)}
                  placeholder="Ask me anything..."
                  className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm"
                />
                <motion.button
                  onClick={() => sendMessage(inputMessage)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={!inputMessage.trim() || isTyping}
                  className="px-3 py-2 bg-primary-600 dark:bg-primary-500 text-white rounded-lg hover:bg-primary-700 dark:hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}