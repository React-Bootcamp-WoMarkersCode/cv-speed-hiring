import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ListAdminItens from "../../../components/ListAdminItens/index";
import FirebaseService from '../../../services/FirebaseService';

import { Button, Collapse } from "reactstrap";


const OverviewParticipantes = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const {userData} = props;
    const [events, setEvents] = useState([]);

    const toggle = () => setIsOpen(!isOpen);

    useEffect(() => {
        if(userData.eventos) {
            FirebaseService.getDataList('eventos', snp => {
                let arrayEvents = Object.keys(userData.eventos).map(key => (
                    snp[key]
                ));
                setEvents(arrayEvents);
            }, 100)
        }
    },[userData]);

    return(
        <>
        <h2 className="overview-title">Seus participantes</h2>  
        {events && events.map(({key, participantes, nomeEvento}, index) => (
            <div key={index}>
                <Button color="primary" onClick={toggle} className="overview__tabs-btn d-flex justify-content-between">
                    {nomeEvento}
                </Button>
                <Collapse isOpen={isOpen}>
                    <div className="d-flex justify-content-end mb-3">
                        <Link className="overview-btn-new" to="/cadastrar-participante-excel"><span>Adicionar participante</span><i className="fa fa-plus"></i></Link>
                    </div>
                    {participantes && Object.keys(participantes).map((item,index) => (
                        <ListAdminItens key={index} title={participantes[item].nome} label={participantes[item].email} index={key} icon="fa fa-user" />
                    ))} 
                </Collapse>
            </div>
        ))}
        {events.length === 0 &&
            <p className="text-center">Nehum participante cadastrado</p>
        }
        </>
    )
}

export default OverviewParticipantes;
