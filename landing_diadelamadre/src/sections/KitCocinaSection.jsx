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
            <div className="flex flex-col md:flex-row items-center md:items-stretch justify-center gap-20 md:gap-20 mt-20 md:mt-0">
              {/* Procesadora */}
              <div style={{ flex: "1 1 240px", minWidth: 200, display: "flex", flexDirection: "column" }}>
                <div className="flex justify-center -mt-32 md:-mt-40 mb-4 z-10 relative">
                  <img 
                    src={imgProcesadora} 
                    alt="Procesadora Eléctrica" 
                    className="h-[250px] md:h-[320px] w-auto object-contain drop-shadow-2xl"
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
                
                <div style={{ display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
                  {kit.procesadora.specs.map((s, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                      <CheckCircle2 size={15} color="#a855f7" style={{ flexShrink: 0, marginTop: 2 }} />
                      <span style={{ fontSize: "clamp(0.7rem, 2vw, 0.82rem)", color: "#4b2d63", lineHeight: 1.4, fontWeight: 500 }}>
                        {s}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Plus */}
              <div className="flex items-center justify-center shrink-0 my-4 md:my-0">
                <div className="combo-plus w-10 h-10 text-xl flex items-center justify-center">+</div>
              </div>

              {/* Molino */}
              <div style={{ flex: "1 1 240px", minWidth: 200, display: "flex", flexDirection: "column" }}>
                <div className="flex justify-center -mt-28 md:-mt-36 mb-4 z-10 relative">
                  <img 
                    src={imgMolino} 
                    alt="Molino Granos Secos" 
                    className="h-[220px] md:h-[280px] w-auto object-contain drop-shadow-2xl"
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
          <div className="mt-8 md:mt-10 px-2">
            <div className="text-center mb-6">
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-white font-extrabold text-[0.7rem] md:text-xs tracking-wider px-4 py-2 rounded-full inline-flex items-center gap-2">
                <Heart size={12} fill="white" /> DOS ALIADOS INDISPENSABLES EN TU COCINA <Heart size={12} fill="white" />
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
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

        <FadeInUp delay={0.55}>
          <div className="mt-16 md:mt-24 flex justify-center px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-32 items-center max-w-[680px] w-full">
              {/* Gift box + image */}
              <div className="flex justify-center">
                <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-[32px] p-6 border-2 border-purple-200/50 w-full max-w-[320px] relative shadow-xl">
                  <div className="relative mb-4 h-[240px] md:h-[280px]">
                    <img src={imgMomCocina} alt="Mamá en la cocina" className="w-full h-full object-contain absolute bottom-0 left-0 z-10 mix-blend-multiply" />
                  </div>
                  <p className="text-xs md:text-sm font-black text-purple-600 leading-tight uppercase tracking-wider text-center">
                    EL REGALO QUE ELLA MERECE ❤️
                  </p>
                </div>
              </div>

              {/* Offer + CTA */}
              <div className="flex flex-col gap-6 items-center md:items-start text-center md:text-left">
                <div className="bg-gradient-to-br from-pink-50 to-orange-50 rounded-2xl p-5 border border-orange-200/30 w-full max-w-[300px]">
                  <p className="text-purple-900 font-extrabold text-lg mb-1">¡OFERTA LIMITADA!</p>
                  <p className="text-purple-800 text-sm opacity-90">Hazla feliz hoy, sorprenderla es fácil ❤️</p>
                </div>

                <div className="flex flex-col gap-4 w-full max-w-[300px]">
                  <div className="price-badge-gold py-4 px-6">
                    <p className="text-amber-900 text-xs font-bold uppercase tracking-widest mb-1">POR SOLO</p>
                    <p className="text-black text-5xl font-black leading-none">{kit.precio}</p>
                  </div>
                  <WhatsAppButton message={kit.whatsappMessage} label="PEDIR AHORA" size="lg" pulse />
                </div>
              </div>
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
