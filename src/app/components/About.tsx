import { useEffect, useRef, useState } from "react";
import { CheckCircle, Award, Clock, Shield } from "lucide-react";

const ABOUT_IMG = "https://images.unsplash.com/photo-1656708760863-46ef25a9981b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwcmVwYWlyJTIwbWFpbnRlbmFuY2UlMjBwcm9mZXNzaW9uYWwlMjB3b3JrZXJ8ZW58MXx8fHwxNzcyMTAxMDQzfDA&ixlib=rb-4.1.0&q=80&w=1080";
const ABOUT_IMG2 = "https://images.unsplash.com/photo-1760009436767-d154e930e55c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29uc3RydWN0aW9uJTIwd29ya2VycyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzIxMDEwNTF8MA&ixlib=rb-4.1.0&q=80&w=1080";

const highlights = [
  "Professional & certified team of experts",
  "Transparent pricing with no hidden fees",
  "Guaranteed quality workmanship",
  "Fast response time & on-time delivery",
];

const values = [
  { icon: <Award size={22} />, title: "Certified Experts", desc: "All our technicians are certified and background-checked." },
  { icon: <Clock size={22} />, title: "On-Time Service", desc: "We value your time and always arrive on schedule." },
  { icon: <Shield size={22} />, title: "Fully Insured", desc: "Complete liability coverage for every project." },
];

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      style={{
        backgroundColor: "#ffffff",
        padding: "80px 24px",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "center",
        }}
        className="about-grid"
      >
        {/* Images side */}
        <div
          style={{
            position: "relative",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(-40px)",
            transition: "all 0.8s ease",
          }}
          className="about-images"
        >
          <img
            src={ABOUT_IMG}
            alt="Professional maintenance worker"
            style={{
              width: "75%",
              height: "420px",
              objectFit: "cover",
              borderRadius: "20px",
              boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
            }}
          />
          <img
            src={ABOUT_IMG2}
            alt="Our team"
            style={{
              width: "55%",
              height: "260px",
              objectFit: "cover",
              borderRadius: "16px",
              boxShadow: "0 16px 40px rgba(0,0,0,0.15)",
              position: "absolute",
              bottom: "-30px",
              right: "0",
              border: "5px solid #ffffff",
            }}
          />
          {/* Experience badge */}
          <div
            style={{
              position: "absolute",
              top: "40px",
              right: "30px",
              backgroundColor: "#1a3a8f",
              color: "#ffffff",
              borderRadius: "16px",
              padding: "18px 22px",
              textAlign: "center",
              boxShadow: "0 8px 30px rgba(26,58,143,0.35)",
            }}
          >
            <div style={{ fontSize: "34px", fontWeight: 800, color: "#f5c518", lineHeight: 1 }}>12</div>
            <div style={{ fontSize: "12px", fontWeight: 600, lineHeight: 1.4, marginTop: "4px" }}>
              Years of<br />Excellence
            </div>
          </div>
        </div>

        {/* Text side */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(40px)",
            transition: "all 0.8s ease 0.2s",
          }}
        >
          {/* Section label */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "rgba(26,58,143,0.08)",
              border: "1px solid rgba(26,58,143,0.15)",
              borderRadius: "100px",
              padding: "6px 16px",
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                backgroundColor: "#1a3a8f",
                borderRadius: "50%",
              }}
            />
            <span style={{ color: "#1a3a8f", fontSize: "13px", fontWeight: 600 }}>
              About Us
            </span>
          </div>

          <h2
            style={{
              fontSize: "clamp(28px, 3.5vw, 42px)",
              fontWeight: 800,
              color: "#1a1a1a",
              lineHeight: 1.2,
              marginBottom: "18px",
            }}
          >
            Your Trusted Partner for{" "}
            <span style={{ color: "#1a3a8f" }}>Home Maintenance</span>
          </h2>

          <p
            style={{
              fontSize: "16px",
              color: "#555",
              lineHeight: 1.8,
              marginBottom: "28px",
            }}
          >
            With over 12 years of experience, Bab Al Gazi has been the region's leading
            home maintenance and repair company. We combine skilled expertise with
            modern techniques to deliver services that exceed expectations — every
            single time.
          </p>

          {/* Highlights */}
          <div style={{ marginBottom: "36px" }}>
            {highlights.map((h) => (
              <div
                key={h}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "12px",
                  fontSize: "15px",
                  color: "#333",
                  fontWeight: 500,
                }}
              >
                <CheckCircle size={18} color="#f5c518" strokeWidth={2.5} style={{ flexShrink: 0 }} />
                {h}
              </div>
            ))}
          </div>

          {/* Value Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "36px" }}>
            {values.map((v) => (
              <div
                key={v.title}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "14px",
                  backgroundColor: "#f8f9ff",
                  borderRadius: "12px",
                  padding: "16px",
                  border: "1px solid #e8eaf6",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 20px rgba(26,58,143,0.1)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    backgroundColor: "#1a3a8f",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#f5c518",
                    flexShrink: 0,
                  }}
                >
                  {v.icon}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "15px", color: "#1a1a1a", marginBottom: "4px" }}>{v.title}</div>
                  <div style={{ fontSize: "13px", color: "#666", lineHeight: 1.5 }}>{v.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            style={{
              backgroundColor: "#1a3a8f",
              color: "#ffffff",
              padding: "13px 28px",
              borderRadius: "8px",
              border: "none",
              fontSize: "15px",
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: "'Poppins', sans-serif",
              transition: "all 0.25s",
              boxShadow: "0 4px 20px rgba(26,58,143,0.3)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "#122e75";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "#1a3a8f";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            Learn More About Us →
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .about-images {
            min-height: 320px;
          }
        }
      `}</style>
    </section>
  );
}
