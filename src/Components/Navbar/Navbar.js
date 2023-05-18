import './Navbar.css'
import logo from '../../Assets/keyLogo.png'
import logoText from '../../Assets/logo_text.png'
import { Link } from 'react-router-dom'
import Menu from './Menu/Menu'
import { useState } from 'react'

function Navbar(props) {
    const [menuActive, setMenuActive] = useState(false)
    return (
        <nav>   
            <div className="navbar-left">
                <Link to={props.mainLabelHref}>
                    <img className="Logo" src={logo} alt="logo" onClick={() => setMenuActive(false)}/>
                </Link>
                <Link to={props.mainLabelHref}>
                    <img className="LogoText" src={logoText} alt="logoText"/>
                </Link>
            </div>
            <div className="navbar-right">
                <ul className="ul-navbar">
                    <li className="li-navbar">{props.buttons}</li>
                </ul>
            </div>
            <div className="burger-btn" onClick={() => setMenuActive(!menuActive)}>
                <span/>
            </div>
            <Menu 
            active={menuActive}
            setActive={setMenuActive}
            buttons={[
                <Link to="/login" key={'4'}>
                    <button className="menu_button">Войти</button>
                </Link>,
                <Link to="/register" key={'5'}>
                    <button className="menu_button">
                        Зарегистрироваться
                    </button>
                </Link>,
            ]}
            />
        </nav>
    )
}

export default Navbar