import React, { useState, useEffect } from 'react';
import { Container, Form, Row, Col } from "reactstrap";
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";

import Search from './Search';
import './SearchEvento/style.css';
import CardEvento from '../Cards/CardEvento';
import imgNotFoundEvent from '../../assets/img/not-find-event.png'
import * as quotesloading from '../../assets/json/quotesloading.json';

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: quotesloading.default,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
}

const SearchEvento = (props) => {
    const {eventoList} = props;

    const [value, setValue] = useState('');
    const [searchData, setSearchData] = useState(eventoList);
    const [notFound, setNotFound] = useState(1);

    useEffect(() => {
        setSearchData(eventoList)
    }, [eventoList])

    const updateValue = (value) => {
        setSearchData(eventoList)
        setValue(value);

        let newData = [];

        if (eventoList.length > 0) {
            eventoList.forEach((d) => {
                let valueData = d["nomeEvento"].toLowerCase();
                
                if (valueData.includes(value.toLowerCase())) 
                    newData.push(d)
            })
            setSearchData(newData);
        }

        if (newData.length === 0) {
            setNotFound(0);
        }
    }

    return (
        <>
        <div className="search-highlight">
            <Container>
                <Row>
                    <Col className="mx-auto" md="10">
                        <Form className="register-form search-form search-form-color" onSubmit={e => e.preventDefault()}>
                            <Search onChange={updateValue} maxLength="40" />
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
        <Container>
            {notFound === 1 && searchData.length === 0 &&
                <FadeIn>
                    <div className="d-flex justify-content-center align-items-center mt-5">
                        <h4>Carregando os eventos...</h4>
                    </div>
                    <Lottie options={defaultOptions} height={300} width={300} />
                </FadeIn>
            }
            {searchData &&
                <div className="box-flex mt-5">
                    {searchData && searchData.map((evento, index) => (
                        <CardEvento key={index} evento={evento}/>
                    ))}
                </div>
            }
            {notFound === 0 &&
                <div className="search__notfound">
                    <h4>Evento <strong>{value}</strong> não encontrado</h4>
                    <img src={imgNotFoundEvent} className="search__notfound-img"alt="img" />
                </div>
            }
        </Container>
        </>
    )
}

export default SearchEvento;