import React from 'react';
import './style.css';
import mail from '../../assets/icons/mail.svg'
import phone from '../../assets/icons/phone.svg'
import local from '../../assets/icons/local.svg'
import linkdn from '../../assets/icons/linkdn.svg'
import ghub from '../../assets/icons/ghub.svg'
import { Button } from 'reactstrap';
import imgAvatarDefault from '../../assets/icons/teste-avatar.svg';

const DadosParticipante = (props) => {

  const { nome, cargo, telefone, email, linkedin, github, cidade, uf, avatar} = props
  const avatarImg = (typeof avatar === 'string') ? avatar : "";

  return (
    <section className="perfil" >
      <div className="avatar">
        <div className="avatarImagem">
          <img src={((avatarImg.match(/\.(jpeg|jpg|gif|png)$/) != null) || (avatarImg.includes('avataaars.io'))) ? avatar : imgAvatarDefault} alt={nome} alt="avatar" className="avatar-img" />
        </div>
          <div className="avatarDados">
            <h3 className="nomeParticipante">{nome}</h3>
            <h4 className="cargoParticipante">{cargo}</h4>
          </div>
        </div>
       <div className="dadosParticipante">
          <ul>
            <li><img src={mail} className="icon-contato" alt="ícone de e-mail"/>{email}</li>
            <hr className="linha-dados"/>
            <li><img src={phone} className="icon-contato" alt="ícone de telefone"/>{telefone}</li>
            <hr className="linha-dados" />
            <li><img src={local} className="icon-contato" alt="ícone de localidade"/>{cidade} - {uf}</li>
            <hr className="linha-dados" />
            <li><img src={linkdn} className="icon-contato icon-rede-social" alt="ícone do linkedin" /><a href={linkedin} className="rede-social">{linkedin}</a></li>
            <hr className="linha-dados" />
            <li><img src={ghub} className="icon-contato icon-rede-social" alt="ícone do github"/><a href={github} className="rede-social">{github}</a></li>
          </ul>
       </div>
       <Button className="button-cv">Download CV</Button>
    </section>
  );
};

export default DadosParticipante;