import axios from 'axios'

//FIXME: не хранить refresh_token в localStorage. Куки не дает поставить CORS,
export const signIn = (
    email,
    password,
    setEmail,
    setPassword,
    setErrorCode,
    setHandleMessage,
    setShowMessage,
    navigate
) => {
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
                setErrorCode(response.data.error_code)
                setHandleMessage(response.data.message)
                setShowMessage(true)

                setEmail('')
                setPassword('')

                localStorage.setItem('access_token', response.data.access_token)

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
                setErrorCode(error.response.data.error_code)
                setHandleMessage(error.response.data.message)
                setShowMessage(true)
            } else {
                console.error('backend is disable')
            }
        })
}
