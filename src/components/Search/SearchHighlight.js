import React from 'react';
import '../Search/SearchHighlight.css';
import Search from "../../components/Search/Search";

import {
    Container,
    Row,
    Col
  } from "reactstrap";

const SearchHighlight = () => {
    return(
        <>
            <div className="search-highlight">
                <Container>
                    <Row>
                        <Col className="mx-auto" lg="10" md="6">
                            <Search />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default SearchHighlight;