import React, { useState, useEffect } from 'react';
import { Container, Form, Row, Col } from "reactstrap";

import { Loading } from '../Loading';
import CardEvento from '../Cards/CardEvento';
import Search from './Search';
import './SearchEvento/style.css';
import imgNotFoundEvent from '../../assets/img/not-find-event.png'

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
                <Loading title={"Carregando os eventos..."} height={300} width={300}/>
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