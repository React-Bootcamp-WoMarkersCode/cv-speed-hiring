import React from "react";
import { 
    Container, 
    Row, 
    Col, 
    CustomInput, 
    Label,
    Input
} from "reactstrap";
import { Formik } from "formik";
import { Step1, Step2, Step3 } from "../../components/Stepper";
import { DisplayFormikState } from "../../components/DisplayFormikState";
import "./style.css";

const CadastroParticipante = () => (
    
    <div className="top">
        <Container>
            <h2>Cadastro de participantes</h2>
            <hr/>
            
            <Formik
                initialValues={{ 
                    currentStep: 1,
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
                    atual: false,
                    instituicao: "",
                    curso: "",
                    dataInicioCurso: "",
                    dataFimCurso: "", 
                }}

                onSubmit={async values => {
                    await new Promise(resolve => setTimeout(resolve, 500));
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                {props => {
                    const {
                        values,
                        dirty,
                        isSubmitting,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        handleReset
                    } = props;
                                        
                    return (
                        <form onSubmit={handleSubmit}>
                            
                        <div className="step-1">
                            <h5>Dados pessoais</h5>
                            <Row>
                                <Col sm={{ size: '6' }}>
                                    <Step1
                                        label="Nome"
                                        name="nome"
                                        type="text"
                                        value={values.nome}
                                        handleChange={handleChange}
                                        onBlur={handleBlur}
                                        currentStep={1}
                                    />
                                </Col>

                                <Col sm={{ size: '6' }}>
                                    <Step1
                                        label="E-mail"
                                        name="email"
                                        type="text"
                                        value={values.email}
                                        handleChange={handleChange}
                                        onBlur={handleBlur}
                                        currentStep={1}
                                    />
                                </Col>
                            </Row>

                            <Row>
                                <Col sm={{ size: '4' }}>
                                    <Step1
                                        label="Telefone"
                                        name="telefone"
                                        type="text"
                                        placeholder="(xx) xxxxx-xxxx"
                                        value={values.telefone}
                                        handleChange={handleChange}
                                        onBlur={handleBlur}
                                        currentStep={1}
                                    />
                                </Col>

                                <Col sm={{ size: '4' }}>
                                    <Step1
                                        label="Cidade"
                                        name="cidade"
                                        type="text"
                                        value={values.cidade}
                                        handleChange={handleChange}
                                        onBlur={handleBlur}
                                        currentStep={1}
                                    />
                                </Col>

                                <Col sm={{ size: '4' }}>
                                    <Step1
                                        label="UF"
                                        name="uf"
                                        type="text"
                                        placeholder="Sigla da cidade"
                                        value={values.uf}
                                        handleChange={handleChange}
                                        onBlur={handleBlur}
                                        currentStep={1}
                                    />
                                </Col>
                            </Row>

                            <Row>
                                <Col sm={{ size: '6' }}>
                                    <Step1
                                        label="Linkedin"
                                        name="linkedin"
                                        type="text"
                                        placeholder="https://www.linkedin.com/in/<seu_usuario>/"
                                        value={values.linkedin}
                                        handleChange={handleChange}
                                        onBlur={handleBlur}
                                        currentStep={1}
                                    />
                                </Col>

                                <Col sm={{ size: '6' }}>
                                    <Step1
                                        label="Github"
                                        name="github"
                                        type="text"
                                        placeholder="http://github.com/<seu_usuario>"
                                        value={values.github}
                                        handleChange={handleChange}
                                        onBlur={handleBlur}
                                        currentStep={1}
                                    />
                                </Col>
                            </Row>

                            <Row>
                                <Col sm={{ size: '6' }}>
                                    <Step1
                                        label="Cargo"
                                        name="cargo"
                                        type="text"
                                        placeholder="Ex: Estudante, Desenvolvedora Front-End..."
                                        value={values.cargo}
                                        handleChange={handleChange}
                                        onBlur={handleBlur}
                                        currentStep={1}
                                    />
                                </Col>

                                <Col sm={{ size: '6' }}>
                                    <Label for="avatar">Avatar</Label>
                                    <Input 
                                        id="avatar" 
                                        type="file" 
                                        name="avatar"
                                        value={values.avatar}
                                        handleChange={handleChange}
                                        onBlur={handleBlur}
                                        currentStep={1}
                                    />
                                </Col>
                            </Row>
                        </div>

                        <div className="step-2">
                            <h5>Currículo - experiência profissional</h5>

                            <Row>
                                <Col sm={{ size: '12' }}>
                                    <Step2
                                        label="Objetivo"
                                        name="objetivo"
                                        type="text"
                                        value={values.objetivo}
                                        handleChange={handleChange}
                                        onBlur={handleBlur}
                                        currentStep={2}
                                    />
                                </Col>
                            </Row>

                            <Row>
                                <Col sm={{ size: '6' }}>
                                    <Step2
                                        label="Empresa"
                                        name="empresa"
                                        type="text"
                                        value={values.empresa}
                                        handleChange={handleChange}
                                        onBlur={handleBlur}
                                        currentStep={2}
                                    />
                                </Col>

                                <Col sm={{ size: '6' }}>
                                    <Step2
                                        label="Cargo"
                                        name="cargoEmpresa"
                                        type="text"
                                        value={values.cargoEmpresa}
                                        handleChange={handleChange}
                                        onBlur={handleBlur}
                                        currentStep={2}
                                    />
                                </Col>                                
                            </Row>

                            <Row>
                                <Col sm={{ size: '4' }}>
                                    <Label for="dataInicio">Data de inicio</Label>
                                    <Input
                                        id="dataInicio"
                                        name="dataInicio"
                                        type="date"
                                        placeholder="00/00/0000"
                                        value={values.dataInicio}
                                        handleChange={handleChange}
                                        onBlur={handleBlur}
                                        currentStep={2}
                                    />
                                </Col>

                                <Col sm={{ size: '4' }}>
                                    <Label for="dataFim">Data final</Label>
                                    <Input
                                        id="dataFim"
                                        name="dataFim"
                                        type="date"
                                        placeholder="00/00/0000"
                                        value={values.dataFim}
                                        handleChange={handleChange}
                                        onBlur={handleBlur}
                                        currentStep={2}
                                    />
                                </Col>

                                <Col sm={{ size: '4' }}>
                                    <Label>Atual ?</Label>
                                    <CustomInput 
                                        id="atual" 
                                        label="Sim" 
                                        name="atual" 
                                        type="switch" 
                                        value={values.atual}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        currentStep={3}
                                    />
                                </Col>
                            </Row>
                        </div>

                        <div className="step-3">
                            <h5>Currículo - experiência acadêmica</h5>

                            <Row>
                                <Col sm={{ size: '6' }}>
                                    <Step3
                                        label="Instituição"
                                        name="instituicao"
                                        type="text"
                                        value={values.instituicao}
                                        handleChange={handleChange}
                                        onBlur={handleBlur}
                                        currentStep={3}
                                    />
                                </Col>

                                <Col sm={{ size: '6' }}>
                                    <Step3
                                        label="Curso"
                                        name="curso"
                                        type="text"
                                        value={values.curso}
                                        handleChange={handleChange}
                                        onBlur={handleBlur}
                                        currentStep={3}
                                    />
                                </Col>
                            </Row>

                            <Row>
                                <Col sm={{ size: '6' }}>
                                    <Label for="dataInicioCurso">Data de inicio</Label>
                                    <Input
                                        id="dataInicioCurso"
                                        name="dataInicioCurso"
                                        type="date"
                                        placeholder="00/00/0000"
                                        value={values.dataInicioCurso}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        currentStep={3}
                                    />
                                </Col>

                                <Col sm={{ size: '6' }}>
                                    <Label for="dataFimCurso">Data de conclusão</Label>
                                    <Input
                                        id="dataFimCurso"
                                        name="dataFimCurso"
                                        type="date"
                                        placeholder="00/00/0000"
                                        value={values.dataFimCurso}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        currentStep={3}
                                    />
                                </Col>
                            </Row>

                        </div>

                        <button
                            type="button"
                            className="outline"
                            onClick={handleReset}
                            disabled={!dirty || isSubmitting}>
                            Limpar
                        </button>
                        
                        <button>Próximo</button>

                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>

                            <DisplayFormikState {...props} />
                        </form>
                    );
                }}
            </Formik>
        </Container>
    </div>
);

export default CadastroParticipante;