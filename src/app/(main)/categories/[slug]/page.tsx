import { ApiResponse, Category, Product } from '@/@types'
import { envServerConfig } from '@/lib/envServer'
import dynamic from 'next/dynamic'
import { notFound } from 'next/navigation'

const ProductCategoryPage = dynamic(() => import('@/containers/product-category-page'))

async function getProducts(slug: string) {
  const res = await fetch(`${envServerConfig.DOMAIN_API}/categories/${slug}/books`)

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    return notFound()
  }

  return res.json()
}

async function getCategories() {
  const res = await fetch(`${envServerConfig.DOMAIN_API}/categories`)

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

type ProductCategoryProps = {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const { data: categories } = (await getCategories()) as ApiResponse<Category[]>

  return categories.map((category) => ({
    slug: category.slug
  }))
}

const ProductCategory: React.FC<ProductCategoryProps> = async ({ params }) => {
  const {
    data: { name, books }
  } = (await getProducts(params.slug)) as ApiResponse<{ name: string; books: Product[]; total: number }>
  const { data: categories } = (await getCategories()) as ApiResponse<Category[]>

  return <ProductCategoryPage name={name} categories={categories} products={books} />
}

export default ProductCategory
