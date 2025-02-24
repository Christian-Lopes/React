import { useState } from "react";
//lista precisa definir uma chave key para o id

const ListRender = () => {
    const [list] = useState(["Christian", "Kece", "Valdeci", "Norma"])
    const [users] = useState([
        {id: 1, name:'Railana', age:50},
        {id: 2, name:'Gabriel', age:23},
        {id: 3, name:'Andreo', age:30}
    ])
    return (
        <div>
            <h2>Trabalhando com lista.</h2>
            <ul>
                {list.map((item, id) => (
                    <li key={id}>{item}</li>
                ))}
            </ul>
            <ul>
                {users.map((users) =>(
                    <li key={users.id}>{users.name}</li>
                ))}
            </ul>

        </div>
    )
}

export default ListRender;