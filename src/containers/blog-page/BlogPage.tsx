import type { Blog } from '@/@types'
import BlogCard from '@/components/cards/blog-card'
import { blogs } from '@/mocks/blogs'

const BlogPage: React.FC = () => {
  return (
    <div className='mx-auto bg-white py-6 sm:py-8 lg:w-[1200px] lg:py-12'>
      <div className='mx-auto max-w-screen-2xl px-4 md:px-8'>
        <div className='mb-10 md:mb-16'>
          <h2 className='mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl'>Blogs</h2>

          <p className='mx-auto max-w-screen-md text-center text-gray-500 md:text-lg'>
            Nơi chia sẻ những thông tin bổ ích và trải nghiệm về đọc sách từ các độc giả trên khắp cả nước. Hãy thể hiện
            niềm yêu thích sách của bạn tại đây nhé!
          </p>
        </div>

        <div className=' grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-8'>
          {blogs.map((blog: Blog) => (
            <BlogCard key={blog.id} data={blog} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogPage
