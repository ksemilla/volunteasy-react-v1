import { Link } from "react-router-dom"

export default function ProfileDetail2() {
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
      <div className="max-w-md m-auto mt-14 space-y-4">
        <div className="bg-purple-50 border-2 border-dashed rounded-xl cursor-pointer py-8 space-y-2">
          <div>
            <i className="fa-solid fa-plus text-3xl bg-purple-600 px-4 py-3 text-white rounded-full" />
          </div>
          <p className="text-gray-500">Add experience</p>
        </div>

        <div className="relative flex items-start">
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
