import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import "../css/navbar.css";
import logo from "../images/logo.jpg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Ensuring the first page load doesn't auto-scroll to an unintended section
    if (location.pathname === "/") {
      setTimeout(() => {
        const homeSection = document.getElementById("home_section");
        if (homeSection) {
          homeSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 500);
    }
  }, [location.pathname]);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();

    const path =
      sectionId !== "home_section"
        ? sectionId.replace("_section", "").replace("contact", "contact-us").replace("about", "about-us")
        : "";

    navigate(`/${path}`);

    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);

    setMenuOpen(false); // Close menu after clicking
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
          <img src={logo} alt="700 Cleaning Services" />
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
          <a href="tel:+971555989664" className="contact">
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
