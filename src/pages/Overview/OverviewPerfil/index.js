/* eslint-disable no-unused-vars */
import React from 'react';

const OverviewPerfil = (props) => {

    const { userData } = props;

    console.log('dados do user logado', userData);
    return(
        <>
            <h2 className="overview-title">Editar perfil</h2>
        </>
    )
}

export default OverviewPerfil;
