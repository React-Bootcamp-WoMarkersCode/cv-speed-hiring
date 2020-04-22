import React, { useState, useEffect } from 'react';
import ListAdminItens from "../../../components/ListAdminItens/index";

import { Button, Collapse } from "reactstrap";


const OverviewParticipantes = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const {userData} = props;
    const [events, setEvents] = useState([]);

    const toggle = () => setIsOpen(!isOpen);

    useEffect(() => {
        if(userData.eventos) {
            let result = Object.keys(userData.eventos).map(key => (userData.eventos[key]));
            setEvents(result);
        }
    },[userData]);

    return(
        <>
        <h2 className="overview-title">Seus participantes</h2>  
        {events && events.map(({key, participantes, nomeEvento}, index) => (
            <div key={index}>
            <Button color="primary" onClick={toggle} className="overview__tabs-btn d-flex justify-content-between">
                {nomeEvento} 
                <span className="overview__total">{Object.keys(participantes).length}</span>
            </Button>
            <Collapse isOpen={isOpen}>
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
