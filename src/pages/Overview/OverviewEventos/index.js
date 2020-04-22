import React, { useState, useEffect } from 'react';
import ListAdminItens from "../../../components/ListAdminItens/index";

const OverviewEventos = (props) => {
    const {userData} = props;
    const [events, setEvents] = useState([]);

    useEffect(() => {
        if(userData.eventos) {
            let result = Object.keys(userData.eventos).map(key => (userData.eventos[key]));
            setEvents(result);
        }
    },[userData]);

    return(
        <>
        <h2 className="overview-title">Seus eventos</h2>  
        {events && events.map((event, index) => (
             <ListAdminItens key={index} title={event.nomeEvento} label={event.categoria} index={event.key} icon="fa fa-calendar" />
        ))}
        {events.length === 0 &&
            <p className="text-center">Nehum evento cadastrado</p>
        }
        </>
    )
}

export default OverviewEventos;
