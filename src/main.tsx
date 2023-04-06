import './styles/index.css'

import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { App } from './App'
import { routes } from './routes'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)
const router = createBrowserRouter(routes)

root.render(
  <App>
    <RouterProvider router={router} />
  </App>
)
