import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
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
            .replace("contact", "contact")
            .replace("about", "about-us")
        : "";

    navigate(`/${path}`, { state: { sectionId } });
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
        <a href="/" className="logo">
          <img src={logo} alt="700seweagecleaning" />
        </a>
        <div className={`menu ${menuOpen ? "active" : ""}`} ref={menuRef}>
          <a href="/" className="menu-item">
            Home
          </a>
          <a href="/about-us" className="menu-item" onClick={(e) => handleNavClick(e, "about_section")}>
            About Us
          </a>
          <a href="/services" className="menu-item" onClick={(e) => handleNavClick(e, "services_section")}>
            Services
          </a>
          <a href="/contact" className="menu-item" onClick={(e) => handleNavClick(e, "contact_section")}>
            Contact
          </a>
          <a href="/blog" className="menu-item">
  Blogs
</a>
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
