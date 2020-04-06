import React from 'react';
import { Card } from 'reactstrap';

import AvatarParticipante from './AvatarParticipante';
import IdentidadeParticipante from './IdentidadeParticipante';
import './styles.css';

const CardParticipante = (props) => {

  const { nome, avatar, cargo, key } = props
  // const { empresaId } = useParams();
  // const eventoList = users[0].eventos;
  // const evento = eventoList[empresaId-1];
  
  // const participantes = evento.participantes;

  return (
    <div id="card_participante_conteudo">
      <Card id="card_participante">
        <div className="card_participante-body">
          <AvatarParticipante nome={nome} avatar={avatar} />
          <IdentidadeParticipante nome={nome} cargo={cargo} id={key}/>
        </div>
      </Card>
    </div>
  );
};

export default CardParticipante;