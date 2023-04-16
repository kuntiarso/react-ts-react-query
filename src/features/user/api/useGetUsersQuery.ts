import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { config } from '~/config'
import { User } from '../types'

export const useGetUsersQuery = (
  options?: UseQueryOptions<unknown, Error, User[], string[]>
) => {
  return useQuery(
    ['users'],
    async () => {
      const response: Response = await fetch(`${config.apiUrl}/users`)
      const users = (await response.json()) as unknown as User[]
      return users.sort((a, b) => b.id - a.id)
    },
    { ...options }
  )
}
