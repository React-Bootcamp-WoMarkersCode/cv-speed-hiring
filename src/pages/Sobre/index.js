import React from 'react';
import { Container } from "reactstrap";
import IndexHeader from '../../components/Headers/IndexHeader';
import imgHeader from '../../assets//img/grupo-de-pessoas-speed-hiring.jpg';

const Sobre = () => {

    const dataHeader = {
        title: "speed hiring",
        urlImg: imgHeader,
        description: "Tornando rápido e fácil a busca de novos candidatos, facilitando o processo de contratação."
    }

    return (
        <>
            <IndexHeader props={dataHeader} />
            <Container>
                <h1>Uma ponte entre desenvolvedoras e empresas</h1>
                <hr />
                <p>Se você quer contratar desenvolvedoras front-end e fullstack, essa é a oportunidade!</p>
                <p>Quer conhecer nossas alunas? Então se cadastre em nossa plataforma e tenha acesso ao cadastro das participantes dos eventos</p>
                <p>Link de cadastro aqui 👉 http://localhost:3000/acessar-conta</p>
            </Container>
        </>
    )
}

export default Sobre;
