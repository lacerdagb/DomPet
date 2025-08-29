// src/components/Footer/Footer.js
import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <h3>Dom Pet</h3>
        <p>Cuidando do seu melhor amigo com amor e carinho.</p>
        <ul className="social-links">
          <li><a href="#"><FaFacebook /></a></li>
          <li><a href="#"><FaInstagram /></a></li>
          <li><a href="#"><FaWhatsapp /></a></li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Dom Pet. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;