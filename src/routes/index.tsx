import { Route, Routes } from "react-router-dom"
import { Home, Signup } from "../views"
import DevNav from "../dev/Nav"
import SignupNav from "../views/signup/SignupNav"
import OrgSignup from "../views/signup/org/OrgSignup"
import CompleteSignup from "../views/signup/org/CompleteSignup"
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
import ProfileDetail4 from "../views/signup/volunteer/ProfileDetail4"
import ProfileDetail5 from "../views/signup/volunteer/ProfileDetail5"
import ProfileDetail6 from "../views/signup/volunteer/ProfileDetail6"
import OrgDashboard from "../views/dashboards/org/OrgDashboard"
import VolunteerDashboard from "../views/dashboards/volunteer/VolunteerDashboard"
import Login from "../views/login/Login"
import OrgSignupFlow from "../views/signup/org/OrgSignupFlow"

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
            <Route path="flow" element={<OrgSignupFlow />} />
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
              <Route path="profile-detail-4" element={<ProfileDetail4 />} />
              <Route path="profile-detail-5" element={<ProfileDetail5 />} />
              <Route path="profile-detail-6" element={<ProfileDetail6 />} />
            </Route>
          </Route>
        </Route>
        <Route path="dashboard">
          <Route path="org" element={<OrgDashboard />} />
          <Route path="volunteer" element={<VolunteerDashboard />} />
        </Route>
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  )
}

export default Router
