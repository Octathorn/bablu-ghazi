import { useEffect, useRef, useState } from "react";
import { Wrench, Zap, Droplets, Wind, PaintBucket, Layers, ArrowRight } from "lucide-react";

const services = [
  {
    icon: <Wrench size={28} />,
    title: "General Repairs",
    desc: "From fixing doors and windows to furniture assembly, our skilled handymen handle all general home repairs quickly and efficiently.",
    color: "#1a3a8f",
    img: "https://images.unsplash.com/photo-1656708760863-46ef25a9981b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    icon: <Zap size={28} />,
    title: "Electrical Services",
    desc: "Licensed electricians for installations, wiring upgrades, panel replacements, lighting solutions, and electrical safety inspections.",
    color: "#f5c518",
    img: "https://images.unsplash.com/photo-1751486289947-4f5f5961b3aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    icon: <Droplets size={28} />,
    title: "Plumbing Solutions",
    desc: "Expert plumbers for leak repairs, pipe installations, drain cleaning, water heater services and complete bathroom renovations.",
    color: "#1a3a8f",
    img: "https://images.unsplash.com/photo-1766330977065-4458b54c6d1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    icon: <Wind size={28} />,
    title: "AC & HVAC",
    desc: "Professional air conditioning installation, maintenance, cleaning and repair. Keep your home comfortable year-round.",
    color: "#f5c518",
    img: "https://images.unsplash.com/photo-1545280405-f06710f1779d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    icon: <PaintBucket size={28} />,
    title: "Painting & Finishing",
    desc: "Interior and exterior painting services with premium paints. Transform your space with flawless finishes.",
    color: "#1a3a8f",
    img: "https://images.unsplash.com/photo-1751486403890-793880b12adb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    icon: <Layers size={28} />,
    title: "Flooring & Tiling",
    desc: "Expert installation of hardwood, laminate, vinyl, and tile flooring. Perfect results for kitchens, baths, and living spaces.",
    color: "#f5c518",
    img: "https://images.unsplash.com/photo-1761053133165-0f3acdaf1770?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
];

function ServiceCard({ service, index, visible }: { service: typeof services[0]; index: number; visible: boolean }) {
  const [hovered, setHovered] = useState(false);
  const isYellow = service.color === "#f5c518";

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: hovered ? "#1a3a8f" : "#ffffff",
        borderRadius: "20px",
        overflow: "hidden",
        border: "1px solid #e8eaf6",
        boxShadow: hovered ? "0 20px 50px rgba(26,58,143,0.25)" : "0 4px 20px rgba(0,0,0,0.06)",
        transition: "all 0.35s ease",
        transform: visible
          ? hovered
            ? "translateY(-8px)"
            : "translateY(0)"
          : "translateY(40px)",
        opacity: visible ? 1 : 0,
        transitionDelay: `${index * 80}ms`,
        cursor: "pointer",
      }}
    >
      {/* Image */}
      <div style={{ position: "relative", height: "180px", overflow: "hidden" }}>
        <img
          src={service.img}
          alt={service.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.5s ease",
            transform: hovered ? "scale(1.08)" : "scale(1)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: hovered
              ? "rgba(26,58,143,0.5)"
              : "rgba(0,0,0,0.15)",
            transition: "all 0.35s",
          }}
        />
        {/* Icon */}
        <div
          style={{
            position: "absolute",
            bottom: "-22px",
            left: "24px",
            width: "48px",
            height: "48px",
            backgroundColor: service.color,
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: service.color === "#f5c518" ? "#1a1a1a" : "#f5c518",
            boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
            border: "3px solid #ffffff",
          }}
        >
          {service.icon}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "36px 24px 24px" }}>
        <h3
          style={{
            fontSize: "18px",
            fontWeight: 700,
            color: hovered ? "#ffffff" : "#1a1a1a",
            marginBottom: "10px",
            transition: "color 0.35s",
          }}
        >
          {service.title}
        </h3>
        <p
          style={{
            fontSize: "14px",
            color: hovered ? "rgba(255,255,255,0.8)" : "#666",
            lineHeight: 1.7,
            marginBottom: "20px",
            transition: "color 0.35s",
          }}
        >
          {service.desc}
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            color: hovered ? "#f5c518" : "#1a3a8f",
            fontSize: "14px",
            fontWeight: 600,
            transition: "color 0.35s",
          }}
        >
          Learn More <ArrowRight size={16} />
        </div>
      </div>
    </div>
  );
}

export function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
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
            <span style={{ color: "#1a3a8f", fontSize: "13px", fontWeight: 600 }}>Our Services</span>
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
            Comprehensive <span style={{ color: "#1a3a8f" }}>Home Services</span>
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "#666",
              maxWidth: "520px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            From plumbing to electrical, painting to flooring — we offer a full suite of
            home maintenance services tailored to your needs.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "28px",
          }}
        >
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} visible={visible} />
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            style={{
              backgroundColor: "#f5c518",
              color: "#1a1a1a",
              padding: "14px 36px",
              borderRadius: "8px",
              border: "none",
              fontSize: "15px",
              fontWeight: 700,
              cursor: "pointer",
              fontFamily: "'Poppins', sans-serif",
              transition: "all 0.25s",
              boxShadow: "0 4px 20px rgba(245,197,24,0.4)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "#e5b500";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "#f5c518";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            Request a Service Quote →
          </button>
        </div>
      </div>
    </section>
  );
}
