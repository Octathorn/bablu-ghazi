import { useState, useEffect, useRef } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

const contactInfo = [
  {
    icon: <Phone size={22} />,
    title: "Call Us",
    value: "+971582494328",
    sub: "Mon - Sat: 8:00 AM - 8:00 PM",
  },
  {
    icon: <Mail size={22} />,
    title: "Email Us",
    value: "info@babalgazi.com",
    sub: "We reply within 24 hours",
  },
  {
    icon: <MapPin size={22} />,
    title: "Our Location",
    value: "Dubai, UAE",
    sub: "Serving all Emirates",
  },
  {
    icon: <Clock size={22} />,
    title: "Emergency",
    value: "24/7 Available",
    sub: "+971582494328",
  },
];

const services = [
  "General Repairs", "Electrical", "Plumbing", "AC & HVAC",
  "Painting", "Flooring & Tiling", "Other"
];

export function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", service: "", message: "",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", email: "", phone: "", service: "", message: "" });
  };

  const inputStyle = {
    width: "100%",
    padding: "13px 16px",
    border: "1.5px solid #e0e4f0",
    borderRadius: "10px",
    fontSize: "15px",
    color: "#333",
    fontFamily: "'Poppins', sans-serif",
    backgroundColor: "#f8f9ff",
    outline: "none",
    transition: "border-color 0.2s",
    boxSizing: "border-box" as const,
  };

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        backgroundColor: "#f4f6fc",
        padding: "90px 24px",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "rgba(26,58,143,0.08)",
              border: "1px solid rgba(26,58,143,0.15)",
              borderRadius: "100px",
              padding: "6px 16px",
              marginBottom: "16px",
            }}
          >
            <div style={{ width: "8px", height: "8px", backgroundColor: "#1a3a8f", borderRadius: "50%" }} />
            <span style={{ color: "#1a3a8f", fontSize: "13px", fontWeight: 600 }}>Contact Us</span>
          </div>
          <h2
            style={{
              fontSize: "clamp(28px, 3.5vw, 42px)",
              fontWeight: 800,
              color: "#1a1a1a",
              lineHeight: 1.2,
              marginBottom: "16px",
            }}
          >
            Get a <span style={{ color: "#1a3a8f" }}>Free Quote</span> Today
          </h2>
          <p style={{ fontSize: "16px", color: "#666", maxWidth: "500px", margin: "0 auto", lineHeight: 1.7 }}>
            Fill out the form below and our team will get back to you within 2 hours.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.6fr",
            gap: "40px",
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Info Side */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-30px)",
              transition: "all 0.7s ease",
            }}
          >
            <div
              style={{
                backgroundColor: "#1a3a8f",
                borderRadius: "20px",
                padding: "40px 32px",
                color: "#ffffff",
                marginBottom: "24px",
              }}
            >
              <h3 style={{ fontSize: "22px", fontWeight: 700, marginBottom: "8px" }}>
                Contact Information
              </h3>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px", lineHeight: 1.6, marginBottom: "32px" }}>
                Reach out to us through any of these channels. We're here to help!
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                {contactInfo.map((info) => (
                  <div key={info.title} style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                    <div
                      style={{
                        width: "44px",
                        height: "44px",
                        backgroundColor: "rgba(245,197,24,0.2)",
                        borderRadius: "10px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#f5c518",
                        flexShrink: 0,
                      }}
                    >
                      {info.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)", marginBottom: "2px" }}>
                        {info.title}
                      </div>
                      <div style={{ fontSize: "15px", fontWeight: 600, color: "#ffffff" }}>
                        {info.value}
                      </div>
                      <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", marginTop: "2px" }}>
                        {info.sub}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Additional phone number */}
                <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      backgroundColor: "rgba(245,197,24,0.2)",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#f5c518",
                      flexShrink: 0,
                    }}
                  >
                    <Phone size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)", marginBottom: "2px" }}>
                      WhatsApp / Direct
                    </div>
                    <div style={{ fontSize: "15px", fontWeight: 600, color: "#ffffff" }}>
                      +971 58 249 4328
                    </div>
                    <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", marginTop: "2px" }}>
                      Available 7 days a week
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              
            </div>

            {/* Emergency Card */}
            <div
              style={{
                backgroundColor: "#f5c518",
                borderRadius: "16px",
                padding: "24px",
                display: "flex",
                alignItems: "center",
                gap: "16px",
              }}
            >
              <div style={{ fontSize: "36px" }}>🚨</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: "16px", color: "#1a1a1a" }}>
                  24/7 Emergency Service
                </div>
                <div style={{ fontSize: "14px", color: "#333", marginTop: "4px" }}>
                  For urgent issues, call us anytime
                </div>
                <a
                  href="tel:+971509998888"
                  style={{
                    display: "inline-block",
                    marginTop: "8px",
                    fontWeight: 700,
                    color: "#1a3a8f",
                    fontSize: "15px",
                    textDecoration: "none",
                  }}
                >
                 +971582494328 →
                </a>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(30px)",
              transition: "all 0.7s ease 0.15s",
            }}
          >
            <div
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "20px",
                padding: "48px 40px",
                boxShadow: "0 4px 30px rgba(0,0,0,0.07)",
                border: "1px solid #e8eaf6",
              }}
              className="contact-form-card"
            >
              {submitted ? (
                <div
                  style={{
                    textAlign: "center",
                    padding: "60px 20px",
                    animation: "fadeIn 0.4s ease",
                  }}
                >
                  <div
                    style={{
                      width: "80px",
                      height: "80px",
                      backgroundColor: "rgba(26,58,143,0.08)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 20px",
                    }}
                  >
                    <CheckCircle size={40} color="#1a3a8f" />
                  </div>
                  <h3 style={{ fontSize: "22px", fontWeight: 700, color: "#1a1a1a", marginBottom: "10px" }}>
                    Message Sent!
                  </h3>
                  <p style={{ color: "#666", lineHeight: 1.6 }}>
                    Thank you for contacting us. Our team will reach out within 2 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 style={{ fontSize: "22px", fontWeight: 700, color: "#1a1a1a", marginBottom: "28px" }}>
                    Request a Free Quote
                  </h3>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "16px",
                      marginBottom: "16px",
                    }}
                    className="form-row"
                  >
                    <div>
                      <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#444", marginBottom: "6px" }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Smith"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        style={inputStyle}
                        onFocus={(e) => (e.target.style.borderColor = "#1a3a8f")}
                        onBlur={(e) => (e.target.style.borderColor = "#e0e4f0")}
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#444", marginBottom: "6px" }}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@email.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        style={inputStyle}
                        onFocus={(e) => (e.target.style.borderColor = "#1a3a8f")}
                        onBlur={(e) => (e.target.style.borderColor = "#e0e4f0")}
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: "16px" }}>
                    <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#444", marginBottom: "6px" }}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+971 50 000 0000"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "#1a3a8f")}
                      onBlur={(e) => (e.target.style.borderColor = "#e0e4f0")}
                    />
                  </div>

                  <div style={{ marginBottom: "16px" }}>
                    <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#444", marginBottom: "6px" }}>
                      Service Needed *
                    </label>
                    <select
                      required
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      style={{ ...inputStyle, cursor: "pointer" }}
                      onFocus={(e) => (e.target.style.borderColor = "#1a3a8f")}
                      onBlur={(e) => (e.target.style.borderColor = "#e0e4f0")}
                    >
                      <option value="">Select a service...</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div style={{ marginBottom: "28px" }}>
                    <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#444", marginBottom: "6px" }}>
                      Message
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Describe your project or issue..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      style={{ ...inputStyle, resize: "vertical" }}
                      onFocus={(e) => (e.target.style.borderColor = "#1a3a8f")}
                      onBlur={(e) => (e.target.style.borderColor = "#e0e4f0")}
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      width: "100%",
                      backgroundColor: "#1a3a8f",
                      color: "#ffffff",
                      padding: "15px",
                      borderRadius: "10px",
                      border: "none",
                      fontSize: "15px",
                      fontWeight: 700,
                      cursor: "pointer",
                      fontFamily: "'Poppins', sans-serif",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
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
                    <Send size={18} />
                    Send Request
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 580px) {
          .form-row {
            grid-template-columns: 1fr !important;
          }
          .contact-form-card {
            padding: 28px 20px !important;
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </section>
  );
}