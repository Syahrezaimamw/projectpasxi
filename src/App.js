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
function App() {
  const [lock, setLock] = useState(false)

  return (
    <DataLok.Provider value={{lock,setLock}}>

      <BrowserRouter basename='/projectpasxi'>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />

          <Route path="*" element={<Eror />} />
        </Routes>
      </BrowserRouter>
    </DataLok.Provider>

  );
}

// function

export default App;
