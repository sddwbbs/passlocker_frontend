import { Card, Text } from '@nextui-org/react';

const MockItem = ({ text, onDelete }) => {
  return (
    <Card css={{ h: "200px", $$cardColor: 'white', mt: '50px'}}>
      <Card.Body>
        <Text h6 size={15} color="black" css={{ mt: 0 }}>
          {text}
        </Text>
      </Card.Body>
    </Card>
  );
};

export default MockItem;
