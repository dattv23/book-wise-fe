import { Checkbox } from '@/components/ui/checkbox'
import { renderStar } from '@/lib/utils'
import React from 'react'

const ratings = ['5', '4', '3', '2', '1']

const RatingsFilter = () => {
  return (
    <div className='flex flex-col gap-4 rounded-md bg-[#f4f3f8] p-4'>
      <h3 className='text-2xl font-semibold'>Lọc theo đánh giá</h3>
      <hr />
      <ul className='flex flex-col gap-2'>
        {ratings.map((item, id) => (
          <li className='flex items-center space-x-2' key={id}>
            <Checkbox id={item} />
            <label
              htmlFor={item}
              className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
            >
              {renderStar(+item)}
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RatingsFilter
