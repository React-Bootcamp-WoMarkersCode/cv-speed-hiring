import React, { useEffect } from 'react';
import IndexHeader from '../../components/Headers/IndexHeader';
import imgHeader from '../../assets//img/grupo-de-pessoas-speed-hiring.jpg';
import useData from '../../hooks/useData'
import SearchEvento from '../../components/Search/SearchEvento'
import FirebaseService from '../../services/FirebaseService'

const Home = () => {

    const dataHeader = {
        title: "speed hiring",
        urlImg: imgHeader,
        description: "Tornando rápido e fácil a busca de novos candidatos, facilitando o processo de contratação."
    }

    const eventoList = useData('https://speedhiring-8423b.firebaseio.com/eventos.json');
    // FirebaseService.getDataList("eventos/", result => {
    //     let object = {...result}
    //     eventoList = object
    // })


    return (
        <>
            <IndexHeader props={dataHeader} />
            {eventoList && <SearchEvento eventoList={eventoList}/>}
        </>
    )

};

export default Home;