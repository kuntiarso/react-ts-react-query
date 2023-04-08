import {
  useMutation,
  UseMutationOptions,
  useQueryClient
} from '@tanstack/react-query'

import { config } from '~/config'

import { User } from '../types'

export const useCreateUserMutation = (
  options?: UseMutationOptions<void, Error, Omit<User, 'id'>, unknown>
) => {
  const queryClient = useQueryClient()

  return useMutation(
    async (newUser: Omit<User, 'id'>) => {
      await fetch(`${config.apiUrl}/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser)
      })
    },
    { ...options, onSuccess: () => queryClient.invalidateQueries(['users']) }
  )
}
