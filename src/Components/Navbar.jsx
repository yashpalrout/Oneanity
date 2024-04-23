import React from 'react'
import './Navbar.css'
import logo from '../assets/logo-one.png'
import {useNavigate} from 'react-router-dom'
const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div className='navbar'>
        <img src={logo} alt='' />
        <ul className="nav-menu">
            <li onClick={()=>navigate('/')}>Home</li>
            <li onClick={()=>navigate('/about')}>About</li>
        </ul>
    </div>
  )
}

export default Navbar