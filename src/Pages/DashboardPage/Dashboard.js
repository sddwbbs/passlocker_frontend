import axios from 'axios'
import { Grid } from '@nextui-org/react'
import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Modal from '../../Components/Modal/Modal.js'
import MockItem from '../../Components/MockItem/MockItem.js'
import plusIcon from '../../Assets/plusIcon.png'
import './Dashboard.css'

function Dashboard() {
    const navigate = useNavigate()
    const [modal, setModal] = useState({ modal1: false })
    const [passwords, setPasswords] = useState([])

    const getAllPasswords = useCallback(() => {
        let url

        if (process.env.REACT_APP_ENV === 'local') {
            url = 'http://localhost:8080/api/p/get-all-passwords'
        } else if (process.env.REACT_APP_ENV === 'prod') {
            url = '/api/p/get-all-passwords'
        }

        axios({
            method: 'get',
            url: url,
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access_token')}`,
            },
        })
            .then((response) => {
                let data = response.data
                setPasswords(data.passwords)
            })
            .catch((error) => {
                if (error.response === undefined) {
                    console.error('backend is disable')
                    return
                }

                let data = error.response.data

                if (data.message === 'token is expired') {
                    refreshTokens().then(getAllPasswords)
                } else {
                    console.error(data.message)
                }
            })
    }, [])

    const refreshTokens = () => {
        let url

        if (process.env.REACT_APP_ENV === 'local') {
            url = 'http://localhost:8080/api/refresh-tokens'
        } else if (process.env.REACT_APP_ENV === 'prod') {
            url = '/api/refresh-tokens'
        }

        return axios({
            method: 'post',
            url: url,
            headers: {
                'Content-Type': 'application/json',
            },
            data: {
                access_token: localStorage.getItem('access_token'),
                refresh_token: localStorage.getItem('refresh_token'),
            },
        })
            .then((response) => {
                let data = response.data

                localStorage.setItem('access_token', data.access_token)
                localStorage.setItem('refresh_token', data.refresh_token)
            })
            .catch((error) => {
                console.error(error)
            })
    }

    const logOut = () => {
        let url

        if (process.env.REACT_APP_ENV === 'local') {
            url = 'http://localhost:8080/api/log-out'
        } else if (process.env.REACT_APP_ENV === 'prod') {
            url = '/api/log-out'
        }

        axios({
            method: 'delete',
            url: url,
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access_token')}`,
            },
        })
            .then(() => {
                navigate('/')

                localStorage.removeItem('access_token')
                localStorage.removeItem('refresh_token')
            })
            .catch((error) => {
                if (error.response !== undefined) {
                    console.error(error.response.data.message)
                } else {
                    console.error(error)
                }
            })
    }

    useEffect(() => {
        if (localStorage.getItem('access_token') === null) {
            navigate('/')
            return
        }

        getAllPasswords()
    }, [navigate, getAllPasswords])

    return (
        <div style={{ display: 'flex', flexDirection: 'row', height: '100vh' }}>
            <div className="black-background-dashboard">
                <button
                    className="plus_button"
                    onClick={logOut}
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
