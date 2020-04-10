import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from "reactstrap";
import Image from '../../assets/img/notfound.png';

import './style.css';


const NotFoundContainer = () => {
    const msg = "Não conseguimos encontrar o que você procurou";
    return(
        <Container id="notfound-container">
            <div className="notfound-text">
                <h2>Eita!</h2>
                <p>{msg}</p>
                <span>Código do erro: 404</span>
                <div className="notfound-links">
                    <p>Alguns links úteis:</p>
                    <div className="list">
                        <Link to={`/`}>Home</Link>
                        <Link to={`/cadastrar-conta`}>Cadastrar Conta</Link>
                        <Link to={`/acessar-conta`}>Acessar Conta</Link>
                        <Link to={`/termo-de-uso`}>Termos de Uso</Link>
                    </div>
                </div>
            </div>
            <div className="notfound-image">
                <img src={Image} alt={msg}></img>
            </div>
        </Container>
    )
}

export default NotFoundContainer;
