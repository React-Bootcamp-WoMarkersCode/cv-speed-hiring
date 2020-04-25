import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ListAdminItens from "../../../components/ListAdminItens/index";
import FirebaseService from '../../../services/FirebaseService';

const OverviewEventos = (props) => {
    const {userData} = props;
    const [events, setEvents] = useState([]);

    useEffect(() => {
        if(userData.eventos) {
            FirebaseService.getDataList('Eventos', snp => {
                let arrayEvents = Object.keys(userData.eventos).map(key => (
                    snp[key]
                ));
                setEvents(arrayEvents);
            }, 100)
        }
        
    },[userData]);
    
    return(
        <>
        <div className="overview-align-top">
            <h2 className="overview-title">Seus eventos</h2>  
            <Link className="overview-btn-new" to="/cadastrar-evento"><span>Adicionar evento</span><i className="fa fa-plus"></i></Link>
        </div>
        {events && events.map((event, index) => (
            <ListAdminItens key={index} title={event.nomeEvento} label={event.categoria} index={event.uid} icon="fa fa-calendar" />
        ))}
        {events.length === 0 &&
            <p className="text-center">Nehum evento cadastrado</p>
        }
        </>
    )
}

export default OverviewEventos;
