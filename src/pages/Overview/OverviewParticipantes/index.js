import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { 
    Button, 
    Collapse, 
    Modal, 
    ModalHeader, 
    ModalBody, 
    ModalFooter 
} from "reactstrap";

import CSVReader from 'react-csv-reader'
import { CSVLink } from "react-csv"

import ListAdminItens from "../../../components/ListAdminItens/index";
import FirebaseService from '../../../services/FirebaseService';
import fileIcon from '../../../assets/img/file-plus.png';

const OverviewParticipantes = (props) => {
    const {userData} = props;
    const [isOpen, setIsOpen] = useState(false);
    const [events, setEvents] = useState([]);
    const [modal, setModal] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const toggleModal = () => setModal(!modal);

    const handleForce = (data, fileInfo) => console.log(data, fileInfo);

    const papaparseOptions = {
        header: true,
        dynamicTyping: true,
        skipEmptyLines: true,
        transformHeader: header => header.toLowerCase().replace(/\W/g, "_")
    };

    const updateData = (userData) => {
        if(userData.Eventos) {
            let eventos = Object.keys(userData.Eventos)
            let eventosL = eventos.length
            let eventosTrue = []
            
            for (let i=0; i < eventosL; i++) {
                let key = eventos[i]
                if (userData.Eventos[key]) {
                    FirebaseService.getUniqueDataBy('Eventos', key, snp => {
                        eventosTrue.push(snp)
                    });
                }
            }
            setTimeout(()=>{
                setEvents(eventosTrue)
            }, 1000)
        }
    }
    
    useEffect(() => {
        updateData(userData)
    },[userData]);

    const csvData = [
        [
            "nome",
            "telefone",
            "email",
            "linkedin",
            "github",
            "cidade",
            "uf",
            "cargo",
            "avatar",
            "objetivo",
            "empresa",
            "cargoEmpresa",
            "dataInicio",
            "dataFim",
            "atual",
            "instituicao",
            "curso",
            "dataInicioCurso",
            "dataFimCurso"
        ],
        [
            "Cecilia Greene",
            "+55 11 980009999",
            "email@ewqee.com.br",
            "https://www.linkedin.com",
            "https://www.github.com",
            "São Paulo",
            "SP",
            "Front-End Developer",
            "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light",
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis",
            "Apple Inc.",
            "Senior Front End Developer",
            "04/2020",
            "",
            "S",
            "Faculdade de Informática e Administração Paulista", ,
            "Ánalise e desenvolvimento de sistemas", ,
            "02/2015",
            "12/2016"
        ],
        [
            "Amanda Abel",
            "+55 11 980009999",
            "email@ewqee.com.br",
            "https://www.linkedin.com",
            "https://www.github.com",
            "São Paulo",
            "SP",
            "Front-End Developer",
            "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light",
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis",
            "Figma",
            "Junior Front End Developer",
            "08/2018",
            "04/2020",
            "N",
            "Faculdade de Informática e Administração Paulista", ,
            "Ánalise e desenvolvimento de sistemas", ,
            "02/2018",
            "12/2019"
        ],
    ];

    return(
        <>
        <h2 className="overview-title">Seus participantes</h2>  
        {events && events.map(({key, participantes, nomeEvento}, index) => (
            <div key={index}>
                <Button color="primary" onClick={toggle} className="overview__tabs-btn d-flex justify-content-between">
                    {nomeEvento}
                </Button>
                <Collapse isOpen={isOpen}>
                    <div className="d-flex justify-content-end mb-3 align-items-center">


                        {/* Componentizar o Modal */}
                        <button className="overview-btn-new" onClick={toggleModal}><span>Importar participante</span><i className="fa fa-upload"></i></button>
                        <Modal isOpen={modal} toggleModal={toggleModal}>
                            <ModalHeader toggleModal={toggleModal}><strong>Importar participantes</strong></ModalHeader>
                            <ModalBody className="text-center">

                                <img src={fileIcon} alt='icone de um arquivo' /><p/>
                                <p><strong>Para inserir a lista de participantes:</strong></p>
                                <p><strong>1. baixe o modelo da planilha</strong></p>
                                <p><strong>2. salve o arquivo no formato .csv</strong></p>
                                <p><strong>3. faça upload do arquivo</strong></p>

                                <CSVLink data={csvData}>Baixar arquivo</CSVLink>
                                
                                <hr/>
                                <div className="importDocArea">
                                    <strong>Upload do arquivo</strong><p/>
                                    <CSVReader
                                        inputId='file-upload'
                                        cssClass="csv-reader-input"
                                        cssInputClass="csv-input"
                                        onFileLoaded={handleForce}
                                        parserOptions={papaparseOptions}
                                    />
                                </div>

                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={toggleModal}>Salvar</Button>{' '}
                                <Button color="secondary" onClick={toggleModal}>Cancelar</Button>
                            </ModalFooter>
                        </Modal>


                        <Link className="overview-btn-new" to="/cadastrar-participante"><span>Adicionar participante</span><i className="fa fa-plus"></i></Link>
                    </div>
                    {participantes && Object.keys(participantes).map((item,index) => (
                        <ListAdminItens key={index} title={participantes[item].nome} label={participantes[item].email} index={key} icon="fa fa-user" />
                    ))} 
                </Collapse>
            </div>
        ))}
        {events.length === 0 &&
            <p className="text-center">Nehum participante cadastrado</p>
        }
        </>
    )
}

export default OverviewParticipantes;
