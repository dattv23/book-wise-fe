import dynamic from 'next/dynamic'

const AuthorsPage = dynamic(() => import('@/containers/authors-page'))

const Authors: React.FC = () => {
  return <AuthorsPage />
}

export default Authors
