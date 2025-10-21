import React from 'react'
import { getAllPosts, PostMeta } from '@/lib/posts'
import PostCard from '@/components/blog/PostCard'
import BlogHeader from '@/components/blog/BlogHeader'
import { Metadata } from 'next'

export const revalidate = 60

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Blog - Rolando Remolacio',
    description: 'Articles and tutorials by Rolando Remolacio',
  }
}

export default async function BlogPage() {
  const posts: PostMeta[] = await getAllPosts()

  return (
    <section className="min-h-screen py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <BlogHeader />

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>

        {/* Empty State */}
        {posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">No posts yet. Check back soon!</p>
          </div>
        )}
      </div>
    </section>
  )
}
