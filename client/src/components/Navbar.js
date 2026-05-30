import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

const LINKS = [
  { to: "/",           label: "Home" },
  { to: "/experience", label: "Experience" },
  { to: "/projects",   label: "Projects" },
  { to: "/education",  label: "Education" },
  { to: "/contact",    label: "Contact" }
];

export default function Navbar({ name }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <header className={`navbar${scrolled ? " scrolled" : ""}`}>
      <div className="nav-inner container">
        <NavLink to="/" className="nav-logo">
          <span className="logo-initials">UCB</span>
          <span className="logo-dot" />
        </NavLink>

        <nav className={`nav-links${open ? " open" : ""}`}>
          {LINKS.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <a href="/contact" className="nav-cta btn btn-primary" onClick={e => { e.preventDefault(); window.location.href="/contact"; }}>
          Hire Me
        </a>

        <button className={`hamburger${open ? " open" : ""}`} onClick={() => setOpen(!open)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
