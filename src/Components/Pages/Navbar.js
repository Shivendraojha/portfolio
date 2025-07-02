import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Navbar.css'

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
      <div className="container">
        <Link to="/" className="navbar-brand">Shivendra Ojha</Link>
        <div className="burger-menu" onClick={toggleMobileMenu}>
          &#9776;
        </div>
        <div className={`nav-links ${isMobileMenuOpen ? 'show' : ''}`}>
          <Link to="/portfolio/about" className="nav-link" onClick={toggleMobileMenu}>About</Link>
          {/* <Link to="/education" className="nav-link" onClick={toggleMobileMenu}>Education</Link>  */}
          <Link to="/portfolio/projects" className="nav-link" onClick={toggleMobileMenu}>Projects</Link>
          <Link to="/portfolio/certification" className="nav-link" onClick={toggleMobileMenu}>Certification</Link>
          <Link to="/portfolio/contact" className="nav-link" onClick={toggleMobileMenu}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
