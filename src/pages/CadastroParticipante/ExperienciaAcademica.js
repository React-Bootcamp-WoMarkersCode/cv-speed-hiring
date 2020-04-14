import React from "react";
import {
    Row,
    Col,
    Label
} from "reactstrap";
import { FormInput } from "../../components/Form/FormInput";
import { FormDate } from "../../components/Form/FormDate";

export const ExperienciaAcademica = () => {

    return (
        <>
            <h5>Currículo - experiência acadêmica</h5>

            <Row>
                <Col sm={{ size: '6' }}>
                    <FormInput
                        label="Instituição"
                        name="instituicao"
                        type="text" />
                </Col>

                <Col sm={{ size: '6' }}>
                    <FormInput
                        label="Curso"
                        name="curso"
                        type="text" />
                </Col>
            </Row>

            <Row>
                <Col sm={{ size: '6' }}>
                    <Label for="dataInicioCurso">Data de inicio</Label>
                    <FormDate name="dataInicioCurso" />
                </Col>

                <Col sm={{ size: '6' }}>
                    <Label for="dataFimCurso">Data de conclusão</Label>
                    <FormDate name="dataFimCurso" />
                </Col>
            </Row>
        </>
    );
}