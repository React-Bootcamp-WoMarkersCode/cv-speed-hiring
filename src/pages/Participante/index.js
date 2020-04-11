import React from 'react';
import { useParams } from 'react-router-dom';
import ListaInfoCurriculo from '../../components/Curriculo/ListaInfoCurriculo';
import useData from '../../hooks/useData';

const Participante = () => {
    const {empresaId, eventoId, participanteId} = useParams();
    const participante = useData(`https://speedhiring-8423b.firebaseio.com/participantes/${empresaId}/${eventoId}/${participanteId}.json`);

    return(
        <ListaInfoCurriculo participante={participante} />
    )
}

export default Participante;


