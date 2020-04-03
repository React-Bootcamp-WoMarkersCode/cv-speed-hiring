import React from 'react';
import { Card } from 'reactstrap';

import AvatarParticipante from './AvatarParticipante';
import IdentidadeParticipante from './IdentidadeParticipante';
import './styles.css';

const CardParticipante = (props) => {

  const { nome, avatar, cargo, linkedin } = props

  return (
    <div id="card_participante_conteudo">
      <Card id="card_participante">
        <div className="card_participante-body">
          <AvatarParticipante nome={nome} avatar={avatar} />
          <IdentidadeParticipante nome={nome} cargo={cargo} linkedin={linkedin}/>
        </div>
      </Card>
    </div>
  );
};

export default CardParticipante;