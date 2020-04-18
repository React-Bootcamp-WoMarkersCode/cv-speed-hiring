import React from 'react';
import './style.css';
import imgBanner from "../../assets/img/hiring-overview.png";

import { Container, Row, Col } from "reactstrap";

const Overview = () => {
    return(
        <>
        <Container>
            <Row className="overview">
                <Col lg="4" md="12">
                    <div className="overview__profile">
                        <img src={imgBanner} alt="avatar" className="overview__profile-avatar" />
                        <h3>WoMakersCode</h3>
                    </div>
                    <img src={imgBanner} className="overview__profile-draw" alt="banner hiring" aria-hidden="true"/>
                </Col>
                <Col className="mt-8">
                    teste
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Overview;
