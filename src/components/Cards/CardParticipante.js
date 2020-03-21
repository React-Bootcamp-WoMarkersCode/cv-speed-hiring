import React from 'react';
import imgAvatarDefault from "../../assets/icons/teste-avatar.svg"
import "../../assets/css/Cards/Cardparticipante.css"
import {
  Card, CardImg, CardBody,
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
            <span Id="card_avatar">
                <CardImg src={img} alt={nome} />
            </span>
    );
};

/**
 * Componente de identidade de participante
 * (nome, cargo e link do CV)
 * 
 * @param {object} props //nome, cargo e link_cv
 */
export const IdentidadeParticipante = (props) => {

    return (
        <CardBody Id="card_identidade">
          <CardTitle>{props.nome}</CardTitle>
          <CardSubtitle>{props.cargo}</CardSubtitle>
          <a href={props.link_cv} className="btn button" >Acessar CV</a>
        </CardBody>
    );
}

/**
 * Componente de card de participante
 * Contém componente avatar e identidade
 * 
 * @param {object} props //nome, cargo, link_cv e avatar 
 */
const CardParticipante = (props) => {
  return (
    <div>
      <Card Id="card_participante">
        <div>
          <AvatarParticipante 
            nome={props.nome}
            avatar={props.avatar}
          ></AvatarParticipante>
          <IdentidadeParticipante 
            nome={props.nome} 
            cargo={props.cargo}
            link_cv={props.link_cv}
          ></IdentidadeParticipante>
        </div>
      </Card>
    </div>
  );
};

export default CardParticipante;
/**
 * Uso do componente
 */
/* 
<CardParticipante
  nome="Fulana de Tal" 
  cargo="Programadora FullStack"
  link_cv="#"
  avatar=""
>
</CardParticipante> 
*/
