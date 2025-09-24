const Input = ({name, type, regex, placeholder, state, event}) => {
  return (
    <input type={type} name={name} placeholder={placeholder} value={state} onChange={(e)=>event(e, name, regex)}/>
  )
}

export default Input