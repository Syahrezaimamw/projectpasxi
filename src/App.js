import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './Home';
import Eror from './eror/Eror';
function App() {
  return (

    <BrowserRouter basename='/projectpasxi'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Eror />} />
        <Route path="*" element={<h1>wlee</h1>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
