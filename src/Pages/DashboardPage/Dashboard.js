import { Grid } from '@nextui-org/react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Modal from '../../Components/Modal/Modal.js'
import MockItem from '../../Components/MockItem/MockItem.js'
import { logOut, getAllPasswords } from './Requests'
import plusIcon from '../../Assets/plusIcon.png'
import './Dashboard.css'

function Dashboard() {
    const navigate = useNavigate()
    const [modal, setModal] = useState({ modal1: false })
    const [passwords, setPasswords] = useState([])

    useEffect(() => {
        if (localStorage.getItem('access_token') === null) {
            navigate('/')
            return
        }

        getAllPasswords(setPasswords)
    }, [navigate])

    return (
        <div style={{ display: 'flex', flexDirection: 'row', height: '100vh' }}>
            <div className="black-background-dashboard">
                <button
                    className="plus_button"
                    onClick={() => {
                        logOut(navigate)
                    }}
                    style={{
                        width: '35%',
                        borderRadius: '20px',
                        backgroundColor: 'white',
                        color: 'black',
                        justifyContent: 'center',
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
                    {passwords.map((item) => (
                        <Grid
                            xs={5.8}
                            sm={3.8} 
                            md={2.8} 
                            key={item.ID}
                            css={{
                                '@media screen and (max-width: 600px)': {
                                    xs: 12, 
                                },
                                '@media screen and (min-width: 600px) and (max-width: 1100px)':{
                                    xs: 6, 
                                },
                                '@media screen and (min-width: 1100px)': {
                                    xs: 2.8,
                                },
                            }}
                        >
                            <MockItem text={item.Link} key={item.ID} />
                        </Grid>
                    ))}
                </Grid.Container>
            </div>
            <Modal
                title={'Создать новый элемент'}
                isOpened={modal.modal1}
                onModalClose={() => setModal({ ...modal, modal1: false })}
            >
                <form>
                        <h2 className="modal_window_h2" 
                            style={{
                                marginTop: '30px'
                            }}>Имя сервиса</h2>
                            <input
                            className="modal_window_input"
                            name="service_name"
                            type="text"
                            placeholder="введите имя"
                            />
                        <h2 className="modal_window_h2">Ссылка</h2>
                            <input
                            className="modal_window_input"
                            name="link"
                            type="link"
                            placeholder="вставьте ссылку"
                            />
                        <h2 className="modal_window_h2">Логин</h2>
                            <input
                            className="modal_window_input"
                            name="login"
                            type="text"
                            placeholder="введите логин"
                            />
                        <h2 className="modal_window_h2">Email</h2>
                            <input
                            className="modal_window_input"
                            name="email"
                            type="email"
                            placeholder="введите email"
                            />
                        <h2 className="modal_window_h2">Пароль</h2>
                            <input
                            className="modal_window_input"
                            name="password"
                            type="text"
                            placeholder="введите пароль"
                            />
                        <button
                            className="plus_button"
                            type="submit"
                            style={{
                                marginTop: '30px',
                                justifyContent: 'center',
                                marginLeft: '20%',
                                marginBottom: '20px',
                                width: '60%',
                            }}
                        >
                            Создать
                        </button>
                    </form>
            </Modal>
        </div>
    )
}

export default Dashboard
