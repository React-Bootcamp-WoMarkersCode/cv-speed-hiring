import React from 'react';
import { Link } from 'react-router-dom';
import { CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { useParams } from 'react-router';
import users from '../../../data/users'
import './styles.css';

const IdentidadeParticipante = (props) => {

    const { nome, cargo, id} = props
    const { empresaId } = useParams();
    const eventoList = users[0].eventos;
    const evento = eventoList[empresaId-1];
    
    // const participantes = evento.participantes;
    // const participante = participantes.map((p) => p)

    return (
        
            <CardBody id="card_identidade">
                <CardTitle>{nome}</CardTitle>
                <CardSubtitle>{cargo}</CardSubtitle>
                <Link 
                to={`/evento/${evento.id}/curriculo/${id}`}
                className="btn button">Acessar CV
                </Link>
            </CardBody>
    );
}

export default IdentidadeParticipante;