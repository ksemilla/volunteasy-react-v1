import { useNavigate } from "react-router-dom"

export default function VolunteerSignupFlow1() {
  const navigate = useNavigate()
  return (
    <div className="max-w-6xl m-auto mt-20 text-center space-y-20">
      <p className="text-center text-4xl text-purple-600">
        Hey Name. <br />
        Ready to make an impact?
      </p>

      <button
        onClick={() => navigate("/signup/volunteer/flow-2")}
        className="bg-purple-600 text-white hover:bg-purple-700 text-4xl rounded-full px-10 py-8"
      >
        Build my Profile
      </button>
    </div>
  )
}
