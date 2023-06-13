import { Link } from "react-router-dom"

export default function ProfileDetail3() {
  return (
    <div className="max-w-5xl m-auto text-center mt-10">
      <p className="py-5">3 of 6</p>
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
      </div>
      <div className="max-w-lg m-auto  mt-32 flex items-center justify-between">
        <Link
          to="/signup/volunteer/profile-detail-2"
          className="inline-flex items-center gap-x-2 rounded-md bg-purple-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
        >
          <i className="fa-solid fa-chevron-left"></i>
          Back
        </Link>

        <Link
          to="/signup/volunteer/profile-detail-4"
          className="inline-flex items-center gap-x-2 rounded-md bg-purple-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
        >
          Next, add education
          <i className="fa-solid fa-chevron-right"></i>
        </Link>
      </div>
    </div>
  )
}
