import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <nav className="py-4 flex items-center justify-between space-x-10 font-medium border-b border-gray-100">
      <div className="flex items-center space-x-10">
        <img src="./logo1.png" alt="logo" width="100" />
        <span className="text-gray-700 cursor-pointer transition-all duration-100 ease-in hover:text-purple-600">
          Volunteer
        </span>
        <span className="text-gray-700 cursor-pointer transition-all duration-100 ease-in hover:text-purple-600">
          Organization
        </span>
        <span className="text-gray-700 cursor-pointer transition-all duration-100 ease-in hover:text-purple-600">
          About
        </span>
      </div>
      <div className="flex items-center space-x-10">
        <Link
          to="/login"
          className="border-2 border-purple-600 px-4 py-1 rounded-full"
        >
          Login
        </Link>

        <Link
          to="/signup"
          className="border border-purple-600 bg-purple-600 px-4 py-1 rounded-full text-white hover:bg-purple-700"
        >
          Signup
        </Link>
      </div>
    </nav>
  )
}

export default Nav
