import { useState } from "react"
import { globalContext } from "./store"

const ContextProvider = ({children}) => {
    const [store, setStore] = useState({
        theme:"light",
        lang:"fr"
    })

    return (
        <globalContext.Provider value={{store, setStore}}>
            {children}
        </globalContext.Provider>
    )
}
export default ContextProvider