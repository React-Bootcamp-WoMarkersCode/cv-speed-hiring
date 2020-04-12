import React from 'react'
import './style.css'
import formacao from '../../assets/icons/formacao.svg'
import data from '../../assets/icons/date.svg'

const FormacaoAcademica = (props) => {

    const {curso, instituicao, dataFim, dataInicio} = props 

    return (
        <section>
            <div className="formacao">
                <h3 className="formacao-titulo">Formacão Acadêmica</h3>
                <p className="p-curso">{curso}</p>
                <div className="instituicao">
                    <img className="icon-formacao" src={formacao} alt="Ícone formação" />
                    <p className="p-instituicao">{instituicao}</p>
                    <img className="icon-calendar" src={data} alt="ícone de calendário" />
                    <p className="p-periodo">{dataInicio} - 02/20{dataFim}</p>
                </div>
                <hr />
            </div>
        </section>
    )
}

export default FormacaoAcademica