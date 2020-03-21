import React from 'react';
import Routes from './Routes';
import './App.css';

import IndexNavbar from "./components/Navbars/IndexNavbar.js";
import DemoFooter from "./components/Footers/DemoFooter.js";
import CardEvento from './components/CardEvento';

function App() {
  return (
    <>
      <IndexNavbar />
      <main id="main">
        <Routes />
        <CardEvento />
      </main>
      <DemoFooter />
    </>
  );
}

export default App;
