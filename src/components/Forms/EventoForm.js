import React, { useContext, useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input, Container, CustomInput, Spinner } from 'reactstrap';
import { useFormik } from "formik";
import * as Yup from "yup";
import FirebaseService from "../../services/FirebaseService"
import { useHistory } from 'react-router-dom';
import { UserContext } from "../../providers/UserProvider"


import './EventoForm/style.css';

const today = new Date().toJSON().split('T')[0];
const validationSchema = Yup.object().shape({
    nomeEvento: Yup.string()
    .min(2, 'mínimo 2 caracteres')
    .max(100, 'máximo 100 caracteres')
    .required('Obrigatório'),
    categoria: Yup.string()
    .min(2, 'mínimo 2 caracteres')
    .max(50, 'máximo 50 caracteres')
    .required('Obrigatório'),
    dataInicio: Yup.date()
    .min(today, 'A data não pode ser menor ou igual a data de hoje')
    .required('Obrigatório'),
    dataFim: Yup.date()
    .min(Yup.ref('dataInicio'), 'A data não pode ser menor que a data de início')
    .required('Obrigatório'),
    horarioInicio: Yup.string()
    .required('Obrigatório'),
    horarioFim: Yup.string()
    .required('Obrigatório'),  
    img: Yup.string()
    .required('Obrigatório'),
    detalhes: Yup.string()
    .required('Obrigatório'),
    descricao: Yup.string()
    .min(50, 'mínimo 50 caracteres')
    .max(300, 'máximo 300 caracteres')
    .required('Obrigatório')
});


const initialValues = {
    nomeEvento: "",
    descricao: "",
    categoria: "",
    dataInicio: "",
    dataFim: "",
    horarioInicio: "",
    horarioFim: "",
    img: "",
    detalhes: ""
};

const generateFileName = (name) => {
  let filename = name.split('.');
  let hash = Math.random().toString(36).substring(7);
  let finalName = filename[0]+"_"+hash;
  
  return finalName+"."+filename[1];
}

const formataData = (data) => {
  let arrayData = data.split("-")

  return (arrayData[2]+"/"+arrayData[1]+"/"+arrayData[0])
}

function geraCodigo(length) {
  var s = '';
  do { s += Math.random().toString(36).substr(2); } while (s.length < length);
  s = s.substr(0, length);
  
  return s;
}

function buildDetalhes(text) {
  let arrayDetalhes = text.split(/\r?\n/);
  let objDetalhes = {}
  for (let i=0; i < arrayDetalhes.length; i++) {
    objDetalhes[i] = {texto: arrayDetalhes[i]}
  }

  return objDetalhes
}

const codigoVisualizacao = geraCodigo(6)
const codigoCadastro = geraCodigo(6)

