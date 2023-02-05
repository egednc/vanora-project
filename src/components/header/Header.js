import React, { useState } from "react";
import Logo from '../../images/logo.png'
import "./header.css";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    
    <div className="Navbar">
      <img  className='logo' src={Logo}></img>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/">Show All Tyres</a>
        <a href="/">Find a Dealer</a>
        <a href="/">Guides & Videos</a>
        <a href="/">Go with</a>
        <a href="/">Go Service & Help</a>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
    
  );
};

export default Header;
