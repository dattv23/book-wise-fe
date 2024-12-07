import dynamic from 'next/dynamic'

import { ApiResponse, Category, Product } from '@/@types'
import { envServerConfig } from '@/lib/envServer'

const CategoriesPage = dynamic(() => import('@/containers/categories-page'))

async function getCategories() {
  const res = await fetch(`${envServerConfig.DOMAIN_API}/categories`, { cache: 'no-cache' })

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

async function getProducts(page: number) {
  const res = await fetch(`${envServerConfig.DOMAIN_API}/books?page=${page}`)

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

type CategoriesProps = {
  searchParams?: Promise<{
    query?: string
    page?: string
  }>
}

const Categories: React.FC<CategoriesProps> = async (props) => {
  const { data: categories } = (await getCategories()) as ApiResponse<Category[]>
  const searchParams = await props.searchParams
  const currentPage = Number(searchParams?.page) || 1

  const {
    data: { books: products, totalPages }
  } = (await getProducts(currentPage)) as ApiResponse<{ books: Product[]; totalPages: number }>

  return <CategoriesPage categories={categories} products={products} totalPages={totalPages} />
}

export default Categories
