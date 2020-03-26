import React from 'react';
import { CardImg } from 'reactstrap';

import imgAvatarDefault from '../../../assets/icons/teste-avatar.svg';

const AvatarParticipante = (props) => {

    const { nome, avatar } = props
    
    return (
        <span id="card_avatar">
            <CardImg src={avatar ? avatar : imgAvatarDefault} alt={nome} />
        </span>
    );
};

export default AvatarParticipante;