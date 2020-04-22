import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Spinner } from 'reactstrap';
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useHistory } from 'react-router-dom';
import FirebaseService from "../../services/FirebaseService"

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

    const history = useHistory();

    const [ loading, setLoading ] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        let errors = formik.errors
        let values = formik.values

        if (Object.keys(errors).length > 0 || values.nome === "" ) {
            alert("Os dados devem ser preenchidos corretamente!");
            return;
        }

        setLoading(true)
        FirebaseService.login(values.email, values.senha)
        .then(() => {
            setLoading(false)
            history.push("/");
        })
        .catch(() => {
            setLoading(false)
            alert("Credencial incorreta")
        });
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
            <h2>Entrar na Collective Hiring</h2>
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
                    <FormGroup className="checkbox-form">
                        <Input type="checkbox" name="remember" id="check" {...formik.getFieldProps("remember")}/>
                        <Label for="remember">Lembrar meu login</Label>
                    </FormGroup>
                    <Button>Entrar</Button>
                    {loading && <div className="spinner-box">
                        <Spinner color="primary" />
                    </div>}
                    <div className="links-box">
                        <p>
                            <span>Não possui cadastro? </span><Link to={`/cadastrar-conta`}>Fazer Cadastro</Link>
                        </p>
                        <p>
                            <span>Esqueceu sua senha? </span><Link to={`/esqueceu-senha`}>Recupere sua senha</Link>
                        </p>
                    </div>
                </Form>
            </div>

        </Container>
    );
}

export default LoginForm;