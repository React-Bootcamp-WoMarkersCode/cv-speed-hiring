import React from 'react';
import { useParams } from 'react-router';

import {Container} from "reactstrap";
import ProfilePageHeader from "../../components/Headers/ProfilePageHeader.js";

const Participantes = () => {
    const { empresaId } = useParams();

    return(
        <>
            <ProfilePageHeader />
            <Container>
                <h2>Participantes - empresaId: {empresaId}</h2>
            </Container>
        </>
    )
}

export default Participantes;
