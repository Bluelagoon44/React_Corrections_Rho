import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const token = sessionStorage.getItem("token")
  
  if(token)
    return (
      <Outlet />
    )
  else return <Navigate to="/login" />

}
export default PrivateRoutes