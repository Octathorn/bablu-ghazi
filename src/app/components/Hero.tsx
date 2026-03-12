import { useState, useEffect } from "react";
import { ArrowRight, Phone, CheckCircle } from "lucide-react";

const HERO_IMAGE = "https://images.unsplash.com/photo-1672927936377-97d1be3976cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsaXZpbmclMjByb29tJTIwaW50ZXJpb3IlMjBkZXNpZ24lMjBsdXh1cnl8ZW58MXx8fHwxNzcyMTAxMDQyfDA&ixlib=rb-4.1.0&q=80&w=1080";
const FEATURED_IMAGE = "https://images.unsplash.com/photo-1736390800504-d3963b553aa3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwcmVub3ZhdGlvbiUyMG1vZGVybiUyMGhvbWUlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzIxMDEwNDN8MA&ixlib=rb-4.1.0&q=80&w=1080";

const features = ["Licensed & Insured", "24/7 Emergency Support", "100% Satisfaction"];

export function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        fontFamily: "'Poppins', sans-serif",
        paddingTop: "72px",
      }}
    >
      {/* Background Image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${HERO_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
        }}
      />
      {/* Blue Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(105deg, rgba(18,46,120,0.92) 0%, rgba(22,60,160,0.82) 50%, rgba(18,46,120,0.72) 100%)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "80px 24px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
          gap: "60px",
          width: "100%",
        }}
        className="hero-grid"
      >
        {/* Left Side */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(40px)",
            transition: "all 0.8s ease",
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "rgba(245,197,24,0.15)",
              border: "1px solid rgba(245,197,24,0.4)",
              borderRadius: "100px",
              padding: "6px 16px",
              marginBottom: "24px",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                backgroundColor: "#f5c518",
                borderRadius: "50%",
                animation: "pulse 2s infinite",
              }}
            />
            <span style={{ color: "#f5c518", fontSize: "13px", fontWeight: 600 }}>
              #1 Home Maintenance Company
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontSize: "clamp(36px, 5vw, 58px)",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.15,
              marginBottom: "20px",
              letterSpacing: "-0.5px",
            }}
          >
            Expert Home{" "}
            <span style={{ color: "#f5c518" }}>Maintenance</span>{" "}
            & Repair Services
          </h1>

          {/* Subheading */}
          <p
            style={{
              fontSize: "17px",
              color: "rgba(255,255,255,0.85)",
              lineHeight: 1.7,
              marginBottom: "32px",
              maxWidth: "480px",
            }}
          >
            Comprehensive home services delivered by skilled professionals. From
            maintenance to installations, we handle it all with precision and care.
          </p>

          {/* Feature Badges */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "16px",
              marginBottom: "40px",
            }}
          >
            {features.map((f) => (
              <div
                key={f}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  color: "rgba(255,255,255,0.9)",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                <CheckCircle size={16} color="#f5c518" strokeWidth={2.5} />
                {f}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "#f5c518",
                color: "#1a1a1a",
                padding: "14px 28px",
                borderRadius: "8px",
                border: "none",
                fontSize: "15px",
                fontWeight: 700,
                cursor: "pointer",
                transition: "all 0.25s",
                fontFamily: "'Poppins', sans-serif",
                boxShadow: "0 4px 20px rgba(245,197,24,0.4)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "#e5b500";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(245,197,24,0.5)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "#f5c518";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(245,197,24,0.4)";
              }}
            >
              Request Service <ArrowRight size={18} strokeWidth={2.5} />
            </button>

            <a
              href="tel:+1234567890"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "transparent",
                color: "#ffffff",
                padding: "14px 28px",
                borderRadius: "8px",
                border: "2px solid rgba(255,255,255,0.6)",
                fontSize: "15px",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.25s",
                textDecoration: "none",
                fontFamily: "'Poppins', sans-serif",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#ffffff";
                (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.1)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.6)";
                (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
              }}
            >
              <Phone size={17} strokeWidth={2.5} />
              Emergency Call
            </a>
          </div>
        </div>

        {/* Right Side – Featured Image */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(40px)",
            transition: "all 0.8s ease 0.2s",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="hero-img-wrapper"
        >
          <div style={{ position: "relative", display: "inline-block" }}>
            {/* Yellow accent border frame */}
            <div
              style={{
                position: "absolute",
                top: "-14px",
                right: "-14px",
                bottom: "14px",
                left: "14px",
                borderRadius: "24px",
                border: "4px solid #f5c518",
                zIndex: 0,
              }}
            />
            <img
              src={FEATURED_IMAGE}
              alt="Modern Home Interior"
              style={{
                width: "100%",
                maxWidth: "520px",
                height: "380px",
                objectFit: "cover",
                borderRadius: "20px",
                position: "relative",
                zIndex: 1,
                boxShadow: "0 24px 60px rgba(0,0,0,0.4)",
              }}
            />
            {/* Stats Badge */}
            <div
              style={{
                position: "absolute",
                bottom: "-20px",
                left: "-20px",
                backgroundColor: "#ffffff",
                borderRadius: "14px",
                padding: "14px 20px",
                boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
                zIndex: 2,
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  backgroundColor: "#f5c518",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "20px",
                }}
              >
                🏠
              </div>
              <div>
                <div style={{ fontSize: "20px", fontWeight: 800, color: "#1a3a8f", lineHeight: 1 }}>
                  5,000+
                </div>
                <div style={{ fontSize: "12px", color: "#666", fontWeight: 500, marginTop: "2px" }}>
                  Projects Completed
                </div>
              </div>
            </div>
            {/* Rating Badge */}
            <div
              style={{
                position: "absolute",
                top: "-16px",
                left: "20px",
                backgroundColor: "#1a3a8f",
                borderRadius: "12px",
                padding: "10px 16px",
                boxShadow: "0 6px 20px rgba(26,58,143,0.4)",
                zIndex: 2,
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span style={{ fontSize: "18px" }}>⭐</span>
              <div>
                <div style={{ fontSize: "16px", fontWeight: 800, color: "#f5c518", lineHeight: 1 }}>
                  4.9
                </div>
                <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>
                  Rating
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 2,
        }}
      >
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ width: "100%", height: "60px", display: "block" }}>
          <path d="M0,80 L0,40 Q360,0 720,40 Q1080,80 1440,40 L1440,80 Z" fill="#ffffff" />
        </svg>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-img-wrapper {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
