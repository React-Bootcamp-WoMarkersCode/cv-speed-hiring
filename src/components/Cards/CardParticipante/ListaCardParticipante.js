import React, {useEffect, useState} from 'react';
import { CardDeck } from 'reactstrap';
import CardParticipante from './CardParticipante';
import './styles.css';

const ListaCardParticipante = (props) => {

    const { participantes } = props;
    const [changAarray, setChangAarray] = useState([]);

    const listaParticipantes = changAarray.map((p, index) => 
        <CardParticipante key={index}
            nome={p.nome}
            cargo={p.cargo}
            avatar={p.avatar}
            idParticipante={p.key}
        />
    );

    useEffect(() => {
        if(participantes) {
            let items = [];
            Object.keys(participantes).forEach(function(key) {
                let item = participantes[key];
                item['key'] = key;
                items.push(item)
            });

            setChangAarray(items);
        }
    }, [participantes])

    return (
        <CardDeck className="deck_participante">
            {listaParticipantes}
        </CardDeck>
    );
}

export default ListaCardParticipante;