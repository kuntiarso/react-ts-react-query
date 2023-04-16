import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { config } from '~/config'
import { User } from '../types'

export const useGetUserDetailQuery = (
  slug: string,
  options?: UseQueryOptions<unknown, Error, User, string[]>
) => {
  return useQuery(
    ['user', slug],
    async () => {
      const query = new URLSearchParams({ slug })
      const response: Response = await fetch(`${config.apiUrl}/users?${query}`)
      const users = (await response.json()) as unknown as User[]
      return users[0]
    },
    { ...options }
  )
}
