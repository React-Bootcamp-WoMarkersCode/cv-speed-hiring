import React from 'react';
import { useParams } from 'react-router';

const Participantes = () => {
    const { empresaId } = useParams();

    return(
    <h2>Participantes - empresaId: {empresaId}</h2>
    )
}

export default Participantes;
