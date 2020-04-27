import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Spinner } from 'reactstrap';
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useHistory } from 'react-router-dom';

const initialValues = {
    email: "",
};

const validationSchema = Yup.object().shape({
    email: Yup.string()
    .email('Email inválido')
    .required('Obrigatório')
});

const SolicitacaoAcesso = () => {

    const onSubmit = (e) => {
        e.preventDefault()
        let errors = formik.errors
        let values = formik.values

        if(Object.keys(errors).length > 0 || values.nome === "") {
          alert("Os dados devem ser preenchidos corretamente!");
          return;
        }
    }

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

    return (
        <Container className="form-solicita-acesso">
            <h2>Solicite sua chave de acesso!</h2>
            <div className="box-solicita-acesso">
                <Form method="post" onSubmit={onSubmit}>
                    <FormGroup>
                        <Label for="email">Email:</Label>
                        <Input
                            type="text"
                            name="email"
                            id="email"
                            placeholder="Digite seu email..."
                            {...formik.getFieldProps("email")}
                        />
                        {formik.errors && <DisplayErrors msgErros={formik.errors.email} />}
                    </FormGroup>
                    <Button>Solicitar</Button>
                    {/* {loading && <div className="spinner-box"><Spinner color="primary"></div>} */}
                </Form>
            </div>
        </Container>
    );
}

export default SolicitacaoAcesso