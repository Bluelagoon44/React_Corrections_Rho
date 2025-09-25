import { Route, Routes } from "react-router-dom"
import Login from "./Login"
import Yolo from "./Yolo"

const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/yolo" element={<Yolo />} />
    </Routes>
  )
}
export default Router