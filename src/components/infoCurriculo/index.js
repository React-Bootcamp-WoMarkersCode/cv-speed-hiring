import React from 'react';
import './style.css'

const infoCurriculo = (props) => {

    const { nome, cargo} = props

   return (
        <div>
            <h1>{nome}</h1>
            <h2>{cargo}</h2>
        </div>
    );
}

export default infoCurriculo;