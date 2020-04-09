import React from 'react';
import users from '../../data/users'
import { useParams } from 'react-router';
import ListaInfoCurriculo from '../../components/Curriculo/ListaInfoCurriculo'

const CurriculoParticipante = () => {

    const { participanteId } = useParams();
    const participanteList = users[0].eventos[0].participantes;
    const participante = participanteList[participanteId-1];

    return(
        <ListaInfoCurriculo participante={participante} />
    )
}

export default CurriculoParticipante;
