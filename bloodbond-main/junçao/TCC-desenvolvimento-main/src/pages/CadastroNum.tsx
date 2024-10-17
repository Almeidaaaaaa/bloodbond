import React, { useState } from 'react';
import Swal from 'sweetalert2';
import '../css/PhoneNumberInput.css';

const CadastroNum: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [allowNotifications, setAllowNotifications] = useState(false);
  const [notificationOptions, setNotificationOptions] = useState({
    criticalStocks: false,
    donationInterval: false,
    noNotifications: false,
  });

  const handleNotificationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setNotificationOptions((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!allowNotifications) {
      Swal.fire({
        title: 'Erro!',
        text: 'Você deve permitir receber notificações para se cadastrar.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
      return;
    }

    const hasSelectedNotification = 
      notificationOptions.criticalStocks ||
      notificationOptions.donationInterval;

    if (!hasSelectedNotification) {
      Swal.fire({
        title: 'Erro!',
        text: 'Você deve escolher pelo menos uma opção de notificação.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
      return;
    }

    await Swal.fire({
      title: 'Número Cadastrado!',
      text: `Seu número: ${phoneNumber}. Notificações: Permitidas`,
      icon: 'success',
      confirmButtonText: 'OK',
    });

    window.location.href = '/'; // Change to your desired URL
  };

  return (
    <div className="app-container">
      <div className="phone-number-container">
        <h2 className="header">Cadastro de Número de Telefone</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="phone">Número de Telefone:</label>
            <input
              type="tel"
              id="phone"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
              placeholder="Digite seu número"
            />
          </div>

          <div className="form-group">
            <label>
              <input
                type="checkbox"
                checked={allowNotifications}
                onChange={(e) => setAllowNotifications(e.target.checked)}
              />
              Permito receber notificações no meu celular.
            </label>

            <div style={{ margin: '10px 0' }} />

            <h3 id="nottext">Quero receber notificação quando:</h3>

            <div className="checkbox-container"> {/* Flexbox container */}
              <div>
                <input
                  type="checkbox"
                  name="criticalStocks"
                  checked={notificationOptions.criticalStocks}
                  onChange={handleNotificationChange}
                />
                <label htmlFor="inputnot1">
                  Os estoques de sangue estiverem em estado crítico
                </label>
              </div>

              <div>
                <input
                  type="checkbox"
                  name="donationInterval"
                  checked={notificationOptions.donationInterval}
                  onChange={handleNotificationChange}
                />
                <label htmlFor="inputnot2">
                  Quando o tempo de intervalo de doação acabar
                </label>
              </div>

              <div>
                <input
                  type="checkbox"
                  name="noNotifications"
                  checked={notificationOptions.noNotifications}
                  onChange={handleNotificationChange}
                />
                <label htmlFor="inputnot3">Não quero receber notificação</label>
              </div>
            </div>
          </div>

          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
};

export default CadastroNum;
