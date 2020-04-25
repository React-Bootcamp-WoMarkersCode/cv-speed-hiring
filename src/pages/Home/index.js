import React, { useEffect, useState } from 'react';
import IndexHeader from '../../components/Headers/IndexHeader';
import imgHeader from '../../assets//img/grupo-de-pessoas-speed-hiring.jpg';
import SearchEvento from '../../components/Search/SearchEvento';
import FirebaseService from '../../services/FirebaseService';

const Home = () => {

    const dataHeader = {
        title: "speed hiring",
        urlImg: imgHeader,
        description: "Tornando rápido e fácil a busca de novos candidatos, facilitando o processo de contratação."
    }
    const [eventoList, setEventoList] = useState([]);

    useEffect(() => {
        FirebaseService.getDataList('Eventos', snp => {
            setEventoList(snp)
        }, 100)
    }, [])

    return (
        <>
            <IndexHeader props={dataHeader} />
            <SearchEvento eventoList={eventoList} />
        </>
    )
};

export default Home;