import './Dashboard.css'
import { useState } from 'react';
import { Avatar, Grid, Card, Text } from '@nextui-org/react';
import avatarLogo from '../../Assets/avatarLogo.png';
import plusIcon from '../../Assets/plusIcon.png';
import Modal from '../../Components/Modal/Modal.js';
import MockItem from '../../Components/MockItem/MockItem.js';

function Dashboard() {
  const [modal, setModal] = useState({ modal1: false });
  const [mockItems, setMockItems] = useState([]);

  const handleAddMockItem = () => {
    setMockItems([...mockItems, { id: mockItems.length + 1, text: `${mockItems.length + 1}` }]);
  };

  const handleDeleteMockItem = (id) => {
    setMockItems(mockItems.filter((item) => item.id !== id));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row', height: '100vh'}}>
      <div className="black-background-dashboard">
        <Grid>
          <Avatar className="avatar-logo" squared size="lg" src={avatarLogo} />
        </Grid>
        <h2 className="user-name-dashboard">Gabrusevich Ivan</h2>
      </div>
      <div className="white-background-dashboard">
        <button className="plus_button" onClick={() => setModal({ ...modal, modal1: true })}>
          <img className="plusIcon-dashboard" src={plusIcon} height="20" width="20" alt="" />
          Добавить
        </button>
        <Grid.Container gap={2} css={{ mt: '0px', ml: '0px' }} className="grid-container">
          {mockItems.map((item) => (
            <Grid
                xs={10} sm={5.5} md={2.8}
                key={item.id}
                css={{ 
                '@media screen and (max-width: 600px)': { xs: 12 },
                '@media screen and (min-width: 600px) and (max-width: 1100px)': { xs: 6 },
                '@media screen and (min-width: 1100px)': { xs: 2.8 },
                }}
            >
              <MockItem text={item.text} onDelete={() => handleDeleteMockItem(item.id)} />
            </Grid>
          ))}
        </Grid.Container>
      </div>
      <Modal
        title={'Создать новый элемент'}
        isOpened={modal.modal1}
        onModalClose={() => setModal({ ...modal, modal1: false })}
      >
        <button onClick={handleAddMockItem}>Добавить элемент</button>
      </Modal>
    </div>
  );
}

export default Dashboard;
