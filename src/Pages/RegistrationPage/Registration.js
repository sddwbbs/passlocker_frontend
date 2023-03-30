import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import bigLogo from '../../Assets/bigLogo.png'
import arrow from '../../Assets/arrow.png'
import RegPageHuman from '../../Assets/RegPageHuman.png'
import MessagePopup from '../../Components/MessagePopup/MessagePopup'
import './Registration.css'
import { signUp } from '../RegistrationPage/Requests'

function Registration() {
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
    }, [navigate])

    const handleSubmit = (event) => {
        event.preventDefault()
    }

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
                    <Link to="/" key={'2'}>
                        <button className="go_back_button">
                            <img
                            className="arrow-reg_page"
                            src={arrow}
                            height="20"
                            width="20"
                            alt=""
                            />
                        </button>
                    </Link>
                    <form onSubmit={handleSubmit}>
                        <h1 className="Header1_reg_page">Создайте аккаунт</h1>
                        <h2 className="Header2_email">Введите email:</h2>
                        <div className="centered_reg_page">
                            <input
                                className="input_email_reg_page"
                                // onChange={(e) => emailHandler(e)}
                                value={email}
                                // onBlur={(e) => blurHandler(e)}
                                name="email"
                                type="email"
                                placeholder="email адрес"
                                onChange={(event) =>
                                    setEmail(event.target.value)
                                }
                            />
                        </div>
                        <h2 className="Header2_password">Введите пароль:</h2>
                        <div className="centered_reg_page">
                            <input
                                className="input_password_reg_page"
                                // onChange={(e) => passwordHandler(e)}
                                value={password}
                                // onBlur={(e) => blurHandler(e)}
                                name="password"
                                type="password"
                                placeholder="пароль"
                                onChange={(event) =>
                                    setPassword(event.target.value)
                                }
                            />
                        </div>
                        {showMessage ? (
                            <MessagePopup
                                showMessage={showMessage}
                                setShowMessage={setShowMessage}
                                errorCode={errorCode}
                                message={handleMessage}
                            />
                        ) : null}
                        <div className="centered_reg_page">
                            <button
                                className="button_reg_page"
                                type="submit"
                                onClick={() => {
                                    signUp(
                                        email,
                                        password,
                                        setEmail,
                                        setPassword,
                                        setErrorCode,
                                        setHandleMessage,
                                        setShowMessage
                                    )
                                }}
                            >
                                Войти
                            </button>
                        </div>
                    </form>
                </div>
                <div className="white-background">
                    <Link to="/">
                        <img
                            className="img-Logo"
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
