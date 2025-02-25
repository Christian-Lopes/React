import React from 'react'

const ShowUserName = (props) => {
  return (
    <div>
        <h1>Trabalhando Props.</h1>
        <h2>O nome do usuário: {props.name}</h2>
    </div>
  )
}

export default ShowUserName