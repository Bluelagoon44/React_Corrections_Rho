const Radio = ({name, defaultValue, values, refs}) => {
    return (
        <>
            {values.map((value, index)=>(
                <div key={value}>
                    <label htmlFor={value}>{value}</label>
                    <input type="radio" id={value} value={value} name={name} ref={refs[index]} defaultChecked={value===defaultValue}/>
                </div>
            ))}
        </>
    )
}
export default Radio