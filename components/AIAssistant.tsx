'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  MessageCircle,
  X,
  Send,
  Sparkles,
  User,
  Copy,
  Check,
  ArrowDown,
  ThumbsUp,
  ThumbsDown,
  RotateCcw
} from 'lucide-react'

interface Message {
  id: string
  content: string
  isUser: boolean
  timestamp: Date
}

const predefinedResponses = {
  greeting: [
    "Hi! I'm Neo, Boss Jun's AI assistant. You can ask me anything. Yes, Anything!",
    "Hello! Welcome to my boss' portfolio. He's a Full Stack Developer with 3+ years of experience. How can I help you?",
    "Hey there! I'm here to answer questions about my boss' background and work. Ask me anything!"
  ],
  experience: [
    "My boss is currently a Programmer Analyst at Vertere Global Solutions (2025-Present). Previously, he worked at ROHM Electronics Philippines (2023-2025). He graduated with a BS in Computer Engineering from Cavite State University in 2023.",
    "He has 3+ years of full-stack development experience, specializing in .NET, C#, JavaScript, and React. He's worked on enterprise applications, inventory systems, and customer portals."
  ],
  skills: [
    "Backend: .NET/Core, C#, VB.Net, Node.js, PHP | Frontend: React, Next.js, TypeScript, Blazor, jQuery | Databases: MS SQL, MySQL, PostgreSQL | DevOps: Azure, Docker, CI/CD",
    "His main skills include .NET, C#, JavaScript, React, MS SQL, and Azure DevOps. He also works with TypeScript, Next.js, and Tailwind CSS."
  ],
  projects: [
    "Boss has built inventory management tools, customer portals, business dashboards, document management systems, and API integration platforms using modern tech stacks.",
    "His projects include real-time inventory tracking, automated reporting dashboards, secure document management, and microservices-based platforms."
  ],
  contact: [
    "You can reach Boss Jun at rolandojrremolacio@gmail.com or call +639625871454. He's based in San Pedro, Laguna, Philippines.",
    "Contact him via email (rolandojrremolacio@gmail.com), the contact form below, or connect on LinkedIn and GitHub. He's open to new opportunities!"
  ],
  resume: [
    "Sure! You can download Boss Jun's resume here:\n\n[DOWNLOAD_RESUME]",
    "Of course! Here's the link to download his CV:\n\n[DOWNLOAD_RESUME]",
    "Absolutely! Click below to download his resume:\n\n[DOWNLOAD_RESUME]"
  ],
  cv: [
    "Sure! You can download Boss Jun's CV here:\n\n[DOWNLOAD_RESUME]",
    "Here you go! Download his CV below:\n\n[DOWNLOAD_RESUME]"
  ],
  download: [
    "You can download Boss Jun's resume here:\n\n[DOWNLOAD_RESUME]",
    "Here's the download link for his resume:\n\n[DOWNLOAD_RESUME]"
  ],
  default: [
    "I can answer questions about Boss Jun's experience, skills, and projects. What would you like to know?",
    "I'm here to help you learn about Boss Jun's work and expertise. Feel free to ask about his background or projects!",
    "That's a great question! For specific details, please use the contact form below or reach out directly."
  ]
}

const quickQuestions = [
  "What's your boss' experience?",
  "Tell me about your boss' projects",
  "How can I contact your boss?",
  "Send me your boss' resume"
]

interface ChatHistory {
  id: string
  title: string
  messages: Message[]
  timestamp: Date
}

