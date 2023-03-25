import './Home.css'
import Navbar from '../../Components/Navbar'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <Navbar
                buttons={[
                    <Link to="/login" key={'4'}>
                        <button className="login_button">Войти</button>
                    </Link>,
                    <Link to="/register" key={'5'}>
                        <button className="registration_button">
                            Зарегистрироваться
                        </button>
                    </Link>,
                ]}
            />
        </div>
    )
}

export default Home
