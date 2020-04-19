import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

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

const Routes = () => (
    <Suspense fallback="Loading...">
        <Switch>
            <Route exact path='/' component={routerProps => <Home {...routerProps} />} />
            
            <Route exact path='/not-found' component={routerProps => <NotFound {...routerProps} />} />
            
            <Route exact path='/solicitar-chave-de-acesso' component={routerProps => <SolicitaChaveAcesso {...routerProps} />} />
            
            <Route exact path='/verificar-chave-de-acesso' component={routerProps => <VerificaChaveAcesso {...routerProps} />} />
            
            <Route exact path='/evento/:empresaId/:eventoId' component={routerProps => <Evento {...routerProps} />} />

            <Route exact path='/participantes/:empresaId' component={routerProps => <Participantes {...routerProps} />} />
            
            <Route exact path='/participante/:empresaId/:eventoId/:participanteId' component={routerProps => <Participante {...routerProps} />} />
            
            <Route exact path='/cadastrar-conta' component={routerProps => <CadastroConta {...routerProps} />} />
            
            <Route exact path='/acessar-conta' component={routerProps => <AcessoConta {...routerProps} />} />
            
            <Route exact path='/perfil' component={routerProps => <Perfil {...routerProps} />} />

            <Route exact path='/sobre' component={routerProps => <Sobre {...routerProps} />} />
 
            <Route exact path='/cadastrar-evento' component={routerProps => <CadastroEvento {...routerProps} />} />

            <Route exact path='/cadastrar-participante' component={routerProps => <CadastroParticipante {...routerProps} />} />

            <Route exact path='*' component={routerProps => <NotFound {...routerProps} />} />

        </Switch>
    </Suspense>
)

export default Routes;