import React from 'react';
import { useParams } from 'react-router';

import {Container} from "reactstrap";
import ProfilePageHeader from "../../components/Headers/ProfilePageHeader.js";
import imgHeader from "../../assets/img/grupo-de-pessoas-profile-speed-hiring.jpg";

const Participantes = () => {
    const { empresaId } = useParams();
    const dataHeader= {
        urlImg: imgHeader
    }

    return(
        <>
            <ProfilePageHeader props={dataHeader}/>
            <Container>
                <h2>Participantes - empresaId: {empresaId}</h2>
            </Container>
        </>
    )
}

export default Participantes;
