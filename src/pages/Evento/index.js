/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { useParams } from 'react-router';

import users from '../../data/users'

const Evento = (props) => {
    const { empresaId } = useParams();
    const eventoList = users[0].eventos;
    const evento = eventoList[empresaId-1];

    return(
        <>
            <div class="container">
                <img src={evento.img} className="img fluid"></img>
            </div>
        </>
    )
}

export default Evento;
