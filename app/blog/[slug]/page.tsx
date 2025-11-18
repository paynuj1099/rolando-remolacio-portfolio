import React from "react";
import { getPostBySlug, getAllPosts, Post } from "@/lib/posts";
import PostContent from "@/components/blog/PostContent";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";

type Params = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  try {
    const post = await getPostBySlug(params.slug);
    return {
      title: `${post.meta.title} | Blog`,
      description: post.meta.excerpt || undefined,
    };
  } catch (e) {
    return { title: "Post not found" };
  }
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  let post: Post;
  try {
    post = await getPostBySlug(params.slug);
  } catch (e) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors mt-24"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>
      </div>

      {/* Hero Section */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-8 mt-8">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 pb-2 leading-[1.1] bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
          {post.meta.title}
        </h1>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-8">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <time>
              {new Date(post.meta.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
          </div>
          {post.meta.readTime && (
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.meta.readTime}</span>
            </div>
          )}
          {post.meta.author && (
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{post.meta.author}</span>
            </div>
          )}
        </div>

        {/* Cover Image */}
        {post.meta.coverImage && (
          <div className="relative h-64 sm:h-96 w-full rounded-2xl overflow-hidden shadow-2xl mb-8">
            <Image
              src={post.meta.coverImage}
              alt={post.meta.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-8 sm:p-12 shadow-xl border border-gray-200 dark:border-gray-700">
          <PostContent html={post.content} />
        </div>
      </div>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center border-t border-gray-200 dark:border-gray-700 pt-8">
          <p className="text-gray-600 dark:text-gray-400">
            Rolando Remolacio
          </p>
        </div>
      </footer>
    </article>
  );
}
