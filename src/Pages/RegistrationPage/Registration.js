import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import bigLogo from '../../Assets/bigLogo.png'
import RegPageHuman from '../../Assets/RegPageHuman.png'
import MessagePopup from '../../Components/MessagePopup/MessagePopup'
import './Registration.css'

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

    const signUp = () => {
        let url

        if (process.env.REACT_APP_ENV === 'local') {
            url = 'http://localhost:8080/api/register'
        } else if (process.env.REACT_APP_ENV === 'prod') {
            url = '/api/register'
        }

        axios({
            method: 'post',
            url: url,
            data: {
                email: email,
                password: password,
            },
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => {
                if (response.data.error_code === 0) {
                    setErrorCode(response.data.error_code)
                    setHandleMessage(response.data.message)
                    setShowMessage(true)

                    setEmail('')
                    setPassword('')
                }
            })
            .catch((error) => {
                if (error.response !== undefined) {
                    setErrorCode(error.response.data.error_code)
                    setHandleMessage(error.response.data.message)
                    setShowMessage(true)
                } else {
                    console.error('backend is disable')
                }
            })
    }

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
                                onClick={signUp}
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
