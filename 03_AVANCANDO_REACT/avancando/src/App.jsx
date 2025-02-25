import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import City from './assets/pexels-tobiasbjorkli-2058728.jpg'

import ManagerData from './components/ManagerData'
import ListRender from './components/ListRender'
import { ConditionalRender } from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'
import Fragmento from './components/Fragmento'
import Container from './components/Container'
import ExecuteFunction from './components/ExecuteFunction'
import Message from './components/Message'
import ChangeMessage from './components/ChangeMessage'

function App() {
  //const [count, setCount] = useState(0)

  const cars = [
    {id: 1, brand:"Ferrari", color:"Vermelha"},
    {id: 2, brand:"MClaren", color:"Cinza"},
    {id: 3, brand:"Lotus", color:"Branca"},
  ]

  function showMessage(){
    console.log("Evento do componente pai.");
  }

  const [message, setMesage] = useState("");

  const handleMessage = (msg) => {
    setMesage(msg);
  }

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
      <div>
        <h2>Renderização condicional.</h2>
        <ConditionalRender />
      </div>
      <div>
        <ShowUserName name="Christian"/>
      </div>
      <div>
        <CarDetails brand="VW" km={10000} color="Azul" />
      </div>
      <div>
        <CarDetails brand="Fiat" km={50000} color="Azul" />
      </div>
      <div>
        <CarDetails brand="Ferrari" km={10000} color="vermelha" />
      </div>
      <div>
        <h2>Loop com array de objetos.</h2>
        {cars.map((car) => (
          <CarDetails key={car.id} brand={car.brand} km={car.km} color={car.color}/>
        ))}
      </div>
      <Fragmento />
        <div>
        <Container >
          <p>Ele me agrega ao componente</p>
        </Container>
        </div>
        <div>
        <Container myValue="testing">
          <h2>Ele me agrega ao componente</h2>
        </Container>
        <Container myValue="testing2">
          <h2>Ele me agrega ao componente</h2>
        </Container>
        </div>
        <ExecuteFunction myFunction={showMessage}/>

        <Message msg={message}/>
        <ChangeMessage handleMessage={handleMessage} />
    </>
  )
}

export default App
