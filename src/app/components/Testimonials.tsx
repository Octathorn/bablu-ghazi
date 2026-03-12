import { useEffect, useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ahmed Al-Rashid",
    role: "Homeowner, Dubai",
    avatar: "https://images.unsplash.com/photo-1613394242132-1268854bde44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200",
    text: "Bab Al Gazi completely transformed our kitchen and bathrooms. The team was professional, on-time, and their attention to detail was exceptional. Highly recommend to anyone looking for quality home services.",
    rating: 5,
    project: "Kitchen & Bathroom Renovation",
  },
  {
    name: "Sara Mohammed",
    role: "Apartment Owner, Abu Dhabi",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200",
    text: "Outstanding service from start to finish. Their electricians rewired our entire apartment safely and efficiently. I was impressed by how clean and organized they kept the workspace throughout the project.",
    rating: 5,
    project: "Full Electrical Rewiring",
  },
  {
    name: "James Thompson",
    role: "Villa Owner, Sharjah",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200",
    text: "Called them for an emergency plumbing issue and they responded within 2 hours. Fixed the problem quickly and at a fair price. The technician was knowledgeable and explained every step. Will use again!",
    rating: 5,
    project: "Emergency Plumbing Repair",
  },
  {
    name: "Fatima Al-Hassan",
    role: "Property Manager, Ajman",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200",
    text: "We've been using Bab Al Gazi for our entire property portfolio for 3 years. Their consistency, reliability, and quality of work is unmatched. They're our go-to for any maintenance needs.",
    rating: 5,
    project: "Annual Maintenance Contract",
  },
];

export function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, []);

  const t = testimonials[active];

  return (
    <section
      id="testimonials"
      ref={ref}
      style={{
        background: "linear-gradient(135deg, #1a3a8f 0%, #122e75 100%)",
        padding: "90px 24px",
        fontFamily: "'Poppins', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative circles */}
      <div
        style={{
          position: "absolute",
          top: "-80px",
          right: "-80px",
          width: "320px",
          height: "320px",
          borderRadius: "50%",
          border: "1px solid rgba(245,197,24,0.15)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-60px",
          left: "-60px",
          width: "240px",
          height: "240px",
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      />

      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "rgba(245,197,24,0.15)",
              border: "1px solid rgba(245,197,24,0.3)",
              borderRadius: "100px",
              padding: "6px 16px",
              marginBottom: "16px",
            }}
          >
            <div style={{ width: "8px", height: "8px", backgroundColor: "#f5c518", borderRadius: "50%" }} />
            <span style={{ color: "#f5c518", fontSize: "13px", fontWeight: 600 }}>Testimonials</span>
          </div>
          <h2
            style={{
              fontSize: "clamp(28px, 3.5vw, 42px)",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.2,
              marginBottom: "12px",
            }}
          >
            What Our <span style={{ color: "#f5c518" }}>Clients</span> Say
          </h2>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "16px", lineHeight: 1.6 }}>
            Real stories from satisfied homeowners across the UAE
          </p>
        </div>

        {/* Testimonial Card */}
        <div
          key={active}
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "24px",
            padding: "48px",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.5s ease, transform 0.5s ease",
            boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
            animation: "slideIn 0.4s ease",
          }}
          className="testimonial-card"
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "16px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <img
                src={t.avatar}
                alt={t.name}
                style={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "3px solid #f5c518",
                }}
              />
              <div>
                <div style={{ fontSize: "18px", fontWeight: 700, color: "#1a1a1a" }}>{t.name}</div>
                <div style={{ fontSize: "14px", color: "#888", marginTop: "2px" }}>{t.role}</div>
                <div
                  style={{
                    display: "inline-block",
                    backgroundColor: "rgba(26,58,143,0.08)",
                    color: "#1a3a8f",
                    fontSize: "12px",
                    fontWeight: 600,
                    padding: "3px 10px",
                    borderRadius: "100px",
                    marginTop: "6px",
                  }}
                >
                  {t.project}
                </div>
              </div>
            </div>

            {/* Stars */}
            <div style={{ display: "flex", gap: "4px" }}>
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} size={18} fill="#f5c518" color="#f5c518" />
              ))}
            </div>
          </div>

          {/* Quote */}
          <div style={{ position: "relative", marginTop: "28px" }}>
            <Quote
              size={40}
              color="rgba(26,58,143,0.1)"
              style={{ position: "absolute", top: -8, left: -4 }}
            />
            <p
              style={{
                fontSize: "16px",
                color: "#444",
                lineHeight: 1.8,
                paddingLeft: "40px",
                fontStyle: "italic",
              }}
            >
              "{t.text}"
            </p>
          </div>
        </div>

        {/* Controls */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            marginTop: "36px",
          }}
        >
          <button
            onClick={prev}
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              border: "2px solid rgba(255,255,255,0.4)",
              backgroundColor: "transparent",
              color: "#ffffff",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.15)";
              (e.currentTarget as HTMLElement).style.borderColor = "#ffffff";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.4)";
            }}
          >
            <ChevronLeft size={20} />
          </button>

          <div style={{ display: "flex", gap: "8px" }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                style={{
                  width: i === active ? "28px" : "10px",
                  height: "10px",
                  borderRadius: "100px",
                  border: "none",
                  backgroundColor: i === active ? "#f5c518" : "rgba(255,255,255,0.35)",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  padding: 0,
                }}
              />
            ))}
          </div>

          <button
            onClick={next}
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              border: "2px solid rgba(255,255,255,0.4)",
              backgroundColor: "transparent",
              color: "#ffffff",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.15)";
              (e.currentTarget as HTMLElement).style.borderColor = "#ffffff";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.4)";
            }}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @media (max-width: 640px) {
          .testimonial-card {
            padding: 28px 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
