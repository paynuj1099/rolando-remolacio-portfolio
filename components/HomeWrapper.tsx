'use client'

import { useState, useEffect } from 'react'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import LoadingScreen from '@/components/LoadingScreen'
import type { PostMeta } from '@/lib/posts'

interface HomeWrapperProps {
  featuredPosts: PostMeta[];
}

export default function HomeWrapper({ featuredPosts }: HomeWrapperProps) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time and ensure minimum display duration
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500) // Show loader for at least 1.5 seconds

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      <Hero />
      <About featuredPosts={featuredPosts} />
      <Projects />
      <Skills />
      <Contact />
    </>
  )
}
