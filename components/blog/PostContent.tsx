import React from 'react'

export default function PostContent({ html }: { html: string }) {
  return (
    <div className="prose prose-lg prose-primary max-w-none dark:prose-invert
      prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white
      prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl
      prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed
      prose-a:text-primary-600 dark:prose-a:text-primary-400 prose-a:no-underline hover:prose-a:underline
      prose-strong:text-gray-900 dark:prose-strong:text-white
      prose-code:text-primary-600 dark:prose-code:text-primary-400 prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
      prose-pre:bg-gray-900 dark:prose-pre:bg-gray-950 prose-pre:border prose-pre:border-gray-700
      prose-blockquote:border-l-4 prose-blockquote:border-primary-500 prose-blockquote:bg-gray-50 dark:prose-blockquote:bg-gray-800/50 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r
      prose-img:rounded-xl prose-img:shadow-lg
      prose-ul:list-disc prose-ol:list-decimal
      prose-li:text-gray-700 dark:prose-li:text-gray-300"
    >
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}
