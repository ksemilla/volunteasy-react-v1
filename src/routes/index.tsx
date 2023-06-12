import { Route, Routes } from "react-router-dom"
import { Home, Signup } from "../views"
import DevNav from "../dev/Nav"
import SignupNav from "../views/signup/SignupNav"
import OrgSignup from "../views/signup/OrgSignup"
import CompleteSignup from "../views/signup/CompleteSignup"

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
          </Route>
        </Route>
      </Route>
    </Routes>
  )
}

export default Router
