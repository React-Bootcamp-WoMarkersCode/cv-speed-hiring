import React from 'react';
import './style.css';

const Habilidades = (habilidades) => (
    <section className="habilidades">
        <h3 className="habilidades-titulo">Habilidades</h3>
        <p className="p-habilidades">{habilidades}</p>
    </section>
)

export default Habilidades