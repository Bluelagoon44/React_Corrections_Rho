import './App.css'
import { BrowserRouter } from "react-router-dom"
import ContextProvider from './TD12/ContextProvider'
import Header from './TD12/Header'
import TD14 from './TD14/TD14'

function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <TD14 />
      </ContextProvider>
    </BrowserRouter>
  )
}

export default App