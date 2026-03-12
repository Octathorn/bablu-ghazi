import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 5000, suffix: "+", label: "Projects Completed", icon: "🏗️" },
  { value: 12, suffix: "+", label: "Years Experience", icon: "📅" },
  { value: 98, suffix: "%", label: "Client Satisfaction", icon: "⭐" },
  { value: 150, suffix: "+", label: "Expert Technicians", icon: "👷" },
];

function useCountUp(target: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function StatCard({ value, suffix, label, icon, start }: typeof stats[0] & { start: boolean }) {
  const count = useCountUp(value, 2000, start);
  return (
    <div
      style={{
        textAlign: "center",
        padding: "32px 20px",
        flex: 1,
        minWidth: "160px",
      }}
    >
      <div style={{ fontSize: "36px", marginBottom: "8px" }}>{icon}</div>
      <div
        style={{
          fontSize: "clamp(36px, 4vw, 52px)",
          fontWeight: 800,
          color: "#1a3a8f",
          lineHeight: 1,
          marginBottom: "8px",
        }}
      >
        {count.toLocaleString()}{suffix}
      </div>
      <div
        style={{
          fontSize: "15px",
          color: "#555",
          fontWeight: 500,
        }}
      >
        {label}
      </div>
    </div>
  );
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      style={{
        backgroundColor: "#ffffff",
        padding: "0 24px 60px",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          backgroundColor: "#f8f9ff",
          borderRadius: "20px",
          border: "1px solid #e8eaf6",
          boxShadow: "0 4px 30px rgba(26,58,143,0.08)",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          padding: "10px 0",
        }}
      >
        {stats.map((stat, i) => (
          <StatCard key={i} {...stat} start={visible} />
        ))}
      </div>
    </section>
  );
}
