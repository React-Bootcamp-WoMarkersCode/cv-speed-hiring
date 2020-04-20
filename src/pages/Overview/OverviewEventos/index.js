import React, { useState, useEffect } from 'react';
import ListAdminItens from "../../../components/ListAdminItens/index";
import FirebaseService from '../../../services/FirebaseService';

const OverviewEventos = (props) => {
    const userLogged = "organizacao1";
    const [events, setEvents] = useState([]);

    useEffect(() => {
        FirebaseService.getDataList(`organizacoes/${userLogged}/eventos`, (data) => setEvents(data) );
    },[userLogged]);

    return(
        <>  
        {events && events.map((event, index) => (
             <ListAdminItens key={index} title={event.nomeEvento} label={event.categoria} index={event.id}/>
        ))}
        {events.length === 0 &&
            <p className="text-center">Nehum evento cadastrado</p>
        }
        </>
    )
}

export default OverviewEventos;
