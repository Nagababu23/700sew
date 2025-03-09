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
    // Ensure Home is the default view on first load
    if (location.pathname === "/") {
      setTimeout(() => {
        document.getElementById("home_section")?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  }, [location.pathname]);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();

    // Convert sectionId to a correct path
    let path = "";
    if (sectionId === "contact_section") path = "contact-us";
    else if (sectionId === "about_section") path = "about-us";
    else if (sectionId !== "home_section") path = sectionId.replace("_section", "");

    navigate(`/${path}`);

    // Delay scroll to ensure component has mounted
    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }, 300);

    setMenuOpen(false); // Close menu after clicking
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
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
          <button className="menu-toggle close" onClick={() => setMenuOpen(false)}>✖</button>
          <Link to="/" className="menu-item" onClick={(e) => handleNavClick(e, "home_section")}>Home</Link>
          <Link to="/about-us" className="menu-item" onClick={(e) => handleNavClick(e, "about_section")}>About Us</Link>
          <Link to="/services" className="menu-item" onClick={(e) => handleNavClick(e, "services_section")}>Services</Link>
          <Link to="/contact-us" className="menu-item" onClick={(e) => handleNavClick(e, "contact_section")}>Contact</Link>
          <a href="tel:+971555989664" className="contact">Contact Us</a>
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>☰</button>
      </div>
    </nav>
  );
};

export default Navbar;
