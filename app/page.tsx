import HomeWrapper from '@/components/HomeWrapper'
import { getAllPosts } from '@/lib/posts'
import { showResume } from '@/flags'

export default async function Home() {
  const allPosts = await getAllPosts()
  const featuredPosts = allPosts.slice(0, 3)
  const shouldShowResume = await showResume()

  return <HomeWrapper featuredPosts={featuredPosts} showResume={shouldShowResume} />
}