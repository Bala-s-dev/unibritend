import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from './Assets/logo.jpg';

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Logo" className="logo" />
        <p>Unbritind Ltd</p>
      </div>

      <div className={`hamburger ${menuActive ? 'active' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      

      <ul className={`nav-menu ${menuActive ? 'active' : ''}`}>
        <li>
          <Link to="/" onClick={() => setMenuActive(false)}>Home</Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setMenuActive(false)}>About Us</Link>
        </li>
        <li>
          <Link to="/collegeList" onClick={() => setMenuActive(false)}>Uk Universities</Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setMenuActive(false)}>Scholarship and Funding</Link>
        </li>
        <li>
          <Link to="" onClick={() => setMenuActive(false)}>Contact</Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setMenuActive(false)}>Contact</Link>
        </li>
        <li>
          <Link to="/login" className='nav-login' onClick={() => setMenuActive(false)}>Login</Link>
        </li>
      </ul>
      
    </nav>
  );
};

export default Navbar;
