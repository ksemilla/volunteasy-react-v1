import { Link } from "react-router-dom"
import { classNames } from "../../../utils"

const steps = [
  { name: "Basic Info", href: "/signup/org/flow-1", status: "complete" },
  { name: "Contact", href: "/signup/org/flow-2", status: "complete" },
  { name: "Details", href: "/signup/org/flow-3", status: "upcoming" },
]

const OrgSignupFlow2 = () => {
  return (
    <div className="mt-10 border border-purple-500 rounded-[50px] p-10 sm:mx-auto sm:w-full sm:max-w-3xl">
      <div className="my-4">
        <nav aria-label="Progress" className="h-[70px]">
          <ol role="list" className="flex items-center">
            {steps.map((step, stepIdx) => (
              <li
                key={step.name}
                className={classNames(
                  stepIdx !== steps.length - 1 ? "flex-1" : "",
                  "relative"
                )}
              >
                {step.status === "complete" ? (
                  <>
                    <div
                      className="absolute inset-0 flex items-center"
                      aria-hidden="true"
                    >
                      <div
                        className={classNames(
                          "h-0.5 w-full",
                          stepIdx === 0 ? "bg-purple-600" : "bg-gray-200"
                        )}
                      />
                    </div>
                    <Link
                      to={step.href}
                      className="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-purple-600 bg-purple-600 hover:bg-purple-900"
                    >
                      <span className="absolute top-10 whitespace-nowrap text-purple-500">
                        {step.name}
                      </span>
                    </Link>
                  </>
                ) : step.status === "current" ? (
                  <>
                    <div
                      className="absolute inset-0 flex items-center"
                      aria-hidden="true"
                    >
                      <div className="h-0.5 w-full bg-gray-200" />
                    </div>
                    <Link
                      to={step.href}
                      className="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-purple-600 bg-white"
                      aria-current="step"
                    >
                      <span
                        className="h-2.5 w-2.5 rounded-full bg-purple-600"
                        aria-hidden="true"
                      />
                      <span className="absolute top-10 whitespace-nowrap text-purple-500">
                        {step.name}
                      </span>
                    </Link>
                  </>
                ) : (
                  <>
                    <div
                      className="absolute inset-0 flex items-center"
                      aria-hidden="true"
                    >
                      <div className="h-0.5 w-full bg-gray-200" />
                    </div>
                    <Link
                      to={step.href}
                      className="group relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white hover:border-gray-400"
                    >
                      <span
                        className="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300"
                        aria-hidden="true"
                      />
                      <span className="absolute top-10 whitespace-nowrap text-gray-500">
                        {step.name}
                      </span>
                    </Link>
                  </>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
      <form>
        <div className="space-y-12 sm:space-y-16">
          <div className="space-y-10">
            <div className="space-y-4 pb-12 sm:pb-0">
              <div className="sm:grid sm:grid-cols-12 sm:items-start sm:gap-4">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5 sm:col-span-3"
                >
                  Address Line 1 <sup>*</sup>
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
                  Address Line 2
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
                  Address Line 3
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
                  Town <sup>*</sup>
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
                  Postcode <sup>*</sup>
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
                  Contact Name <sup>*</sup>
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
                  Contact Email <sup>*</sup>
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
                    />
                  </div>
                </div>
              </div>{" "}
              <div className="sm:grid sm:grid-cols-12 sm:items-start sm:gap-4">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5 sm:col-span-3"
                >
                  Phone Number <sup>*</sup>
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
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <Link
            to="/signup/org/flow-1"
            className="inline-flex items-center gap-x-2 rounded-md bg-purple-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
          >
            <i className="fa-solid fa-chevron-left"></i>
            Back
          </Link>

          <Link
            to="/signup/org/flow-3"
            className="inline-flex items-center gap-x-2 rounded-md bg-purple-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
          >
            Next
            <i className="fa-solid fa-chevron-right"></i>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default OrgSignupFlow2
