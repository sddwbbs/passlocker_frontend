import './Navbar.css'
import logo from './keyLogo.png'
import { Link } from 'react-router-dom'

function Navbar(props) {
    return (
        <nav>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
                href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;600&display=swap"
                rel="stylesheet"
                crossOrigin=""
            ></link>
            <div className="navbar-left">
                {/*FIXME: надо как-то убрать подчеркивания снизу у названия*/}
                <Link to={props.mainLabelHref}>
                    <img src={logo} height="45" width="45" alt="Logo" />
                </Link>
                <Link to={props.mainLabelHref}>
                    <ul className="brand">
                        <li>
                            <div className="brand-left"> pass</div>
                        </li>
                        <li>
                            <div className="brand-right"> locker</div>
                        </li>
                    </ul>
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
