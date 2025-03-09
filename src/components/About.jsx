import React, { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../css/navbar.css";
import logo from "../images/logo.jpg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  // Handle navigation and scrolling
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();

    // Close the menu
    setMenuOpen(false);

    // Navigate to the correct path
    const path = sectionId === "home_section" ? "/" : `/${sectionId.replace("_section", "")}`;
    navigate(path);

    // Scroll to the section after navigation
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Small delay to ensure the page has updated
  };

  // Toggle the mobile menu
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // Close the menu when clicking outside
  const handleClickOutside = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setMenuOpen(false);
    }
  };

  // Attach click outside listener
  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      <div className="container">
        {/* Logo */}
        <Link to="/" className="logo">
          <img src={logo} alt="700seweagecleaning" />
        </Link>

        {/* Menu Items */}
        <div className={`menu ${menuOpen ? "active" : ""}`} ref={menuRef}>
          <Link to="/" className="menu-item" onClick={(e) => handleNavClick(e, "home_section")}>
            Home
          </Link>
          <Link to="/about" className="menu-item" onClick={(e) => handleNavClick(e, "about_section")}>
            About Us
          </Link>
          <Link to="/services" className="menu-item" onClick={(e) => handleNavClick(e, "services_section")}>
            Services
          </Link>
          <Link to="/contact" className="menu-item" onClick={(e) => handleNavClick(e, "contact_section")}>
            Contact
          </Link>
          <a href="tel:++971555989664" className="contact">
            Call Us
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;