import React from 'react';
import '../Search/Search.css';

import {
    Form,
    Input,
    InputGroupText,
    InputGroup,
  } from "reactstrap";

const Search = () => {

    return(
        <>
            <Form className="register-form search-form search-form-color">
                <InputGroup className="form-group-no-border">
                    <InputGroupText>
                        <i className="nc-icon nc-zoom-split" />
                        <Input className="form-control--placeholder" placeholder="Procurar por evento" type="text" />
                    </InputGroupText>
                </InputGroup>
            </Form>
        </>
    )
}

export default Search;