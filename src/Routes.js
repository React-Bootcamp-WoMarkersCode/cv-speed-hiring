import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
const Home = React.lazy(() => import('./pages/Home'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

const Routes = () => (
    <Suspense fallback="Loading...">
        <Switch>
            <Route exact path='/' component={routerProps => <Home {...routerProps} />} />
            
            <Route exact path='/not-found'component={routerProps => <NotFound {...routerProps} />} />
            
            <Route exact path='/solicitar-chave-de-acesso'component={routerProps => <SolicitaChaveAcesso {...routerProps} />} />
            
            <Route exact path='/verificar-chave-de-acesso'component={routerProps => <VerificaChaveAcesso {...routerProps} />} />
            
            <Route exact path='/participantes/:empresaId'component={routerProps => <Participantes {...routerProps} />} />
            
            <Route exact path='/participante/:empresaId/:participanteId'component={routerProps => <Participante {...routerProps} />} />
            
            <Route exact path='/cadastrar-conta'component={routerProps => <CadastroConta {...routerProps} />} />
            
            <Route exact path='/acessar-conta'component={routerProps => <AcessoConta {...routerProps} />} />
            
            <Route exact path='/perfil'component={routerProps => <Perfil {...routerProps} />} />
            
            <Route exact path='/cadastrar-evento'component={routerProps => <CadastroEvento {...routerProps} />} />
            
            <Route exact path='/politica-de-privacidade'component={routerProps => <PoliticaPrivacidade {...routerProps} />} />
            
            <Route exact path='/termo-de-uso'component={routerProps => <TermoUso {...routerProps} />} />
            
            <Redirect to="/not-found" />
        </Switch>
    </Suspense>
)

export default Routes;