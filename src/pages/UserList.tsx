import { UserListView } from '~/features/user'
import { useGetUsersQuery } from '~/features/user/api/useGetUsersQuery'

export const UserList = () => {
  const { isLoading, isError, error, data: users } = useGetUsersQuery()

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

  return <UserListView users={users} />
}
