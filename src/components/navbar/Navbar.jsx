import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../navbar/navbar.css";
import { Button } from "../button/Button";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <img
              src="../public/assets/images/logo.jpg"
              alt="Daar Ul-Gharib logo"
            />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-items">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-items">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Prayer Times
              </Link>
            </li>
            <li className="nav-items">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className="nav-items">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className="nav-items">
              <Link to="/join" className="nav-links" onClick={closeMobileMenu}>
                Join
              </Link>
            </li>
            <li className="nav-items">
              <Link
                to="/donate"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Donate
              </Link>
            </li>
            <li className="nav-items">
              <Link
                to="/suggestions"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Suggestions
              </Link>
            </li>
            <li className="nav-items">
              <Link to="/blog" className="nav-links" onClick={closeMobileMenu}>
                Blog
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline"> Test </Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
