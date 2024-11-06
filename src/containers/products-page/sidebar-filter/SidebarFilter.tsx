import CategoriesFilter from '@/components/filters/categories-filter'
import RatingsFilter from '@/components/filters/ratings-filter'
import YearsFilter from '@/components/filters/years-filter'

const SidebarFilter: React.FC = () => {
  return (
    <aside className='flex w-[300px] flex-col gap-4'>
      <CategoriesFilter />
      <YearsFilter />
      <RatingsFilter />
    </aside>
  )
}

export default SidebarFilter
