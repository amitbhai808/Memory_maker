import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';

// Memory Methods 
import MemoryMethod from './components/Memory Method/MemoryCatalogue';
import MajorSystem from './components/Memory Method/MajorSystem';

// Memory Test Game
import NumberGame from './components/Memory Test Game/NumberGame';
import PegTable from './components/Memory Test Game/MemorizeMajorLIst'

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* memory methods  */}
        <Route path="/memorycatelogue" element={<MemoryMethod />} />
        <Route path="/majorsystem" element={<MajorSystem />} />

        {/* memory test game  */}
        <Route path="/numberGame" element={<NumberGame />} />
        <Route path="/pegTable" element={<PegTable />} />
      </Routes>
      <Footer />
    </Router>
  );
}