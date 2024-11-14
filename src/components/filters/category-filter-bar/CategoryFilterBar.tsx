import Link from 'next/link'

import { Category } from '@/@types'
import { Button } from '@/components/ui/button'

type CategoryFilterBarProps = {
  data: Category[]
}

const CategoryFilterBar: React.FC<CategoryFilterBarProps> = async ({ data }) => {
  return (
    <div className='flex max-w-xl flex-wrap items-center justify-center gap-4'>
      {data.map((item) => (
        <Link href={`/categories/${item.slug}`} key={item.categoryId}>
          <Button variant={'outline'}>{item.name}</Button>
        </Link>
      ))}
    </div>
  )
}

export default CategoryFilterBar
