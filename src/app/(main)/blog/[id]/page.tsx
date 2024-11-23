import dynamic from 'next/dynamic'

const BlogDetailPage = dynamic(() => import('@/containers/blog-detail-page'))
import { blogs } from '@/mocks/blogs'

function getBlogData(id: string) {
  const blog = blogs.find((b) => b.id === id)
  return blog
}

const BlogDetail = ({ params }: { params: { id: string } }) => {
  const blog = getBlogData(params.id)
  return <BlogDetailPage blog={blog} />
}

export default BlogDetail
