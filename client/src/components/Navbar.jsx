import React from 'react'
import { Link } from "react-router-dom";
import '../styles/Navbar.css'
import logo from './Assets/logo.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='nav-logo'>
        <img src={logo} alt="" className='logo'/>
        <p>Unbritind Ltd</p>
        </div>
        <ul className='nav-menu'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/services">Programs and Universities</Link></li>
        <li><Link to="/contact">Scholoarship and Funding</Link></li>
         <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className='nav-login'>
            <button className='nav-login button'>Login</button>
        </div>
    </div>
  )
}

export default Navbar
