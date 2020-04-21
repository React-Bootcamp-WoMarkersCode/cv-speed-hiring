import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Spinner } from 'reactstrap';
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from 'react-router-dom';
import FirebaseService from "../../services/FirebaseService"

import './LoginForm/style.css';

const initialValues = {
    email: ""
};

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Email inválido')
        .required('Obrigatório')
});

const LoginFormRecoverPass = () => {

    const [ loading, setLoading ] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(formik.values)
    }

    const formik = useFormik({
        initialValues,
        validationSchema
    });


    const DisplayErrors = (props) => {
        const { msgError } = props
        return(
            <>
            {msgError && <span className="validate-error">
                {msgError}
            </span>}
            </>
        )
    }


    return (
        <Container id="form-login">
            <h2>Recuperar Senha</h2>
            <p className="sub-title">Digite seu email cadastrado abaixo que enviaremos a ele um link para a renovação de sua senha</p>
            <div id="box-login">
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
                        {formik.errors && <DisplayErrors msgError={formik.errors.email}/>}
                    </FormGroup>
                    <Button>Enviar email</Button>
                    {loading && <div className="spinner-box">
                        <Spinner color="primary" />
                    </div>}
                    <div className="links-box">
                        <p>
                            <span>Não possui cadastro? </span><Link to={`/cadastrar-conta`}>Fazer Cadastro</Link>
                        </p>
                    </div>
                </Form>
            </div>

        </Container>
    );
}

export default LoginFormRecoverPass;