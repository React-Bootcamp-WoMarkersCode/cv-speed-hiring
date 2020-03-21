import React from 'react';
import { useParams } from 'react-router';

const Evento = () => {
    const { empresaId } = useParams();

    return(
        <h2>Evento - empresaId: {empresaId}</h2>
    )
}

export default Evento;
