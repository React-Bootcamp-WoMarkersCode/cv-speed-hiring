import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ListAdminItens from "../../../components/ListAdminItens/index";
import FirebaseService from '../../../services/FirebaseService';

const OverviewEventos = (props) => {
    const {userData} = props;
    const [events, setEvents] = useState([]);

    useEffect(() => {
        if(userData.Eventos) {
            let eventos = Object.keys(userData.Eventos)
            let eventosL = eventos.length
            let eventosTrue = []
            for (let i=0; i < eventosL; i++) {
                let key = eventos[i]
                if (userData.Eventos[key]) {
                    eventosTrue.push(key)
                    eventosL = eventosTrue.length
                }
            }

            for (let i=0; i < eventosL; i++) {
                let finalEvents = []
                FirebaseService.getUniqueDataBy('Eventos', eventosTrue[i], snp => {
                    finalEvents.push(snp)
                    setEvents(finalEvents)
                });
            }
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
