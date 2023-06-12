import { Route, Routes } from "react-router-dom"
import { Home, Signup } from "../views"
import DevNav from "../dev/Nav"

const Router = () => {
  return (
    <Routes>
      <Route element={<DevNav />}>
        <Route path="" element={<Home />} />
        <Route path="signup" element={<Signup />} />
      </Route>
    </Routes>
  )
}

export default Router
