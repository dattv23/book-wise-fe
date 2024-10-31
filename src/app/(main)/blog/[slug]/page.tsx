import dynamic from 'next/dynamic'

const BlogDetailPage = dynamic(() => import('@/containers/blog-detail-page'))

const BlogDetail: React.FC = () => {
  return <BlogDetailPage />
}

export default BlogDetail
