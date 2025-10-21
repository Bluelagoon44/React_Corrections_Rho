import './App.css'
import { BrowserRouter } from "react-router-dom"
import ContextProvider from './TD12/ContextProvider'
import TD16 from './TD16/TD16'

function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <TD16 />
      </ContextProvider>
    </BrowserRouter>
  )
}

export default App