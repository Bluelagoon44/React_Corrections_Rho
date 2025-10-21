import './App.css'
import { BrowserRouter } from "react-router-dom"
import ContextProvider from './TD12/ContextProvider'
import TD15 from './TD15/TD15'
import Register from './TD15_bis/Register'

function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Register />
      </ContextProvider>
    </BrowserRouter>
  )
}

export default App