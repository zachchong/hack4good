import React from 'react';
import './Navbar.css'; 
import logo from '../logo.svg';  // Adjust path as needed

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Company Logo" />
      </div>
      
      <div className="credit-balance">
        Credits: $100
      </div>
      
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
      
      <div className="nav-buttons">
        <button className="cart-button">
          🛒 Cart
        </button>
        <button className="profile-button">
          👤 Profile
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
