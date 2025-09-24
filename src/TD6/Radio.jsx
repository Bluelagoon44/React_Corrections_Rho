const Radio = ({name, type, values, state, event}) => {
  return (
    <>
        {values.map((value)=>(
            <div key={value}>
                <input type={type} id={value} name={name} value={value} checked={state === value} onChange={(e)=>event(e, name)}/>
                <label htmlFor={value}>{value}</label>
            </div>
        ))}
    </>
  )
}

export default Radio