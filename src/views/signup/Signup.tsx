import { Link } from "react-router-dom"

const Signup = () => {
  return (
    <div className="max-w-5xl m-auto">
      <div className="mt-20 py-12 px-12 border border-purple-500 rounded-[100px] space-y-20">
        <h1 className="text-4xl text-center">
          Join as an <span className="text-purple-600">Organisation</span> or a{" "}
          <span className="text-purple-600">Volunteer</span>
        </h1>
        <div className="flex justify-center space-x-16">
          <Link
            to="org"
            className="border border-purple-600 p-8 rounded-[50px]"
          >
            <div>
              <i className="fa-solid fa-magnifying-glass text-blue-500 text-3xl"></i>
            </div>
            <p className="text-3xl">
              I'm an{" "}
              <span className="text-white bg-purple-600 px-2">
                Organisation
              </span>{" "}
              looking for Volunteers
            </p>
          </Link>
          <div className="border border-purple-600 p-8 rounded-[50px]">
            <div>
              <i className="fa-solid fa-briefcase text-blue-500 text-3xl"></i>
            </div>
            <p className="text-3xl">
              I'm a{" "}
              <span className="text-white bg-purple-600 px-2">Volunteer</span>{" "}
              looking for Assignments
            </p>
          </div>
        </div>
        <div className="text-center">
          <Link to="login">
            Already have an account?{" "}
            <span className="text-purple-600 font-semibold">Login</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Signup
