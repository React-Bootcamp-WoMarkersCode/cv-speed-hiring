import React from 'react';
import { useParams } from 'react-router';
import ListaInfoCurriculo from '../../components/Curriculo/ListaInfoCurriculo';
import useData from '../../hooks/useData';

const Participante = () => {
    const {empresaId, eventoId, participanteId, experienciaId} = useParams();
    const participante = useData(`https://speedhiring-8423b.firebaseio.com/participantes/${empresaId}/${eventoId}/${participanteId}.json`);
    const resumoProfissional = useData(`https://speedhiring-8423b.firebaseio.com/participantes/${empresaId}/${eventoId}/${participanteId}/curriculo/resumoProfissional.json`);
    const objetivo = useData(`https://speedhiring-8423b.firebaseio.com/participantes/${empresaId}/${eventoId}/${participanteId}/curriculo/objetivo.json`);
    const habilidades = useData(`https://speedhiring-8423b.firebaseio.com/participantes/${empresaId}/${eventoId}/${participanteId}/curriculo/habilidades.json`);
    const experiencia = useData(`https://speedhiring-8423b.firebaseio.com/participantes/${empresaId}/${eventoId}/${participanteId}/curriculo/experiencias/0.json`);
    const formacao = useData(`https://speedhiring-8423b.firebaseio.com/participantes/${empresaId}/${eventoId}/${participanteId}/curriculo/formacao/0.json`);

    return(
        <ListaInfoCurriculo 
        participante={participante} 
        resumoProfissional={resumoProfissional}
        objetivo={objetivo}
        habilidades={habilidades}
        experiencia={experiencia}
        formacao={formacao}
        />
    )
}

export default Participante;


