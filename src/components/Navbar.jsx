import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../css/navbar.css";
import logo from "../images/logo.jpg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const path =
      sectionId !== "home_section"
        ? sectionId
            .replace("_section", "")
            .replace("contact", "contact-us")
            .replace("about", "about-us")
        : "";
    
    navigate(`/${path}`);

    // Ensure scrolling happens after the component mounts
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Reduced delay

    // Close the menu after navigation
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

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
          <img src={logo} alt="700seweagecleaning" />
        </Link>
        <div className={`menu ${menuOpen ? "active" : ""}`} ref={menuRef}>
          <Link to="/" className="menu-item" onClick={(e) => handleNavClick(e, "home_section")}>
            Home
          </Link>
          <Link to="/about-us" className="menu-item" onClick={(e) => handleNavClick(e, "about_section")}>
            About Us
          </Link>
          <Link to="/services" className="menu-item" onClick={(e) => handleNavClick(e, "services_section")}>
            Services
          </Link>
          <Link to="/contact-us" className="menu-item" onClick={(e) => handleNavClick(e, "contact_section")}>
            Contact
          </Link>
          <a href="tel:++971555989664" className="contact">
            Contact Us
          </a>
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;