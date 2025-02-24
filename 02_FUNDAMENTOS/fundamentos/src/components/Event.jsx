const Event = () => {
    const handleMyEvent = (e) => {
        console.log(e);
        console.log("Ativou o evento!");
    };
    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui</button>
            </div>
            <div>
                <button onClick={() => console.log("Vc clicou!")}>
                    clique 2
                </button>
            </div>
        </div>
    )
}

export default Event;