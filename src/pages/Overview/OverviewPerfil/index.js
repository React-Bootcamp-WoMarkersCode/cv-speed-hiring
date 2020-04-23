/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import UserEditForm from '../../../components/Forms/UserEditForm';

const OverviewPerfil = (props) => {
    const {email, descricao, avatar, link_site, nome} = props.userData;
    const [data, setData] = useState({});
    
    useEffect(() => {
        if(props.userData) {
            let obj = {
                email,
                descricao,
                avatar,
                link_site,
                nome,
                senha: "",
                senha_confirmacao: ""
            }
            setData(obj);
        }
    }, [props, email, descricao, avatar, link_site, nome])
    
    return(
        <>
            <UserEditForm data={data} />
        </>
    )
}

export default OverviewPerfil;
