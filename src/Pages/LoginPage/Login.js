import { useState } from 'react'
import './Login.css'
import Navbar from '../../Components/Navbar'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
      };

    return (
        <div className="no-scroll">
            <Navbar mainLabelHref={'/'} />
            <form onSubmit={handleSubmit}>
                <h1 className="Header1_log_page">Вход</h1>
                <h2 className="Header2_log_page">Введите email:</h2>
                <div className="centered_log_page">
                    <input
                        className="input_email_log_page"
                        value={email}
                        name="email"
                        type="email"
                        placeholder="email адрес"
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <h2 className="Header2_log_page">Введите пароль:</h2>
                <div className="centered_log_page">
                    <input
                        className="input_password_log_page"
                        value={password}
                        name="password"
                        type="password"
                        placeholder="пароль"
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <div className="centered_log_page">
                    <button className="button_log_page" type="submit">
                        Войти
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Login
