import { Link, Outlet } from "react-router-dom"

const DevNav = () => {
  return (
    <div>
      <nav className="divide-x divide-gray-300 space-x-2 border-b">
        <Link to="/" className="px-2">
          Home
        </Link>
        <Link to="/signup/org" className="px-2">
          Org Signup
        </Link>
        <Link to="/signup/volunteer" className="px-2">
          Volunteer Signup
        </Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default DevNav
