import React from 'react';
import { Container } from "reactstrap";
import { Link } from 'react-router-dom';
import imgWoman from '../../assets/img/woman-dev.png';
import imgHiring from '../../assets/img/hiring-sobre.png';
import Bg from '../../assets/img/bg-evento-sobre.png';
import Seguranca from '../../assets/img/sobre-seguranca.png';
import Evento from '../../assets/img/sobre-eventos.png';
import Participantes from '../../assets/img/sobre-participantes.png';
import imgWorkshop from '../../assets/img/workshop.png';
import './style.css'

const Sobre = () => {

    return (
        <>
            <div className="about">
                <div className="section-about-bg">
                    <Container>
                        <div className="box-fluid box-fluid---pd-top">
                            <div className="box-fluid__text">
                                <h2 className="box-fluid__title box-fluid__title-hightlight">
                                    <span className="box-fluid__title-category">Collective Hiring</span>
                                    Tornando rápido e fácil a busca de novos candidatos, 
                                    facilitando o processo de contratação.
                                </h2>
                            </div>
                            <div className="box-fluid__img">
                                <img src={imgHiring} alt="Imagem de recrutadores buscando currículos" className="img-bottom" />
                            </div>
                        </div>
                    </Container>
                </div>
                <div className="section-more-info-bg" style={{ backgroundImage: `url(${Bg})`}}>
                    <Container>
                        <div className="box-fluid box-fluid---pd-top">
                            <div className="box-icons">
                                <i className="box-icons__icon">
                                    <img src={Evento} alt="Imagem sobre os eventos que ocorrem na area de Tecnologia" className="box-icons__img" />
                                </i>
                                <h3 className="box-icons__title box-fluid__title">Eventos</h3>
                                <p className="box-icons__text">Encontre em um só lugar os eventos que ocorrem na área de Tecnologia.</p>
                            </div>
                            <div className="box-icons">
                                <i className="box-icons__icon">
                                    <img src={Participantes} alt="Imagem os participantes dos eventos" className="box-icons__img" />
                                </i>
                                <h3 className="box-icons__title box-fluid__title">Participantes</h3>
                                <p className="box-icons__text">Encontre os participantes dos eventos e o candidato para a sua vaga.</p>
                            </div>
                            <div className="box-icons">
                                <i className="box-icons__icon">
                                    <img src={Seguranca} alt="Imagem sobre a segurança no acesso aos currículos" className="box-icons__img" />
                                </i>
                                <h3 className="box-icons__title box-fluid__title">Segurança</h3>
                                <p className="box-icons__text">Solicite o código de acesso e confere informações dos participantes.</p>
                            </div>
                        </div>
                    </Container>
                </div>
                
                <div className="section-about-bg section-about-bg---pd">
                    <Container>
                        <div className="box-fluid box-fluid---left">
                            <div className="box-fluid__img box-fluid__img---mr-right">
                                <img src={imgWorkshop} alt="Imagem de eventos que ocorremna área de Tecnologia" />
                            </div>
                            <div className="box-fluid__text">
                                <h2 className="box-fluid__title box-fluid__title-hightlight">
                                    <span className="box-fluid__title-category">eventos</span>
                                    Recrutadores
                                </h2>
                                <p>Confira os eventos que ocorrem na área de Tecnologia para ter mais informações sobre os participantes.</p>
                                <Link to={`/`} className="about__btn">Confira os eventos</Link>
                            </div>
                        </div>
                    </Container>
                </div>

                <div className="section-about-bg">
                    <Container>
                        <div className="box-fluid box-fluid---right">
                            <div className="box-fluid__text">
                                <h2 className="box-fluid__title box-fluid__title-hightlight">
                                    <span className="box-fluid__title-category">eventos</span>
                                    Participantes
                                </h2>
                                <p>Cadasstre o seu currículo no evento que você participou e aumete a sua chance de ser contratado</p>
                                <Link to={`/cadastrar-participante`} className="about__btn">Cadastre o seu currículo.</Link>
                            </div>
                            <div className="box-fluid__img box-fluid__img---mr-left">
                                <img src={imgWoman} alt="Imagem de participante do evento" className="about__img-med" />
                            </div>
                        </div>
                    </Container>
                </div>

            </div>
        </>
    )
}

export default Sobre;