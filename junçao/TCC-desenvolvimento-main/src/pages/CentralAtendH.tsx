import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import '../css/central.css'; // Certifique-se de que o caminho do CSS está correto

const CentralAtendH = () => {
    const navigate = useNavigate(); // Hook para redirecionamento

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Previne o comportamento padrão do formulário

        // Aqui você pode adicionar a lógica de envio do formulário, se necessário

        // Exibe o SweetAlert2 após o envio
        await Swal.fire({
            title: 'Mensagem Enviada!',
            text: 'Sua mensagem foi enviada com sucesso.',
            icon: 'success',
            confirmButtonText: 'OK'
        });

        // Após o aviso, redirecione para a página inicial
        navigate('/'); // Redireciona para a home
    };

    return (
        <div className="faq-container">
            <header className="header-custom">
                <h1>Central de Atendimento</h1>
            </header>
            <main>
                <section className="atendimento">
                    <h2>Entre em contato conosco</h2>
                    <p>Se tiver alguma dúvida ou precisar de ajuda, não hesite em entrar em contato conosco.</p>
                    <ul>
                        <li>Telefone: (24) 00000-0000</li>
                        <li>E-mail: <a href="mailto:revitalize.blood@gmail.com">revitalize.blood@gmail.com</a></li>
                        <li>Horário de atendimento: Segunda a Sexta, 8h às 18h</li>
                    </ul>
                </section>
                <section className="form largura-mensagem">
                    <h2>Envie sua mensagem</h2>
                    <form onSubmit={handleSubmit}> {/* Adiciona a função handleSubmit */}
                        <label htmlFor="nome">Nome:</label>
                        <input type="text" id="nome" name="nome" required /><br /><br />
                        
                        <label htmlFor="email">E-mail:</label>
                        <input type="email" id="email" name="email" required /><br /><br />
                        
                        <label htmlFor="mensagem">Mensagem:</label>
                        <textarea id="mensagem" name="mensagem" required></textarea><br /><br />
                        
                        <div className="button-group">
                            <button className="botao-voltar" type="submit">Enviar</button>
                            <Link className="botao-voltar" to="/">Voltar</Link>
                        </div>
                    </form>
                </section>
            </main>
        </div>
    );
};

export default CentralAtendH;
