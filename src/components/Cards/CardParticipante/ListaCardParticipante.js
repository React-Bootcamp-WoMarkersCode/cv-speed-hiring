import React from 'react';
import { CardDeck } from 'reactstrap';
import CardParticipante from './CardParticipante';
import './styles.css';

const ListaCardParticipante = (props) => {

    const { participantes } = props;

    const listaParticipantes = participantes.map((p) => 
        <CardParticipante
            id={p.id}
            nome={p.nome}
            cargo={p.cargo}
            avatar={p.avatar}
            idEmpresa={p.idEmpresa}
            idEvento={p.idEvento}
            idParticipante={p.id}
        />
    );

    return (
        <CardDeck className="deck_participante">
            {listaParticipantes}
        </CardDeck>
    );
}

export default ListaCardParticipante;