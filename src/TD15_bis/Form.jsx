import Input from "./Input"
import Radio from "./Radio"

const Form = ({inputs, refs, submit}) => {
  return (
    <form onSubmit={submit}>
        {inputs.map((input)=>(
            input.type==="radio" ? <Radio {...input} refs={refs[input.name]} key={input.id} /> : <Input {...input} ref={refs[input.name]} key={input.id} />
        ))}
        <button>Valider</button>
    </form>
  )
}
export default Form