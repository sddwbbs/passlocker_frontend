import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

function Home() {
    const navigate = useNavigate()

    useEffect(() => {
        if (localStorage.getItem('access_token') !== null) {
            navigate('/dashboard')
        }
    })

    return (
        <div>
            <Navbar
                buttons={[
                    <Link to="/login" key={'4'}>
                        <button className="home_page_button">Войти</button>
                    </Link>,
                    <Link to="/register" key={'5'}>
                        <button className="home_page_button">
                            Зарегистрироваться
                        </button>
                    </Link>,
                ]}
            />
        </div>
    )
}

export default Home
