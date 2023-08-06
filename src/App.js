import React from 'react';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Header';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Art from './Art';
import Web from './Web';

const App = () => {
  return (
    <>
      <BrowserRouter >
      <Header />
      <Routes>
        <Route path="/" element={<div><Home /></div>} />
        <Route path="/about" element={<div><About /></div>} />
        <Route path="/contact" element={<div><Contact /></div>} />
        <Route path="/art" element={<div><Art /></div>} />
        <Route path="/web" element={<div><Web /></div>} />
      </Routes>
      </BrowserRouter> 
    </>
  )
}

export default App
