/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { useParams } from 'react-router';
import { Container, Jumbotron } from 'reactstrap';

import './evento.css';
import users from '../../data/users'

const Evento = () => {
    const { empresaId } = useParams();
    const eventoList = users[0].eventos;
    const evento = eventoList[empresaId-1];

    return(
        <>
            <Container>
                <div className="flexivel">
                    <img src={evento.img} className="col-md-6"></img>
                    <Jumbotron>
                        <h3><b>{evento.nomeEvento}</b></h3>
                        <hr className="my-2" />
                        <p>{evento.descricao}</p>
                        <hr className="my-2" />
                        <p><b>Categoria: </b>{evento.categoria}</p>
                        <p><b>Início: </b>{evento.dataInicio}</p>
                        <p><b>Conclusão: </b>{evento.dataFim}</p>
                    </Jumbotron>
                </div>
            </Container>
        </>
    )
}

export default Evento;