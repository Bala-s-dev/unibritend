import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa'; // Importing the dropdown icon from react-icons
import './Navbar.css';
import logo from "../../Assets/unibrit.png"

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [dropdownActive, setDropdownActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const toggleDropdown = () => {
    setDropdownActive(!dropdownActive);
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Logo" className="logo" />
        <h2 className='brand'>𝐔𝐍𝐈𝐁𝐑𝐈𝐓𝐄𝐍DGLOBAL </h2>
      </div>

      <div
        className={`hamburger ${menuActive ? 'active' : ''}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-menu ${menuActive ? 'active' : ''}`}>
        <li>
          <Link to="/" onClick={() => setMenuActive(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setMenuActive(false)}>
            About Us
          </Link>
        </li>
        <li className="dropdown" onClick={toggleDropdown}>
          <Link to="#">
            Universities 
            <FaChevronDown style={{ marginLeft: "5px" }} />
          </Link>
          <ul className={`dropdown-menu ${dropdownActive ? "active" : ""}`}>
            <li>
              <Link to="/CollegeList" onClick={() => {setDropdownActive(false); setMenuActive(false)}}>
                All Universities
              </Link>
            </li>
            <li>
              <Link to="/CollegeList/UK" onClick={() => {setDropdownActive(false); setMenuActive(false)}}>
                UK
              </Link>
            </li>
            <li>
              <Link to="/CollegeList/USA" onClick={() => {setDropdownActive(false); setMenuActive(false)}}>
                USA
              </Link>
            </li>
            <li>
              <Link to="/CollegeList/Canada" onClick={() => {setDropdownActive(false); setMenuActive(false)}}>
              Canada
              </Link>
            </li>
            <li>
              <Link to="/CollegeList/Australia" onClick={() => {setDropdownActive(false); setMenuActive(false)}}>
              Australia
              </Link>
            </li>
            <li>
              <Link to="/CollegeList/NewZealand" onClick={() => {setDropdownActive(false); setMenuActive(false)}}>
              NewZealand
              </Link>
            </li>
            <li>
              <Link to="/CollegeList/Ireland" onClick={() => {setDropdownActive(false); setMenuActive(false)}}>
              Ireland
              </Link>
            </li>
            <li>
              <Link to="/CollegeList/Germany" onClick={() => {setDropdownActive(false); setMenuActive(false)}}>
              Germany
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/Scholarship" onClick={() => setMenuActive(false)}>
            Scholarship and Funding
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setMenuActive(false)}>
            Contact
          </Link>
        </li>
        <li>
          <Link
            to="/Apply"
            className="btn"
            onClick={() => setMenuActive(false)}
          >
            Apply
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
