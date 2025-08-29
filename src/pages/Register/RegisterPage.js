// src/pages/Register/RegisterPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './RegisterPage.css';

const RegisterPage = () => {
  return (
    <div className="register-page-container">
      <div className="register-form-wrapper">
        <form className="register-form">
          <h2>Crie sua Conta</h2>
          <div className="form-group">
            <label htmlFor="name">Nome Completo</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Confirmar Senha</label>
            <input type="password" id="confirm-password" name="confirm-password" required />
          </div>
          <button type="submit" className="submit-button">Cadastrar</button>
        </form>
        <div className="login-link">
          <p>Já tem uma conta? <Link to="/login">Entre</Link></p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;