import { Link } from 'react-router-dom'
import { useOutlet } from 'react-router-dom'

import { config } from '~/config'

export const AppLayout = () => {
  const outlet = useOutlet()

  return (
    <div className="container">
      <div className="mb-8">
        <p>
          CRUD with <span className="font-semibold">React-Query</span>
        </p>
        <p className="text-sm">
          by <em>{config.appAuthor}</em>
        </p>
      </div>

      <div className="mb-8">
        <em>Developed using:</em>
        <p>React</p>
        <p>Vite</p>
        <p>TypeScript</p>
        <p>Tailwindcss</p>
      </div>

      <div className="mb-8">
        <Link to={'/'} className="mr-4 underline">
          <span>home</span>
        </Link>
        <Link to={'users'} className="mr-4 underline">
          <span>users</span>
        </Link>
      </div>

      <div>{outlet}</div>
    </div>
  )
}
