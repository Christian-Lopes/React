import { useState } from 'react'

//components
import FristComponents from './components/FristComponent'
import TemplateExprecions from './components/TemplateExprecions'
import Event from './components/Event'
//css
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <FristComponents/>
        <TemplateExprecions/>
        <Event />
      </div>
    </>
  )
}

export default App
