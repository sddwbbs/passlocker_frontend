import { Grid } from '@nextui-org/react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Modal from '../../Components/Modal/Modal.js'
import MockItem from '../../Components/MockItem/MockItem.js'
import plusIcon from '../../Assets/plusIcon.png'
import './Dashboard.css'
import {
    logOut,
    getAllPasswords,
    addPassword,
    deletePassword,
} from './Requests'

function Dashboard() {
    const navigate = useNavigate()
    const [modal, setModal] = useState({ modal1: false })
    const [passwords, setPasswords] = useState([])
    const [serviceName, setServiceName] = useState('')
    const [link, setLink] = useState('')
    const [login, setLogin] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        if (localStorage.getItem('access_token') === null) {
            navigate('/')
            return
        }

        getAllPasswords(setPasswords)
    }, [navigate])

    const generateKey = (pre) => {
        return `${pre}_${new Date().getTime()}`
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'row', height: '100vh' }}>
            <div className="black-background-dashboard">
                <button
                    className="exit_button"
                    onClick={() => {
                        logOut(navigate)
                    }}
                >
                    Выйти
                </button>
            </div>
            <div className="white-background-dashboard">
                <button
                    className="plus_button"
                    onClick={() => setModal({ ...modal, modal1: true })}
                >
                    <img
                        className="plusIcon-dashboard"
                        src={plusIcon}
                        height="20"
                        width="20"
                        alt=""
                    />
                    Добавить
                </button>
                <Grid.Container
                    gap={2}
                    css={{ mt: '0px', ml: '0px' }}
                    className="grid-container"
                >
                    {passwords &&
                        passwords.map((item) => (
                            <Grid
                                xs={11}
                                sm={5.9}
                                md={3.9}
                                lg={2.9}
                                key={generateKey('grid') + item.id}
                            >
                                <MockItem
                                    text={item.serviceName}
                                    key={generateKey('password') + item.id}
                                    onDelete={() =>
                                        deletePassword(
                                            item.id,
                                            passwords,
                                            setPasswords
                                        )
                                    }
                                />
                            </Grid>
                        ))}
                </Grid.Container>
            </div>
            <Modal
                title={'Создать новый элемент'}
                isOpened={modal.modal1}
                onModalClose={() => setModal({ ...modal, modal1: false })}
            >
                <form css={{display: 'flex'}}>
                    <h2
                        className="modal_window_h2"
                        style={{
                            marginTop: '30px',
                            flex: 1,
                        }}
                    >
                        Название сервиса
                    </h2>
                    <input
                        className="modal_window_input"
                        name="service_name"
                        type="text"
                        placeholder="введите название"
                        value={serviceName}
                        onChange={(e) => setServiceName(e.target.value)}
                        style={{
                            flex: 1,
                        }}
                    />
                    <h2 className="modal_window_h2">Ссылка</h2>
                    <input
                        className="modal_window_input"
                        name="link"
                        type="link"
                        placeholder="вставьте ссылку"
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                        style={{
                            flex: 1,
                        }}
                    />
                    <h2 className="modal_window_h2">Логин</h2>
                    <input
                        className="modal_window_input"
                        name="login"
                        type="text"
                        placeholder="введите логин"
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                    />
                    <h2 className="modal_window_h2">Email</h2>
                    <input
                        className="modal_window_input"
                        name="email"
                        type="email"
                        placeholder="введите email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <h2 className="modal_window_h2">Пароль</h2>
                    <input
                        className="modal_window_input"
                        name="password"
                        type="text"
                        placeholder="введите пароль"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </form>
                <button
                    className="plus_button"
                    type="submit"
                    style={{
                        marginTop: '30px',
                        justifyContent: 'center',
                        marginLeft: '20%',
                        marginBottom: '20px',
                        width: '60%',
                        height: '55px',
                    }}
                    onClick={() => {
                        addPassword(
                            passwords,
                            setPasswords,
                            setServiceName,
                            setLink,
                            setLogin,
                            setEmail,
                            setPassword,
                            serviceName,
                            link,
                            login,
                            email,
                            password,
                            modal,
                            setModal
                        )
                    }}
                >
                    Создать
                </button>
            </Modal>
        </div>
    )
}

export default Dashboard
