import { useEffect, useRef, useState } from "react";
import { Play, Award, Users, Clock, CheckCircle } from "lucide-react";

const highlights = [
  {
    icon: <Award size={24} />,
    title: "15+ Years",
    subtitle: "Industry Experience",
  },
  {
    icon: <Users size={24} />,
    title: "5000+",
    subtitle: "Happy Customers",
  },
  {
    icon: <CheckCircle size={24} />,
    title: "100%",
    subtitle: "Quality Guaranteed",
  },
  {
    icon: <Clock size={24} />,
    title: "24/7",
    subtitle: "Emergency Support",
  },
];

export function VideoShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [visible, setVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          // Auto-play when visible
          if (videoRef.current) {
            videoRef.current.play().catch(() => {
              // Auto-play blocked, that's okay
            });
          }
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <section
      ref={ref}
      style={{
        position: "relative",
        backgroundColor: "#0a0e1a",
        padding: "100px 24px",
        fontFamily: "'Poppins', sans-serif",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 2 }}>
        {/* Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "60px",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s ease",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "rgba(245,197,24,0.12)",
              border: "1px solid rgba(245,197,24,0.25)",
              borderRadius: "100px",
              padding: "6px 16px",
              marginBottom: "16px",
            }}
          >
            <div style={{ width: "8px", height: "8px", backgroundColor: "#f5c518", borderRadius: "50%" }} />
            <span style={{ color: "#f5c518", fontSize: "13px", fontWeight: 600 }}>Why Choose Us</span>
          </div>
          <h2
            style={{
              fontSize: "clamp(28px, 3.5vw, 42px)",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.2,
              marginBottom: "16px",
            }}
          >
            Expert Home <span style={{ color: "#f5c518" }}>Maintenance</span> & Repair Services
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "rgba(255,255,255,0.7)",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Watch how our professional team delivers exceptional service with precision, quality, and care.
          </p>
        </div>

        {/* Video Container */}
        <div
          style={{
            position: "relative",
            borderRadius: "24px",
            overflow: "hidden",
            boxShadow: "0 20px 80px rgba(0,0,0,0.5)",
            opacity: visible ? 1 : 0,
            transform: visible ? "scale(1)" : "scale(0.95)",
            transition: "all 0.9s ease 0.2s",
          }}
        >
          {/* Video Element */}
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: "100%",
              height: "auto",
              minHeight: "400px",
              maxHeight: "600px",
              objectFit: "cover",
              display: "block",
            }}
            poster="https://images.unsplash.com/photo-1581578731548-c64695cc6952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
          >
            {/* Royalty-free video from Pexels */}
            <source
              src="https://videos.pexels.com/video-files/4611087/4611087-uhd_2560_1440_25fps.mp4"
              type="video/mp4"
            />
            {/* Fallback video */}
            <source
              src="https://videos.pexels.com/video-files/5725960/5725960-uhd_2560_1440_30fps.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          {/* Video Overlay Gradient */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to top, rgba(10,14,26,0.8), transparent 40%, transparent 60%, rgba(10,14,26,0.5))",
              pointerEvents: "none",
            }}
          />

          {/* Play/Pause Button */}
          <button
            onClick={togglePlay}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: isPlaying ? "rgba(26,58,143,0.9)" : "rgba(245,197,24,0.95)",
              border: "none",
              borderRadius: "50%",
              width: "80px",
              height: "80px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.3s ease",
              opacity: isPlaying ? 0 : 1,
              boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
            }}
            className="play-button"
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translate(-50%, -50%) scale(1.1)";
              (e.currentTarget as HTMLElement).style.backgroundColor = "#f5c518";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translate(-50%, -50%) scale(1)";
              (e.currentTarget as HTMLElement).style.backgroundColor = isPlaying
                ? "rgba(26,58,143,0.9)"
                : "rgba(245,197,24,0.95)";
            }}
          >
            <Play size={32} color={isPlaying ? "#f5c518" : "#1a3a8f"} fill={isPlaying ? "#f5c518" : "#1a3a8f"} />
          </button>

          {/* Bottom Info Bar */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              padding: "32px",
              background: "linear-gradient(to top, rgba(26,58,143,0.95), transparent)",
              backdropFilter: "blur(12px)",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "24px",
              }}
              className="video-stats"
            >
              {highlights.map((item, i) => (
                <div
                  key={item.title}
                  style={{
                    textAlign: "center",
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(20px)",
                    transition: `all 0.6s ease ${0.5 + i * 0.1}s`,
                  }}
                >
                  <div
                    style={{
                      color: "#f5c518",
                      marginBottom: "8px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {item.icon}
                  </div>
                  <div style={{ fontSize: "20px", fontWeight: 800, color: "#ffffff", marginBottom: "4px" }}>
                    {item.title}
                  </div>
                  <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.7)", fontWeight: 500 }}>
                    {item.subtitle}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Below Video */}
        <div
          style={{
            textAlign: "center",
            marginTop: "50px",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s ease 0.6s",
          }}
        >
          <a
            href="tel:+971582494328"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              backgroundColor: "#f5c518",
              color: "#1a1a1a",
              padding: "16px 36px",
              borderRadius: "12px",
              fontSize: "16px",
              fontWeight: 700,
              textDecoration: "none",
              transition: "all 0.3s ease",
              boxShadow: "0 8px 32px rgba(245,197,24,0.4)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(245,197,24,0.5)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(245,197,24,0.4)";
            }}
          >
            📞 Call Now: +971582494328
          </a>
        </div>
      </div>

      {/* Background Pattern */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.03,
          backgroundImage:
            "radial-gradient(circle at 2px 2px, rgba(245,197,24,0.4) 1px, transparent 0)",
          backgroundSize: "48px 48px",
          pointerEvents: "none",
        }}
      />

      <style>{`
        .play-button:hover {
          opacity: 1 !important;
        }
        .video-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        @media (max-width: 900px) {
          .video-stats {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 20px;
          }
        }
        @media (max-width: 500px) {
          .video-stats {
            grid-template-columns: 1fr !important;
            gap: 16px;
          }
        }
      `}</style>
    </section>
  );
}
