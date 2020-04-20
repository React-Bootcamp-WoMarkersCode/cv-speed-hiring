import React from "react";
import { Button, Form, FormGroup, Label, Input, Container, CustomInput } from 'reactstrap';
import { useFormik } from "formik";
import * as Yup from "yup";
import FirebaseService from "../../services/FirebaseService";

import './UserForm/style.css';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email inválido')
    .required('Obrigatório'),
  senha: Yup.string()
    .min(6, 'Senha muito curta')
    .max(50, 'Senha muito grande')
    .required('Obrigatório'),
  senhaConfirmacao: Yup.string()
    .oneOf([Yup.ref('senha'), null], 'As senhas devem ser iguais')
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
    senhaConfirmacao: "",
    nome: "",
    descricao: "",
    linkSite: "",
    avatar: ""
};

const UserForm = (props) => {
  // const {imageFinal, componentImage} = props;
  // const onSubmit = values => {};

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

  const onSubmit = (e) => {
    e.preventDefault();
    let file = formik.values.avatar
    let path = `images/${file.name}`  

    console.log(validationSchema)
    // const email = formik.values.email
    // const senha = formik.values.senha
    // const nome = formik.values.nome
    // const descricao = formik.values.descricao
    // const link_site = formik.values.linkSite
    // const avatar = path



    // FirebaseService.storageFile(file, path)
    // const newid = FirebaseService.pushData('usuarios', {
    //   email,
    //   senha,
    //   nome,
    //   descricao,
    //   link_site,
    //   avatar
    // });
  }

  return (
      <Container id="form-page">
        <h2>Cadastrar-se</h2>
      <Form onSubmit={onSubmit}>
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
          <Label for="senhaConfirmacao">Repita a Senha:</Label>
          <Input type="password" name="senhaConfirmacao" id="senhaConfirmacao" placeholder="Repita a senha..." {...formik.getFieldProps("senhaConfirmacao")} />
          {formik.errors && <DisplayErrors msgError={formik.errors.senhaConfirmacao}/>}
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
        <FormGroup>
          <Label for="avatar">Logo da Empresa:</Label>
          <CustomInput 
            type="file" 
            name="avatar" 
            id="avatar" 
            label="Selecione uma imagem" 
            onChange={(event) => {
              formik.values.avatar = ""
              if (typeof event.target.files[0] !== "undefined") {
                formik.values.avatar = event.target.files[0];
              }
            }} 
          />
          {formik.errors && <DisplayErrors msgError={formik.errors.avatar}/>}
        </FormGroup>
        <Button>Cadastrar</Button>
      </Form>
      </Container>
    );
  };
  
  export default UserForm;