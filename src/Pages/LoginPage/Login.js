import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
import './Login.css'
import MessagePopup from '../../Components/MessagePopup/MessagePopup'
import { signIn } from './Requests'

function Login() {
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showMessage, setShowMessage] = useState(false)
    const [errorCode, setErrorCode] = useState(undefined)
    const [handleMessage, setHandleMessage] = useState(undefined)

    useEffect(() => {
        if (localStorage.getItem('access_token') !== null) {
            navigate('/dashboard')
        }
    })

    const handleSubmit = (event) => {
        event.preventDefault()
    }

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
                {showMessage ? (
                    <MessagePopup
                        showMessage={showMessage}
                        setShowMessage={setShowMessage}
                        errorCode={errorCode}
                        message={handleMessage}
                    />
                ) : null}
                    <button
                        className="button_log_page"
                        type="submit"
                        onClick={() => {
                            signIn(
                                email,
                                password,
                                setEmail,
                                setPassword,
                                setErrorCode,
                                setHandleMessage,
                                setShowMessage,
                                navigate
                            )
                        }}
                    >
Войти
                    </button>
            </form>
        </div>
    )
}

export default Login
