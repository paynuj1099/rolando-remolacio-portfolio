'use client'

import React from 'react'

export default function PostContent({ html }: { html: string }) {

  return (
    <div className="prose prose-lg prose-primary max-w-none dark:prose-invert
      prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white
      prose-h1:text-4xl prose-h1:mb-6 prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
      prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
      prose-a:text-primary-600 dark:prose-a:text-primary-400 prose-a:no-underline hover:prose-a:underline
      prose-strong:text-gray-900 dark:prose-strong:text-white prose-strong:font-semibold
      prose-code:text-primary-600 dark:prose-code:text-primary-400 prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:before:content-none prose-code:after:content-none
      prose-pre:!bg-gray-900 dark:prose-pre:!bg-gray-950 prose-pre:border prose-pre:border-gray-700 prose-pre:rounded-lg prose-pre:!p-0 prose-pre:my-8 prose-pre:shadow-xl
      prose-pre:code:block prose-pre:code:!p-4 prose-pre:code:!bg-transparent prose-pre:code:text-gray-100 prose-pre:code:overflow-x-auto prose-pre:code:whitespace-pre
      prose-blockquote:border-l-4 prose-blockquote:border-primary-500 prose-blockquote:bg-gray-50 dark:prose-blockquote:bg-gray-800/50 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r prose-blockquote:my-6
      prose-img:rounded-xl prose-img:shadow-lg prose-img:my-8
      prose-ul:list-disc prose-ul:my-6 prose-ul:space-y-2 prose-ol:list-decimal prose-ol:my-6 prose-ol:space-y-2
      prose-li:text-gray-700 dark:prose-li:text-gray-300 prose-li:leading-relaxed"
    >
      <style jsx global>{`
        pre {
          max-width: 100%;
          overflow-x: auto !important;
        }
        pre code {
          display: block;
          min-width: fit-content;
        }
        /* Custom scrollbar for code blocks */
        pre::-webkit-scrollbar {
          height: 10px;
        }
        pre::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.4);
          border-radius: 0 0 8px 8px;
        }
        pre::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.4);
          border-radius: 4px;
        }
        pre::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.6);
        }
        /* Firefox scrollbar */
        pre {
          scrollbar-width: thin;
          scrollbar-color: rgba(255, 255, 255, 0.4) rgba(0, 0, 0, 0.4);
        }
      `}</style>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}

