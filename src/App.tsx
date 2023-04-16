import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'
import { Toaster } from 'react-hot-toast'

type AppProps = {
  children: ReactNode
}

export const App = ({ children }: AppProps) => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <Toaster toastOptions={{ position: 'top-center' }} />
    </QueryClientProvider>
  )
}
