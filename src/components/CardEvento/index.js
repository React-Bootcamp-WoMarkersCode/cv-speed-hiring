import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap';
import './style.css'
import users from '../../data/users' // arquivo json


const CardEvento = (props) => {
  const eventoList = users[0].eventos;
  return (
    <CardDeck className="card-deck">
      {
        eventoList && eventoList.map(e => (
          // return (
            <Card key={e.id}>
            <CardImg top width="100%" src={e.img} alt="Card image cap" />
            <CardBody>
              <CardTitle className="title">{e.nomeEvento}</CardTitle>
              <CardSubtitle className="sub-titulo">WoMakersCode</CardSubtitle>
              <CardText>{e.categoria}</CardText>
              <CardText>{e.descricao}</CardText>
              <Button>Saber mais</Button>
            </CardBody>
          </Card>
          )
        )
      }
    </CardDeck>
  );
};

export default CardEvento;