import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Testimonials from './pages/Testimonials';
import Donate from './pages/Donate';
import Header from './components/Header';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
    </Router>
  );
};

export default App;
