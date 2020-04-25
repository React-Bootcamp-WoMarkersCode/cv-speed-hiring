import React from 'react';
import { useParams } from 'react-router';
import ListaInfoCurriculo from '../../components/Curriculo/ListaInfoCurriculo';
import useData from '../../hooks/useData';

const Participante = () => {
    const {empresaId, eventoId, participanteId} = useParams();
    const participante = useData(`https://speedhiring-8423b.firebaseio.com/participantes/${participanteId}.json`);
    const objetivo = useData(`https://speedhiring-8423b.firebaseio.com/participantes/${participanteId}/curriculo/objetivo.json`);
    const habilidades = useData(`https://speedhiring-8423b.firebaseio.com/participantes/${participanteId}/curriculo/habilidades.json`);
    const experiencias = useData(`https://speedhiring-8423b.firebaseio.com/participantes/${participanteId}/curriculo/experiencias.json`);
    const formacao = useData(`https://speedhiring-8423b.firebaseio.com/participantes/${participanteId}/curriculo/formacao.json`);

    return(
        <div>
            <ListaInfoCurriculo 
                participante={participante} 
                objetivo={objetivo}
                habilidades={habilidades}
                experiencias={experiencias}
                formacao={formacao}
            />
        </div>
    )
}

export default Participante;


