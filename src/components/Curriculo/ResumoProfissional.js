import React from 'react';
import './style.css';

const ResumoProfissional = (props) => {
    
    const { resumoProfissional } = props

    return (
        <section className="resumo">
            <h3 className="resumo-titulo">Resumo Profissional</h3>
            <p className="p-resumo">{resumoProfissional}</p>
        </section>
    );
};

export default ResumoProfissional;