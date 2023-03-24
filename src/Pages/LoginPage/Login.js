import { useState } from 'react';
import bigLogo from '../../Assets/bigLogo.png';
import './Login.css';
import { Link } from "react-router-dom";

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [emailError, setEmailError] = useState('email не может быть пустым')
    const [passwordError, setPasswordError] = useState('пароль не может быть пустым')

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('некорректный email')
            if(!e.target.value) {
                setEmailError('email не может быть пустым')
            }
        } else {
            setEmailError("")
        }
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 3) {
            setPasswordError('пароль не должен быть короче трех символов')
            if(!e.target.value) {
                setPasswordError('пароль не может быть пустым')
            }
        } else {
            setPasswordError("")
        }

    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
        }
    }

    return (
        <div className="no-scroll">
            <img className="img-Logo"
            src={bigLogo}
            height="120"
            width="330"
            alt="Logo"
            />  
            <form>
                <h1 className="Header1">Вход</h1>
                <h2 className="Header2">Введите email:</h2>
                <div className="centered">
                {/* {(emailDirty && emailError) && <div style={{color:'red', marginLeft: '-200px', marginBottom: '5px'}}>{emailError}</div>} */}
                    <input className="input"
                    onChange={e => emailHandler(e)}
                    value={email}
                    onBlur={e => blurHandler(e)}
                    name='email' 
                    type="email" 
                    placeholder='email адрес'/>
                 </div>
                <h2 className="Header2">Введите пароль:</h2>
                <div className="centered">
                {/* {(passwordError && passwordDirty) && <div style={{color:'red', marginLeft: '-200px', marginBottom: '5px'}}>{passwordError}</div>} */}
                    <input className="input" 
                    onChange={e => passwordHandler(e)} 
                    value={password} 
                    onBlur={e => blurHandler(e)} 
                    name='password' 
                    type="password" 
                    placeholder='пароль'/>
                 </div>
                 <div className="centered">
                    <button className="button" type='submit'>Войти</button>
                 </div>
            </form>
        </div>
    );
  }
  
  export default Login;
  