'use client'

import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'

import { Category } from '@/@types'
import { Button } from '@/components/ui/button'

type CategoryFilterBarProps = {
  data: Category[]
}

const CategoryFilterBar: React.FC<CategoryFilterBarProps> = ({ data }) => {
  const pathName = usePathname()
  const { slug } = useParams()

  return (
    <div className='flex max-w-xl flex-wrap items-center justify-center gap-4'>
      <Link href={'/categories'}>
        <Button variant={!slug ? 'default' : 'outline'}>Tất cả</Button>
      </Link>
      {data.map((item) => (
        <Link href={`/categories/${item.slug}`} key={item.id}>
          <Button variant={pathName.includes(item.slug) ? 'default' : 'outline'}>{item.name}</Button>
        </Link>
      ))}
    </div>
  )
}

export default CategoryFilterBar
