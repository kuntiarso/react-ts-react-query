import {
  useMutation,
  UseMutationOptions,
  useQueryClient
} from '@tanstack/react-query'
import { config } from '~/config'
import { User } from '../types'

export type PatchUser = Omit<User, 'slug' | 'firstName' | 'lastName'>

export const usePatchUserMutation = (
  options?: UseMutationOptions<void, Error, PatchUser, unknown>
) => {
  const queryClient = useQueryClient()

  return useMutation(
    async (patchUser: PatchUser) => {
      await fetch(`${config.apiUrl}/users/${patchUser.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(patchUser)
      })
    },
    { ...options, onSuccess: () => queryClient.invalidateQueries(['users']) }
  )
}
