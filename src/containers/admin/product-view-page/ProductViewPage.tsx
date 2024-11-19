import { ApiResponse, Category, Product } from '@/@types'
import ProductForm from '@/components/forms/product-form'
import { PageTitle } from '@/components/forms/product-form/constants'
import { getCategories } from '@/services/category.service'
import { getProductById } from '@/services/product.service'
import { notFound } from 'next/navigation'

type ProductViewPageProps = {
  productId: string
}

const ProductViewPage: React.FC<ProductViewPageProps> = async ({ productId }) => {
  let product = null
  let pageTitle = PageTitle.add

  if (productId !== 'new') {
    const resData = (await getProductById(productId)) as ApiResponse<Product> | null
    if (!resData) {
      notFound()
    }
    product = resData.data
    pageTitle = PageTitle.edit
  }

  const { data: categories } = (await getCategories()) as ApiResponse<Category[]>

  return (
    <ProductForm
      initialData={product}
      pageTitle={pageTitle}
      categories={categories}
      productId={product ? product.bookId : ''}
    />
  )
}

export default ProductViewPage