const CodeBlock = ({ code }: { code: string }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative my-2 group">
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 p-1.5 bg-gray-700 hover:bg-gray-600 rounded text-white opacity-0 group-hover:opacity-100 transition-opacity"
        title="Copy code"
      >
        {copied ? (
          <Check className="w-4 h-4" />
        ) : (
          <Copy className="w-4 h-4" />
        )}
      </button>
      <pre className="bg-gray-800 dark:bg-gray-900 text-gray-100 p-3 pr-12 rounded-lg overflow-x-auto text-xs">
        <code>{code}</code>
      </pre>
    </div>
  )
}

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputMessage, setInputMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [showScrollButton, setShowScrollButton] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const [showHistory, setShowHistory] = useState(false)
  const [chatHistory, setChatHistory] = useState<ChatHistory[]>([])
  const [currentChatId, setCurrentChatId] = useState<string>('')
  const [copiedMessageId, setCopiedMessageId] = useState<string | null>(null)
  const [likedMessages, setLikedMessages] = useState<Set<string>>(new Set())
  const [unlikedMessages, setUnlikedMessages] = useState<Set<string>>(new Set())
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const messagesContainerRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleScroll = () => {
    if (messagesContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = messagesContainerRef.current
      const isNearBottom = scrollHeight - scrollTop - clientHeight < 100
      setShowScrollButton(!isNearBottom)
    }
  }

  useEffect(() => {
    // Only auto-scroll if user was already near bottom or for user messages
    if (messagesContainerRef.current && messages.length > 0) {
      const { scrollTop, scrollHeight, clientHeight } = messagesContainerRef.current
      const isNearBottom = scrollHeight - scrollTop - clientHeight < 150
      const lastMessage = messages[messages.length - 1]
      
      // Auto-scroll for user messages or if already near bottom
      if (lastMessage.isUser || isNearBottom) {
        scrollToBottom()
      }
    }
  }, [messages])

  const formatTime = (date: Date): string => {
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffMins = Math.floor(diffMs / 60000)
    const diffHours = Math.floor(diffMs / 3600000)
    
    if (diffMins < 1) return 'Just now'
    if (diffMins < 60) return `${diffMins}m ago`
    if (diffHours < 24) return `${diffHours}h ago`
    
    return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })
  }

  useEffect(() => {
    // Load chat history from localStorage
    const savedHistory = localStorage.getItem('chatHistory')
    if (savedHistory) {
      const parsed = JSON.parse(savedHistory)
      setChatHistory(parsed.map((chat: any) => ({
        ...chat,
        timestamp: new Date(chat.timestamp),
        messages: chat.messages.map((msg: any) => ({
          ...msg,
          timestamp: new Date(msg.timestamp)
        }))
      })))
    }
  }, [])

  useEffect(() => {
    // Close menu when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  const renderMessageContent = (content: string) => {
    const parts: JSX.Element[] = []
    let lastIndex = 0
    
    // Find all code blocks
    const codeBlockRegex = /```(\w+)?\n([\s\S]+?)```/g
    let match
    
    while ((match = codeBlockRegex.exec(content)) !== null) {
      // Add text before code block
      if (match.index > lastIndex) {
        const textBefore = content.substring(lastIndex, match.index)
        parts.push(
          <span key={`text-${lastIndex}`} dangerouslySetInnerHTML={{ __html: formatTextContent(textBefore) }} />
        )
      }
      
      // Add code block
      parts.push(
        <CodeBlock key={`code-${match.index}`} code={match[2].trim()} />
      )
      
      lastIndex = match.index + match[0].length
    }
    
    // Add remaining text
    if (lastIndex < content.length) {
      const textAfter = content.substring(lastIndex)
      parts.push(
        <span key={`text-${lastIndex}`} dangerouslySetInnerHTML={{ __html: formatTextContent(textAfter) }} />
      )
    }
    
    return <>{parts}</>
  }

  const formatTextContent = (content: string) => {
    // Convert markdown-style formatting to HTML
    let formatted = content
    
    // Inline code: `code`
    formatted = formatted.replace(/`([^`]+)`/g, '<code class="bg-gray-200 dark:bg-gray-600 px-1.5 py-0.5 rounded text-xs font-mono">$1</code>')
    
    // Social media links with icons
    const socialIcons = {
      facebook: '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',
      instagram: '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>',
      x: '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
      email: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>',
      phone: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>'
    }
    
    // Download button for resume/CV (special marker: [DOWNLOAD_RESUME])
    formatted = formatted.replace(/\[DOWNLOAD_RESUME\]/gi, () => {
      return `<br/><br/><a href="/resume.pdf" download="Rolando_Remolacio_Resume.pdf" style="display: inline-flex; flex-direction: column; align-items: center; justify-content: center; gap: 0.375rem; padding: 0.625rem 1rem; margin: 0.5rem 0; background-color: #f3f4f6; color: #374151; border-radius: 0.5rem; transition: background-color 0.2s;" onmouseover="this.style.backgroundColor='#e5e7eb'" onmouseout="this.style.backgroundColor='#f3f4f6'">
        <svg style="width: 1.5rem; height: 1.5rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
        <span style="font-size: 0.75rem; font-weight: 500;">Click to Download</span>
      </a><br/><br/>`
    })

    // Convert markdown links to clickable social icons with proper spacing
    formatted = formatted.replace(/\[Facebook\]\(([^)]+)\)/gi, (match, url) => {
      return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 mr-3 mb-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors" title="Facebook">${socialIcons.facebook}<span class="text-sm">Facebook</span></a>`
    })
    formatted = formatted.replace(/\[Instagram\]\(([^)]+)\)/gi, (match, url) => {
      return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 mr-3 mb-2 text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300 transition-colors" title="Instagram">${socialIcons.instagram}<span class="text-sm">Instagram</span></a>`
    })
    formatted = formatted.replace(/\[X\]\(([^)]+)\)/gi, (match, url) => {
      return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 mr-3 mb-2 text-gray-900 dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300 transition-colors" title="X">${socialIcons.x}<span class="text-sm">X</span></a>`
    })
    
    // Bold text: **text** or __text__
    formatted = formatted
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/__(.+?)__/g, '<strong>$1</strong>')
      // Headers: ### Header
      .replace(/^### (.+)$/gm, '<h3 class="font-semibold text-base mt-3 mb-2">$1</h3>')
      .replace(/^## (.+)$/gm, '<h2 class="font-semibold text-lg mt-3 mb-2">$1</h2>')
      // Bullet points: - item
      .replace(/^- (.+)$/gm, '<li class="ml-4">$1</li>')
      // Line breaks
      .replace(/\n\n/g, '<br/><br/>')
      .replace(/\n/g, '<br/>')
    
    // Wrap consecutive <li> tags in <ul>
    formatted = formatted.replace(/(<li.*?<\/li>[\s\S]*?)(?=<(?!li))/g, '<ul class="list-disc space-y-1 my-2">$1</ul>')
    
    return formatted
  }

  const generateResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase()
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey') || message === '') {
      return predefinedResponses.greeting[Math.floor(Math.random() * predefinedResponses.greeting.length)]
    }
    
    if (message.includes('resume') || message.includes('send me') && message.includes('resume')) {
      return predefinedResponses.resume[Math.floor(Math.random() * predefinedResponses.resume.length)]
    }
    
    if (message.includes('cv') || message.includes('curriculum vitae')) {
      return predefinedResponses.cv[Math.floor(Math.random() * predefinedResponses.cv.length)]
    }
    
    if (message.includes('download')) {
      return predefinedResponses.download[Math.floor(Math.random() * predefinedResponses.download.length)]
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

    const updatedMessages = [...messages, userMessage]
    setMessages(updatedMessages)
    setInputMessage('')
    setIsTyping(true)

    try {
      // Convert conversation history to Chatbase format
      const conversationHistory = updatedMessages.map(msg => ({
        content: msg.content,
        role: msg.isUser ? 'user' : 'assistant'
      }))

      // Send full conversation context to Chatbase API
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: conversationHistory,
          conversationId: currentChatId, // Include conversation ID for tracking
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to get response')
      }

      const data = await response.json()
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: data.text || generateResponse(content), // Fallback to predefined responses
        isUser: false,
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, aiMessage])
    } catch (error) {
      console.error('Error sending message:', error)
      // Fallback to predefined responses
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: generateResponse(content),
        isUser: false,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, aiMessage])
    } finally {
      setIsTyping(false)
    }
  }

  const handleQuickQuestion = (question: string) => {
    sendMessage(question)
  }

  const initializeChat = () => {
    if (messages.length === 0) {
      const newChatId = Date.now().toString()
      setCurrentChatId(newChatId)
      const welcomeMessage: Message = {
        id: '0',
        content: "Hi! I'm Neo, Boss Jun's AI assistant. Feel free to ask me anything—yes, anything—as long as it's not malicious or inappropriate.",
        isUser: false,
        timestamp: new Date()
      }
      setMessages([welcomeMessage])
    }
    setIsOpen(true)
  }

  const startNewChat = () => {
    // Save current chat to history if it has messages
    if (messages.length > 1 && currentChatId) {
      const chatTitle = messages[1]?.content.slice(0, 30) + '...' || 'New Chat'
      const newHistory: ChatHistory = {
        id: currentChatId,
        title: chatTitle,
        messages: messages,
        timestamp: new Date()
      }
      const updatedHistory = [newHistory, ...chatHistory].slice(0, 10) // Keep last 10 chats
      setChatHistory(updatedHistory)
      localStorage.setItem('chatHistory', JSON.stringify(updatedHistory))
    }

    // Start fresh chat
    const newChatId = Date.now().toString()
    setCurrentChatId(newChatId)
    const welcomeMessage: Message = {
      id: '0',
      content: "Hi! I'm Boss Jun's AI assistant. I can help you learn about his experience, skills, and projects. What would you like to know?",
      isUser: false,
      timestamp: new Date()
    }
    setMessages([welcomeMessage])
    setShowMenu(false)
  }

  const endChat = () => {
    // Save current chat to history before ending
    if (messages.length > 1 && currentChatId) {
      const chatTitle = messages[1]?.content.slice(0, 30) + '...' || 'Chat Session'
      const newHistory: ChatHistory = {
        id: currentChatId,
        title: chatTitle,
        messages: messages,
        timestamp: new Date()
      }
      const updatedHistory = [newHistory, ...chatHistory].slice(0, 10)
      setChatHistory(updatedHistory)
      localStorage.setItem('chatHistory', JSON.stringify(updatedHistory))
    }
    setMessages([])
    setCurrentChatId('')
    setIsOpen(false)
    setShowMenu(false)
  }

  const copyMessageContent = (content: string, messageId: string) => {
    // Remove HTML tags and get plain text
    const tempDiv = document.createElement('div')
    tempDiv.innerHTML = content
    const plainText = tempDiv.textContent || tempDiv.innerText || ''
    
    navigator.clipboard.writeText(plainText).then(() => {
      setCopiedMessageId(messageId)
      setTimeout(() => setCopiedMessageId(null), 2000)
    })
  }

  const likeMessage = (messageId: string) => {
    const newLiked = new Set(likedMessages)
    const newUnliked = new Set(unlikedMessages)
    
    if (newLiked.has(messageId)) {
      newLiked.delete(messageId)
    } else {
      newLiked.add(messageId)
      newUnliked.delete(messageId) // Remove unlike if it was unliked
    }
    
    setLikedMessages(newLiked)
    setUnlikedMessages(newUnliked)
  }

  const unlikeMessage = (messageId: string) => {
    const newLiked = new Set(likedMessages)
    const newUnliked = new Set(unlikedMessages)
    
    if (newUnliked.has(messageId)) {
      newUnliked.delete(messageId)
    } else {
      newUnliked.add(messageId)
      newLiked.delete(messageId) // Remove like if it was liked
    }
    
    setLikedMessages(newLiked)
    setUnlikedMessages(newUnliked)
  }

  const retryMessage = async (messageIndex: number) => {
    if (messageIndex > 0) {
      const previousUserMessage = messages[messageIndex - 1]
      const currentAiMessage = messages[messageIndex]
      
      if (previousUserMessage.isUser) {
        // Remove the current AI response
        const updatedMessages = messages.slice(0, messageIndex)
        setMessages(updatedMessages)
        
        // Regenerate response without resending user message
        setIsTyping(true)
        
        try {
          const conversationHistory = updatedMessages.map(msg => ({
            role: msg.isUser ? 'user' : 'assistant',
            content: msg.content
          }))

          const response = await fetch('/api/chat', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              messages: conversationHistory,
              conversationId: currentChatId
            }),
          })

          if (!response.ok) {
            throw new Error('Failed to get response')
          }

          const data = await response.json()
          const newAiMessage: Message = {
            id: Date.now().toString(),
            content: data.text || generateResponse(previousUserMessage.content),
            isUser: false,
            timestamp: new Date()
          }
          
          setMessages(prev => [...prev, newAiMessage])
        } catch (error) {
          console.error('Error retrying message:', error)
          const fallbackMessage: Message = {
            id: Date.now().toString(),
            content: generateResponse(previousUserMessage.content),
            isUser: false,
            timestamp: new Date()
          }
          setMessages(prev => [...prev, fallbackMessage])
        } finally {
          setIsTyping(false)
        }
      }
    }
  }

  const loadChatHistory = (chat: ChatHistory) => {
    setMessages(chat.messages)
    setCurrentChatId(chat.id)
    setShowHistory(false)
    setShowMenu(false)
  }

  const clearHistory = () => {
    setChatHistory([])
    localStorage.removeItem('chatHistory')
    setShowHistory(false)
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
        className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 w-14 h-14 bg-primary-600 dark:bg-primary-500 text-white rounded-full shadow-lg hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors flex items-center justify-center"
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
            className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-96 max-w-md h-[500px] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col overflow-hidden transition-colors duration-300"
          >
            {/* Header */}
            <div 
              className="bg-gradient-to-r from-primary-600 to-blue-600 dark:from-primary-700 dark:to-blue-700 p-4 text-white flex items-center justify-between relative"
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold">AI Assistant</h3>
                  <p className="text-xs text-primary-100">Ask me about Boss Jun</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {/* Menu Button */}
                <div className="relative" ref={menuRef}>
                  <button
                    onClick={() => setShowMenu(!showMenu)}
                    className="text-white/80 hover:text-white transition-colors p-1"
                    aria-label="Menu"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="5" r="2"/>
                      <circle cx="12" cy="12" r="2"/>
                      <circle cx="12" cy="19" r="2"/>
                    </svg>
                  </button>

                  {/* Dropdown Menu */}
                  {showMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-gray-700 rounded-lg shadow-xl border border-gray-200 dark:border-gray-600 overflow-hidden z-50"
                    >
                      <button
                        onClick={startNewChat}
                        className="w-full px-4 py-2.5 text-left text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors flex items-center gap-2"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/>
                        </svg>
                        Start New Chat
                      </button>
                      <button
                        onClick={() => { setShowHistory(true); setShowMenu(false); }}
                        className="w-full px-4 py-2.5 text-left text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors flex items-center gap-2"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        View Recent Chats
                      </button>
                      <button
                        onClick={endChat}
                        className="w-full px-4 py-2.5 text-left text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors flex items-center gap-2"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                        End Chat
                      </button>
                    </motion.div>
                  )}
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-white transition-colors"
                  aria-label="Close chat"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Chat History Modal */}
            {showHistory && (
              <div className="absolute inset-0 bg-white dark:bg-gray-800 z-10 flex flex-col">
                <div className="bg-gradient-to-r from-primary-600 to-blue-600 dark:from-primary-700 dark:to-blue-700 p-4 text-white flex items-center justify-between">
                  <h3 className="font-semibold">Recent Chats</h3>
                  <button
                    onClick={() => setShowHistory(false)}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex-1 overflow-y-auto p-4">
                  {chatHistory.length === 0 ? (
                    <p className="text-center text-gray-500 dark:text-gray-400 text-sm mt-8">No recent chats</p>
                  ) : (
                    <div className="space-y-2">
                      {chatHistory.map((chat) => (
                        <button
                          key={chat.id}
                          onClick={() => loadChatHistory(chat)}
                          className="w-full p-3 text-left bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-colors"
                        >
                          <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">{chat.title}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            {new Date(chat.timestamp).toLocaleDateString()} • {chat.messages.length} messages
                          </p>
                        </button>
                      ))}
                    </div>
                  )}
                  {chatHistory.length > 0 && (
                    <button
                      onClick={clearHistory}
                      className="w-full mt-4 px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                    >
                      Clear All History
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* Messages */}
            <div 
              ref={messagesContainerRef}
              onScroll={handleScroll}
              className="flex-1 overflow-y-auto p-4 space-y-4 relative"
            >
              {messages.map((message, index) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex flex-col ${message.isUser ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.isUser
                        ? 'bg-primary-600 dark:bg-primary-500 text-white rounded-br-md'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-bl-md'
                    }`}
                    title={message.isUser ? formatTime(message.timestamp) : undefined}
                  >
                    <div className="text-sm leading-relaxed">
                      {renderMessageContent(message.content)}
                    </div>
                  </div>
                  
                  {/* Action buttons for AI messages (hide for initial greeting) */}
                  {!message.isUser && message.id !== '0' && (
                    <div className="flex items-center gap-1 mt-1 px-1">
                      <button
                        onClick={() => copyMessageContent(message.content, message.id)}
                        className="p-1.5 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
                        title="Copy message"
                      >
                        {copiedMessageId === message.id ? (
                          <Check className="w-3.5 h-3.5" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                      <button
                        onClick={() => likeMessage(message.id)}
                        className={`p-1.5 rounded transition-colors ${
                          likedMessages.has(message.id)
                            ? 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20'
                            : 'text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                        }`}
                        title="Good response"
                      >
                        <ThumbsUp className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => unlikeMessage(message.id)}
                        className={`p-1.5 rounded transition-colors ${
                          unlikedMessages.has(message.id)
                            ? 'text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20'
                            : 'text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                        }`}
                        title="Bad response"
                      >
                        <ThumbsDown className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => retryMessage(index)}
                        className="p-1.5 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
                        title="Retry"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                      </button>
                      <span className="text-xs text-gray-400 dark:text-gray-500 ml-1">
                        {formatTime(message.timestamp)}
                      </span>
                    </div>
                  )}
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

              <div ref={messagesEndRef} />
              
              {/* Scroll to Bottom Button */}
              {showScrollButton && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  onClick={scrollToBottom}
                  className="sticky bottom-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-primary-600 dark:bg-primary-500 text-white rounded-full shadow-lg hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors flex items-center justify-center z-10"
                  aria-label="Scroll to bottom"
                >
                  <ArrowDown className="w-5 h-5" />
                </motion.button>
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