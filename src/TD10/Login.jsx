import { useState } from "react"
import Form from "../TD6/Form"
import { login, users } from "../utils/login"
import { getToken } from "../services/login"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const [loginData, setLoginData] = useState({
        email:"",
        password:""
    })
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault()
        users.forEach(async (user)=>{
            if(user.email === loginData.email && user.password === loginData.password){
                setError(null)
                getToken().then((result)=>{
                    if(result.ok)
                        return result.json()
                    else
                        setError("Erreur lors de la récupération du token...")
                })
                .then((tokenResult)=>{
                    sessionStorage.setItem("token",tokenResult.request_token)
                    navigate("/")                 
                })
                return;
            }
            else{
                setError("Pas token!");
            }
        })
    }

    return (
        <div>
            <Form inputs={login} state={loginData} setState={setLoginData} submit={handleSubmit}/>
            {error && <p>{error}</p>}
        </div>
    )
}
export default Login