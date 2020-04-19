import React from 'react';
import { Switch, Route } from "react-router-dom";
import './style.css';
import imgBanner from "../../assets/img/hiring-overview.png";
import OverviewNavbar from "../../components/Navbars/OverviewNavbar/index";
import OverviewPerfil from "../Overview/OverviewPerfil/index";
import OverviewEventos from "../Overview/OverviewEventos/index";
import OverviewParticipantes from "../Overview/OverviewParticipantes/index";

import { Container, Row, Col } from "reactstrap";


const Overview = () => {

    const linksNav = {
        "label": "Dashboard",
        "links": [
            {
                "url": "/overview/perfil",
                "classIcon": "fa fa-id-card",
                "label": "Perfil"
            },
            {
                "url": "/overview/eventos",
                "classIcon": "fa fa-calendar",
                "label": "Eventos"
            },
            {
                "url": "/overview/participantes",
                "classIcon": "fa fa-users",
                "label": "Participantes"
            },
        ]
    }

    return(
        <>
        <Container>
            <Row className="overview">
                <Col lg="3" md="12">
                    <div className="overview__profile">
                        <h3 className="overview__profile-title">
                            <span className="overview__profile-avatar">
                                <img src={imgBanner} alt="avatar" className="overview__profile-thumb" />
                            </span>
                            <strong>WoMakersCode</strong>
                        </h3>
                        <OverviewNavbar label={linksNav.label} links={linksNav.links} />
                    </div>
                    {/* <img src={imgBanner} className="overview__profile-draw" alt="banner hiring" aria-hidden="true"/> */}
                </Col>
                <Col lg="9" md="12">
                    <div className="overview__admin">
                    <Switch>
                        <Route path="/overview/perfil" component={OverviewPerfil} />
                        <Route path="/overview/eventos" exact component={OverviewEventos} />
                        <Route path="/overview/participantes" component={OverviewParticipantes} />
                    </Switch>
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Overview;
