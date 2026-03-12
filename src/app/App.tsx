import { Phone, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Stats } from "./components/Stats";
import { About } from "./components/About";
import { VideoShowcase } from "./components/VideoShowcase";
import { Services } from "./components/Services";
import { Gallery } from "./components/Gallery";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", overflowX: "hidden" }}>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <VideoShowcase />
      <Services />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />

      {/* Floating Call Button */}
      

      {/* Back to Top */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "24px",
            right: "24px",
            zIndex: 9999,
            backgroundColor: "#1a3a8f",
            color: "#ffffff",
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            border: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 20px rgba(26,58,143,0.4)",
            cursor: "pointer",
            transition: "all 0.25s",
            animation: "fadeInUp 0.3s ease",
          }}
          title="Back to Top"
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = "#f5c518";
            (e.currentTarget as HTMLElement).style.color = "#1a1a1a";
            (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = "#1a3a8f";
            (e.currentTarget as HTMLElement).style.color = "#ffffff";
            (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
          }}
        >
          <ArrowUp size={20} strokeWidth={2.5} />
        </button>
      )}

      {/* WhatsApp Floating Badge */}
      <a
        href="https://wa.me/971582494328"
        target="_blank"
        rel="noopener noreferrer"
        title="Chat on WhatsApp"
        style={{
          position: "fixed",
          bottom: "90px",
          right: "24px",
          zIndex: 9999,
          backgroundColor: "#25D366",
          color: "#ffffff",
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 20px rgba(37,211,102,0.5)",
          textDecoration: "none",
          transition: "all 0.25s",
          animation: "waPulse 2.5s infinite",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.transform = "scale(1.12)";
          (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 30px rgba(37,211,102,0.65)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.transform = "scale(1)";
          (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(37,211,102,0.5)";
        }}
      >
        {/* WhatsApp SVG icon */}
        <svg viewBox="0 0 32 32" width="28" height="28" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 2C8.268 2 2 8.268 2 16c0 2.492.661 4.83 1.818 6.852L2 30l7.348-1.793A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6a11.55 11.55 0 0 1-5.89-1.607l-.422-.25-4.362 1.064 1.1-4.253-.276-.437A11.56 11.56 0 0 1 4.4 16C4.4 9.593 9.593 4.4 16 4.4S27.6 9.593 27.6 16 22.407 27.6 16 27.6zm6.338-8.683c-.347-.174-2.055-1.013-2.374-1.129-.319-.116-.551-.174-.783.174-.232.347-.9 1.129-1.103 1.362-.203.232-.406.26-.753.087-.347-.174-1.464-.54-2.788-1.72-1.03-.92-1.726-2.055-1.929-2.402-.203-.347-.022-.535.152-.708.157-.156.347-.406.521-.609.174-.203.232-.347.347-.579.116-.232.058-.434-.029-.608-.087-.174-.783-1.887-1.073-2.584-.283-.678-.57-.586-.783-.597l-.667-.011a1.28 1.28 0 0 0-.927.434c-.319.347-1.217 1.189-1.217 2.9s1.246 3.364 1.42 3.596c.174.232 2.452 3.742 5.941 5.249.83.358 1.478.572 1.983.732.833.265 1.591.228 2.19.138.668-.1 2.055-.84 2.346-1.651.29-.812.29-1.508.203-1.651-.086-.145-.319-.232-.666-.406z"/>
        </svg>
      </a>

      <style>{`
        @keyframes phoneRing {
          0%, 100% { transform: rotate(0deg); }
          5% { transform: rotate(15deg); }
          10% { transform: rotate(-15deg); }
          15% { transform: rotate(10deg); }
          20% { transform: rotate(-10deg); }
          25% { transform: rotate(0deg); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes waPulse {
          0%, 100% { box-shadow: 0 4px 20px rgba(37,211,102,0.5); }
          50% { box-shadow: 0 4px 32px rgba(37,211,102,0.85), 0 0 0 8px rgba(37,211,102,0.15); }
        }
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}