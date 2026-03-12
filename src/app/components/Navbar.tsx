import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import logoImage from "../../assets/logo.png";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["Home", "Services", "About", "Gallery", "Contact"];

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      style={{
        fontFamily: "'Poppins', sans-serif",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: "all 0.3s ease",
        backgroundColor: isScrolled ? "#ffffff" : "#ffffff",
        boxShadow: isScrolled ? "0 2px 20px rgba(0,0,0,0.12)" : "0 1px 10px rgba(0,0,0,0.08)",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "72px",
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            cursor: "pointer",
          }}
          onClick={() => scrollTo("home")}
        >
          <div
            style={{
              width: "44px",
              height: "44px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={logoImage}
              alt="Bab Al Gazi Logo"
              style={{ width: "44px", height: "44px", objectFit: "contain" }}
            />
          </div>
          <div>
            <span
              style={{
                fontSize: "18px",
                fontWeight: 700,
                color: "#1a3a8f",
                letterSpacing: "-0.3px",
              }}
            >
              Bab Al{" "}
              <span style={{ color: "#f5c518" }}>Gazi</span>
            </span>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            gap: "36px",
            margin: 0,
            padding: 0,
          }}
          className="hidden md:flex"
        >
          {navLinks.map((link) => (
            <li key={link}>
              <button
                onClick={() => scrollTo(link.toLowerCase())}
                style={{
                  background: "none",
                  border: "none",
                  fontSize: "15px",
                  fontWeight: 500,
                  color: "#2d2d2d",
                  cursor: "pointer",
                  padding: "4px 0",
                  position: "relative",
                  transition: "color 0.2s",
                  fontFamily: "'Poppins', sans-serif",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "#1a3a8f")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "#2d2d2d")
                }
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden md:flex" style={{ alignItems: "center", gap: "12px" }}>
          <a
            href="tel:+1234567890"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "#f5c518",
              color: "#1a1a1a",
              padding: "10px 22px",
              borderRadius: "8px",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: 700,
              transition: "all 0.2s",
              fontFamily: "'Poppins', sans-serif",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "#e5b500";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "#f5c518";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            <Phone size={16} strokeWidth={2.5} />
            Call Now
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#1a3a8f",
          }}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            backgroundColor: "#ffffff",
            borderTop: "1px solid #eee",
            padding: "16px 24px 24px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
          }}
        >
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link.toLowerCase())}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                background: "none",
                border: "none",
                padding: "12px 0",
                fontSize: "16px",
                fontWeight: 500,
                color: "#2d2d2d",
                cursor: "pointer",
                borderBottom: "1px solid #f0f0f0",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              {link}
            </button>
          ))}
          <a
            href="tel:+1234567890"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              backgroundColor: "#f5c518",
              color: "#1a1a1a",
              padding: "12px 22px",
              borderRadius: "8px",
              textDecoration: "none",
              fontSize: "15px",
              fontWeight: 700,
              marginTop: "16px",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            <Phone size={16} strokeWidth={2.5} />
            Call Now
          </a>
        </div>
      )}
    </nav>
  );
}