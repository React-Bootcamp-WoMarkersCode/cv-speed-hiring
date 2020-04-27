import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import "./assets/css/paper-kit.css";
import './index.css';

import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Suspense fallback={null}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Suspense>,
    document.getElementById('root'));

serviceWorker.unregister();
