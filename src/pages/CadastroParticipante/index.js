import React from "react";
import { Container } from "reactstrap";
import { Formik, Form  } from "formik";
import { Avatar } from "./Avatar";
import { DadosPessoais } from "./DadosPessoais";
import { ExperienciaProfissional } from "./ExperienciaProfissional";
import { ExperienciaAcademica } from "./ExperienciaAcademica";
import imgWoman from '../../assets/img/woman.jpg';

import * as Yup from 'yup';
import "./style.css";

const CadastroParticipante = () => {

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    return (
        <div className="top">
            <Container>
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

                <div className="flexcontainer">

                    <div className="box-image top">
                        <img src={imgWoman} width="450" height="500" alt="grupo de mulheres"/>
                    </div>

                    <div className="box-form">

                        <Form>
                            <h2>Cadastro de participantes</h2>
                            <hr />

                            <section className="dados-pessoais">
                                <DadosPessoais/>
                            </section>

                            <section className="dados-pessoais-avatar">
                                <Avatar/>
                            </section>

                            <section className="experiencia-profissional">
                                <ExperienciaProfissional/>
                            </section>

                            <section className="experiencia-academica">
                                <ExperienciaAcademica/>
                            </section>

                            <button type="submit">Salvar</button>
                        </Form>
                    </div>

                </div>
                
                </Formik>
            </Container>
        </div>
    );
};

export default CadastroParticipante;