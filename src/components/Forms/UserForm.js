import React from "react";
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import { useFormik } from "formik";

import './UserForm/style.css';

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
    initialValues
  });

  return (
      <Container id="form-page">
        <h2>Cadastrar-se</h2>
      <Form onSubmit={(e) => {
        e.preventDefault(); 
        formik.values.avatar=imageFinal
        console.log(formik.values)

      }}>
        <FormGroup>
          <Label for="email">Email:</Label>
          <Input type="text" name="email" id="email" placeholder="Digite seu email..." {...formik.getFieldProps("email")} />
        </FormGroup>
        <FormGroup>
          <Label for="senha">Senha:</Label>
          <Input type="password" name="senha" id="senha" placeholder="Digite uma senha..." {...formik.getFieldProps("senha")} />
        </FormGroup>
        <FormGroup>
          <Label for="nome">Nome da Empresa:</Label>
          <Input type="text" name="nome" id="nome" placeholder="Digite o nome da empresa..." {...formik.getFieldProps("nome")} />
        </FormGroup>
        <FormGroup>
          <Label for="descricao">Descrição:</Label>
          <Input type="textarea" name="descricao" id="descricao" placeholder="Faça uma descrição da empresa..." {...formik.getFieldProps("descricao")} />
        </FormGroup>
        <FormGroup>
          <Label for="linkSite">Site da Empresa:</Label>
          <Input type="text" name="linkSite" id="linkSite" placeholder="Link do site da empresa..." {...formik.getFieldProps("linkSite")} />
        </FormGroup>
        {componentImage}
        <input type="hidden" value={imageFinal} />
        <Button>Cadastrar</Button>
      </Form>
      </Container>
    );
  };
  
  export default UserForm;