import { Link } from "react-router-dom"
import { classNames } from "../../../utils"

export default function ProfileDetail1() {
  return (
    <div className="max-w-5xl m-auto text-center mt-6">
      <p className="py-5 text-gray-700">1 of 6</p>
      <h1 className="text-purple-600 text-4xl">Add a professonal title</h1>
      <p className="max-w-2xl m-auto mt-10 text-gray-500 text-xl font-light">
        Your first impression on organisations is crucial, so give it weight.
        Highlight your expertise with personal phrasing to standout
      </p>

      <div className="max-w-md m-auto mt-14 space-y-4">
        <label
          htmlFor="profTitle"
          className="text-2xl font-semibold text-gray-700"
        >
          Your Professional Role
        </label>
        <input
          id="profTitle"
          name="email"
          type="text"
          autoComplete="email"
          placeholder="Example: Business Analyst | Web Developer | Copy Writer"
          className={classNames(
            "block w-full rounded-md border-0 py-3 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset sm:text-xl sm:leading-6 placeholder:text-[14px]",
            false
              ? "ring-red-300 focus:ring-red-600 placeholder:text-red-400"
              : "focus:ring-purple-600 placeholder:text-gray-400"
          )}
        />
      </div>

      <div className="max-w-lg m-auto  mt-32 flex items-center justify-between">
        <Link
          to="/signup/volunteer/flow-2"
          className="inline-flex items-center gap-x-2 rounded-md px-3.5 py-2.5 text-sm font-semibold text-gray-500 border shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
        >
          <i className="fa-solid fa-chevron-left"></i>
          Back
        </Link>

        <Link
          to="/signup/volunteer/profile-detail-2"
          className="inline-flex items-center gap-x-2 rounded-md bg-purple-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
        >
          Next, work experience
          <i className="fa-solid fa-chevron-right"></i>
        </Link>
      </div>
    </div>
  )
}
