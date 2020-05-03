import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import { useFormik } from "formik";
import * as Yup from "yup";
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import FirebaseService from '../../services/FirebaseService';
import imgChave from '../../assets/img/key.svg'
import '../Forms/SolicitacaoAcesso/style.css'
import axios from 'axios';

const initialValues = {
    empresa: "",
    email: "",
    evento: "",
};

const validationSchema = Yup.object().shape({
    email: Yup.string()
    .email('Email inválido')
    .required('Obrigatório')
});

const SolicitacaoAcesso = () => {

        const { eventoId } = useParams();
        const [evento, setEvento] = useState({});
        const history = useHistory();

        useEffect(() => {
            if (eventoId) {
                 FirebaseService.getUniqueDataBy('Eventos', eventoId, snp => {
                     setEvento(snp)
                 });

             }
         }, [eventoId]);

    const formik = useFormik({
        initialValues,
        validationSchema
    });

    const DisplayErrors = (props) => {
        const { msgError } = props
        return(
            <>
            {msgError && <span className="validate-error">{msgError}</span>}
            </>    
        )
    }

    const [sendMail, setSendMail] = useState({
        email: '',
        empresa: '',
        evento: '',
    });

    const handleChange = (event) => {
        setSendMail({ ...sendMail, [event.target.name]: event.target.value })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        let errors = formik.errors
        let values = formik.values

        if (Object.keys(errors).length > 0 || values.nome === "") {
            alert("Os dados devem ser preenchidos corretamente!");
            return;
        }

            axios.post('https://us-central1-speedhiring-8423b.cloudfunctions.net/sendMail', {
                empresa: values.empresa,
                email: values.email,
                evento: values.evento
            })
                .then(function (response) {
                    alert("Chave de acesso enviada por e-mail!")
                    history.push(`/evento/${eventoId}`)
                    console.log(response)
                })
                .catch(function (error) {
                    console.log(error)
                })
    }

    return (
        <Container className="form-solicita-acesso">
            <Row className="row-margin-top-cv">
                <Col lg="4" md="8"> 
                    <div className="div-img">
                        <img src={imgChave} className="img-chave" alt="Ilustração mulher segurando chave" />
                    </div>
                </Col>
                <Col lg="8" md="12">
                    <div className="box-solicita-acesso">
                        <h2 className="titulo-solicitacao">Solicite sua chave de acesso!</h2>
                        <Form method="post" onSubmit={handleSubmit}>
                            <FormGroup>
                                <Label for="empresa">Empresa:</Label>
                                <Input
                                    className="input-empresa"
                                    type="text"
                                    name="empresa"
                                    id="empresa"
                                    value={sendMail.empresa}
                                    onChange={handleChange}
                                    placeholder="Digite o nome da sua empresa..."
                                    required
                                    {...formik.getFieldProps("empresa")}
                                />
                             <br></br>
                             <Label for="email">Email:</Label>
                                <Input 
                                    className="input-email"
                                    type="text"
                                    name="email"
                                    id="email"
                                    value={sendMail.email}
                                    onChange={handleChange}
                                    placeholder="Digite seu email..."
                                    required
                                    {...formik.getFieldProps("email")}
                                />
                                {formik.errors && <DisplayErrors msgErros={formik.errors.email} />}
                                <br></br>
                                <Label for="Evento">Evento:</Label>
                                <Input
                                    className="input-evento"
                                    type="text"
                                    name="evento"
                                    id="evento"
                                    placeholder={evento.nomeEvento}
                                    readOnly
                                />
                            </FormGroup>
                            <Button className="btn-solicitacao" type="submit">Solicitar</Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default SolicitacaoAcesso