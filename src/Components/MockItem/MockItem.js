import { Card, Text, Button } from '@nextui-org/react'
import eyeIcon from '../../Assets/eyeIcon.png'
import './MockItem.css'

const MockItem = (props) => {
    return (
        <Card
            css={{
                h: '200px',
                $$cardColor: 'white',
                mt: '10px',
                position: 'relative',
            }}
        >
            <Card.Body className="card_body">
            <Text h6 size={20} color="black" css={{ mt: 0 }}>
                <p className="card_info">
                    <span className="label">Имя:</span> {props.serviceName}
                </p>
                <p className="card_info">
                    <span className="label">Ссылка:</span> <a style={{ color: 'black'}} href={props.link}>{props.link}</a>
                </p>
                <p className="card_info">
                    <span className="label">Email:</span> {props.email}
                </p>
                <p className="card_info">
                    <span className="label">Логин:</span> {props.login}
                </p>
                <p className="card_info">
                    <span className="label">Пароль:</span> {props.password}
                </p>
            </Text>
                <Button
                    className="delete_button"
                    color="white"
                    onPress={props.onDelete}
                    auto
                    css={{
                        height: '30px',
                        width: '10px',
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        fontSize: '20px',
                        zIndex: 1,
                        marginRight: '30px',
                    }}
                >
                    ×
                </Button>
            </Card.Body>
        </Card>
    )
}

export default MockItem
