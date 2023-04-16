import { useParams } from 'react-router-dom'
import { UserDetailView } from '~/features/user'
import { useGetUserDetailQuery } from '~/features/user/api/useGetUserDetailQuery'

export const UserDetail = () => {
  const { slug } = useParams()
  const {
    isLoading,
    isError,
    error,
    data: user
  } = useGetUserDetailQuery(slug ?? '')

  if (isLoading) {
    return (
      <div>
        <em>loading...</em>
      </div>
    )
  }
  if (isError) {
    return (
      <div>
        <em>{error.message}</em>
      </div>
    )
  }

  return <UserDetailView user={user} />
}
