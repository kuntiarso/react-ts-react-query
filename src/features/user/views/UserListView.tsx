import { FC } from 'react'
import toast from 'react-hot-toast'
import { useFaker } from '~/hooks/useFaker'
import { useCreateUserMutation } from '../api/useCreateUserMutation'
import { UserTable } from '../components/UserTable'
import { User } from '../types'

type UserListProps = {
  users: User[]
}

export const UserListView: FC<UserListProps> = ({ users }) => {
  const { generateUser } = useFaker()
  const { isLoading, mutateAsync: onCreateUser } = useCreateUserMutation()

  const handleCreateUser = async () => {
    try {
      await onCreateUser({ ...generateUser() })
      toast.success('create user success!')
    } catch (e) {
      const err = e as Error
      toast.error(err.message)
    }
  }

  return (
    <div className="mt-16">
      <button
        className={`mb-2 rounded px-4 py-2 ${
          isLoading
            ? 'cursor-not-allowed bg-slate-200'
            : 'bg-gradient-to-r from-rose-400 to-sky-400 hover:from-rose-500 hover:to-sky-500'
        }`}
        onClick={handleCreateUser}
        disabled={isLoading}
      >
        <p
          className={`text-sm font-semibold text-white ${
            isLoading && 'text-slate-400'
          }`}
        >
          {isLoading ? 'loading...' : 'add user'}
        </p>
      </button>

      <UserTable users={users} />
    </div>
  )
}
