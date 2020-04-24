import React from "react";
import { Button, Form, FormGroup, Label, Input, CustomInput } from 'reactstrap';
import { useFormik } from "formik";
import * as Yup from "yup";
import FirebaseService from "../../services/FirebaseService"

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email inválido')
    .required('Obrigatório'),
  nome: Yup.string()
    .min(2, 'Nome muito curto')
    .max(150, 'Nome muito grande')
    .required('Obrigatório'),
  link_site: Yup.string()
    .required('Obrigatório'),
  avatar: Yup.string()
    .required('Obrigatório')
});

const UserEditForm = (props) => {
  const obj = {email: '', descricao:'', avatar:'', link_site: '', nome: ''};
  const {email, descricao, avatar, link_site, nome, key} = props.data;
  const initialValues = props.data.email === undefined ? obj : {email, descricao, avatar, link_site, nome};
  const enableReinitialize = true;

  const formik = useFormik({
    initialValues,
    enableReinitialize,
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
    e.preventDefault()
    let errors = formik.errors;
    let values = formik.values;
    let path = '';
    let file = '';
    let object = {};


    if (Object.keys(errors).length > 0 || values.email === "" ) {
      alert("Os dados devem ser preenchidos corretamente!");
      return;
    }
  
    if(typeof values.avatar === 'object') {
      file = values.avatar;
      path = `images/${values.avatar.name}`;
    } else {
      path = avatar;
    }
    
    object = {...values, avatar: path}

    if(typeof file === 'object') {
      FirebaseService.storageFile(file, path)
    }

    FirebaseService.editData('usuarios', key, object)
    .then(() => {
      alert("Os dados foram atualizados.")
    }).catch((error) => console.log(error));

  }

  return (
      <>
      <h2 className="overview-title">Editar perfil</h2>
      <Form method="post" onSubmit={onSubmit}>
        <FormGroup>
          <Label for="email">Email:</Label>
          <Input type="text" name="email" id="email" placeholder="Digite seu email..." onChange={formik.handleChange} {...formik.getFieldProps("email")} />
          {formik.errors && <DisplayErrors msgError={formik.errors.email}/>}
        </FormGroup>
        <FormGroup>
          <Label for="nome">Nome da Organização:</Label>
          <Input type="text" name="nome" id="nome" placeholder="Digite o nome da Organização..." onChange={formik.handleChange} {...formik.getFieldProps("nome")} />
          {formik.errors && <DisplayErrors msgError={formik.errors.nome}/>}
        </FormGroup>
        <FormGroup>
          <Label for="avatar">Logo da Organização:</Label>
          <CustomInput 
            type="file" 
            name="avatar" 
            id="avatar" 
            label="Selecione uma imagem" 
            onChange={(event) => {
              formik.values.avatar = "";
              if (typeof event.target.files[0] !== "undefined") {
                formik.values.avatar = event.target.files[0];
              }
            }} 
          />
          {formik.errors && <DisplayErrors msgError={formik.errors.avatar}/>}
        </FormGroup>
        <FormGroup>
          <Label for="descricao">Descrição:</Label>
          <Input type="textarea" name="descricao" id="descricao" placeholder="Faça uma descrição da Organização..." {...formik.getFieldProps("descricao")} />
          {formik.errors && <DisplayErrors msgError={formik.errors.descricao}/>}
        </FormGroup>
        <FormGroup>
          <Label for="link_site">Site da Organização:</Label>
          <Input type="text" name="link_site" id="link_site" placeholder="Link do site da Organização..." {...formik.getFieldProps("link_site")} />
          {formik.errors && <DisplayErrors msgError={formik.errors.link_site}/>}
        </FormGroup>
        <Button>Cadastrar</Button>
      </Form>
      </>
    );
  };
  
  export default UserEditForm;