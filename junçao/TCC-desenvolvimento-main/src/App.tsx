
import { Link } from 'react-router-dom';
import './css/header.css';
import './css/style.css';
import './css/home.css';
import './css/footer.css';
import './css/map.css';
import './css/perguntas.css';
import './App.css';
import home from './img/Design sem nome (3).png';
import perguntas from './img/BrasilComS_00313.jpg';
import p3 from './img/not.png';
import p4 from './img/qem.png';
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => { // Correção aqui

  return (
    <>
      <div>
        <header>
          <nav id="navbar">
            <i id="nav_logo">🩸Blood Bond</i>

            <ul id="nav_list">
              <li className="nav-item active">
                <a href="/App">Início</a>
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
                <Link to="/Doadorest">Doador</Link>
              </li>
            </ul>
z
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

            <button className="btn-default">
              Seja doador
            </button>
          </div>
        </header>

        <main id="content">
          <section id="home">
            <div className="shape">
              <img src={home} id="img" alt="Imagem de destaque" />
            </div>
            <div id="cta">
              <h1 className="title">
                #Seja sangue
                <span>bom</span>
              </h1>

              <p className="description">
                Ao se cadastrar, você se torna parte de uma rede vital de doadores,
                facilitando a doação e ajudando a salvar vidas.<br />
                Juntos podemos fazer a diferença!
              </p>

              <div id="cta_buttons">
                <a href="./login/" className="btn-default">
                  Cadastre-se
                </a>
              </div>

              <div className="social-media-buttons">
                <a href="#">
                  <i className="fa-brands fa-whatsapp"></i>
                </a>

                <a href="#">
                  <i className="fa-brands fa-instagram"></i>
                </a>

                <a href="#">
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </div>
            </div>
          </section>

          <h1 id="mapheader">Hemonúcleos Cadastrados</h1>
          <div id="map">
            <section id="map-responsive">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.7022356790135!2d-44.090716123789036!3d-22.515352424000742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9ea356592891d9%3A0xd24051c8fbf01b37!2sHemon%C3%BAcleo%20de%20Volta%20Redonda!5e0!3m2!1spt-BR!2sbr!4v1723121442753!5m2!1spt-BR!2sbr"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </section>
            <br />
            <div id="textomap">
              <h3>Volta Redonda</h3>
              <p>Rua Nossa Sra. das Graças, 273 - São Geraldo, Volta Redonda - RJ, 27253-610</p>
            </div>
          </div>

          <br />
          <br />

          <section>
            <h2>Perguntas Frequentes</h2>
            <div className="container">
              <div className="card">
                <div className="card-inner">
                  <div className="box">
                    <div className="imgBox">
                      <img src={p4} alt="Quem pode doar?" />
                    </div>
                    <div className="icon">
                      <a href="#" className="iconBox">
                        <span className="fas fa-arrow-right"></span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="content">
                  <h3>Quem pode doar?</h3>
                  <p>Aqui você poderá ver os requisitos para doar</p>
                </div>
              </div>
              <div className="card">
                <div className="card-inner">
                  <div className="box">
                    <div className="imgBox">
                      <img src={perguntas} alt="Cadastra-se" />
                    </div>
                    <div className="icon">
                      <a href="#" className="iconBox">
                        <span className="fas fa-arrow-right"></span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="content">
                  <h3>Cadastra-se</h3>
                  <p>Você pode se cadastrar tanto como doador quanto Hemonúcleo</p>
                </div>
              </div>
              <div className="card">
                <div className="card-inner">
                  <div className="box">
                    <div className="imgBox">
                      <img src={p3} alt="Notificações" />
                    </div>
                    <div className="icon">
                      <a href="#" className="iconBox">
                        <span className="fas fa-arrow-right"></span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="content">
                  <h3>Notificações</h3>
                  <p>Nessa parte você poderá receber notificações sobre a falta de sangue no Hemonúcleo</p>
                </div>
              </div>
            </div>
          </section>

          <footer className="rodape" id="contato">
            <div className="rodape-div">
              <div className="rodape-div-1">
                <div className="rodape-div-1-coluna">
                  <span><b>Blood Bond🎗</b></span>
                  <p>R. Nossa Sra. das Graças, 273 - São Geraldo,<br />
                    Volta Redonda - RJ, 27253-610</p>
                </div>
              </div>

              <div className="rodape-div-2">
                <div className="rodape-div-2-coluna">
                  <span><b>Contatos</b></span>
                  <p>revitalize.blood@gmail.com</p>
                </div>
              </div>

              <div className="rodape-div-3">
                <div className="rodape-div-3-coluna">
                  <span><b>Links</b></span>
                  <p><a href="Home.html">Home</a></p>
                  <p><a href="doadorArearestre/notificação.html">Notificação</a></p>
                  <p><a href="login/index.html">Login</a></p>
                  <p><a href="#sobre">Sobre</a></p>
                </div>
              </div>
            </div>
            <p className="rodape-direitos">Copyright © 2024 – Malvatrem productions.</p>
          </footer>
        </main>
      </div>
    </>
  );
};

export default App;
