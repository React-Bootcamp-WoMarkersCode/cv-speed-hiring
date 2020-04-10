import React from 'react';
import { Link } from 'react-router-dom';

import {
    Card,
    Button,
    CardImg,
    CardTitle,
    CardText,
    CardDeck,
    CardSubtitle,
    CardBody
} from 'reactstrap';

import './style.css'

const CardEvento = (props) => {

    const { evento } = props

    return (
        <>
            <CardDeck className="card-deck">
                <Card>
                    <CardImg top width="100%" src={evento.img} alt="Banner com a imagem do workshop/bootcamp" />
                    <CardBody>
                        <CardTitle className="title">{evento.nomeEvento}</CardTitle>
                        <CardSubtitle className="sub-titulo">WoMakersCode</CardSubtitle>
                        <CardText>{evento.categoria}</CardText>
                        <CardText>{evento.descricao}</CardText>
                        <Link to={`/evento/${evento.idEmpresa}/${evento.id}`}>
                            <Button>Saber mais</Button>
                        </Link>
                    </CardBody>
                </Card>
            </CardDeck>
        </>
    );
};

export default CardEvento;