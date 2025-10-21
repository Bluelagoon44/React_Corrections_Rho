const Input = ({name, type, placeholder, ref}) => {
  return (
    <input type={type} name={name} ref={ref} placeholder={placeholder} />
  )
}
export default Input