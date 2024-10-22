import { notFound } from 'next/navigation'

import { Category } from '@/types'
import { ProductList } from '@/components'
import { envServerConfig } from '@/lib/envServer'
import { CategoriesSidebar } from '@/components/Sidebar'

type CategoryPageProps = {
  slug: string
}

const getCategoryBySlug = async (slug: string) => {
  const res = await fetch(`${envServerConfig.DOMAIN_API}/api/v1/categories/search?slug=${slug}`).then((res) =>
    res.json()
  )
  if (res.status !== 200) return notFound()
  return res.data as Category
}

const CategoryPage: React.FC<CategoryPageProps> = async ({ slug }) => {
  const { products } = await getCategoryBySlug(slug)

  return (
    <main className='flex gap-10 py-8'>
      <CategoriesSidebar />
      <ProductList data={products} />
    </main>
  )
}

export default CategoryPage
