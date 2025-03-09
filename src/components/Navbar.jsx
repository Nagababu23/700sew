import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/navbar.css";
import logo from "../images/logo.jpg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();

  const handleNavClick = (e, path, sectionId) => {
    e.preventDefault();
    if (location.pathname !== path) {
      window.location.href = path; // Force navigation to reload page
    } else {
      scrollToSection(sectionId);
    }
    setMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 200);
  };

  useEffect(() => {
    if (location.pathname === "/contact-us") {
      scrollToSection("contact_section");
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">
          <img src={logo} alt="700sewagecleaning" />
        </Link>
        <div className={`menu ${menuOpen ? "active" : ""}`} ref={menuRef}>
          <Link to="/" className="menu-item" onClick={(e) => handleNavClick(e, "/", "home_section")}>
            Home
          </Link>
          <Link to="/about-us" className="menu-item" onClick={(e) => handleNavClick(e, "/about-us", "about_section")}>
            About Us
          </Link>
          <Link to="/services" className="menu-item" onClick={(e) => handleNavClick(e, "/services", "services_section")}>
            Services
          </Link>
          <Link to="/contact-us" className="menu-item" onClick={(e) => handleNavClick(e, "/contact-us", "contact_section")}>
            Contact
          </Link>
          <a href="tel:+971555989664" className="contact">
            Contact Us
          </a>
        </div>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
