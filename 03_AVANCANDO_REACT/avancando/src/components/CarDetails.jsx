import React from 'react'

const CarDetails = ({brand, km, color}) => {
  return (
    <div>
        <h1>Destruturando Prosp.</h1>
        <h2>Detalhes do carro.</h2>
        <ul>
            <li>Marca: {brand}</li>
            <li>KM: {km}</li>
            <li>Cor: {color}</li>
        </ul>
    </div>
  )
}

export default CarDetails