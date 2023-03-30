import axios from 'axios'

export const getAllPasswords = (setPasswords) => {
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
}

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

export const logOut = (navigate) => {
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
