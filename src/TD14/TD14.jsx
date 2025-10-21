import { useReducer } from "react"

const initialState = {value:.5}

function reducer(state, action){
    switch(action.type){
        case "increment":
            return {...state, value : state.value+1}
        case "decrement":
            return {...state, value : state.value-1}
        case "reset":
            return {...state, value : initialState.value}
        case "pow2":
            return {...state, value : state.value**2}
        case "ceil":
            return {...state, value : Math.ceil(state.value)}
    }
}

const TD14 = () => {
    const [counter, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <p>{counter.value}</p>
            <button onClick={()=>dispatch({type:"increment"})}>Incrémenter</button>
            <button onClick={()=>dispatch({type:"decrement"})}>Décrémenter</button>
            <button onClick={()=>dispatch({type:"reset"})}>Réinitialiser</button>
            <button onClick={()=>dispatch({type:"pow2"})}>Puissance 2</button>
            <button onClick={()=>dispatch({type:"ceil"})}>Arrondir supérieur</button>
        </div>
    )
}
export default TD14