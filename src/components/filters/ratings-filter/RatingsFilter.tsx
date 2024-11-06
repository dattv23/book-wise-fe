import RatingStars from '@/components/shared/rating-stars'
import { Checkbox } from '@/components/ui/checkbox'

const ratings = ['5', '4', '3', '2', '1']

const RatingsFilter: React.FC = () => {
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
              <RatingStars rating={+item} />
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RatingsFilter
