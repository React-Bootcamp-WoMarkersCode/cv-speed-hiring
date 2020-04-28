import React from 'react';
import { Link } from 'react-router-dom';
import { CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import './styles.css';

const IdentidadeParticipante = (props) => {

    const { nome, cargo, idParticipante } = props

    return (
        <CardBody id="card_identidade">
            <CardTitle>{nome}</CardTitle>
            <CardSubtitle>{cargo}</CardSubtitle>
            <Link to={`/participante/${idParticipante}`} className="btn button" >perfil</Link>
        </CardBody>
    );
}

export default IdentidadeParticipante;