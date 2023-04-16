import _ from 'lodash'
import { FC } from 'react'
import { User } from '../types'

type UserDetailProps = {
  user: User
}

export const UserDetailView: FC<UserDetailProps> = ({ user }) => {
  return (
    <>
      <p className="mb-2 font-semibold">
        <span className="bg-gradient-to-r from-rose-600 to-sky-600 bg-clip-text text-transparent">
          {user.firstName} {user.lastName}
        </span>
      </p>
      {Object.entries(user).map(([key, value]) => (
        <div key={key} className="grid grid-cols-12">
          <div className="col-span-1">
            <em>{_.startCase(key)}</em>
          </div>
          <div className="col-span-11">
            <span className="mr-4">:</span>
            <span>{value}</span>
          </div>
        </div>
      ))}
    </>
  )
}
