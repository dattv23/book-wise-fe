import type { Blog } from '@/@types'
import Image from 'next/image'
import Link from 'next/link'

type BlogCardProps = {
  data: Blog
}
export default function BlogCard({ data }: BlogCardProps) {
  return (
    <Link
      href='/'
      className='group relative flex h-48 flex-col overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-64 xl:h-96'
    >
      <Image
        src={data.image_url}
        loading='lazy'
        alt={data.title}
        className='absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
        width={500}
        height={500}
      />

      <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent md:via-transparent'></div>

      <div className='relative mt-auto p-4'>
        <span className='block text-sm text-gray-200'>{data.time}</span>
        <h2 className='mb-2 text-xl font-semibold text-white transition duration-100'>{data.title}</h2>

        <span className='font-semibold text-indigo-300'>Read more</span>
      </div>
    </Link>
  )
}
