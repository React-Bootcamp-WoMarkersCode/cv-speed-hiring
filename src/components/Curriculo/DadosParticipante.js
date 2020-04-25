import React from 'react';
import './style.css';
import mail from '../../assets/icons/mail.svg'
import phone from '../../assets/icons/phone.svg'
import local from '../../assets/icons/local.svg'
import linkdn from '../../assets/icons/linkdn.svg'
import ghub from '../../assets/icons/ghub.svg'
import { Button } from 'reactstrap';
import imgAvatarDefault from '../../assets/icons/teste-avatar.svg';

const DadosParticipante = (participante, clickDownload) => {

  const avatarImg = (typeof participante.avatar === 'string') ? participante.avatar : "";
    
  return (
    <section className="perfil" >
      <div className="avatar">
        <div className="avatarImagem">
          <img src={((avatarImg.match(/\.(jpeg|jpg|gif|png)$/) != null) || (avatarImg.includes('avataaars.io'))) ? participante.avatar : imgAvatarDefault} alt={participante.nome} className="avatar-img" />
        </div>
          <div className="avatarDados">
            <h3 className="nomeParticipante">{participante.nome}</h3>
            <h4 className="cargoParticipante">{participante.cargo}</h4>
          </div>
        </div>
       <div className="dadosParticipante">
          <ul>
            <li><img src={mail} className="icon-contato" alt="ícone de e-mail"/>{participante.email}</li>
            <hr className="linha-dados"/>
            <li><img src={phone} className="icon-contato" alt="ícone de telefone"/>{participante.telefone}</li>
            <hr className="linha-dados" />
          <li><img src={local} className="icon-contato" alt="ícone de localidade" />{participante.cidade} - {participante.uf}</li>
            <hr className="linha-dados" />
          <li><img src={linkdn} className="icon-contato icon-rede-social" alt="ícone do linkedin" /><a href={participante.linkedin} className="rede-social">{participante.linkedin}</a></li>
            <hr className="linha-dados" />
          <li><img src={ghub} className="icon-contato icon-rede-social" alt="ícone do github" /><a href={participante.github} className="rede-social">{participante.github}</a></li>
          </ul>
       </div>

      <Button className="button-cv" onClick={clickDownload}>Download CV</Button>
      {/* <Button className="button-cv" onClick={() => MyDoc(objetivo)}>Download CV</Button> */}
    </section>
  )
}

export default DadosParticipante;
