// src/pages/Home/Home.js
import React from 'react';
import { FaShower, FaStethoscope, FaDog } from 'react-icons/fa';
import './Home.css';

// Você pode baixar uma imagem de petshop e colocar em `src/assets`
// import heroImage from '../../assets/petshop-hero.jpg';

const Home = () => {
  return (
    <div className="home-container">
      {/* Seção Hero */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>O melhor para o seu melhor amigo</h1>
          <p>Serviços completos de estética, saúde e bem-estar para o seu pet.</p>
          <button className="hero-button">Agende um Horário</button>
        </div>
      </section>

      {/* Seção de Serviços */}
      <section className="services-section">
        <h2>Nossos Serviços</h2>
        <div className="services-grid">
          <div className="service-card">
            <FaShower className="service-icon" />
            <h3>Banho & Tosa</h3>
            <p>Deixe seu pet limpinho e cheiroso com nossos profissionais.</p>
          </div>
          <div className="service-card">
            <FaStethoscope className="service-icon" />
            <h3>Consultas</h3>
            <p>Cuidamos da saúde do seu amigo com veterinários experientes.</p>
          </div>
          <div className="service-card">
            <FaDog className="service-icon" />
            <h3>Hotelzinho</h3>
            <p>Um lugar seguro e divertido para seu pet enquanto você viaja.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;