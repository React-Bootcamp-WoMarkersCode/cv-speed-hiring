import React from 'react';
import DadosParticipante from './DadosParticipante'

const ListaInfoCurriculo = (props) => {

    const { participante } = props;
    
    return (
        <div className="principal">
            <DadosParticipante
                nome={participante.nome}
                cargo={participante.cargo} 
                contato={participante.contato}
                email={participante.email}
                linkedin={participante.linkedin}
                github={participante.github}
                cidade={participante.cidade}
                estado={participante.estado}
                avatar={participante.avatar}
            />
        </div>
    );
}

export default ListaInfoCurriculo;