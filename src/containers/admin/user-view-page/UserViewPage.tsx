import { ApiResponse, User } from '@/@types'
import UserForm from '@/components/forms/user-form'
import { PageTitle } from '@/components/forms/user-form/constants'
import { getUserById } from '@/services/user.service'
import { notFound } from 'next/navigation'

type UserViewPageProps = {
  userId: string
}

const UserViewPage: React.FC<UserViewPageProps> = async ({ userId }) => {
  let user = null
  let pageTitle = PageTitle.add

  if (userId !== 'new') {
    const resData = (await getUserById(userId)) as ApiResponse<User> | null
    if (!resData) {
      notFound()
    }
    user = resData.data
    pageTitle = PageTitle.edit
  }

  return <UserForm initialData={user} pageTitle={pageTitle} userId={user ? user.userId : ''} />
}

export default UserViewPage
