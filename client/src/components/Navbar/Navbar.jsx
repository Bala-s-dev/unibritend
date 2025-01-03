import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa'; // Importing the dropdown icon from react-icons
import './Navbar.css';
import logo from '../../Assets/logo.jpg';

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [dropdownActive, setDropdownActive] = useState(false);
  const [subDropdownActive, setSubDropdownActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const toggleDropdown = () => {
    setDropdownActive(!dropdownActive);
  };

  const toggleSubDropdown = () => {
    setSubDropdownActive(!subDropdownActive);
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Logo" className="logo" />
        <h2 className='brand'>Unibritind Ltd</h2>
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
              <Link to="/collegeList" onClick={() => setDropdownActive(false)}>
                All Universities
              </Link>
            </li>
            <li>
              <Link to="/collegeList/UK" onClick={() => setDropdownActive(false)}>
                UK
              </Link>
            </li>
            <li>
              <Link to="/collegeList/USA" onClick={() => setDropdownActive(false)}>
                USA
              </Link>
            </li>
            <li>
              <Link to="/collegeList/Canada" onClick={() => setDropdownActive(false)}>
              Canada
              </Link>
            </li>
            <li>
              <Link to="/collegeList/Australia" onClick={() => setDropdownActive(false)}>
              Australia
              </Link>
            </li>
            <li>
              <Link to="/collegeList/NewZealand" onClick={() => setDropdownActive(false)}>
              NewZealand
              </Link>
            </li>
            <li>
              <Link to="/collegeList/Ireland" onClick={() => setDropdownActive(false)}>
              Ireland
              </Link>
            </li>
            <li>
              <Link to="/collegeList/Germany" onClick={() => setDropdownActive(false)}>
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
