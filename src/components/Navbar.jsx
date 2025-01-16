import React from 'react';
import './Navbar.css'; 
import logo from '../main_logo.png';  // Adjust path as needed

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
        <a href="/cart">
          <button  className="cart-button">
            🛒 Cart
          </button>
        </a>
        <button className="profile-button">
          👤 Profile
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
