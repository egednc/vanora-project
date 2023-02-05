import React, { useState } from "react";
import { FaTimes, FaBars } from 'react-icons/fa'
import menuItems from "./MenuItems";
import "./Navbar.css";
import Logo from '../../images/logo.png'

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <header>
    <nav className="navbar">
      <h1 className="navbar-logo">
       <img src={Logo}></img>
      </h1>
      <div className="menu-icon" onClick={handleClick}>
      {active ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={active ? "nav-menu active" : "nav-menu"}>
        {menuItems.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.url} className={item.cName}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
    </header>
  );
};

export default Navbar;
