export const config = {
  get baseUrl() {
    return import.meta.env.BASE_URL
  },
  get appEnv() {
    return import.meta.env.MODE
  },
  get appAuthor() {
    return import.meta.env.VITE_APP_AUTHOR
  },
  get apiUrl() {
    return import.meta.env.VITE_API_URL
  }
}
