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
                            xs={10}
                            sm={5.5}
                            md={2.8}
                            key={item.ID}
                            css={{
                                '@media screen and (max-width: 600px)': {
                                    xs: 12,
                                },
                                '@media screen and (min-width: 600px) and (max-width: 1100px)':
                                    { xs: 6 },
                                '@media screen and (min-width: 1100px)': {
                                    xs: 2.8,
                                },
                            }}
                        >
                            <MockItem text={item.ServiceName} key={item.ID} />
                        </Grid>
                    ))}
                </Grid.Container>
            </div>
            <Modal
                title={'Создать новый элемент'}
                isOpened={modal.modal1}
                onModalClose={() => setModal({ ...modal, modal1: false })}
            ></Modal>
        </div>
    )
}

export default Dashboard
