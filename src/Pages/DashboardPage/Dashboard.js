import './Dashboard.css'
import { Avatar, Grid, Card, Text } from '@nextui-org/react';
import avatarLogo from '../../Assets/avatarLogo.png'
import plusIcon from '../../Assets/plusIcon.png'
import Modal from '../../Components/Modal.js'
import { useState } from 'react';

function Dashboard() {

    const [modal, setModal] = useState({
        modal1: false
    })

    const MockItem = ({ text }) => {
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
                        src={avatarLogo} />
                    </Grid>
                    <h2 className="user-name-dashboard">Gabrusevich Ivan</h2>
                </div>
                <div className="white-background-dashboard">
                    <button className="plus_button" onClick={() => setModal({
                    ...modal, modal1: true
                    })}>
                        <img
                            className="plusIcon-dashboard"
                            src={plusIcon}
                            height="20"
                            width="20"
                            alt=""
                        />   
                        Добавить
                    </button>
                    
                    <Grid.Container gap={2} justify="center" css={{ mt: '50px' }}>
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
                    <Grid.Container gap={2} justify="center" css={{ mt: '-50px' }}>
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
                    <Grid.Container gap={2} justify="center" css={{ mt: '-50px' }}>
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
                    title={"Создать новый элемент"}
                    isOpened={modal.modal1}
                    onModalClose={() => setModal({...modal, modal1: false})}
                    >

                    </Modal>
            </div>
    )
}

export default Dashboard
