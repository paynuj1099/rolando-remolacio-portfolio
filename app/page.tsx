import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import { getAllPosts } from '@/lib/posts'

export default async function Home() {
  const allPosts = await getAllPosts()
  const featuredPosts = allPosts.slice(0, 3)

  return (
    <>
      <Hero />
      <About featuredPosts={featuredPosts} />
      <Projects />
      <Skills />
      <Contact />
    </>
  )
}