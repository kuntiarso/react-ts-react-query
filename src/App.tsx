import React from 'react'
import { Toaster } from 'react-hot-toast'

interface AppProps {
  children: React.ReactNode
}

export const App = ({ children }: AppProps) => {
  return (
    <>
      {children}
      <Toaster toastOptions={{ position: 'top-center' }} />
    </>
  )
}
