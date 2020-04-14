import React from "react";
import {
    Row,
    Col,
    Label
} from "reactstrap";
import { FormInput } from "../../components/Form/FormInput";
import { FormCheckbox } from "../../components/Form/FormCheckbox";
import { FormDate } from "../../components/Form/FormDate";

export const ExperienciaProfissional = () => {
    
    return(
        <>
            <h5>Currículo - experiência profissional</h5>

            <Row>
                <Col sm={{ size: '12' }}>
                    <FormInput
                        label="Objetivo"
                        name="objetivo"
                        type="text" />
                </Col>
            </Row>

            <Row>
                <Col sm={{ size: '6' }}>
                    <FormInput
                        label="Empresa"
                        name="empresa"
                        type="text" />
                </Col>

                <Col sm={{ size: '6' }}>
                    <FormInput
                        label="Cargo"
                        name="cargoEmpresa"
                        type="text" />
                </Col>
            </Row>

            <Row>
                <Col sm={{ size: '5' }}>
                    <Label for="dataInicio">Data de inicio</Label>
                    <FormDate name="dataInicio" />
                </Col>

                <Col sm={{ size: '5' }}>
                    <Label for="dataFim">Data final</Label>
                    <FormDate name="dataFim" />
                </Col>

                <Col sm={{ size: '2' }}>
                    <FormCheckbox name="sim">
                        Atual ?
                            </FormCheckbox>
                </Col>
            </Row>
        </>
    );
}
