import { faker } from '@faker-js/faker'
import { NewUser } from '~/features/user/api/useCreateUserMutation'
import { PatchUser } from '~/features/user/api/usePatchUserMutation'
import { useSlugify } from './useSlugify'

export const useFaker = () => {
  const { generateSlug } = useSlugify()

  const generateUser = (): NewUser => {
    const firstName = faker.name.firstName()
    const lastName = faker.name.lastName()
    const slug = generateSlug(`${firstName} ${lastName}`)
    const email = faker.internet.email()
    const phone = faker.phone.number()
    const gender = faker.name.gender()

    return { firstName, lastName, slug, email, phone, gender }
  }

  const patchUser = (userId: number): PatchUser => {
    return {
      id: userId,
      email: faker.internet.email(),
      phone: faker.phone.number(),
      gender: faker.name.gender()
    }
  }

  return { generateUser, patchUser }
}
