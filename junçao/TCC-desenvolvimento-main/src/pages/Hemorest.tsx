import { Link } from "react-router-dom";
import '../css/hemo.css';

const Hemorest = () => {
    return (
        <>
            <header>
                <nav id="navbar">
                    <i id="nav_logo">🩸Blood Bond</i>

                    <ul id="nav_list">
                        <li className="nav-item active">
                            <Link to="/">Início</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/LogHemo">Sou Hemonúcleo</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/sobre">Sobre</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/notificacao">Notificação</Link>
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

                    <button className="btn-default">
                        Seja doador
                    </button>
                </div>
            </header>

            <div className="hemo-background">
                <div className="hemo-container">
                    <h1>Bem-vindo a área do Hemonúcleo</h1>
                    <p>Obrigado por se cadastrar conosco!</p>
                    <p>
                        Agradecemos sua escolha em se cadastrar no nosso sistema. <br />
                        Estamos ansiosos para trabalhar com você e ajudar a salvar vidas através da doação de sangue.
                    </p>
                    <h2>Informações importantes:</h2>
                    <ul className="hemo-list">
                        <li>Seu cadastro foi realizado com sucesso e você agora faz parte da nossa comunidade de hemocentros.</li>
                        <li>Você receberá um e-mail com informações sobre como acessar sua conta e começar a usar nossos serviços.</li>
                        <li>Se tiver alguma dúvida ou precisar de ajuda, não hesite em entrar em contato conosco.</li>
                    </ul>
                    <div className="hemo-botoes">
                        <Link className="hemo-botao" to="../FORM/INDEX.HTML">Acessar conta</Link>
                        <a className="hemo-botao">Conheça nossos serviços</a>
                        <Link className="hemo-botao" to="/CentralAtendH">Entre em contato</Link>
                    </div>
                </div>
                <div className="retangulo-container">
                    <aside id="funcoes-hemonucleo" className="hemo-aside">
                        <h2>Funções do Hemonúcleo. <br /> Na plataforma</h2>
                        <p>Uma das nossas principais funções é o armazenamento de dados de sangue em cada Hemonúcleo.</p>
                        <p>A principal função do Hemonúcleo é fornecer os dados do banco de sangue, para que notifiquemos aos doadores que seu tipo sanguíneo está em falta.</p>
                        <p>Analisando eles em estados [Crítico, Moderado, Em alta].</p>
                    </aside>
                    <div className="retangulo-seja-sangue">
                        <h2 className="titulo-seja-sangue">#Seja sangue <br /> Bom</h2>
                        <p className="frase-motivacional-seja-sangue">"Doar sangue é doar vida. Faça a diferença!"</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hemorest;
