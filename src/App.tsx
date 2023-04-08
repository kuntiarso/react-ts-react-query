import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import { Toaster } from 'react-hot-toast'

type AppProps = {
  children: React.ReactNode
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
