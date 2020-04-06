import React from 'react';
import { useParams } from 'react-router';

const CurriculoParticipane = () => {
    const { empresaId } = useParams();

    return(
        <h2>curriculo - empresaId: {empresaId}</h2>
    )
}

export default CurriculoParticipane;
