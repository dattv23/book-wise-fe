import Link from 'next/link'
import { Plus } from 'lucide-react'

import { ApiResponse, User } from '@/@types'
import PageContainer from '@/components/layout/admin/page-container'
import UserTable from '@/components/tables/user-table'
import { buttonVariants } from '@/components/ui/button'
import Heading from '@/components/ui/heading'
import { Separator } from '@/components/ui/separator'
import { searchParamsCache } from '@/lib/searchParams'
import { cn } from '@/lib/utils'
import { getUsers } from '@/services/user.service'

const UserManagementPage: React.FC = async () => {
  // Showcasing the use of search params cache in nested RSCs
  const page = searchParamsCache.get('page')
  const search = searchParamsCache.get('q')
  const pageLimit = searchParamsCache.get('limit')

  const filters = {
    page,
    limit: pageLimit,
    ...(search && { search })
  }

  // mock api call
  const {
    data: { users, total }
  } = (await getUsers(filters)) as ApiResponse<{ users: User[]; total: number; totalPages: number }>

  return (
    <PageContainer scrollable>
      <div className='space-y-4'>
        <div className='flex items-start justify-between'>
          <Heading title={`User (${total})`} description='Manage users' />

          <Link href={'/admin/users/new'} className={cn(buttonVariants({ variant: 'default' }))}>
            <Plus className='mr-2 h-4 w-4' /> Add New
          </Link>
        </div>
        <Separator />
        <UserTable data={users} totalData={total} />
      </div>
    </PageContainer>
  )
}

export default UserManagementPage
