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
        <h2>Unibritind Ltd</h2>
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
            <FaChevronDown style={{marginLeft:'5px'}}
              className={`dropdown-icon ${dropdownActive ? 'active' : ''}`}
            />
          </Link>
          <ul className={`dropdown-menu ${dropdownActive ? 'active' : ''}`}>
            <li>
              <Link to="/collegeList/uk" onClick={() => setMenuActive(false)}>
                UK
              </Link>
            </li>
            <li>
              <Link to="/collegeList/usa" onClick={() => setMenuActive(false)}>
                USA
              </Link>
            </li>
            <li>
              <Link
                to="/collegeList/canada"
                onClick={() => setMenuActive(false)}
              >
                Canada
              </Link>
            </li>
            <li className="sub-dropdown" onClick={toggleSubDropdown}>
              <li>
                <Link
                  to="/collegeList/australia"
                  onClick={() => setMenuActive(false)}
                >
                  Australia
                </Link>
              </li>
              <li>
                <Link
                  to="/collegeList/new-zealand"
                  onClick={() => setMenuActive(false)}
                >
                  New Zealand
                </Link>
              </li>
              <li>
                <Link
                  to="/collegeList/ireland"
                  onClick={() => setMenuActive(false)}
                >
                  Ireland
                </Link>
              </li>
              <li>
                <Link
                  to="/collegeList/germany"
                  onClick={() => setMenuActive(false)}
                >
                  Germany
                </Link>
              </li>
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
