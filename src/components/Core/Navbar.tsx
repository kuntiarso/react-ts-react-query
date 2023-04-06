import toast from 'react-hot-toast'

export const Navbar = () => {
  const success = () => toast.success('success!')

  return (
    <div>
      <div>Navbar</div>
      <button onClick={success}>click</button>
    </div>
  )
}
