import '../css/log.css'; // Importando o CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlusG, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';

const DoadorLog = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [result, setResult] = useState({ message: '', className: '' });
    const [email, setEmail] = useState(''); // Estado para o email

    const handleRegister = () => {
        containerRef.current?.classList.add("active");
    };

    const handleLogin = () => {
        containerRef.current?.classList.remove("active");
    };

    const validateForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const nome = (document.getElementById('nome') as HTMLInputElement);
        const emailInput = (document.getElementById('email') as HTMLInputElement);
        const senha = (document.getElementById('senha') as HTMLInputElement);
        const cel = (document.getElementById('cel') as HTMLInputElement);

        let isValid = true;
        let messages: string[] = [];

        // Validação do Nome
        if (!nome.value.trim()) {
            isValid = false;
            messages.push('Nome é obrigatório.');
        }

        // Validação do Email
        if (!emailInput.value.includes('@')) {
            isValid = false;
            messages.push('Email deve conter @.');
        }

        // Validação da Senha
        if (senha.value.length < 6) {
            isValid = false;
            messages.push('Senha deve ter pelo menos 6 caracteres.');
        }

        // Validação do Celular
        const celularPattern = /^\(\d{2}\) \d{5}-\d{4}$/; // Formato (XX) XXXXX-XXXX
        if (!celularPattern.test(cel.value)) {
            isValid = false;
            messages.push('Celular deve estar no formato (XX) XXXXX-XXXX.');
        }

        // Resultado da validação
        if (isValid) {
            setResult({ message: 'Formulário enviado com sucesso!', className: 'valid' });
        } else {
            setResult({ message: messages.join(' '), className: 'invalid' });
        }
    };

    const handleLoginClick = () => {
        if (!email) {
            setResult({ message: 'Por favor, insira um email para continuar.', className: 'invalid' });
            return;
        }
        // Se o email estiver preenchido, pode redirecionar
        handleLogin();
    };

    return (
        <div className="log-body">
            <div className="log-container" id="container" ref={containerRef}>
                <div className="form-container sign-up">
                    <form onSubmit={validateForm}>
                        <h1>Crie sua conta</h1>
                        <div className="social-icons">
                            <a href="#" className="icon">
                                <FontAwesomeIcon icon={faGooglePlusG} />
                            </a>
                            <a href="#" className="icon">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                        </div>
                        <span>Use seu CPF para se registrar</span>
                        <input 
                            type="text" 
                            id="nome" 
                            placeholder="Nome" 
                            required 
                        />
                        <input 
                            type="email" 
                            id="email" 
                            placeholder="Email" 
                            required 
                            onChange={(e) => setEmail(e.target.value)} // Atualiza o estado do email
                        />
                        <input 
                            type="password" 
                            id="senha" 
                            placeholder="Senha" 
                            required 
                        />
                        <input 
                            type="text" 
                            id="cpf" 
                            placeholder="CPF" 
                            pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" 
                            required 
                        />
                        <input 
                            type="text" 
                            id="cel" 
                            placeholder="Celular (XX) XXXXX-XXXX" 
                            required 
                        />
                        <button type="submit">Inscrever-se</button>
                        <div id="result" className={result.className}>{result.message}</div>
                    </form>
                </div>
                <div className="form-container sign-in">
                    <form>
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
                            id="email-login" 
                            placeholder="Email" 
                            required 
                            onChange={(e) => setEmail(e.target.value)} // Atualiza o estado do email
                        />
                        <input 
                            type="password" 
                            id="senha-login" 
                            placeholder="Senha" 
                            required 
                        />
                        <a href="#">Esqueceu sua senha?</a>
                        <Link to="/Doadorest">
                            <button 
                                type="button" 
                                onClick={handleLoginClick} // Usa a nova função para validar email
                                disabled={!email} // Desabilita o botão se o email estiver vazio
                            >
                                Entrar
                            </button>
                        </Link>
                    </form>
                </div>
                <div className="toggle-container">
                    <div className="toggle">
                        <div className="toggle-panel toggle-left">
                            <h1>Bem-vindo de Volta!</h1>
                            <p>Insira seus dados pessoais para usar todos os recursos do site</p>
                            <button className="hidden" id="login" onClick={handleLogin}>Login</button>
                        </div>
                        <div className="toggle-panel toggle-right">
                            <h1>Seja Bem Vindo!</h1>
                            <p>Registre-se com seus dados pessoais para usar todos os recursos do site</p>
                            <button className="hidden" id="register" onClick={handleRegister}>Inscrever-se</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoadorLog;
