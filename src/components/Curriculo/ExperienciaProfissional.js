import React from 'react'
import './style.css'
import business from '../../assets/icons/business.svg'
import data from '../../assets/icons/date.svg'

const ExperienciaProfissional = (props) => {

    const {cargo, empresa, dataInicio, dataFim, atual} = props
    
    return (
        <section>
            <div className="experiencia">
                <h3 className="experiencia-titulo">Experiência Profissional</h3>
                <p className="p-cargo">{cargo}</p>
                <div className="empresa">
                    <img className="icon-business" src={business} alt="ícone de empresa - prédio"/>
                    <p className="p-empresa">{empresa}</p>
                    <img className="icon-calendar" src={data} alt="ícone de calendário" />
                    <p className="p-periodo">{dataInicio} - {dataFim} 02/04 - {atual}</p>
                </div>
                <hr/>
            </div>
        </section>
    )
}

export default ExperienciaProfissional