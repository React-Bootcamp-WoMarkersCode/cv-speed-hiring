import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ListAdminItens from "../../../components/ListAdminItens/index";
import FirebaseService from '../../../services/FirebaseService';
import {Loading} from '../../../components/Loading'

const OverviewEventos = (props) => {
    const {userData} = props;
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    
    const updateData = (userData) => {
        if(userData.Eventos) {
            setLoading(true)
            let eventos = Object.keys(userData.Eventos)
            let eventosL = eventos.length
            let eventosTrue = []
            
            for (let i=0; i < eventosL; i++) {
                let key = eventos[i]
                if (userData.Eventos[key]) {
                    FirebaseService.getUniqueDataBy('Eventos', key, snp => {
                        eventosTrue.push(snp)
                    });
                }
            }
            setTimeout(()=>{
                setEvents(eventosTrue)
                setLoading(false);
            }, 1000)
        }
    }
    
    useEffect(() => {
        if(!userData.Eventos) {
            setLoading(false)
        }
        updateData(userData)
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
        {loading && <Loading width={200} height={200}/>}
        {events.length === 0 && !loading &&
            <p className="text-center">Nenhum evento cadastrado</p>
        }
        </>
    )
}

export default OverviewEventos;
