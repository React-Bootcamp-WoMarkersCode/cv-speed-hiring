import React from 'react';
import Routes from './Routes';
import UserProvider from './providers/UserProvider'
import './App.css';

import IndexNavbar from "./components/Navbars/IndexNavbar.js";
import DemoFooter from "./components/Footers/DemoFooter.js";

function App() {
  return (
    <UserProvider>
      <header>
        <IndexNavbar />
      </header>
      <main id="main">
        <Routes />
      </main>
      <DemoFooter />
    </UserProvider>
  );
}


export default App;
