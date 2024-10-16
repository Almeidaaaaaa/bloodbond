import React from 'react';
import styles from '../css/Notificação.module.css';
import { Link } from 'react-router-dom';

const Notificacao: React.FC = () => {
    return (
        
        
        <div className={styles.wrapper}> {/* Novo wrapper para centralização */}
            <div className={styles.container}>
                <h1>Notificação</h1>
                <p>
                    A notificação servirá como uma ponte para que você sempre possa doar nos momentos em que os hemonúcleos estiverem sem estoque.<br />
                    Você também pode escolher ser notificado para ser alertado sempre que o prazo para doar novamente acabe,<br />
                    fazendo com que você tenha uma constante doação, mantendo sempre os estoques de sangue cheios para aqueles que precisem!
                </p>
                <h2>Informações importantes:</h2>
                <ul className={styles.list}>
                    <li>
                        Caso você aceite utilizar essa nossa ferramenta de notificação, você deverá cadastrar o seu número de telefone (celular).
                    </li>
                </ul>
                <div className={styles.botoes}>
                    <Link className={styles.botao} to="/CadastroNum">Aceito ser notificado</Link>
                    <Link className={styles.botao} to="/">Não quero ser notificado</Link>
                </div>
            </div>
        </div>
    );
};

export default Notificacao;