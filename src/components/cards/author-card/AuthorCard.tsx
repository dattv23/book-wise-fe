import Image from 'next/image'
import Link from 'next/link'

type AuthorCardProps = {
  data: {
    id: string
    name: string
    imageUrl: string
    yearOfBirth: number
  }
}

export default function AuthorCard({ data }: AuthorCardProps) {
  const authorAge = new Date().getFullYear() - data.yearOfBirth
  return (
    <div>
      <Link
        href={`/author/${data.id}`}
        className='group mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3'
      >
        <Image
          src={data.imageUrl}
          loading='lazy'
          alt={data.name}
          className='h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
          height={400}
          width={400}
        />
      </Link>

      <div className='flex flex-col'>
        <span className='text-gray-500'>{authorAge} tuổi</span>
        <a href='#' className='text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl'>
          {data.name}
        </a>
      </div>
    </div>
  )
}
