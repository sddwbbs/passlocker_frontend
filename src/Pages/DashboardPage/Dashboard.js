import './Dashboard.css'
import plusIcon from '../../Assets/plusIcon.png'
import { Grid } from 'react-bootstrap'
import Modal from '../../Components/Modal.js'
import { useState } from 'react';

function Dashboard() {

    const [modal, setModal] = useState({
        modal1: false
    })

    return (
        <div>  
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    height: '100vh',
                }}
            >
                <div className="black-background-dashboard">
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
