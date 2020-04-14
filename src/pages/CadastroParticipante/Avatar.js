import React from "react";
import { Row, Col, Label } from "reactstrap";
import ImageUpload from "../../components/ImageUpload";

export const Avatar = () => {

    return (
        <>
            <h5>Dados pessoais</h5>

            <Row>
                <Col sm={{ size: '12' }}>
                    <Label for="avatar">Avatar</Label>
                    <ImageUpload />
                </Col>
            </Row>
        </>
    );
}