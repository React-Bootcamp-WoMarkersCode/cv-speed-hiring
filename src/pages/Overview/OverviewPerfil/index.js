import React, { useState, useEffect } from 'react';
import FirebaseService from '../../../services/FirebaseService';

const OverviewPerfil = (props) => {
    const {userLogged} = props;
    const [data, setData] = useState({});

    useEffect(() => {
        FirebaseService.getDataList(`organizacoes`, (data) => {
            let user = data.find(el => el.key === userLogged);
            setData(user);
        });
    },[userLogged]);
    console.log(data);
    return(
        <>
            <h2 className="overview-title">Editar perfil</h2>
        </>
    )
}

export default OverviewPerfil;
