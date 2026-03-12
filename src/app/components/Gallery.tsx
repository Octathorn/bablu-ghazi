import { useEffect, useRef, useState } from "react";
import { Star, CheckCircle } from "lucide-react";

const galleryItems = [
  {
    img: "https://images.unsplash.com/photo-1672927936377-97d1be3976cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    title: "Modern Living Room",
    category: "Interior",
    rating: 4.9,
  },
  {
    img: "https://images.unsplash.com/photo-1736390800504-d3963b553aa3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    title: "Kitchen Renovation",
    category: "Renovation",
    rating: 4.8,
  },
  {
    img: "https://images.unsplash.com/photo-1766330977065-4458b54c6d1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    title: "Bathroom Remodel",
    category: "Plumbing",
    rating: 5.0,
  },
  {
    img: "https://images.unsplash.com/photo-1751486403890-793880b12adb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    title: "Interior Painting",
    category: "Painting",
    rating: 4.7,
  },
  {
    img: "https://images.unsplash.com/photo-1761053133165-0f3acdaf1770?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    title: "Flooring Install",
    category: "Flooring",
    rating: 4.9,
  },
  {
    img: "https://images.unsplash.com/photo-1756016865217-bac7c13c3238?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    title: "Home Exterior",
    category: "Exterior",
    rating: 4.8,
  },
];

function GalleryCard({ item, index }: { item: typeof galleryItems[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        borderRadius: "24px",
        overflow: "hidden",
        cursor: "pointer",
        minWidth: "340px",
        height: "480px",
        border: "4px solid #f5c518",
        animation: `slideIn 0.6s ease ${index * 0.15}s both`,
        transition: "transform 0.4s ease",
        transform: hovered ? "translateY(-8px)" : "translateY(0)",
        boxShadow: hovered 
          ? "0 20px 60px rgba(245,197,24,0.3)" 
          : "0 8px 30px rgba(0,0,0,0.15)",
      }}
      className="gallery-card-animate"
    >
      {/* Background Image */}
      <img
        src={item.img}
        alt={item.title}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "transform 0.5s ease",
          transform: hovered ? "scale(1.1)" : "scale(1)",
        }}
      />

      {/* Gradient Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(26,58,143,0.9) 0%, transparent 50%)",
        }}
      />

      {/* Rating Badge - Top Left */}
      <div
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          backgroundColor: "#1a3a8f",
          borderRadius: "12px",
          padding: "8px 16px",
          display: "flex",
          alignItems: "center",
          gap: "6px",
          boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
        }}
      >
        <Star size={16} fill="#f5c518" color="#f5c518" />
        <span style={{ color: "#ffffff", fontWeight: 700, fontSize: "16px" }}>
          {item.rating}
        </span>
        <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px" }}>
          Rating
        </span>
      </div>

      {/* Bottom Info Card */}
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          left: "20px",
          right: "20px",
          backgroundColor: "#ffffff",
          borderRadius: "16px",
          padding: "16px 20px",
          display: "flex",
          alignItems: "center",
          gap: "12px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
          transform: hovered ? "translateY(-5px)" : "translateY(0)",
          transition: "transform 0.3s ease",
        }}
      >
        <div
          style={{
            width: "44px",
            height: "44px",
            backgroundColor: "#f5c518",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <CheckCircle size={24} color="#1a3a8f" strokeWidth={2.5} />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: "18px", fontWeight: 700, color: "#1a3a8f", marginBottom: "2px" }}>
            {item.title}
          </div>
          <div style={{ fontSize: "13px", color: "#666", fontWeight: 500 }}>
            {item.category} Project
          </div>
        </div>
      </div>
    </div>
  );
}

export function Gallery() {
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
      id="gallery"
      ref={ref}
      style={{
        backgroundColor: "#f8f9fc",
        padding: "90px 0",
        fontFamily: "'Poppins', sans-serif",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
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
            <span style={{ color: "#1a3a8f", fontSize: "13px", fontWeight: 600 }}>Our Work</span>
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
            Recent <span style={{ color: "#1a3a8f" }}>Projects</span> Gallery
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
            Browse our portfolio of completed projects. Every job is a testament to our
            commitment to quality and craftsmanship.
          </p>
        </div>
      </div>

      {/* Scrolling Gallery Container */}
      <div style={{ position: "relative" }}>
        {/* Projects Completed Badge - Floating */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 10,
            backgroundColor: "#ffffff",
            borderRadius: "20px",
            padding: "20px 28px",
            display: "flex",
            alignItems: "center",
            gap: "16px",
            boxShadow: "0 12px 48px rgba(0,0,0,0.15)",
            animation: "floatBadge 3s ease-in-out infinite",
          }}
          className="floating-badge"
        >
          <div
            style={{
              width: "52px",
              height: "52px",
              backgroundColor: "#f5c518",
              borderRadius: "14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "26px",
            }}
          >
            🏠
          </div>
          <div>
            <div style={{ fontSize: "24px", fontWeight: 800, color: "#1a3a8f", lineHeight: 1.2 }}>
              5,000+
            </div>
            <div style={{ fontSize: "13px", color: "#666", fontWeight: 600 }}>
              Projects Completed
            </div>
          </div>
        </div>

        {/* Auto-scrolling Row - Left to Right */}
        <div
          style={{
            display: "flex",
            gap: "24px",
            animation: "scrollLeft 35s linear infinite",
            width: "fit-content",
          }}
          className="scroll-row"
        >
          {[...galleryItems, ...galleryItems, ...galleryItems].map((item, i) => (
            <GalleryCard key={`row1-${i}`} item={item} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from { 
            opacity: 0; 
            transform: translateY(30px) scale(0.95); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0) scale(1); 
          }
        }

        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes floatBadge {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -55%) scale(1.05); }
        }

        .scroll-row:hover {
          animation-play-state: paused;
        }

        .gallery-card-animate:hover {
          z-index: 10;
        }

        @media (max-width: 768px) {
          .floating-badge {
            position: relative !important;
            top: auto !important;
            left: auto !important;
            transform: none !important;
            margin: 30px auto !important;
            max-width: 300px;
          }
        }
      `}</style>
    </section>
  );
}