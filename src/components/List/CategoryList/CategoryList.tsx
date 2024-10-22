import React from 'react'

import { Category } from '@/types'
import { CategoryCard } from '@/components/Card'

type CategoryListProps = {
  data: Category[]
}

const CategoryList: React.FC<CategoryListProps> = ({ data }) => {
  return (
    <div className='grid w-full grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6'>
      {data.map((item) => (
        <CategoryCard data={item} key={item.id} />
      ))}
    </div>
  )
}

export default CategoryList
