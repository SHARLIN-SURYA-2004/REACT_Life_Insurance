import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Header.css';
import logo from '../logo1.png';
import profileImg from '../profile-image.png'; // Replace with your actual profile image path

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Check login status and user email on component mount
    const checkLoginStatus = () => {
      const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
      const email = localStorage.getItem('userEmail') || '';
      setIsLoggedIn(loggedIn);
      setUserEmail(email);
    };

    checkLoginStatus();
  }, []);

  const handleLogout = () => {
    // Navigate to the Logout component which handles token removal
    navigate('/logout');
  };

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <header className="header">
      <div className="top-bar">
        <div className="contact-info">
          <span>📞 +91 63814 63160</span>
          <span>📧 lifeensure@gmail.com</span>
        </div>
      </div>
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="Secure Insurance Agency" />
          <span>LIFE ENSURE</span>
        </div>
        <nav className="nav-links">
          <Link to="/home">HOME</Link>
          <Link to="/services">POLICIES</Link>
          <Link to="/contact">CONTACT US</Link>
          <Link to="/about">ABOUT US</Link>
        </nav>
        <div className="actions">
          {isLoggedIn ? (
            <div className="profile-container">
              <img
                src={profileImg}
                alt="Profile"
                className="profile-avatar"
                onClick={toggleDropdown}
              />
              {dropdownOpen && (
                <div className="profile-dropdown">
                  <p>{userEmail}</p>
                  <button onClick={handleLogout} className="dropdown-logout-button">Logout</button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login">
              <button className="quote-button">Login / Sign Up</button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
