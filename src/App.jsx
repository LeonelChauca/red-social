import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import backgroundImage from '../public/fondo.svg'

import { Login } from './pages/login/Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './pages/login/components/Register'

function App() {
  return (
    <div className="min-h-screen flex flex-col" style={{backgroundImage:`url(${backgroundImage})`, backgroundSize: 'cover',backgroundPosition: 'center' }}>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/registro" element={<Register/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
