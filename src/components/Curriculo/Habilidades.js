import React from 'react';
import './style.css';

const Habilidades = (props) => {
    const { habilidades } = props

    return (
        <section className="habilidades">
            <h3 className="habilidades-titulo">Habilidades</h3>
            <p className="p-habilidades">{habilidades}</p>
        </section>
    )
}

export default Habilidades