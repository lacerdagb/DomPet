// src/components/Header/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaPaw } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  return (
    <header className="header-container">
      <div className="logo-container">
        <FaPaw className="logo-icon" />
        <Link to="/" className="logo-text">Dom Pet</Link>
      </div>
      <nav className="main-nav">
        <ul className="nav-links">
          <li><Link to="/">Início</Link></li>
          <li><Link to="/servicos">Serviços</Link></li>
          <li><Link to="/produtos">Produtos</Link></li>
          <li><Link to="/contato">Contato</Link></li>
        </ul>
      </nav>
      <div className="login-area">
        <Link to="/login" className="login-button">Login</Link>
      </div>
    </header>
  );
};

export default Header;