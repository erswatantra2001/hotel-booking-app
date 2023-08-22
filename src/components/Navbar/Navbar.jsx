import React from "react";
import { BiSearch } from "react-icons/bi";
import "../../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <h1 className="logo"><a href="/">hotelship</a></h1>
      </div>
      <div className="searchbar">
        <BiSearch fontSize="1.4rem" />
        <input
          type="text"
          placeholder="Search by state, city, locality and more ..."
        />
      </div>
        <div className="nav-links">
          <ul className="nav-links">
            <li><a href="/deals" >Deals</a></li>
            <li><a href="/about" >About Us</a></li>
            <li><a href="/contact" >Contact Us</a></li>
            </ul>
        </div>
      <div className="navbar-right">
        <div className="auth-buttons">
          <button className="login-button">Login</button>
          <button className="signup-button">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
