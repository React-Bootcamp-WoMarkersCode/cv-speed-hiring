import React, { useState, useEffect } from 'react';
import ListAdminItens from "../../../components/ListAdminItens/index";
import FirebaseService from '../../../services/FirebaseService';

import { Button, Collapse } from "reactstrap";


const OverviewParticipantes = (props) => {
    const {userLogged} = props;
    const [data, setdata] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    useEffect(() => {
        FirebaseService.getDataList(`organizacoes/${userLogged}/eventos/`, (data) => {
            setdata( data.map( ({key, participantes}) => ({key, participantes})) );
        });
    },[userLogged]);

    return(
        <>
        <h2 className="overview-title">Seus participantes</h2>  
        {data && data.map(({key, participantes}, index) => (
            <div key={index}>
            <Button color="primary" onClick={toggle} className="overview__tabs-btn">Evento: {key}</Button>
            <Collapse isOpen={isOpen}>
                {participantes && Object.keys(participantes).map((item,index) => (
                    <ListAdminItens key={index} title={participantes[item].nome} label={participantes[item].email} index={index} icon="fa fa-user"/>
                ))} 
            </Collapse>
            </div>
        ))}
        {data.length === 0 &&
            <p className="text-center">Nehum participante cadastrado</p>
        }
        </>
    )
}

export default OverviewParticipantes;
