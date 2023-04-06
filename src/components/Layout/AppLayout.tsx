import { useOutlet } from 'react-router-dom'

export const AppLayout = () => {
  const outlet = useOutlet()

  return (
    <div className="container">
      <p className="mb-8">
        CRUD with <span className="font-semibold">React-Query</span>
      </p>

      <div className="mb-8">
        <em>Complete stack</em>
        <p>React</p>
        <p>Vite</p>
        <p>TypeScript</p>
        <p>Tailwindcss</p>
      </div>

      <div>{outlet}</div>
    </div>
  )
}
