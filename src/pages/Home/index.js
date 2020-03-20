import React from 'react';
import IndexHeader from "../../components/Headers/IndexHeader";
import Search from "../../components/Search/Search";
import imgHeader from "../../assets//img/grupo-de-pessoas-speed-hiring.jpg";

import '../Home/Home.css';

import {
    Container,
    Form,
    Row,
    Col
  } from "reactstrap";

const Home = () => {
    const dataHeader= {
        title: "speed hiring",
        urlImg: imgHeader,
        description: "Tornando rápido e fácil a busca de novos candidatos, facilitando o processo de contratação."
    }
    return(
        <>
            <IndexHeader props={dataHeader} />
            <div className="search-highlight">
                <Container>
                    <Row>
                        <Col className="mx-auto" md="10">
                            <Form className="register-form search-form search-form-color">
                                <Search onChange={value => {console.log(value)}} />
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <div>
                    <h2>Componente Lista bootcamps</h2>
                </div>
            </Container>
        </>
    )
};

export default Home;