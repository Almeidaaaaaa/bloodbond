import '../css/log.css'; // Importando o CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlusG, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const LogHemo: React.FC = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [nome, setNome] = useState<string>('');
    const [cnpj, setCNPJ] = useState<string>('');
    const [isLoginActive, setIsLoginActive] = useState<boolean>(true);

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (email && password) {
            navigate('/Hemorest');
        } else {
            alert('Por favor, preencha o email e a senha!');
        }
    };

    const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Adicione lógica de validação aqui, se necessário
    };

    return (
        <div className="log-body">
            <div className={`log-container ${isLoginActive ? '' : 'active'}`} id="container">
                <div className={`form-container sign-in`}>
                    <form onSubmit={handleLogin}>
                        <h1>Login</h1>
                        <div className="social-icons">
                            <a href="#" className="icon">
                                <FontAwesomeIcon icon={faGooglePlusG} />
                            </a>
                            <a href="#" className="icon">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                        </div>
                        <span>Use seu email e senha</span>
                        <input 
                            type="email" 
                            placeholder="Email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                        <input 
                            type="password" 
                            placeholder="Senha" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                        />
                        <Link to="#">Esqueceu sua senha?</Link>
                        <button type="submit">Entrar</button>
                    </form>
                </div>
                
                <div className={`form-container sign-up`}>
                    <form onSubmit={handleRegister}>
                        <h1>Crie sua conta</h1>
                        <div className="social-icons">
                            <a href="#" className="icon">
                                <FontAwesomeIcon icon={faGooglePlusG} />
                            </a>
                            <a href="#" className="icon">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                        </div>
                        <span>Use seu CNPJ para se registrar</span>
                        <input 
                            type="text" 
                            placeholder="Nome" 
                            value={nome} 
                            onChange={(e) => setNome(e.target.value)} 
                            required 
                        />
                        <input 
                            type="email" 
                            placeholder="Email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                        <input 
                            type="password" 
                            placeholder="Senha" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                        />
                        <input 
                            type="text" 
                            placeholder="CNPJ" 
                            value={cnpj} 
                            onChange={(e) => setCNPJ(e.target.value)} 
                            required 
                        />
                        <button type="submit">Inscrever-se</button>
                    </form>
                </div>
                
                {/* Contêiner de Alternância */}
                <div className="toggle-container">
                    <div className="toggle">
                        <div className={`toggle-panel toggle-left ${isLoginActive ? '' : 'active'}`}>
                            <h1>Bem-vindo de Volta!</h1>
                            <p>Insira seus dados pessoais para usar todos os recursos do site</p>
                            <button onClick={() => setIsLoginActive(true)}>Login</button>
                        </div>
                        <div className={`toggle-panel toggle-right ${!isLoginActive ? '' : 'active'}`}>
                            <h1>Seja Bem Vindo!</h1>
                            <p>Registre-se com seus dados pessoais para usar todos os recursos do site</p>
                            <button onClick={() => setIsLoginActive(false)}>Inscrever-se</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogHemo;
