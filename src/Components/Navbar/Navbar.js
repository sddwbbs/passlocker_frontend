import './Navbar.css'
import logo from '../../Assets/keyLogo.png'
import logoText from '../../Assets/logo_text.png'
import { Link } from 'react-router-dom'

function Navbar(props) {
    return (
        <nav>   
            <div className="navbar-left">
                <Link to={props.mainLabelHref}>
                    <img src={logo} height="40" width="40" alt="Logo" />
                </Link>
                <Link to={props.mainLabelHref}>
                    <img className="logoText" src={logoText} alt="LogoText" />
                </Link>
            </div>
            <div className="navbar-right">
                <ul className="Login">
                    <li>{props.buttons}</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar