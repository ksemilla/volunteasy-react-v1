import { Route, Routes } from "react-router-dom"
import { Home, Signup } from "../views"
import DevNav from "../dev/Nav"
import SignupNav from "../views/signup/SignupNav"
import OrgSignup from "../views/signup/OrgSignup"
import CompleteSignup from "../views/signup/CompleteSignup"
import OrgSignupFlow1 from "../views/signup/OrgSignupFlow1"
import OrgSignupFlow2 from "../views/signup/OrgSignupFlow2"
import OrgSignupFlow3 from "../views/signup/OrgSignupFlow3"

const Router = () => {
  return (
    <Routes>
      <Route element={<DevNav />}>
        <Route path="" element={<Home />} />
        <Route path="signup" element={<SignupNav />}>
          <Route path="" element={<Signup />} />
          <Route path="org">
            <Route path="" element={<OrgSignup />} />
            <Route path="complete-signup" element={<CompleteSignup />} />
            <Route path="flow-1" element={<OrgSignupFlow1 />} />
            <Route path="flow-2" element={<OrgSignupFlow2 />} />
            <Route path="flow-3" element={<OrgSignupFlow3 />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  )
}

export default Router
