import { Link } from "react-router-dom"

export default function ProfileDetail6() {
  return (
    <div className="max-w-5xl m-auto text-center mt-10">
      <p className="py-5">6 of 6</p>
      <h1 className="text-purple-600 text-4xl">
        Tell the world about yourself!
      </h1>
      <p className="max-w-2xl m-auto mt-10 text-gray-500 text-xl font-light">
        Help organisations get to know you at a glance. Be clear and concise to
        stand out the best!
      </p>

      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full bg-gray-600 inline-flex w-20 h-20 justify-center items-end overflow-hidden">
          <i className="fa-solid fa-user text-gray-200 text-7xl"></i>
        </div>
        <button className="border border-purple-600 px-5 py-2 rounded-full text-purple-600 space-x-4 hover:bg-purple-600 hover:text-white">
          <i className="fa-solid fa-plus" />
          <span>Upload Photo</span>
        </button>
      </div>

      <div className="max-w-md m-auto mt-8 space-y-4">
        <div>
          <label
            htmlFor="username"
            className="block text-sm text-left font-medium leading-6 text-gray-900"
          >
            Biography
          </label>
          <div className="">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-purple-600">
              <textarea
                name="username"
                id="username"
                autoComplete="username"
                className="block w-full flex-1 border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                rows={5}
                placeholder="Tell us about your project"
              />
            </div>
          </div>
        </div>
        <div>
          <label
            htmlFor="username"
            className="block text-sm text-left font-medium leading-6 text-gray-900"
          >
            Where are you based?
          </label>
          <div className="grid sm:grid-cols-2 gap-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-purple-600">
              <input
                type="text"
                name="username"
                id="username"
                autoComplete="username"
                className="block w-full flex-1 border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="Example: London"
              />
            </div>
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-purple-600">
              <input
                type="text"
                name="username"
                id="username"
                autoComplete="username"
                className="block w-full flex-1 border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="United Kingdom"
              />
            </div>
          </div>
        </div>
        <div className="">
          <label
            htmlFor="username"
            className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5 text-left"
          >
            LinkedIn
          </label>
          <div className="">
            <div className="relative rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <i className="fa-brands fa-linkedin text-gray-500"></i>
              </div>
              <input
                type="email"
                name="email"
                id="email"
                className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                placeholder="Copy a link to your LinkedIn profile here"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-lg m-auto  mt-32 flex items-center justify-between">
        <Link
          to="/signup/volunteer/flow-2"
          className="inline-flex items-center gap-x-2 rounded-md bg-purple-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
        >
          <i className="fa-solid fa-chevron-left"></i>
          Back
        </Link>

        <Link
          to="/signup/volunteer/profile-detail-2"
          className="inline-flex items-center gap-x-2 rounded-md bg-purple-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
        >
          Done
        </Link>
      </div>
    </div>
  )
}
