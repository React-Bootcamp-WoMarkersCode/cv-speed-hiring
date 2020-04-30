import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {firebaseStorage} from '../../../utils/firebaseUtils'

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
    
    const { evento } = props;
    const [image, setImage] = useState("")
    
    if(evento.img) {
        if(evento.img.includes("images/eventos/")) {
            firebaseStorage.ref().child(evento.img).getDownloadURL().then((url) => {
                setImage(url);
            })
            .catch((error) => (console.log(error)))
        }
    }

    return (
        <>
            <CardDeck className="card-deck">
                <Card>
                    <CardImg top width="100%" src={image} alt="Banner com a imagem do workshop/bootcamp" />
                    <CardBody>
                        <CardTitle className="title">{evento.nomeEvento}</CardTitle>
                        <CardSubtitle className="sub-titulo">{evento.nomeEmpresa}</CardSubtitle>
                        <CardText>{evento.categoria}</CardText>
                        <CardText className="text-ellipsis">{evento.descricao}</CardText>
                        <Link to={`/evento/${evento.key}`}>
                            <Button className="btn-evento">Saber mais</Button>
                        </Link>
                    </CardBody>
                </Card>
            </CardDeck>
        </>
    );
};

export default CardEvento;