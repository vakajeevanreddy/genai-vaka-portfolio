import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navLinks, socialLinks } from "../constants";
import { FaLinkedin, FaGithub, FaCode } from "react-icons/fa";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getIcon = (name) => {
    switch (name) {
      case "LinkedIn":
        return <FaLinkedin size={24} />;
      case "GitHub":
        return <FaGithub size={24} />;
      case "LeetCode":
        return <FaCode size={24} />;
      default:
        return null;
    }
  };

  return (
    <nav
      className={`navbar ${scrolled ? "glassmorphism" : "bg-transparent"}`}
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        padding: "20px 40px",
        position: "fixed",
        top: 0,
        zIndex: 20,
        transition: "0.3s",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <Link
          to="/"
          style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <div
            style={{
              width: "45px",
              height: "45px",
              borderRadius: "50%",
              backgroundColor: "var(--accent)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              fontWeight: "bold",
              fontSize: "16px",
              boxShadow: "0 0 15px rgba(145, 94, 255, 0.6)",
            }}
          >
            VJR
          </div>
          <p style={{ color: "white", fontSize: "18px", fontWeight: "bold", cursor: "pointer", display: "flex" }}>
            Vaka Jeevan Reddy &nbsp;
            <span style={{ color: "var(--accent)" }}>| AI Engineer</span>
          </p>
        </Link>

        <div style={{ display: "flex", alignItems: "center", gap: "40px" }}>
          <ul style={{ listStyle: "none", display: "flex", gap: "40px", alignItems: "center" }}>
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                style={{
                  color: active === nav.title ? "white" : "var(--secondary)",
                  fontSize: "18px",
                  fontWeight: "500",
                  cursor: "pointer",
                }}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`} style={{ color: "inherit", textDecoration: "none" }}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>

          <div style={{ display: "flex", gap: "20px", alignItems: "center", borderLeft: "1px solid rgba(255,255,255,0.1)", paddingLeft: "20px" }}>
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--secondary)", transition: "0.3s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--secondary)")}
              >
                {getIcon(link.name)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

