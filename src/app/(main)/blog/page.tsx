import dynamic from 'next/dynamic'

const BlogPage = dynamic(() => import('@/containers/blog-page'))

const Blog: React.FC = () => {
  return <BlogPage />
}

export default Blog
