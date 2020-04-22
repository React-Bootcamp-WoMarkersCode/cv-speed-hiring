import React from 'react';
import { 
    Container, 
    Col,
    Card,
    CardTitle,
    CardText,
    CardBody,
} from "reactstrap";
import { Link } from 'react-router-dom';
import IndexHeader from '../../components/Headers/IndexHeader';
import imgHeader from '../../assets/img/grupo-de-pessoas-speed-hiring.jpg';
import imgWoman from '../../assets/img/woman-dev.jpg';
import imgWorkshop from '../../assets/img/workshop.jpg';
import './style.css'

const Sobre = () => {

    const dataHeader = {
        title: "speed hiring",
        urlImg: imgHeader,
        description: "Uma ponte entre devs e empresas"
    }

    return (
        <>
            <IndexHeader props={dataHeader} />
            <Container>
                <h2>Collective Hiring</h2>
                <hr />
                <h5>
                    Tornando rápido e fácil a busca de novos candidatos, 
                    facilitando o processo de contratação.
                </h5>
                <br/>
                <p><b>
                    O Collective Hiring é um projeto desenvolvido durante o bootcamp de React 
                    da comunidade <a className="link-womk" href="https://womakerscode.org/" target="_blank" rel="noopener noreferrer"><strong>WoMarkersCode</strong></a> com o seguinte propósito: 
                </b></p>
                <p><b>
                    Ajudar empresas que desejam contratar desenvolvedoras front-end e fullstack
                </b></p>
                <hr />

                    <Col sm="12">
                        <div>
                            <Card>
                            <CardBody>
                                <h3>
                                    <center>Quer conhecer mulheres desenvolvedoras ?
                                    <span role="img" aria-label="sheep"> 🧡</span></center>
                                </h3>
                            </CardBody>
                            <center>
                                <img src={imgWoman} alt="Imagem de um desenvolvedora trabalhando em sua casa, seu notebook, tomando um café" />
                            </center>
                            <CardBody>
                                <CardText>
                                    <center>
                                        <p>
                                            Na tela inicial, selecione um evento e em seguida solicite seu código de acesso,
                                            que será enviado por e-mail.
                                        </p>
                                        <p>
                                            Com este código você poderá visualizar os dados
                                            das participantes daquele bootcamp, workshop ou meetup escolhido.
                                        </p>
                                    </center>
                                </CardText>
                                <center>
                                    <h6><Link to={`/`}><strong>Clique aqui e acesse os eventos !</strong></Link></h6>
                                </center>
                            </CardBody>
                            </Card>
                        </div>
                    </Col>

                    <Col sm="12">
                        <div>
                            <Card>
                            <CardBody>
                                <CardTitle>
                                    <h3>
                                        <center>É de alguma organização e deseja cadastrar eventos ou participantes ?
                                        <span role="img" aria-label="sheep"> ✨</span></center>
                                    </h3>
                                </CardTitle>
                            </CardBody>
                            <center><img src={imgWorkshop} alt="Imagem de um workshop" /></center>
                            <CardBody>
                                    <center>
                                        <h6><Link to={`/cadastrar-conta`}><srong>Clique aqui e realize o seu cadastro !</srong></Link></h6>
                                    </center>
                            </CardBody>
                            </Card>
                        </div>
                    </Col>
            </Container>
        </>
    )
}

export default Sobre;