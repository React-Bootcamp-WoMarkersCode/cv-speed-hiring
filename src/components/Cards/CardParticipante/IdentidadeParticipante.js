import React from 'react';
import { CardBody, CardTitle, CardSubtitle } from 'reactstrap';

import './styles.css';

const IdentidadeParticipante = (props) => {

    const { nome, cargo, linkedin } = props

    return (
        <CardBody id="card_identidade">
            <CardTitle>{nome}</CardTitle>
            <CardSubtitle>{cargo}</CardSubtitle>
            <a href={linkedin} className="btn button" >Acessar CV</a>
        </CardBody>
    );
}

export default IdentidadeParticipante;