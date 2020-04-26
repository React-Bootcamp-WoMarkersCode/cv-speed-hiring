import React, {useEffect, useState} from 'react';
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import { CardDeck } from 'reactstrap';
import CardParticipante from './CardParticipante';
import * as quotesloading from '../../../assets/json/quotesloading.json';
import './styles.css';


const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: quotesloading.default,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
}

const ListaCardParticipante = (props) => {

    const { participantes } = props;
    const [changAarray, setChangAarray] = useState([]);
    const [ loading, setLoading ] = useState(false);

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
            <FadeIn>
                <div className="d-flex justify-content-center align-items-center mt-5">
                    <h4>Carregando a lista de participantes...</h4>
                </div>
                <Lottie options={defaultOptions} height={500} width={500} />
            </FadeIn>
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