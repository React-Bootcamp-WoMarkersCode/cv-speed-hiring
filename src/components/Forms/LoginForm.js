import React from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import { useFormik } from "formik";
import * as Yup from "yup";
// import FirebaseService from "../../services/FirebaseService"

import './LoginForm/style.css';

const initialValues = {
    email: "",
    senha: "",
    remember: true
};

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Email inválido')
        .required('Obrigatório'),
    senha: Yup.string()
        .min(6, 'Senha muito curta')
        .max(50, 'Senha muito grande')
        .required('Obrigatório')
});

const LoginForm = () => {

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
            <h2>Acessar a Plataforma</h2>
            <div id="box-login">
                <Form>
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
                    <FormGroup>
                        <Label for="senha">Senha:</Label>
                        <Input 
                            type="password" 
                            name="senha" 
                            id="senha" 
                            placeholder="Digite uma senha..." 
                            {...formik.getFieldProps("senha")}
                        />
                        {formik.errors && <DisplayErrors msgError={formik.errors.senha}/>}
                    </FormGroup>
                    <FormGroup check>
                        <Input type="checkbox" name="remember" id="check" {...formik.getFieldProps("remember")}/>
                        <Label for="remember" check>Lembrar meu login</Label>
                    </FormGroup>
                    <Button>Entrar</Button>
                </Form>
            </div>

        </Container>
    );
}

export default LoginForm;