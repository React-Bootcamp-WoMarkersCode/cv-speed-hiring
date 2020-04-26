import React, {useEffect, useState} from 'react';
import { CardDeck } from 'reactstrap';
import CardParticipante from './CardParticipante';
import { Loading } from '../../Loading';
import './styles.css';

const ListaCardParticipante = (props) => {

    const { participantes } = props;
    const [changAarray, setChangAarray] = useState([]);
    const [loading, setLoading] = useState(false);

    let listaParticipantes = [];

    if (loading) {
        listaParticipantes = changAarray.map((p, index) => 
            <CardParticipante key={index}
                nome={p.nome}
                cargo={p.cargo}
                avatar={p.avatar}
                idParticipante={p.key}
            />
        );
    } else {
        listaParticipantes =
            <Loading 
                title={"Carregando a lista de participantes..."} 
                height={500} 
                width={500}
            />
    }

    useEffect(() => {
        if(participantes) {
            let items = [];
            Object.keys(participantes).forEach(function(key) {
                let item = participantes[key];
                item['key'] = key;
                items.push(item)
            });

            setChangAarray(items);
            setLoading(true);
        }
    }, [participantes])

    return (
        <CardDeck className="deck_participante">
            {listaParticipantes}
        </CardDeck>
    );
}

export default ListaCardParticipante;