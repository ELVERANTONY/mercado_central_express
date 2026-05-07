import HeroSection from "./sections/HeroSection";
import KitBienestarSection from "./sections/KitBienestarSection";
import KitBellezaSection from "./sections/KitBellezaSection";
import KitCocinaSection from "./sections/KitCocinaSection";
import FooterSection, { StickyCTA } from "./sections/FooterSection";
import { FadeInUp } from "./components/Animations";
import { Heart } from "lucide-react";
import GiftRain from "./components/GiftRain";

// Separador visual entre secciones
function SectionDivider({ label, emoji = "💕" }) {
  return (
    <FadeInUp>
      <div
        style={{
          background: "linear-gradient(90deg, #9333ea 0%, #ec4899 50%, #9333ea 100%)",
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

export default function App() {
  return (
    <div style={{ position: "relative", overflowX: "hidden" }}>
      <GiftRain />
      {/* ── Sección 1: Hero (Detalles del Kit Bienestar 74) ── */}
      <HeroSection />

      {/* ── Divisor ── */}
      <SectionDivider label="Kit de Bienestar para Mamá" emoji="💜" />

      {/* ── Sección 2: Kit de Bienestar (74) ── */}
      <KitBienestarSection />

      {/* ── Divisor ── */}
      <SectionDivider label="Kit de Belleza para Mamá" emoji="✨" />

      {/* ── Sección 3: Kit de Belleza (48) ── */}
      <KitBellezaSection />

      {/* ── Divisor ── */}
      <SectionDivider label="Combo de Cocina para Mamá" emoji="🍳" />

      {/* ── Sección 4: Combo Cocina (120) ── */}
      <KitCocinaSection />

      {/* ── Footer / Cierre ── */}
      <FooterSection />

      {/* ── Sticky CTA Bar (fixed bottom) ── */}
      <StickyCTA />
    </div>
  );
}
