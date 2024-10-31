import dynamic from 'next/dynamic'

const DashboardPage = dynamic(() => import('@/containers/admin/dashboard-page'))

const Admin: React.FC = () => {
  return <DashboardPage />
}

export default Admin
