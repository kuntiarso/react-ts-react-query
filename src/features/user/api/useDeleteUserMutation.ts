import {
  useMutation,
  UseMutationOptions,
  useQueryClient
} from '@tanstack/react-query'

import { config } from '~/config'

export const useDeleteUserMutation = (
  options?: UseMutationOptions<void, Error, number, unknown>
) => {
  const queryClient = useQueryClient()

  return useMutation(
    async (userId: number) => {
      await fetch(`${config.apiUrl}/users/${userId}`, { method: 'DELETE' })
    },
    { ...options, onSuccess: () => queryClient.invalidateQueries(['users']) }
  )
}
