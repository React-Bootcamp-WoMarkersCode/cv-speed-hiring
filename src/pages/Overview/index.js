import React, { useState, useEffect, useContext } from 'react';
import { Switch, Route } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import './style.css';
import imgBanner from "../../assets/img/hiring-overview.png";
import OverviewNavbar from "../../components/Navbars/OverviewNavbar/index";
import OverviewPerfil from "../Overview/OverviewPerfil/index";
import OverviewEventos from "../Overview/OverviewEventos/index";
import OverviewParticipantes from "../Overview/OverviewParticipantes/index";
import { UserContext } from "../../providers/UserProvider";
import FirebaseService from '../../services/FirebaseService';


const Overview = () => {
    const [userData, setUserData] = useState({});
    const user = useContext(UserContext);
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

    useEffect(() => {
        if(user) {
            const uid = user.uid;

            FirebaseService.getDataList('usuarios', snp => {
                setUserData(snp.find(el => el.uid === uid));
            })
        }
    }, [user]);

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
                </Col>
                <Col lg="9" md="12">
                    <div className="overview__admin">
                    <Switch>
                        <Route path="/overview/perfil" render={props => <OverviewPerfil {...props} userData={userData} />} />
                        <Route path="/overview/eventos" exact render={props => <OverviewEventos {...props} userData={userData} />} />
                        <Route path="/overview/participantes" render={props => <OverviewParticipantes {...props} userData={userData} />} />
                    </Switch>
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Overview;
