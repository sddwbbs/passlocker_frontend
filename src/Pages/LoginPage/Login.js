import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Navbar from '../../Components/Navbar'
import './Login.css'

function Login() {
    let navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    // const [emailDirty, setEmailDirty] = useState(false)
    // const [passwordDirty, setPasswordDirty] = useState(false)
    // const [emailError, setEmailError] = useState('email не может быть пустым')
    // const [passwordError, setPasswordError] = useState(
    //     'пароль не может быть пустым'

    // )

    // const emailHandler = (e) => {
    //     setEmail(e.target.value)
    //     const re =
    //         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    //     if (!re.test(String(e.target.value).toLowerCase())) {
    //         setEmailError('некорректный email')
    //         if (!e.target.value) {
    //             setEmailError('email не может быть пустым')
    //         }
    //     } else {
    //         setEmailError('')
    //     }
    // }

    // const passwordHandler = (e) => {
    //     setPassword(e.target.value)
    //     if (e.target.value.length < 3) {
    //         setPasswordError('пароль не должен быть короче трех символов')
    //         if (!e.target.value) {
    //             setPasswordError('пароль не может быть пустым')
    //         }
    //     } else {
    //         setPasswordError('')
    //     }
    // }

    //FIXME: не хранить refresh_token в localStorage. Куки не дает поставить CORS,
    const signIn = () => {
        let url

        if (process.env.REACT_APP_ENV === 'local') {
            url = 'http://localhost:8080/api/auth/login'
        } else if (process.env.REACT_APP_ENV === 'prod') {
            url = '/api/auth/login'
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
                if (
                    response.error_code === 0 ||
                    response.error_code === undefined
                ) {
                    localStorage.setItem(
                        'access_token',
                        response.data.access_token
                    )

                    localStorage.setItem(
                        'refresh_token',
                        response.data.refresh_token
                    )

                    navigate('/dashboard')
                } else {
                    console.error(response.message)
                }
            })
            .catch((error) => {
                if (error.response !== undefined) {
                    console.error(error.response.data.message)
                } else {
                    console.error(error)
                }
            })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    // const blurHandler = (e) => {
    //     switch (e.target.name) {
    //         case 'email':
    //             setEmailDirty(true)
    //             break
    //         case 'password':
    //             setPasswordDirty(true)
    //             break
    //     }
    // }

    return (
        <div className="no-scroll">
            <Navbar mainLabelHref={'/'} />
            <form onSubmit={handleSubmit}>
                <h1 className="Header1_log_page">Вход</h1>
                <h2 className="Header2_log_page">Введите email:</h2>
                <div className="centered_log_page">
                    <input
                        className="input_email_log_page"
                        // onChange={(e) => emailHandler(e)}
                        value={email}
                        // onBlur={(e) => blurHandler(e)}
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
                        // onChange={(e) => passwordHandler(e)}
                        value={password}
                        // onBlur={(e) => blurHandler(e)}
                        name="password"
                        type="password"
                        placeholder="пароль"
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <div className="centered_log_page">
                    <button className="button_log_page" type="submit" onClick={signIn}>
                        Войти
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Login
