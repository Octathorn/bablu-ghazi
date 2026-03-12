import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import logoImage from "../../assets/logo.png";

const quickLinks = ["Home", "About", "Services", "Gallery", "Testimonials", "Contact"];
const services = ["General Repairs", "Electrical Services", "Plumbing", "AC & HVAC", "Painting", "Flooring & Tiling"];

export function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      style={{
        backgroundColor: "#0e2260",
        color: "#ffffff",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* Main Footer */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "70px 24px 50px",
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1.5fr",
          gap: "50px",
        }}
        className="footer-grid"
      >
        {/* Brand Column */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
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
            <span style={{ fontSize: "20px", fontWeight: 700 }}>
              Bab Al <span style={{ color: "#f5c518" }}>Gazi</span>
            </span>
          </div>

          <p
            style={{
              color: "rgba(255,255,255,0.65)",
              fontSize: "14px",
              lineHeight: 1.8,
              marginBottom: "28px",
              maxWidth: "280px",
            }}
          >
            Your trusted partner for all home maintenance and repair services. Serving
            the UAE with excellence since 2012.
          </p>

          {/* Contact snippets */}
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {[
              { icon: <Phone size={15} />, text: "+971582494328" },
              { icon: <Mail size={15} />, text: "info@babalgazi.com" },
              { icon: <MapPin size={15} />, text: "Dubai, United Arab Emirates" },
            ].map((item) => (
              <div
                key={item.text}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "14px",
                }}
              >
                <span style={{ color: "#f5c518" }}>{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4
            style={{
              fontSize: "16px",
              fontWeight: 700,
              marginBottom: "24px",
              position: "relative",
              paddingBottom: "12px",
            }}
          >
            Quick Links
            <span
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "36px",
                height: "3px",
                backgroundColor: "#f5c518",
                borderRadius: "2px",
              }}
            />
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
            {quickLinks.map((link) => (
              <li key={link}>
                <button
                  onClick={() => scrollTo(link)}
                  style={{
                    background: "none",
                    border: "none",
                    color: "rgba(255,255,255,0.65)",
                    fontSize: "14px",
                    cursor: "pointer",
                    padding: 0,
                    textAlign: "left",
                    fontFamily: "'Poppins', sans-serif",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#f5c518")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.65)")}
                >
                  <ArrowRight size={13} />
                  {link}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4
            style={{
              fontSize: "16px",
              fontWeight: 700,
              marginBottom: "24px",
              position: "relative",
              paddingBottom: "12px",
            }}
          >
            Our Services
            <span
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "36px",
                height: "3px",
                backgroundColor: "#f5c518",
                borderRadius: "2px",
              }}
            />
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
            {services.map((s) => (
              <li key={s}>
                <button
                  onClick={() => scrollTo("services")}
                  style={{
                    background: "none",
                    border: "none",
                    color: "rgba(255,255,255,0.65)",
                    fontSize: "14px",
                    cursor: "pointer",
                    padding: 0,
                    textAlign: "left",
                    fontFamily: "'Poppins', sans-serif",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#f5c518")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.65)")}
                >
                  <ArrowRight size={13} />
                  {s}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4
            style={{
              fontSize: "16px",
              fontWeight: 700,
              marginBottom: "24px",
              position: "relative",
              paddingBottom: "12px",
            }}
          >
            Stay Updated
            <span
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "36px",
                height: "3px",
                backgroundColor: "#f5c518",
                borderRadius: "2px",
              }}
            />
          </h4>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "14px", lineHeight: 1.7, marginBottom: "20px" }}>
            Subscribe to our newsletter for tips, news, and special offers.
          </p>
          <div style={{ display: "flex", gap: "8px" }}>
            <input
              type="email"
              placeholder="Your email..."
              style={{
                flex: 1,
                padding: "11px 14px",
                borderRadius: "8px",
                border: "1.5px solid rgba(255,255,255,0.15)",
                backgroundColor: "rgba(255,255,255,0.08)",
                color: "#ffffff",
                fontSize: "14px",
                fontFamily: "'Poppins', sans-serif",
                outline: "none",
              }}
            />
            <button
              style={{
                backgroundColor: "#f5c518",
                border: "none",
                borderRadius: "8px",
                padding: "0 16px",
                cursor: "pointer",
                color: "#1a1a1a",
                fontWeight: 700,
                fontSize: "13px",
                fontFamily: "'Poppins', sans-serif",
                whiteSpace: "nowrap",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#e5b500")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#f5c518")}
            >
              Subscribe
            </button>
          </div>

          {/* Working Hours */}
          <div
            style={{
              marginTop: "28px",
              backgroundColor: "rgba(255,255,255,0.06)",
              borderRadius: "12px",
              padding: "16px",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div style={{ fontSize: "13px", fontWeight: 600, color: "#f5c518", marginBottom: "10px" }}>
              Working Hours
            </div>
            {[
              { day: "Mon – Fri", time: "8:00 AM – 8:00 PM" },
              { day: "Saturday", time: "9:00 AM – 6:00 PM" },
              { day: "Sunday", time: "Emergency Only" },
            ].map((h) => (
              <div
                key={h.day}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.65)",
                  marginBottom: "6px",
                }}
              >
                <span>{h.day}</span>
                <span style={{ color: "rgba(255,255,255,0.85)" }}>{h.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          padding: "20px 24px",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px", margin: 0 }}>
            © 2026 Bab Al Gazi. All rights reserved. Built with ❤️ in UAE.
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            {["Privacy Policy", "Terms of Service", "Sitemap"].map((link) => (
              <a
                key={link}
                href="#"
                style={{
                  color: "rgba(255,255,255,0.5)",
                  fontSize: "13px",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#f5c518")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)")}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}