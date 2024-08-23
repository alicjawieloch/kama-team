import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import RegisterPage from './RegisterPage'; // Importowanie strony rejestracji
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} /> {/* Trasa do rejestracji */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

