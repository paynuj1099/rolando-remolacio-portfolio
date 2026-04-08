import HomeWrapper from '@/components/HomeWrapper'
import { getAllPosts } from '@/lib/posts'

export default async function Home() {
  const allPosts = await getAllPosts()
  const featuredPosts = allPosts.slice(0, 3)

  return <HomeWrapper featuredPosts={featuredPosts} />
}