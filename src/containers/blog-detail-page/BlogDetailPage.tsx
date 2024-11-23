import Image from 'next/image'
import type { Blog } from '@/@types'

const BlogDetailPage = (blog: Blog) => {
  const { imageUrl, title, time, details } = blog.blog

  const { description, subtitle, author, content } = details
  return (
    <div className='bg-white py-6 sm:py-8 lg:py-12'>
      <div className='mx-auto max-w-screen-xl px-4 md:px-8'>
        <div className='grid gap-8 md:grid-cols-2 lg:gap-12'>
          {/* Image */}
          <div>
            <div className='h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto'>
              <Image
                src={imageUrl}
                loading='lazy'
                alt={title}
                className='h-full w-full object-cover object-center'
                width={400}
                height={400}
              />
            </div>
          </div>

          {/* Content */}
          <div className='md:pt-8'>
            <h1 className='mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left'>
              {title}
            </h1>
            <p className='text-center font-bold text-indigo-500 md:text-left'>{subtitle}</p>
            <p className='mb-6 text-gray-500 sm:text-lg md:mb-8' dangerouslySetInnerHTML={{ __html: content }}></p>
            <h2 className='mb-2 text-center text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4 md:text-left'>
              Thông tin bài viết
            </h2>
            <p className='mb-6 text-gray-500 sm:text-lg md:mb-8'>{description}</p>

            {/* Author and Tags */}
            <div className='text-sm text-gray-500'>
              <p>
                Tác giả: <span className='font-medium'>{author}</span>
              </p>
              <p>
                Ngày đăng: <span className='font-medium'>{time}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogDetailPage
