import { Category } from '@/@types'
import CategoryFilterBar from '@/components/filters/category-filter-bar'

type FilterCategorySectionProps = {
  data: Category[]
}

const FilterCategorySection: React.FC<FilterCategorySectionProps> = ({ data }) => {
  return (
    <section className='mt-12 flex flex-col items-center gap-2'>
      <CategoryFilterBar data={data} />
    </section>
  )
}

export default FilterCategorySection
