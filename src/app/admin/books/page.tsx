import dynamic from 'next/dynamic'

const BookManagementPage = dynamic(() => import('@/containers/admin/book-management-page'))

const BookManagement: React.FC = () => {
  return <BookManagementPage />
}

export default BookManagement
