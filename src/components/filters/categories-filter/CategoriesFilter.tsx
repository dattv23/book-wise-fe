import Link from 'next/link'
import { Category } from '@/@types'

type CategoriesFilterProps = {
  data: Category[]
}

const CategoriesFilter: React.FC<CategoriesFilterProps> = ({ data }) => {
  return (
    <div className='flex flex-col gap-4 rounded-md bg-[#f4f3f8] p-4'>
      <h3 className='text-2xl font-semibold'>Các danh mục</h3>
      <hr />
      <ul>
        {data.map((item) => (
          <li key={item.categoryId}>
            <Link href={`categories/${item.slug}`} className='hover:text-primary'>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CategoriesFilter
