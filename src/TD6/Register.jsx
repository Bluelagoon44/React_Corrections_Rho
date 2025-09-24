import { useState } from "react"
import { register } from "../utils/register"
import Form from "./Form"
import Modal from "./Modal"

const Register = () => {
  const [values, setValues] = useState({
    genre:"H",
    firstName:"",
    lastName:"",
    mail:"",
    birthday:"",
    zipCode:"",
    city:""
  })

  const [isOpen, setIsOpen] = useState(false)
  const close = ()=>{
    setIsOpen(false)
  }
  const open = (e)=>{
    e.preventDefault();
    setIsOpen(true)
  }

  return (
    <>
      <Form inputs={register} state={values} setState={setValues} submit={open}/>
      {isOpen && 
        <Modal title="Formulaire d'inscription" close={close}>
          {
            Object.entries(values).map(([key, value])=>(
              <p>{`${key} : ${value}`}</p>
            ))
          }
        </Modal>
      }
    </>
  )
}

export default Register