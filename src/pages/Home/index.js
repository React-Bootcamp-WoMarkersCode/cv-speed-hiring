import React from 'react';
import IndexHeader from '../../components/Headers/IndexHeader';
import imgHeader from '../../assets//img/grupo-de-pessoas-speed-hiring.jpg';
import useData from '../../hooks/useData'
import SearchEvento from '../../components/Search/SearchEvento'

const Home = () => {

    const dataHeader = {
        title: "speed hiring",
        urlImg: imgHeader,
        description: "Tornando rápido e fácil a busca de novos candidatos, facilitando o processo de contratação."
    }

    const eventoList = useData('https://speedhiring-8423b.firebaseio.com/eventos.json');

    return (
        <>
            <IndexHeader props={dataHeader} />
            <SearchEvento eventoList={eventoList} />
        </>
    )
};

export default Home;