import React from 'react';
import IndexHeader from "../../components/Headers/IndexHeader";
import imgHeader from "../../assets//img/grupo-de-pessoas-speed-hiring.jpg"

const Home = () => {
    const dataHeader= {
        title: "speed hiring",
        urlImg: imgHeader,
        description: "Tornando rápido e fácil a busca de novos candidados,facilitando o processo de contratação."
    }
    return(
        <>
            <IndexHeader props={dataHeader} />
            <div>
                <h2>Componente campo de busca da lista bootcamps</h2>
                <h2>Componente Lista bootcamps</h2>
            </div>
        </>
    )
};

export default Home;