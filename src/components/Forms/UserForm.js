import React from "react";
import { Button, Form, FormGroup, Label, Input, Container, Alert } from 'reactstrap';
import { useFormik } from "formik";
import * as Yup from "yup";

import './UserForm/style.css';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email inválido')
    .required('Obrigatório'),
  senha: Yup.string()
    .min(6, 'Senha muito curta')
    .max(50, 'Senha muito grande')
    .required('Obrigatório'),
  nome: Yup.string()
    .min(2, 'Nome muito curto')
    .max(150, 'Nome muito grande')
    .required('Obrigatório'),
  linkSite: Yup.string()
    .required('Obrigatório'),
  avatar: Yup.string()
    .required('Obrigatório')
});


const initialValues = {
    email: "",
    senha: "",
    nome: "",
    descricao: "",
    linkSite: "",
    avatar: ""
};

const UserForm = (props) => {
  const {imageFinal, componentImage} = props;
  // const onSubmit = values => {};

  const formik = useFormik({
    initialValues,
    validationSchema
  });

  const DisplayErrors = (props) => {
    const { msgError } = props
    return(
      <>
      {msgError && <span class="validate-error">
        {msgError}
      </span>}
      </>
    )
  }

  return (
      <Container id="form-page">
        <h2>Cadastrar-se</h2>
      <Form onSubmit={(e) => {
        e.preventDefault(); 
        console.log(formik.errors)
        formik.values.avatar=imageFinal

      }}>
        <FormGroup>
          <Label for="email">Email:</Label>
          <Input type="text" name="email" id="email" placeholder="Digite seu email..." {...formik.getFieldProps("email")} />
          {formik.errors && <DisplayErrors msgError={formik.errors.email}/>}
        </FormGroup>
        <FormGroup>
          <Label for="senha">Senha:</Label>
          <Input type="password" name="senha" id="senha" placeholder="Digite uma senha..." {...formik.getFieldProps("senha")} />
          {formik.errors && <DisplayErrors msgError={formik.errors.senha}/>}
        </FormGroup>
        <FormGroup>
          <Label for="nome">Nome da Empresa:</Label>
          <Input type="text" name="nome" id="nome" placeholder="Digite o nome da empresa..." {...formik.getFieldProps("nome")} />
          {formik.errors && <DisplayErrors msgError={formik.errors.nome}/>}
        </FormGroup>
        <FormGroup>
          <Label for="descricao">Descrição:</Label>
          <Input type="textarea" name="descricao" id="descricao" placeholder="Faça uma descrição da empresa..." {...formik.getFieldProps("descricao")} />
          {formik.errors && <DisplayErrors msgError={formik.errors.descricao}/>}
        </FormGroup>
        <FormGroup>
          <Label for="linkSite">Site da Empresa:</Label>
          <Input type="text" name="linkSite" id="linkSite" placeholder="Link do site da empresa..." {...formik.getFieldProps("linkSite")} />
          {formik.errors && <DisplayErrors msgError={formik.errors.linkSite}/>}
        </FormGroup>
        {componentImage }
        <input type="hidden" value={imageFinal} />
        {formik.errors && <DisplayErrors msgError={formik.errors.avatar}/>}
        <Button>Cadastrar</Button>
      </Form>
      </Container>
    );
  };
  
  export default UserForm;