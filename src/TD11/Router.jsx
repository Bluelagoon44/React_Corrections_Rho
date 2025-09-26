import { Route, Routes } from "react-router-dom"
import Login from "../TD10/Login"
import Gallery from "./Gallery"
import Detail from "./Detail"
import PrivateRoutes from "./PrivateRoutes"

const Router = () => {
  return (
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Gallery />} />
          <Route path="/gallery/:id" element={<Detail />} />
        </Route>
    </Routes>
  )
}
export default Router