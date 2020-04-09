import React from 'react';
import ListaInfoCurriculo from '../../components/Curriculo/ListaInfoCurriculo';
import useData from '../../hooks/useData';

const Participante = () => {
    const participante = useData(`https://speedhiring-8423b.firebaseio.com/participantes/0/0/0.json`);

    return(
        <ListaInfoCurriculo participante={participante} />
    )
}

export default Participante;


