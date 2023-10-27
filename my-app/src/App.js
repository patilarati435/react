import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './component/Home.js';
import About from './component/About.js';
import Contact from './component/Contact.js';
import Navbar from './component/Navbar.js';
import Gallery from './component/Gallery.js';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About title="About" />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Image" element={<Gallery />} />
       
      </Routes>
    </div>
  );
};

export default App;
