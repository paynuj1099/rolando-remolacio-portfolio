import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import rehypeRaw from 'rehype-raw'
import rehypeHighlight from 'rehype-highlight'

export type PostMeta = {
  title: string
  date: string
  excerpt?: string
  slug: string
  coverImage?: string
  author?: string
  readTime?: string
}

export type Post = {
  meta: PostMeta
  content: string
}

const postsDirectory = path.join(process.cwd(), 'content', 'posts')

export function getPostFiles() {
  return fs.readdirSync(postsDirectory).filter((f) => f.endsWith('.md'))
}

export function getSlugFromFile(fileName: string) {
  return fileName.replace(/\.md$/, '')
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  // Process markdown with syntax highlighting
  const processed = await remark()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(content)

  return {
    meta: {
      title: String(data.title || slug),
      date: String(data.date || ''),
      excerpt: String(data.excerpt || ''),
      slug,
      coverImage: data.coverImage ? String(data.coverImage) : undefined,
      author: data.author ? String(data.author) : undefined,
      readTime: data.readTime ? String(data.readTime) : undefined,
    },
    content: String(processed),
  }
}

export async function getAllPosts(): Promise<PostMeta[]> {
  const files = getPostFiles()
  const posts: PostMeta[] = files.map((fileName) => {
    const slug = getSlugFromFile(fileName)
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data } = matter(fileContents)
    return {
      title: String(data.title || slug),
      date: String(data.date || ''),
      excerpt: String(data.excerpt || ''),
      slug,
      coverImage: data.coverImage ? String(data.coverImage) : undefined,
      author: data.author ? String(data.author) : undefined,
      readTime: data.readTime ? String(data.readTime) : undefined,
    }
  })

  // sort by date desc
  posts.sort((a, b) => (a.date < b.date ? 1 : -1))
  return posts
}
