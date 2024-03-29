import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage/Home'
import RegistrationPage from './Pages/RegistrationPage/Registration'
import LoginPage from './Pages/LoginPage/Login'
import DashboardPage from './Pages/DashboardPage/Dashboard'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
    </BrowserRouter>
)
