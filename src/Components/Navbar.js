import './Navbar.css';
import logo from './keyLogo.png';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav> 
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;600&display=swap" rel="stylesheet"></link>
      <div className="navbar-left">
        <a className="logo" href="#">
        <img 
          src={logo}
          height="45"
          width="45"
          alt="Logo"
        /> 
        </a>
        <ul className="brand"> 
          <li><a className="brand-left" href="#">pass</a></li>
          <li><a className="brand-right" href="#">locker</a></li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul className="Login">
          <li>     
              <Link to="/login" key={"4"}>
                <button>
                    Войти
                </button>
              </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
