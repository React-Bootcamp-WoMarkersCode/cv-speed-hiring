import React, { useState } from "react";
import { Container, Alert, Button } from "reactstrap";
import { Formik, Form } from "formik";

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

import { Avatar } from "./Avatar";
import { DadosPessoais } from "./DadosPessoais";
import { ExperienciaProfissional } from "./ExperienciaProfissional";
import { ExperienciaAcademica } from "./ExperienciaAcademica";
import imgWoman from '../../assets/img/woman.jpg';

import * as Yup from 'yup';
import "./style.css";

const CadastroParticipante = () => {

    const [activeStep, setActiveStep] = useState(0);
    const [skipped, setSkipped] = useState(new Set());

    const steps = ['Dados Pessoais', 'Avatar', 'Experiência Acadêmica', 'Experiência Profissional']

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const isStepOptional = (step) => {
        return step === 1;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            throw new Error("Você não pode pular uma etapa que é obrigatória.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <div className="top">
            <Container>
                <Formik
                    initialValues={{
                        firstName: "",
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
                        firstName: Yup.string()
                            .max(15, 'Must be 15 characters or less')
                            .required('Required'),

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
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
                    }}
                >

                    <div className="flexcontainer">

                        <div className="box-image top">
                            <Stepper activeStep={activeStep}>
                                {steps.map((label, index) => {
                                    const stepProps = {};
                                    const labelProps = {};

                                    if (isStepSkipped(index)) {
                                        stepProps.completed = false;
                                    }
                                    return (
                                        <Step key={label} {...stepProps}>
                                            <StepLabel {...labelProps}>{label}</StepLabel>
                                        </Step>
                                    );
                                })}
                            </Stepper>
                            <img src={imgWoman} width="450" height="500" alt="grupo de mulheres" />
                        </div>

                        <div className="box-form">
                            <Form>
                                <h2>Cadastro de participantes</h2>
                                <hr />

                                {activeStep === steps.length ? (
                                    <>
                                        <Alert color="success">
                                            Cadastro concluído com sucesso!
                                </Alert>

                                        <Button outline color="info"
                                            onClick={handleReset}>
                                            Novo cadastro ?
                                </Button>{' '}
                                    </>
                                ) : (
                                        <>
                                            {getStepContent(activeStep)}
                                            <div>
                                                <button disabled={activeStep === 0} onClick={handleBack}>
                                                    Voltar
                                </button>

                                                {isStepOptional(activeStep) && (
                                                    <button
                                                        variant="contained"
                                                        color="primary"
                                                        onClick={handleSkip}>
                                                        Pular
                                                    </button>
                                                )}

                                                <button
                                                    variant="contained"
                                                    type="submit"
                                                    onClick={handleNext}>
                                                    {activeStep === steps.length - 1 ? 'Concluído' : 'Próximo'}
                                                </button>
                                            </div>
                                        </>
                                    )}
                            </Form>
                        </div>
                    </div>
                </Formik>
            </Container>
        </div>
    );
};


function getStepContent(step) {
    switch (step) {
        case 0:
            return <DadosPessoais />;
        case 1:
            return <Avatar />
        case 2:
            return <ExperienciaAcademica />;
        case 3:
            return <ExperienciaProfissional />;
        default:
            return 'Etapa desconhecida';
    }
}

export default CadastroParticipante;