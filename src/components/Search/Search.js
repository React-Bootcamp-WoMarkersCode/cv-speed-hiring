import React from 'react';

import {
    Card,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col
  } from "reactstrap";

const Search = () => {

    return(
        <>
            <h3 className="title mx-auto">Buscar por evento</h3>
            <Row>
                <Col className="mx-auto" lg="4" md="6">
                    <Form className="register-form">
                        <InputGroup className="form-group-no-border">
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <i className="nc-icon nc-zoom-split" />
                                    <Input placeholder="Procurar" type="text" />
                                </InputGroupText>
                            </InputGroupAddon>
                        </InputGroup>
                    </Form>
                </Col>
          </Row>
        </>
    )
}

export default Search;