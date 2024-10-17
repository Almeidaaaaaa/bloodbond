import React from 'react';
import '../css/header.css';
import '../css/doador.css';

import doador from '../img/images.png';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Sobre: React.FC = () => {
    return (
        <div>
            <header>
                <nav id="navbar">
                    <i id="nav_logo">🩸Blood Bond</i>
                    <ul id="nav_list">
                        <li className="nav-item active">
                            <a href="/">Início</a>
                        </li>
                        <li className="nav-item">
                            <Link to="/LogHemo">Sou Hemonúcleo</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/sobre">Sobre</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/notificaçao">Notificação</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/DoadorLog">Doador</Link>
                        </li>
                    </ul>
                    <button id="mobile_btn">
                        <i className="fa-solid fa-bars"></i>
                    </button>
                </nav>

                <div id="mobile_menu">
                    <ul id="mobile_nav_list">
                        <li className="nav-item">
                            <Link to="#home">Início</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="#Login">Doador</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="#Login">Sou Hemonúcleo</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="#Login">Notificação</Link>
                        </li>
                    </ul>
                    <button className="btn-default">Seja doador</button>
                </div>
            </header>

            <main className="content">
                <section className="intro">
                    <h1>Por que Doar Sangue?</h1>
                    <p>Cada doação pode salvar até quatro vidas. Ao doar, você se torna um herói em potencial, ajudando a manter os estoques de sangue nas unidades de saúde sempre prontos para emergências.</p>
                </section>
<img src={doador} alt="Doador de Sangue" className="donor-image" />
                <section className="benefits">
                    <h2>Benefícios de Ser Doador</h2>
                    <ul>
                        <li>Contribuir para salvar vidas.</li>
                        <li>Aumentar a sua saúde: a doação regular pode ajudar a reduzir o risco de algumas doenças.</li>
                        <li>Um check-up de saúde gratuito: exames são realizados antes de cada doação.</li>
                        <li>Um sentimento de realização e comunidade.</li>
                    </ul>
                </section>

                <section className="how-to-donate">
                    <h2>Como Doar?</h2>
                    <div className="donation-steps">
                        <div className="step">
                            <h3>1. Verifique os Requisitos</h3>
                            <p>Ter entre 16 e 69 anos, pesar mais de 50 kg e estar em boas condições de saúde.</p>
                        </div>
                        <div className="step">
                            <h3>2. Agende sua Doação</h3>
                            <p>Entre em contato com o hemocentro mais próximo e agende sua visita.</p>
                        </div>
                        <div className="step">
                            <h3>3. Faça a Doação</h3>
                            <p>O processo é rápido, seguro e feito por profissionais qualificados.</p>
                        </div>
                    </div>
                    
                </section>
            </main>

            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-section">
                        <h4>Blood Bond 🎗</h4>
                        <p>
                            R. Nossa Sra. das Graças, 273 - São Geraldo,<br />
                            Volta Redonda - RJ, 27253-610
                        </p>
                    </div>
                    <div className="footer-section">
                        <h4>Contatos</h4>
                        <p>Email: <a href="mailto:revitalize.blood@gmail.com">revitalize.blood@gmail.com</a></p>
                    </div>
                    <div className="footer-section">
                        <h4>Links Rápidos</h4>
                        <ul>
                            <li><Link to="/Home">Home</Link></li>
                            <li><Link to="/notificacao">Notificação</Link></li>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/sobre">Sobre</Link></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>Siga-nos</h4>
                        <div className="social-icons">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <FaFacebookF />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <FaTwitter />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <FaInstagram />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>Copyright © 2024 – Malvatrem productions.</p>
                </div>
            </footer>
        </div>
    );
};

export default Sobre;
