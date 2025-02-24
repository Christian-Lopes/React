import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import City from './assets/pexels-tobiasbjorkli-2058728.jpg'

import ManagerData from './components/ManagerData'
import ListRender from './components/ListRender'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Trabalhando com imagens!</h1>
        <h2>Imagen na pasta public.</h2> 
        <div>
          <img src="/pexels-baskincreativeco.jpg" 
          alt="Paisagem" 
          height='600px' width='900px' />
        </div>
        <h2>Imagens na pasta assets!</h2>
        <div>
          <img src={City} alt="cidade" height='600px' width='600px'/>
        </div>
      </div>
      <h2>Trabalhando com hooks.</h2>
      <div>
        <ManagerData />
      </div>
      <div>
        <ListRender />
      </div>
    </>
  )
}

export default App
