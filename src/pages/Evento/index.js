/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { useParams } from 'react-router';

import users from '../../data/users'

const Evento = () => {
    const { empresaId } = useParams();
    const eventoList = users[0].eventos;
    const evento = eventoList[empresaId-1];

    return(
        <>
            <div class="container">
                {/* <h2>Evento - empresaId: {empresaId}</h2> */}
                <img src={evento.img} class="img-fluid"></img>
            </div>
        </>
    )
}

export default Evento;
