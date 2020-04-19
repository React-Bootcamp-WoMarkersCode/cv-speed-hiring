import React from 'react';
import { 
    Container, 
    Col,
    Card,
    CardTitle,
    CardText,
    CardBody,
    CardLink
} from "reactstrap";
import { Link } from 'react-router-dom';
import IndexHeader from '../../components/Headers/IndexHeader';
import imgHeader from '../../assets/img/grupo-de-pessoas-speed-hiring.jpg';
import imgWoman from '../../assets/img/woman-dev.jpg';
import imgWorkshop from '../../assets/img/workshop.jpg';

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
                <h1>Speed Hiring</h1>
                <hr />
                <h5>
                    Tornando rápido e fácil a busca de novos candidatos, 
                    facilitando o processo de contratação.
                </h5>
                <br/>
                <p><b>
                    Este é um projeto desenvolvido durante o bootcamp de React 
                    da comunidade <strong>WoMarkersCode</strong> com o seguinte propósito: 
                </b></p>
                <p><b>
                    Ajudar empresas que deseja contratar desenvolvedoras front-end e fullstack
                </b></p>
                <hr />

                    <Col sm="12">
                        <div>
                            <Card>
                            <CardBody>
                                <h3>
                                    <center>Quer conhecer essas mulheres desenvolvedoras ?
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
                                <h6><Link to={`/`}>Clique aqui e acesse o evento !</Link></h6>
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
                                <CardText>
                                    <center>
                                        <p>
                                            Clique no botão "Cadastrar" do menu e tenha acesso
                                            aos formulários de eventos e participantes.
                                        </p>
                                    </center>
                                </CardText>
                                <CardLink>
                                    <center>
                                    <h6><Link to={`/cadastrar-conta`}>Ou clique aqui e realize o seu cadastro !</Link></h6>
                                    </center>
                                </CardLink>
                            </CardBody>
                            </Card>
                        </div>
                    </Col>
            </Container>
        </>
    )
}

export default Sobre;