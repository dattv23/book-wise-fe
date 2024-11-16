import dynamic from 'next/dynamic'
import { SearchParams } from 'nuqs/server'

import { searchParamsCache } from '@/lib/searchParams'

const UserManagementPage = dynamic(() => import('@/containers/admin/user-management-page'))

type UserManagementProps = {
  searchParams: SearchParams
}

const UserManagement: React.FC<UserManagementProps> = async ({ searchParams }) => {
  searchParamsCache.parse(searchParams)
  return <UserManagementPage />
}

export default UserManagement
