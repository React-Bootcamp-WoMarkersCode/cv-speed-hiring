import React from 'react';
import { useParams } from 'react-router';

const Participante = () => {
    const { empresaId, participanteId } = useParams();

    return(
    <h2>Participante - empresaId: {empresaId} / participanteId: {participanteId}</h2>
    )
}

export default Participante;
