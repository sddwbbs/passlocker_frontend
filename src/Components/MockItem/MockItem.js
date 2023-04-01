import { Card, Text, Button } from '@nextui-org/react'

const hello = () => {
    console.log('hello')
}

const MockItem = (props) => {
    return (
        <Card css={{ h: '200px', $$cardColor: 'white', mt: '50px' }}>
            <Card.Body>
                <Text h6 size={15} color="black" css={{ mt: 0 }}>
                    {props.text}
                </Text>
                <Button
                    auto
                    color="white"
                    onPress={props.onDelete}
                    css={{
                        width: 'min-content',
                    }}
                >
                    Удалить
                </Button>
            </Card.Body>
        </Card>
    )
}

export default MockItem
