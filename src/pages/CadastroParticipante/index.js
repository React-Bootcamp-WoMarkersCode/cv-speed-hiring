import React from "react";
import { 
    Container, 
    Row, 
    Col, 
    Label
} from "reactstrap";
import { Formik, Form  } from "formik";
import { FormInput } from "../../components/Form/FormInput";
import { FormCheckbox } from "../../components/Form/FormCheckbox";
import { FormFile } from "../../components/Form/FormFile";
import { FormDate } from "../../components/Form/FormDate";
import * as Yup from 'yup';
import "./style.css";

const CadastroParticipante = () => {

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    return (
        <div className="top">
            <Container>
                <h2>Cadastro de participantes</h2>
                <hr />

                <Formik
                    initialValues={{
                        nome: "",
                        email: "",
                        telefone: "",
                        cidade: "",
                        uf: "",
                        linkedin: "",
                        github: "",
                        cargo: "",
                        avatar: "",
                        objetivo: "",
                        empresa: "",
                        cargoEmpresa: "",
                        dataInicio: "",
                        dataFim: "",
                        atual: false,
                        instituicao: "",
                        curso: "",
                        dataInicioCurso: "",
                        dataFimCurso: "",
                    }}

                    validationSchema={Yup.object({
                        nome: Yup.string()
                            .max(30, 'Deve ter 30 caracteres ou menos')
                            .required('*Obrigatório'),

                        email: Yup.string()
                            .email('Endereço de email invalido')
                            .required('*Obrigatório'),
                        
                        telefone: Yup.string()
                            .matches(phoneRegExp, 'O número do telefone não é válido')
                            .required('*Obrigatório'),

                        cidade: Yup.string()
                            .max(30, 'Deve ter 30 caracteres ou menos')
                            .required('*Obrigatório'),

                        uf: Yup.string()
                            .max(3, 'Deve ter 3 caracteres ou menos')
                            .required('*Obrigatório'),

                        linkedin: Yup.string()
                            .min(20, 'Deve ter no mínimo 20 caracteres'),

                        github: Yup.string()
                            .min(10, 'Deve ter no mínimo 20 caracteres'),

                        cargo: Yup.string()
                            .min(5, 'Deve ter no mínimo 5 caracteres')
                            .required('*Obrigatório'),

                        avatar: Yup.string(),

                        objetivo: Yup.string()
                            .min(5, 'Deve ter no mínimo 5 caracters')
                            .required('*Obrigatório'),
                        
                        empresa: Yup.string(),

                        cargoEmpresa: Yup.string(),

                        dataInicio: Yup.date(),

                        atual: Yup.boolean(),

                        instituicao: Yup.string(),

                        curso: Yup.string(),

                        dataInicioCurso: Yup.date(),

                        dataFimCurso: Yup.date(),
                    })}
                >

                <Form>
                <div className="step-1">
                    <h5>Dados pessoais</h5>
                    <Row>
                        <Col sm={{ size: '6' }}>
                            <FormInput
                                label="Nome"
                                name="nome"
                                type="text"/>
                        </Col>

                        <Col sm={{ size: '6' }}>
                            <FormInput
                                label="E-mail"
                                name="email"
                                type="text"/>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm={{ size: '4' }}>
                            <FormInput
                                label="Telefone"
                                name="telefone"
                                type="text"
                                placeholder="(xx) xxxxx-xxxx"/>
                        </Col>

                        <Col sm={{ size: '4' }}>
                            <FormInput
                                label="Cidade"
                                name="cidade"
                                type="text"/>
                        </Col>

                        <Col sm={{ size: '4' }}>
                            <FormInput
                                label="UF"
                                name="uf"
                                type="text"
                                placeholder="Sigla da cidade"/>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm={{ size: '6' }}>
                            <FormInput
                                label="Linkedin"
                                name="linkedin"
                                type="text"
                                placeholder="https://www.linkedin.com/in/<seu_usuario>/"/>
                        </Col>

                        <Col sm={{ size: '6' }}>
                            <FormInput
                                label="Github"
                                name="github"
                                type="text"
                                placeholder="http://github.com/<seu_usuario>"/>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm={{ size: '6' }}>
                            <FormInput
                                label="Cargo"
                                name="cargo"
                                type="text"
                                placeholder="Ex: Estudante, Desenvolvedora Front-End..."/>
                        </Col>

                        <Col sm={{ size: '6' }}>
                            <Label for="avatar">Avatar</Label>
                            <FormFile name="avatar"/>
                        </Col>
                    </Row>
                </div>

                <div className="step-2">
                    <h5>Currículo - experiência profissional</h5>

                    <Row>
                        <Col sm={{ size: '12' }}>
                            <FormInput
                                label="Objetivo"
                                name="objetivo"
                                type="text"/>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm={{ size: '6' }}>
                            <FormInput
                                label="Empresa"
                                name="empresa"
                                type="text"/>
                        </Col>

                        <Col sm={{ size: '6' }}>
                            <FormInput
                                label="Cargo"
                                name="cargoEmpresa"
                                type="text"/>
                        </Col>                                
                    </Row>

                    <Row>
                        <Col sm={{ size: '5' }}>
                            <Label for="dataInicio">Data de inicio</Label>
                            <FormDate name="dataInicio"/>
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
                </div>

                <div className="step-3">
                    <h5>Currículo - experiência acadêmica</h5>

                    <Row>
                        <Col sm={{ size: '6' }}>
                            <FormInput
                                label="Instituição"
                                name="instituicao"
                                type="text"/>
                        </Col>

                        <Col sm={{ size: '6' }}>
                            <FormInput
                                label="Curso"
                                name="curso"
                                type="text"/>
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

                </div>

                <button type="submit">Salvar</button>

                </Form>
                </Formik>
            </Container>
        </div>
    );
};

export default CadastroParticipante;