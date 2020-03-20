import React, {useState } from 'react';
import '../Search/Search.css';

import {
    Input,
    InputGroupText,
    InputGroup,
  } from "reactstrap";

const Search = (props) => {
    const [value, setValue] = useState('');

    const updateValue = (event) => {
        setValue(event.target.value)
        props.onChange(event.target.value)
    };

    return(
        <>
            <InputGroup className="form-group-no-border">
                <InputGroupText>
                    <i className="nc-icon nc-zoom-split" />
                    <Input className="form-control--placeholder" placeholder="Procurar por evento" type="text" minLength={10} maxLength={40} value={value} onChange={updateValue} />
                </InputGroupText>
            </InputGroup>
        </>
    )
}

export default Search;