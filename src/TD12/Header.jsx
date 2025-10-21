import { useContext } from "react"
import { Outlet } from "react-router-dom"
import { globalContext } from "./store"

const Header = ({children}) => {
    const {store, setStore} = useContext(globalContext)
    const setDarkMode = ()=>setStore({...store, theme:"dark"})
    const setLightMode = ()=>setStore({...store, theme:"light"})
    const setFr = ()=>setStore({...store, lang:"fr"})
    const setEn = ()=>setStore({...store, lang:"en"})

    return (
        <>
            <ul>
                <li>
                    <button onClick={setDarkMode}>Dark mode</button>
                </li>
                <li>
                    <button onClick={setLightMode}>Light mode</button>
                </li>
                <li>
                    <button onClick={setFr}>FR</button>
                </li>
                <li>
                    <button onClick={setEn}>EN</button>
                </li>
            </ul>
            <main>
                {children}
            </main>
        </>
    )
}
export default Header