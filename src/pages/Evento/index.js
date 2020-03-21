import React from 'react';
import { useParams } from 'react-router';
import { Container } from 'reactstrap';
import AccessCode from '../../components/AccessCode/AccessCode';
import ProfilePageHeader from "../../components/Headers/ProfilePageHeader.js";
import imgHeader from "../../assets/img/grupo-de-pessoas-profile-speed-hiring.jpg";

const Evento = () => {
    const { empresaId } = useParams();

    const dataHeader= {
        urlImg: imgHeader
    }

    return(
        <>
            <ProfilePageHeader props={dataHeader}/>
            <Container>
                <h2>Evento - empresaId: {empresaId}</h2>
                <AccessCode />
            </Container>
        </>
    )
}

export default Evento;
