import PageContainer from '@/components/layout/admin/page-container'
import UserFormSkeleton from '@/components/skeletons/user-form-skeleton'
import UserViewPage from '@/containers/admin/user-view-page'
import { Suspense } from 'react'

type UserViewProps = {
  params: {
    userId: string
  }
}

const UserView: React.FC<UserViewProps> = ({ params }) => {
  return (
    <PageContainer scrollable>
      <div className='flex-1 space-y-4'>
        <Suspense fallback={<UserFormSkeleton />}>
          <UserViewPage userId={params.userId} />
        </Suspense>
      </div>
    </PageContainer>
  )
}

export default UserView
