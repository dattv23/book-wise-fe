import type { Blog } from '@/@types'
import BlogCard from '@/components/cards/blog-card'

const blogs: Blog[] = [
  {
    id: '001',
    time: '19 Thg 7, 2024',
    title: 'Những sách mới về Hôn nhân',
    imageUrl: 'https://res.cloudinary.com/dakhaz39u/image/upload/v1732256351/images/1732256349632-582926926.jpg'
  },
  {
    id: '002',
    time: '15 Thg 10, 2024',
    title: 'Top 10 sách kinh doanh hay nhất',
    imageUrl: 'https://res.cloudinary.com/dakhaz39u/image/upload/v1732257684/images/1732257681654-374169904.jpg'
  },
  {
    id: '003',
    time: '30 Thg 10, 2024',
    title: '8 Lợi ích của việc đọc sách',
    imageUrl: 'https://res.cloudinary.com/dakhaz39u/image/upload/v1732257894/images/1732257892024-15480254.jpg'
  },
  {
    id: '004',
    time: '01 Thg 11, 2024',
    title: 'Hãy duy trì đọc sách mỗi ngày',
    imageUrl: 'https://res.cloudinary.com/dakhaz39u/image/upload/v1732257939/images/1732257936909-854287210.jpg'
  },
  {
    id: '005',
    time: '21 Thg 11, 2024',
    title: 'Cảm nhận tác phẩm "Sống xanh"',
    imageUrl: 'https://res.cloudinary.com/dakhaz39u/image/upload/v1732260097/images/1732260095642-981209175.jpg'
  }
]

const BlogPage = () => {
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
