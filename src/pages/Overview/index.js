import React from 'react';
import './style.css';
import imgBanner from "../../assets/img/hiring-overview.png";

import { Container, Row, Col } from "reactstrap";

const Overview = () => {
    return(
        <>
        <Container>
            <Row>
                <Col lg="4" md="12">
                    <img src={imgBanner} className="col-md-12" alt="banner hiring"/>
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
