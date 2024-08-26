import '../Style/Footer.css'


function Footer() {
    return (
        <footer className="footer">
        <p>Dúvidas? Ligue 0800 591 2876</p>
        <ul className="grid-list">
        <li href="#">Perguntas Frequentes</li>
        <li href="#">Termos de uso</li>
        <li href="#">Preferencias de Cookies</li>
        <li href="#">Central de Ajuda</li>
        <li href="#">Privacidade</li>
        <li href="#">Informações corporativas</li>
        </ul>
        <div>
        
        <select name="Portugues" id="" className="custom-select">
            
            <option value="portugues">Português</option>
            <option value="ingles">Inglês</option>
        </select>
        </div>

        </footer>
    )
}

export default Footer