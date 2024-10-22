import { Category } from '@/types'
import { Link } from '@/navigation'

type CategoryCardProps = {
  data: Category
}

const CategoryCard: React.FC<CategoryCardProps> = ({ data }) => {
  return (
    <Link
      href={`/categories/${data.slug}`}
      className='flex h-48 w-full flex-col gap-4 rounded-md border-2 border-[#ccc] px-10 py-6 text-black hover:border-none hover:bg-[#DB4444] hover:text-white'
    >
      <div className='flex h-16 justify-center'>{data.icon}</div>
      <p className='text-center'>{data.name}</p>
    </Link>
  )
}

export default CategoryCard
