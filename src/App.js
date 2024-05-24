import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './main/Home';
import Eror from './eror/Eror';
import Login from './main/Login';
import { useState, useEffect } from 'react';
import { Bars, BarsM } from './lock/lok';
import PerVila from './main/PerVila';
import Pagevila from './main/Pagevila';
import Laporan from './main/Laporan';
import 'react-loading-skeleton/dist/skeleton.css'
import Perlpr from './main/Perlpr';
import { AppSwicth } from './lock/lok';
function App() {
  const [switchh, setSwitch] = useState(true)
  const [sideShowM, setSideShowM] = useState(true)

  return (
    <AppSwicth.Provider value={{ switchh, setSwitch }}>
      <BarsM.Provider value={{ sideShowM, setSideShowM }}>


        <BrowserRouter basename='/projectpasxi'>
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/vila" element={<Pagevila />} />
            <Route path="/vila/:id" element={<PerVila />} />
            <Route path="/laporan" element={<Laporan />} />
            <Route path="/laporan/:id" element={<Perlpr />} />
            <Route path="*" element={<Eror />} />
          </Routes>
        </BrowserRouter>
      </BarsM.Provider>
    </AppSwicth.Provider>

  );
}

// function

export default App;
