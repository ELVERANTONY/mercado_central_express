import { useState, useEffect } from "react";
import HeroSection from "./sections/HeroSection";
import KitBienestarSection from "./sections/KitBienestarSection";
import KitBellezaSection from "./sections/KitBellezaSection";
import KitCocinaSection from "./sections/KitCocinaSection";
import FooterSection, { StickyCTA } from "./sections/FooterSection";
import { FadeInUp } from "./components/Animations";
import { Heart } from "lucide-react";
import GiftRain from "./components/GiftRain";
import mceLogo from "./assets/logo-MCE.png";

// Definición de temas globales
const THEMES = {
  purple: {
    gradient: "linear-gradient(90deg, #9333ea 0%, #ec4899 100%)",
    color: "#9333ea"
  },
  pink: {
    gradient: "linear-gradient(90deg, #db2777 0%, #ec4899 100%)",
    color: "#db2777"
  },
  turquoise: {
    gradient: "linear-gradient(90deg, #0891b2 0%, #06b6d4 100%)",
    color: "#0891b2"
  },
  amber: {
    gradient: "linear-gradient(90deg, #d97706 0%, #fbbf24 100%)",
  }
};

// Separador visual entre secciones
function SectionDivider({ label, emoji = "💕", gradient = "linear-gradient(90deg, #9333ea 0%, #ec4899 50%, #9333ea 100%)" }) {
  return (
    <FadeInUp>
      <div
        style={{
          background: gradient,
          padding: "14px 20px",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
        }}
      >
        <span style={{ fontSize: "1rem" }}>{emoji}</span>
        <p
          style={{
            color: "#fff",
            fontWeight: 800,
            fontSize: "0.85rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          {label}
        </p>
        <span style={{ fontSize: "1rem" }}>{emoji}</span>
      </div>
    </FadeInUp>
  );
}

// Header dinámico (No siempre visible, se queda arriba)
function DynamicHeader({ theme = "purple" }) {
  const gradient = THEMES[theme]?.gradient || THEMES.purple.gradient;

  return (
    <div
      style={{
        width: "100%",
        background: gradient,
        transition: "background 0.8s ease-in-out",
        padding: "20px 16px", // Más ancho/alto como el footer
        textAlign: "center",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        position: "relative",
        zIndex: 10
      }}
    >
      <div
        className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-14"
        style={{
          color: "#fff",
          fontWeight: 800,
          fontSize: "0.85rem",
          letterSpacing: "0.08em",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <img
            src={mceLogo}
            alt="MCE Logo"
            style={{ height: 26, filter: "brightness(0) invert(1)" }}
          />
          <span style={{ fontSize: "0.7rem", opacity: 0.95, letterSpacing: "0.15em" }}>
            MERCADO CENTRAL EXPRESS
          </span>
        </div>

        <div className="hidden md:block" style={{ width: 1, height: 16, background: "rgba(255,255,255,0.3)", margin: "0 4px" }} />

        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Heart size={14} fill="white" />
          <span style={{ fontSize: "0.8rem" }}>DÍA DE LA MADRE</span>
          <Heart size={14} fill="white" />
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [activeTheme, setActiveTheme] = useState("purple");

  useEffect(() => {
    const sections = ["hero", "kit-bienestar", "kit-belleza", "kit-cocina"];
    
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px", 
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.id === "hero") setActiveTheme("purple");
          if (entry.target.id === "kit-bienestar") setActiveTheme("pink");
          if (entry.target.id === "kit-belleza") setActiveTheme("turquoise");
          if (entry.target.id === "kit-cocina") setActiveTheme("amber");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ position: "relative", overflowX: "hidden" }}>
      <GiftRain />
      
      {/* Header que se queda arriba y no es sticky */}
      <DynamicHeader theme={activeTheme} />

      {/* ── Sección 1: Hero ── */}
      <HeroSection />

      {/* ── Divisor ── */}
      <SectionDivider 
        label="Kit de Bienestar para Mamá" 
        emoji="💖" 
        gradient="linear-gradient(90deg, #db2777 0%, #ec4899 50%, #db2777 100%)" 
      />

      {/* ── Sección 2: Kit de Bienestar ── */}
      <KitBienestarSection />

      {/* ── Divisor ── */}
      <SectionDivider 
        label="Kit de Belleza para Mamá" 
        emoji="✨" 
        gradient="linear-gradient(90deg, #06b6d4 0%, #3b82f6 50%, #06b6d4 100%)" 
      />

      {/* ── Sección 3: Kit de Belleza ── */}
      <KitBellezaSection />

      {/* ── Divisor ── */}
      <SectionDivider 
        label="Combo de Cocina para Mamá" 
        emoji="🍳" 
        gradient="linear-gradient(90deg, #f59e0b 0%, #ea580c 50%, #f59e0b 100%)" 
      />

      {/* ── Sección 4: Combo Cocina ── */}
      <KitCocinaSection />

      {/* ── Footer / Cierre ── */}
      <FooterSection />

      {/* ── Sticky CTA Bar (fixed bottom) ── */}
      <StickyCTA 
        gradient={THEMES[activeTheme]?.gradient} 
        theme={activeTheme}
      />
    </div>
  );
}
