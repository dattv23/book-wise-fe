import dynamic from 'next/dynamic'

const UserManagementPage = dynamic(() => import('@/containers/admin/user-management-page'))

const UserManagement: React.FC = () => {
  return <UserManagementPage />
}

export default UserManagement
