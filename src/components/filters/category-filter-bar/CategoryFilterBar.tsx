import { Button } from '@/components/ui/button'
import React from 'react'

const filterList = [
  { id: 1, name: 'Tất cả', value: '' },
  { id: 2, name: 'Phát triển bản thân', value: 'phat-trien-ban-than' },
  { id: 3, name: 'Kinh doanh', value: 'kinh-doanh' },
  { id: 4, name: 'Trinh thám', value: 'trinh-tham' },
  { id: 5, name: 'Khoa học', value: 'khoa-hoc' },
  { id: 6, name: 'Giáo dục', value: 'giao-duc' }
]

const CategoryFilterBar = () => {
  return (
    <div className='flex max-w-xl flex-wrap items-center justify-center gap-4'>
      {filterList.map((item) => (
        <Button key={item.id} variant={'outline'}>
          {item.name}
        </Button>
      ))}
    </div>
  )
}

export default CategoryFilterBar
