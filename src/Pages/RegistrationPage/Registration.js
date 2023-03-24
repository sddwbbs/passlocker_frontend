import './Registration.css';
import bigLogo from '../../Assets/bigLogo.png'
import miniLogo from '../../Assets/miniLogo.png'
import RegPageHuman from '../../Assets/RegPageHuman.png'

function Registration() {
    return (
        <div className="no-scroll">
        <div style={{ display: "flex", flexDirection: "row", height: "100vh" }}>
        <div className="black-background">
            <p className="blackside-text-header">Создайте аккаунт</p>
            <p className="blackside-text-email">Введите Email:</p>
            <div className="rectangle-email" style={{ 
                width: '530px',
                height: '60px',
                backgroundColor: 'white',
                borderRadius: '10px',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center'
                }}>
                <p className="rectangle-text-email">
                    email адрес
                </p>
            </div>
            <p className="blackside-text-password">Введите пароль:</p>
            <div className="rectangle-password" style={{ 
                width: '530px',
                height: '60px',
                backgroundColor: 'white',
                borderRadius: '10px',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
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
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center'
                }}>
                <img className="img-miniLogo"
                src={miniLogo}
                height="30"
                width="30"
                alt="miniLogo"
                />
                <p className="rectangle-text-continue">
                    Продолжить
                </p>
            </div>
        </div>
        <div className="white-background">
            <img className="img-Logo"
            src={bigLogo}
            height="150"
            width="400"
            alt="Logo"
            /> 

            <img className="img-Human"
            src={RegPageHuman}
            height="470"
            width="470"
            alt="Human"
            /> 
        </div>
      </div>
      </div>
    );
  }
  
  export default Registration;
  