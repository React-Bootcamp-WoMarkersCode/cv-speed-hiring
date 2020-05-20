import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Container, Row, Col } from "reactstrap";
import ListaCardParticipante from '../../components/Cards/CardParticipante/ListaCardParticipante';
import AccessCode from '../../components/AccessCode/AccessCode';
import AccessCodeRegister from '../../components/AccessCode/AccessCodeRegister';
import './evento.css';
import FirebaseService from '../../services/FirebaseService';
import Bg from '../../assets/img/bg-evento.png';
import {firebaseStorage} from '../../utils/firebaseUtils'
    
const Evento = () => {
    const {eventoId} = useParams();
    const [evento,  setEvento] = useState({});
    const [showList, setShowList] = useState(false);
    const [ image, setImage ] = useState("")
    

    const updateShowList = (value) => setShowList(value);
    
    useEffect(() => {
        if(eventoId) {
            FirebaseService.getUniqueDataBy('Eventos', eventoId, snp => {
                setEvento(snp)
                if(snp.img.includes("images/eventos/")) {
                    firebaseStorage.ref().child(snp.img).getDownloadURL().then((url) => {
                        setImage(url);
                    })
                    .catch((error) => (console.log(error)))
                }
            });
            
        }
    }, [eventoId]);



    return(
        <>
        <div className="section section-dark section-nucleo-icons section-evento">
            <div className="image-top" style={{ backgroundImage: `url(${Bg})`}}>
                <Container>
                <Row>
                    <Col lg="6" md="12">
                    <h1 className="title">{evento.nomeEvento}</h1>
                    <hr />
                    <div className="description">
                        <p>{evento.descricao}</p>
                        <hr />
                        <p><i className="nc-icon nc-tag-content" />
                        <b> Categoria: </b> {evento.categoria}</p>
                        <p><i className="nc-icon nc-button-play" />
                        <b> Início: </b> {evento.dataInicio}</p>
                        <p><i className="nc-icon nc-button-power" />
                        <b> Conclusão: </b> {evento.dataFim}</p>
                        <p><i className="nc-icon nc-time-alarm" />
                        <b> Horário: </b> {evento.horarioInicio} até {evento.horarioFim}</p>
                    </div>
                    </Col>
                    <Col className="mt-5">
                        <img src={image} className="col-md-12" alt="banner com a divulgação do evento"></img>
                    </Col>
                </Row>
                </Container>
            </div>
        </div>{" "}
        
        <Container>
            <Row>
                <Col lg="8" md="12">
                    {evento.detalhes &&
                        <>
                        <h2>Detalhes</h2><hr />
                        <div className="event-details">
                            {evento.detalhes.map((texto, index) => (
                                <p key={index}>{texto.texto}</p>
                            ))}
                        </div>
                        </>
                    }
                    {showList
                        ? <div>
                                <h2>Participantes</h2>
                                <hr />
                                <ListaCardParticipante participantes={evento.participantes} />
                            </div>
                        : <div>
                            <AccessCode onChange={updateShowList} codigo={evento.codigoAcesso} />
                        </div>
                    }
                    <AccessCodeRegister codigo={evento.codigoParticipante} />
                </Col>
                <Col lg="4" md="12">
                    <div className="sidebar-evento bg-light">
                        <div className="sidebar__info">
                            <p><strong>{evento.categoria}</strong></p>
                            <p><strong>{evento.dataInicio} até {evento.dataFim}</strong></p>
                            <p><strong>{evento.horarioInicio} até {evento.horarioFim}</strong></p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Evento;
