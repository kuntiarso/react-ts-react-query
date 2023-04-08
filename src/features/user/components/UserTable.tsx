import React from 'react'
import toast from 'react-hot-toast'

import { useDeleteUserMutation } from '../api/useDeleteUserMutation'
import { User } from '../types'

const heads = ['First Name', 'Last Name', 'Email', 'Phone', 'Gender']

type UserTableProps = {
  users: User[]
}

export const UserTable: React.FC<UserTableProps> = ({ users }) => {
  const { mutateAsync: onDeleteUser } = useDeleteUserMutation()

  const handleDeleteUser = async (userId: number) => {
    try {
      await onDeleteUser(userId)
      toast.success('delete user success!')
    } catch (e) {
      const err = e as Error
      toast.error(err.message)
    }
  }

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  {heads.map((head) => (
                    <th key={head} scope="col" className="px-6 py-2">
                      {head}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {users.map(
                  ({
                    id,
                    firstName: fName,
                    lastName: lName,
                    email,
                    phone,
                    gender
                  }) => (
                    <tr
                      key={id}
                      className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
                    >
                      <td className="whitespace-nowrap px-6 py-2">{fName}</td>
                      <td className="whitespace-nowrap px-6 py-2">{lName}</td>
                      <td className="whitespace-nowrap px-6 py-2">{email}</td>
                      <td className="whitespace-nowrap px-6 py-2">{phone}</td>
                      <td className="whitespace-nowrap px-6 py-2">{gender}</td>
                      <td className="w-10 whitespace-nowrap bg-white px-6">
                        <div className="flex">
                          <button className="mr-6 hover:underline">edit</button>
                          <button
                            className="hover:underline"
                            onClick={() => handleDeleteUser(id)}
                          >
                            delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
