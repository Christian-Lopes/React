import React, { useState } from 'react'

export const ConditionalRender = () => {
    const [x] = useState(false);

    const [name] = useState("Christian");

  return (
    <div>
        <h1>Isso será exibido?</h1>
        {x && <p>Se x for true, sim!</p>}
        {!x && <p>Agora o x e falso!</p>}

        <h1>If ternário.</h1>
        {name === "Christia" ? (
            <div>
                <p>O nome é {name}.</p>
            </div>
        ) : (
            <div>
                <p>O nome não foi encontrado.</p>
            </div>
        )}
    </div>
  )
}
