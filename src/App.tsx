import { useState } from 'react'
import Consult from './components/Consult'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <Consult />
  )
}

export default App
