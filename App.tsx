import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./style.css"

import Footer from './src/layout/Footer';
import Header from './src/layout/Header';
import Main from './src/layout/Main';
import Detalhes from './src/pages/detalhes/Detalhes';
import Home from './src/pages/home/Home';
import './style.css';

export default function App() {

  
  return (
    <Router>
      <Header/>
      <Main>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detalhes" element={<Detalhes />} />
        </Routes>
      
     
</Main>
  </Router>
  
);
}