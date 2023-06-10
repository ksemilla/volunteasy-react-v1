import { Outlet } from "react-router-dom"

const DevNav = () => {
  return (
    <div>
      <nav className="divide-x divide-gray-300 space-x-2 border-b">
        <a href="#" className="px-2">
          Home
        </a>
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
