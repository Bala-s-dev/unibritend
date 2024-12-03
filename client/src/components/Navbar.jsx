import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css"
import logo from './Assets/logo.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo"> 
         Unibritind Ltd
         <div className='nav-logo'>
        <img src={logo} alt="" className='logo'/>
        </div>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/services">Programs and Universities</Link></li>
        <li><Link to="/contact">Scholoarship and Funding</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
        <div className='nav-login'>
              <button>Login</button>
        </div>
    </nav>
  );
};

export default Navbar;
