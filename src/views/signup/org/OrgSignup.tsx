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
    <div className="mt-10 border border-purple-500 rounded-[50px] p-10 sm:mx-auto sm:w-full sm:max-w-3xl">
      <h1 className="text-purple-600 text-4xl text-center">Get in touch!</h1>
      <p className="max-w-2xl m-auto mt-10 text-gray-500 text-xl font-light">
        If you have any questions, would like a demo, or would like to sign up,
        simply just fill up your details below. Found &/or CEO will be in touch.
      </p>
      <div className="mt-10">
        <form>
          <div className="space-y-12 sm:space-y-16">
            <div className="space-y-10">
              <div className="space-y-4 pb-12 sm:pb-0">
                <div className="sm:grid sm:grid-cols-12 sm:items-start sm:gap-4">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5 sm:col-span-3"
                  >
                    Full name
                  </label>
                  <div className="mt-2 sm:col-span-9 sm:mt-0">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-purple-600">
                      <input
                        type="text"
                        name="username"
                        id="username"
                        autoComplete="username"
                        className="w-full block flex-1 border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>

                <div className="sm:grid sm:grid-cols-12 sm:items-start sm:gap-4">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5 sm:col-span-3"
                  >
                    Email Address
                  </label>
                  <div className="mt-2 sm:col-span-9 sm:mt-0">
                    <div className="relative rounded-md shadow-sm">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <i className="fa-solid fa-envelope text-gray-500"></i>
                      </div>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                        placeholder="example@gmail.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="sm:grid sm:grid-cols-12 sm:items-start sm:gap-4">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5 sm:col-span-3"
                  >
                    Organisation name
                  </label>
                  <div className="mt-2 sm:col-span-9 sm:mt-0">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-purple-600">
                      <input
                        type="text"
                        name="username"
                        id="username"
                        autoComplete="username"
                        className="w-full block flex-1 border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>

                <div className="sm:grid sm:grid-cols-12 sm:items-start sm:gap-4">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5 sm:col-span-3"
                  >
                    Job title
                  </label>
                  <div className="mt-2 sm:col-span-9 sm:mt-0">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-purple-600">
                      <input
                        type="text"
                        name="username"
                        id="username"
                        autoComplete="username"
                        className="w-full block flex-1 border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>

                <div className="sm:grid sm:grid-cols-12 sm:items-start sm:gap-4">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5 sm:col-span-3"
                  >
                    Phone number
                  </label>
                  <div className="mt-2 sm:col-span-9 sm:mt-0">
                    <div className="relative rounded-md shadow-sm">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <i className="fa-solid fa-phone text-gray-500"></i>
                      </div>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="max-w-md m-auto relative flex items-start">
                <div className="flex h-6 items-center">
                  <input
                    id="comments"
                    aria-describedby="comments-description"
                    name="comments"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-600"
                  />
                </div>
                <div className="ml-3 text-sm leading-6">
                  <span id="comments-description" className="text-gray-500">
                    Receive exciting news and updates from Volunteasy
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center">
            <button
              type="button"
              onClick={() => navigate("complete-signup")}
              className="px-6 py-3 text-white font-light rounded-full bg-purple-600 hover:bg-purple-700"
            >
              Get In Touch
            </button>
          </div>
        </form>
      </div>
    </div>
  )

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
