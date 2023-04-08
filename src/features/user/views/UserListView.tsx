import { faker } from '@faker-js/faker'
import React from 'react'
import toast from 'react-hot-toast'

import { useCreateUserMutation } from '../api/useCreateUserMutation'
import { UserTable } from '../components/UserTable'
import { User } from '../types'

type UserListProps = {
  users: User[]
}

export const UserListView: React.FC<UserListProps> = ({ users }) => {
  const { isLoading, mutateAsync: onCreateUser } = useCreateUserMutation()

  const handleCreateUser = async () => {
    try {
      await onCreateUser({
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        phone: faker.phone.number(),
        gender: faker.name.gender()
      })
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
          isLoading ? 'bg-slate-200' : 'bg-emerald-200 hover:bg-emerald-300'
        }`}
        onClick={handleCreateUser}
        disabled={isLoading}
      >
        {isLoading ? 'loading...' : 'add user'}
      </button>

      <UserTable users={users} />
    </div>
  )
}
