import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Registration.css'
import bigLogo from '../../Assets/bigLogo.png'
import RegPageHuman from '../../Assets/RegPageHuman.png'

function Registration() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div className="no-scroll">
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    height: '100vh',
                }}
            >
                <div className="black-background">
                    <form onSubmit={handleSubmit}>
                        <h1 className="Header1_reg_page">Создайте аккаунт</h1>
                        <h2 className="Header2_email">Введите email:</h2>
                        <div className="centered">
                            <input
                                className="input_email_reg_page"
                                value={email}
                                name="email"
                                type="email"
                                placeholder="email адрес"
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>
                        <h2 className="Header2_password">Введите пароль:</h2>
                        <div className="centered">
                            <input
                                className="input_password_reg_page"
                                value={password}
                                name="password"
                                type="password"
                                placeholder="пароль"
                                onChange={(event) => setPassword(event.target.value)}
                            />
                        </div>
                        <div className="centered">
                            <button className="button_reg_page" type="submit">
                                Войти
                            </button>
                        </div>
                    </form>
                </div>
                <div className="white-background">
                    <Link to='/'>
                        <img className="img-Logo" 
                        src={bigLogo} 
                        height="100" 
                        width="280" 
                        alt="Logo" 
                        />
                    </Link>

                    <img
                        className="img-Human"
                        src={RegPageHuman}
                        height="350"
                        width="350"
                        alt="Human"
                    />
                </div>
            </div>
        </div>
    )
}

export default Registration
