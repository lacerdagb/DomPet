// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './pages/Login/LoginPage.css'; 
import './pages/Register/RegisterPage.css';


// Importando os estilos dos componentes
import './components/Header/Header.css';
import './components/Footer/Footer.css';
import './pages/Home/Home.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);