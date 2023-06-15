import { Link } from "react-router-dom"
import SignupNav from "./SignupNav"

const Signup = () => {
  return (
    <div className="max-w-5xl m-auto">
      <SignupNav />
      <div className="mt-20 py-12 px-12 rounded-[100px] border border-[#8a3bc4]">
        <h1 className="text-4xl text-center font-light">
          Join as an <span className="text-purple-600">Organisation</span> or a{" "}
          <span className="text-purple-600">Volunteer</span>
        </h1>
        <div className="flex justify-center space-x-32 mt-20">
          <Link
            to="org"
            className="border border-[#8a3bc4] px-8 py-10 space-y-3 rounded-[50px] bg-white"
          >
            <div>
              <i className="fa-solid fa-magnifying-glass text-blue-500 text-4xl"></i>
            </div>
            <p className="text-3xl font-light">
              I'm an{" "}
              <span className="bg-[#8a3bc4] text-white">Organisation</span>{" "}
              looking for Volunteers
            </p>
          </Link>
          <Link
            to="volunteer"
            className="border border-[#8a3bc4] px-8 py-10 space-y-3 rounded-[50px] bg-white"
          >
            <div>
              <i className="fa-solid fa-briefcase text-blue-500 text-4xl"></i>
            </div>
            <p className="text-3xl font-light">
              I'm a <span className="bg-[#8a3bc4] text-white">Volunteer</span>{" "}
              looking for Assignments
            </p>
          </Link>
        </div>
        <div className="text-center mt-10">
          <Link to="/login">
            <span className="font-light mr-1">Already have an account?</span>
            <span className="text-purple-700 font-semibold hover:text-purple-500">
              Log in
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Signup
