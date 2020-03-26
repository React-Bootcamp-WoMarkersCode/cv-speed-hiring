import React from 'react';
import { CardDeck } from 'reactstrap';

import CardParticipante from './CardParticipante';
import users from '../../../data/users';
import './styles.css';

const ListaCardParticipante = (props) => {

    const participantes = users[0].eventos[0].participantes;

    return (
        <div id="listacard_participante">
            <CardDeck>
                {participantes.map(p => (
                    <CardParticipante
                        key={p.id}
                        nome={p.nome}
                        cargo={p.cargo}
                        linkedin={p.linkedin}
                        avatar={p.avatar}/>
                ))}
            </CardDeck>
        </div>
    );
}

export default ListaCardParticipante;