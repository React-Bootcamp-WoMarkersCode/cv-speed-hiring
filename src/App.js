import React from 'react';
import Routes from './Routes';
import './App.css';

import IndexNavbar from "./components/Navbars/IndexNavbar.js";
import DemoFooter from "./components/Footers/DemoFooter.js";

function App() {
  return (
    <>
      <IndexNavbar />
      <main id="main">
        <Routes />
      </main>
      <DemoFooter />
    </>
  );
}

//teste

export default App;
