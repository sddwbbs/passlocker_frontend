import './MessagePopup.css'
import { useEffect } from 'react'

function MessagePopup(props) {
    useEffect(() => {
        let timeoutId
        if (props.showMessage) {
            // Задержка на 3 секунды перед скрытием сообщения
            timeoutId = setTimeout(() => {
                props.setShowMessage(false)
            }, 2000)
        }

        return () => {
            clearTimeout(timeoutId)
        }
    })

    return (
        <div className={`message ${props.showMessage ? 'show' : ''}`}>
            <p
                style={{
                    fontSize: '20px',
                    color: props.errorCode ? 'red' : 'green',
                    fontFamily: 'Lexend',
                }}
            >
                {props.message}
            </p>
        </div>
    )
}

export default MessagePopup
