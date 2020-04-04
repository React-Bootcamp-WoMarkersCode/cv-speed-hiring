import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import React from 'react';
import Routes from './Routes';
import App from './App';

jest.setTimeout(1000);

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import SolicitaChaveAcesso from './pages/SolicitaChaveAcesso'
import VerificaChaveAcesso from './pages/VerificaChaveAcesso'
import Evento from './pages/Evento'
import Participantes from './pages/Participantes'
import Participante from './pages/Participante' 
import CadastroConta from './pages/CadastroConta'
import AcessoConta from './pages/AcessoConta'
import Perfil from './pages/Perfil'
import CadastroEvento from './pages/CadastroEvento'
import PoliticaPrivacidade from './pages/PoliticaPrivacidade'
import TermoUso from './pages/TermoUso'

test('Rota para Home', (done) => {
    const wrapper = mount(
        <MemoryRouter initialEntries={[ '/' ]}>
            <App/>
        </MemoryRouter>
    );
    
    setTimeout(() => {
        wrapper.update();
        expect(wrapper.find(Home)).toHaveLength(1);
        done();
    }, 1000);
});

test('Rota para NotFound', (done) => {
    const wrapper = mount(
        <MemoryRouter initialEntries={[ '/daisdiasd' ]}>
            <App/>
        </MemoryRouter>
    );
    
    setTimeout(() => {
        wrapper.update();
        expect(wrapper.find(NotFound)).toHaveLength(1);
        done();
    }, 1000);
});

test('Rota para Solicitar Chave de acesso', (done) => {
    const wrapper = mount(
        <MemoryRouter initialEntries={[ '/solicitar-chave-de-acesso' ]}>
            <App/>
        </MemoryRouter>
    );
    
    setTimeout(() => {
        wrapper.update();
        expect(wrapper.find(SolicitaChaveAcesso)).toHaveLength(1);
        done();
    }, 1000);
});

test('Rota para Verificar Chave de acesso', (done) => {
    const wrapper = mount(
        <MemoryRouter initialEntries={[ '/verificar-chave-de-acesso' ]}>
            <App/>
        </MemoryRouter>
    );
    
    setTimeout(() => {
        wrapper.update();
        expect(wrapper.find(VerificaChaveAcesso)).toHaveLength(1);
        done();
    }, 1000);
});

test('Rota para Evento Sem Id', (done) => {
    const wrapper = mount(
        <MemoryRouter initialEntries={[ '/evento' ]}>
            <App/>
        </MemoryRouter>
    );
    
    setTimeout(() => {
        wrapper.update();
        expect(wrapper.find(NotFound)).toHaveLength(1);
        done();
    }, 1000);
});

test('Rota para Evento Com Id', (done) => {
    const wrapper = mount(
        <MemoryRouter initialEntries={[ '/evento/1' ]}>
            <App/>
        </MemoryRouter>
    );
    
    setTimeout(() => {
        wrapper.update();
        expect(wrapper.find(Evento)).toHaveLength(1);
        done();
    }, 1000);
});

test('Rota para Participantes Sem Id de Empresa', (done) => {
    const wrapper = mount(
        <MemoryRouter initialEntries={[ '/participantes' ]}>
            <App/>
        </MemoryRouter>
    );
    
    setTimeout(() => {
        wrapper.update();
        expect(wrapper.find(NotFound)).toHaveLength(1);
        done();
    }, 1000);
});

test('Rota para Participantes Com Id de Empresa', (done) => {
    const wrapper = mount(
        <MemoryRouter initialEntries={[ '/participantes/1' ]}>
            <App/>
        </MemoryRouter>
    );
    
    setTimeout(() => {
        wrapper.update();
        expect(wrapper.find(Participantes)).toHaveLength(1);
        done();
    }, 1000);
});

test('Rota para Participante Sem Id', (done) => {
    const wrapper = mount(
        <MemoryRouter initialEntries={[ '/participante' ]}>
            <App/>
        </MemoryRouter>
    );
    
    setTimeout(() => {
        wrapper.update();
        expect(wrapper.find(NotFound)).toHaveLength(1);
        done();
    }, 1000);
});

test('Rota para Participante Com Id de Empresa e Sem Id de participante', (done) => {
    const wrapper = mount(
        <MemoryRouter initialEntries={[ '/participante/1' ]}>
            <App/>
        </MemoryRouter>
    );
    
    setTimeout(() => {
        wrapper.update();
        expect(wrapper.find(NotFound)).toHaveLength(1);
        done();
    }, 1000);
});

test('Rota para Participante Com Id de Empresa e Com Id de participante', (done) => {
    const wrapper = mount(
        <MemoryRouter initialEntries={[ '/participante/1/1' ]}>
            <App/>
        </MemoryRouter>
    );
    
    setTimeout(() => {
        wrapper.update();
        expect(wrapper.find(Participante)).toHaveLength(1);
        done();
    }, 1000);
});

test('Rota para Cadastrar Conta', (done) => {
    const wrapper = mount(
        <MemoryRouter initialEntries={[ '/cadastrar-conta' ]}>
            <App/>
        </MemoryRouter>
    );
    
    setTimeout(() => {
        wrapper.update();
        expect(wrapper.find(CadastroConta)).toHaveLength(1);
        done();
    }, 1000);
});

test('Rota para Acessar Conta', (done) => {
    const wrapper = mount(
        <MemoryRouter initialEntries={[ '/acessar-conta' ]}>
            <App/>
        </MemoryRouter>
    );
    
    setTimeout(() => {
        wrapper.update();
        expect(wrapper.find(AcessoConta)).toHaveLength(1);
        done();
    }, 1000);
});

test('Rota para Perfil', (done) => {
    const wrapper = mount(
        <MemoryRouter initialEntries={[ '/perfil' ]}>
            <App/>
        </MemoryRouter>
    );
    
    setTimeout(() => {
        wrapper.update();
        expect(wrapper.find(Perfil)).toHaveLength(1);
        done();
    }, 1000);
});

test('Rota para Cadastrar Evento', (done) => {
    const wrapper = mount(
        <MemoryRouter initialEntries={[ '/cadastrar-evento' ]}>
            <App/>
        </MemoryRouter>
    );
    
    setTimeout(() => {
        wrapper.update();
        expect(wrapper.find(CadastroEvento)).toHaveLength(1);
        done();
    }, 1000);
});

test('Rota para Politica Privacidade', (done) => {
    const wrapper = mount(
        <MemoryRouter initialEntries={[ '/politica-de-privacidade' ]}>
            <App/>
        </MemoryRouter>
    );
    
    setTimeout(() => {
        wrapper.update();
        expect(wrapper.find(PoliticaPrivacidade)).toHaveLength(1);
        done();
    }, 1000);
});

test('Rota para Termo de Uso', (done) => {
    const wrapper = mount(
        <MemoryRouter initialEntries={[ '/termo-de-uso' ]}>
            <App/>
        </MemoryRouter>
    );
    
    setTimeout(() => {
        wrapper.update();
        expect(wrapper.find(TermoUso)).toHaveLength(1);
        done();
    }, 1000);
});