import './Dashboard.css'
import { Avatar, Grid, Card, Text } from '@nextui-org/react'
import avatarLogo from '../../Assets/avatarLogo.png'
import plusIcon from '../../Assets/plusIcon.png'
import Modal from '../../Components/Modal/Modal.js'
import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Dashboard() {
    const navigate = useNavigate()

    const [modal, setModal] = useState({
        modal1: false,
    })
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
        }).catch((error) => {
            if (error.response !== undefined) {
                console.error(error.response.data.message)
            } else {
                console.error(error)
            }
        })
    }

    // FIXME: если залогиниться, а потом удалить access_token,
    // то перекинет на главную страницу, но тогда из базы токен никак не удалиться
    useEffect(() => {
        if (localStorage.getItem('access_token') === null) {
            navigate('/')
            return
        }

        getAllPasswords()
    }, [navigate, getAllPasswords])

    const MockItem = ({ text }) => {
        return (
            <Card css={{ h: '200px', $$cardColor: 'white', mt: '50px' }}>
                <Card.Body>
                    <Text h6 size={15} color="black" css={{ mt: 0 }}>
                        {text}
                    </Text>
                </Card.Body>
            </Card>
        )
    }

    return (
        // <div className="no-scroll">
        <div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    height: '100vh',
                }}
            >
                <div className="black-background-dashboard">
                    <Grid>
                        <Avatar
                            className="avatar-logo"
                            squared
                            size="lg"
                            src={avatarLogo}
                        />
                    </Grid>
                    <h2 className="user-name-dashboard">Gabrusevich Ivan</h2>
                </div>
                <div className="white-background-dashboard">
                    <button
                        className="plus_button"
                        onClick={() =>
                            setModal({
                                ...modal,
                                modal1: true,
                            })
                        }
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
                        justify="center"
                        css={{ mt: '50px' }}
                    >
                        <Grid xs={2.8}>
                            <MockItem text="1 of 4" />
                        </Grid>
                        <Grid xs={2.8}>
                            <MockItem text="2 of 4" />
                        </Grid>
                        <Grid xs={2.8}>
                            <MockItem text="3 of 4" />
                        </Grid>
                        <Grid xs={2.8}>
                            <MockItem text="4 of 4" />
                        </Grid>
                    </Grid.Container>
                    <Grid.Container
                        gap={2}
                        justify="center"
                        css={{ mt: '-50px' }}
                    >
                        <Grid xs={2.8}>
                            <MockItem text="1 of 4" />
                        </Grid>
                        <Grid xs={2.8}>
                            <MockItem text="2 of 4" />
                        </Grid>
                        <Grid xs={2.8}>
                            <MockItem text="3 of 4" />
                        </Grid>
                        <Grid xs={2.8}>
                            <MockItem text="4 of 4" />
                        </Grid>
                    </Grid.Container>
                    <Grid.Container
                        gap={2}
                        justify="center"
                        css={{ mt: '-50px' }}
                    >
                        <Grid xs={2.8}>
                            <MockItem text="1 of 4" />
                        </Grid>
                        <Grid xs={2.8}>
                            <MockItem text="2 of 4" />
                        </Grid>
                        <Grid xs={2.8}>
                            <MockItem text="3 of 4" />
                        </Grid>
                        <Grid xs={2.8}>
                            <MockItem text="4 of 4" />
                        </Grid>
                    </Grid.Container>
                </div>
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
