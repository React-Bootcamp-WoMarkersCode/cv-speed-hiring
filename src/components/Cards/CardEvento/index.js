import React  from 'react';
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

import users from '../../../data/users'
import './style.css'

const CardEvento = () => {
  const eventoList = users[0].eventos;

  return (
    <CardDeck className="card-deck">
      {
        eventoList && eventoList.map(e => (
            <Card key={e.id}>
            <CardImg top width="100%" src={e.img} alt="Banner com a imagem do workshop/bootcamp" />
            <CardBody>
              <CardTitle className="title">{e.nomeEvento}</CardTitle>
              <CardSubtitle className="sub-titulo">WoMakersCode</CardSubtitle>
              <CardText>{e.categoria}</CardText>
              <CardText>{e.descricao}</CardText>
              <Link to={`/evento/${e.id}`}>
                <Button>Saber mais</Button>
              </Link>
            </CardBody>
          </Card>
          )
        )
      }
    </CardDeck>
  );
};

export default CardEvento;