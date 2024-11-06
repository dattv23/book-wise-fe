import { categories } from '@/mocks/categories'
import Link from 'next/link'

const CategoriesFilter: React.FC = () => {
  return (
    <div className='flex flex-col gap-4 rounded-md bg-[#f4f3f8] p-4'>
      <h3 className='text-2xl font-semibold'>Các danh mục</h3>
      <hr />
      <ul>
        {categories.map((item) => (
          <li key={item.id}>
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
