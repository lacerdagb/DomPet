// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import LoginPage from './pages/Login/LoginPage';
import RegisterPage from './pages/Register/RegisterPage'; // 1. IMPORTE A NOVA PÁGINA
import './App.css';

// Placeholders para outras páginas
const Services = () => <div style={{padding: '5rem', textAlign: 'center'}}><h1>Página de Serviços em Construção</h1></div>;
const Products = () => <div style={{padding: '5rem', textAlign: 'center'}}><h1>Página de Produtos em Construção</h1></div>;
const Contact = () => <div style={{padding: '5rem', textAlign: 'center'}}><h1>Página de Contato em Construção</h1></div>;

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicos" element={<Services />} />
            <Route path="/produtos" element={<Products />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/cadastro" element={<RegisterPage />} /> {/* 2. ATUALIZE A ROTA */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;