import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { classNames } from "../../../utils"

export default function OrgSignup() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string }>()

  const onSubmit = handleSubmit(() => {
    navigate("complete-signup")
  })

  return (
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="space-y-4 sm:mx-auto sm:w-full sm:max-w-sm">
          <h1 className="my-4 text-center text-2xl font-semibold text-gray-700">
            Create Free Account
          </h1>

          <button
            type="button"
            className="w-full inline-flex items-center gap-x-2 border text-gray-700 rounded-md px-3.5 py-2.5 text-sm font-semibold  shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <i className="fa-brands fa-google text-xl"></i>
            Continue with Google
          </button>
          <button
            type="button"
            className="w-full inline-flex items-center gap-x-2 border text-gray-700 rounded-md px-3.5 py-2.5 text-sm font-semibold  shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <i className="fa-brands fa-linkedin text-xl"></i>
            Continue with Linkedin
          </button>
        </div>

        <br />

        <div className="relative sm:mx-auto sm:w-full sm:max-w-sm">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-gray-200" />
          </div>
          <div className="relative flex justify-center text-sm font-medium leading-6">
            <span className="bg-white px-6 text-gray-900">or</span>
          </div>
        </div>

        <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={onSubmit}>
            <div>
              <div className="mt-2">
                <input
                  {...register("email", { required: true })}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Enter your Email"
                  className={classNames(
                    "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6",
                    errors?.email
                      ? "ring-red-300 focus:ring-red-600 placeholder:text-red-400"
                      : "focus:ring-purple-600 placeholder:text-gray-400"
                  )}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-purple-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
              >
                Continue
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
      </div>
    </div>
  )
}
