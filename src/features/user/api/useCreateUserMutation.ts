import {
  useMutation,
  UseMutationOptions,
  useQueryClient
} from '@tanstack/react-query'
import { config } from '~/config'
import { User } from '../types'

export type NewUser = Omit<User, 'id'>

export const useCreateUserMutation = (
  options?: UseMutationOptions<void, Error, NewUser, unknown>
) => {
  const queryClient = useQueryClient()

  return useMutation(
    async (newUser: NewUser) => {
      await fetch(`${config.apiUrl}/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser)
      })
    },
    { ...options, onSuccess: () => queryClient.invalidateQueries(['users']) }
  )
}
