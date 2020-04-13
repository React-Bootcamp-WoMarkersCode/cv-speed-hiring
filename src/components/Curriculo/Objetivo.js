import React from 'react';
import './style.css';

const Objetivo = (props) => {

    const { objetivo } = props

    return (
        <section className="objetivo">
            <h3 className="objetivo-titulo">Objetivo</h3>
            <p className="p-objetivo">{objetivo}</p>
        </section>
    )
}

export default Objetivo;