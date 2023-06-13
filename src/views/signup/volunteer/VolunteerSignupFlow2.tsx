import { useNavigate } from "react-router-dom"

export default function VolunteerSignupFlow2() {
  const navigate = useNavigate()
  return (
    <div className="max-w-5xl m-auto text-center mt-10">
      <h1 className="text-purple-600 text-4xl">
        How would you like to introduce yourself?
      </h1>
      <p className="max-w-2xl m-auto mt-10 text-gray-500 text-xl font-light">
        To gain an understanding of your educational background, work
        experience, and skill set, we suggest importing your information, as it
        is the fastest method. You will have the opportunity to review and
        modify it before your profile is made public.
      </p>
      <div className="mt-20 max-w-2xl m-auto space-y-4">
        <button className="text-3xl border border-purple-600 text-gray-700 rounded-full w-full py-6 hover:text-white hover:bg-purple-600">
          <i className="fa-brands fa-linkedin mr-4"></i>
          Import from Linkedin
        </button>
        <button className="text-3xl border border-purple-600 text-gray-700 rounded-full w-full py-6 hover:text-white hover:bg-purple-600">
          <i className="fa-solid fa-upload mr-4"></i>
          Upload your CV
        </button>
        <button
          onClick={() => navigate("/signup/volunteer/profile-detail-1")}
          className="text-3xl border border-purple-600 text-gray-700 rounded-full w-full py-6 hover:text-white hover:bg-purple-600"
        >
          <i className="fa-solid fa-pen mr-4"></i>
          Fill out manually
        </button>
      </div>
    </div>
  )
}
