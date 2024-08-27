import { useState } from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../Images/backgroundnetflix.jpg';
import logo from '../Images/netflix-logo-png-2583.png';
import Footer from '../components/Rodape';
import '../Style/LoginPage.css';

function Login() {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const isValidEmail = (email) => {
    return email.includes('@') && email.includes('.');
  };

  const isValidPhone = (phone) => {
    return /^\d{10,}$/.test(phone); // Verifica se é composto de pelo menos 10 dígitos
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!isValidEmail(emailOrPhone) && !isValidPhone(emailOrPhone)) {
      setErrorMessage('Por favor, insira um email ou número de telefone válido.');
    } else if (password.length < 4) {
      setErrorMessage('A senha deve ter no mínimo 4 caracteres.');
    } else {
      setErrorMessage('');
      // Redirecionar para a página home se a validação passar
      window.location.href = '/home';
    }
  };

  return (
    <>
      <section
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: 'repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="login-container" style={{ zIndex: 1 }}>
          <div className="header">
            <Link to="/landingpage">
              <img src={logo} alt="logo da netflix" className="logo" />
            </Link>
          </div>
          <section className="login-content">
            <h1>Entrar</h1>
            <form onSubmit={handleLogin}>
              <input
                type="text"
                name="login"
                id="login"
                placeholder="Email ou número de celular"
                className="login-input"
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
              />
              <input
                type="password"
                name="password"
                id="senha"
                placeholder="Senha"
                className="login-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errorMessage && <p className="error-message">{errorMessage}</p>}
              <button className="btn-enter" type="submit">
                Entrar
              </button>
            </form>
            <p>ou</p>
            <button className="helper-button">Usar código de acesso</button>
            <a className="forgotthepass" href="#">
              Esqueceu sua senha?
            </a>
            <div className="login-helper">
              <div id="rm">
                <input type="checkbox" name="remenber" id="remenber_me" />
                <h6>Lembrar de mim?</h6>
              </div>
              <p className="newforhere">
                Novo por aqui? <a href="#">Assine Agora</a>
              </p>
              <h6>
                Esta página é protegida pelo Google reCAPTCHA para garantir que
                você não é um robô. <a href="#">Saiba mais.</a>
              </h6>
            </div>
          </section>
        </div>
      </section>

      <Footer/>
    </>
  );
}

export default Login;
