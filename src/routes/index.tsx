import { Route, Routes } from "react-router-dom"
import { Home, Signup } from "../views"
import DevNav from "../dev/Nav"
import SignupNav from "../views/signup/SignupNav"
import OrgSignup from "../views/signup/org/OrgSignup"
import CompleteSignup from "../views/signup/org/CompleteSignup"
import OrgSignupFlow1 from "../views/signup/org/OrgSignupFlow1"
import OrgSignupFlow2 from "../views/signup/org/OrgSignupFlow2"
import OrgSignupFlow3 from "../views/signup/org/OrgSignupFlow3"
import VerifyEmail from "../views/signup/org/VerifyEmail"
import VolunteerSignup from "../views/signup/volunteer/VolunteerSignup"
import VolunteerCompleteSignup from "../views/signup/volunteer/VolunteerCompleteSignup"
import VolunteerVerifyEmail from "../views/signup/volunteer/VolunteerVerifyEmail"
import VolunteerSignupFlow1 from "../views/signup/volunteer/VolunteerSignupFlow1"
import VolunteerSignupNav from "../views/signup/volunteer/VolunteerSignupNav"
import VolunteerSignupFlow2 from "../views/signup/volunteer/VolunteerSignupFlow2"
import ProfileDetail1 from "../views/signup/volunteer/ProfileDetail1"
import ProfileDetail2 from "../views/signup/volunteer/ProfileDetail2"
import ProfileDetail3 from "../views/signup/volunteer/ProfileDetail3"

const Router = () => {
  return (
    <Routes>
      <Route element={<DevNav />}>
        <Route path="" element={<Home />} />
        <Route path="signup">
          <Route path="" element={<Signup />} />
          <Route path="org" element={<SignupNav />}>
            <Route path="" element={<OrgSignup />} />
            <Route path="complete-signup" element={<CompleteSignup />} />
            <Route path="verify-email" element={<VerifyEmail />} />
            <Route path="flow-1" element={<OrgSignupFlow1 />} />
            <Route path="flow-2" element={<OrgSignupFlow2 />} />
            <Route path="flow-3" element={<OrgSignupFlow3 />} />
          </Route>
          <Route path="volunteer">
            <Route element={<SignupNav />}>
              <Route path="" element={<VolunteerSignup />} />
              <Route
                path="complete-signup"
                element={<VolunteerCompleteSignup />}
              />
              <Route path="verify-email" element={<VolunteerVerifyEmail />} />
            </Route>
            <Route element={<VolunteerSignupNav />}>
              <Route path="flow-1" element={<VolunteerSignupFlow1 />} />
              <Route path="flow-2" element={<VolunteerSignupFlow2 />} />
              <Route path="profile-detail-1" element={<ProfileDetail1 />} />
              <Route path="profile-detail-2" element={<ProfileDetail2 />} />
              <Route path="profile-detail-3" element={<ProfileDetail3 />} />
            </Route>
          </Route>
        </Route>
      </Route>
    </Routes>
  )
}

export default Router
