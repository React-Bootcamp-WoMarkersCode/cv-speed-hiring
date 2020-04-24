import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ListAdminItens from "../../../components/ListAdminItens/index";
import {firebaseDatabase} from '../../../utils/firebaseUtils'

const OverviewEventos = (props) => {
    const {userData} = props;
    const [events, setEvents] = useState([]);

    useEffect(() => {
        if(userData.eventos) {
            let arrayEvents = [];
            Object.keys(userData.eventos).map(key => (
                firebaseDatabase.ref('eventos').child(key).on('value', function(snp) { 
                    arrayEvents.push(snp.val());
                })
            ));
            setEvents(arrayEvents);
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
