import './Navbar.css'
import logo from './keyLogo.png'
import { Link } from 'react-router-dom'

function Navbar(props) {
    return (
        <nav>
            <div className="navbar-left">
                <Link to={props.mainLabelHref}>
                    <img src={logo} height="40" width="40" alt="Logo" />
                </Link>
                <Link
                    to={props.mainLabelHref}
                    style={{ textDecoration: 'none' }}
                >
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
