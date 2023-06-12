import { Link, Outlet } from "react-router-dom"

const DevNav = () => {
  return (
    <div>
      <nav className="divide-x divide-gray-300 space-x-2 border-b">
        <Link to="/" className="px-2">
          Home
        </Link>
        <span className="px-2 cursor-default text-gray-400">Org Signup</span>
        <span className="px-2 cursor-default text-gray-400">
          Volunteer Signup
        </span>
      </nav>
      <Outlet />
    </div>
  )
}

export default DevNav
