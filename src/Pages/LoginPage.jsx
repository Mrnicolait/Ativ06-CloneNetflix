import backgroundImage from '../Images/backgroundnetflix.jpg';
import logo from '../Images/netflix-logo-png-2583.png'
import Footer from '../components/Rodape';
import '../Style/LoginPage.css'
import { Link } from 'react-router-dom';




function Login() {
  
  return (
   <>
   <section style={{backgroundImage: `url(${backgroundImage})`,
                backgroundRepeat: 'repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            
            
            }}>
                <div className="login-container" style={{zIndex: 1}}>
                    <div className='header'>
                        <Link to='/landingpage'><img src={logo} alt="logo da netflix" className='logo'  /></Link>
                    </div>
                     <section className="login-content">
                        <h1>Entrar</h1>
                        <form>
                            <input type="text" name="login" id="login" placeholder="Email ou número de celular" className='login-input' />
                            <input type="password" name="password" id="senha" placeholder="Senha" className='login-input' />
                            <button className='btn-enter' type="button"><Link style={{
                                color: 'white',
                                textDecoration: 'none',
                                fontWeight: '600'
                            }} to="/home">Entrar</Link></button>
                        </form>
                        <p>ou</p>
                        <button className='helper-button'>Usar código de acesso</button>
                        <a className='forgotthepass' href="#">Esqueceu sua senha?</a>
                        <div className='login-helper'>
                        <div id="rm">
                            <input type="checkbox" name="remenber" id="remenber_me" />
                            <h6>Lembrar de mim?</h6>
                        </div>
                        <p className='newforhere'>Novo por aqui? <a href='#'>Assine Agora</a></p>
                        <h6>Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô.
                        <a href="#">Saiba mais.</a></h6>
                        </div>
                    </section>
                </div>
            </section>
            <Footer/> 

            

            
   </>
  );
}

export default Login;