const EventoForm = () => {
  const history = useHistory();
  const user = useContext(UserContext);
  const [ loading, setLoading ] = useState(false)
  const [ finalDetalhes, setFinalDetalhes] = useState({})
  const [ empresa, setEmpresa ] = useState("");
  const [ key, setKey ] = useState("");

  const formik = useFormik({
    initialValues,
    validationSchema
  });

  useEffect(() => {
    if(user) {
        const uid = user.uid;

        FirebaseService.getDataList('usuarios', snp => {
            let userData = snp.find(el => el.uid === uid);
            setKey(userData.key);
            setEmpresa(userData.nome)
        })
    }
  }, [user]);

  const onSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    let errors = formik.errors
    let values = formik.values

    if (Object.keys(errors).length > 0 || values.nomeEvento === "" ) {
      setLoading(false)
      alert("Os dados devem ser preenchidos corretamente!");
      return;
    }
    
    let file = values.img
    let fileName = generateFileName(file.name)
    let path = "images/eventos/"+fileName
    
    const detalhes = finalDetalhes
    const nomeEvento = values.nomeEvento
    const descricao = values.descricao
    const categoria = values.categoria
    const dataInicio = formataData(values.dataInicio)
    const dataFim = formataData(values.dataFim)
    const horarioInicio = values.horarioInicio
    const horarioFim = values.horarioFim
    const img = path
    const codigoAcesso = codigoVisualizacao
    const codigoParticipante = codigoCadastro
    const nomeEmpresa = empresa
    
    let object = {
      nomeEvento,
      descricao,
      categoria,
      dataInicio,
      dataFim,
      horarioInicio,
      horarioFim,
      img,
      detalhes,
      codigoParticipante,
      codigoAcesso,
      nomeEmpresa
    }


    FirebaseService.storageFile(file, path)
    
    let idEvento = FirebaseService.insertDataWithCustomId("Eventos/", object)
    let eventoEmpresa = {}
    eventoEmpresa[idEvento] = true;

    FirebaseService.updateData(`usuarios/${key}/Eventos`, eventoEmpresa)
    .then(() => {
      setLoading(false)
      history.push("overview/eventos");
    })
    .catch(() => {
      alert("Não foi possível cadastrar!")
    })


    // console.log(values);
    // console.log(errors);

  }

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
      <Container id="form-page">
        <h2>Cadastrar Evento</h2>
      <Form method="post" className="box-form" onSubmit={onSubmit}>
        <FormGroup>
            <Label for="nomeEvento">Título:</Label>
            <Input type="text" name="nomeEvento" id="nomeEvento" placeholder="Digite o título do evento..." {...formik.getFieldProps("nomeEvento")} />
            {formik.errors && <DisplayErrors msgError={formik.errors.nomeEvento}/>}
        </FormGroup>
        <FormGroup>
            <div id="datahora-box">
                <div className="datahora">
                    <div>
                        <Label for="dataInicio">Início:</Label>
                        <Input type="date" name="dataInicio" id="dataInicio" {...formik.getFieldProps("dataInicio")} />
                        {formik.errors && <DisplayErrors msgError={formik.errors.dataInicio}/>}
                    </div>
                    <div>
                        <Label for="dataFim">Conclusão:</Label>
                        <Input type="date" name="dataFim" id="dataFim" {...formik.getFieldProps("dataFim")} />
                        {formik.errors && <DisplayErrors msgError={formik.errors.dataFim}/>}
                    </div>
                </div>
                <div className="datahora">
                    <div>
                        <Label for="horarioInicio">Horário de Início:</Label>
                        <Input type="time" name="horarioInicio" id="horarioInicio" {...formik.getFieldProps("horarioInicio")} />
                        {formik.errors && <DisplayErrors msgError={formik.errors.horarioInicio}/>}
                    </div>
                    <div>
                        <Label for="horarioFim">Horário de Término:</Label>
                        <Input type="time" name="horarioFim" id="horarioFim" {...formik.getFieldProps("horarioFim")} />
                        {formik.errors && <DisplayErrors msgError={formik.errors.horarioFim}/>}
                    </div>
                </div>
            </div>
        </FormGroup>
        <FormGroup>
            <Label for="categoria">Categoria:</Label>
            <Input type="text" name="categoria" id="categoria" placeholder="Digite a categoria do evento..." {...formik.getFieldProps("categoria")} />
            {formik.errors && <DisplayErrors msgError={formik.errors.categoria}/>}
        </FormGroup>
        <FormGroup>
          <Label for="img">Imagem que representa o evento:</Label>
          <CustomInput 
            type="file" 
            name="img" 
            id="img" 
            label="Selecione uma imagem" 
            onChange={(event) => {
              formik.values.img = ""
              if (typeof event.target.files[0] !== "undefined") {
                formik.values.img = event.target.files[0];
              }
            }} 
          />
          {formik.errors && <DisplayErrors msgError={formik.errors.img}/>}
        </FormGroup>
        <FormGroup>
            <Label for="descricao">Digite uma pequena descrição para ser exibido na busca:</Label>
            <Input type="textarea" name="descricao" id="descricao" placeholder="Digite a descrição do evento..." {...formik.getFieldProps("descricao")} />
            {formik.errors && <DisplayErrors msgError={formik.errors.descricao}/>}
        </FormGroup>
        <FormGroup>
            <Label for="detalhes">Digite os detalhes de como será o evento:</Label>
            <Input type="textarea" name="detalhes" id="detalhes" placeholder="Digite os detalhes do evento..." {...formik.getFieldProps("detalhes")} onBlur={(e) => setFinalDetalhes(buildDetalhes(formik.values.detalhes))}  />
            {formik.errors && <DisplayErrors msgError={formik.errors.detalhes}/>}
        </FormGroup>
        {codigoCadastro && codigoVisualizacao && <div id="codigos">
          <div className="box-codigo">
            <span className="label-codigo">Código de visualização de participantes:</span>
            <span className="result-codigo">{codigoVisualizacao}</span>
          </div>
          <div className="box-codigo">
            <span className="label-codigo">Código de cadastro de participantes:</span>
            <span className="result-codigo">{codigoCadastro}</span>
          </div>
        </div>}
        <Button>Cadastrar</Button>
        {loading && <div className="spinner-box">
            <Spinner color="primary" />
        </div>}
      </Form>
      </Container>
    );
  };
  
  export default EventoForm;
