import { useForm } from "react-hook-form"
import { classNames } from "../../utils"
import { Link, useNavigate } from "react-router-dom"

const CompleteSignup = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = handleSubmit((_data) => {
    navigate("/signup/org/verify-email")
  })

  return (
    <div className="mt-10 border border-purple-500 rounded-[50px] p-10 sm:mx-auto sm:w-full sm:max-w-md">
      <h1 className="my-4 text-center text-2xl font-semibold text-gray-700">
        Complete Sign Up
      </h1>
      <form className="space-y-6" onSubmit={onSubmit}>
        <div>
          <div className="mt-2">
            <input
              {...register("firstName", { required: true })}
              id="firstName"
              name="firstName"
              type="text"
              autoComplete="firstName"
              placeholder="First Name"
              className={classNames(
                "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6",
                errors?.firstName
                  ? "ring-red-300 focus:ring-red-600 placeholder:text-red-400"
                  : "focus:ring-purple-600 placeholder:text-gray-400"
              )}
            />
          </div>
          <div className="mt-4">
            <input
              {...register("lastName", { required: true })}
              id="lastName"
              name="lastName"
              type="text"
              autoComplete="lastName"
              placeholder="Last Name"
              className={classNames(
                "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6",
                errors?.lastName
                  ? "ring-red-300 focus:ring-red-600 placeholder:text-red-400"
                  : "focus:ring-purple-600 placeholder:text-gray-400"
              )}
            />
          </div>
          <div className="mt-4">
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                {...register("password", { required: true })}
                type="password"
                name="password"
                id="password"
                className={classNames(
                  "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6",
                  errors?.password
                    ? "ring-red-300 focus:ring-red-600 placeholder:text-red-400"
                    : "focus:ring-purple-600 placeholder:text-gray-400"
                )}
                placeholder="Create Password"
              />
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <i className="fa-solid fa-eye-slash"></i>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                {...register("confirmPassword", { required: true })}
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm Password"
                className={classNames(
                  "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6",
                  errors?.confirmPassword
                    ? "ring-red-300 focus:ring-red-600 placeholder:text-red-400"
                    : "focus:ring-purple-600 placeholder:text-gray-400"
                )}
              />
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <i className="fa-solid fa-eye-slash"></i>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-gray-500">
          By clicking Sign Up, you agree <br />
          to <span className="text-purple-600 font-semibold">
            Terms of Use
          </span>{" "}
          and{" "}
          <span className="text-purple-600 font-semibold">Privacy Policy</span>
        </p>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-purple-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
          >
            Signup
          </button>
        </div>
      </form>

      <p className="mt-10 text-center text-sm text-gray-500">
        Already have an account?{" "}
        <Link
          to="/login"
          className="font-semibold leading-6 text-purple-600 hover:text-purple-500"
        >
          Login
        </Link>
      </p>
    </div>
  )
}

export default CompleteSignup
