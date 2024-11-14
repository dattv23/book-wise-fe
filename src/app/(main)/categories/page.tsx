import dynamic from 'next/dynamic'

import { ApiResponse, Category, Product } from '@/@types'
import { envServerConfig } from '@/lib/envServer'

const CategoriesPage = dynamic(() => import('@/containers/categories-page'))

async function getCategories() {
  const res = await fetch(`${envServerConfig.DOMAIN_API}/categories`)

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

async function getProducts() {
  const res = await fetch(`${envServerConfig.DOMAIN_API}/books`)

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const Categories: React.FC = async () => {
  const { data: categories } = (await getCategories()) as ApiResponse<Category[]>
  const {
    data: { books: products }
  } = (await getProducts()) as ApiResponse<{ books: Product[] }>

  return <CategoriesPage categories={categories} products={products} />
}

export default Categories
