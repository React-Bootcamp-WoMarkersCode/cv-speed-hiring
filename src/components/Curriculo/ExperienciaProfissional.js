import React from 'react'
import './style.css'
import business from '../../assets/icons/business.svg'
import data from '../../assets/icons/date.svg'

const ExperienciaProfissional = ({cargo, empresa, dataInicio, dataFim, atual}) => {

    const periodo = atual === "S" ? "Atual" : ""; 

    return (
        <section className="section-exp">
                <p className="p-cargo">{cargo}</p>
                <div className="empresa">
                <img className="icon-business" src={business} alt="ícone de empresa - prédio" />
                    <p className="p-empresa">{empresa}</p>
                    <p className="p-periodo">
                        <img className="icon-calendar" src={data} alt="ícone de calendário" />
                        {dataInicio} - {dataFim} {periodo}
                    </p>
                </div>
                <hr className="linha"/>
        </section>
    )
}

export default ExperienciaProfissional