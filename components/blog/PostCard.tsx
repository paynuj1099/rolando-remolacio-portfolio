import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { PostMeta } from '@/lib/posts'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

export default function PostCard({ post }: { post: PostMeta }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/10">
      <Link href={`/blog/${post.slug}`} className="block">
        {/* Cover Image */}
        {post.coverImage && (
          <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-primary-500/20 to-blue-500/20">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
        )}
        
        {/* No Image Fallback - Gradient */}
        {!post.coverImage && (
          <div className="relative h-48 w-full bg-gradient-to-br from-primary-500 via-purple-500 to-blue-500 overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-white rounded-full blur-3xl" />
            </div>
          </div>
        )}

        {/* Content */}
        <div className="p-6">
          {/* Meta Info */}
          <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mb-3">
            <div className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              <time>{new Date(post.date).toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric', 
                year: 'numeric' 
              })}</time>
            </div>
            {post.readTime && (
              <div className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{post.readTime}</span>
              </div>
            )}
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
            {post.excerpt}
          </p>

          {/* Author & Read More */}
          <div className="flex items-center justify-between">
            {post.author && (
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {post.author}
              </span>
            )}
            <span className="ml-auto flex items-center gap-1 text-sm font-medium text-primary-600 dark:text-primary-400 group-hover:gap-2 transition-all">
              Read more
              <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </div>
      </Link>
    </article>
  )
}
