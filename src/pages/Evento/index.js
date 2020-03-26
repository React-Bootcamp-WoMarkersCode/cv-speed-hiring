import React from 'react';
import { useParams } from 'react-router';
import { Container, Row, Col } from "reactstrap";

import ListaCardParticipante from '../../components/Cards/CardParticipante/ListaCardParticipante';
import users from '../../data/users'
import './evento.css';

const Evento = () => {
    const { empresaId } = useParams();
    const eventoList = users[0].eventos;
    const evento = eventoList[empresaId-1];

    return(
        <>
        <div className="section section-dark section-nucleo-icons image-top">
            <Container>
            <Row>
                <Col lg="6" md="12">
                <h2 className="title">{evento.nomeEvento}</h2>
                <hr />
                <div className="description">
                    <p>{evento.descricao}</p>
                    <hr />
                    <p><i className="nc-icon nc-tag-content" />
                    <b> Categoria: </b> {evento.categoria}</p>
                    <p><i className="nc-icon nc-button-play" />
                    <b> Início: </b> {evento.dataInicio}</p>
                    <p><i className="nc-icon nc-button-power" />
                    <b> Conclusão: </b> {evento.dataFim}</p>
                </div>
                </Col>
                <Col>
                    <img src={evento.img} className="col-md-12" alt="banner com a divulgação do evento"></img>
                </Col>
            </Row>
            </Container>
        </div>{" "}
        <div className="image-top-participante text-center">
            <h1>Participantes</h1>
            <hr />
            {eventoList && eventoList.map(participante => (
            <ListaCardParticipante key={participante.id} participante={participante} />)) }
        </div>
        </>
    )
}

export default Evento;
