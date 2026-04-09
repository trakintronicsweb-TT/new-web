import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./logo.png";
import './Navbar.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // Handle all clicks - always scroll to top
  const handleClick = () => {
    scrollToTop();
    if (open) setOpen(false);
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/gallery", label: "Gallery" },
    { path: "/projectbooking", label: "Project Booking" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="navbar-container">
          {/* Logo */}
          <Link 
            to="/" 
            className="navbar-logo"
            onClick={handleClick}
          >
            <img src={Logo} alt="ElectroCo Logo" />
          </Link>

          {/* Desktop Navigation */}
          <div className="navbar-menu-desktop">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${
                  location.pathname === link.path ? "active" : ""
                }`}
                onClick={handleClick}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className={`navbar-toggle ${open ? "open" : ""}`}
            aria-label="Toggle menu"
          >
            <span className="navbar-toggle-icon"></span>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div
        className={`nav-overlay ${open ? "active" : ""}`}
        onClick={() => setOpen(false)}
      ></div>

      {/* Mobile Navigation Menu */}
      <div className={`nav-mobile-menu ${open ? "active" : ""}`}>
        <div className="nav-mobile-header">
          <Link 
            to="/" 
            className="nav-mobile-logo" 
            onClick={handleClick}
          >
            <img src={Logo} alt="ElectroCo Logo" />
          </Link>
          <button
            onClick={() => setOpen(false)}
            className="nav-close-btn"
            aria-label="Close menu"
          >
            <span>×</span>
          </button>
        </div>

        <div className="nav-mobile-content">
          <ul className="nav-mobile-links">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  onClick={handleClick}
                  className={`nav-mobile-link ${
                    location.pathname === link.path ? "active" : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="nav-contact-info">
            <p className="nav-contact-title">Need electrical solutions?</p>
            <a href="tel:+918767841367" className="nav-contact-phone">
              <span className="nav-contact-icon">📞</span>
              +918767841367
            </a>
          </div>
        </div>
      </div>
    </>
  );
}