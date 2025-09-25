import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Experiences from "./pages/Experiences"
import About from "./pages/About"
import Error from "./pages/Error"

const RouterTd9 = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/experiences" element={<Experiences />}/>
        <Route path="/about" element={<About />}/>
        <Route path="*" element={<Error />} />
    </Routes>
  )
}
export default RouterTd9