import React from 'react';
import './style.css';
import img from '../../assets/img/avatar01.svg'
import mail from '../../assets/icons/mail.svg'
import phone from '../../assets/icons/phone.svg'
import local from '../../assets/icons/local.svg'
import linkdn from '../../assets/icons/linkdn.svg'
import ghub from '../../assets/icons/ghub.svg'

const DadosParticipante = (props) => {

  const { nome, cargo, contato, email, linkedin, github, cidade, estado} = props

  return (
    <section>
        <div className="avatar">
          <img src={img} className="avatar-img"/>
          <h3 className="nomeParticipante">{nome}</h3>
          <h4 className="cargoParticipante">{cargo}</h4>
        </div>
       <div className="dadosParticipante">
          <ul>
          <li><img src={mail} className="icon-contato"/>{email}</li>
          <hr/>
          <li><img src={phone} className="icon-contato"/>{contato}</li>
          <hr/>
          <li><img src={local} className="icon-contato"/>{cidade} - {estado}</li>
          <hr/>
          <li><img src={linkdn} id="icon-rede-social" className="icon-contato"/><a href={linkedin} id="rede-social">{linkedin}</a></li>
          <hr/>
          <li><img src={ghub} id="icon-rede-social" className="icon-contato"/><a href={github} id="rede-social">{github}</a></li>
          </ul>
       </div>
    </section>
  );
};

export default DadosParticipante;