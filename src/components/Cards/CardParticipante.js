import React from 'react';
import imgAvatarDefault from "../../assets/icons/teste-avatar.svg"
import "../../assets/css/Cards/Cardparticipante.css"
import {
  Card, CardImg, CardBody, CardDeck,
  CardTitle, CardSubtitle
} from 'reactstrap';

/**
 * Componente de avatar de participante
 * 
 * @param {object} props //nome (do participante) e img (avatar) 
 */
export const AvatarParticipante = (props) => {
    let nome = props.nome; 
    let img = props.avatar ? 
        props.avatar :
        imgAvatarDefault;

    return (
            <span id="card_avatar">
                <CardImg src={img} alt={nome} />
            </span>
    );
};

/**
 * Componente de identidade de participante
 * (nome, cargo e link do CV)
 * 
 * @param {object} props //nome, cargo e linkedin
 */
export const IdentidadeParticipante = (props) => {

    return (
        <CardBody id="card_identidade">
          <CardTitle>{props.nome}</CardTitle>
          <CardSubtitle>{props.cargo}</CardSubtitle>
          <a href={props.linkedin} className="btn button" >Acessar CV</a>
        </CardBody>
    );
}

/**
 * Componente de card de participante
 * Contém componente avatar e identidade
 * 
 * @param {object} props //nome, cargo, linkedin e avatar 
 */
const CardParticipante = (props) => {
  return (
    <div>
      <Card id="card_participante">
        <div className="card_participante-body">
          <AvatarParticipante 
            nome={props.nome}
            avatar={props.avatar}
          ></AvatarParticipante>
          <IdentidadeParticipante 
            nome={props.nome} 
            cargo={props.cargo}
            linkedin={props.linkedin}
          ></IdentidadeParticipante>
        </div>
      </Card>
    </div>
  );
};

export const ListaCardParticipante = (props) => {
  const participantes = props.participantes;
  return (
    <div id="listacard_participante">
      <CardDeck>
        { participantes.map(p => (
            <CardParticipante
              key={p.id}
              nome={p.nome} 
              cargo={p.cargo}
              linkedin={p.linkedin}
              avatar={p.avatar}
            ></CardParticipante>
          ))
        }
      </CardDeck>
    </div>
  );
}

// export default CardParticipante;
export default ListaCardParticipante;
/**
 * Uso do componente CardParticipante
 */
/* 
<CardParticipante
  nome="Fulana de Tal" 
  cargo="Programadora FullStack"
  linkedin="#"
  avatar=""
></CardParticipante> 
*/

/**
 * Uso do componente ListaCardParticipante
 */
/* 
<ListaCardParticipante
    participantes={users[0].eventos[0].participantes} 
></ListaCardParticipante> 
*/
