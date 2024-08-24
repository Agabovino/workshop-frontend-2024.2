const AgentCard = (nome, classe, descrição, foto) =>{
    return(
        <div>
            <img src={foto} alt="" />
            <div>
                <h3>Nome:{nome}</h3>
                <p>Classe:{classe}</p>
                <p>Descrição:{descrição}</p>
            </div>


        </div>
    );
}

export default AgentCard;