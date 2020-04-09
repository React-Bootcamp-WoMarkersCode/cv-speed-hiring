import React from 'react';
import ListaInfoCurriculo from '../../components/Curriculo/ListaInfoCurriculo'

const Participante = () => {
    const participante = useData(`https://speedhiring-8423b.firebaseio.com/participantes/${idEmpresa}/${idEvento}/${idParticipante}.json`);

    return(
        <ListaInfoCurriculo participante={participante} />
    )
}

export default Participante;


