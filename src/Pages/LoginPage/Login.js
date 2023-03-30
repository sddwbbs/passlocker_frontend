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
                    <input
                        className="input_log_page"
                        value={email}
                        name="email"
                        type="email"
                        placeholder="email адрес"
                        onChange={(event) => setEmail(event.target.value)}
                    />
                <h2 className="Header2_log_page">Введите пароль:</h2>
                    <input
                        className="input_log_page"
                        value={password}
                        name="password"
                        type="password"
                        placeholder="пароль"
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <button className="button_log_page" type="submit">
                        Войти
                    </button>
            </form>
        </div>
    )
}

export default Login
