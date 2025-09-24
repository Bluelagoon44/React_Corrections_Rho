import Button from "../components/Button/Button";
import Input from "./Input"
import Radio from "./Radio"

const Form = ({inputs, state, setState, submit}) => {
    const update=(e, name, regex="")=>{
        if(e.target.value.match(regex))
            setState({...state, [name]:e.target.value})
    }

    return (
        <form onSubmit={submit}>
            {inputs.map((input)=>(
                input.type === "radio" ? <Radio key={input.name} {...input} state={state[input.name]} event={update}/> : <Input key={input.name} {...input} state={state[input.name]} event={update} />
            ))}
            <Button label="Valider" />
        </form>
    )
}

export default Form