const Nav = () => {
  return (
    <nav className="py-4 flex items-center justify-between space-x-10 font-medium border-b border-gray-100">
      <div className="flex items-center space-x-10">
        <img src="./logo1.png" alt="logo" width="100" />
        <span>Volunteer</span>
        <span>Organization</span>
        <span>About</span>
      </div>
      <div className="flex items-center space-x-10">
        <button className="border-2 border-purple-600 px-4 py-1 rounded-full">
          Login
        </button>
        <button className="border border-purple-600 bg-purple-600 px-4 py-1 rounded-full text-white hover:bg-purple-700">
          Signup
        </button>
      </div>
    </nav>
  )
}

export default Nav
