import bigLogo from '../Assets/bigLogo.png';
import './Login.css';

function Login() {
    return (
        <div className="no-scroll">
            <img className="img-Logo"
            src={bigLogo}
            height="150"
            width="400"
            alt="Logo"
            />  
            <p className="header">Вход</p>
            <p className="text-email">Введите email:</p>
            <div className="rectangle-email" style={{ 
              width: '530px',
              height: '60px',
              backgroundColor: 'white',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center'
              }}>
              <p className="rectangle-text-email">
                  email адрес
              </p>
            </div>
            <p className="text-password">Введите пароль:</p>
            <div className="rectangle-password" style={{ 
                width: '530px',
                height: '60px',
                backgroundColor: 'white',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center'
                }}>
                <p className="rectangle-text-password">
                    пароль
                </p>
            </div>
            <div className="rectangle-continue" style={{ 
                width: '530px',
                height: '70px',
                backgroundColor: '#AEAEAE',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center'
                }}>
                <p className="rectangle-text-continue">
                    Войти
                </p>
            </div>
        </div>
    );
  }
  
  export default Login;
  