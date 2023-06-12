import { Outlet } from "react-router-dom"

const SignupNav = () => {
  return (
    <div>
      <div className="flex justify-center border-b border-gray-100">
        <div className="py-4">
          <img src="./logo3.png" width={200} />
        </div>
      </div>
      <Outlet />
    </div>
  )
}

export default SignupNav
