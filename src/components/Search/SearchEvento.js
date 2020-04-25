import React, { useState, useEffect } from 'react';
import Search from './Search';
import CardEvento from '../Cards/CardEvento';
import {
    Container,
    Form,
    Row,
    Col
  } from "reactstrap";

import './SearchEvento/style.css';
import imgNotFoundEvent from '../../assets/img/not-find-event.png'

const SearchEvento = (props) => {
    const {eventoList} = props;

    const [value, setValue] = useState('');
    const [searchData, setSearchData] = useState(eventoList);

    useEffect(() => {
        setSearchData(eventoList)
    }, [eventoList])

    const updateValue = (value) => {
        setSearchData(eventoList)
        setValue(value);
        if (eventoList.length > 0) {
            let newData = [];
            eventoList.forEach((d) => {
                let valueData = d["nomeEvento"].toLowerCase();
                
                if (valueData.includes(value.toLowerCase())) 
                    newData.push(d)
            })
            setSearchData(newData);
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
            {searchData &&
                <div className="box-flex mt-5">
                    {searchData && searchData.map((evento, index) => (
                        <CardEvento key={index} evento={evento}/>
                    ))}
                </div>
            }
            {
                searchData.length === 0 &&
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