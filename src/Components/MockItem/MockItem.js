import { Card, Text, Button } from '@nextui-org/react'
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
                <Text h6 size={15} color="black" css={{ mt: 0 }}>
                    {props.text}
                </Text>
                <Button
                    auto
                    color="white"
                    onPress={props.onDelete}
                    css={{
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
