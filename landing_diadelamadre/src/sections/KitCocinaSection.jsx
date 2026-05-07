import { motion } from "framer-motion";
import { Heart, CheckCircle2, Shield, Star, Zap, ThumbsUp } from "lucide-react";
import WhatsAppButton from "../components/WhatsAppButton";
import { FadeInUp, ScaleIn } from "../components/Animations";
import { KITS } from "../constants/config";
import imgProcesadora from "../assets/product_procesador_electrico.png";
import imgMolino from "../assets/product_molino_electrico.png";
import imgMomCocina from "../assets/cocina_mom.png";

const kit = KITS.cocina;
const BADGE_ICONS = { Shield, Star, Zap, ThumbsUp };

export default function KitCocinaSection() {
  return (
    <section
      id="kit-cocina"
      className="bg-cocina"
      style={{ padding: "48px 20px", position: "relative", overflow: "hidden" }}
    >
      {/* Decorative blobs */}
      <div
        style={{
          position: "absolute",
          top: -40,
          right: -40,
          width: 220,
          height: 220,
          background: "radial-gradient(circle, rgba(245,158,11,0.12) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -40,
          left: -40,
          width: 200,
          height: 200,
          background: "radial-gradient(circle, rgba(236,72,153,0.1) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 700, margin: "0 auto" }}>
        {/* Header */}
        <FadeInUp>
          <div style={{ textAlign: "center", marginBottom: 12 }}>
            <span
              style={{
                background: "linear-gradient(135deg, #7c3aed, #ec4899)",
                color: "#fff",
                fontWeight: 800,
                fontSize: "0.8rem",
                letterSpacing: "0.08em",
                padding: "6px 18px",
                borderRadius: 999,
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <Heart size={13} fill="white" /> COMBO PERFECTO <Heart size={13} fill="white" />
            </span>
          </div>
        </FadeInUp>

        <FadeInUp delay={0.1}>
          <p
            style={{
              color: "#6b21a8",
              fontWeight: 800,
              fontSize: "clamp(1.4rem, 5vw, 2.2rem)",
              textAlign: "center",
              lineHeight: 1.15,
            }}
          >
            Para una
          </p>
          <p
            className="font-dancing"
            style={{
              background: "linear-gradient(135deg, #ec4899, #be185d)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontSize: "clamp(2.2rem, 9vw, 3.8rem)",
              textAlign: "center",
              lineHeight: 1,
            }}
          >
            Mamá
          </p>
          <p
            style={{
              color: "#6b21a8",
              fontWeight: 800,
              fontSize: "clamp(1rem, 3.5vw, 1.5rem)",
              textAlign: "center",
              lineHeight: 1.2,
            }}
          >
            que cocina con{" "}
            <span
              className="font-dancing"
              style={{
                background: "linear-gradient(135deg, #ec4899, #f59e0b)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontSize: "clamp(1.4rem, 5vw, 2rem)",
              }}
            >
              amor
            </span>
          </p>
          <p
            style={{
              textAlign: "center",
              color: "#9333ea",
              fontSize: "clamp(0.78rem, 2.2vw, 0.9rem)",
              fontWeight: 600,
              marginTop: 6,
              fontStyle: "italic",
            }}
          >
            ❤️ Potencia, rapidez y practicidad para su día a día ❤️
          </p>
        </FadeInUp>

        {/* ── COMBO: Procesadora + Molino ── */}
        <FadeInUp delay={0.2}>
          <div
            className="glass-card-dark"
            style={{ 
              marginTop: 100, 
              padding: "24px 16px", 
              position: "relative" 
            }}
          >
            {/* Products 1 + 1 */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "stretch",
                justifyContent: "center",
                gap: 20,
              }}
            >
              {/* Procesadora */}
              <div style={{ flex: "1 1 240px", minWidth: 200, display: "flex", flexDirection: "column" }}>
                <div 
                  style={{ 
                    display: "flex", 
                    justifyContent: "center",
                    marginTop: -140,
                    marginBottom: 10,
                    zIndex: 10
                  }}
                >
                  <img 
                    src={imgProcesadora} 
                    alt="Procesadora Eléctrica" 
                    style={{ 
                      height: "clamp(180px, 38vw, 250px)", 
                      width: "auto",
                      objectFit: "contain", 
                      filter: "drop-shadow(0 15px 35px rgba(0,0,0,0.18))",
                    }} 
                  />
                </div>

                <p
                  style={{
                    color: "#6b21a8",
                    fontWeight: 800,
                    fontSize: "clamp(0.75rem, 2.2vw, 0.9rem)",
                    textTransform: "uppercase",
                    marginBottom: 12,
                    textAlign: "center"
                  }}
                >
                  ⭐ Procesadora Eléctrica
                </p>
                
                <div style={{ display: "flex", flexDirection: "column", gap: 6, flex: 1 }}>
                  {kit.procesadora.specs.map((s, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 6 }}>
                      <CheckCircle2 size={13} color="#a855f7" style={{ flexShrink: 0, marginTop: 2 }} />
                      <span style={{ fontSize: "clamp(0.62rem, 1.8vw, 0.72rem)", color: "#4b2d63", lineHeight: 1.4 }}>
                        {s}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Plus - Hide on small mobile if it breaks? No, keep it small */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  alignSelf: "center"
                }}
              >
                <div className="combo-plus" style={{ width: 35, height: 35, fontSize: "1.2rem", margin: "10px 0" }}>+</div>
              </div>

              {/* Molino */}
              <div style={{ flex: "1 1 240px", minWidth: 200, display: "flex", flexDirection: "column" }}>
                <div 
                  style={{ 
                    display: "flex", 
                    justifyContent: "center",
                    marginTop: -110,
                    marginBottom: 10,
                    zIndex: 10
                  }}
                >
                  <img 
                    src={imgMolino} 
                    alt="Molino Granos Secos" 
                    style={{ 
                      height: "clamp(140px, 30vw, 200px)", 
                      width: "auto",
                      objectFit: "contain", 
                      filter: "drop-shadow(0 15px 35px rgba(0,0,0,0.18))"
                    }} 
                  />
                </div>

                <p
                  style={{
                    color: "#6b21a8",
                    fontWeight: 800,
                    fontSize: "clamp(0.75rem, 2.2vw, 0.9rem)",
                    textTransform: "uppercase",
                    marginBottom: 12,
                    textAlign: "center"
                  }}
                >
                  ⭐ Molino Granos Secos
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: 6, flex: 1 }}>
                  {kit.molino.specs.map((s, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 6 }}>
                      <CheckCircle2 size={13} color="#a855f7" style={{ flexShrink: 0, marginTop: 2 }} />
                      <span style={{ fontSize: "clamp(0.62rem, 1.8vw, 0.72rem)", color: "#4b2d63", lineHeight: 1.4 }}>
                        {s}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeInUp>

        {/* ── Usos Comparativa ── */}
        <FadeInUp delay={0.35}>
          <div style={{ marginTop: 20 }}>
            <div style={{ textAlign: "center", marginBottom: 14 }}>
              <span
                style={{
                  background: "linear-gradient(90deg, #ec4899, #a855f7)",
                  color: "#fff",
                  fontWeight: 800,
                  fontSize: "0.75rem",
                  letterSpacing: "0.06em",
                  padding: "6px 16px",
                  borderRadius: 999,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <Heart size={12} fill="white" /> DOS ALIADOS INDISPENSABLES EN TU COCINA <Heart size={12} fill="white" />
              </span>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {/* Procesadora usos */}
              <div className="glass-card" style={{ padding: "16px 14px" }}>
                <p
                  style={{
                    color: "#ec4899",
                    fontWeight: 800,
                    fontSize: "clamp(0.65rem, 2vw, 0.78rem)",
                    textTransform: "uppercase",
                    marginBottom: 10,
                    textAlign: "center",
                  }}
                >
                  Procesadora Eléctrica
                </p>
                <div style={{ display: "flex", justifyContent: "space-around", gap: 4 }}>
                  {kit.procesadora.usos.map((uso, i) => (
                    <div key={i} style={{ textAlign: "center", flex: 1 }}>
                      <div
                        style={{
                          fontSize: "1.4rem",
                          marginBottom: 4,
                          background: "linear-gradient(135deg, #fce7f3, #ede9fe)",
                          borderRadius: 10,
                          padding: 6,
                        }}
                      >
                        {i === 0 ? "🥩" : i === 1 ? "🥗" : "🌶️"}
                      </div>
                      <p
                        style={{
                          fontSize: "clamp(0.55rem, 1.4vw, 0.62rem)",
                          color: "#6b21a8",
                          fontWeight: 600,
                          lineHeight: 1.2,
                        }}
                      >
                        {uso}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Molino usos */}
              <div className="glass-card" style={{ padding: "16px 14px" }}>
                <p
                  style={{
                    color: "#ec4899",
                    fontWeight: 800,
                    fontSize: "clamp(0.65rem, 2vw, 0.78rem)",
                    textTransform: "uppercase",
                    marginBottom: 10,
                    textAlign: "center",
                  }}
                >
                  Molino para Granos Secos
                </p>
                <div style={{ display: "flex", justifyContent: "space-around", gap: 4 }}>
                  {kit.molino.usos.map((uso, i) => (
                    <div key={i} style={{ textAlign: "center", flex: 1 }}>
                      <div
                        style={{
                          fontSize: "1.4rem",
                          marginBottom: 4,
                          background: "linear-gradient(135deg, #fce7f3, #ede9fe)",
                          borderRadius: 10,
                          padding: 6,
                        }}
                      >
                        {i === 0 ? "🌾" : i === 1 ? "🫘" : "🌿"}
                      </div>
                      <p
                        style={{
                          fontSize: "clamp(0.55rem, 1.4vw, 0.62rem)",
                          color: "#6b21a8",
                          fontWeight: 600,
                          lineHeight: 1.2,
                        }}
                      >
                        {uso}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeInUp>

        {/* ── Quality Badges ── */}
        <FadeInUp delay={0.45}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 10,
              marginTop: 16,
            }}
          >
            {kit.badges.map((b, i) => {
              const Icon = BADGE_ICONS[b.icono] || Shield;
              return (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    background: "rgba(255,255,255,0.75)",
                    borderRadius: 12,
                    padding: "10px 12px",
                    border: "1px solid rgba(168,85,247,0.15)",
                  }}
                >
                  <Icon size={18} color="#9333ea" strokeWidth={2} />
                  <span
                    style={{
                      fontSize: "clamp(0.6rem, 1.7vw, 0.72rem)",
                      color: "#4b2d63",
                      fontWeight: 600,
                      lineHeight: 1.3,
                    }}
                  >
                    {b.texto}
                  </span>
                </div>
              );
            })}
          </div>
        </FadeInUp>

        {/* ── Final CTA ── */}
        <FadeInUp delay={0.55}>
          <div style={{ marginTop: 80, display: "flex", justifyContent: "center", padding: "0 20px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 32, alignItems: "center", maxWidth: 680, width: "100%" }}>
              {/* Gift box + image */}
              <div style={{ textAlign: "center", position: "relative" }}>
                <div style={{ background: "linear-gradient(135deg, #fce7f3, #ede9fe)", borderRadius: 28, padding: "20px 16px", border: "2px solid rgba(168,85,247,0.25)", maxWidth: 320, width: "100%", position: "relative", boxShadow: "0 15px 35px rgba(124, 58, 237, 0.2)" }}>
                  <div style={{ position: "relative", marginBottom: 10, height: 280 }}>
                    <img src={imgMomCocina} alt="Mamá en la cocina" style={{ width: "100%", height: "100%", objectFit: "contain", position: "absolute", bottom: 0, left: 0, zIndex: 2, mixBlendMode: "multiply" }} />
                  </div>
                  <p style={{ fontSize: "0.85rem", fontWeight: 900, color: "#7c3aed", lineHeight: 1.3, textTransform: "uppercase", marginTop: 4 }}>
                    EL REGALO QUE ELLA MERECE ❤️
                  </p>
                </div>
              </div>

              {/* Offer + CTA */}
              <div style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: 300 }}>
                <div style={{ background: "linear-gradient(135deg, #fce7f3, #fff7ed)", borderRadius: 16, padding: "14px 18px", border: "1px solid rgba(245,158,11,0.25)" }}>
                  <p style={{ color: "#6b21a8", fontWeight: 800, fontSize: "0.95rem", marginBottom: 2 }}>¡OFERTA LIMITADA!</p>
                  <p style={{ color: "#4b2d63", fontSize: "0.8rem", lineHeight: 1.4 }}>Hazla feliz hoy, sorprenderla es fácil ❤️</p>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "stretch" }}>
                  <div className="price-badge-gold" style={{ padding: "12px 20px", minWidth: 120 }}>
                    <p style={{ color: "#78350f", fontSize: "0.7rem", fontWeight: 700 }}>POR SOLO</p>
                    <p style={{ color: "#1c0a00", fontSize: "2.4rem", fontWeight: 900, lineHeight: 1 }}>{kit.precio}</p>
                  </div>
                  <WhatsAppButton message={kit.whatsappMessage} label="PEDIR AHORA" size="md" pulse />
                </div>
              </div>
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
