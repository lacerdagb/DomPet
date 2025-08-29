// src/pages/Login/LoginPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  return (
    <div className="login-page-container">
      <div className="login-form-wrapper">
        <form className="login-form">
          <h2>Acessar sua Conta</h2>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit" className="submit-button">Entrar</button>
        </form>
        <div className="register-link">
          <p>Não tem uma conta? <Link to="/cadastro">Cadastre-se</Link></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;