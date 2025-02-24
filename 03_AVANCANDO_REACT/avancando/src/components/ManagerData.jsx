import { useState } from "react";

const ManagerData = () => {
    //sem o hooks ele não muda o valor.
    let someData = 10;

    //com o hook ele mudar o valor da váriavel
    const [number, setNumber] = useState(20);
    return (
        <div>
            <div>
                <h3>Sem o hook.</h3>
                <p>Valor: {someData}</p>
                <button onClick={() => {someData = 15}}>Mudar de valor.</button>
            </div>
            <div>
                <h3>Com o hook.</h3>
                <p>Valor: {number}</p>
                <button onClick={() => setNumber(40)}>Mudar de valor.</button>
            </div>

        </div>

    )
}
export default ManagerData;