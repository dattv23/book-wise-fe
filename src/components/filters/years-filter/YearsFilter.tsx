import { Checkbox } from '@/components/ui/checkbox'

const years = ['2024', '2023', '2022', '2021', '2020']

const YearsFilter: React.FC = () => {
  return (
    <div className='flex flex-col gap-4 rounded-md bg-[#f4f3f8] p-4'>
      <h3 className='text-2xl font-semibold'>Lọc theo năm</h3>
      <hr />
      <ul className='flex flex-col gap-2'>
        {years.map((item, id) => (
          <li className='flex items-center space-x-2' key={id}>
            <Checkbox id={item} />
            <label
              htmlFor={item}
              className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
            >
              {item}
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default YearsFilter
