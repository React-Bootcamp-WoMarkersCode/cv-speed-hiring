import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
const Home = React.lazy(() => import('./pages/Home'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

const Routes = () => (
    <Suspense fallback="Loading...">
        <Switch>
            <Route 
            exact
            path='/'
            component={routerProps => <Home {...routerProps} />} />
 
            <Route 
            exact
            path='/not-found'
            component={routerProps => <NotFound {...routerProps} />} />
            
            <Redirect to="/not-found" />
        </Switch>
    </Suspense>
)

export default Routes;