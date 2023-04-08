import { UserListView } from '~/features/user'
import { useGetUsersQuery } from '~/features/user/api/useGetUsersQuery'

export const UserList = () => {
  const { isLoading, isError, error, data: users } = useGetUsersQuery()

  if (isLoading) {
    return <div>loading...</div>
  }
  if (isError) {
    return <div>{error.message}</div>
  }

  return <UserListView users={users} />
}
