import { ApiResponse, Category } from '@/@types'
import { envServerConfig } from '@/lib/envServer'

import CategoriesFilter from '@/components/filters/categories-filter'
import RatingsFilter from '@/components/filters/ratings-filter'
import YearsFilter from '@/components/filters/years-filter'

async function getCategories() {
  const res = await fetch(`${envServerConfig.DOMAIN_API}/api/v1/categories`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const SidebarFilter: React.FC = async () => {
  const { data: categories } = (await getCategories()) as ApiResponse<Category[]>

  return (
    <aside className='flex w-full flex-col gap-4 lg:max-w-96'>
      <CategoriesFilter data={categories} />
      <YearsFilter />
      <RatingsFilter />
    </aside>
  )
}

export default SidebarFilter
