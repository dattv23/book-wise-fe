import dynamic from 'next/dynamic'

const CategoryPage = dynamic(() => import('@/containers/category-page'))

type CategoryProps = {
  params: { slug: string }
}

export async function generateStaticParams() {
  const slugs = ['phone', 'smart-watch', 'camera', 'game-pad', 'head-phone', 'computer']

  return slugs.map((slug: string) => ({
    slug
  }))
}

const Category: React.FC<CategoryProps> = ({ params }) => {
  return <CategoryPage slug={params.slug} />
}

export default Category
