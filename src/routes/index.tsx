import { Route, Routes } from "react-router-dom"
import { Home } from "../views"
import DevNav from "../dev/Nav"

const Router = () => {
  return (
    <Routes>
      <Route element={<DevNav />}>
        <Route path="" element={<Home />} />
      </Route>
    </Routes>
  )
}

export default Router
