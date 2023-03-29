import axios from 'axios'

export const signUp = (
    email,
    password,
    setEmail,
    setPassword,
    setErrorCode,
    setHandleMessage,
    setShowMessage
) => {
    let url

    if (process.env.REACT_APP_ENV === 'local') {
        url = 'http://localhost:8080/api/register'
    } else if (process.env.REACT_APP_ENV === 'prod') {
        url = '/api/register'
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
            if (response.data.error_code === 0) {
                setErrorCode(response.data.error_code)
                setHandleMessage(response.data.message)
                setShowMessage(true)

                setEmail('')
                setPassword('')
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
