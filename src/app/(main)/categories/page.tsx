import dynamic from 'next/dynamic'

const CategoriesPage = dynamic(() => import('@/containers/categories-page'))

const Categories: React.FC = () => {
  return <CategoriesPage />
}

export default Categories
