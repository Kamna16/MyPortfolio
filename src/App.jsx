import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div className='flex flex-col bg-darkblue-600 text-white min-h-screen'>
        <Header />
        <div className="bg-darkblue-600 text-white flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
