import {
  useMutation,
  UseMutationOptions,
  useQueryClient
} from '@tanstack/react-query'

import { config } from '~/config'

import { User } from '../types'

export const useUpdateUserMutation = (
  options?: UseMutationOptions<void, Error, Partial<User>, unknown>
) => {
  const queryClient = useQueryClient()

  return useMutation(
    async (newUser: Partial<User>) => {
      await fetch(`${config.apiUrl}/users`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser)
      })
    },
    { ...options, onSuccess: () => queryClient.invalidateQueries(['users']) }
  )
}
