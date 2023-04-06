import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div>
      <Link to={'details'} style={{ textDecoration: 'none' }}>
        <span>details</span>
      </Link>
    </div>
  )
}
