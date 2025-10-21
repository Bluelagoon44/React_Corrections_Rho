import { useRef, useState } from "react"
import Modal from "../TD6/Modal"
import Form from "./Form"
import { register } from "../utils/register"

const Register = () => {
  const genreM = useRef(null)
  const genreF = useRef(null)
  const firstName = useRef(null)
  const lastName = useRef(null)
  const mail = useRef(null)
  const birthday = useRef(null)
  const zipCode = useRef(null)
  const city = useRef(null)

  const [isOpen, setIsOpen] = useState(false)
  const close = ()=>{
    setIsOpen(false)
  }

  const submit = (e)=>{
    e.preventDefault()
    if(firstName.current.value.match(/^[A-z]*$/)
      && lastName.current.value.match(/^[A-z]*$/)
      && mail.current.value.match(/^[A-z@]*$/)
      && zipCode.current.value.match(/^[0-9]{5}$/)
      && city.current.value.match(/^[A-z]*$/)
    )
      setIsOpen(true)
  }

  return (
    <>
      <Form inputs={register} refs={{genre:[genreM, genreF], firstName, lastName, mail, birthday, zipCode, city}} submit={submit}/>
      {isOpen && 
        <Modal title="Formulaire d'inscription" close={close}>
          {
            Object.entries({genre:genreM.current.checked ? genreM : genreF, firstName, lastName, mail, birthday, zipCode, city}).map(([key, ref])=>(
              <p>{`${key} : ${ref.current.value}`}</p>
            ))
          }
        </Modal>
      }
    </>
  )
}

export default Register