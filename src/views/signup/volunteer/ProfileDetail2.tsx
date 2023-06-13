import { useState } from "react"
import { Link } from "react-router-dom"

export default function ProfileDetail2() {
  const [showInput, setShowInput] = useState(false)

  return (
    <div className="max-w-5xl m-auto text-center mt-10">
      <p className="py-5">2 of 6</p>
      <h1 className="text-purple-600 text-4xl">
        Add any work experience you may have
      </h1>
      <p className="max-w-2xl m-auto mt-10 text-gray-500 text-xl font-light">
        Your experience will be visible on your profile for organisations to
        view
      </p>
      <div className="mt-14 space-y-4">
        {!showInput ? (
          <div
            onClick={() => setShowInput(true)}
            className="max-w-md m-auto bg-purple-50 border-2 border-dashed rounded-xl cursor-pointer py-8 space-y-2"
          >
            <div>
              <i className="fa-solid fa-plus text-3xl bg-purple-600 px-4 py-3 text-white rounded-full" />
            </div>
            <p className="text-gray-500">Add experience</p>
          </div>
        ) : (
          <div className="max-w-2xl m-auto border border-purple-600 rounded-xl divide-y divide-purple-600">
            <h1 className="text-2xl text-purple-600 py-4">
              Add work experience
            </h1>
            <div className="px-20 py-10 space-y-2">
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm text-left font-medium leading-6 text-gray-900"
                >
                  Title
                </label>
                <div className="">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-purple-600">
                    <input
                      type="text"
                      name="username"
                      id="username"
                      autoComplete="username"
                      className="block w-full flex-1 border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="Example: Business Analyst | Web Developer | Copy Writer"
                    />
                  </div>
                </div>
              </div>
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm text-left font-medium leading-6 text-gray-900"
                >
                  Company
                </label>
                <div className="">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-purple-600">
                    <input
                      type="text"
                      name="username"
                      id="username"
                      autoComplete="username"
                      className="block w-full flex-1 border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm text-left font-medium leading-6 text-gray-900"
                >
                  Location
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
              <div className="grid gap-2 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="username"
                    className="block text-sm text-left font-medium leading-6 text-gray-900"
                  >
                    Start Date
                  </label>
                  <div className="">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-purple-600">
                      <input
                        type="month"
                        name="username"
                        id="username"
                        autoComplete="username"
                        className="block w-full flex-1 border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="username"
                    className="block text-sm text-left font-medium leading-6 text-gray-900"
                  >
                    End Date
                  </label>
                  <div className="">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-purple-600">
                      <input
                        type="month"
                        name="username"
                        id="username"
                        autoComplete="username"
                        className="block w-full flex-1 border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm text-left font-medium leading-6 text-gray-900"
                >
                  Description
                </label>
                <div className="">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-purple-600">
                    <textarea
                      name="username"
                      id="username"
                      autoComplete="username"
                      className="block w-full flex-1 border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      rows={5}
                    />
                  </div>
                </div>
              </div>
              <div className="pt-10">
                <button className="text-white text-xl px-10 py-3 bg-purple-600 hover:br-purple-700 rounded-full">
                  Save
                </button>
              </div>
            </div>
          </div>
        )}

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
              Nothing to add? Check the box and keep going
            </span>
          </div>
        </div>
      </div>
      <div className="max-w-lg m-auto  mt-32 flex items-center justify-between">
        <Link
          to="/signup/volunteer/profile-detail-1"
          className="inline-flex items-center gap-x-2 rounded-md bg-purple-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
        >
          <i className="fa-solid fa-chevron-left"></i>
          Back
        </Link>

        <Link
          to="/signup/volunteer/profile-detail-3"
          className="inline-flex items-center gap-x-2 rounded-md bg-purple-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
        >
          Next, add education
          <i className="fa-solid fa-chevron-right"></i>
        </Link>
      </div>
    </div>
  )
}
