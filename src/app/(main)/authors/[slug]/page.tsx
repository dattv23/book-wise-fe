import dynamic from 'next/dynamic'

const AuthorProfilePage = dynamic(() => import('@/containers/author-profile-page'))

const AuthorProfile: React.FC = () => {
  return <AuthorProfilePage />
}

export default AuthorProfile
