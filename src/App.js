import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './main/Home';
import Eror from './eror/Eror';
import Login from './main/Login';
import { useState,useEffect } from 'react';
import {  DataLok } from './lock/lok';
import PerVila from './main/PerVila';
import Pagevila from './main/Pagevila';
import Laporan from './main/Laporan';
// import 'react-loading-skeleton/dist/skeleton.css'
function App() {

  return (
      <BrowserRouter basename='/projectpasxi'>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/vila" element={<Pagevila />} />
          <Route path="/vila/:id" element={<PerVila />} />
          <Route path="/laporan" element={<Laporan />} />

          <Route path="*" element={<Eror />} />
        </Routes>
      </BrowserRouter>

  );
}

// function

export default App;
