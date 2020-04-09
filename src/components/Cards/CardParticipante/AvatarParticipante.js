import React from 'react';
import { CardImg } from 'reactstrap';
import imgAvatarDefault from '../../../assets/icons/teste-avatar.svg';

const AvatarParticipante = (props) => {

    const { nome, avatar } = props
    const avatarImg = (typeof avatar === 'string') ? avatar : "";

    return (
        <span id="card_avatar">
            <CardImg src={
                (avatarImg.match(/\.(jpeg|jpg|gif|png)$/) != null) ? avatar : imgAvatarDefault} alt={nome} 
            />
        </span>
    );
};

export default AvatarParticipante;