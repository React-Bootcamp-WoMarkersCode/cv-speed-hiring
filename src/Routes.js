import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import { Loading } from './components/Loading';

const Home = React.lazy(() => import('./pages/Home'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
const SolicitaChaveAcesso = React.lazy(() => import('./pages/SolicitaChaveAcesso'));
const VerificaChaveAcesso = React.lazy(() => import('./pages/VerificaChaveAcesso'));
const Sobre = React.lazy(() => import('./pages/Sobre'));
const Evento = React.lazy(() => import('./pages/Evento'));
const Participantes = React.lazy(() => import('./pages/Participantes'));
const Participante = React.lazy(() => import('./pages/Participante'));
const CadastroConta = React.lazy(() => import('./pages/CadastroConta'));
const AcessoConta = React.lazy(() => import('./pages/AcessoConta'));
const Perfil = React.lazy(() => import('./pages/Perfil'));
const CadastroEvento = React.lazy(() => import('./pages/CadastroEvento'));
const CadastroParticipante = React.lazy(() => import('./pages/CadastroParticipante'));
const Overview = React.lazy(() => import('./pages/Overview'));
const EsqueceuSenha = React.lazy(() => import('./pages/EsqueceuSenha'));

const Routes = () => (
    <Suspense fallback={
        <Container>
            <Loading title={"Carregando a página..."} height={500} width={500}/>
        </Container>
    }>
        
        <Switch>
            <Route exact path='/' component={routerProps => <Home {...routerProps} />} />
            
            <Route exact path='/not-found' component={routerProps => <NotFound {...routerProps} />} />
            
            <Route exact path='/solicitar-chave-de-acesso' component={routerProps => <SolicitaChaveAcesso {...routerProps} />} />
            
            <Route exact path='/verificar-chave-de-acesso' component={routerProps => <VerificaChaveAcesso {...routerProps} />} />
            
            <Route exact path='/evento/:eventoId' component={routerProps => <Evento {...routerProps} />} />

            <Route exact path='/participantes/:empresaId' component={routerProps => <Participantes {...routerProps} />} />
            
            <Route exact path='/participante/:participanteId' component={routerProps => <Participante {...routerProps} />} />
            
            <Route exact path='/cadastrar-conta' component={routerProps => <CadastroConta {...routerProps} />} />
            
            <Route exact path='/acessar-conta' component={routerProps => <AcessoConta {...routerProps} />} />
            
            <Route exact path='/perfil' component={routerProps => <Perfil {...routerProps} />} />

            <Route exact path='/sobre' component={routerProps => <Sobre {...routerProps} />} />
 
            <Route exact path='/cadastrar-evento' component={routerProps => <CadastroEvento {...routerProps} />} />

            <Route exact path='/cadastrar-participante' component={routerProps => <CadastroParticipante {...routerProps} />} />

            <Route exact path='/overview/:area' component={routerProps => <Overview {...routerProps} />} />
            
            <Route exact path='/overview' component={routerProps => <Overview {...routerProps} />} />
            
            <Route exact path='/esqueceu-senha' component={routerProps => <EsqueceuSenha {...routerProps} />} />

            <Route exact path='*' component={routerProps => <NotFound {...routerProps} />} />

        </Switch>
    </Suspense>
)

export default Routes;
