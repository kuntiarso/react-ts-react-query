import slugify from 'slugify'

export const useSlugify = () => {
  const generateSlug = (text: string) => {
    return slugify(text, {
      lower: true,
      strict: true
    })
  }

  return { generateSlug }
}
