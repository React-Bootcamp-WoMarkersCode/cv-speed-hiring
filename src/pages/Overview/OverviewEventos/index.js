import React from 'react';
import ListAdminItens from "../../../components/ListAdminItens/index";
import useData from '../../../hooks/useData';

const OverviewEventos = () => {
    const events = useData(`https://speedhiring-8423b.firebaseio.com/eventos.json`);
    const eventFilter = events.filter((event) => (
        event.idEmpresa === 0
    ));

    return(
        <>  
        {eventFilter && eventFilter.map((event, index) => (
             <ListAdminItens key={index} title={event.nomeEvento} label={event.categoria} index={event.id}/>
        ))}
        </>
    )
}

export default OverviewEventos;
