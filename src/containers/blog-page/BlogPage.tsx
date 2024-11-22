import type { Blog } from '@/@types'
import BlogCard from '@/components/cards/blog-card'

const blogs: Blog[] = [
  {
    id: '001',
    time: 'July 19, 2024',
    title: 'New books in Love',
    image_url: 'https://res.cloudinary.com/dakhaz39u/image/upload/v1732256351/images/1732256349632-582926926.jpg'
  },
  {
    id: '002',
    time: 'April 19, 2024',
    title: '10 Best Books for Bussiness',
    image_url: 'https://res.cloudinary.com/dakhaz39u/image/upload/v1732257684/images/1732257681654-374169904.jpg'
  },
  {
    id: '003',
    time: 'May 30, 2024',
    title: '8 High performance Notebooks',
    image_url: 'https://res.cloudinary.com/dakhaz39u/image/upload/v1732257894/images/1732257892024-15480254.jpg'
  },
  {
    id: '004',
    time: 'September 01, 2024',
    title: 'Benefits of reading books',
    image_url: 'https://res.cloudinary.com/dakhaz39u/image/upload/v1732257939/images/1732257936909-854287210.jpg'
  },
  {
    id: '005',
    time: 'June 11, 2024',
    title: 'These Green leave',
    image_url: 'https://res.cloudinary.com/dakhaz39u/image/upload/v1732260097/images/1732260095642-981209175.jpg'
  }
]

const BlogPage = () => {
  return (
    <div className='mx-auto bg-white py-6 sm:py-8 lg:w-[1200px] lg:py-12'>
      <div className='mx-auto max-w-screen-2xl px-4 md:px-8'>
        <div className='mb-10 md:mb-16'>
          <h2 className='mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl'>Blog</h2>

          <p className='mx-auto max-w-screen-md text-center text-gray-500 md:text-lg'>
            This is a section of some simple filler text, also known as placeholder text. It shares some characteristics
            of a real written text but is random or otherwise generated.
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
