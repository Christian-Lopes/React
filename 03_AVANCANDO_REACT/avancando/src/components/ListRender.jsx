import { useState } from "react";
//lista precisa definir uma chave key para o id

const ListRender = () => {
    const [list] = useState(["Christian", "Kece", "Valdeci", "Norma"])
    const [users, setUsers] = useState([
        {id: 1, name:'Railana', age:50},
        {id: 2, name:'Gabriel', age:23},
        {id: 3, name:'Andreo', age:30}
    ]);

    const [motos, setMotos] = useState([
        {id: 1, modelo:'Titan', propietario: 'Christian'},
        {id: 2, modelo:'Fazer', propietario: 'Gabriel'},
        {id: 3, modelo:'Xre 300', propietario: 'Andreo'},
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id)
        })
    };

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
            <ul>
                {motos.map((moto) => (
                    <li key={moto.id}>Modelo: {moto.modelo} dono: {moto.propietario}</li>
                ))}
            </ul>
            <button onClick={deleteRandom}>Delete users</button>

        </div>
    )
}

export default ListRender;