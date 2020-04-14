import React from "react";

import {
    Row,
    Col,
    Label
} from "reactstrap";

import { FormInput } from "../../components/Form/FormInput";
import { FormFile } from "../../components/Form/FormFile";

export const DadosPessoais = () => {

    return(
        <>
            <h5>Dados pessoais</h5>
            <Row>
                <Col sm={{ size: '6' }}>
                    <FormInput
                        label="Nome"
                        name="nome"
                        type="text" />
                </Col>

                <Col sm={{ size: '6' }}>
                    <FormInput
                        label="E-mail"
                        name="email"
                        type="text" />
                </Col>
            </Row>

            <Row>
                <Col sm={{ size: '4' }}>
                    <FormInput
                        label="Telefone"
                        name="telefone"
                        type="text"
                        placeholder="(xx) xxxxx-xxxx" />
                </Col>

                <Col sm={{ size: '4' }}>
                    <FormInput
                        label="Cidade"
                        name="cidade"
                        type="text" />
                </Col>

                <Col sm={{ size: '4' }}>
                    <FormInput
                        label="UF"
                        name="uf"
                        type="text"
                        placeholder="Sigla da cidade" />
                </Col>
            </Row>

            <Row>
                <Col sm={{ size: '6' }}>
                    <FormInput
                        label="Linkedin"
                        name="linkedin"
                        type="text"
                        placeholder="https://www.linkedin.com/in/<seu_usuario>/" />
                </Col>

                <Col sm={{ size: '6' }}>
                    <FormInput
                        label="Github"
                        name="github"
                        type="text"
                        placeholder="http://github.com/<seu_usuario>" />
                </Col>
            </Row>

            <Row>
                <Col sm={{ size: '6' }}>
                    <FormInput
                        label="Cargo"
                        name="cargo"
                        type="text"
                        placeholder="Ex: Estudante, Desenvolvedora Front-End..." />
                </Col>

                <Col sm={{ size: '6' }}>
                    <Label for="avatar">Avatar</Label>
                    <FormFile name="avatar" />
                </Col>
            </Row>
        </>
    );
};